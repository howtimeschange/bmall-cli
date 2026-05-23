import { readFileSync } from "node:fs";
import { normalizeExportResponse } from "../export/tasks.js";
import { addressCompleteness } from "./address.js";

export interface OrderDiagnosis {
  orderType: string;
  orderNo: string | null;
  relation: Record<string, unknown>;
  currentState: Record<string, unknown>;
  ruleChain: Array<Record<string, unknown>>;
  timeline: Array<Record<string, unknown>>;
  amount: Record<string, unknown>;
  items: Array<Record<string, unknown>>;
  blockingIssues: Array<Record<string, unknown>>;
  warnings: Array<Record<string, unknown>>;
  nextActions: string[];
}

export function emptyOrderDiagnosis(input: {
  orderNo?: string;
  orderType?: string;
  source?: Record<string, unknown>;
}): OrderDiagnosis {
  return {
    orderType: input.orderType ?? "unknown",
    orderNo: input.orderNo ?? null,
    relation: input.source?.relation && typeof input.source.relation === "object" ? input.source.relation as Record<string, unknown> : {},
    currentState:
      input.source?.currentState && typeof input.source.currentState === "object"
        ? input.source.currentState as Record<string, unknown>
        : { status: "unknown" },
    ruleChain: Array.isArray(input.source?.ruleChain) ? input.source.ruleChain as Array<Record<string, unknown>> : [],
    timeline: Array.isArray(input.source?.timeline) ? input.source.timeline as Array<Record<string, unknown>> : [],
    amount:
      input.source?.amount && typeof input.source.amount === "object"
        ? input.source.amount as Record<string, unknown>
        : { total: null, currency: "CNY" },
    items: Array.isArray(input.source?.items) ? input.source.items as Array<Record<string, unknown>> : [],
    blockingIssues: Array.isArray(input.source?.blockingIssues)
      ? input.source.blockingIssues as Array<Record<string, unknown>>
      : [],
    warnings: Array.isArray(input.source?.warnings) ? input.source.warnings as Array<Record<string, unknown>> : [],
    nextActions: Array.isArray(input.source?.nextActions)
      ? input.source.nextActions as string[]
      : ["Fetch backend diagnosis facade or inspect related order endpoints"],
  };
}

export function normalizeOrderDiagnosis(raw: Record<string, unknown> = {}, fallback: { orderNo?: string; orderType?: string } = {}) {
  const source = raw.data && typeof raw.data === "object" ? raw.data as Record<string, unknown> : raw;
  return emptyOrderDiagnosis({
    orderNo: String(source.orderNo ?? source.order_no ?? fallback.orderNo ?? ""),
    orderType: String(source.orderType ?? source.type ?? fallback.orderType ?? "unknown"),
    source,
  });
}

export function blockingReasonsFromDraft(draft: Record<string, unknown>) {
  const issues: Array<Record<string, unknown>> = [];
  const items = Array.isArray(draft.items) ? draft.items as Array<Record<string, unknown>> : [];
  if (items.length === 0) issues.push({ code: "EMPTY_ITEMS", severity: "blocked", message: "No order items were supplied" });
  for (const item of items) {
    const quantity = Number(item.quantity ?? item.qty ?? 0);
    if (!Number.isFinite(quantity) || quantity <= 0) {
      issues.push({ code: "INVALID_QUANTITY", severity: "blocked", item, message: "Item quantity must be positive" });
    }
  }
  return {
    ok: issues.length === 0,
    blockingIssues: issues,
    warnings: [],
    nextActions: issues.length ? ["Fix draft item quantities and validate again"] : ["Run order validate before submit"],
  };
}

export function splitCheck(input: Record<string, unknown>) {
  const status = String(input.status ?? input.groupStatus ?? "unknown");
  const canSplit = status === "已成团" || status === "grouped" || input.canSplit === true;
  return {
    ok: canSplit,
    currentState: { status, canSplit },
    blockingIssues: canSplit ? [] : [{ code: "SPLIT_STATE_NOT_READY", severity: "blocked", message: "Order is not in a split-ready state" }],
    nextActions: canSplit ? ["Run split operation only after allowlist approval"] : ["Wait until order reaches grouped/split-ready state"],
  };
}

