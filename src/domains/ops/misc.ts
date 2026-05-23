import { authorizeWriteGate, auditOperation, dryRunPlan, type WriteGateOptions } from "./safety.js";

type ApiClient = { request: (method: string, path: string, body?: unknown) => Promise<unknown> };
type CommandLike = {
  command(name: string): CommandLike;
  description(text: string): CommandLike;
  option(flags: string, description?: string, defaultValue?: unknown): CommandLike;
  requiredOption(flags: string, description?: string): CommandLike;
  action(fn: (options: Record<string, unknown>) => unknown): CommandLike;
};

type OutputFn = (payload: unknown) => void;
type RequestMethod = "GET" | "POST";
const requireClient = (client: ApiClient | undefined, command: string): ApiClient => {
  if (!client) throw new Error(`${command.toUpperCase().replaceAll(" ", "_")}_REQUIRES_API_CLIENT`);
  return client;
};
function emit(output: OutputFn | undefined, payload: unknown): unknown {
  if (output) output(payload);
  return payload;
}

function cleanBody(options: Record<string, unknown>, extra: Record<string, unknown> = {}) {
  return Object.fromEntries(
    Object.entries({ ...options, ...extra }).filter(([key, value]) => key !== "json" && value !== undefined && value !== ""),
  );
}

function request(client: ApiClient | undefined, command: string, method: RequestMethod, path: string, body: Record<string, unknown>) {
  return requireClient(client, command).request(method, path, cleanBody(body));
}

function csvOption(value: unknown): string[] | undefined {
  if (typeof value !== "string") return undefined;
  const values = value.split(",").map((item) => item.trim()).filter(Boolean);
  return values.length ? values : undefined;
}

