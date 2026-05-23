import { assertWriteGate, auditOperation, type WriteGateOptions } from "./safety.js";

type ApiClient = { request: (method: string, path: string, body?: unknown) => Promise<unknown> };

export interface ProductLaunchOptions {
  itemCode: string;
  companyId?: string;
  companyCode?: string;
  companyName?: string;
}

export interface ProductLaunchSetupOptions extends WriteGateOptions {
  itemCodes: string | string[];
  packageNames: string | string[];
  companyCodes: string | string[];
  merchantIds?: string | string[];
  syncStockLogisticsPic?: boolean;
  reason?: string;
  configHome?: string;
}

interface ProductLaunchPackagePlan {
  packageName: string;
  existingPackage?: Record<string, unknown>;
  packageId?: string;
  saveBody: {
    packageId: string;
    pagName: string;
    status: 1;
    type: "add";
    itemCodes: string[];
  };
}

export type LaunchCheckStatus = "pass" | "warning" | "blocked";

export interface ProductLaunchCheck {
  phase: "master-data" | "image-sync" | "package-item" | "store-package" | "frontend-visibility";
  status: LaunchCheckStatus;
  summary: string;
}

export interface ProductLaunchIssue {
  code: string;
  phase: ProductLaunchCheck["phase"];
  message: string;
}

export interface ProductLaunchDiagnosis {
  itemCode: string;
  company: {
    companyId?: string;
    companyCode?: string;
    companyName?: string;
  };
  overallStatus: LaunchCheckStatus;
  checks: ProductLaunchCheck[];
  blockingIssues: ProductLaunchIssue[];
  warnings: ProductLaunchIssue[];
  evidence: {
    item?: Record<string, unknown>;
    packages: Array<Record<string, unknown>>;
    directCompanies: Array<Record<string, unknown>>;
    storePackages: Array<Record<string, unknown>>;
    matchedPackages: Array<Record<string, unknown>>;
    frontendProbe?: Record<string, unknown>;
  };
  nextActions: string[];
}

const endpoints = {
  masterSearch: "product/itemSearch/search",
  masterGet: "product/item/spec/getSpuDetailByItemId",
  mdmSyncByArticleCodes: "product/mdm/mdmItemSyncByArticleCodes",
  imageSyncByItemCode: "product/itemPicAsyncByItemCode",
  packageList: "product/pag/list",
  packageSave: "product/pag/save",
  packageCompBatch: "product/pag/comp/batchAddOrDelCompany",
  shAccountList: "product/findShAccount",
  storeGet: "hr/sysCompany/queryCompanyInfoById",
  itemPackageAndComp: "product/pag/comp/getItemPackageAndComp",
  packageCompList: "product/pag/comp/list",
};

export const productLaunchEndpoints = endpoints;

