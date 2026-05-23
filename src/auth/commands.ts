import { Command } from 'commander';
import { ConfigManager } from '../core/config.js';
import { BmallHttpClient } from '../core/http.js';
import { printResult, success } from '../core/output.js';
import { SessionStore } from './session.js';
import { readTokenImport } from './token.js';
import { createBrowserLoginInfo, loginWithPassword, openBrowser, runBrowserLoginReceiver } from './login.js';
import { BmallCliError } from '../core/errors.js';
import { TokenBundleSchema, type TokenBundle } from './token-bundle.js';

export interface GlobalOptions {
  profile?: string;
  env?: string;
  json?: boolean;
  configHome?: string;
}

export async function whoami(baseUrl: string, bundle: TokenBundle): Promise<unknown> {
  const client = new BmallHttpClient(baseUrl, bundle);
  const response = await client.send({
    method: 'POST',
    path: 'manage/app/Common/GetUserInfo',
    body: {},
    auth: { injectAuthToBody: true }
  });
  return response.data;
}

export async function menuList(baseUrl: string, bundle: TokenBundle): Promise<unknown> {
  const client = new BmallHttpClient(baseUrl, bundle);
  const response = await client.send({
    method: 'POST',
    path: 'manage/app/menu/list',
    body: {
      roleCode: bundle.roleCode
    },
    auth: { injectAuthToBody: true }
  });
  return response.data;
}

export async function renewToken(baseUrl: string, bundle: TokenBundle): Promise<TokenBundle> {
  const client = new BmallHttpClient(baseUrl, bundle);
  try {
    const response = await client.send({
      method: 'POST',
      path: 'manage/app/token/renewal',
      body: {},
      auth: { injectAuthToBody: true }
    });
    return TokenBundleSchema.parse({ ...bundle, ...(typeof response.data === 'object' && response.data ? response.data : {}) });
  } catch (error) {
    if (error instanceof BmallCliError) {
      throw new BmallCliError(error.code, `Token renewal failed: ${error.message}`, {
        status: error.status,
        details: error.details,
        recover: error.recover ?? 'Check whether the current token is still valid, then run `bmall auth login` if renewal is rejected.'
      });
    }
    throw error;
  }
}

