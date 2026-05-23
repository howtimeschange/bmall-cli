import { readFileSync } from "node:fs";

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

function emit(output: OutputFn | undefined, payload: unknown): unknown {
  if (output) output(payload);
  return payload;
}

export function registerOpsOrderCommands(program: CommandLike, client?: { request: (method: string, path: string, body?: unknown) => Promise<unknown> }, output?: OutputFn) {
  const order = program.command("order").description("Order operations diagnosis");
  order.command("diagnose").requiredOption("--order-no <orderNo>").option("--type <type>").option("--json").action(async (options) => {
    const raw = client ? await client.request("GET", "cli/order/diagnose", options) : {};
    return emit(output, normalizeOrderDiagnosis(raw as Record<string, unknown>, { orderNo: String(options.orderNo), orderType: String(options.type ?? "unknown") }));
  });
  order.command("timeline").requiredOption("--order-id <orderId>").option("--json").action(async (options) => {
    return emit(output, client ? await client.request("GET", "cli/order/timeline", options) : { timeline: [] });
  });
  order.command("relations").requiredOption("--order-no <orderNo>").option("--json").action(async (options) => {
    return emit(output, client ? await client.request("GET", "cli/order/relations", options) : { orderNo: options.orderNo, relation: {} });
  });
  order.command("blocking-reasons").option("--type <type>").option("--file <file>").option("--json").action((options) => {
    const draft = typeof options.file === "string" ? JSON.parse(readFileSync(options.file, "utf8")) as Record<string, unknown> : {};
    return emit(output, blockingReasonsFromDraft(draft));
  });
  order.command("split-check").option("--type <type>").option("--pickup-order-id <pickupOrderId>").option("--json").action((options) => emit(output, splitCheck(options)));
  order.command("sync-check").option("--type <type>").option("--presale-order-id <presaleOrderId>").option("--json").action((options) => emit(output, syncCheck(options)));
  order.command("export").requiredOption("--order-no <orderNo>").option("--json").action(async (options) => {
    return emit(output, client ? await client.request("POST", "file/order/exportOrder", options) : { mode: "async-task", status: "unknown" });
  });
  return order;
}