export async function setupProductLaunch(client: ApiClient, options: ProductLaunchSetupOptions) {
  assertWriteGate(options, "write");
  const itemCodes = parseCsv(options.itemCodes, "PRODUCT_LAUNCH_SETUP_REQUIRES_ITEM_CODES");
  const packageNames = parseCsv(options.packageNames, "PRODUCT_LAUNCH_SETUP_REQUIRES_PACKAGE_NAMES");
  const companyCodes = parseCsv(options.companyCodes, "PRODUCT_LAUNCH_SETUP_REQUIRES_COMPANY_CODES");

  if (itemCodes.length > 1000) throw new Error("PRODUCT_LAUNCH_SETUP_ITEM_CODES_LIMIT_1000");
  if (packageNames.length > 10) throw new Error("PRODUCT_LAUNCH_SETUP_PACKAGE_NAMES_LIMIT_10");
  if (companyCodes.length > 2000) throw new Error("PRODUCT_LAUNCH_SETUP_COMPANY_CODES_LIMIT_2000");

  const packagePlans: ProductLaunchPackagePlan[] = [];
  for (const packageName of packageNames) {
    const existingPackage = await findPackageByName(client, packageName);
    const packageId = firstString(existingPackage, ["packageId", "id", "fid"]);
    packagePlans.push({
      packageName,
      existingPackage,
      packageId,
      saveBody: {
        packageId: packageId ?? "",
        pagName: packageName,
        status: 1,
        type: "add",
        itemCodes,
      },
    });
  }
  const imageSyncTarget = await resolveImageSyncTarget(client, options);

  const mdmBody = { articleCodeList: itemCodes.join(",") };
  const imageBody = { items: itemCodes, syncStockLogisticsPic: imageSyncTarget.syncStockLogisticsPic, merchantIds: imageSyncTarget.merchantIds };
  const dryRunPackageIds = packagePlans.map((plan) => {
    return plan.packageId ? Number(plan.packageId) : `<product/pag/save.data:${plan.packageName}>`;
  });
  const apiCalls = [
    { method: "POST", endpoint: endpoints.mdmSyncByArticleCodes, body: mdmBody },
    { method: "POST", endpoint: endpoints.imageSyncByItemCode, body: imageBody },
    ...packagePlans.map((plan) => ({ method: "POST", endpoint: endpoints.packageSave, body: plan.saveBody })),
    {
      method: "POST",
      endpoint: endpoints.packageCompBatch,
      body: { companyCodes, applyPackageIds: dryRunPackageIds, optType: 1 },
    },
  ];

  const affected = 2 + packagePlans.length + 1;
  const baseResult = {
    ok: true,
    command: "product/launch-setup",
    itemCodes,
    packageNames,
    companyCodes,
    imageSyncTarget,
    packages: packagePlans.map((plan) => ({
      packageName: plan.packageName,
      packageId: plan.packageId,
      exists: Boolean(plan.packageId),
    })),
    affected,
    apiCalls,
  };

  if (options.dryRun) {
    await auditOperation(
      {
        command: "ops.product.launch-setup",
        access: "write",
        args: { itemCodes, packageNames, companyCodes, imageSyncTarget },
        configHome: options.configHome,
      },
      "dry-run",
    );
    return {
      ...baseResult,
      mode: "dry-run",
      nextActions: ["Review affected records", "Re-run with --confirm --reason after approval"],
    };
  }

  let stepName = "mdm-sync";
  try {
    const mdmResult = await runSetupStep(client, stepName, endpoints.mdmSyncByArticleCodes, mdmBody);
    stepName = "image-sync";
    const imageResult = await runSetupStep(client, stepName, endpoints.imageSyncByItemCode, imageBody);
    const packageResults = [];
    const packageIds: number[] = [];
    for (const plan of packagePlans) {
      stepName = `package-save:${plan.packageName}`;
      const saveResult = await runSetupStep(client, stepName, endpoints.packageSave, plan.saveBody);
      const packageId = Number(plan.packageId ?? firstScalar(saveResult, ["packageId", "id", "fid"]));
      if (!Number.isFinite(packageId)) throw new Error(`PRODUCT_LAUNCH_SETUP_PACKAGE_ID_MISSING:${plan.packageName}`);
      packageIds.push(packageId);
      packageResults.push({ packageName: plan.packageName, packageId, result: saveResult });
    }
    const linkBody = { companyCodes, applyPackageIds: packageIds, optType: 1 };
    stepName = "store-package-link";
    const linkResult = await runSetupStep(client, stepName, endpoints.packageCompBatch, linkBody);

    await auditOperation(
      {
        command: "ops.product.launch-setup",
        access: "write",
        args: { itemCodes, packageNames, companyCodes, imageSyncTarget, reason: options.reason },
        configHome: options.configHome,
      },
      "ok",
    );

    return {
      ...baseResult,
      mode: "applied",
      apiCalls: [
        { method: "POST", endpoint: endpoints.mdmSyncByArticleCodes, body: mdmBody },
        { method: "POST", endpoint: endpoints.imageSyncByItemCode, body: imageBody },
        ...packageResults.map((result) => ({
          method: "POST",
          endpoint: endpoints.packageSave,
          body: packagePlans.find((plan) => plan.packageName === result.packageName)?.saveBody,
          packageId: result.packageId,
        })),
        { method: "POST", endpoint: endpoints.packageCompBatch, body: linkBody },
      ],
      results: { mdm: mdmResult, image: imageResult, packages: packageResults, storePackageLink: linkResult },
    };
  } catch (error) {
    await auditOperation(
      {
        command: "ops.product.launch-setup",
        access: "write",
        args: { itemCodes, packageNames, companyCodes, imageSyncTarget, failedStep: stepName },
        configHome: options.configHome,
      },
      "error",
    );
    throw error;
  }
}

