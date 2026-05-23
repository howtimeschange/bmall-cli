import { describe, expect, it, vi } from 'vitest';
import { Command } from 'commander';
import { mkdtemp, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { NewStoreAdapter } from '../../src/domains/order/adapters/new-store.js';
import { registerNewStoreOrderCommands } from '../../src/domains/new-store-order/commands.js';
import type { BmallRequestOptions } from '../../src/core/http.js';

describe('new store adapter', () => {
  it('keeps confirm-plan and submit sequence endpoints explicit', () => {
    const adapter = new NewStoreAdapter();
    expect(adapter.endpoints.checkPickupGoods).toBe('b2b/new/store/order/checkPickupGoods');
    expect(adapter.endpoints.confirmPlan).toBe('b2b/new/store/order/orderConfirm');
    expect(adapter.endpoints.validate).toBe('b2b/new/store/order/orderPreCheck');
    expect(adapter.endpoints.submit).toBe('b2b/new/store/order/pick/b2bOrder/add');
  });

  it('executes confirm-plan sequence and dry-runs submit sequence', async () => {
    const calls: BmallRequestOptions[] = [];
    const outputs: unknown[] = [];
    const program = new Command().exitOverride();
    const client = { send: vi.fn(async (opts: BmallRequestOptions) => {
      calls.push(opts);
      return { data: { endpoint: opts.path }, requestId: `req-${calls.length}`, durationMs: 1 };
    }) };
    registerNewStoreOrderCommands(
      program,
      () => ({ profile: 'unit', env: 'local', configHome: '/tmp/bmall-cli-unit' }),
      (payload) => outputs.push(payload),
      { createClient: () => client },
    );

    await program.parseAsync(['node', 'bmall', 'new-store-order', 'confirm-plan', '--new-store-order-id', 'NS001']);
    expect(calls.map((call) => call.path)).toEqual(['b2b/new/store/order/checkPickupGoods', 'b2b/new/store/order/orderConfirm']);

    const dir = await mkdtemp(join(tmpdir(), 'bmall-new-store-submit-'));
    const draft = join(dir, 'new-store.json');
    await writeFile(draft, JSON.stringify({ newStoreOrderId: 'NS001', companyId: 'C001' }));
    await program.parseAsync(['node', 'bmall', 'new-store-order', 'submit', '--file', draft, '--dry-run']);
    expect(calls).toHaveLength(2);
    expect(outputs.at(-1)).toMatchObject({ command: 'new-store-order.submit', mode: 'dry-run' });
  });
});
