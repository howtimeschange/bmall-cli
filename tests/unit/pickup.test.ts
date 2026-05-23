import { describe, expect, it, vi } from 'vitest';
import { Command } from 'commander';
import { PickupAdapter } from '../../src/domains/order/adapters/pickup.js';
import { registerPickupCommands } from '../../src/domains/pickup/commands.js';
import type { BmallRequestOptions } from '../../src/core/http.js';

describe('pickup adapter', () => {
  it('maps pickup endpoints and relation diagnosis', async () => {
    const adapter = new PickupAdapter();
    expect(adapter.endpoints.submit).toBe('activity/pickup/order/submit');
    expect(adapter.endpoints.refuse).toBe('activity/pickup/order/refuse');
    const diagnosis = await adapter.diagnose({ pickupOrderId: 'PK001' });
    expect(diagnosis.relation.pickupOrderIds).toEqual(['PK001']);
  });

  it('calls API for list and blocks destructive refuse without confirm', async () => {
    const calls: BmallRequestOptions[] = [];
    const program = new Command().exitOverride();
    const client = { send: vi.fn(async (opts: BmallRequestOptions) => {
      calls.push(opts);
      return { data: { endpoint: opts.path }, requestId: `req-${calls.length}`, durationMs: 1 };
    }) };
    registerPickupCommands(
      program,
      () => ({ profile: 'unit', env: 'local', configHome: '/tmp/bmall-cli-unit' }),
      () => undefined,
      { createClient: () => client },
    );

    await program.parseAsync(['node', 'bmall', 'pickup', 'list', '--status', 'wait']);
    expect(calls[0]).toMatchObject({ path: 'activity/pickup/order/list' });
    await expect(program.parseAsync(['node', 'bmall', 'pickup', 'refuse', '--pickup-order-id', 'PK001', '--reason', '客户拒绝'])).rejects.toThrow(
      'WRITE_REQUIRES_DRY_RUN_OR_CONFIRM',
    );
  });
});
