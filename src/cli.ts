#!/usr/bin/env node
import { Command } from 'commander';
import pino from 'pino';
import { ConfigManager } from './core/config.js';
import { failure, printResult, success } from './core/output.js';
import { getManifest, listManifest } from './core/manifest.js';
import { registerAuthCommands, registerWhoamiCommand, type GlobalOptions } from './auth/commands.js';
import { registerCompanyCommands } from './domains/company/commands.js';
import { registerPermissionCommands } from './domains/permission/commands.js';
import { BmallCliError } from './core/errors.js';
import { registerCartCommands } from './domains/cart/commands.js';
import { registerMidOrderCommands } from './domains/mid-order/commands.js';
import { registerNewStoreOrderCommands } from './domains/new-store-order/commands.js';
import { registerOrderCommands } from './domains/order/commands.js';
import { registerPendingOrderCommands } from './domains/pending-order/commands.js';
import { registerPickupCommands } from './domains/pickup/commands.js';
import { registerProductCommands } from './domains/product/commands.js';
import { registerStockCommands } from './domains/stock/commands.js';
import { registerSupplyPresaleCommands } from './domains/supply-presale/commands.js';
import { registerExportCommands } from './domains/export/index.js';
import { registerJobCommands } from './domains/job/index.js';
import { registerOpsCommands } from './domains/ops/index.js';
import { registerAgentCommands } from './domains/agent/commands.js';
import { BmallHttpClient } from './core/http.js';
import { SessionStore } from './auth/session.js';

export type OutputFn = (payload: unknown) => void;

export function jsonOutput(payload: unknown): void {
  if (isEnvelope(payload)) {
    process.stdout.write(`${JSON.stringify(payload, null, 2)}\n`);
    return;
  }
  process.stdout.write(`${JSON.stringify({ ok: true, data: payload }, null, 2)}\n`);
}

function isEnvelope(payload: unknown): payload is { ok: boolean; requestId?: string } {
  if (!payload || typeof payload !== 'object') return false;
  const record = payload as Record<string, unknown>;
  return typeof record.ok === 'boolean' && ('data' in record || 'error' in record || 'requestId' in record);
}

export function registerWorkerBCommands(program: Command, getGlobals: () => GlobalOptions, output: OutputFn = jsonOutput): void {
  registerProductCommands(program, getGlobals, output);
  registerStockCommands(program, getGlobals, output);
  registerCartCommands(program, getGlobals, output);
  registerOrderCommands(program, getGlobals, output);
  registerPendingOrderCommands(program, output, buildApiClient(getGlobals), () => getGlobals().configHome);
  registerMidOrderCommands(program, getGlobals, output);
  registerSupplyPresaleCommands(program, getGlobals, output);
  registerPickupCommands(program, getGlobals, output);
  registerNewStoreOrderCommands(program, getGlobals, output);
}

function buildApiClient(getGlobals: () => GlobalOptions) {
  return {
    request: async (method: string, path: string, body?: unknown) => {
      const globals = getGlobals();
      const resolved = await new ConfigManager(globals.configHome).resolve(globals);
      const bundle = await new SessionStore(undefined, globals.configHome).require(resolved.profile);
      const client = new BmallHttpClient(resolved.baseUrl, bundle);
      const response = await client.send({
        method,
        path,
        ...(method.toUpperCase() === 'GET'
          ? { query: body as Record<string, string | number | boolean | undefined> }
          : { body: body ?? {} }),
        auth: { injectAuthToBody: method.toUpperCase() !== 'GET', injectAuthToQuery: method.toUpperCase() === 'GET' },
      });
      return success({ ...resolved, requestId: response.requestId }, response.data, { source: 'api', durationMs: response.durationMs });
    },
  };
}

export function registerWorkerCCommands(program: Command, getGlobals: () => GlobalOptions, output: OutputFn = jsonOutput): void {
  const emit = async (payload: unknown): Promise<unknown> => {
    const resolved = await payload;
    output(resolved);
    return resolved;
  };
  const apiClient = buildApiClient(getGlobals);
  const ops = registerOpsCommands(program, output, apiClient);
  registerExportCommands(ops, apiClient, emit);
  registerJobCommands(ops, apiClient, undefined, emit, () => getGlobals().configHome);
}

