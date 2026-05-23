import { Command } from 'commander';
import { registerAdapterCommand } from '../order/commands.js';
import { assertWriteGate, unsupportedDryRun } from '../ops/safety.js';

export function registerPendingOrderCommands(program: Command, output: (payload: unknown) => void): void {
  const pending = registerAdapterCommand(program, 'pending-order', 'pending-review', output);
  pending.command('source-type').option('--order-no <orderNo>').option('--json').action((opts) => {
    output({
      command: 'pending-order.source-type',
      supported: false,
      orderNo: opts.orderNo ?? null,
      message: 'Local skeleton only; source type classification requires a backend API mapping.',
    });
  });
  pending.command('review').requiredOption('--order-no <orderNo>').option('--dry-run').option('--confirm').option('--reason <reason>').option('--json').action((opts) => {
    output(unsupportedDryRun('pending-order.review', 'write', opts));
  });
  pending.command('cancel').requiredOption('--order-no <orderNo>').option('--dry-run').option('--confirm').option('--reason <reason>').option('--json').action((opts) => {
    assertWriteGate(opts, 'destructive');
    output(unsupportedDryRun('pending-order.cancel', 'destructive', opts));
  });
}
