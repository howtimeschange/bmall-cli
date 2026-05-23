import { authorizeWriteGate, auditOperation, dryRunPlan, type WriteGateOptions } from "./safety.js";
import { diagnoseProductLaunch, setupProductLaunch } from "./product-launch.js";

export interface ProductWriteOptions extends WriteGateOptions {
  input?: string;
  itemCode?: string;
  reason?: string;
  configHome?: string;
}

export interface ProductApplyAddOptions extends WriteGateOptions {
  itemCode: string;
  companyId?: string;
  defaultStore?: boolean;
  reason?: string;
  configHome?: string;
}

type ApiClient = {
  request: (method: string, path: string, body?: unknown) => Promise<unknown>;
  context?: () => Promise<Record<string, unknown>>;
};
type CommandLike = {
  command(name: string): CommandLike;
  description(text: string): CommandLike;
  option(flags: string, description?: string, defaultValue?: unknown): CommandLike;
  requiredOption(flags: string, description?: string): CommandLike;
  action(fn: (options: Record<string, unknown>) => unknown): CommandLike;
};

type OutputFn = (payload: unknown) => void;

const endpoints = {
  masterSearch: "product/itemSearch/search",
  brandItemsPage: "product/item/brandItems/page",
  masterGet: "product/item/spec/getSpuDetailByItemId",
  masterImport: "file/import/product/mitem/excelAdd",
  applyList: "product/mitemcomp/list",
  applyUpdate: "product/mitemcomp/opt",
  configAppcodeList: "config/appcode/list",
  storeGet: "hr/sysCompany/queryCompanyInfoById",
  groupList: "product/item/group/list",
  packageList: "product/pag/comp/list",
  tagList: "product/activitylabel/getActivityLabelOfConditions",
  priceCheck: "product/pricelist/b2b/types",
  imageSync: "product/itemPicAsyncByItemCode",
};

function emit(output: OutputFn | undefined, payload: unknown): unknown {
  if (output) output(payload);
  return payload;
}

function requireClient(client: ApiClient | undefined, command: string): ApiClient {
  if (!client) throw new Error(`${command.toUpperCase().replaceAll(".", "_").replaceAll("-", "_")}_REQUIRES_API_CLIENT`);
  return client;
}

export async function productWritePlan(command: string, options: ProductWriteOptions, endpoint = command) {
  await authorizeWriteGate(options, "write", {
    command: `ops.${command.replaceAll("/", ".")}`,
    summary: productWriteSummary(command, options),
  });
  const result = dryRunPlan(command, options.input ? 1 : 0, [
    { method: "POST", endpoint, input: options.input ?? null, itemCode: options.itemCode ?? null },
  ]);
  await auditOperation({ command: `ops.${command.replaceAll("/", ".")}`, access: "write", args: { ...options }, configHome: options.configHome }, options.dryRun ? "dry-run" : "ok");
  return result;
}

async function runProductWrite(command: string, endpoint: string, options: ProductWriteOptions, client?: ApiClient) {
  await authorizeWriteGate(options, "write", {
    command: `ops.${command.replaceAll("/", ".")}`,
    summary: productWriteSummary(command, options),
  });
  if (options.dryRun) return productWritePlan(command, options, endpoint);
  const body = Object.fromEntries(Object.entries(options).filter(([key, value]) => !["dryRun", "confirm", "reason", "json"].includes(key) && value !== undefined && value !== ""));
  const result = await requireClient(client, command).request("POST", endpoint, body);
  await auditOperation({ command: `ops.${command.replaceAll("/", ".")}`, access: "write", args: body, configHome: options.configHome }, "ok");
  return result;
}

