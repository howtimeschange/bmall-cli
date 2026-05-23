import { Command } from 'commander';
import { NewStoreAdapter } from '../order/adapters/new-store.js';
import type { GlobalOptions } from '../../auth/commands.js';
import { assertWriteGate, auditOperation } from '../ops/safety.js';
import { callBmallApi, callBmallApiSequence, cleanOptionsBody, dryRunSequence, mergeFileAndOptions, type DomainCommandDeps, type OutputFn } from '../common/api.js';

export function registerNewStoreOrderCommands(
  program: Command,
  getGlobalsOrOutput: (() => GlobalOptions) | OutputFn,
  outputOrDeps?: OutputFn | DomainCommandDeps,
  deps: DomainCommandDeps = {},
): void {
  const getGlobals = typeof outputOrDeps === 'function' ? getGlobalsOrOutput as () => GlobalOptions : undefined;
  const output: OutputFn = typeof outputOrDeps === 'function' ? outputOrDeps : getGlobalsOrOutput as OutputFn;
  const commandDeps = typeof outputOrDeps === 'function' ? deps : (outputOrDeps as DomainCommandDeps | undefined) ?? {};
  const adapter = new NewStoreAdapter();
  const cmd = program.command('new-store-order').description('新店订单命令');
  cmd.command('list').option('--status <status>').option('--company-id <companyId>').option('--json').action((opts) => callBmallApi(requireGlobals(getGlobals), output, commandDeps, adapter.endpoints.list, cleanOptionsBody(opts)));
  cmd.command('get').requiredOption('--new-store-order-id <newStoreOrderId>').option('--json').action((opts) => callBmallApi(requireGlobals(getGlobals), output, commandDeps, adapter.endpoints.detail, cleanOptionsBody(opts)));
  cmd.command('items').requiredOption('--new-store-order-id <newStoreOrderId>').option('--json').action((opts) => callBmallApi(requireGlobals(getGlobals), output, commandDeps, adapter.endpoints.items, cleanOptionsBody(opts)));
  cmd.command('confirm-plan').requiredOption('--new-store-order-id <newStoreOrderId>').option('--batch-no <batchNo>').option('--json').action((opts) => callBmallApiSequence(requireGlobals(getGlobals), output, commandDeps, [
    { name: 'checkPickupGoods', path: adapter.endpoints.checkPickupGoods },
    { name: 'confirmPlan', path: adapter.endpoints.confirmPlan },
  ], cleanOptionsBody(opts)));
  cmd.command('validate').option('--file <file>').option('--json').action((opts) => callBmallApi(requireGlobals(getGlobals), output, commandDeps, adapter.endpoints.validate, mergeFileAndOptions(opts)));
  cmd.command('submit').option('--file <file>').option('--dry-run').option('--confirm').option('--reason <reason>').option('--json').action(async (opts) => {
    assertWriteGate(opts, 'financial');
    const body = mergeFileAndOptions(opts);
    const steps = [
      { name: 'checkPickupGoods', path: adapter.endpoints.checkPickupGoods },
      { name: 'confirmPlan', path: adapter.endpoints.confirmPlan },
      { name: 'validate', path: adapter.endpoints.validate },
      { name: 'submit', path: adapter.endpoints.submit },
    ];
    if (opts.dryRun) {
      await auditOperation({ command: 'new-store-order.submit', access: 'financial', args: body, configHome: requireGlobals(getGlobals).configHome }, 'dry-run');
      output(dryRunSequence('new-store-order.submit', steps, body));
      return;
    }
    await callBmallApiSequence(requireGlobals(getGlobals), output, commandDeps, steps, body);
    await auditOperation({ command: 'new-store-order.submit', access: 'financial', args: body, configHome: requireGlobals(getGlobals).configHome }, 'ok');
  });
  cmd.command('relation-orders').requiredOption('--new-store-order-id <newStoreOrderId>').option('--json').action((opts) => callBmallApi(requireGlobals(getGlobals), output, commandDeps, adapter.endpoints.relationOrders, cleanOptionsBody(opts)));
  cmd.command('diagnose').requiredOption('--new-store-order-id <newStoreOrderId>').option('--json').action(async (opts) => output(await adapter.diagnose(opts)));
}

function requireGlobals(getGlobals?: () => GlobalOptions): GlobalOptions {
  if (!getGlobals) throw new Error('API-backed new-store-order commands require CLI global options.');
  return getGlobals();
}
