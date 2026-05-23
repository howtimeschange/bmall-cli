import { Command } from 'commander';
import { PickupAdapter } from '../order/adapters/pickup.js';
import type { GlobalOptions } from '../../auth/commands.js';
import { assertWriteGate, auditOperation } from '../ops/safety.js';
import { callBmallApi, callBmallApiSequence, cleanOptionsBody, dryRunSequence, mergeFileAndOptions, type DomainCommandDeps, type OutputFn } from '../common/api.js';

export function registerPickupCommands(
  program: Command,
  getGlobalsOrOutput: (() => GlobalOptions) | OutputFn,
  outputOrDeps?: OutputFn | DomainCommandDeps,
  deps: DomainCommandDeps = {},
): void {
  const getGlobals = typeof outputOrDeps === 'function' ? getGlobalsOrOutput as () => GlobalOptions : undefined;
  const output: OutputFn = typeof outputOrDeps === 'function' ? outputOrDeps : getGlobalsOrOutput as OutputFn;
  const commandDeps = typeof outputOrDeps === 'function' ? deps : (outputOrDeps as DomainCommandDeps | undefined) ?? {};
  const adapter = new PickupAdapter();
  const cmd = program.command('pickup').description('预售提货命令');
  cmd.command('list').option('--status <status>').option('--company-id <companyId>').option('--json').action((opts) => callBmallApi(requireGlobals(getGlobals), output, commandDeps, adapter.endpoints.list, cleanOptionsBody(opts)));
  cmd.command('get').requiredOption('--pickup-order-id <pickupOrderId>').option('--json').action((opts) => callBmallApi(requireGlobals(getGlobals), output, commandDeps, adapter.endpoints.detail, cleanOptionsBody(opts)));
  cmd.command('items').requiredOption('--pickup-order-id <pickupOrderId>').option('--go-pickup').option('--json').action((opts) => callBmallApi(requireGlobals(getGlobals), output, commandDeps, adapter.endpoints.items, cleanOptionsBody(opts)));
  cmd.command('related-presale').requiredOption('--pickup-order-id <pickupOrderId>').option('--json').action((opts) => callBmallApi(requireGlobals(getGlobals), output, commandDeps, adapter.endpoints.relatedPresale, cleanOptionsBody(opts)));
  cmd.command('validate').requiredOption('--pickup-order-id <pickupOrderId>').option('--file <file>').option('--json').action((opts) => callBmallApi(requireGlobals(getGlobals), output, commandDeps, adapter.endpoints.validate, mergeFileAndOptions(opts)));
  cmd.command('submit').requiredOption('--pickup-order-id <pickupOrderId>').option('--file <file>').option('--dry-run').option('--confirm').option('--reason <reason>').option('--json').action(async (opts) => {
    assertWriteGate(opts, 'financial');
    const body = mergeFileAndOptions(opts);
    const steps = [
      { name: 'validate', path: adapter.endpoints.validate },
      { name: 'submit', path: adapter.endpoints.submit },
    ];
    if (opts.dryRun) {
      await auditOperation({ command: 'pickup.submit', access: 'financial', args: body, configHome: requireGlobals(getGlobals).configHome }, 'dry-run');
      output(dryRunSequence('pickup.submit', steps, body));
      return;
    }
    await callBmallApiSequence(requireGlobals(getGlobals), output, commandDeps, steps, body);
    await auditOperation({ command: 'pickup.submit', access: 'financial', args: body, configHome: requireGlobals(getGlobals).configHome }, 'ok');
  });
  cmd.command('refuse').requiredOption('--pickup-order-id <pickupOrderId>').requiredOption('--reason <reason>').option('--dry-run').option('--confirm').option('--json').action(async (opts) => {
    assertWriteGate(opts, 'destructive');
    const body = cleanOptionsBody(opts);
    if (opts.dryRun) {
      await auditOperation({ command: 'pickup.refuse', access: 'destructive', args: body, configHome: requireGlobals(getGlobals).configHome }, 'dry-run');
      output(dryRunSequence('pickup.refuse', [{ name: 'refuse', path: adapter.endpoints.refuse }], body));
      return;
    }
    await callBmallApi(requireGlobals(getGlobals), output, commandDeps, adapter.endpoints.refuse, body);
    await auditOperation({ command: 'pickup.refuse', access: 'destructive', args: body, configHome: requireGlobals(getGlobals).configHome }, 'ok');
  });
  cmd.command('diagnose').requiredOption('--pickup-order-id <pickupOrderId>').option('--json').action(async (opts) => output(await adapter.diagnose(opts)));
}

function requireGlobals(getGlobals?: () => GlobalOptions): GlobalOptions {
  if (!getGlobals) throw new Error('API-backed pickup commands require CLI global options.');
  return getGlobals();
}
