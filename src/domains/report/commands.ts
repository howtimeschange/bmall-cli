type ApiClient = { request: (method: string, path: string, body?: unknown) => Promise<unknown> };
type OutputFn = (payload: unknown) => void;
type CommandLike = {
  command(name: string): CommandLike;
  description(text: string): CommandLike;
  option(flags: string, description?: string, defaultValue?: unknown): CommandLike;
  action(fn: (options: Record<string, unknown>) => unknown): CommandLike;
};

type ActivityRecord = { id?: string; activityId?: string; activityNo?: string; activityName?: string };
type PickupSource = "supply" | "mid";

type PickupDetail = {
  source: PickupSource;
  pickupOrder: Record<string, unknown>;
  pickupId: string;
  skuRows: Array<Record<string, unknown>>;
  relationRows: Array<Record<string, unknown>>;
  sourceOrderRows: SourceOrderItem[];
};

type SourceOrderItem = {
  source: PickupSource;
  customerCode: string;
  customerName: string;
  distributorCode?: string;
  distributorName?: string;
  sourceOrderId?: string;
  sourceOrderNo?: string;
  activityName?: string;
  activityNo?: string;
  skcCode: string;
  itemName?: string;
  orderQty: number;
  joinStatus: "detail" | "pickup-derived";
};

type PickupAggregate = {
  scope: "pickup-order" | "source-order";
  source: PickupSource;
  customerCode: string;
  customerName: string;
  distributorCode?: string;
  distributorName?: string;
  skcCode: string;
  itemName?: string;
  orderQty: number;
  pickedQty: number;
  waitPickedQty: number;
  allocatedQty: number;
  pickupOrderCount: number;
  pickupOrderNos: string[];
  sourceOrderNos: string[];
  sourceOrderIds: string[];
  activityNames: string[];
  activityNos: string[];
  pickupRate: string | null;
  joinStatus?: "detail" | "pickup-derived";
};

const endpoints = {
  activityPage: "activity/supply/presale/activity/page",
  activityPickupPage: "activity/supplyPresale/pickup/manage/activityView/page",
  activityPickupGather: "activity/supplyPresale/pickup/manage/activityView/pageGather",
  customerPickupPage: "activity/supplyPresale/pickup/manage/companyView/dealerPage",
  customerPickupGather: "activity/supplyPresale/pickup/manage/companyView/pageGather",
  pickupPage: "activity/pickup/order/mgd/page",
  pickupSkuPage: "activity/pickup/order/mgd/selectPickupOrderSkus",
  pickupSkuFallback: "activity/pickup/order/mgd/getPickOrderSkuList",
  relatedPresale: "activity/pickup/orderRel/selectPresaleOrders",
  supplyOrderItems: "activity/mini/supply/presale/order/query/order/detail/item",
  midOrderItems: "activity/mini/presaleActivity/queryItems/byOrderId",
};

function requireClient(client: ApiClient | undefined, command: string): ApiClient {
  if (!client) throw new Error(`${command.toUpperCase().replaceAll(" ", "_")}_REQUIRES_API_CLIENT`);
  return client;
}

function emit(output: OutputFn | undefined, payload: unknown): unknown {
  if (output) output(payload);
  return payload;
}

