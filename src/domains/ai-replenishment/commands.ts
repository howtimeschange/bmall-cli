import { Command } from "commander";
import { dryRunPlan } from "../ops/safety.js";

type ApiClient = { request: (method: string, path: string, body?: unknown) => Promise<unknown> };
type OutputFn = (payload: unknown) => void;

const endpoints = {
  authorityCompanyData: "hr/sysCompany/intellectAi/authorityCompanyData",
  companyPage: "hr/sysCompany/queryCompanyRole/middleGround/page",
  companyInfosById: "hr/sysCompany/queryCompanyInfosById",
  addressList: "hr/mb2bcrd3/list",
  invoiceList: "b2b/invoice/distributorInvoice/list",
  candidateSkus: "product/item/intellectAi/getIntellectAiOrderCreateBeforeSkcData",
  mallStockBySku: "warehouse/mWhs/getMainWhsStockBySkuCodes",
  directCreateOrder: "b2b/order/new/intellectAi/creatOrder",
};

const labelText: Record<number, string> = {
  1: "爆",
  2: "旺",
  3: "平",
  4: "滞",
};

const labelMultiplier: Record<number, number> = {
  1: 1.2,
  2: 1.1,
  3: 1,
  4: 0.5,
};

export function registerAiReplenishmentCommands(program: Command, client?: ApiClient, output?: OutputFn): void {
  const cmd = program.command("ai-replenishment").description("AI replenishment commands");

  cmd
    .command("plan")
    .description("Plan intelligent replenishment with the CLI-local algorithm and optionally submit direct replenishment orders")
    .option("--retailer-code <retailerCode>")
    .option("--retailer-id <retailerId>")
    .option("--company-code <companyCode>")
    .option("--company-codes <companyCodes>")
    .option("--company-ids <companyIds>")
    .option("--target-days <targetDays>", "base days of cover target", "10")
    .option("--safety-days <safetyDays>", "extra safety days of cover", "3")
    .option("--page-size <pageSize>", "store page size", "200")
    .option("--max-stores <maxStores>", "maximum stores to evaluate", "200")
    .option("--submit", "submit direct orders from the CLI-local plan")
    .option("--dry-run", "preview direct order submission without calling the create-order endpoint")
    .option("--confirm", "confirm direct order submission")
    .option("--invoice-code <invoiceCode>", "invoice subject code; defaults to the store distributor default invoice when available")
    .option("--address-id <addressId>", "receiving address id; defaults to the store default/first complete address")
    .option("--skc-out-stock-state <skcOutStockState>", "out-of-stock handling method", "1")
    .option("--remark <remark>", "order remark")
    .option("--reason <reason>")
    .option("--json")
    .action(async (options) => {
      const api = requireClient(client, "ai-replenishment.plan");
      const input = normalizePlanOptions(options);
      assertPlanScope(input);
      assertPlanSubmitAuthorization(options);

      const scope = await resolvePlanScope(api, input);
      const plan = await buildCliReplenishmentPlan(api, scope.stores, input);
      const submitPlan = input.submitRequested ? await buildDirectSubmitPlan(api, plan.orderDrafts, input) : null;
      const submitResults = submitPlan && !input.dryRun ? await submitDirectOrders(api, submitPlan.readyOrders) : null;
      emit(output, buildPlanReport({ input, scope, plan, submitPlan, submitResults }));
    });
}

export const aiReplenishmentEndpoints = endpoints;

function requireClient(client: ApiClient | undefined, command: string): ApiClient {
  if (!client) throw new Error(`${command.toUpperCase().replaceAll("-", "_").replaceAll(".", "_")}_REQUIRES_API_CLIENT`);
  return client;
}

function emit(output: OutputFn | undefined, payload: unknown): unknown {
  if (output) output(payload);
  return payload;
}

