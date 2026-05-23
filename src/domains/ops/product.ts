import { assertWriteGate, auditOperation, dryRunPlan, type WriteGateOptions } from "./safety.js";

export interface ProductWriteOptions extends WriteGateOptions {
  input?: string;
  itemCode?: string;
  reason?: string;
  configHome?: string;
}

type ApiClient = { request: (method: string, path: string, body?: unknown) => Promise<unknown> };
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

export async function productWritePlan(command: string, options: ProductWriteOptions) {
  assertWriteGate(options, "write");
  const result = dryRunPlan(command, options.input ? 1 : 0, [
    { method: "POST", endpoint: command, input: options.input ?? null, itemCode: options.itemCode ?? null },
  ]);
  await auditOperation({ command: `ops.${command.replaceAll("/", ".")}`, access: "write", args: { ...options }, configHome: options.configHome }, options.dryRun ? "dry-run" : "ok");
  return result;
}

export function registerOpsProductCommands(program: CommandLike, client?: ApiClient, output?: OutputFn) {
  const product = program.command("product").description("Product operations commands");

  const master = product.command("master").description("Product master data commands");
  master.command("search").option("--item-code <itemCode>").option("--keyword <keyword>").option("--json").action(async (options) => {
    return emit(output, client ? await client.request("GET", "product/itemSearch/search", options) : { items: [] });
  });
  master.command("get").requiredOption("--item-code <itemCode>").option("--json").action(async (options) => {
    return emit(output, client ? await client.request("GET", "product/master/get", options) : { itemCode: options.itemCode });
  });
  master.command("import").requiredOption("--input <file>").option("--dry-run").option("--confirm").option("--reason <reason>").option("--json").action(async (options) => {
    return emit(output, await productWritePlan("product/master/import", options));
  });

  const apply = product.command("apply").description("Product application commands");
  apply.command("list").option("--item-code <itemCode>").option("--json").action(async (options) => {
    return emit(output, client ? await client.request("GET", "product/apply/list", options) : { items: [] });
  });
  apply.command("update").requiredOption("--input <file>").option("--dry-run").option("--confirm").option("--reason <reason>").option("--json").action(async (options) => {
    return emit(output, await productWritePlan("product/apply/update", options));
  });

  product.command("group").description("Product group commands").command("list").option("--item-code <itemCode>").option("--json").action(async (options) => emit(output, client ? await client.request("GET", "product/group/list", options) : { items: [] }));
  product.command("package").description("Product package commands").command("list").option("--item-code <itemCode>").option("--json").action(async (options) => emit(output, client ? await client.request("GET", "product/package/list", options) : { items: [] }));
  product.command("tag").description("Product tag commands").command("list").option("--item-code <itemCode>").option("--json").action(async (options) => emit(output, client ? await client.request("GET", "product/tag/list", options) : { items: [] }));
  product.command("price").description("Product price commands").command("check").requiredOption("--item-code <itemCode>").option("--json").action(async (options) => emit(output, client ? await client.request("GET", "product/price/check", options) : { itemCode: options.itemCode, status: "unknown" }));
  product.command("image-sync").requiredOption("--item-code <itemCode>").option("--dry-run").option("--confirm").option("--reason <reason>").option("--json").action(async (options) => {
    return emit(output, await productWritePlan("product/image-sync", options));
  });

  return product;
}
