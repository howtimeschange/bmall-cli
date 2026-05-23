import { Command } from "commander";
import { registerOpsOrderCommands } from "./order.js";
import { registerOpsProductCommands } from "./product.js";
import { registerOpsMiscCommands } from "./misc.js";

type ApiClient = { request: (method: string, path: string, body?: unknown) => Promise<unknown> };
export type OpsOutputFn = (payload: unknown) => void;

export function registerOpsCommands(program: Command, output?: OpsOutputFn, client?: ApiClient) {
  const ops = program.command("ops").description("Bmall operations commands");
  registerOpsOrderCommands(ops, client, output);
  registerOpsProductCommands(ops, client, output);
  registerOpsMiscCommands(ops, client, output);
  return ops;
}

export * from "./order.js";
export * from "./product.js";
export * from "./safety.js";