function normalizePlanOptions(options: Record<string, unknown>) {
  return {
    retailerCode: firstText(options.retailerCode),
    retailerId: firstText(options.retailerId),
    companyCode: firstText(options.companyCode),
    companyCodes: csvList(options.companyCodes),
    companyIds: csvList(options.companyIds),
    targetDays: positiveNumber(options.targetDays, 10),
    safetyDays: positiveNumber(options.safetyDays, 3),
    pageSize: positiveNumber(options.pageSize, 200),
    maxStores: positiveNumber(options.maxStores, 200),
    submitRequested: options.submit === true,
    dryRun: options.dryRun === true,
    invoiceCode: firstText(options.invoiceCode),
    addressId: firstText(options.addressId),
    skcOutStockState: positiveNumber(options.skcOutStockState, 1),
    remark: firstText(options.remark),
    reason: firstText(options.reason),
  };
}

function assertPlanScope(input: PlanInput): void {
  const scopes = [
    Boolean(input.retailerCode),
    Boolean(input.retailerId),
    Boolean(input.companyCode),
    input.companyCodes.length > 0,
    input.companyIds.length > 0,
  ].filter(Boolean).length;
  if (scopes === 1) return;
  throw new Error("AI_REPLENISHMENT_PLAN_REQUIRES_EXACTLY_ONE_SCOPE");
}

function assertPlanSubmitAuthorization(options: Record<string, unknown>): void {
  if (options.submit !== true) return;
  if (options.dryRun === true) return;
  if (options.confirm === true && firstText(options.reason)) return;
  throw new Error("FINANCIAL_REQUIRES_DRY_RUN_OR_CONFIRM");
}

type PlanInput = ReturnType<typeof normalizePlanOptions>;

type StoreScope = {
  type: "retailer-code" | "retailer-id" | "company-code" | "company-codes" | "company-ids";
  retailerCode?: string;
  retailerId?: string;
  companyCode?: string;
  companyCodes: string[];
  companyIds: string[];
  stores: StoreTarget[];
};

type StoreTarget = {
  companyId?: string;
  companyCode?: string;
  companyName?: string;
  distributorId?: string;
  distributorCode?: string;
  distributorName?: string;
};

type CandidateSku = ReturnType<typeof normalizeCandidateSku>;
type PlanRow = ReturnType<typeof calculatePlanRow>;
type OrderDraft = ReturnType<typeof buildOrderDrafts>[number];

type DirectSubmitOrder = {
  draft: OrderDraft;
  body: {
    companyCode: string;
    invoiceCode: string;
    provinceName: string;
    cityName: string;
    regionName: string;
    conAddress: string;
    consignee?: string;
    consiPhone?: string;
    skcOutStockState: number;
    remark?: string;
    items: Array<{ skuCode: string; quantity: number }>;
  };
  invoice: Record<string, unknown>;
  address: Record<string, unknown>;
};

async function resolvePlanScope(api: ApiClient, input: PlanInput): Promise<StoreScope> {
  if (input.companyIds.length > 0) {
    const stores = await fetchCompanyInfosById(api, input.companyIds);
    return buildStoreScope("company-ids", input, stores);
  }
  if (input.companyCodes.length > 0) {
    const stores = await fetchCompanyPageAll(api, { companyCodes: input.companyCodes }, input);
    return buildStoreScope("company-codes", input, stores);
  }
  if (input.companyCode) {
    const stores = await fetchCompanyPageAll(api, { companyCode: input.companyCode }, input);
    return buildStoreScope("company-code", input, stores);
  }
  if (input.retailerId) {
    const companyIds = pickStringArray(await api.request("POST", endpoints.authorityCompanyData, { distributorId: input.retailerId }));
    const stores = await fetchCompanyInfosById(api, companyIds.slice(0, input.maxStores));
    return buildStoreScope("retailer-id", { ...input, companyIds }, stores);
  }
  const stores = await fetchCompanyPageAll(api, { distributorCode: input.retailerCode }, input);
  return buildStoreScope("retailer-code", input, stores);
}

function buildStoreScope(type: StoreScope["type"], input: PlanInput, stores: StoreTarget[]): StoreScope {
  const normalizedStores = dedupeStores(stores)
    .filter((store) => store.companyId || store.companyCode)
    .slice(0, input.maxStores);
  if (normalizedStores.length === 0) throw new Error("AI_REPLENISHMENT_PLAN_NO_STORES_FOUND");
  return {
    type,
    retailerCode: input.retailerCode ?? firstDefined(normalizedStores.map((store) => store.distributorCode)),
    retailerId: input.retailerId ?? firstDefined(normalizedStores.map((store) => store.distributorId)),
    companyCode: input.companyCode,
    companyCodes: input.companyCodes.length > 0 ? input.companyCodes : input.companyCode ? [input.companyCode] : normalizedStores.map((store) => store.companyCode).filter((value): value is string => Boolean(value)),
    companyIds: input.companyIds.length > 0 ? input.companyIds : normalizedStores.map((store) => store.companyId).filter((value): value is string => Boolean(value)),
    stores: normalizedStores,
  };
}

