import { Command } from "commander";
import { describe, expect, it } from "vitest";
import { registerOpsMiscCommands } from "../../src/domains/ops/misc.js";

describe("ops misc commands", () => {
  it("maps stock, customer, and IAM queries to real endpoints", async () => {
    const calls: Array<{ method: string; path: string; body?: unknown }> = [];
    const outputs: unknown[] = [];
    const client = {
      request: async (method: string, path: string, body?: unknown) => {
        calls.push({ method, path, body });
        return { ok: true, path, body };
      },
    };
    const program = new Command().exitOverride();
    registerOpsMiscCommands(program, client, (payload) => outputs.push(payload));

    await program.parseAsync(["node", "bmall", "stock", "query", "--sku-code", "SKU001", "--json"]);
    await program.parseAsync(["node", "bmall", "customer", "get", "--company-id", "20001", "--json"]);
    await program.parseAsync(["node", "bmall", "iam", "user", "--user", "13800000000", "--json"]);
    await program.parseAsync(["node", "bmall", "iam", "role", "--id", "10001", "--json"]);

    expect(calls.map((item) => item.path)).toEqual([
      "product/itemStock/statistics/page",
      "hr/sysCompany/queryCompanyInfosById",
      "hr/iamUser/userPage",
      "hr/iamRole/detailById",
    ]);
    expect(outputs).toHaveLength(4);
  });

  it("fails explicitly for unsupported config and log facades", async () => {
    const program = new Command().exitOverride();
    registerOpsMiscCommands(program, undefined, undefined);

    await expect(program.parseAsync(["node", "bmall", "config", "get", "--key", "foo"])).rejects.toThrow(
      "CONFIG_GET_REQUIRES_BACKEND_FACADE",
    );
    await expect(program.parseAsync(["node", "bmall", "log", "api", "--request-id", "R1"])).rejects.toThrow(
      "LOG_API_REQUIRES_BACKEND_FACADE",
    );
  });
});
