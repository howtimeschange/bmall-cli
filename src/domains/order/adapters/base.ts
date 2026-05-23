import crypto from 'node:crypto';
import type { BmallOrderType, OrderDraft, OrderPlan, OrderSubmitResult, OrderValidationReport } from '../../../schemas/order.js';
import { OrderPlanSchema, OrderSubmitResultSchema, OrderValidationReportSchema } from '../../../schemas/order.js';
import { writeAudit } from '../../../core/audit.js';
import { buildRuleChainSkeleton, summarizeRuleChain } from '../rule-chain.js';
import type { AdapterRuntime, DiagnoseInput, OrderDiagnosis, OrderFlowAdapter, PermissionRequirement, SubmitOptions } from '../types.js';

export const UNSUPPORTED_BY_API = 'UNSUPPORTED_BY_API';

export abstract class BaseOrderFlowAdapter implements OrderFlowAdapter {
  abstract type: BmallOrderType;
  abstract displayName: string;
  abstract endpoints: Record<string, string>;
  abstract requiredPermissions(): PermissionRequirement[];

  async buildPlan(draft: OrderDraft, runtime: AdapterRuntime = {}): Promise<OrderPlan> {
    const submitEndpoint = this.endpoints.submit;
    const mode = runtime.http && !runtime.offline ? 'api' : 'offline';
    return OrderPlanSchema.parse({
      orderType: this.type,
      companyId: draft.companyId,
      mode,
      submitSupported: Boolean(submitEndpoint),
      endpoint: this.endpoints.plan ?? this.endpoints.detail ?? this.endpoints.list,
      submitEndpoint,
      idempotencyKey: makeIdempotencyKey(this.type, draft),
      items: draft.items.map((item, index) => ({
        ...item,
        lineNo: index + 1,
        amount: (item.price ?? 0) * item.quantity,
        status: item.quantity > 0 ? 'planned' : 'blocked',
      })),
      ruleChain: buildRuleChainSkeleton({
        identity: { status: runtime.http ? 'pass' : 'unknown', summary: runtime.http ? '已配置 API 客户端' : '未配置 API 客户端，使用离线计划' },
        permission: { status: 'unknown', summary: '权限需由 Worker A 的 auth/core 注入后校验' },
        'order-type': { status: 'pass', summary: `${this.displayName} adapter 已注册` },
        quantity: { status: draft.items.every((item) => item.quantity > 0) ? 'pass' : 'blocked' },
        idempotency: { status: 'pass', summary: '已生成本地幂等 key' },
      }),
      warnings: runtime.http ? [] : ['offline mock plan: no API request was sent'],
    });
  }

  async validate(plan: OrderPlan): Promise<OrderValidationReport> {
    const summary = summarizeRuleChain(plan.ruleChain);
    return OrderValidationReportSchema.parse({
      valid: summary.blockingIssues.length === 0,
      orderType: this.type,
      ruleChain: plan.ruleChain,
      blockingIssues: summary.blockingIssues,
      warnings: summary.warnings,
    });
  }