async function fetchCompanyPageAll(api: ApiClient, filters: Record<string, unknown>, input: PlanInput): Promise<StoreTarget[]> {
  const stores: StoreTarget[] = [];
  let pageIndex = 1;
  while (stores.length < input.maxStores) {
    const body = cleanBody({ ...filters, pageIndex, pageSize: input.pageSize });
    const rows = pickRows(await api.request("POST", endpoints.companyPage, body));
    stores.push(...rows.map(normalizeStore));
    if (rows.length < input.pageSize) break;
    pageIndex += 1;
  }
  return stores;
}

async function fetchCompanyInfosById(api: ApiClient, companyIds: string[]): Promise<StoreTarget[]> {
  if (companyIds.length === 0) return [];
  const result = asObject(await api.request("POST", endpoints.companyInfosById, { companyIds }));
  return Object.values(result).filter(isRecord).map(normalizeStore);
}

async function buildCliReplenishmentPlan(api: ApiClient, stores: StoreTarget[], input: PlanInput) {
  const storeCandidates = await Promise.all(stores.map(async (store) => ({
    store,
    candidates: await fetchCandidateSkus(api, store),
  })));
  const skuCodes = Array.from(new Set(storeCandidates.flatMap(({ candidates }) => candidates.map((sku) => sku.skuCode)).filter((skuCode): skuCode is string => Boolean(skuCode))));
  const mallStockMap = await fetchMallStockMap(api, skuCodes);
  const allRows = storeCandidates.flatMap(({ store, candidates }) => candidates.map((candidate) => calculatePlanRow(store, candidate, mallStockMap, input)));
  const rows = allRows.filter((row) => row.skuQuantity > 0);
  const skippedRows = allRows.filter((row) => row.skuQuantity <= 0);
  return {
    candidateSkuCount: allRows.length,
    rows,
    skippedRows,
    orderDrafts: buildOrderDrafts(stores, rows),
    summary: summarizePlan(stores, allRows, rows),
  };
}

async function fetchCandidateSkus(api: ApiClient, store: StoreTarget): Promise<CandidateSku[]> {
  if (!store.companyId) return [];
  try {
    const rows = pickRows(await api.request("POST", endpoints.candidateSkus, { companyId: store.companyId }));
    if (rows.length > 0) return rows.map(normalizeCandidateSku);
  } catch (error) {
    const rows = pickRows(await api.request("POST", `${endpoints.candidateSkus}?companyId=${encodeURIComponent(store.companyId)}`, {}));
    return rows.map(normalizeCandidateSku);
  }
  return [];
}

async function fetchMallStockMap(api: ApiClient, skuCodes: string[]): Promise<Map<string, number>> {
  if (skuCodes.length === 0) return new Map();
  return asNumberMap(await api.request("POST", endpoints.mallStockBySku, skuCodes));
}

function normalizeStore(input: unknown): StoreTarget {
  const row = asObject(input);
  return {
    companyId: firstString(row, ["companyId", "id", "fid", "scId"]),
    companyCode: firstString(row, ["companyCode", "code", "storeCode"]),
    companyName: firstString(row, ["companyName", "name", "storeName"]),
    distributorId: firstString(row, ["distributorId", "distrId"]),
    distributorCode: firstString(row, ["distributorCode", "distrCode", "retailerCode"]),
    distributorName: firstString(row, ["distributorName", "distrName", "retailerName"]),
  };
}