export async function diagnoseProductLaunch(client: ApiClient, options: ProductLaunchOptions): Promise<ProductLaunchDiagnosis> {
  const itemCode = String(options.itemCode ?? "").trim();
  if (!itemCode) throw new Error("PRODUCT_LAUNCH_CHECK_REQUIRES_ITEM_CODE");
  if (!options.companyId && !options.companyCode && !options.companyName) {
    throw new Error("PRODUCT_LAUNCH_CHECK_REQUIRES_STORE_CONTEXT");
  }

  const searchResult = await client.request("POST", endpoints.masterSearch, { itemCode, keyword: itemCode, pageIndex: 1, pageSize: 10 });
  const searchRows = extractRows(searchResult);
  const searchItem = searchRows.find((row) => sameValue(firstString(row, ["itemCode", "ItemCode", "code"]), itemCode)) ?? searchRows[0];
  const itemId = firstString(searchItem, ["itemId", "ItemID", "id", "fid"]);
  const detailResult = await client.request("POST", endpoints.masterGet, { itemCode, ...(itemId ? { itemId } : {}) });
  const detail = firstRecord(detailResult);
  const item = mergeRecords(searchItem, detail);
  const resolvedItemId = firstString(item, ["itemId", "ItemID", "id", "fid"]);

  const company = await resolveCompany(client, options);
  const packageAndComp = resolvedItemId
    ? firstRecord(await client.request("POST", endpoints.itemPackageAndComp, { itemIds: [resolvedItemId] }))
    : {};
  const packages = normalizePackages(arrayValue(packageAndComp.packageList));
  const directCompanies = normalizeCompanies(arrayValue(packageAndComp.companyList));
  const storePackages = await fetchStorePackages(client, company);
  const matchedPackages = matchPackages(packages, storePackages);
  const frontendProbe = await probeFrontendVisibility(client, itemCode, company);

  const blockingIssues: ProductLaunchIssue[] = [];
  const warnings: ProductLaunchIssue[] = [];

  if (!resolvedItemId) {
    blockingIssues.push({
      code: "MASTER_DATA_NOT_FOUND",
      phase: "master-data",
      message: "没有查到商品主数据，后续商品包配置和前端可见性都无法成立。",
    });
  }
  if (!hasImage(item)) {
    warnings.push({
      code: "PRODUCT_IMAGE_MISSING_OR_UNKNOWN",
      phase: "image-sync",
      message: "商品主图为空或接口未返回图片字段，可能需要同步深绘图片。",
    });
  }
  if (packages.length === 0) {
    blockingIssues.push({
      code: "PRODUCT_PACKAGE_ITEM_MISSING",
      phase: "package-item",
      message: "没有查到包含该商品的商品包，门店即使关联商品包也不会获得这个商品。",
    });
  }
  if (!isDirectCompanyMatched(directCompanies, company) && packages.length > 0 && matchedPackages.length === 0) {
    blockingIssues.push({
      code: "STORE_PACKAGE_NOT_LINKED",
      phase: "store-package",
      message: "门店没有关联包含该商品的商品包，前端对应门店可能看不到该商品或不能下单。",
    });
  }
  if (!frontendVisible(frontendProbe)) {
    warnings.push({
      code: "FRONTEND_VISIBILITY_NOT_CONFIRMED",
      phase: "frontend-visibility",
      message: "客户侧商品搜索未确认该商品可见，需结合门店上下文、上下架和订单状态继续验证。",
    });
  }

  const checks: ProductLaunchCheck[] = [
    {
      phase: "master-data",
      status: resolvedItemId ? "pass" : "blocked",
      summary: resolvedItemId ? `已查到商品主数据 itemId=${resolvedItemId}` : "未查到商品主数据",
    },
    {
      phase: "image-sync",
      status: hasImage(item) ? "pass" : "warning",
      summary: hasImage(item) ? "商品图片字段已返回" : "商品图片字段为空或未知",
    },
    {
      phase: "package-item",
      status: packages.length > 0 ? "pass" : "blocked",
      summary: packages.length > 0 ? `商品已配置到 ${packages.length} 个商品包` : "商品尚未配置到商品包",
    },
    {
      phase: "store-package",
      status: isDirectCompanyMatched(directCompanies, company) || matchedPackages.length > 0 ? "pass" : packages.length > 0 ? "blocked" : "warning",
      summary: storePackageSummary(company, directCompanies, matchedPackages),
    },
    {
      phase: "frontend-visibility",
      status: frontendVisible(frontendProbe) ? "pass" : "warning",
      summary: frontendVisible(frontendProbe) ? "客户侧商品搜索已返回该商品" : "客户侧商品搜索未确认该商品可见",
    },
  ];

  return {
    itemCode,
    company,
    overallStatus: blockingIssues.length > 0 ? "blocked" : warnings.length > 0 ? "warning" : "pass",
    checks,
    blockingIssues,
    warnings,
    evidence: {
      item: Object.keys(item).length ? item : undefined,
      packages,
      directCompanies,
      storePackages,
      matchedPackages,
      frontendProbe,
    },
    nextActions: nextActions(itemCode, company, packages, matchedPackages, blockingIssues, warnings),
  };
}

