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

  it("maps store and retailer MDM sync workflows to admin v2 endpoints with write gates", async () => {
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

    await program.parseAsync(["node", "bmall", "store", "mdm", "sync-by-codes", "--company-codes", "S001,S002", "--dry-run", "--json"]);
    await program.parseAsync(["node", "bmall", "store", "mdm", "sync-by-time", "--from", "2026-05-01", "--to", "2026-05-24", "--dry-run", "--json"]);
    await program.parseAsync(["node", "bmall", "store", "mdm", "page", "--store-code", "S001", "--json"]);
    await program.parseAsync(["node", "bmall", "store", "mdm", "diff", "--company-code", "S001", "--json"]);
    await program.parseAsync(["node", "bmall", "store", "mdm", "confirm", "--company-codes", "S001", "--dry-run", "--json"]);
    await expect(program.parseAsync(["node", "bmall", "retailer", "mdm", "confirm", "--sync-all", "--confirm"])).rejects.toThrow("WRITE_REQUIRES_REASON");
    await program.parseAsync(["node", "bmall", "retailer", "mdm", "confirm", "--sync-all", "--dry-run", "--json"]);
    await program.parseAsync(["node", "bmall", "retailer", "mdm", "sync-by-codes", "--distributor-codes", "R001,R002", "--confirm", "--reason", "同步零售商主数据", "--json"]);

    const emptyConfirmProgram = new Command().exitOverride();
    registerOpsMiscCommands(emptyConfirmProgram, client, (payload) => outputs.push(payload));
    await expect(emptyConfirmProgram.parseAsync(["node", "bmall", "store", "mdm", "confirm", "--dry-run", "--json"])).rejects.toThrow("STORE_MDM_CONFIRM_REQUIRES_COMPANY_CODES_OR_SYNC_ALL");
    await expect(emptyConfirmProgram.parseAsync(["node", "bmall", "retailer", "mdm", "confirm", "--dry-run", "--json"])).rejects.toThrow("RETAILER_MDM_CONFIRM_REQUIRES_DISTRIBUTOR_CODES_OR_SYNC_ALL");

    expect(outputs.slice(0, 2)).toEqual([
      expect.objectContaining({ mode: "dry-run", command: "ops.store.mdm.sync-by-codes" }),
      expect.objectContaining({ mode: "dry-run", command: "ops.store.mdm.sync-by-time" }),
    ]);
    expect(calls.map((item) => item.path)).toEqual([
      "hr/mdmStore/page",
      "hr/syscompany/v2/selectAndSyncByCodes",
      "hr/distributor/v2/syncByCodes",
    ]);
    expect(calls[0].body).toMatchObject({ companyCode: "S001", searchType: 1 });
    expect(calls[1].body).toMatchObject({ companyCode: "S001" });
    expect(calls[2].body).toMatchObject({ distributorCodes: ["R001", "R002"] });
    expect(outputs.at(-2)).toMatchObject({ mode: "dry-run", command: "ops.retailer.mdm.confirm" });
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