export async function addProductApplication(client: ApiClient, options: ProductApplyAddOptions) {
  const itemCode = String(options.itemCode ?? "").trim();
  if (!itemCode) throw new Error("PRODUCT_APPLY_ADD_REQUIRES_ITEM_CODE");

  const context = client.context ? await client.context() : {};
  const company = await resolveApplyCompany(client, options, context);
  const item = await resolveBrandItem(client, itemCode);
  const existing = await findExistingApplication(client, item, company);
  const payload = { taskType: "add", companyIds: [company.companyId], itemIds: [item.itemId] };
  await authorizeWriteGate(options, "write", {
    command: "ops.product.apply.add",
    summary: `给公司 ${company.companyId} 添加商品应用 ${itemCode}。`,
  });
  const baseResult = {
    command: "product/apply/add",
    item,
    company,
    alreadyApplied: Boolean(existing),
    apiCalls: [{ method: "POST", endpoint: endpoints.applyUpdate, body: payload }],
  };

  if (options.dryRun) {
    await auditOperation(
      {
        command: "ops.product.apply.add",
        access: "write",
        args: { itemCode, companyId: company.companyId, defaultStore: options.defaultStore ?? false },
        configHome: options.configHome,
      },
      "dry-run",
    );
    return {
      ok: true,
      mode: "dry-run",
      affected: existing ? 0 : 1,
      ...baseResult,
      nextActions: existing
        ? ["该商品应用已存在，无需重复新增。"]
        : ["Review affected records", "Re-run with --confirm --reason after approval"],
    };
  }

  if (existing) {
    await auditOperation(
      {
        command: "ops.product.apply.add",
        access: "write",
        args: { itemCode, companyId: company.companyId, defaultStore: options.defaultStore ?? false, skipped: "already-applied" },
        configHome: options.configHome,
      },
      "ok",
    );
    return { ok: true, mode: "noop", affected: 0, ...baseResult, result: existing };
  }

  const result = await client.request("POST", endpoints.applyUpdate, payload);
  await auditOperation(
    {
      command: "ops.product.apply.add",
      access: "write",
      args: { itemCode, companyId: company.companyId, defaultStore: options.defaultStore ?? false },
      configHome: options.configHome,
    },
    "ok",
  );
  return { ok: true, mode: "applied", affected: 1, ...baseResult, result };
}

function productWriteSummary(command: string, options: ProductWriteOptions): string {
  if (options.itemCode) return `${command} 将处理商品 ${options.itemCode}。`;
  if (options.input) return `${command} 将按文件 ${options.input} 执行批量写操作。`;
  return `${command} 将修改商品相关业务数据。`;
}

