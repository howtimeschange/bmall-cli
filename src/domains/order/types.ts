import type { BmallOrderType, OrderDraft, OrderPlan, OrderSubmitResult, OrderValidationReport } from '../../schemas/order.js';
import type { RuleChain } from '../../schemas/rule-chain.js';

export interface PermissionRequirement {
  funCode: string;
  name: string;
  requiredFor: 'read' | 'submit';
}

export interface OrderTypeManifestEntry {
  type: BmallOrderType;
  displayName: string;
  access: 'read' | 'write' | 'financial-write' | 'ops-write';
  adapter: string;
  browser: false;
  canRead: boolean;
  canSubmit: boolean;
  requiredPermissions: PermissionRequirement[];
}

export interface HttpClientLike {
  post<T = unknown>(endpoint: string, body?: Record<string, unknown>): Promise<T>;
  get?<T = unknown>(endpoint: string, query?: Record<string, unknown>): Promise<T>;
}

export interface AdapterRuntime {
  http?: HttpClientLike;
  offline?: boolean;
  profile?: string;
  env?: string;
  configHome?: string;
}

export interface SubmitOptions {
  confirm?: boolean;
  dryRun?: boolean;
  reason?: string;
}

export interface DiagnoseInput {
  orderNo?: string;
  orderId?: string;
  presaleOrderId?: string;
  pickupOrderId?: string;
  newStoreOrderId?: string;
}

export interface OrderDiagnosis {
  orderType: BmallOrderType;
  orderNo: string | null;
  relation: {
    sourceOrderNo: string | null;
    sourceOrderType: BmallOrderType | null;
    pickupOrderIds: string[];
    subOrderNos: string[];
  };
  currentState: Record<string, unknown>;
  ruleChain: RuleChain;
  timeline: Array<Record<string, unknown>>;
  amount: Record<string, number>;
  items: Array<Record<string, unknown>>;
  blockingIssues: Array<Record<string, unknown>>;
  warnings: Array<Record<string, unknown>>;
  nextActions: Array<{ command: string; reason: string }>;
}

export interface OrderFlowAdapter {
  type: BmallOrderType;
  displayName: string;
  endpoints: Record<string, string>;
  requiredPermissions(): PermissionRequirement[];
  buildPlan(draft: OrderDraft, runtime?: AdapterRuntime): Promise<OrderPlan>;
  validate(plan: OrderPlan, runtime?: AdapterRuntime): Promise<OrderValidationReport>;
  submit(plan: OrderPlan, opts: SubmitOptions, runtime?: AdapterRuntime): Promise<OrderSubmitResult>;
  diagnose(input: DiagnoseInput, runtime?: AdapterRuntime): Promise<OrderDiagnosis>;
}
