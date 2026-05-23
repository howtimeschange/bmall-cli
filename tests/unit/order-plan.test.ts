import { describe, expect, it } from 'vitest';
import { formatOrderDraftErrors, parseOrderDraft } from '../../src/schemas/order.js';
import { planOrderDraft } from '../../src/domains/order/plan.js';
import { listOrderTypes } from '../../src/domains/order/flow-inspector.js';

describe('order draft schema and plan', () => {
  it('parses a replenishment draft and builds deterministic plan', async () => {
    const draft = parseOrderDraft({
      companyId: '20001',
      orderType: 'replenishment',
      items: [{ skuCode: 'SKU001', specId: 'SPEC001', quantity: 12, price: 199 }],
      couponIds: [],
      remark: 'AI assisted draft',
    });

    const plan = await planOrderDraft(draft);

    expect(plan.orderType).toBe('replenishment');
    expect(plan.submitEndpoint).toBe('b2b/order/new/itemDetail/confirmOrder/submit');
    expect(plan.items[0].amount).toBe(2388);
    expect(plan.idempotencyKey).toHaveLength(64);
  });

  it('returns line level schema errors', () => {
    const errors = formatOrderDraftErrors({ companyId: '', items: [{ skuCode: '', quantity: 0 }] });
    expect(errors.map((error) => error.path)).toContain('companyId');
    expect(errors.map((error) => error.path)).toContain('items.0.skuCode');
    expect(errors.map((error) => error.path)).toContain('items.0.quantity');
  });

  it('exposes all required manifest types with browser disabled', () => {
    const types = listOrderTypes();
    expect(types.map((entry) => entry.type)).toEqual(expect.arrayContaining([
      'replenishment',
      'multi-store-replenishment',
      'mid-presale',
      'supply-presale',
      'pickup',
      'new-store',
      'pending-review',
      'one-piece-pending',
      'live-presale',
      'direct-package',
      'intellect-ai-replenishment',
      'sales-repurchase',
    ]));
    expect(types.every((entry) => entry.browser === false)).toBe(true);
  });
});