export function registerOpsProductCommands(program: CommandLike, client?: ApiClient, output?: OutputFn) {
  const product = program.command("product").description("Product operations commands");

  const master = product.command("master").description("Product master data commands");
  master.command("search").option("--item-code <itemCode>").option("--keyword <keyword>").option("--json").action(async (options) => {
    return emit(output, await requireClient(client, "ops.product.master.search").request("POST", endpoints.masterSearch, options));
  });
  master.command("get").requiredOption("--item-code <itemCode>").option("--json").action(async (options) => {
    return emit(output, await requireClient(client, "ops.product.master.get").request("POST", endpoints.masterGet, options));
  });
  master.command("import").requiredOption("--input <file>").option("--dry-run").option("--confirm").option("--reason <reason>").option("--json").action(async (options) => {
    return emit(output, await runProductWrite("product/master/import", endpoints.masterImport, options, client));
  });

  const apply = product.command("apply").description("Product application commands");
  apply.command("list").option("--item-code <itemCode>").option("--json").action(async (options) => {
    return emit(output, await requireClient(client, "ops.product.apply.list").request("POST", endpoints.applyList, options));
  });
  apply.command("update").requiredOption("--input <file>").option("--dry-run").option("--confirm").option("--reason <reason>").option("--json").action(async (options) => {
    return emit(output, await runProductWrite("product/apply/update", endpoints.applyUpdate, options, client));
  });
  apply.command("add")
    .requiredOption("--item-code <itemCode>")
    .option("--company-id <companyId>")
    .option("--default-store")
    .option("--dry-run")
    .option("--confirm")
    .option("--reason <reason>")
    .option("--json")
    .action(async (options) => {
      return emit(output, await addProductApplication(requireClient(client, "ops.product.apply.add"), {
        itemCode: String(options.itemCode),
        companyId: typeof options.companyId === "string" ? options.companyId : undefined,
        defaultStore: options.defaultStore === true,
        dryRun: options.dryRun === true,
        confirm: options.confirm === true,
        reason: typeof options.reason === "string" ? options.reason : undefined,
      }));
    });

  product.command("group").description("Product group commands").command("list").option("--item-code <itemCode>").option("--json").action(async (options) => emit(output, await requireClient(client, "ops.product.group.list").request("POST", endpoints.groupList, options)));
  product.command("package").description("Product package commands").command("list").option("--item-code <itemCode>").option("--json").action(async (options) => emit(output, await requireClient(client, "ops.product.package.list").request("POST", endpoints.packageList, options)));
  product.command("tag").description("Product tag commands").command("list").option("--item-code <itemCode>").option("--json").action(async (options) => emit(output, await requireClient(client, "ops.product.tag.list").request("POST", endpoints.tagList, options)));
  product.command("price").description("Product price commands").command("check").requiredOption("--item-code <itemCode>").option("--json").action(async (options) => emit(output, await requireClient(client, "ops.product.price.check").request("POST", endpoints.priceCheck, options)));
  product.command("launch-check")
    .description("Diagnose product launch readiness across master data, image, package, and store package application")
    .requiredOption("--item-code <itemCode>")
    .option("--company-id <companyId>")
    .option("--company-code <companyCode>")
    .option("--company-name <companyName>")
    .option("--json")
    .action(async (options) => {
      return emit(output, await diagnoseProductLaunch(requireClient(client, "ops.product.launch-check"), {
        itemCode: String(options.itemCode),
        companyId: typeof options.companyId === "string" ? options.companyId : undefined,
        companyCode: typeof options.companyCode === "string" ? options.companyCode : undefined,
        companyName: typeof options.companyName === "string" ? options.companyName : undefined,
      }));
    });
  product.command("launch-setup")
    .description("Execute the full product launch setup chain: MDM sync, image sync, product package item config, and store package application")
    .requiredOption("--item-codes <itemCodes>")
    .requiredOption("--package-names <packageNames>")
    .requiredOption("--company-codes <companyCodes>")
    .option("--merchant-ids <merchantIds>")
    .option("--sync-stock-logistics-pic")
    .option("--dry-run")
    .option("--confirm")
    .option("--reason <reason>")
    .option("--json")
    .action(async (options) => {
      return emit(output, await setupProductLaunch(requireClient(client, "ops.product.launch-setup"), {
        itemCodes: String(options.itemCodes),
        packageNames: String(options.packageNames),
        companyCodes: String(options.companyCodes),
        merchantIds: typeof options.merchantIds === "string" ? options.merchantIds : undefined,
        syncStockLogisticsPic: options.syncStockLogisticsPic === true,
        dryRun: options.dryRun === true,
        confirm: options.confirm === true,
        reason: typeof options.reason === "string" ? options.reason : undefined,
      }));
    });
  product.command("image-sync").requiredOption("--item-code <itemCode>").option("--dry-run").option("--confirm").option("--reason <reason>").option("--json").action(async (options) => {
    return emit(output, await runProductWrite("product/image-sync", endpoints.imageSync, options, client));
  });

  return product;
}

async function resolveApplyCompany(
  client: ApiClient,
  options: ProductApplyAddOptions,
  context: Record<string, unknown>,
): Promise<{ companyId: string; companyCode?: string; companyName?: string; source: "option" | "default-store" }> {
  const explicitCompanyId = String(options.companyId ?? "").trim();
  if (explicitCompanyId) {
    return { ...(await getCompany(client, explicitCompanyId)), source: "option" };
  }
  if (!options.defaultStore) throw new Error("PRODUCT_APPLY_ADD_REQUIRES_COMPANY_ID_OR_DEFAULT_STORE");
  const groupId = firstString(context, ["groupId"]);
  if (!groupId) throw new Error("PRODUCT_APPLY_ADD_DEFAULT_STORE_REQUIRES_GROUP_ID");
  const config = firstRecord(await client.request("POST", endpoints.configAppcodeList, {
    optionName: "DOrderSet",
    companyId: groupId,
    pageIndex: 1,
    pageSize: 1,
  }));
  const defaultCompanyId = firstString(config, ["defaultItemApplyCompanyId"]);
  if (!defaultCompanyId) throw new Error("PRODUCT_APPLY_ADD_DEFAULT_STORE_NOT_CONFIGURED");
  return { ...(await getCompany(client, defaultCompanyId)), source: "default-store" };
}

async function getCompany(client: ApiClient, companyId: string): Promise<{ companyId: string; companyCode?: string; companyName?: string }> {
  const company = firstRecord(await client.request("GET", endpoints.storeGet, { companyId }));
  return {
    companyId: firstString(company, ["companyId", "fid", "id"]) ?? companyId,
    companyCode: firstString(company, ["companyCode", "code"]),
    companyName: firstString(company, ["companyName", "name"]),
  };
}

