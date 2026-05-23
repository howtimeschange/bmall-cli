import { assertWriteGate, auditOperation } from "./safety.js";

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
  ops.command("store").description("Store operations commands").command("get").requiredOption("--company-id <companyId>").option("--json").action(async (options) => emit(output, await request(client, "store get", "GET", "hr/sysCompany/queryCompanyInfoById", { companyId: options.companyId })));
  ops.command("retailer").description("Retailer operations commands").command("get").option("--distributor-id <distributorId>").option("--sword <sword>").option("--page-index <pageIndex>").option("--page-size <pageSize>").option("--json").action(async (options) => emit(output, await request(client, "retailer get", "POST", "hr/sysCompany/queryDistributorRole/middleGround", { distributorId: options.distributorId, sword: options.sword, pageIndex: Number(options.pageIndex ?? 1), pageSize: Number(options.pageSize ?? 20) })));

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
    assertWriteGate(options, "write");
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
