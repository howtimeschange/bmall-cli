import { Command } from 'commander';
import { readFileSync } from 'node:fs';
import { parseOrderDraft } from '../../schemas/order.js';
import { MidPresaleAdapter } from '../order/adapters/mid-presale.js';
import type { GlobalOptions } from '../../auth/commands.js';
import { authorizeWriteGate, auditOperation } from '../ops/safety.js';
import { callBmallApi, callBmallApiSequence, cleanOptionsBody, dryRunSequence, type DomainCommandDeps, type OutputFn } from '../common/api.js';

export function registerMidOrderCommands(
  program: Command,
  getGlobalsOrOutput: (() => GlobalOptions) | OutputFn,
  outputOrDeps?: OutputFn | DomainCommandDeps,
  deps: DomainCommandDeps = {},
): void {
  const getGlobals = typeof outputOrDeps === 'function' ? getGlobalsOrOutput as () => GlobalOptions : undefined;
  const output: OutputFn = typeof outputOrDeps === 'function' ? outputOrDeps : getGlobalsOrOutput as OutputFn;
  const commandDeps = typeof outputOrDeps === 'function' ? deps : (outputOrDeps as DomainCommandDeps | undefined) ?? {};
  const adapter = new MidPresaleAdapter();
  const cmd = program.command('mid-order').description('中短期订单命令');
  cmd.command('activity').requiredOption('--activity-id <activityId>').option('--json').action((opts) => callBmallApi(requireGlobals(getGlobals), output, commandDeps, adapter.endpoints.activity, cleanOptionsBody(opts)));
  cmd.command('companies').requiredOption('--activity-id <activityId>').option('--json').action((opts) => callBmallApi(requireGlobals(getGlobals), output, commandDeps, adapter.endpoints.companies, cleanOptionsBody(opts)));
  cmd.command('models').requiredOption('--activity-id <activityId>').option('--company-id <companyId>').option('--json').action((opts) => callBmallApi(requireGlobals(getGlobals), output, commandDeps, adapter.endpoints.models, cleanOptionsBody(opts)));
  cmd.command('rules').requiredOption('--activity-id <activityId>').requiredOption('--order-model-id <orderModelId>').option('--json').action((opts) => callBmallApi(requireGlobals(getGlobals), output, commandDeps, adapter.endpoints.rules, cleanOptionsBody(opts)));
  cmd.command('items').requiredOption('--activity-id <activityId>').option('--order-model-id <orderModelId>').option('--company-id <companyId>').option('--json').action((opts) => callBmallApi(requireGlobals(getGlobals), output, commandDeps, opts.orderModelId ? adapter.endpoints.itemsByRule : adapter.endpoints.itemsAll, cleanOptionsBody(opts)));
  cmd.command('rule-status').requiredOption('--file <file>').option('--json').action((opts) => callBmallApi(requireGlobals(getGlobals), output, commandDeps, adapter.endpoints.ruleStatus, JSON.parse(readFileSync(opts.file, 'utf8'))));
  cmd.command('validate').requiredOption('--file <file>').option('--json').action(async (opts) => {
    const draft = parseOrderDraft({ ...JSON.parse(readFileSync(opts.file, 'utf8')), orderType: adapter.type });
    output(await adapter.validate(await adapter.buildPlan(draft)));
  });
  cmd.command('submit').requiredOption('--file <file>').option('--dry-run').option('--confirm').option('--reason <reason>').option('--resume-waiting-order').option('--json').action(async (opts) => {
    const body = JSON.parse(readFileSync(opts.file, 'utf8')) as Record<string, unknown>;
    const steps = [
      ...(opts.resumeWaitingOrder ? [{ name: 'waitSubmitCheck', path: adapter.endpoints.waitSubmitCheck }] : []),
      { name: 'submitCheck', path: adapter.endpoints.validate },
      { name: 'submit', path: adapter.endpoints.submit },
    ];
    await authorizeWriteGate(opts, 'financial', {
      command: 'mid-order.submit',
      summary: `提交中短期订单，来源文件 ${String(opts.file)}。`,
    });
    if (opts.dryRun) {
      await auditOperation({ command: 'mid-order.submit', access: 'financial', args: body, configHome: requireGlobals(getGlobals).configHome }, 'dry-run');
      output(dryRunSequence('mid-order.submit', steps, body));
      return;
    }
    await callBmallApiSequence(requireGlobals(getGlobals), output, commandDeps, steps, body);
    await auditOperation({ command: 'mid-order.submit', access: 'financial', args: body, configHome: requireGlobals(getGlobals).configHome }, 'ok');
  });
  cmd.command('pickup-list').requiredOption('--presale-order-id <presaleOrderId>').option('--json').action((opts) => callBmallApi(requireGlobals(getGlobals), output, commandDeps, adapter.endpoints.pickupList, cleanOptionsBody(opts)));
  cmd.command('diagnose').requiredOption('--presale-order-id <presaleOrderId>').option('--json').action(async (opts) => output(await adapter.diagnose(opts)));
}

function requireGlobals(getGlobals?: () => GlobalOptions): GlobalOptions {
  if (!getGlobals) throw new Error('API-backed mid-order commands require CLI global options.');
  return getGlobals();
}
