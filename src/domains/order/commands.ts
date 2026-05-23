import { Command } from 'commander';
import { readFileSync } from 'node:fs';
import { SessionStore } from '../../auth/session.js';
import type { GlobalOptions } from '../../auth/commands.js';
import { BmallCliError } from '../../core/errors.js';
import { ConfigManager } from '../../core/config.js';
import { BmallHttpClient, type BmallRequestOptions } from '../../core/http.js';
import { success } from '../../core/output.js';
import { BmallOrderTypeSchema, parseOrderDraft } from '../../schemas/order.js';
import { getOrderAdapter } from './adapters/index.js';
import { inspectOrderFlow, listOrderTypes } from './flow-inspector.js';
import { buildRuleChainSkeleton } from './rule-chain.js';
import { authorizeWriteGate, dryRunPlan } from '../ops/safety.js';

type OutputFn = (payload: unknown) => void;
type ClientLike = { send<T = unknown>(opts: BmallRequestOptions): Promise<{ data?: T; requestId: string; durationMs: number }> };

export interface OrderCommandDeps {
  createClient?: (baseUrl: string, token: Awaited<ReturnType<SessionStore['require']>>) => ClientLike;
}

const defaultOutput: OutputFn = (payload) => {
  process.stdout.write(`${JSON.stringify({ ok: true, data: payload }, null, 2)}\n`);
};

const orderEndpoints = {
  list: 'b2b/order/new/appOrderList',
  detail: 'b2b/sales/order/takeById',
  cancel: 'b2b/order/new/cancel',
  delivery: 'b2b/order/new/delivery/list',
  invoice: 'b2b/order/new/invoice/list',
};

export function registerOrderCommands(program: Command, getGlobalsOrOutput?: (() => GlobalOptions) | OutputFn, outputOrDeps?: OutputFn | OrderCommandDeps, deps: OrderCommandDeps = {}): void {
  const getGlobals: (() => GlobalOptions) | undefined = typeof outputOrDeps === 'function' ? getGlobalsOrOutput as () => GlobalOptions : undefined;
  const output: OutputFn = typeof outputOrDeps === 'function' ? outputOrDeps : (getGlobalsOrOutput as OutputFn | undefined) ?? defaultOutput;
  const commandDeps: OrderCommandDeps = typeof outputOrDeps === 'function' ? deps : (outputOrDeps as OrderCommandDeps | undefined) ?? {};
  const orderType = program.command('order-type').description('Manage order type manifest');
  orderType.command('list').option('--json').action(() => output(listOrderTypes()));
  orderType.command('get').requiredOption('--type <type>').option('--json').action((opts) => {
    output(listOrderTypes().find((entry) => entry.type === opts.type));
  });

  program
    .command('order-flow')
    .description('Inspect order flow adapter')
    .command('inspect')
    .requiredOption('--type <type>')
    .option('--json')
    .action((opts) => {
      output(inspectOrderFlow(BmallOrderTypeSchema.parse(opts.type)));
    });

  program
    .command('order-rule')
    .description('Explain rule chain skeleton')
    .command('explain')
    .requiredOption('--type <type>')
    .option('--json')
    .action((opts) => {
      const type = BmallOrderTypeSchema.parse(opts.type);
      output({ orderType: type, ruleChain: buildRuleChainSkeleton() });
    });

  const order = program.command('order').description('Generic order operations');
  order.command('plan').requiredOption('--file <file>').option('--json').action(async (opts) => {
    const draft = parseOrderDraft(JSON.parse(readFileSync(opts.file, 'utf8')));
    output(await getOrderAdapter(draft.orderType).buildPlan(draft));
  });
  order.command('validate').requiredOption('--file <file>').option('--type <type>').option('--json').action(async (opts) => {
    const draft = parseOrderDraft({ ...JSON.parse(readFileSync(opts.file, 'utf8')), orderType: opts.type ?? undefined });
    const adapter = getOrderAdapter(draft.orderType);
    const plan = await adapter.buildPlan(draft);
    output(await adapter.validate(plan));
  });
  order.command('submit').requiredOption('--file <file>').option('--type <type>').option('--confirm').option('--dry-run').option('--reason <reason>').option('--json').action(async (opts) => {
    const draft = parseOrderDraft({ ...JSON.parse(readFileSync(opts.file, 'utf8')), orderType: opts.type ?? undefined });
    const adapter = getOrderAdapter(draft.orderType);
    const plan = await adapter.buildPlan(draft);
    await authorizeWriteGate(opts, 'financial', {
      command: 'order.submit',
      summary: `提交 ${adapter.displayName}，公司 ${draft.companyId}，${draft.items.length} 行商品。`,
    });
    output(await adapter.submit(plan, { confirm: opts.confirm, dryRun: opts.dryRun, reason: opts.reason }));
  });
  order.command('list').option('--status <status>').option('--from <from>').option('--to <to>').option('--company-id <companyId>').option('--json').action(async (opts) => {
    await callCustomerOrderApi(requireGlobals(getGlobals), output, commandDeps, orderEndpoints.list, {
      status: opts.status,
      from: opts.from,
      to: opts.to,
      companyId: opts.companyId
    });
  });
  order.command('get').requiredOption('--order-no <orderNo>').option('--company-id <companyId>').option('--json').action(async (opts) => {
    await callCustomerOrderApi(requireGlobals(getGlobals), output, commandDeps, orderEndpoints.detail, {
      orderNo: opts.orderNo,
      companyId: opts.companyId
    });
  });
  order.command('cancel').requiredOption('--order-no <orderNo>').option('--confirm').option('--dry-run').option('--reason <reason>').option('--company-id <companyId>').option('--json').action(async (opts) => {
    const body = {
      orderNo: opts.orderNo,
      reason: opts.reason,
      companyId: opts.companyId
    };
    await authorizeWriteGate(opts, 'destructive', {
      command: 'order.cancel',
      summary: `取消订单 ${opts.orderNo}${opts.companyId ? `，公司 ${opts.companyId}` : ''}。`,
    });
    if (opts.dryRun) {
      output(dryRunPlan('order.cancel', 1, [{ method: 'POST', endpoint: orderEndpoints.cancel, body }]));
      return;
    }
    await callCustomerOrderApi(requireGlobals(getGlobals), output, commandDeps, orderEndpoints.cancel, {
      orderNo: opts.orderNo,
      reason: opts.reason,
      companyId: opts.companyId
    });
  });
  order.command('delivery').requiredOption('--order-no <orderNo>').option('--company-id <companyId>').option('--json').action(async (opts) => {
    await callCustomerOrderApi(requireGlobals(getGlobals), output, commandDeps, orderEndpoints.delivery, {
      orderNo: opts.orderNo,
      companyId: opts.companyId
    });
  });
  order.command('invoice').requiredOption('--order-no <orderNo>').option('--company-id <companyId>').option('--json').action(async (opts) => {
    await callCustomerOrderApi(requireGlobals(getGlobals), output, commandDeps, orderEndpoints.invoice, {
      orderNo: opts.orderNo,
      companyId: opts.companyId
    });
  });

  registerAdapterCommand(program, 'replenishment', 'replenishment', output);
  registerAdapterCommand(program, 'multi-store-order', 'multi-store-replenishment', output);
}

