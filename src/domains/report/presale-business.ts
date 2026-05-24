import { fetchUrlBytes } from "../export/tasks.js";
import {
  readSupplyExportAmounts,
  writePresaleBusinessWorkbook,
  type PresaleReportSource,
  type PresaleSummary,
  type SupplyExportAmountData,
} from "./presale-workbook.js";

type ApiClient = { request: (method: string, path: string, body?: unknown) => Promise<unknown> };

export interface PresaleBusinessOptions {
  source?: unknown;
  startDate?: unknown;
  endDate?: unknown;
  output?: unknown;
  activityQuery?: unknown;
  pageSize?: unknown;
  exportTimeoutMs?: unknown;
  exportPollIntervalMs?: unknown;
}

type ReportActivity = Record<string, unknown> & {
  activityId: string;
  activityNo: string;
  activityName: string;
  activityDate: string;
};

type SourceEndpoints = {
  activityPage: string;
  orderPage: string;
  orderTotals: string;
  pickupActivityPage: string;
  pickupActivityTotals: string;
  customerPickupPage: string;
  customerPickupTotals: string;
  amountExport: string;
};

const endpointMap: Record<PresaleReportSource, SourceEndpoints> = {
  supply: {
    activityPage: "activity/supply/presale/activity/page",
    orderPage: "activity/supply/presale/order/page",
    orderTotals: "activity/supply/presale/order/pageGather",
    pickupActivityPage: "activity/supplyPresale/pickup/manage/activityView/page",
    pickupActivityTotals: "activity/supplyPresale/pickup/manage/activityView/pageGather",
    customerPickupPage: "activity/supplyPresale/pickup/manage/companyView/dealerPage",
    customerPickupTotals: "activity/supplyPresale/pickup/manage/companyView/pageGather",
    amountExport: "file/supply/presale/order/export",
  },
  mid: {
    activityPage: "activity/presaleActivities/findActivity",
    orderPage: "activity/presaleOrder/page",
    orderTotals: "activity/presaleOrder/orderStatistics",
    pickupActivityPage: "activity/presale/pickup/manage/activityView/page",
    pickupActivityTotals: "activity/presale/pickup/manage/activityView/pageGather",
    customerPickupPage: "activity/presale/pickup/manage/companyView/dealerPage",
    customerPickupTotals: "activity/presale/pickup/manage/companyView/pageGather",
    amountExport: "",
  },
};

function objectOf(value: unknown): Record<string, unknown> {
  const unwrapped = unwrap(value);
  return unwrapped && typeof unwrapped === "object" && !Array.isArray(unwrapped) ? unwrapped as Record<string, unknown> : {};
}

function unwrap(value: unknown): unknown {
  let current = value;
  for (let index = 0; index < 4; index += 1) {
    if (!current || typeof current !== "object" || Array.isArray(current) || !("data" in current)) return current;
    const next = (current as { data?: unknown }).data;
    if (next === undefined || next === null) return current;
    current = next;
  }
  return current;
}

function rowsOf(value: unknown): Array<Record<string, unknown>> {
  const current = unwrap(value);
  if (Array.isArray(current)) return current.filter((row): row is Record<string, unknown> => Boolean(row && typeof row === "object"));
  const object = objectOf(current);
  for (const key of ["content", "records", "rows", "list", "DataLine", "Data"]) {
    const rows = object[key];
    if (Array.isArray(rows)) return rows.filter((row): row is Record<string, unknown> => Boolean(row && typeof row === "object"));
  }
  return [];
}

function stringOf(value: unknown): string {
  return value === undefined || value === null ? "" : String(value);
}

function first(row: Record<string, unknown>, keys: string[]): unknown {
  for (const key of keys) {
    const value = row[key];
    if (value !== undefined && value !== null && value !== "") return value;
  }
  return undefined;
}

function numberOf(value: unknown, fallback = 0): number {
  const number = Number(String(value ?? "").replaceAll(",", ""));
  return Number.isFinite(number) ? number : fallback;
}

function valueFrom(row: Record<string, unknown>, keys: string[], fallback = 0): number {
  const value = first(row, keys);
  return value === undefined ? fallback : numberOf(value, fallback);
}

function integerOption(value: unknown, fallback: number): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
}

function sourceOf(value: unknown): PresaleReportSource {
  const source = stringOf(value || "supply").toLowerCase();
  if (source === "supply" || source === "mid") return source;
  throw new Error(`Unsupported presale-business source: ${source}. Use supply or mid.`);
}

