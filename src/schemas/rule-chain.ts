import { z } from 'zod';

export const RulePhaseSchema = z.enum([
  'identity',
  'permission',
  'order-type',
  'activity',
  'company',
  'product-scope',
  'sku-spec',
  'quantity',
  'price',
  'stock',
  'promotion',
  'settlement',
  'audit',
  'fulfillment',
  'idempotency',
]);

export const RuleStatusSchema = z.enum(['unknown', 'pass', 'warning', 'blocked']);
export const RuleSeveritySchema = z.enum(['info', 'warning', 'error']);

export const RuleEvidenceSchema = z.object({
  source: z.enum(['api', 'schema', 'adapter', 'mock', 'operator']).default('adapter'),
  endpoint: z.string().optional(),
  requestKey: z.string().optional(),
  message: z.string().optional(),
});

export const RuleChainItemSchema = z.object({
  skuCode: z.string().optional(),
  quantity: z.number().optional(),
  requiredMultiple: z.number().optional(),
  message: z.string().optional(),
}).catchall(z.unknown());

export const RulePhaseResultSchema = z.object({
  phase: RulePhaseSchema,
  status: RuleStatusSchema,
  severity: RuleSeveritySchema,
  summary: z.string(),
  evidence: z.array(RuleEvidenceSchema).default([]),
  items: z.array(RuleChainItemSchema).default([]),
  recover: z.string().optional(),
});

export const RuleChainSchema = z.array(RulePhaseResultSchema);

export type RulePhase = z.infer<typeof RulePhaseSchema>;
export type RuleStatus = z.infer<typeof RuleStatusSchema>;
export type RuleSeverity = z.infer<typeof RuleSeveritySchema>;
export type RuleEvidence = z.infer<typeof RuleEvidenceSchema>;
export type RulePhaseResult = z.infer<typeof RulePhaseResultSchema>;
export type RuleChain = z.infer<typeof RuleChainSchema>;

export const RULE_PHASES: RulePhase[] = RulePhaseSchema.options;

const severityByStatus: Record<RuleStatus, RuleSeverity> = {
  unknown: 'info',
  pass: 'info',
  warning: 'warning',
  blocked: 'error',
};

export function makeRulePhase(input: {
  phase: RulePhase;
  status?: RuleStatus;
  summary?: string;
  evidence?: RuleEvidence[];
  items?: Array<Record<string, unknown>>;
  recover?: string;
}): RulePhaseResult {
  const status = input.status ?? 'unknown';
  return RulePhaseResultSchema.parse({
    phase: input.phase,
    status,
    severity: severityByStatus[status],
    summary: input.summary ?? defaultRuleSummary(input.phase, status),
    evidence: input.evidence ?? [],
    items: input.items ?? [],
    recover: input.recover,
  });
}

export function buildRuleChainSkeleton(overrides: Partial<Record<RulePhase, Partial<RulePhaseResult>>> = {}): RuleChain {
  return RULE_PHASES.map((phase) => {
    const override = overrides[phase] ?? {};
    return makeRulePhase({
      phase,
      status: override.status,
      summary: override.summary,
      evidence: override.evidence,
      items: override.items,
      recover: override.recover,
    });
  });
}

export function summarizeRuleChain(ruleChain: RuleChain): {
  status: RuleStatus;
  blockingIssues: RulePhaseResult[];
  warnings: RulePhaseResult[];
} {
  const blockingIssues = ruleChain.filter((phase) => phase.status === 'blocked');
  const warnings = ruleChain.filter((phase) => phase.status === 'warning');
  return {
    status: blockingIssues.length > 0 ? 'blocked' : warnings.length > 0 ? 'warning' : 'pass',
    blockingIssues,
    warnings,
  };
}

function defaultRuleSummary(phase: RulePhase, status: RuleStatus): string {
  const names: Record<RulePhase, string> = {
    identity: '身份上下文',
    permission: '权限检查',
    'order-type': '订单类型开放性',
    activity: '活动状态',
    company: '门店上下文',
    'product-scope': '商品范围',
    'sku-spec': 'SKU 和规格完整性',
    quantity: '数量规则',
    price: '价格规则',
    stock: '库存规则',
    promotion: '促销规则',
    settlement: '结算规则',
    audit: '审核规则',
    fulfillment: '履约规则',
    idempotency: '幂等提交',
  };
  const statusText: Record<RuleStatus, string> = {
    unknown: '待后端接口确认',
    pass: '通过',
    warning: '存在提醒',
    blocked: '阻断',
  };
  return `${names[phase]}${statusText[status]}`;
}