async function resolveBrandItem(client: ApiClient, itemCode: string): Promise<{ itemId: string; itemCode: string; itemName?: string }> {
  const brandPageItem = await tryResolveBrandItemPage(client, itemCode);
  if (brandPageItem) return brandPageItem;

  const result = await client.request("POST", endpoints.masterSearch, {
    sword: itemCode,
    queryType: "2",
    pageIndex: 1,
    pageSize: 20,
  });
  const matches = extractRows(result).filter((row) => sameValue(firstString(row, ["itemCode", "ItemCode", "code"]), itemCode));
  const uniqueMatches = uniqueBy(matches, (row) => firstString(row, ["itemId", "id", "fid"]) ?? JSON.stringify(row));
  if (uniqueMatches.length === 0) throw new Error("PRODUCT_APPLY_ADD_ITEM_NOT_FOUND");
  if (uniqueMatches.length > 1) throw new Error("PRODUCT_APPLY_ADD_ITEM_NOT_UNIQUE");
  const item = uniqueMatches[0];
  const itemId = firstString(item, ["itemId", "ItemID", "id", "fid"]);
  if (!itemId) throw new Error("PRODUCT_APPLY_ADD_ITEM_ID_MISSING");
  return {
    itemId,
    itemCode,
    itemName: firstString(item, ["itemName", "name"]),
  };
}

async function tryResolveBrandItemPage(client: ApiClient, itemCode: string): Promise<{ itemId: string; itemCode: string; itemName?: string } | undefined> {
  let result: unknown;
  try {
    result = await client.request("POST", endpoints.brandItemsPage, {
      pageType: "2",
      itemSearchType: 1,
      itemSearchCodeList: [itemCode],
      pageIndex: 1,
      pageSize: 20,
    });
  } catch {
    return undefined;
  }
  const matches = extractRows(result).filter((row) => sameValue(firstString(row, ["itemCode", "ItemCode", "code"]), itemCode));
  if (matches.length === 0) return undefined;
  const uniqueMatches = uniqueBy(matches, (row) => firstString(row, ["itemId", "id", "fid"]) ?? JSON.stringify(row));
  if (uniqueMatches.length > 1) throw new Error("PRODUCT_APPLY_ADD_ITEM_NOT_UNIQUE");
  const item = uniqueMatches[0];
  const itemId = firstString(item, ["itemId", "ItemID", "id", "fid"]);
  if (!itemId) throw new Error("PRODUCT_APPLY_ADD_ITEM_ID_MISSING");
  return {
    itemId,
    itemCode,
    itemName: firstString(item, ["itemName", "name"]),
  };
}

async function findExistingApplication(
  client: ApiClient,
  item: { itemId: string },
  company: { companyId: string; companyCode?: string; companyName?: string },
): Promise<Record<string, unknown> | undefined> {
  const result = await client.request("POST", endpoints.applyList, {
    taskType: "item",
    itemId: item.itemId,
    sword: company.companyCode ?? company.companyName ?? company.companyId,
    pageIndex: 1,
    pageSize: 20,
  });
  return extractRows(result).find((row) => firstString(row, ["companyId", "id", "fid"]) === company.companyId);
}

function firstRecord(input: unknown): Record<string, unknown> {
  if (isRecord(input)) {
    const data = input.data ?? input.Data ?? input.result;
    if (isRecord(data)) {
      const nestedRows = extractRows(data);
      if (nestedRows[0]) return nestedRows[0];
      return data;
    }
    const rows = extractRows(input);
    if (rows[0]) return rows[0];
    return input;
  }
  return {};
}

function extractRows(input: unknown): Array<Record<string, unknown>> {
  if (Array.isArray(input)) return input.filter(isRecord);
  if (!isRecord(input)) return [];
  for (const key of ["content", "DataLine", "data", "Data", "rows", "records", "list", "items", "itemList", "itemSpecList"]) {
    const value = input[key];
    if (Array.isArray(value)) return value.filter(isRecord);
    if (isRecord(value)) {
      const nested = extractRows(value);
      if (nested.length > 0) return nested;
    }
  }
  return [];
}

function isRecord(input: unknown): input is Record<string, unknown> {
  return Boolean(input && typeof input === "object" && !Array.isArray(input));
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