export function syncCheck(input: Record<string, unknown>) {
  const synced = input.sapSynced === true || input.synced === true;
  return {
    ok: synced,
    currentState: { synced, syncStatus: input.syncStatus ?? "unknown" },
    blockingIssues: synced ? [] : [],
    warnings: synced ? [] : [{ code: "SYNC_UNKNOWN", severity: "warning", message: "Backend sync status is not confirmed" }],
    nextActions: synced ? ["No sync action required"] : ["Inspect sync-warning logs before requesting manual sync"],
  };
}

type CommandLike = {
  command(name: string): CommandLike;
  description(text: string): CommandLike;
  option(flags: string, description?: string, defaultValue?: unknown): CommandLike;
  requiredOption(flags: string, description?: string): CommandLike;
  action(fn: (options: Record<string, unknown>) => unknown): CommandLike;
};

type OutputFn = (payload: unknown) => void;
type ApiClient = { request: (method: string, path: string, body?: unknown) => Promise<unknown> };

function emit(output: OutputFn | undefined, payload: unknown): unknown {
  if (output) output(payload);
  return payload;
}

function requireClient(client: ApiClient | undefined, code: string): ApiClient {
  if (!client) throw new Error(code);
  return client;
}

export async function diagnoseOrderFromApi(client: ApiClient, options: Record<string, unknown>): Promise<OrderDiagnosis> {
  const type = String(options.type ?? options.orderType ?? "unknown");
  const endpoint =
    type === "pending-review"
      ? "b2b/pendingReviewOrder/order/detail"
      : type === "pending-review-mini"
        ? "b2b/pendingReviewOrder/mini/detail"
        : "b2b/order/detailByNo";
  const method = type.startsWith("pending-review") ? "POST" : "GET";
  const body = type.startsWith("pending-review")
    ? { orderId: options.orderId ?? options.id }
    : { orderNo: options.orderNo };
  const raw = await client.request(method, endpoint, body);
  return diagnoseOrderFromRaw(raw as Record<string, unknown>, { ...options, type, endpoint });
}

export function diagnoseOrderFromRaw(raw: Record<string, unknown>, options: Record<string, unknown> = {}): OrderDiagnosis {
  const source = unwrapData(raw);
  const address = pickAddress(source);
  const addressCheck = addressCompleteness(address);
  const blockingIssues = addressCheck.blockingIssues.map((issue) => ({
    ...issue,
    phase: "fulfillment",
    addressId: addressCheck.addressId,
    companyId: source.companyId ?? null,
  }));
  const ruleChain = blockingIssues.length
    ? [{
        phase: "fulfillment",
        status: "blocked",
        severity: "error",
        summary: blockingIssues[0]?.message,
        evidence: [{ source: "api", endpoint: options.endpoint ?? null }],
        items: blockingIssues,
      }]
    : [];

  return {
    orderType: String(options.type ?? source.orderType ?? source.orderTypeName ?? "unknown"),
    orderNo: stringValue(source.orderNo ?? source.pendingReviewOrderNo ?? options.orderNo) || null,
    relation: { addressId: addressCheck.addressId, companyId: source.companyId ?? null },
    currentState: {
      status: source.orderStatus ?? source.status ?? source.orderStatusName ?? "unknown",
      statusName: source.orderStatusName ?? source.statusName ?? source.status ?? "unknown",
      companyName: source.companyName ?? null,
    },
    ruleChain,
    timeline: [],
    amount: {
      total: numberValue(source.totalAmount ?? source.realMoney ?? source.orderAmount ?? source.totalMoney),
      marketAmount: numberValue(source.totalMoney),
      orderAmount: numberValue(source.totalAmount ?? source.realMoney),
    },
    items: pickItems(source),
    blockingIssues,
    warnings: blockingIssues.length ? [] : [{ code: "NO_BLOCKING_ISSUE_DETECTED", severity: "info", message: "未从订单详情中发现地址完整性阻断项" }],
    nextActions: blockingIssues.length
      ? [
          `bmall ops address check --company-id ${String(source.companyId ?? "<companyId>")} --json`,
          "补齐收货地址省/市/区后重新执行待审核订单审核。",
        ]
      : ["继续检查金额、库存、发票和支付规则。"],
  };
}

function unwrapData(raw: Record<string, unknown>): Record<string, unknown> {
  const data = raw.data ?? raw.Data ?? raw.result;
  if (data && typeof data === "object" && !Array.isArray(data)) return data as Record<string, unknown>;
  return raw;
}

