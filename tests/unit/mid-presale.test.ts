import { describe, expect, it, vi } from 'vitest';
import { Command } from 'commander';
import { mkdtemp, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { MidPresaleAdapter } from '../../src/domains/order/adapters/mid-presale.js';
import { registerMidOrderCommands } from '../../src/domains/mid-order/commands.js';
import type { BmallRequestOptions } from '../../src/core/http.js';

describe('mid presale adapter', () => {
  it('maps core endpoints and diagnose output', async () => {
    const adapter = new MidPresaleAdapter();
    expect(adapter.endpoints.ruleStatus).toBe('activity/mini/presaleActivity/calculateRuleStandard');
    expect(adapter.endpoints.submit).toBe('activity/presaleOrder/add');
    const diagnosis = await adapter.diagnose({ presaleOrderId: 'P001' });
    expect(diagnosis.orderType).toBe('mid-presale');
    expect(diagnosis.currentState).toHaveProperty('statusCode');
  });

  it('calls API for read commands and dry-runs guarded submit sequences', async () => {
    const calls: BmallRequestOptions[] = [];
    const outputs: unknown[] = [];
    const program = new Command().exitOverride();
    const client = { send: vi.fn(async (opts: BmallRequestOptions) => {
      calls.push(opts);
      return { data: { endpoint: opts.path, body: opts.body }, requestId: `req-${calls.length}`, durationMs: 1 };
    }) };
    registerMidOrderCommands(
      program,
      () => ({ profile: 'unit', env: 'local', configHome: '/tmp/bmall-cli-unit' }),
      (payload) => outputs.push(payload),
      { createClient: () => client },
    );

    await program.parseAsync(['node', 'bmall', 'mid-order', 'rules', '--activity-id', 'A001', '--order-model-id', 'M001']);
    expect(calls[0]).toMatchObject({ path: 'activity/mini/presaleActivity/rules/byOrderModel' });

    const dir = await mkdtemp(join(tmpdir(), 'bmall-mid-submit-'));
    const draft = join(dir, 'mid.json');
    await writeFile(draft, JSON.stringify({ companyId: 'C001', items: [{ skuCode: 'SKU001', quantity: 12 }] }));
    await program.parseAsync(['node', 'bmall', 'mid-order', 'submit', '--file', draft, '--dry-run']);
    expect(calls).toHaveLength(1);
    expect(outputs.at(-1)).toMatchObject({ ok: true, mode: 'dry-run', command: 'mid-order.submit' });
  });
});