export function registerAuthCommands(program: Command, getGlobals: () => GlobalOptions): void {
  const auth = program.command('auth').description('Authentication commands');

  auth
    .command('import-token')
    .description('Import a Bmall token or token bundle')
    .option('--token <token>', 'tokenId string')
    .option('--bundle <json>', 'token bundle JSON string')
    .option('--from-file <path>', 'read token or token bundle from file')
    .option('--skip-verify', 'save without calling whoami')
    .action(async (opts) => {
      const globals = getGlobals();
      const config = new ConfigManager(globals.configHome);
      const resolved = await config.resolve(globals);
      const store = new SessionStore(undefined, globals.configHome);
      const bundle = await readTokenImport({ token: opts.token, bundle: opts.bundle, fromFile: opts.fromFile });
      let verified: unknown = undefined;
      if (!opts.skipVerify) verified = await whoami(resolved.baseUrl, bundle);
      await store.save(resolved.profile, bundle);
      printResult(success(resolved, { profile: resolved.profile, env: resolved.env, verified: Boolean(verified), bundle: publicBundle(bundle) }), globals.json);
    });

  auth
    .command('login')
    .description('Login with browser-assisted loopback flow or account/password')
    .option('--browser', 'start browser-assisted login')
    .option('--no-open', 'do not open system browser')
    .option('--account <account>', 'account/mobile for password login')
    .option('--password <password>', 'password for password login')
    .option('--skip-verify', 'save without calling whoami')
    .action(async (opts) => {
      const globals = getGlobals();
      const config = new ConfigManager(globals.configHome);
      const resolved = await config.resolve(globals);
      const store = new SessionStore(undefined, globals.configHome);
      let bundle: TokenBundle;
      let loginInfo: unknown;
      if (opts.browser) {
        const port = 49152 + Math.floor(Math.random() * 10000);
        const info = createBrowserLoginInfo(resolved.loginUrl, port);
        loginInfo = {
          callbackUrl: info.callbackUrl,
          loginUrl: info.loginUrl,
          consoleSnippet: info.consoleSnippet,
          bookmarklet: info.bookmarklet
        };
        printResult(success(resolved, loginInfo), globals.json);
        if (opts.open !== false) openBrowser(info.loginUrl);
        bundle = await runBrowserLoginReceiver(info);
      } else {
        if (!opts.account || !opts.password) {
          throw new BmallCliError('INPUT_ERROR', 'Use --browser or provide --account and --password.');
        }
        bundle = await loginWithPassword(resolved.baseUrl, opts.account, opts.password);
      }
      if (!opts.skipVerify) await whoami(resolved.baseUrl, bundle);
      await store.save(resolved.profile, bundle);
      printResult(success(resolved, { profile: resolved.profile, env: resolved.env, saved: true, bundle: publicBundle(bundle) }), globals.json);
    });

  auth
    .command('renew')
    .description('Renew the current token bundle')
    .action(async () => {
      const globals = getGlobals();
      const resolved = await new ConfigManager(globals.configHome).resolve(globals);
      const store = new SessionStore(undefined, globals.configHome);
      const current = await store.require(resolved.profile);
      const renewed = await renewToken(resolved.baseUrl, current);
      await store.save(resolved.profile, renewed);
      printResult(success(resolved, { profile: resolved.profile, renewed: true, bundle: publicBundle(renewed) }), globals.json);
    });

  auth
    .command('doctor')
    .description('Check local auth profile')
    .action(async () => {
      const globals = getGlobals();
      const resolved = await new ConfigManager(globals.configHome).resolve(globals);
      const bundle = await new SessionStore(undefined, globals.configHome).require(resolved.profile);
      let serverUser: unknown = undefined;
      try {
        serverUser = await whoami(resolved.baseUrl, bundle);
      } catch (error) {
        serverUser = { ok: false, error: error instanceof Error ? error.message : String(error) };
      }
      const menu = await readMenuDiagnostics(resolved.baseUrl, bundle);
      printResult(success(resolved, { hasToken: true, bundle: publicBundle(bundle), serverUser, ...menu }), globals.json);
    });

  auth
    .command('logout')
    .description('Delete saved credentials for the active profile')
    .action(async () => {
      const globals = getGlobals();
      const resolved = await new ConfigManager(globals.configHome).resolve(globals);
      await new SessionStore(undefined, globals.configHome).logout(resolved.profile);
      printResult(success(resolved, { loggedOut: true, profile: resolved.profile }), globals.json);
    });
}

export function registerWhoamiCommand(program: Command, getGlobals: () => GlobalOptions): void {
  program.command('whoami').description('Show current Bmall identity').action(async () => {
    const globals = getGlobals();
    const resolved = await new ConfigManager(globals.configHome).resolve(globals);
    const bundle = await new SessionStore(undefined, globals.configHome).require(resolved.profile);
    const data = await whoami(resolved.baseUrl, bundle);
    const menu = await readMenuDiagnostics(resolved.baseUrl, bundle);
    printResult(success(resolved, { bundle: publicBundle(bundle), serverUser: data, ...menu }), globals.json);
  });
}

function publicBundle(bundle: TokenBundle): Omit<TokenBundle, 'tokenId'> & { tokenId: string } {
  const parsed = TokenBundleSchema.parse(bundle);
  return { ...parsed, tokenId: `${parsed.tokenId.slice(0, 4)}...${parsed.tokenId.slice(-4)}` };
}

async function readMenuDiagnostics(baseUrl: string, bundle: TokenBundle): Promise<{ menuList?: unknown; menuListWarning?: string }> {
  try {
    return { menuList: await menuList(baseUrl, bundle) };
  } catch (error) {
    return { menuListWarning: error instanceof Error ? error.message : String(error) };
  }
}