async function resolveCompany(client: ApiClient, options: ProductLaunchOptions): Promise<ProductLaunchDiagnosis["company"]> {
  if (!options.companyId) {
    return cleanRecord({
      companyCode: options.companyCode,
      companyName: options.companyName,
    });
  }
  const result = firstRecord(await client.request("GET", endpoints.storeGet, { companyId: options.companyId }));
  return cleanRecord({
    companyId: firstString(result, ["companyId", "fid", "id"]) ?? options.companyId,
    companyCode: firstString(result, ["companyCode", "code"]) ?? options.companyCode,
    companyName: firstString(result, ["companyName", "name"]) ?? options.companyName,
  });
}

async function fetchStorePackages(client: ApiClient, company: ProductLaunchDiagnosis["company"]): Promise<Array<Record<string, unknown>>> {
  if (!company.companyId && !company.companyCode && !company.companyName) return [];
  const result = await client.request("POST", endpoints.packageCompList, {
    companyId: company.companyId,
    companyCode: company.companyCode,
    companyName: company.companyName,
    companyIdList: company.companyId ? [company.companyId] : undefined,
    companyCodeList: company.companyCode ? [company.companyCode] : undefined,
    companyNameList: company.companyName ? [company.companyName] : undefined,
  });
  const rows = extractRows(result);
  return rows.flatMap((row) => normalizePackages(arrayValue(row.packageVOList ?? row.packageList ?? row.packages)));
}

async function probeFrontendVisibility(
  client: ApiClient,
  itemCode: string,
  company: ProductLaunchDiagnosis["company"],
): Promise<Record<string, unknown>> {
  const result = await client.request("POST", endpoints.masterSearch, {
    keyword: itemCode,
    itemCode,
    companyId: company.companyId,
    pageIndex: 1,
    pageSize: 10,
  });
  const rows = extractRows(result);
  return {
    count: rows.length,
    matched: rows.some((row) => sameValue(firstString(row, ["itemCode", "ItemCode", "code"]), itemCode)),
    sample: rows.slice(0, 3),
  };
}

function nextActions(
  itemCode: string,
  company: ProductLaunchDiagnosis["company"],
  packages: Array<Record<string, unknown>>,
  matchedPackages: Array<Record<string, unknown>>,
  blockingIssues: ProductLaunchIssue[],
  warnings: ProductLaunchIssue[],
): string[] {
  const actions: string[] = [];
  const firstPackage = packages[0];
  const packageCode = firstString(firstPackage, ["packageCode", "code"]) ?? "<商品包编码>";
  const companyLabel = company.companyCode && company.companyName ? `${company.companyCode} / ${company.companyName}` : company.companyCode ?? company.companyName ?? company.companyId ?? "<门店>";

  if (blockingIssues.some((issue) => issue.code === "MASTER_DATA_NOT_FOUND")) {
    actions.push(`先执行主数据同步或导入，再用 ops product master search --item-code ${itemCode} 复查。`);
  }
  if (warnings.some((issue) => issue.code === "PRODUCT_IMAGE_MISSING_OR_UNKNOWN")) {
    actions.push(`如商品图片缺失，先 dry-run 再执行 ops product image-sync --item-code ${itemCode}。`);
  }
  if (blockingIssues.some((issue) => issue.code === "PRODUCT_PACKAGE_ITEM_MISSING")) {
    actions.push(`在“商品包配置”中把商品 ${itemCode} 加入目标商品包，然后复查 launch-check。`);
  }
  if (blockingIssues.some((issue) => issue.code === "STORE_PACKAGE_NOT_LINKED")) {
    actions.push(`在“商品包关联”中把门店 ${companyLabel} 关联到商品包 ${packageCode}。`);
  }
  if (matchedPackages.length > 0 && blockingIssues.length === 0) {
    actions.push("可以继续做客户侧下单/购物车 dry-run 验证，确认库存、价格和订单规则没有额外拦截。");
  }
  if (actions.length === 0) {
    actions.push("未发现商品包链路阻断点；如前端仍不可见，继续检查上下架状态、订单状态、库存和价格策略。");
  }
  return actions;
}