export function createCli(): Command {
  const program = new Command();
  program
    .name('bmall')
    .description('Bmall CLI client')
    .version('0.1.0')
    .option('--profile <name>', 'profile name')
    .option('--env <name>', 'environment: prod, test, local, or custom')
    .option('--json', 'print JSON output')
    .option('--config-home <path>', 'override BMALL_CONFIG_HOME')
    .showHelpAfterError();
  const globals = (): GlobalOptions => program.opts<GlobalOptions>();

  program.command('version').description('Print CLI version').option('--json').action((opts) => {
    const globalOpts = globals();
    printResult(success({ profile: globalOpts.profile, env: globalOpts.env }, { version: '0.1.0', node: process.version }), globalOpts.json || opts.json);
  });

  program.command('doctor').description('Check Bmall CLI local setup').action(async () => {
    const opts = globals();
    const resolved = await new ConfigManager(opts.configHome).resolve(opts);
    printResult(
      success(resolved, {
        configHome: resolved.configHome,
        profile: resolved.profile,
        env: resolved.env,
        baseUrl: resolved.baseUrl,
        node: process.version
      }),
      opts.json
    );
  });

  const profile = program.command('profile').description('Profile commands');
  profile.command('list').description('List profiles').option('--json').action(async (cmdOpts) => {
    const opts = globals();
    const manager = new ConfigManager(opts.configHome);
    const config = await manager.read();
    printResult(success({ profile: config.activeProfile }, { activeProfile: config.activeProfile, profiles: Object.values(config.profiles), envs: config.envs }), opts.json || cmdOpts.json);
  });
  profile.command('use').description('Switch active profile').argument('<name>', 'profile name').option('--json').action(async (name, cmdOpts) => {
    const opts = globals();
    const data = await new ConfigManager(opts.configHome).useProfile(name);
    printResult(success({ profile: name, env: data.env }, data), opts.json || cmdOpts.json);
  });
  profile.command('set-env').description('Set custom base URL for an env').argument('<env>', 'env name').requiredOption('--base-url <url>', 'base API URL').option('--json').action(async (env, cmdOpts) => {
    const opts = globals();
    await new ConfigManager(opts.configHome).setEnv(env, cmdOpts.baseUrl);
    printResult(success({ env }, { env, baseUrl: cmdOpts.baseUrl }), opts.json || cmdOpts.json);
  });

  const manifest = program.command('manifest').description('Command manifest');
  manifest.command('list').description('List manifest entries').option('--json').action(async (cmdOpts) => {
    const opts = globals();
    printResult(success({ profile: opts.profile, env: opts.env }, listManifest()), opts.json || cmdOpts.json);
  });
  manifest.command('get').description('Get a manifest entry').argument('<name>', 'command name, e.g. auth.import-token').option('--json').action(async (name, cmdOpts) => {
    const opts = globals();
    const entry = getManifest(name);
    if (!entry) throw new BmallCliError('INPUT_ERROR', `Manifest entry not found: ${name}`);
    printResult(success({ profile: opts.profile, env: opts.env }, entry), opts.json || cmdOpts.json);
  });

  registerAuthCommands(program, globals);
  registerWhoamiCommand(program, globals);
  registerCompanyCommands(program, globals);
  registerPermissionCommands(program, globals);
  registerWorkerBCommands(program, globals);
  registerWorkerCCommands(program, globals);
  registerAgentCommands(program, jsonOutput);
  program.exitOverride();
  return program;
}

export async function run(argv = process.argv): Promise<void> {
  const logger = pino({ enabled: process.env.BMALL_DEBUG === '1' });
  const program = createCli();
  try {
    await program.parseAsync(argv);
  } catch (error) {
    logger.debug({ error }, 'command failed');
    const opts = program.opts<GlobalOptions>();
    printResult(failure({ profile: opts.profile, env: opts.env }, error), true);
    process.exitCode = 1;
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  void run();
}