function firstString(...values: unknown[]): string | undefined {
  for (const value of values) {
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return undefined;
}

function syncStatusList(value: unknown): string[] | undefined {
  const text = firstString(value);
  return text && text !== "all" ? [text] : undefined;
}

function syncStatusValue(value: unknown): string | undefined {
  const text = firstString(value);
  return text && text !== "all" ? text : undefined;
}

function requireMdmConfirmTarget(syncAll: unknown, codes: unknown[] | undefined, error: string): void {
  if (syncAll === true || (Array.isArray(codes) && codes.length > 0)) return;
  throw new Error(error);
}

function writeSummary(command: string, body: Record<string, unknown>): string {
  if (Array.isArray(body.companyCodes)) return `${command} 将处理 ${body.companyCodes.length} 个门店编码。`;
  if (Array.isArray(body.distributorCodes)) return `${command} 将处理 ${body.distributorCodes.length} 个经销商编码。`;
  if (body.syncAll === true) return `${command} 将确认全部 MDM 暂存记录。`;
  if (body.startTime && body.endTime) return `${command} 将处理 ${String(body.startTime)} 到 ${String(body.endTime)} 的 MDM 更新。`;
  if (body.key) return `${command} 将修改配置 ${String(body.key)}。`;
  return `${command} 将修改 Bmall 业务数据。`;
}

async function runWriteEndpoint(
  client: ApiClient | undefined,
  output: OutputFn | undefined,
  command: string,
  endpoint: string,
  options: WriteGateOptions & Record<string, unknown>,
  body: Record<string, unknown>,
) {
  const clean = cleanBody(body);
  await authorizeWriteGate(options, "write", {
    command,
    summary: writeSummary(command, clean),
  });
  if (options.dryRun) {
    const result = dryRunPlan(command, Array.isArray(clean.companyCodes) ? clean.companyCodes.length : Array.isArray(clean.distributorCodes) ? clean.distributorCodes.length : 1, [
      { method: "POST", endpoint, body: clean },
    ]);
    await auditOperation({ command, access: "write", args: clean }, "dry-run");
    return emit(output, result);
  }
  const result = await requireClient(client, command).request("POST", endpoint, clean);
  await auditOperation({ command, access: "write", args: clean }, "ok");
  return emit(output, result);
}

function customerLookup(options: Record<string, unknown>) {
  if (options.companyId) {
    return {
      method: "POST" as const,
      path: "hr/sysCompany/queryCompanyInfosById",
      body: { companyIds: [options.companyId] },
    };
  }
  if (options.companyCode) {
    return {
      method: "POST" as const,
      path: "hr/sysCompany/queryCompanyInfosByCode",
      body: { companyCodes: [options.companyCode] },
    };
  }
  throw new Error("CUSTOMER_GET_REQUIRES_COMPANY_ID_OR_CODE");
}

export function registerOpsMiscCommands(program: CommandLike, client?: ApiClient, output?: OutputFn) {
  const ops = program;

  const stock = ops.command("stock").description("Stock operations commands");
  stock.command("query").option("--item-code <itemCode>").option("--sku-code <skuCode>").option("--page-index <pageIndex>").option("--page-size <pageSize>").option("--json").action(async (options) => {
    return emit(output, await request(client, "stock query", "POST", "product/itemStock/statistics/page", { pageIndex: Number(options.pageIndex ?? 1), pageSize: Number(options.pageSize ?? 20), itemCode: options.itemCode, skuCode: options.skuCode }));
  });
  stock.command("sync-status").option("--item-code <itemCode>").option("--page-index <pageIndex>").option("--page-size <pageSize>").option("--json").action(async (options) => {
    return emit(output, await request(client, "stock sync-status", "POST", "product/item/page/syncStockSellOut", { pageIndex: Number(options.pageIndex ?? 1), pageSize: Number(options.pageSize ?? 20), itemCodeList: options.itemCode ? [options.itemCode] : undefined }));
  });

  ops.command("customer").description("Customer operations commands").command("get").option("--company-code <companyCode>").option("--company-id <companyId>").option("--json").action(async (options) => {
    const lookup = customerLookup(options);
    return emit(output, await request(client, "customer get", lookup.method, lookup.path, lookup.body));
  });
  const store = ops.command("store").description("Store operations commands");
  store.command("get").requiredOption("--company-id <companyId>").option("--json").action(async (options) => emit(output, await request(client, "store get", "GET", "hr/sysCompany/queryCompanyInfoById", { companyId: options.companyId })));
  const storeMdm = store.command("mdm").description("Store master-data sync commands");
  storeMdm.command("sync-by-codes").requiredOption("--company-codes <companyCodes>").option("--dry-run").option("--confirm").option("--reason <reason>").option("--json").action(async (options) => {
    return runWriteEndpoint(client, output, "ops.store.mdm.sync-by-codes", "hr/syscompany/v2/syncByCodes", options, { companyCodes: csvOption(options.companyCodes) });
  });
  storeMdm.command("sync-by-time").requiredOption("--from <from>").requiredOption("--to <to>").option("--dry-run").option("--confirm").option("--reason <reason>").option("--json").action(async (options) => {
    return runWriteEndpoint(client, output, "ops.store.mdm.sync-by-time", "hr/syscompany/v2/syncByTime", options, { startTime: options.from, endTime: options.to });
  });
  storeMdm.command("page").option("--store-code <storeCode>").option("--store-name <storeName>").option("--sync-status <syncStatus>").option("--page-index <pageIndex>").option("--page-size <pageSize>").option("--json").action(async (options) => {
    return emit(output, await request(client, "store mdm page", "POST", "hr/mdmStore/page", { companyCode: options.storeCode, companyName: options.storeName, syncStatus: syncStatusList(options.syncStatus), searchType: 1, pageIndex: Number(options.pageIndex ?? 1), pageSize: Number(options.pageSize ?? 20) }));
  });
  storeMdm.command("diff").requiredOption("--company-code <companyCode>").option("--json").action(async (options) => {
    return emit(output, await request(client, "store mdm diff", "POST", "hr/syscompany/v2/selectAndSyncByCodes", { companyCode: options.companyCode }));
  });
  storeMdm.command("confirm").option("--company-codes <companyCodes>").option("--sync-all").option("--dry-run").option("--confirm").option("--reason <reason>").option("--json").action(async (options) => {
    const companyCodes = csvOption(options.companyCodes);
    requireMdmConfirmTarget(options.syncAll, companyCodes, "STORE_MDM_CONFIRM_REQUIRES_COMPANY_CODES_OR_SYNC_ALL");
    return runWriteEndpoint(client, output, "ops.store.mdm.confirm", "hr/syscompany/v2/syncFromMdmStore", options, { syncAll: options.syncAll === true, companyCodes });
  });

  const retailer = ops.command("retailer").description("Retailer operations commands");
  retailer.command("get").option("--distributor-id <distributorId>").option("--sword <sword>").option("--page-index <pageIndex>").option("--page-size <pageSize>").option("--json").action(async (options) => emit(output, await request(client, "retailer get", "POST", "hr/sysCompany/queryDistributorRole/middleGround", { distributorId: options.distributorId, sword: options.sword, pageIndex: Number(options.pageIndex ?? 1), pageSize: Number(options.pageSize ?? 20) })));
  const retailerMdm = retailer.command("mdm").description("Retailer master-data sync commands");
  retailerMdm.command("sync-by-codes").requiredOption("--distributor-codes <distributorCodes>").option("--dry-run").option("--confirm").option("--reason <reason>").option("--json").action(async (options) => {
    return runWriteEndpoint(client, output, "ops.retailer.mdm.sync-by-codes", "hr/distributor/v2/syncByCodes", options, { distributorCodes: csvOption(options.distributorCodes) });
  });
  retailerMdm.command("sync-by-time").requiredOption("--from <from>").requiredOption("--to <to>").option("--dry-run").option("--confirm").option("--reason <reason>").option("--json").action(async (options) => {
    return runWriteEndpoint(client, output, "ops.retailer.mdm.sync-by-time", "hr/distributor/v2/syncByTime", options, { startTime: options.from, endTime: options.to });
  });
  retailerMdm.command("page").option("--retailer-code <retailerCode>").option("--retailer-name <retailerName>").option("--sync-status <syncStatus>").option("--page-index <pageIndex>").option("--page-size <pageSize>").option("--json").action(async (options) => {
    return emit(output, await request(client, "retailer mdm page", "POST", "hr/mdmRetailer/page", { distCode: options.retailerCode, distName: options.retailerName, syncStatus: syncStatusValue(options.syncStatus), pageIndex: Number(options.pageIndex ?? 1), pageSize: Number(options.pageSize ?? 20) }));
  });
  retailerMdm.command("diff").requiredOption("--distributor-code <distributorCode>").option("--json").action(async (options) => {
    return emit(output, await request(client, "retailer mdm diff", "POST", "hr/distributor/v2/selectAndSyncByCodes", { distributorCode: options.distributorCode }));
  });
  retailerMdm.command("confirm").option("--distributor-codes <distributorCodes>").option("--sync-all").option("--dry-run").option("--confirm").option("--reason <reason>").option("--json").action(async (options) => {
    const distributorCodes = csvOption(firstString(options.distributorCodes, options.distributorCode));
    requireMdmConfirmTarget(options.syncAll, distributorCodes, "RETAILER_MDM_CONFIRM_REQUIRES_DISTRIBUTOR_CODES_OR_SYNC_ALL");
    return runWriteEndpoint(client, output, "ops.retailer.mdm.confirm", "hr/distributor/v2/syncFromMdmDistributor", options, { syncAll: options.syncAll === true, distributorCodes });
  });

  const iam = ops.command("iam").description("IAM operations commands");
  iam.command("user").option("--user <user>").option("--id <id>").option("--page-index <pageIndex>").option("--page-size <pageSize>").option("--json").action(async (options) => {
    if (options.id) return emit(output, await request(client, "iam user", "GET", "hr/iamUser/detailById", { id: options.id }));
    return emit(output, await request(client, "iam user", "POST", "hr/iamUser/userPage", { sword: options.user, pageIndex: Number(options.pageIndex ?? 1), pageSize: Number(options.pageSize ?? 20) }));
  });
  iam.command("role").option("--role-code <roleCode>").option("--id <id>").option("--page-index <pageIndex>").option("--page-size <pageSize>").option("--json").action(async (options) => {
    if (options.id) return emit(output, await request(client, "iam role", "GET", "hr/iamRole/detailById", { id: options.id }));
    return emit(output, await request(client, "iam role", "POST", "hr/iamRole/rolePage", { roleCode: options.roleCode, pageIndex: Number(options.pageIndex ?? 1), pageSize: Number(options.pageSize ?? 20) }));
  });

  const config = ops.command("config").description("Configuration operations commands");
  config.command("get").requiredOption("--key <key>").option("--json").action(() => {
    throw new Error("CONFIG_GET_REQUIRES_BACKEND_FACADE");
  });
  config.command("set").requiredOption("--key <key>").requiredOption("--value <value>").option("--dry-run").option("--confirm").option("--reason <reason>").option("--json").action(async (options) => {
    await authorizeWriteGate(options, "write", {
      command: "ops.config.set",
      summary: `修改配置 ${String(options.key)}。`,
    });
    if (!options.dryRun) throw new Error("CONFIG_SET_REQUIRES_BACKEND_FACADE");
    const result = { ok: true, mode: "dry-run", command: "config set", target: options.key, blocked: true, message: "No safe existing configuration facade has been mapped for CLI writes." };
    await auditOperation({ command: "ops.config.set", access: "write", args: options }, options.dryRun ? "dry-run" : "ok");
    return emit(output, result);
  });

  const log = ops.command("log").description("Log operations commands");
  log.command("api").option("--request-id <requestId>").option("--order-no <orderNo>").option("--json").action(() => {
    throw new Error("LOG_API_REQUIRES_BACKEND_FACADE");
  });
  log.command("sync-warning").option("--order-no <orderNo>").option("--item-code <itemCode>").option("--json").action(() => {
    throw new Error("LOG_SYNC_WARNING_REQUIRES_BACKEND_FACADE");
  });

  return ops;
}