function dateOption(value: unknown, name: string): string {
  const date = stringOf(value);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error(`REPORT_PRESALE_BUSINESS_${name.toUpperCase()}_REQUIRED`);
  return date;
}

function activityDate(row: Record<string, unknown>, source: PresaleReportSource): string {
  const number = stringOf(first(row, source === "supply" ? ["activityNo"] : ["beginTime", "startTime", "presaleCode"]));
  if (/^\d{8}$/.test(number)) return `${number.slice(0, 4)}-${number.slice(4, 6)}-${number.slice(6, 8)}`;
  if (/^\d{4}-\d{2}-\d{2}/.test(number)) return number.slice(0, 10);
  const fallback = stringOf(first(row, ["purchaseStart", "startTime", "beginTime", "createDate", "modifyDate"]));
  return /^\d{4}-\d{2}-\d{2}/.test(fallback) ? fallback.slice(0, 10) : "";
}

function normalizeActivity(row: Record<string, unknown>, source: PresaleReportSource): ReportActivity {
  return {
    ...row,
    activityId: stringOf(first(row, source === "supply" ? ["id", "activityId"] : ["presaleId", "activityId", "id"])),
    activityNo: stringOf(first(row, source === "supply" ? ["activityNo"] : ["presaleCode", "activityNo"])),
    activityName: stringOf(first(row, source === "supply" ? ["activityName"] : ["presaleName", "activityName"])),
    activityDate: activityDate(row, source),
  };
}

function pageCount(value: unknown, rows: Array<Record<string, unknown>>, pageSize: number): number {
  const page = objectOf(value);
  const direct = numberOf(page.pageCount ?? page.pages, 0);
  if (direct > 0) return direct;
  const total = numberOf(page.totalCount ?? page.total ?? page.totalElements, rows.length);
  return total > rows.length ? Math.ceil(total / pageSize) : 1;
}

async function fetchPages(
  api: ApiClient,
  path: string,
  payload: Record<string, unknown>,
  pageSize: number,
): Promise<Array<Record<string, unknown>>> {
  const firstResponse = await api.request("POST", path, { ...payload, pageIndex: 1, pageSize });
  const rows = rowsOf(firstResponse);
  const pages = pageCount(firstResponse, rows, pageSize);
  for (let pageIndex = 2; pageIndex <= pages; pageIndex += 1) {
    rows.push(...rowsOf(await api.request("POST", path, { ...payload, pageIndex, pageSize })));
  }
  return rows;
}

function flattenCustomerRows(rows: Array<Record<string, unknown>>): Array<Record<string, unknown>> {
  const flattened: Array<Record<string, unknown>> = [];
  for (const row of rows) {
    const children = Array.isArray(row.companyViewList)
      ? row.companyViewList.filter((child): child is Record<string, unknown> => Boolean(child && typeof child === "object"))
      : [];
    if (children.length === 0) {
      flattened.push(row);
      continue;
    }
    const parent = {
      distributorCode: row.distributorCode,
      distributorName: row.distributorName,
      firstChannelCode: row.firstChannelCode,
      firstChannelDesc: row.firstChannelDesc,
      secondChannelCode: row.secondChannelCode,
      secondChannelDesc: row.secondChannelDesc,
      modelGeneraCode: row.modelGeneraCode,
      modelGeneraDesc: row.modelGeneraDesc,
      modelMinorCode: row.modelMinorCode,
      modelMinorDesc: row.modelMinorDesc,
    };
    children.forEach((child) => flattened.push({ ...parent, ...child }));
  }
  return flattened;
}

function ratio(numerator: number, denominator: number): number | null {
  return denominator > 0 ? numerator / denominator : null;
}

function summaryRate(
  totals: Record<string, unknown>,
  valueKey: string,
  displayKey: string,
  fallback: number | null,
): number | null {
  const value = first(totals, [valueKey]);
  if (value !== undefined) return numberOf(value);
  const displayValue = first(totals, [displayKey]);
  if (displayValue === undefined) return fallback;
  const parsed = Number(stringOf(displayValue).replace("%", ""));
  return Number.isFinite(parsed) ? parsed / 100 : fallback;
}

