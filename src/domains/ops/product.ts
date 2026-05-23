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

const endpoints = {
  masterSearch: "product/itemSearch/search",
  masterGet: "product/item/spec/getSpuDetailByItemId",
  masterImport: "file/import/product/mitem/excelAdd",
  applyList: "product/mitemcomp/list",
  applyUpdate: "product/mitemcomp/opt",
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
  if (!client) throw new Error(`${command.toUpperCase().replaceAll(".", "_")}_REQUIRES_API_CLIENT`);
  return client;
}

export async function productWritePlan(command: string, options: ProductWriteOptions, endpoint = command) {
  assertWriteGate(options, "write");
  const result = dryRunPlan(command, options.input ? 1 : 0, [
    { method: "POST", endpoint, input: options.input ?? null, itemCode: options.itemCode ?? null },
  ]);
  await auditOperation({ command: `ops.${command.replaceAll("/", ".")}`, access: "write", args: { ...options }, configHome: options.configHome }, options.dryRun ? "dry-run" : "ok");
  return result;
}

async function runProductWrite(command: string, endpoint: string, options: ProductWriteOptions, client?: ApiClient) {
  assertWriteGate(options, "write");
  if (options.dryRun) return productWritePlan(command, options, endpoint);
  const body = Object.fromEntries(Object.entries(options).filter(([key, value]) => !["dryRun", "confirm", "reason", "json"].includes(key) && value !== undefined && value !== ""));
  const result = await requireClient(client, command).request("POST", endpoint, body);
  await auditOperation({ command: `ops.${command.replaceAll("/", ".")}`, access: "write", args: body, configHome: options.configHome }, "ok");
  return result;
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

  product.command("group").description("Product group commands").command("list").option("--item-code <itemCode>").option("--json").action(async (options) => emit(output, await requireClient(client, "ops.product.group.list").request("POST", endpoints.groupList, options)));
  product.command("package").description("Product package commands").command("list").option("--item-code <itemCode>").option("--json").action(async (options) => emit(output, await requireClient(client, "ops.product.package.list").request("POST", endpoints.packageList, options)));
  product.command("tag").description("Product tag commands").command("list").option("--item-code <itemCode>").option("--json").action(async (options) => emit(output, await requireClient(client, "ops.product.tag.list").request("POST", endpoints.tagList, options)));
  product.command("price").description("Product price commands").command("check").requiredOption("--item-code <itemCode>").option("--json").action(async (options) => emit(output, await requireClient(client, "ops.product.price.check").request("POST", endpoints.priceCheck, options)));
  product.command("image-sync").requiredOption("--item-code <itemCode>").option("--dry-run").option("--confirm").option("--reason <reason>").option("--json").action(async (options) => {
    return emit(output, await runProductWrite("product/image-sync", endpoints.imageSync, options, client));
  });

  return product;
}