function normalizeCandidateSku(input: unknown) {
  const row = asObject(input);
  return {
    itemCode: firstString(row, ["itemCode"]),
    itemName: firstString(row, ["itemName"]),
    skcCode: firstString(row, ["skcCode"]),
    colorName: firstString(row, ["colorName"]),
    skuCode: firstString(row, ["skuCode"]),
    size: firstString(row, ["size", "sizeName"]),
    sales7Days: numberValue(row.totalSaleNum7, 0),
    sales7To14Days: numberValue(row.totalSaleNum7To14, 0),
    retailerSales: numberValue(row.totalSaleNumOrg, 0),
    nationalSales: numberValue(row.totalSaleNum, 0),
    localStock: numberValue(row.localStock, 0),
    onRoadStock: numberValue(row.onRoadStock, 0),
    labelFlag: numberValue(row.labelFlag, 3),
    ratioSize: numberValue(row.ratioSize, 0),
  };
}

function calculatePlanRow(store: StoreTarget, sku: CandidateSku, mallStockMap: Map<string, number>, input: PlanInput) {
  const sales14Days = sku.sales7Days + sku.sales7To14Days;
  const dailySales = round2(sales14Days / 14);
  const trendMultiplier = calculateTrendMultiplier(sku.sales7Days, sku.sales7To14Days);
  const label = labelText[sku.labelFlag] ?? "平";
  const multiplier = labelMultiplier[sku.labelFlag] ?? 1;
  const targetStock = Math.ceil(dailySales * (input.targetDays + input.safetyDays));
  const availableStoreStock = sku.localStock + sku.onRoadStock;
  const netNeed = Math.max(0, targetStock - availableStoreStock);
  const recommendSkuQuantity = netNeed > 0 ? Math.ceil(netNeed * trendMultiplier * multiplier) : 0;
  const mallStock = Math.max(0, Math.floor(mallStockMap.get(sku.skuCode ?? "") ?? 0));
  const skuQuantity = Math.min(recommendSkuQuantity, mallStock);
  return {
    companyId: store.companyId,
    companyCode: store.companyCode,
    companyName: store.companyName,
    distributorId: store.distributorId,
    distributorCode: store.distributorCode,
    distributorName: store.distributorName,
    itemCode: sku.itemCode,
    itemName: sku.itemName,
    skcCode: sku.skcCode,
    colorName: sku.colorName,
    skuCode: sku.skuCode,
    size: sku.size,
    labelFlag: sku.labelFlag,
    label,
    labelMultiplier: multiplier,
    ratioSize: sku.ratioSize,
    sales7Days: sku.sales7Days,
    sales7To14Days: sku.sales7To14Days,
    sales14Days,
    dailySales,
    trendMultiplier,
    adjustedDailySales: round2(dailySales * trendMultiplier),
    currentStock: sku.localStock,
    onRoadStock: sku.onRoadStock,
    availableStoreStock,
    targetDays: input.targetDays,
    safetyDays: input.safetyDays,
    targetStock,
    netNeed,
    recommendSkuQuantity,
    mallStock,
    skuQuantity,
    stockCapApplied: recommendSkuQuantity > mallStock,
    expectedDays: dailySales > 0 ? round2(availableStoreStock / dailySales) : null,
    reason: buildPlanReason({ sales14Days, netNeed, recommendSkuQuantity, mallStock, skuQuantity, label }),
  };
}

function calculateTrendMultiplier(sales7Days: number, sales7To14Days: number): number {
  if (sales7Days <= 0 && sales7To14Days <= 0) return 1;
  if (sales7To14Days <= 0) return 1.25;
  return round2(Math.min(1.5, Math.max(0.75, sales7Days / sales7To14Days)));
}

function buildPlanReason(input: { sales14Days: number; netNeed: number; recommendSkuQuantity: number; mallStock: number; skuQuantity: number; label: string }): string {
  if (input.sales14Days <= 0) return "近14天无销量，按本地算法不建议补货";
  if (input.netNeed <= 0) return "门店库存和在途已覆盖目标周转天数";
  if (input.mallStock <= 0) return "订货商城无可用库存，建议量被压到0";
  if (input.skuQuantity < input.recommendSkuQuantity) return `按${input.label}款和趋势建议补货，但受商城库存封顶`;
  return `按${input.label}款、近14天销量和目标周转天数建议补货`;
}