function storePackageSummary(
  company: ProductLaunchDiagnosis["company"],
  directCompanies: Array<Record<string, unknown>>,
  matchedPackages: Array<Record<string, unknown>>,
): string {
  if (isDirectCompanyMatched(directCompanies, company)) return "该门店存在直接商品应用记录";
  if (matchedPackages.length > 0) return `该门店已关联 ${matchedPackages.length} 个包含该商品的商品包`;
  return "未确认该门店关联了包含该商品的商品包";
}

function normalizePackages(rows: Array<Record<string, unknown>>): Array<Record<string, unknown>> {
  return uniqueBy(
    rows.map((row) => cleanRecord({
      packageId: firstString(row, ["packageId", "id"]),
      packageCode: firstString(row, ["packageCode", "code"]),
      packageName: firstString(row, ["packageName", "name"]),
    })),
    (row) => firstString(row, ["packageId", "packageCode", "packageName"]) ?? JSON.stringify(row),
  );
}

function normalizeCompanies(rows: Array<Record<string, unknown>>): Array<Record<string, unknown>> {
  return uniqueBy(
    rows.map((row) => cleanRecord({
      companyId: firstString(row, ["companyId", "id", "fid"]),
      companyCode: firstString(row, ["companyCode", "code"]),
      companyName: firstString(row, ["companyName", "name"]),
    })),
    (row) => firstString(row, ["companyId", "companyCode", "companyName"]) ?? JSON.stringify(row),
  );
}

function matchPackages(packages: Array<Record<string, unknown>>, storePackages: Array<Record<string, unknown>>): Array<Record<string, unknown>> {
  return packages.filter((pkg) => storePackages.some((storePkg) => samePackage(pkg, storePkg)));
}

function samePackage(left: Record<string, unknown>, right: Record<string, unknown>): boolean {
  return Boolean(
    (firstString(left, ["packageId"]) && firstString(left, ["packageId"]) === firstString(right, ["packageId"])) ||
      (firstString(left, ["packageCode"]) && firstString(left, ["packageCode"]) === firstString(right, ["packageCode"])),
  );
}

function isDirectCompanyMatched(companies: Array<Record<string, unknown>>, company: ProductLaunchDiagnosis["company"]): boolean {
  return companies.some((row) => {
    const companyId = firstString(row, ["companyId"]);
    const companyCode = firstString(row, ["companyCode"]);
    const companyName = firstString(row, ["companyName"]);
    return Boolean(
      (company.companyId && companyId === company.companyId) ||
        (company.companyCode && companyCode === company.companyCode) ||
        (company.companyName && companyName === company.companyName),
    );
  });
}

function frontendVisible(probe: Record<string, unknown> | undefined): boolean {
  return probe?.matched === true || Number(probe?.count ?? 0) > 0;
}

function hasImage(item: Record<string, unknown>): boolean {
  return Boolean(firstString(item, ["headImage", "imageUrl", "imageUrlFull", "picUrl", "mainPic", "mainImage"]));
}

function mergeRecords(...records: Array<Record<string, unknown> | undefined>): Record<string, unknown> {
  return Object.assign({}, ...records.filter(Boolean));
}

function firstRecord(input: unknown): Record<string, unknown> {
  if (isRecord(input)) {
    const data = input.data ?? input.Data ?? input.result;
    if (isRecord(data)) return data;
    const rows = extractRows(input);
    if (rows[0]) return rows[0];
    return input;
  }
  return {};
}

async function findPackageByName(client: ApiClient, packageName: string): Promise<Record<string, unknown> | undefined> {
  const result = await client.request("POST", endpoints.packageList, {
    productPagName: packageName,
    productPagNames: [packageName],
    pageIndex: 1,
    pageSize: 20,
  });
  return extractRows(result).find((row) => firstString(row, ["packageName", "pagName", "productPagName", "name"]) === packageName);
}