function summaryFor(
  activities: ReportActivity[],
  orderRows: Array<Record<string, unknown>>,
  orderTotals: Record<string, unknown>,
  pickupTotals: Record<string, unknown>,
  customerRows: Array<Record<string, unknown>>,
  marketValue: number,
): PresaleSummary {
  const orderCustomers = new Set(orderRows.map((row) => stringOf(first(row, ["companyCode", "customerCode"]))).filter(Boolean));
  const pickupCustomers = new Set(customerRows.map((row) => stringOf(first(row, ["companyCode", "customerCode"]))).filter(Boolean));
  const orderCount = valueFrom(orderTotals, ["orderQtyTotalCount", "orderCount"], orderRows.length);
  const orderQty = valueFrom(
    orderTotals,
    ["goodsQtyTotalCount", "orderQtySum", "goodsTotal"],
    orderRows.reduce((total, row) => total + valueFrom(row, ["goodsTotal", "totalQty", "orderQty"]), 0),
  );
  const pickupScopeQty = valueFrom(pickupTotals, ["orderQtySum"], orderQty);
  const preAllocatedQty = valueFrom(pickupTotals, ["preAllocatedQtySum"]);
  const allocatedQty = valueFrom(pickupTotals, ["allocatedQtySum"]);
  const pendingAllocationQty = valueFrom(pickupTotals, ["pendingAllocationQtySum"]);
  const pickedQty = valueFrom(pickupTotals, ["pickedQtySum"]);
  return {
    activityCount: activities.length,
    customerCount: orderCustomers.size > 0 ? orderCustomers.size : pickupCustomers.size,
    orderCount,
    orderQty,
    marketValue,
    pickupScopeQty,
    preAllocatedQty,
    allocatedQty,
    pendingAllocationQty,
    pickedQty,
    pickupScopeRate: ratio(pickedQty, pickupScopeQty),
    fillRate: summaryRate(pickupTotals, "cumulativeFillRateSum", "cumulativeFillRateSumStr", ratio(preAllocatedQty + allocatedQty, pickupScopeQty)),
    pickupRate: summaryRate(pickupTotals, "pickingRateSum", "pickingRateSumStr", ratio(pickedQty, preAllocatedQty + allocatedQty)),
  };
}

function supplyTaskUrl(row: Record<string, unknown>): string {
  return stringOf(first(row, ["taskUrl", "downloadUrl", "downloadURL", "fileUrl", "url"]));
}

function currentExportTasks(rows: Array<Record<string, unknown>>, triggeredAt: number): Array<Record<string, unknown>> {
  return rows.filter((row) => {
    const createdAt = stringOf(first(row, ["createDate", "createdAt"])).replace(" ", "T");
    const createdAtMs = Date.parse(createdAt);
    return !Number.isFinite(createdAtMs) || createdAtMs >= triggeredAt;
  });
}

function supplyOrderSummaryTasks(rows: Array<Record<string, unknown>>, triggeredAt: number): Array<Record<string, unknown>> {
  return currentExportTasks(rows, triggeredAt).filter((row) => {
    const fileName = stringOf(row.fileName);
    if (fileName) return fileName.includes("柔供预售单明细") && fileName.includes("整单汇总");
    const type = stringOf(first(row, ["type", "taskType"]));
    return type.includes("柔供") && (type.includes("整单汇总") || type.includes("allActAllOrder"));
  });
}

function successfulExportTask(rows: Array<Record<string, unknown>>, triggeredAt: number): Record<string, unknown> | undefined {
  const success = supplyOrderSummaryTasks(rows, triggeredAt).filter((row) => {
    return ["2", "success", "done", "finished", "complete", "completed", "已完成", "完成"].includes(stringOf(row.status).toLowerCase());
  });
  return success.find((row) => Boolean(supplyTaskUrl(row)));
}

async function resolveSupplyMarketValue(
  api: ApiClient,
  endpoint: string,
  activityNos: string[],
  timeoutMs: number,
  pollIntervalMs: number,
): Promise<SupplyExportAmountData> {
  if (activityNos.length === 0) return { marketValue: 0, orderAmounts: [] };
  const triggeredAt = Date.now() - 1000;
  const initiated = objectOf(await api.request("POST", endpoint, { exportType: "allActAllOrder", activityNos }));
  const directUrl = supplyTaskUrl(initiated);
  if (directUrl) return readSupplyExportAmounts(await fetchUrlBytes(directUrl));
  const deadline = Date.now() + timeoutMs;
  while (Date.now() <= deadline) {
    const taskRows = rowsOf(await api.request("POST", "file/asyn/export/b2b/page", { pageIndex: 1, pageSize: 30 }));
    const completed = successfulExportTask(taskRows, triggeredAt);
    if (completed) return readSupplyExportAmounts(await fetchUrlBytes(supplyTaskUrl(completed)));
    const failed = supplyOrderSummaryTasks(taskRows, triggeredAt).find((row) => ["3", "failed", "fail", "error", "失败", "已失败"].includes(stringOf(row.status).toLowerCase()));
    if (failed) throw new Error("REPORT_SUPPLY_EXPORT_TASK_FAILED");
    if (pollIntervalMs > 0) await new Promise((resolve) => setTimeout(resolve, pollIntervalMs));
  }
  throw new Error("REPORT_SUPPLY_EXPORT_TASK_TIMEOUT");
}