function summarizePlan(stores: StoreTarget[], allRows: PlanRow[], rows: PlanRow[]) {
  return {
    storeCount: stores.length,
    candidateSkuCount: allRows.length,
    skcCount: new Set(rows.map((row) => `${row.companyCode ?? ""}|${row.skcCode ?? ""}`)).size,
    skuCount: rows.length,
    skuQuantity: rows.reduce((sum, row) => sum + row.skuQuantity, 0),
    recommendSkuQuantity: rows.reduce((sum, row) => sum + row.recommendSkuQuantity, 0),
    mallStock: rows.reduce((sum, row) => sum + row.mallStock, 0),
    stockCappedRows: rows.filter((row) => row.stockCapApplied).length,
    skippedSkuCount: allRows.length - rows.length,
  };
}

function buildOrderDrafts(stores: StoreTarget[], rows: PlanRow[]) {
  const byCompanyCode = new Map<string, PlanRow[]>();
  for (const row of rows) {
    const key = row.companyCode ?? row.companyId ?? "";
    if (!key) continue;
    byCompanyCode.set(key, [...(byCompanyCode.get(key) ?? []), row]);
  }
  return stores.map((store) => {
    const key = store.companyCode ?? store.companyId ?? "";
    const itemList = (byCompanyCode.get(key) ?? []).flatMap((row) => row.skuCode ? [{
      skuCode: row.skuCode,
      quantity: row.skuQuantity,
      skcCode: row.skcCode,
    }] : []).filter((item) => item.quantity > 0);
    return {
      companyId: store.companyId,
      companyCode: store.companyCode,
      companyName: store.companyName,
      itemList,
      skuQuantity: itemList.reduce((sum, item) => sum + item.quantity, 0),
    };
  }).filter((draft) => draft.itemList.length > 0);
}

async function buildDirectSubmitPlan(api: ApiClient, drafts: OrderDraft[], input: PlanInput) {
  const prepared = await Promise.all(drafts.map((draft) => prepareDirectSubmitOrder(api, draft, input)));
  const readyOrders = prepared.filter((order): order is DirectSubmitOrder => "body" in order);
  const blockedOrders = prepared.filter((order): order is { draft: OrderDraft; blockingIssues: Array<{ code: string; message: string }> } => "blockingIssues" in order);
  return {
    readyOrders,
    blockedOrders,
    summary: {
      requested: true,
      mode: input.dryRun ? "dry-run" : "pending-submit",
      readyOrderCount: readyOrders.length,
      blockedOrderCount: blockedOrders.length,
      blockingIssueCount: blockedOrders.reduce((sum, item) => sum + item.blockingIssues.length, 0),
    },
  };
}

async function prepareDirectSubmitOrder(api: ApiClient, draft: OrderDraft, input: PlanInput): Promise<DirectSubmitOrder | { draft: OrderDraft; blockingIssues: Array<{ code: string; message: string }> }> {
  const blockingIssues: Array<{ code: string; message: string }> = [];
  if (!draft.companyId) blockingIssues.push({ code: "MISSING_COMPANY_ID", message: "缺少门店ID，无法查询开票和地址" });
  if (!draft.companyCode) blockingIssues.push({ code: "MISSING_COMPANY_CODE", message: "缺少门店编码，无法创建订单" });
  if (blockingIssues.length > 0) return { draft, blockingIssues };

  const [invoice, address] = await Promise.all([
    resolveInvoice(api, draft.companyId as string, input.invoiceCode),
    resolveAddress(api, draft.companyId as string, input.addressId),
  ]);
  if (!invoice) blockingIssues.push({ code: "MISSING_INVOICE", message: "未找到可用开票主体，请指定 --invoice-code 或先维护默认开票主体" });
  if (!address) blockingIssues.push({ code: "MISSING_ADDRESS", message: "未找到完整收货地址，请指定 --address-id 或先维护默认/完整地址" });
  if (blockingIssues.length > 0 || !invoice || !address) return { draft, blockingIssues };

  const body = cleanBody({
    companyCode: draft.companyCode,
    invoiceCode: firstString(invoice, ["invCode", "invoiceCode", "code"]),
    provinceName: firstString(address, ["provinceName"]),
    cityName: firstString(address, ["cityName"]),
    regionName: firstString(address, ["regionName"]),
    conAddress: firstString(address, ["conAddress"]),
    consignee: firstString(address, ["consignee"]),
    consiPhone: firstString(address, ["consiPhone"]),
    skcOutStockState: input.skcOutStockState,
    remark: input.remark,
    items: draft.itemList.map((item) => ({ skuCode: item.skuCode, quantity: item.quantity })),
  }) as DirectSubmitOrder["body"];
  return { draft, body, invoice, address };
}