function pickAddress(source: Record<string, unknown>) {
  const addressInfo = source.addressInfo && typeof source.addressInfo === "object" ? source.addressInfo as Record<string, unknown> : {};
  return {
    ...addressInfo,
    fid: optionalString(addressInfo.fid ?? addressInfo.addressId ?? source.addressId),
    addressId: optionalString(addressInfo.addressId ?? source.addressId),
    provinceName: optionalString(addressInfo.provinceName ?? source.provinceName ?? source.addressProvince),
    cityName: optionalString(addressInfo.cityName ?? source.cityName ?? source.addressCity),
    regionName: optionalString(addressInfo.regionName ?? source.regionName ?? source.addressRegion),
    conAddress: optionalString(addressInfo.conAddress ?? source.conAddress ?? source.address),
    consignee: optionalString(addressInfo.consignee ?? source.consignee),
    consiPhone: optionalString(addressInfo.consiPhone ?? source.consiPhone),
    sourceType: optionalNumber(addressInfo.sourceType ?? source.sourceType),
    sourceTypeName: optionalString(addressInfo.sourceTypeName ?? source.sourceTypeName),
  };
}

function pickItems(source: Record<string, unknown>): Array<Record<string, unknown>> {
  for (const key of ["items", "skuList", "skcList", "planList", "orderItems"]) {
    const value = source[key];
    if (Array.isArray(value)) return value.filter((item) => item && typeof item === "object") as Array<Record<string, unknown>>;
  }
  return [];
}

function stringValue(value: unknown): string {
  if (typeof value === "string") return value;
  if (typeof value === "number") return String(value);
  return "";
}

function numberValue(value: unknown): number {
  const number = Number(value ?? 0);
  return Number.isFinite(number) ? number : 0;
}

function optionalString(value: unknown): string | undefined {
  if (typeof value === "string" && value.trim()) return value;
  if (typeof value === "number") return String(value);
  return undefined;
}

function optionalNumber(value: unknown): number | undefined {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim()) {
    const number = Number(value);
    if (Number.isFinite(number)) return number;
  }
  return undefined;
}

export function registerOpsOrderCommands(program: CommandLike, client?: ApiClient, output?: OutputFn) {
  const order = program.command("order").description("Order operations diagnosis");
  order.command("diagnose").option("--order-no <orderNo>").option("--order-id <orderId>").option("--type <type>").option("--json").action(async (options) => {
    return emit(output, await diagnoseOrderFromApi(requireClient(client, "ORDER_DIAGNOSE_REQUIRES_API_CLIENT"), options));
  });
  order.command("diagnose-pending").requiredOption("--order-id <orderId>").option("--json").action(async (options) => {
    return emit(output, await diagnoseOrderFromApi(requireClient(client, "ORDER_DIAGNOSE_REQUIRES_API_CLIENT"), { ...options, type: "pending-review" }));
  });
  order.command("timeline").requiredOption("--order-id <orderId>").option("--json").action(async (options) => {
    return emit(output, await requireClient(client, "ORDER_TIMELINE_REQUIRES_API_CLIENT").request("POST", "b2b/pendingReviewOrder/order/detail", options));
  });
  order.command("relations").requiredOption("--order-no <orderNo>").option("--json").action(async (options) => {
    return emit(output, await requireClient(client, "ORDER_RELATIONS_REQUIRES_API_CLIENT").request("GET", "b2b/order/detailByNo", options));
  });
  order.command("blocking-reasons").option("--type <type>").option("--file <file>").option("--json").action((options) => {
    const draft = typeof options.file === "string" ? JSON.parse(readFileSync(options.file, "utf8")) as Record<string, unknown> : {};
    return emit(output, blockingReasonsFromDraft(draft));
  });
  order.command("split-check").option("--type <type>").option("--pickup-order-id <pickupOrderId>").option("--json").action((options) => emit(output, splitCheck(options)));
  order.command("sync-check").option("--type <type>").option("--presale-order-id <presaleOrderId>").option("--json").action((options) => emit(output, syncCheck(options)));
  order.command("export").requiredOption("--order-no <orderNo>").option("--json").action(async (options) => {
    const raw = await requireClient(client, "ORDER_EXPORT_REQUIRES_API_CLIENT").request("POST", "file/order/exportOrder", options);
    return emit(output, normalizeExportResponse(raw, { sourceEndpoint: "file/order/exportOrder", type: "order" }));
  });
  return order;
}
