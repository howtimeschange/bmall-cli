import { mkdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { describe, expect, it } from 'vitest';
import { planOrderDraft } from '../../src/domains/order/plan.js';
import { getOrderAdapter } from '../../src/domains/order/adapters/index.js';

const draft = {
  companyId: '20001',
  orderType: 'replenishment',
  items: [{ skuCode: 'SKU001', quantity: 12 }],
};

describe('order submit confirm gate', () => {
  it('blocks financial writes without confirm', async () => {
    const plan = await planOrderDraft(draft);
    const result = await getOrderAdapter('replenishment').submit(plan, {});
    expect(result.submitted).toBe(false);
    expect(result.status).toBe('blocked');
    expect(result.message).toContain('--confirm');
  });

  it('supports dry-run without confirm', async () => {
    const plan = await planOrderDraft(draft);
    const result = await getOrderAdapter('replenishment').submit(plan, { dryRun: true });
    expect(result.status).toBe('dry-run');
    expect(result.submitted).toBe(false);
  });

  it('does not submit offline even when confirmed', async () => {
    const plan = await planOrderDraft(draft);
    const result = await getOrderAdapter('replenishment').submit(plan, { confirm: true });
    expect(result.submitted).toBe(false);
    expect(result.status).toBe('unsupported');
    expect(result.message).toContain('API runtime');
  });

  it('audits dry-run submit attempts with redacted args', async () => {
    const configHome = await mkdir(join(tmpdir(), `bmall-order-audit-${Date.now()}`), { recursive: true });
    const plan = await planOrderDraft({ ...draft, tokenId: 'secret-token-123456' });
    const result = await getOrderAdapter('replenishment').submit(plan, { dryRun: true }, { profile: 'unit', env: 'test', configHome });
    const auditFile = join(configHome, 'audit', `${new Date().toISOString().slice(0, 10)}.jsonl`);
    const records = (await readFile(auditFile, 'utf8')).trim().split('\n').map((line) => JSON.parse(line));

    expect(result.status).toBe('dry-run');
    expect(records[0]).toMatchObject({ command: 'order.submit', access: 'financial', result: 'dry-run', profile: 'unit', env: 'test' });
    expect(JSON.stringify(records[0])).not.toContain('secret-token-123456');
  });
});