async function resolveImageSyncTarget(
  client: ApiClient,
  options: ProductLaunchSetupOptions,
): Promise<{ source: "explicit" | "auto-sh-account" | "stock-logistics-pic"; syncStockLogisticsPic: boolean; merchantIds: number[] }> {
  const explicitMerchantIds = parseOptionalNumbers(options.merchantIds, "PRODUCT_LAUNCH_SETUP_MERCHANT_IDS_INVALID");
  if (explicitMerchantIds.length > 0 || options.syncStockLogisticsPic) {
    return {
      source: explicitMerchantIds.length > 0 ? "explicit" : "stock-logistics-pic",
      syncStockLogisticsPic: options.syncStockLogisticsPic === true,
      merchantIds: explicitMerchantIds,
    };
  }

  const accounts = extractRows(await client.request("POST", endpoints.shAccountList, {}));
  const merchantIds = uniqueBy(
    accounts
      .map((account) => firstString(account, ["merchantId", "id"]))
      .filter((id): id is string => Boolean(id))
      .map(Number)
      .filter(Number.isFinite),
    String,
  );
  if (merchantIds.length === 0) throw new Error("PRODUCT_LAUNCH_SETUP_IMAGE_SYNC_REQUIRES_MERCHANT_IDS_OR_STOCK_LOGISTICS_PIC");
  return { source: "auto-sh-account", syncStockLogisticsPic: false, merchantIds };
}

async function runSetupStep(client: ApiClient, stepName: string, endpoint: string, body: unknown): Promise<unknown> {
  try {
    return await client.request("POST", endpoint, body);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`PRODUCT_LAUNCH_SETUP_FAILED:${stepName}:${message}`);
  }
}

function parseCsv(input: string | string[], errorCode: string): string[] {
  const values = (Array.isArray(input) ? input : [input])
    .flatMap((value) => String(value ?? "").split(/[\n,]/))
    .map((value) => value.trim())
    .filter(Boolean);
  const uniqueValues = uniqueBy(values, (value) => value);
  if (uniqueValues.length === 0) throw new Error(errorCode);
  return uniqueValues;
}

function parseOptionalNumbers(input: string | string[] | undefined, errorCode: string): number[] {
  if (input === undefined) return [];
  const values = parseCsv(input, errorCode).map(Number);
  if (values.some((value) => !Number.isFinite(value))) throw new Error(errorCode);
  return uniqueBy(values, String);
}

function firstScalar(input: unknown, keys: string[]): string | number | undefined {
  if (typeof input === "string" || typeof input === "number") return input;
  if (!isRecord(input)) return undefined;
  for (const key of keys) {
    const value = input[key];
    if ((typeof value === "string" || typeof value === "number") && String(value).trim()) return value;
  }
  for (const key of ["data", "Data", "result"]) {
    const nested = firstScalar(input[key], keys);
    if (nested !== undefined) return nested;
  }
  return undefined;
}

function extractRows(input: unknown): Array<Record<string, unknown>> {
  if (Array.isArray(input)) return input.filter(isRecord);
  if (!isRecord(input)) return [];
  for (const key of ["content", "DataLine", "data", "Data", "rows", "records", "list", "items"]) {
    const value = input[key];
    if (Array.isArray(value)) return value.filter(isRecord);
    if (isRecord(value)) {
      const nested = extractRows(value);
      if (nested.length > 0) return nested;
    }
  }
  return [];
}

function arrayValue(input: unknown): Array<Record<string, unknown>> {
  return Array.isArray(input) ? input.filter(isRecord) : [];
}

function isRecord(input: unknown): input is Record<string, unknown> {
  return Boolean(input && typeof input === "object" && !Array.isArray(input));
}

function cleanRecord<T extends Record<string, unknown>>(record: T): T {
  return Object.fromEntries(Object.entries(record).filter(([, value]) => value !== undefined && value !== "")) as T;
}

function firstString(record: Record<string, unknown> | undefined, keys: string[]): string | undefined {
  if (!record) return undefined;
  for (const key of keys) {
    const value = record[key];
    if (value !== undefined && value !== null && String(value).trim()) return String(value).trim();
  }
  return undefined;
}

function sameValue(left: string | undefined, right: string | undefined): boolean {
  return Boolean(left && right && left.toLowerCase() === right.toLowerCase());
}

function uniqueBy<T>(rows: T[], keyFn: (row: T) => string): T[] {
  const seen = new Set<string>();
  const result: T[] = [];
  for (const row of rows) {
    const key = keyFn(row);
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(row);
  }
  return result;
}
