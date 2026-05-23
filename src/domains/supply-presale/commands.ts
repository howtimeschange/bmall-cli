import { Command } from 'commander';
import { SupplyPresaleAdapter } from '../order/adapters/supply-presale.js';
import type { GlobalOptions } from '../../auth/commands.js';
import { assertWriteGate, auditOperation } from '../ops/safety.js';
import { callBmallApi, callBmallApiSequence, cleanOptionsBody, dryRunSequence, type DomainCommandDeps, type OutputFn } from '../common/api.js';

export function registerSupplyPresaleCommands(
  program: Command,
  getGlobalsOrOutput: (() => GlobalOptions) | OutputFn,
  outputOrDeps?: OutputFn | DomainCommandDeps,
  deps: DomainCommandDeps = {},
): void {
  const getGlobals = typeof outputOrDeps === 'function' ? getGlobalsOrOutput as () => GlobalOptions : undefined;
  const output: OutputFn = typeof outputOrDeps === 'function' ? outputOrDeps : getGlobalsOrOutput as OutputFn;
  const commandDeps = typeof outputOrDeps === 'function' ? deps : (outputOrDeps as DomainCommandDeps | undefined) ?? {};
  const adapter = new SupplyPresaleAdapter();
  const cmd = program.command('supply-presale').description('柔供预售命令');
  cmd.command('activity').option('--activity-id <activityId>').option('--json').action((opts) => callBmallApi(requireGlobals(getGlobals), output, commandDeps, adapter.endpoints.activity, cleanOptionsBody(opts)));
  cmd.command('items').option('--activity-id <activityId>').option('--json').action((opts) => callBmallApi(requireGlobals(getGlobals), output, commandDeps, adapter.endpoints.items, cleanOptionsBody(opts)));
  cmd.command('cart').option('--activity-id <activityId>').option('--company-id <companyId>').option('--json').action((opts) => callBmallApi(requireGlobals(getGlobals), output, commandDeps, adapter.endpoints.cart, cleanOptionsBody(opts)));
  cmd.command('add').requiredOption('--activity-id <activityId>').requiredOption('--sku-code <skuCode>').requiredOption('--qty <qty>').option('--dry-run').option('--confirm').option('--reason <reason>').option('--json').action(async (opts) => {
    assertWriteGate(opts, 'write');
    const body = cleanOptionsBody(opts, { qty: Number(opts.qty) });
    if (opts.dryRun) {
      await auditOperation({ command: 'supply-presale.add', access: 'write', args: body, configHome: requireGlobals(getGlobals).configHome }, 'dry-run');
      output(dryRunSequence('supply-presale.add', [{ name: 'add', path: adapter.endpoints.add }], body));
      return;
    }
    await callBmallApi(requireGlobals(getGlobals), output, commandDeps, adapter.endpoints.add, body);
    await auditOperation({ command: 'supply-presale.add', access: 'write', args: body, configHome: requireGlobals(getGlobals).configHome }, 'ok');
  });
  cmd.command('validate').option('--activity-id <activityId>').option('--company-id <companyId>').option('--json').action((opts) => callBmallApiSequence(requireGlobals(getGlobals), output, commandDeps, [
    { name: 'checkItems', path: adapter.endpoints.validate },
    { name: 'canSubmitItems', path: adapter.endpoints.canSubmitItems },
    { name: 'applyMultiple', path: adapter.endpoints.applyMultiple },
  ], cleanOptionsBody(opts)));
  cmd.command('submit').option('--activity-id <activityId>').option('--company-id <companyId>').option('--dry-run').option('--confirm').option('--reason <reason>').option('--json').action(async (opts) => {
    assertWriteGate(opts, 'financial');
    const body = cleanOptionsBody(opts);
    const steps = [
      { name: 'checkItems', path: adapter.endpoints.validate },
      { name: 'canSubmitItems', path: adapter.endpoints.canSubmitItems },
      { name: 'submit', path: adapter.endpoints.submit },
    ];
    if (opts.dryRun) {
      await auditOperation({ command: 'supply-presale.submit', access: 'financial', args: body, configHome: requireGlobals(getGlobals).configHome }, 'dry-run');
      output(dryRunSequence('supply-presale.submit', steps, body));
      return;
    }
    await callBmallApiSequence(requireGlobals(getGlobals), output, commandDeps, steps, body);
    await auditOperation({ command: 'supply-presale.submit', access: 'financial', args: body, configHome: requireGlobals(getGlobals).configHome }, 'ok');
  });
  cmd.command('cancel').requiredOption('--order-id <orderId>').option('--dry-run').option('--confirm').option('--reason <reason>').option('--json').action(async (opts) => {
    assertWriteGate(opts, 'destructive');
    const body = cleanOptionsBody(opts);
    if (opts.dryRun) {
      await auditOperation({ command: 'supply-presale.cancel', access: 'destructive', args: body, configHome: requireGlobals(getGlobals).configHome }, 'dry-run');
      output(dryRunSequence('supply-presale.cancel', [{ name: 'cancel', path: adapter.endpoints.cancel }], body));
      return;
    }
    await callBmallApi(requireGlobals(getGlobals), output, commandDeps, adapter.endpoints.cancel, body);
    await auditOperation({ command: 'supply-presale.cancel', access: 'destructive', args: body, configHome: requireGlobals(getGlobals).configHome }, 'ok');
  });
  cmd.command('diagnose').requiredOption('--order-id <orderId>').option('--json').action(async (opts) => output(await adapter.diagnose(opts)));
}

function requireGlobals(getGlobals?: () => GlobalOptions): GlobalOptions {
  if (!getGlobals) throw new Error('API-backed supply-presale commands require CLI global options.');
  return getGlobals();
}
