import { describe, expect, it, vi } from 'vitest';
import { Command } from 'commander';
import { SupplyPresaleAdapter } from '../../src/domains/order/adapters/supply-presale.js';
import { registerSupplyPresaleCommands } from '../../src/domains/supply-presale/commands.js';
import type { BmallRequestOptions } from '../../src/core/http.js';

describe('supply presale adapter', () => {
  it('maps add, validate, submit and cancel endpoints', () => {
    const adapter = new SupplyPresaleAdapter();
    expect(adapter.endpoints.add).toBe('activity/mini/supply/presale/order/save');
    expect(adapter.endpoints.validate).toBe('activity/mini/supply/presale/order/checkItems');
    expect(adapter.endpoints.submit).toBe('activity/mini/supply/presale/order/submit');
    expect(adapter.endpoints.cancel).toBe('activity/mini/supply/presale/order/cancel');
    expect(adapter.requiredPermissions().map((item) => item.funCode)).toContain('b2b:supply:presale:submit');
  });

  it('uses API calls for read paths and gates write paths', async () => {
    const calls: BmallRequestOptions[] = [];
    const outputs: unknown[] = [];
    const program = new Command().exitOverride();
    const client = { send: vi.fn(async (opts: BmallRequestOptions) => {
      calls.push(opts);
      return { data: { endpoint: opts.path }, requestId: `req-${calls.length}`, durationMs: 1 };
    }) };
    registerSupplyPresaleCommands(
      program,
      () => ({ profile: 'unit', env: 'local', configHome: '/tmp/bmall-cli-unit' }),
      (payload) => outputs.push(payload),
      { createClient: () => client },
    );

    await program.parseAsync(['node', 'bmall', 'supply-presale', 'cart', '--activity-id', 'A001', '--company-id', 'C001']);
    expect(calls[0]).toMatchObject({ path: 'activity/mini/supply/presale/order/query/waiting/order' });

    await expect(program.parseAsync(['node', 'bmall', 'supply-presale', 'add', '--activity-id', 'A001', '--sku-code', 'SKU001', '--qty', '12'])).rejects.toThrow(
      'WRITE_REQUIRES_DRY_RUN_OR_CONFIRM',
    );
    await program.parseAsync(['node', 'bmall', 'supply-presale', 'add', '--activity-id', 'A001', '--sku-code', 'SKU001', '--qty', '12', '--dry-run']);
    expect(calls).toHaveLength(1);
    expect(outputs.at(-1)).toMatchObject({ command: 'supply-presale.add', mode: 'dry-run' });
  });
});