  async submit(plan: OrderPlan, opts: SubmitOptions, runtime: AdapterRuntime = {}): Promise<OrderSubmitResult> {
    const auditArgs = { orderType: this.type, endpoint: plan.submitEndpoint, idempotencyKey: plan.idempotencyKey, reason: opts.reason, tokenId: plan.idempotencyKey };
    if (opts.dryRun) {
      const result = this.submitDryRun(plan);
      await this.auditSubmit(runtime, auditArgs, 'dry-run');
      return result;
    }
    if (!opts.confirm) {
      const result = OrderSubmitResultSchema.parse({
        submitted: false,
        orderType: this.type,
        mode: plan.mode,
        orderNo: null,
        endpoint: plan.submitEndpoint,
        idempotencyKey: plan.idempotencyKey,
        status: 'blocked',
        message: 'Financial write blocked: rerun with --confirm --reason after user authorization.',
      });
      await this.auditSubmit(runtime, auditArgs, 'error');
      return result;
    }
    if (!String(opts.reason ?? '').trim()) {
      const result = OrderSubmitResultSchema.parse({
        submitted: false,
        orderType: this.type,
        mode: plan.mode,
        orderNo: null,
        endpoint: plan.submitEndpoint,
        idempotencyKey: plan.idempotencyKey,
        status: 'blocked',
        message: 'Financial write blocked: --reason is required for user-authorized submit.',
      });
      await this.auditSubmit(runtime, auditArgs, 'error');
      return result;
    }
    if (!plan.submitSupported || !plan.submitEndpoint) {
      const result = OrderSubmitResultSchema.parse({
        submitted: false,
        orderType: this.type,
        mode: plan.mode,
        orderNo: null,
        endpoint: plan.submitEndpoint,
        idempotencyKey: plan.idempotencyKey,
        status: 'unsupported',
        message: UNSUPPORTED_BY_API,
      });
      await this.auditSubmit(runtime, auditArgs, 'error');
      return result;
    }
    if (runtime.http && !runtime.offline) {
      const data = await runtime.http.post(plan.submitEndpoint, { plan, reason: opts.reason, tokenId: plan.idempotencyKey });
      const result = OrderSubmitResultSchema.parse({
        submitted: true,
        orderType: this.type,
        mode: 'api',
        orderNo: extractOrderNo(data),
        endpoint: plan.submitEndpoint,
        idempotencyKey: plan.idempotencyKey,
        status: 'submitted',
        message: 'submitted by API',
      });
      await this.auditSubmit(runtime, auditArgs, 'ok', result.orderNo ?? undefined);
      return result;
    }
    const result = OrderSubmitResultSchema.parse({
      submitted: false,
      orderType: this.type,
      mode: 'offline',
      orderNo: null,
      endpoint: plan.submitEndpoint,
      idempotencyKey: plan.idempotencyKey,
      status: 'unsupported',
      message: 'Order submit requires API runtime; offline confirmed submit is blocked.',
    });
    await this.auditSubmit(runtime, auditArgs, 'error');
    return result;
  }

  async diagnose(input: DiagnoseInput): Promise<OrderDiagnosis> {
    const id = input.orderNo ?? input.orderId ?? input.presaleOrderId ?? input.pickupOrderId ?? input.newStoreOrderId ?? null;
    return {
      orderType: this.type,
      orderNo: id,
      relation: {
        sourceOrderNo: null,
        sourceOrderType: null,
        pickupOrderIds: input.pickupOrderId ? [input.pickupOrderId] : [],
        subOrderNos: [],
      },
      currentState: {
        statusCode: id ? 'UNKNOWN' : 'NO_ORDER_ID',
        statusName: id ? '待接口确认' : '未提供订单标识',
      },
      ruleChain: buildRuleChainSkeleton(),
      timeline: [],
      amount: {
        marketAmount: 0,
        orderAmount: 0,
        rebateAmount: 0,
        financeCardAmount: 0,
      },
      items: [],
      blockingIssues: [],
      warnings: [{ code: 'DIAGNOSE_SKELETON', message: '诊断骨架已输出，真实状态需 API 响应补齐' }],
      nextActions: [
        {
          command: `bmall ${this.type} validate --file draft.json --json`,
          reason: '使用订单草稿重新运行规则链校验',
        },
      ],
    };
  }

  protected submitDryRun(plan: OrderPlan): OrderSubmitResult {
    return OrderSubmitResultSchema.parse({
      submitted: false,
      orderType: this.type,
      mode: 'dry-run',
      orderNo: null,
      endpoint: plan.submitEndpoint,
      idempotencyKey: plan.idempotencyKey,
      status: 'dry-run',
      message: 'dry-run only; no API request was sent',
    });
  }

  private async auditSubmit(runtime: AdapterRuntime, args: unknown, result: 'ok' | 'error' | 'dry-run', requestId?: string): Promise<void> {
    await writeAudit(
      {
        profile: runtime.profile,
        env: runtime.env,
        command: 'order.submit',
        access: 'financial',
        args,
        requestId,
        result,
      },
      runtime.configHome,
    );
  }
}

export function makeIdempotencyKey(type: BmallOrderType, draft: OrderDraft): string {
  const stable = JSON.stringify({
    type,
    companyId: draft.companyId,
    activityId: draft.activityId ?? null,
    orderModelId: draft.orderModelId ?? null,
    items: draft.items.map((item) => ({
      skuCode: item.skuCode,
      specId: item.specId ?? null,
      quantity: item.quantity,
    })),
  });
  return crypto.createHash('sha256').update(stable).digest('hex');
}

function extractOrderNo(data: unknown): string | null {
  if (!data || typeof data !== 'object') return null;
  const record = data as Record<string, unknown>;
  return String(record.orderNo ?? record.orderCode ?? record.id ?? record.data ?? '') || null;
}