export async function buildPresaleBusinessReport(api: ApiClient, options: PresaleBusinessOptions) {
  const source = sourceOf(options.source);
  const startDate = dateOption(options.startDate, "start_date");
  const endDate = dateOption(options.endDate, "end_date");
  if (startDate > endDate) throw new Error("REPORT_PRESALE_BUSINESS_INVALID_DATE_WINDOW");
  const output = stringOf(options.output);
  if (!output) throw new Error("REPORT_PRESALE_BUSINESS_OUTPUT_REQUIRED");
  const pageSize = integerOption(options.pageSize, 500) || 500;
  const endpoints = endpointMap[source];
  const activityRows = await fetchPages(api, endpoints.activityPage, { sword: options.activityQuery ?? "" }, pageSize);
  const activities = activityRows
    .map((row) => normalizeActivity(row, source))
    .filter((row) => row.activityDate >= startDate && row.activityDate <= endDate);
  const activityIds = activities.map((row) => row.activityId).filter(Boolean);
  const activityNos = activities.map((row) => row.activityNo).filter(Boolean);
  const amountBasis = source === "mid"
    ? { method: "order-rows", field: "goodsTotalPrice" }
    : { method: "export-workbook", field: "totalPrice", exportType: "allActAllOrder" };
  if (activities.length === 0) {
    const summary = summaryFor([], [], {}, {}, [], 0);
    const report = {
      report: "presale-business",
      source,
      startDate,
      endDate,
      activities,
      orderRows: [] as Array<Record<string, unknown>>,
      orderTotals: {},
      pickupActivityRows: [] as Array<Record<string, unknown>>,
      pickupActivityTotals: {},
      customerRows: [] as Array<Record<string, unknown>>,
      customerTotals: {},
      summary,
      amountBasis,
      endpoints,
      output: "",
    };
    report.output = await writePresaleBusinessWorkbook(report, output);
    return report;
  }
  const orderFilter = source === "supply" ? { activityNos } : { activityIds };
  const pickupFilter = { activityIdList: activityIds };
  const pickupActivityFilter = { ...pickupFilter, onlyUnfulfilled: false };
  let orderRows = await fetchPages(api, endpoints.orderPage, orderFilter, pageSize);
  const orderTotals = objectOf(await api.request("POST", endpoints.orderTotals, orderFilter));
  const pickupActivityRows = await fetchPages(api, endpoints.pickupActivityPage, pickupActivityFilter, pageSize);
  const pickupActivityTotals = objectOf(await api.request("POST", endpoints.pickupActivityTotals, pickupActivityFilter));
  const customerGroupRows = await fetchPages(api, endpoints.customerPickupPage, pickupFilter, pageSize);
  const customerRows = flattenCustomerRows(customerGroupRows);
  const customerTotals = objectOf(await api.request("POST", endpoints.customerPickupTotals, pickupFilter));
  let marketValue = orderRows.reduce((total, row) => total + valueFrom(row, ["goodsTotalPrice"]), 0);
  if (source === "supply") {
    const amountData = await resolveSupplyMarketValue(
      api,
      endpoints.amountExport,
      activityNos,
      integerOption(options.exportTimeoutMs, 15 * 60 * 1000),
      integerOption(options.exportPollIntervalMs, 3000),
    );
    marketValue = amountData.marketValue;
    const amountLookup = new Map(amountData.orderAmounts.map((row) => [row.orderNo, row.totalPrice]));
    orderRows = orderRows.map((row) => {
      const totalPrice = amountLookup.get(stringOf(first(row, ["orderNo"])));
      return totalPrice === undefined ? row : { ...row, totalPrice };
    });
  }
  const summary = summaryFor(activities, orderRows, orderTotals, pickupActivityTotals, customerRows, marketValue);
  const report = {
    report: "presale-business",
    source,
    startDate,
    endDate,
    activities,
    orderRows,
    orderTotals,
    pickupActivityRows,
    pickupActivityTotals,
    customerRows,
    customerTotals,
    summary,
    amountBasis,
    endpoints,
    output: "",
  };
  report.output = await writePresaleBusinessWorkbook(report, output);
  return report;
}