async function resolveInvoice(api: ApiClient, companyId: string, invoiceCode?: string): Promise<Record<string, unknown> | null> {
  const invoices = pickRows(await api.request("POST", endpoints.invoiceList, { companyId }));
  const completeInvoices = invoices.filter((invoice) => firstString(invoice, ["invCode", "invoiceCode", "code"]));
  if (invoiceCode) return completeInvoices.find((invoice) => firstString(invoice, ["invCode", "invoiceCode", "code"]) === invoiceCode) ?? null;
  return completeInvoices.find((invoice) => numberValue(invoice.isDefault, 0) === 1) ?? completeInvoices[0] ?? null;
}

async function resolveAddress(api: ApiClient, companyId: string, addressId?: string): Promise<Record<string, unknown> | null> {
  const addresses = pickRows(await api.request("GET", endpoints.addressList, { companyId }));
  const completeAddresses = addresses.filter(isCompleteAddress);
  if (addressId) {
    return completeAddresses.find((address) => firstString(address, ["fid", "addressId", "id"]) === addressId) ?? null;
  }
  return completeAddresses.find((address) => numberValue(address.isDefault, 0) === 1) ?? completeAddresses[0] ?? null;
}

function isCompleteAddress(address: Record<string, unknown>): boolean {
  return Boolean(
    firstString(address, ["provinceName"]) &&
      firstString(address, ["cityName"]) &&
      firstString(address, ["regionName"]) &&
      firstString(address, ["conAddress"]),
  );
}

async function submitDirectOrders(api: ApiClient, orders: DirectSubmitOrder[]) {
  return Promise.all(orders.map(async (order) => {
    const result = asObject(await api.request("POST", endpoints.directCreateOrder, order.body));
    return {
      companyCode: order.body.companyCode,
      orderNo: firstString(result, ["orderNo"]),
      orderId: firstString(result, ["orderId"]),
      payAmount: numberValue(result.payAmount, 0),
      raw: result,
    };
  }));
}

function buildPlanReport(input: {
  input: PlanInput;
  scope: StoreScope;
  plan: Awaited<ReturnType<typeof buildCliReplenishmentPlan>>;
  submitPlan: Awaited<ReturnType<typeof buildDirectSubmitPlan>> | null;
  submitResults: Awaited<ReturnType<typeof submitDirectOrders>> | null;
}) {
  const submitSummary = buildSubmitSummary(input.submitPlan, input.submitResults);
  return {
    ok: true,
    command: "ai-replenishment.plan",
    scope: {
      type: input.scope.type,
      retailerCode: input.scope.retailerCode,
      retailerId: input.scope.retailerId,
      companyCode: input.scope.companyCode,
      companyCodes: input.scope.companyCodes,
      companyIds: input.scope.companyIds,
      storeCount: input.scope.stores.length,
    },
    parameters: {
      targetDays: input.input.targetDays,
      safetyDays: input.input.safetyDays,
      labelMultiplier,
      trendMultiplier: "近7天/上个7天，封顶1.5、保底0.75；上个7天为0且近7天有销时取1.25",
      submitRequested: input.input.submitRequested,
      dryRun: input.input.dryRun,
      invoiceCode: input.input.invoiceCode,
      addressId: input.input.addressId,
      skcOutStockState: input.input.skcOutStockState,
      reason: input.input.reason,
    },
    evidence: {
      algorithm: "CLI-local explainable-days-of-cover-v1: use candidate SKU sales and store stock, calculate target stock from 14-day average sales and days of cover, then adjust recommendation by trend and product label before capping by mall stock.",
      endpoints,
    },
    stores: input.scope.stores,
    summary: input.plan.summary,
    orderDryRun: dryRunPlan("ai-replenishment.plan.order-plan", input.plan.orderDrafts.length, [
      { method: "LOCAL", endpoint: "cli-local-replenishment-order-drafts", body: { orders: input.plan.orderDrafts } },
    ]),
    submitSummary,
    submitDryRun: input.submitPlan ? dryRunPlan("ai-replenishment.plan.submit", input.submitPlan.readyOrders.length, input.submitPlan.readyOrders.map((order) => ({
      method: "POST",
      endpoint: endpoints.directCreateOrder,
      body: order.body,
    }))) : null,
    submitBlockingIssues: input.submitPlan?.blockedOrders ?? null,
    submitResults: input.submitResults,
    rows: input.plan.rows,
    skippedRows: input.plan.skippedRows,
  };
}

