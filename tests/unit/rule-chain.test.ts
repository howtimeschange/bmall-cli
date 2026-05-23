import { describe, expect, it } from 'vitest';
import { RULE_PHASES, buildRuleChainSkeleton, makeRulePhase, summarizeRuleChain } from '../../src/domains/order/rule-chain.js';

describe('rule chain skeleton', () => {
  it('contains the complete phase list', () => {
    const chain = buildRuleChainSkeleton();
    expect(chain.map((item) => item.phase)).toEqual(RULE_PHASES);
    expect(chain).toHaveLength(15);
  });

  it('maps blocked and warning statuses into summary buckets', () => {
    const chain = buildRuleChainSkeleton({
      quantity: { status: 'blocked', summary: '数量不足' },
      stock: { status: 'warning', summary: '库存接口待确认' },
    });
    const summary = summarizeRuleChain(chain);
    expect(summary.status).toBe('blocked');
    expect(summary.blockingIssues[0].phase).toBe('quantity');
    expect(summary.warnings[0].phase).toBe('stock');
  });

  it('creates normalized phase result', () => {
    expect(makeRulePhase({ phase: 'price', status: 'warning' })).toMatchObject({
      phase: 'price',
      status: 'warning',
      severity: 'warning',
    });
  });
});