function toPageSize(value: unknown, fallback = 100): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function toPageIndex(value: unknown, fallback = 1): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function csvList(value: unknown): string[] {
  if (Array.isArray(value)) return value.flatMap(csvList);
  if (value === null || value === undefined) return [];
  return String(value)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function asObject(value: unknown): Record<string, unknown> {
  const data = unwrapData(value);
  if (data !== value) return asObject(data);
  return value && typeof value === "object" ? value as Record<string, unknown> : {};
}

function pickRows(value: unknown): Array<Record<string, unknown>> {
  const data = unwrapData(value);
  if (data !== value) return pickRows(data);
  if (Array.isArray(value)) return value.filter((item): item is Record<string, unknown> => Boolean(item && typeof item === "object"));
  const obj = asObject(value);
  for (const key of ["content", "DataLine", "data", "Data", "rows", "records", "list"]) {
    const inner = obj[key];
    if (Array.isArray(inner)) return inner.filter((item): item is Record<string, unknown> => Boolean(item && typeof item === "object"));
  }
  return [];
}

function cleanActivityRows(rows: Array<Record<string, unknown>>): ActivityRecord[] {
  return rows.map((row) => ({
    id: stringOrUndefined(row.id),
    activityId: stringOrUndefined(row.activityId),
    activityNo: stringOrUndefined(row.activityNo),
    activityName: stringOrUndefined(row.activityName),
  }));
}

function stringOrUndefined(value: unknown): string | undefined {
  if (value === null || value === undefined || value === "") return undefined;
  return String(value);
}

function numberValue(value: unknown, fallback = 0): number {
  const parsed = Number(value ?? fallback);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function unwrapData(value: unknown): unknown {
  if (!value || typeof value !== "object") return value;
  const obj = value as Record<string, unknown>;
  if (obj.ok === true && "data" in obj) return obj.data;
  return value;
}

function activityIds(rows: ActivityRecord[]): string[] {
  return rows.map((row) => row.id ?? row.activityId).filter((value): value is string => Boolean(value));
}

function flattenCustomerRows(rows: Array<Record<string, unknown>>): Array<Record<string, unknown>> {
  const flattened: Array<Record<string, unknown>> = [];
  for (const row of rows) {
    const children = Array.isArray(row.companyViewList)
      ? row.companyViewList.filter((item): item is Record<string, unknown> => Boolean(item && typeof item === "object"))
      : [];
    if (children.length === 0) {
      flattened.push(row);
      continue;
    }
    const context = {
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
    for (const child of children) {
      flattened.push({ ...context, ...child });
    }
  }
  return flattened;
}

async function resolveActivities(api: ApiClient, options: Record<string, unknown>, pageSize: number) {
  const explicitActivityIds = csvList(options.activityIds);
  if (explicitActivityIds.length > 0) {
    return { activities: [] as ActivityRecord[], activityIdList: explicitActivityIds };
  }
  const activityResult = await api.request("POST", endpoints.activityPage, {
    sword: options.activityQuery ?? "",
    pageIndex: 1,
    pageSize,
  });
  const activities = cleanActivityRows(pickRows(activityResult));
  return { activities, activityIdList: activityIds(activities) };
}

function pickupActivityStatus(value: unknown): string | number | undefined {
  const text = stringOrUndefined(value);
  if (!text) return 1;
  if (text.toLowerCase() === "all") return undefined;
  const parsed = Number(text);
  return Number.isFinite(parsed) ? parsed : text;
}

function addList(target: Record<string, unknown>, key: string, value: unknown): void {
  const list = csvList(value);
  if (list.length > 0) target[key] = list;
}

function firstDefined(row: Record<string, unknown> | undefined, keys: string[]): unknown {
  if (!row) return undefined;
  for (const key of keys) {
    const value = row[key];
    if (value !== undefined && value !== null && value !== "") return value;
  }
  return undefined;
}

function firstString(row: Record<string, unknown> | undefined, keys: string[], fallback = ""): string {
  const value = firstDefined(row, keys);
  return value === undefined ? fallback : String(value);
}

function itemSkc(item: Record<string, unknown>): string {
  return firstString(item, ["skcCode", "skcBarcode", "skcBarCode", "itemColorCode", "skc", "skuCode", "skuBarcode", "specCode", "specId"], "UNKNOWN_SKC");
}

function itemName(item: Record<string, unknown>): string | undefined {
  return stringOrUndefined(firstDefined(item, ["itemName", "goodsName", "productName", "spuName"]));
}

function orderedQty(item: Record<string, unknown>): number {
  return numberValue(firstDefined(item, ["allocatedQuantity", "orderQty", "totalQty", "quantity", "orderQuantity", "qty"]));
}

function pickedQty(item: Record<string, unknown>): number {
  return numberValue(firstDefined(item, ["pickedQuantity", "pickedQty", "finishQty", "pickupQty", "actualPickupQty"]));
}

function waitPickedQty(item: Record<string, unknown>): number {
  return numberValue(firstDefined(item, ["pendingPickedQuantity", "waitPickedQty", "pendingPickupQty", "remainQty", "waitPickupQty"]));
}

function allocatedQty(item: Record<string, unknown>): number {
  return numberValue(firstDefined(item, ["allocatedQuantity", "allocatedQty", "preAllocatedQty", "allocationQty"]));
}

function sourceOrderQty(item: Record<string, unknown>): number {
  const direct = numberValue(firstDefined(item, ["orderQty", "totalQty", "quantity", "orderQuantity", "qty", "allocatedQuantity"]), NaN);
  if (Number.isFinite(direct)) return direct;
  const childRows = [
    ...pickRows(item.waitOrderItemDetailMiniVos),
    ...pickRows(item.orderItemDetailMiniVos),
    ...pickRows(item.itemDetailMiniVos),
    ...pickRows(item.skuList),
    ...pickRows(item.skus),
  ];
  return childRows.reduce((total, child) => total + numberValue(firstDefined(child, ["orderQty", "totalQty", "quantity", "orderQuantity", "qty", "addQty"])), 0);
}

function pickupIdOf(order: Record<string, unknown>): string | undefined {
  return stringOrUndefined(firstDefined(order, ["id", "pickupOrderId", "presalePickupOrderId"]));
}

function sourceOrderRefs(order: Record<string, unknown>, relationRows: Array<Record<string, unknown>>): Array<Record<string, unknown>> {
  const inline = [
    ...pickRows(order.presalesOrderList),
    ...pickRows(order.presaleOrderList),
  ];
  const refs = [...inline, ...relationRows];
  const deduped = new Map<string, Record<string, unknown>>();
  for (const ref of refs) {
    const id = firstString(ref, ["presalesOrderId", "presaleOrderId", "id", "orderId"], "");
    const no = firstString(ref, ["presalesOrderNo", "presaleOrderNo", "orderNo", "orderCode"], "");
    const key = `${id}||${no}`;
    if (key !== "||") deduped.set(key, ref);
  }
  return [...deduped.values()];
}

function activityRefs(order: Record<string, unknown>): Array<Record<string, unknown>> {
  return [
    ...pickRows(order.presalesActivityList),
    ...pickRows(order.presaleActivityList),
    ...pickRows(order.activityList),
  ];
}

function rate(picked: number, ordered: number): string | null {
  return ordered > 0 ? `${((picked / ordered) * 100).toFixed(2)}%` : null;
}

function sourceTypes(source: unknown): PickupSource[] {
  const normalized = stringOrUndefined(source)?.toLowerCase() ?? "supply";
  if (normalized === "all") return ["supply", "mid"];
  if (normalized === "supply" || normalized === "mid") return [normalized];
  throw new Error(`Unsupported pickup-customer-skc source: ${String(source)}. Use supply, mid, or all.`);
}

function sourceActivityType(source: PickupSource): number {
  return source === "supply" ? 2 : 1;
}

function sourceLabelFromType(value: unknown): PickupSource | undefined {
  const numeric = Number(value);
  if (numeric === 2) return "supply";
  if (numeric === 1) return "mid";
  return undefined;
}

function addUnique(target: string[], value: unknown): void {
  const text = stringOrUndefined(value);
  if (text && !target.includes(text)) target.push(text);
}

function addStringFilter(payload: Record<string, unknown>, key: string, value: unknown): void {
  const text = stringOrUndefined(value);
  if (text) payload[key] = text;
}

async function requestRows(api: ApiClient, method: string, path: string, body: Record<string, unknown>): Promise<Array<Record<string, unknown>>> {
  return pickRows(await api.request(method, path, body));
}

async function safeRequestRows(
  api: ApiClient,
  method: string,
  path: string,
  body: Record<string, unknown>,
  failures: Array<Record<string, unknown>>,
  context: Record<string, unknown>,
): Promise<Array<Record<string, unknown>>> {
  try {
    return await requestRows(api, method, path, body);
  } catch (error) {
    failures.push({ ...context, endpoint: path, message: error instanceof Error ? error.message : String(error) });
    return [];
  }
}

async function fetchRelationRows(api: ApiClient, pickupId: string, failures: Array<Record<string, unknown>>): Promise<Array<Record<string, unknown>>> {
  try {
    return await requestRows(api, "GET", endpoints.relatedPresale, { pickupId });
  } catch {
    return safeRequestRows(api, "POST", endpoints.relatedPresale, { pickupId, pickupOrderId: pickupId }, failures, {
      step: "related-presale",
      pickupId,
    });
  }
}

async function fetchPickupSkuRows(api: ApiClient, pickupId: string, failures: Array<Record<string, unknown>>): Promise<Array<Record<string, unknown>>> {
  try {
    return await requestRows(api, "POST", endpoints.pickupSkuPage, { pageIndex: 1, pageSize: 500, id: pickupId, pickupOrderId: pickupId });
  } catch {
    return safeRequestRows(api, "POST", endpoints.pickupSkuFallback, { id: pickupId, pickupOrderId: pickupId }, failures, {
      step: "pickup-skus",
      pickupId,
    });
  }
}

function sourceOrderEndpoint(source: PickupSource): string {
  return source === "supply" ? endpoints.supplyOrderItems : endpoints.midOrderItems;
}

async function fetchSourceOrderItems(
  api: ApiClient,
  source: PickupSource,
  order: Record<string, unknown>,
  relationRows: Array<Record<string, unknown>>,
  failures: Array<Record<string, unknown>>,
): Promise<SourceOrderItem[]> {
  const endpoint = sourceOrderEndpoint(source);
  const refs = sourceOrderRefs(order, relationRows);
  const activities = activityRefs(order);
  const activityName = firstString(activities[0], ["activityName"], "");
  const activityNo = firstString(activities[0], ["activityNo"], "");
  const rows: SourceOrderItem[] = [];
  for (const ref of refs) {
    const sourceOrderId = firstString(ref, ["presalesOrderId", "presaleOrderId", "id", "orderId"], "");
    const sourceOrderNo = firstString(ref, ["presalesOrderNo", "presaleOrderNo", "orderNo", "orderCode"], "");
    if (!sourceOrderId && !sourceOrderNo) continue;
    const requestBodies = source === "supply"
      ? [
          { orderId: sourceOrderId || sourceOrderNo },
          { presaleOrderId: sourceOrderId || sourceOrderNo },
        ]
      : [
          { presaleOrderId: sourceOrderId || sourceOrderNo },
          { orderId: sourceOrderId || sourceOrderNo },
        ];
    let itemRows: Array<Record<string, unknown>> = [];
    let lastError: unknown;
    for (const body of requestBodies) {
      try {
        itemRows = await requestRows(api, "POST", endpoint, body);
        lastError = undefined;
        break;
      } catch (error) {
        lastError = error;
      }
    }
    if (lastError) {
      failures.push({
        step: "source-order-items",
        source,
        endpoint,
        sourceOrderId,
        sourceOrderNo,
        message: lastError instanceof Error ? lastError.message : String(lastError),
      });
    }
    for (const item of itemRows) {
      rows.push({
        source,
        customerCode: firstString(order, ["companyCode", "customerCode", "dealerCode", "distributorCode"], "UNKNOWN_CUSTOMER"),
        customerName: firstString(order, ["companyName", "customerName", "dealerName", "distributorName"], ""),
        distributorCode: stringOrUndefined(firstDefined(order, ["dealerCode", "distributorCode"])),
        distributorName: stringOrUndefined(firstDefined(order, ["dealerName", "distributorName"])),
        sourceOrderId: sourceOrderId || undefined,
        sourceOrderNo: sourceOrderNo || undefined,
        activityName: activityName || stringOrUndefined(firstDefined(ref, ["activityName"])),
        activityNo: activityNo || stringOrUndefined(firstDefined(ref, ["activityNo"])),
        skcCode: itemSkc(item),
        itemName: itemName(item),
        orderQty: sourceOrderQty(item),
        joinStatus: "detail",
      });
    }
  }
  return rows;
}

function sourceOrderFallbackRows(detail: PickupDetail): SourceOrderItem[] {
  const refs = sourceOrderRefs(detail.pickupOrder, detail.relationRows);
  const firstRef = refs[0];
  const activities = activityRefs(detail.pickupOrder);
  return detail.skuRows.map((item) => ({
    source: detail.source,
    customerCode: firstString(detail.pickupOrder, ["companyCode", "customerCode", "dealerCode", "distributorCode"], "UNKNOWN_CUSTOMER"),
    customerName: firstString(detail.pickupOrder, ["companyName", "customerName", "dealerName", "distributorName"], ""),
    distributorCode: stringOrUndefined(firstDefined(detail.pickupOrder, ["dealerCode", "distributorCode"])),
    distributorName: stringOrUndefined(firstDefined(detail.pickupOrder, ["dealerName", "distributorName"])),
    sourceOrderId: stringOrUndefined(firstDefined(firstRef, ["presalesOrderId", "presaleOrderId", "id", "orderId"])),
    sourceOrderNo: stringOrUndefined(firstDefined(firstRef, ["presalesOrderNo", "presaleOrderNo", "orderNo", "orderCode"])),
    activityName: stringOrUndefined(firstDefined(activities[0], ["activityName"])),
    activityNo: stringOrUndefined(firstDefined(activities[0], ["activityNo"])),
    skcCode: itemSkc(item),
    itemName: itemName(item),
    orderQty: orderedQty(item),
    joinStatus: "pickup-derived",
  }));
}

function aggregatePickupScope(details: PickupDetail[]): PickupAggregate[] {
  const aggregates = new Map<string, PickupAggregate>();
  for (const detail of details) {
    const order = detail.pickupOrder;
    const source = sourceLabelFromType(firstDefined(order, ["pickupOrderSourceType", "activityType"])) ?? detail.source;
    const customerCode = firstString(order, ["companyCode", "customerCode", "dealerCode", "distributorCode"], "UNKNOWN_CUSTOMER");
    const customerName = firstString(order, ["companyName", "customerName", "dealerName", "distributorName"], "");
    const distributorCode = stringOrUndefined(firstDefined(order, ["dealerCode", "distributorCode"]));
    const distributorName = stringOrUndefined(firstDefined(order, ["dealerName", "distributorName"]));
    const pickupOrderNo = firstDefined(order, ["pickupOrderNo", "orderNo"]);
    const sourceRefs = sourceOrderRefs(order, detail.relationRows);
    const activities = activityRefs(order);
    for (const item of detail.skuRows) {
      const skcCode = itemSkc(item);
      const key = `${source}||${customerCode}||${skcCode}`;
      const current = aggregates.get(key) ?? {
        scope: "pickup-order",
        source,
        customerCode,
        customerName,
        distributorCode,
        distributorName,
        skcCode,
        itemName: itemName(item),
        orderQty: 0,
        pickedQty: 0,
        waitPickedQty: 0,
        allocatedQty: 0,
        pickupOrderCount: 0,
        pickupOrderNos: [],
        sourceOrderNos: [],
        sourceOrderIds: [],
        activityNames: [],
        activityNos: [],
        pickupRate: null,
      } satisfies PickupAggregate;
      current.orderQty += orderedQty(item);
      current.pickedQty += pickedQty(item);
      current.waitPickedQty += waitPickedQty(item);
      current.allocatedQty += allocatedQty(item);
      addUnique(current.pickupOrderNos, pickupOrderNo);
      current.pickupOrderCount = current.pickupOrderNos.length;
      for (const ref of sourceRefs) {
        addUnique(current.sourceOrderNos, firstDefined(ref, ["presalesOrderNo", "presaleOrderNo", "orderNo", "orderCode"]));
        addUnique(current.sourceOrderIds, firstDefined(ref, ["presalesOrderId", "presaleOrderId", "id", "orderId"]));
      }
      for (const activity of activities) {
        addUnique(current.activityNames, firstDefined(activity, ["activityName"]));
        addUnique(current.activityNos, firstDefined(activity, ["activityNo"]));
      }
      current.pickupRate = rate(current.pickedQty, current.orderQty);
      aggregates.set(key, current);
    }
  }
  return [...aggregates.values()];
}

function aggregateSourceOrderScope(details: PickupDetail[]): PickupAggregate[] {
  const pickupByCustomerSkc = aggregatePickupScope(details);
  const pickupLookup = new Map(pickupByCustomerSkc.map((row) => [`${row.source}||${row.customerCode}||${row.skcCode}`, row]));
  const aggregates = new Map<string, PickupAggregate>();
  for (const detail of details) {
    const sourceRows = detail.sourceOrderRows.length > 0 ? detail.sourceOrderRows : sourceOrderFallbackRows(detail);
    for (const item of sourceRows) {
      const key = `${item.source}||${item.customerCode}||${item.skcCode}`;
      const pickup = pickupLookup.get(key);
      const current = aggregates.get(key) ?? {
        scope: "source-order",
        source: item.source,
        customerCode: item.customerCode,
        customerName: item.customerName,
        distributorCode: item.distributorCode,
        distributorName: item.distributorName,
        skcCode: item.skcCode,
        itemName: item.itemName,
        orderQty: 0,
        pickedQty: pickup?.pickedQty ?? 0,
        waitPickedQty: 0,
        allocatedQty: pickup?.allocatedQty ?? 0,
        pickupOrderCount: pickup?.pickupOrderCount ?? 0,
        pickupOrderNos: [...(pickup?.pickupOrderNos ?? [])],
        sourceOrderNos: [],
        sourceOrderIds: [],
        activityNames: [],
        activityNos: [],
        pickupRate: null,
        joinStatus: item.joinStatus,
      } satisfies PickupAggregate;
      current.orderQty += item.orderQty;
      current.joinStatus = current.joinStatus === "detail" || item.joinStatus === "detail" ? "detail" : "pickup-derived";
      current.waitPickedQty = Math.max(current.orderQty - current.pickedQty, 0);
      current.pickupRate = rate(current.pickedQty, current.orderQty);
      addUnique(current.sourceOrderNos, item.sourceOrderNo);
      addUnique(current.sourceOrderIds, item.sourceOrderId);
      addUnique(current.activityNames, item.activityName);
      addUnique(current.activityNos, item.activityNo);
      aggregates.set(key, current);
    }
  }
  return [...aggregates.values()];
}

function buildPickupPagePayload(source: PickupSource, options: Record<string, unknown>, pageIndex: number, pageSize: number) {
  const payload: Record<string, unknown> = {
    pageIndex,
    pageSize,
    activityKeyWord: options.activityQuery ?? "",
    activityType: sourceActivityType(source),
    needRole: 0,
    includeSub: true,
  };
  addStringFilter(payload, "companyCode", options.companyCode);
  addStringFilter(payload, "companyName", options.companyName);
  addStringFilter(payload, "dealerCode", options.distributorCode);
  addStringFilter(payload, "dealerName", options.distributorName);
  return payload;
}

async function buildPickupCustomerSkcReport(api: ApiClient, options: Record<string, unknown>) {
  const pageIndex = toPageIndex(options.pageIndex, 1);
  const pageSize = toPageSize(options.pageSize, 100);
  const sources = sourceTypes(options.source);
  const failures: Array<Record<string, unknown>> = [];
  const pickupPages: Array<Record<string, unknown>> = [];
  const details: PickupDetail[] = [];

  for (const source of sources) {
    const request = buildPickupPagePayload(source, options, pageIndex, pageSize);
    const page = await api.request("POST", endpoints.pickupPage, request);
    const pageObject = asObject(page);
    const pickupRows = pickRows(page);
    pickupPages.push({
      source,
      request,
      totalCount: pageObject.totalCount ?? pageObject.total ?? pageObject.totalElements,
      rowCount: pickupRows.length,
    });
    for (const pickupOrder of pickupRows) {
      const pickupId = pickupIdOf(pickupOrder);
      if (!pickupId) {
        failures.push({ step: "pickup-id", source, message: "Pickup row has no id/pickupOrderId.", pickupOrder });
        continue;
      }
      const [skuRows, relationRows] = await Promise.all([
        fetchPickupSkuRows(api, pickupId, failures),
        fetchRelationRows(api, pickupId, failures),
      ]);
      const sourceOrderRows = await fetchSourceOrderItems(api, source, pickupOrder, relationRows, failures);
      details.push({ source, pickupOrder, pickupId, skuRows, relationRows, sourceOrderRows });
    }
  }

  const pickupScopeRows = aggregatePickupScope(details);
  const sourceOrderScopeRows = aggregateSourceOrderScope(details);
  const sourceOrderDetailRows = details.flatMap((detail) => detail.sourceOrderRows);
  return {
    report: "pickup-customer-skc",
    activityQuery: options.activityQuery ?? "",
    source: stringOrUndefined(options.source) ?? "supply",
    pageIndex,
    pageSize,
    pickupPages,
    pickupScopeRows,
    sourceOrderScopeRows,
    meta: {
      pickupOrderCount: details.length,
      pickupSkuRowCount: details.reduce((total, detail) => total + detail.skuRows.length, 0),
      sourceOrderDetailRowCount: sourceOrderDetailRows.length,
      sourceOrderJoin: sourceOrderJoinMeta(sourceOrderDetailRows.length, sourceOrderScopeRows.filter((row) => row.joinStatus === "pickup-derived").length),
      failures,
    },
  };
}

function sourceOrderJoinMeta(detailRows: number, fallbackRows: number) {
  return {
    status: detailRows > 0 && fallbackRows > 0 ? "partial" : detailRows > 0 ? "detail" : "pickup-derived",
    detailRows,
    fallbackRows,
  };
}

const csvColumns: Array<keyof PickupAggregate | "pickupOrderNosText" | "sourceOrderNosText" | "sourceOrderIdsText" | "activityNamesText" | "activityNosText"> = [
  "scope",
  "source",
  "customerCode",
  "customerName",
  "distributorCode",
  "distributorName",
  "skcCode",
  "itemName",
  "orderQty",
  "pickedQty",
  "waitPickedQty",
  "allocatedQty",
  "pickupRate",
  "pickupOrderCount",
  "pickupOrderNosText",
  "sourceOrderNosText",
  "sourceOrderIdsText",
  "activityNamesText",
  "activityNosText",
  "joinStatus",
];

function csvEscape(value: unknown): string {
  const text = value === undefined || value === null ? "" : String(value);
  return /[",\n\r]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function toCsv(report: Awaited<ReturnType<typeof buildPickupCustomerSkcReport>>): string {
  const rows = [...report.pickupScopeRows, ...report.sourceOrderScopeRows];
  const lines = [
    csvColumns.join(","),
    ...rows.map((row) => csvColumns.map((column) => {
      if (column === "pickupOrderNosText") return csvEscape(row.pickupOrderNos.join(";"));
      if (column === "sourceOrderNosText") return csvEscape(row.sourceOrderNos.join(";"));
      if (column === "sourceOrderIdsText") return csvEscape(row.sourceOrderIds.join(";"));
      if (column === "activityNamesText") return csvEscape(row.activityNames.join(";"));
      if (column === "activityNosText") return csvEscape(row.activityNos.join(";"));
      return csvEscape(row[column]);
    }).join(",")),
  ];
  return `${lines.join("\n")}\n`;
}

function wantsCsv(options: Record<string, unknown>): boolean {
  return options.csv === true || stringOrUndefined(options.format)?.toLowerCase() === "csv";
}

export function registerReportCommands(program: CommandLike, client?: ApiClient, output?: OutputFn) {
  const report = program.command("report").description("Bmall report-style read commands");

  report
    .command("supply-pickup-activity")
    .description("Probe supply-presale pickup status by activity dimension")
    .option("--activity-query <activityQuery>")
    .option("--activity-ids <activityIds>")
    .option("--page-index <pageIndex>")
    .option("--page-size <pageSize>")
    .option("--only-unfulfilled")
    .option("--pickup-activity-status <status>")
    .option("--json")
    .action(async (options) => {
      const command = "report supply pickup activity";
      const pageIndex = toPageIndex(options.pageIndex, 1);
      const pageSize = toPageSize(options.pageSize, 100);
      const api = requireClient(client, command);
      const { activities, activityIdList } = await resolveActivities(api, options, pageSize);
      const status = pickupActivityStatus(options.pickupActivityStatus);
      const payload = {
        pageIndex,
        pageSize,
        onlyUnfulfilled: Boolean(options.onlyUnfulfilled),
        ...(status === undefined ? {} : { activityStatus: status }),
        activityIdList,
      };
      const pickupRows = await api.request("POST", endpoints.activityPickupPage, payload);
      const pickupTotals = await api.request("POST", endpoints.activityPickupGather, payload);
      return emit(output, {
        activityQuery: options.activityQuery ?? "",
        activityIdList,
        activities,
        pickupActivityRows: pickRows(pickupRows),
        pickupActivityTotals: asObject(pickupTotals),
      });
    });

  report
    .command("supply-pickup-customer")
    .description("Probe supply-presale pickup status by customer dimension")
    .option("--activity-query <activityQuery>")
    .option("--activity-ids <activityIds>")
    .option("--page-index <pageIndex>")
    .option("--page-size <pageSize>")
    .option("--company-code <companyCode>")
    .option("--company-name <companyName>")
    .option("--distributor-code <distributorCode>")
    .option("--distributor-name <distributorName>")
    .option("--json")
    .action(async (options) => {
      const command = "report supply pickup customer";
      const pageIndex = toPageIndex(options.pageIndex, 1);
      const pageSize = toPageSize(options.pageSize, 100);
      const api = requireClient(client, command);
      const { activities, activityIdList } = await resolveActivities(api, options, pageSize);
      const payload: Record<string, unknown> = {
        pageIndex,
        pageSize,
        activityIdList,
      };
      addList(payload, "companyCodeList", options.companyCode);
      addList(payload, "distributorCodeList", options.distributorCode);
      if (options.companyName) payload.companyName = options.companyName;
      if (options.distributorName) payload.distributorName = options.distributorName;
      const customerRows = await api.request("POST", endpoints.customerPickupPage, payload);
      const customerTotals = await api.request("POST", endpoints.customerPickupGather, payload);
      const customerGroupRows = pickRows(customerRows);
      return emit(output, {
        activityQuery: options.activityQuery ?? "",
        activityIdList,
        activities,
        customerRows: flattenCustomerRows(customerGroupRows),
        customerGroupRows,
        customerTotals: asObject(customerTotals),
      });
    });

  report
    .command("pickup-customer-skc")
    .description("Aggregate pickup rate and details by customer and SKC")
    .option("--activity-query <activityQuery>")
    .option("--source <source>", "supply, mid, or all", "supply")
    .option("--page-index <pageIndex>")
    .option("--page-size <pageSize>")
    .option("--company-code <companyCode>")
    .option("--company-name <companyName>")
    .option("--distributor-code <distributorCode>")
    .option("--distributor-name <distributorName>")
    .option("--format <format>", "json or csv", "json")
    .option("--csv")
    .option("--json")
    .action(async (options) => {
      const api = requireClient(client, "report pickup customer skc");
      const reportData = await buildPickupCustomerSkcReport(api, options);
      if (wantsCsv(options)) {
        process.stdout.write(toCsv(reportData));
        return reportData;
      }
      return emit(output, reportData);
    });

  return report;
}