function buildSubmitSummary(submitPlan: Awaited<ReturnType<typeof buildDirectSubmitPlan>> | null, submitResults: Awaited<ReturnType<typeof submitDirectOrders>> | null) {
  if (!submitPlan) return { requested: false, mode: "not-requested", readyOrderCount: 0, blockedOrderCount: 0, blockingIssueCount: 0 };
  return {
    ...submitPlan.summary,
    mode: submitResults ? "submitted" : submitPlan.summary.mode,
    submittedOrderCount: submitResults?.length ?? 0,
  };
}

function pickRows(value: unknown): Array<Record<string, unknown>> {
  const data = unwrapData(value);
  if (Array.isArray(data)) return data.filter(isRecord);
  if (!isRecord(data)) return [];
  for (const key of ["content", "DataLine", "data", "Data", "rows", "records", "list"]) {
    const inner = data[key];
    if (Array.isArray(inner)) return inner.filter(isRecord);
    if (isRecord(inner)) {
      const nested = pickRows(inner);
      if (nested.length) return nested;
    }
  }
  return [];
}

function asObject(value: unknown): Record<string, unknown> {
  const data = unwrapData(value);
  return isRecord(data) ? data : {};
}

function unwrapData(value: unknown): unknown {
  if (!isRecord(value)) return value;
  if (value.ok === true && "data" in value) return unwrapData(value.data);
  if (Object.keys(value).length === 1 && "data" in value) return unwrapData(value.data);
  return value;
}

function cleanBody<T extends Record<string, unknown>>(body: T): Record<string, unknown> {
  return Object.fromEntries(Object.entries(body).filter(([, value]) => value !== undefined && value !== "" && (!Array.isArray(value) || value.length > 0)));
}

function csvList(value: unknown): string[] {
  if (Array.isArray(value)) return value.flatMap(csvList);
  if (value === undefined || value === null || value === "") return [];
  return String(value).split(",").map((item) => item.trim()).filter(Boolean);
}

function firstText(value: unknown): string | undefined {
  if (value === undefined || value === null || value === "") return undefined;
  return String(value).trim() || undefined;
}

function firstString(row: Record<string, unknown> | undefined, keys: string[]): string | undefined {
  if (!row) return undefined;
  for (const key of keys) {
    const value = firstText(row[key]);
    if (value) return value;
  }
  return undefined;
}

function numberValue(value: unknown, fallback = 0): number {
  const parsed = Number(value ?? fallback);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function asNumberMap(value: unknown): Map<string, number> {
  const data = unwrapData(value);
  if (!isRecord(data)) return new Map();
  return new Map(Object.entries(data).map(([key, mapValue]) => [key, numberValue(mapValue, 0)]));
}

function pickStringArray(value: unknown): string[] {
  const data = unwrapData(value);
  if (Array.isArray(data)) return data.map(firstText).filter((item): item is string => Boolean(item));
  if (!isRecord(data)) return [];
  return Object.values(data).map(firstText).filter((item): item is string => Boolean(item));
}

function firstDefined<T>(values: Array<T | undefined>): T | undefined {
  return values.find((value): value is T => value !== undefined && value !== null && value !== "");
}

function dedupeStores(stores: StoreTarget[]): StoreTarget[] {
  const seen = new Set<string>();
  const result: StoreTarget[] = [];
  for (const store of stores) {
    const key = store.companyId ?? store.companyCode;
    if (!key || seen.has(key)) continue;
    seen.add(key);
    result.push(store);
  }
  return result;
}

function positiveNumber(value: unknown, fallback: number): number {
  const parsed = Number(value ?? fallback);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function round2(value: number): number {
  return Math.round(value * 100) / 100;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}