async function callCustomerOrderApi(globals: GlobalOptions, output: OutputFn, deps: OrderCommandDeps, path: string, body: Record<string, unknown>): Promise<void> {
  const resolved = await new ConfigManager(globals.configHome).resolve(globals);
  const bundle = await new SessionStore(undefined, globals.configHome).require(resolved.profile);
  const client = deps.createClient?.(resolved.baseUrl, bundle) ?? new BmallHttpClient(resolved.baseUrl, bundle);
  const response = await client.send({
    method: 'POST',
    path,
    body: withCompany(body, resolved.profileConfig.companyId),
    auth: { injectAuthToBody: true }
  });
  output(success({ ...resolved, requestId: response.requestId }, response.data, { source: 'api', durationMs: response.durationMs }));
}

function requireGlobals(getGlobals?: () => GlobalOptions): GlobalOptions {
  if (!getGlobals) {
    throw new BmallCliError('CONFIG_ERROR', 'Customer order API commands require CLI global options.');
  }
  return getGlobals();
}

function withCompany(body: Record<string, unknown>, defaultCompanyId?: string): Record<string, unknown> {
  const cleaned = Object.fromEntries(Object.entries(body).filter(([, value]) => value !== undefined && value !== ''));
  if (!cleaned.companyId && defaultCompanyId) cleaned.companyId = defaultCompanyId;
  return cleaned;
}

export function registerAdapterCommand(program: Command, commandName: string, type: string, output: OutputFn = defaultOutput): Command {
  const adapter = getOrderAdapter(BmallOrderTypeSchema.parse(type));
  const cmd = program.command(commandName).description(`${adapter.displayName} commands`);
  cmd.command('plan').requiredOption('--file <file>').option('--json').action(async (opts) => {
    const draft = parseOrderDraft({ ...JSON.parse(readFileSync(opts.file, 'utf8')), orderType: adapter.type });
    output(await adapter.buildPlan(draft));
  });
  cmd.command('validate').requiredOption('--file <file>').option('--json').action(async (opts) => {
    const draft = parseOrderDraft({ ...JSON.parse(readFileSync(opts.file, 'utf8')), orderType: adapter.type });
    const plan = await adapter.buildPlan(draft);
    output(await adapter.validate(plan));
  });
  cmd.command('submit').requiredOption('--file <file>').option('--confirm').option('--dry-run').option('--reason <reason>').option('--json').action(async (opts) => {
    const draft = parseOrderDraft({ ...JSON.parse(readFileSync(opts.file, 'utf8')), orderType: adapter.type });
    const plan = await adapter.buildPlan(draft);
    await authorizeWriteGate(opts, 'financial', {
      command: `${commandName}.submit`,
      summary: `提交 ${adapter.displayName}，公司 ${draft.companyId}，${draft.items.length} 行商品。`,
    });
    output(await adapter.submit(plan, { confirm: opts.confirm, dryRun: opts.dryRun, reason: opts.reason }));
  });
  cmd.command('diagnose').option('--order-no <orderNo>').option('--order-id <orderId>').option('--json').action(async (opts) => output(await adapter.diagnose(opts)));
  return cmd;
}
