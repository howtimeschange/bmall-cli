import { z } from 'zod';
import { RuleChainSchema } from './rule-chain.js';

export const BmallOrderTypeSchema = z.enum([
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
]);

export const OrderDraftItemSchema = z.object({
  itemId: z.string().optional(),
  itemCode: z.string().optional(),
  skcCode: z.string().optional(),
  skuCode: z.string().min(1, 'skuCode is required'),
  specId: z.string().optional(),
  quantity: z.number().int().positive('quantity must be a positive integer'),
  price: z.number().nonnegative().optional(),
});

export const OrderDraftSchema = z.object({
  companyId: z.string().min(1, 'companyId is required'),
  orderType: BmallOrderTypeSchema.default('replenishment'),
  activityId: z.string().nullable().optional(),
  orderModelId: z.string().nullable().optional(),
  orderRuleId: z.string().nullable().optional(),
  newStoreOrderId: z.string().nullable().optional(),
  pickupOrderId: z.string().nullable().optional(),
  items: z.array(OrderDraftItemSchema).min(1, 'items must contain at least one line'),
  addressId: z.string().nullable().optional(),
  invoiceId: z.string().nullable().optional(),
  financeCardId: z.string().nullable().optional(),
  couponIds: z.array(z.string()).default([]),
  remark: z.string().optional(),
  tokenId: z.string().optional(),
  source: z.enum(['file', 'cart', 'item-detail', 'offline', 'api']).default('file'),
}).strict();

export const OrderPlanSchema = z.object({
  orderType: BmallOrderTypeSchema,
  companyId: z.string(),
  mode: z.enum(['offline', 'api', 'dry-run']).default('offline'),
  submitSupported: z.boolean(),
  endpoint: z.string().optional(),
  submitEndpoint: z.string().optional(),
  idempotencyKey: z.string(),
  items: z.array(OrderDraftItemSchema.extend({
    lineNo: z.number().int().positive(),
    amount: z.number().nonnegative().default(0),
    status: z.enum(['planned', 'warning', 'blocked']).default('planned'),
    message: z.string().optional(),
  })),
  ruleChain: RuleChainSchema,
  warnings: z.array(z.string()).default([]),
});

export const OrderValidationReportSchema = z.object({
  valid: z.boolean(),
  orderType: BmallOrderTypeSchema,
  ruleChain: RuleChainSchema,
  blockingIssues: z.array(z.unknown()).default([]),
  warnings: z.array(z.unknown()).default([]),
});

export const OrderSubmitResultSchema = z.object({
  submitted: z.boolean(),
  orderType: BmallOrderTypeSchema,
  mode: z.enum(['offline', 'api', 'dry-run']),
  orderNo: z.string().nullable().default(null),
  endpoint: z.string().optional(),
  idempotencyKey: z.string(),
  status: z.enum(['submitted', 'dry-run', 'blocked', 'unsupported']),
  message: z.string(),
});

export type BmallOrderType = z.infer<typeof BmallOrderTypeSchema>;
export type OrderDraftItem = z.infer<typeof OrderDraftItemSchema>;
export type OrderDraft = z.infer<typeof OrderDraftSchema>;
export type OrderPlan = z.infer<typeof OrderPlanSchema>;
export type OrderValidationReport = z.infer<typeof OrderValidationReportSchema>;
export type OrderSubmitResult = z.infer<typeof OrderSubmitResultSchema>;

export function parseOrderDraft(input: unknown): OrderDraft {
  return OrderDraftSchema.parse(input);
}

export function formatOrderDraftErrors(input: unknown): Array<{ path: string; message: string }> {
  const result = OrderDraftSchema.safeParse(input);
  if (result.success) return [];
  return result.error.issues.map((issue) => ({
    path: issue.path.join('.') || '<root>',
    message: issue.message,
  }));
}
