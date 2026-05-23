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
const fallback = (name: string, options: Record<string, unknown>) => ({ ok: true, command: name, data: options });
function emit(output: OutputFn | undefined, payload: unknown): unknown {
  if (output) output(payload);
  return payload;
}

export function registerOpsMiscCommands(program: CommandLike, client?: ApiClient, output?: OutputFn) {
  const ops = program;

  const stock = ops.command("stock").description("Stock operations commands");
  stock.command("query").option("--item-code <itemCode>").option("--sku-code <skuCode>").option("--json").action(async (options) => emit(output, client ? await client.request("GET", "warehouse/stock/query", options) : fallback("stock query", options)));
  stock.command("sync-status").option("--item-code <itemCode>").option("--json").action(async (options) => emit(output, client ? await client.request("GET", "warehouse/stock/sync-status", options) : fallback("stock sync-status", options)));

  ops.command("customer").description("Customer operations commands").command("get").option("--company-code <companyCode>").option("--company-id <companyId>").option("--json").action(async (options) => emit(output, client ? await client.request("GET", "company/customer/get", options) : fallback("customer get", options)));
  ops.command("store").description("Store operations commands").command("get").option("--company-id <companyId>").option("--store-code <storeCode>").option("--json").action(async (options) => emit(output, client ? await client.request("GET", "company/store/get", options) : fallback("store get", options)));
  ops.command("retailer").description("Retailer operations commands").command("get").option("--distributor-id <distributorId>").option("--json").action(async (options) => emit(output, client ? await client.request("GET", "company/retailer/get", options) : fallback("retailer get", options)));

  const iam = ops.command("iam").description("IAM operations commands");
  iam.command("user").option("--user <user>").option("--json").action(async (options) => emit(output, client ? await client.request("GET", "manage/iam/user", options) : fallback("iam user", options)));
  iam.command("role").option("--role-code <roleCode>").option("--json").action(async (options) => emit(output, client ? await client.request("GET", "manage/iam/role", options) : fallback("iam role", options)));

  const config = ops.command("config").description("Configuration operations commands");
  config.command("get").requiredOption("--key <key>").option("--json").action(async (options) => emit(output, client ? await client.request("GET", "config/needSet/get", options) : fallback("config get", options)));
  config.command("set").requiredOption("--key <key>").requiredOption("--value <value>").option("--dry-run").option("--confirm").option("--reason <reason>").option("--json").action(async (options) => {
    assertWriteGate(options, "write");
    const result = options.dryRun ? { ok: true, mode: "dry-run", command: "config set", target: options.key } : client ? await client.request("POST", "config/needSet/save", options) : fallback("config set", options);
    await auditOperation({ command: "ops.config.set", access: "write", args: options }, options.dryRun ? "dry-run" : "ok");
    return emit(output, result);
  });

  const log = ops.command("log").description("Log operations commands");
  log.command("api").option("--request-id <requestId>").option("--order-no <orderNo>").option("--json").action(async (options) => emit(output, client ? await client.request("GET", "manage/log/api", options) : fallback("log api", options)));
  log.command("sync-warning").option("--order-no <orderNo>").option("--item-code <itemCode>").option("--json").action(async (options) => emit(output, client ? await client.request("GET", "manage/log/sync-warning", options) : fallback("log sync-warning", options)));

  return ops;
}
