import { describe, expect, it } from "vitest";
import { Command, CommanderError } from "commander";
import { registerAiReplenishmentCommands } from "../../src/domains/ai-replenishment/commands.js";
import { COMMAND_MANIFEST } from "../../src/core/manifest.js";

describe("ai replenishment commands", () => {
  it("exposes plan as the only ai-replenishment command", () => {
    const program = new Command().exitOverride();
    registerAiReplenishmentCommands(program, { request: async () => ({}) });
    const aiCommand = program.commands.find((command) => command.name() === "ai-replenishment");

    expect(aiCommand?.commands.map((command) => command.name())).toEqual(["plan"]);
    expect(COMMAND_MANIFEST.filter((entry) => entry.name.startsWith("ai-replenishment.")).map((entry) => entry.name)).toEqual(["ai-replenishment.plan"]);
  });

  it("rejects removed legacy create and submit subcommands", async () => {
    const program = new Command().exitOverride();
    registerAiReplenishmentCommands(program, { request: async () => ({}) });

    await expect(program.parseAsync(["node", "bmall", "ai-replenishment", "create", "--retailer-code", "1HLZ2"])).rejects.toMatchObject<Partial<CommanderError>>({
      code: "commander.unknownCommand",
    });
    await expect(program.parseAsync(["node", "bmall", "ai-replenishment", "submit", "--ids", "AIO-1"])).rejects.toMatchObject<Partial<CommanderError>>({
      code: "commander.unknownCommand",
    });
  });

  it("calculates a CLI-local replenishment plan for one store without legacy comparison fields", async () => {
    const calls: Array<{ method: string; path: string; body?: unknown }> = [];
    const outputs: unknown[] = [];
    const client = {
      request: async (method: string, path: string, body?: unknown) => {
        calls.push({ method, path, body });
        if (path === "hr/sysCompany/queryCompanyRole/middleGround/page") {
          return {
            content: [{ companyId: "STORE-ID-1", companyCode: "ST001", companyName: "西湖店", distributorCode: "1HLZ2", distributorName: "1HLZ2 零售商", distributorId: "2035721177258699935" }],
          };
        }
        if (path === "product/item/intellectAi/getIntellectAiOrderCreateBeforeSkcData") {
          return [
            { skcCode: "SKC001", skuCode: "SKU001", totalSaleNum7: 21, totalSaleNum7To14: 7, totalSaleNumOrg: 40, totalSaleNum: 80, localStock: 2, onRoadStock: 1, labelFlag: 1, ratioSize: 0.6 },
            { skcCode: "SKC001", skuCode: "SKU002", totalSaleNum7: 0, totalSaleNum7To14: 0, totalSaleNumOrg: 4, totalSaleNum: 10, localStock: 9, onRoadStock: 0, labelFlag: 4, ratioSize: 0.4 },
          ];
        }
        if (path === "warehouse/mWhs/getMainWhsStockBySkuCodes") {
          return { SKU001: 6, SKU002: 20 };
        }
        return {};
      },
    };
    const program = new Command().exitOverride();
    registerAiReplenishmentCommands(program, client, (payload) => outputs.push(payload));

    await program.parseAsync([
      "node",
      "bmall",
      "ai-replenishment",
      "plan",
      "--company-code",
      "ST001",
      "--target-days",
      "10",
      "--safety-days",
      "3",
      "--json",
    ]);

    expect(calls.map((call) => call.path)).toEqual([
      "hr/sysCompany/queryCompanyRole/middleGround/page",
      "product/item/intellectAi/getIntellectAiOrderCreateBeforeSkcData",
      "warehouse/mWhs/getMainWhsStockBySkuCodes",
    ]);
    expect(outputs[0]).toMatchObject({
      ok: true,
      command: "ai-replenishment.plan",
      scope: { type: "company-code", companyCodes: ["ST001"] },
      summary: { storeCount: 1, skuQuantity: 6 },
      rows: [
        {
          companyCode: "ST001",
          skcCode: "SKC001",
          skuCode: "SKU001",
          sales14Days: 28,
          dailySales: 2,
          targetStock: 26,
          netNeed: 23,
          mallStock: 6,
          skuQuantity: 6,
          stockCapApplied: true,
        },
      ],
    });
    expect(outputs[0]).not.toHaveProperty("legacySummary");
    expect(outputs[0]).not.toHaveProperty("comparisonSummary");
    expect(outputs[0]).not.toHaveProperty("legacyRows");
  });

  it("supports retailer and multi-store scopes without calling legacy draft endpoints", async () => {
    const calls: Array<{ method: string; path: string; body?: unknown }> = [];
    const outputs: unknown[] = [];
    const client = {
      request: async (method: string, path: string, body?: unknown) => {
        calls.push({ method, path, body });
        if (path === "hr/sysCompany/queryCompanyRole/middleGround/page") {
          return {
            content: [
              { companyId: "STORE-ID-1", companyCode: "ST001", companyName: "西湖店", distributorCode: "1HLZ2", distributorName: "1HLZ2 零售商", distributorId: "2035721177258699935" },
              { companyId: "STORE-ID-2", companyCode: "ST002", companyName: "湖滨店", distributorCode: "1HLZ2", distributorName: "1HLZ2 零售商", distributorId: "2035721177258699935" },
            ],
          };
        }
        if (path === "product/item/intellectAi/getIntellectAiOrderCreateBeforeSkcData") {
          const companyId = isRecord(body) ? body.companyId : undefined;
          return companyId === "STORE-ID-2"
            ? [{ skcCode: "SKC002", skuCode: "SKU002", totalSaleNum7: 7, totalSaleNum7To14: 7, localStock: 0, onRoadStock: 0, labelFlag: 2, ratioSize: 1 }]
            : [{ skcCode: "SKC001", skuCode: "SKU001", totalSaleNum7: 14, totalSaleNum7To14: 14, localStock: 1, onRoadStock: 0, labelFlag: 3, ratioSize: 1 }];
        }
        if (path === "warehouse/mWhs/getMainWhsStockBySkuCodes") {
          return { SKU001: 99, SKU002: 99 };
        }
        return {};
      },
    };
    const program = new Command().exitOverride();
    registerAiReplenishmentCommands(program, client, (payload) => outputs.push(payload));

    await program.parseAsync([
      "node",
      "bmall",
      "ai-replenishment",
      "plan",
      "--retailer-code",
      "1HLZ2",
      "--json",
    ]);

    expect(calls.map((call) => call.path)).toEqual([
      "hr/sysCompany/queryCompanyRole/middleGround/page",
      "product/item/intellectAi/getIntellectAiOrderCreateBeforeSkcData",
      "product/item/intellectAi/getIntellectAiOrderCreateBeforeSkcData",
      "warehouse/mWhs/getMainWhsStockBySkuCodes",
    ]);
    expect(outputs[0]).toMatchObject({
      ok: true,
      scope: { type: "retailer-code", retailerCode: "1HLZ2", storeCount: 2 },
      summary: { storeCount: 2 },
    });
    expect(calls.map((call) => call.path)).not.toContain("b2b/intellectAiOrder/mini/create");
  });

  it("dry-runs direct order submission for the CLI-local plan without calling the create-order endpoint", async () => {
    const calls: Array<{ method: string; path: string; body?: unknown }> = [];
    const outputs: unknown[] = [];
    const client = {
      request: async (method: string, path: string, body?: unknown) => {
        calls.push({ method, path, body });
        if (path === "hr/sysCompany/queryCompanyRole/middleGround/page") {
          return {
            content: [{ companyId: "STORE-ID-1", companyCode: "ST001", companyName: "西湖店", distributorCode: "1HLZ2", distributorName: "1HLZ2 零售商", distributorId: "2035721177258699935" }],
          };
        }
        if (path === "product/item/intellectAi/getIntellectAiOrderCreateBeforeSkcData") {
          return [{ skcCode: "SKC001", skuCode: "SKU001", totalSaleNum7: 14, totalSaleNum7To14: 14, localStock: 0, onRoadStock: 0, labelFlag: 3, ratioSize: 1 }];
        }
        if (path === "warehouse/mWhs/getMainWhsStockBySkuCodes") {
          return { SKU001: 9 };
        }
        if (path === "b2b/invoice/distributorInvoice/list") {
          return [{ invCode: "INV001", invTitle: "默认开票主体", isDefault: 1 }];
        }
        if (path === "hr/mb2bcrd3/list") {
          return [{ fid: "ADDR001", provinceName: "浙江省", cityName: "杭州市", regionName: "西湖区", conAddress: "文三路 1 号", consignee: "张三", consiPhone: "13800000000", isDefault: 1 }];
        }
        return {};
      },
    };
    const program = new Command().exitOverride();
    registerAiReplenishmentCommands(program, client, (payload) => outputs.push(payload));

    await program.parseAsync([
      "node",
      "bmall",
      "ai-replenishment",
      "plan",
      "--company-code",
      "ST001",
      "--submit",
      "--dry-run",
      "--json",
    ]);

    expect(calls.map((call) => call.path)).not.toContain("b2b/order/new/intellectAi/creatOrder");
    expect(outputs[0]).toMatchObject({
      ok: true,
      command: "ai-replenishment.plan",
      submitSummary: { requested: true, mode: "dry-run", readyOrderCount: 1, blockingIssueCount: 0 },
      submitDryRun: {
        mode: "dry-run",
        command: "ai-replenishment.plan.submit",
        apiCalls: [
          {
            method: "POST",
            endpoint: "b2b/order/new/intellectAi/creatOrder",
            body: {
              companyCode: "ST001",
              invoiceCode: "INV001",
              skcOutStockState: 1,
              items: [{ skuCode: "SKU001", quantity: 9 }],
            },
          },
        ],
      },
    });
  });

  it("submits direct orders for the CLI-local plan only with explicit confirmation", async () => {
    const calls: Array<{ method: string; path: string; body?: unknown }> = [];
    const outputs: unknown[] = [];
    const client = {
      request: async (method: string, path: string, body?: unknown) => {
        calls.push({ method, path, body });
        if (path === "hr/sysCompany/queryCompanyRole/middleGround/page") {
          return {
            content: [{ companyId: "STORE-ID-1", companyCode: "ST001", companyName: "西湖店", distributorCode: "1HLZ2", distributorName: "1HLZ2 零售商", distributorId: "2035721177258699935" }],
          };
        }
        if (path === "product/item/intellectAi/getIntellectAiOrderCreateBeforeSkcData") {
          return [{ skcCode: "SKC001", skuCode: "SKU001", totalSaleNum7: 14, totalSaleNum7To14: 14, localStock: 0, onRoadStock: 0, labelFlag: 3, ratioSize: 1 }];
        }
        if (path === "warehouse/mWhs/getMainWhsStockBySkuCodes") {
          return { SKU001: 3 };
        }
        if (path === "b2b/invoice/distributorInvoice/list") {
          return [{ invCode: "INV001", invTitle: "默认开票主体", isDefault: 1 }];
        }
        if (path === "hr/mb2bcrd3/list") {
          return [{ fid: "ADDR001", provinceName: "浙江省", cityName: "杭州市", regionName: "西湖区", conAddress: "文三路 1 号", consignee: "张三", consiPhone: "13800000000", isDefault: 1 }];
        }
        if (path === "b2b/order/new/intellectAi/creatOrder") {
          return { orderNo: "DO001", orderId: "ORDER-ID-1", payAmount: 120 };
        }
        return {};
      },
    };
    const program = new Command().exitOverride();
    registerAiReplenishmentCommands(program, client, (payload) => outputs.push(payload));

    await program.parseAsync([
      "node",
      "bmall",
      "ai-replenishment",
      "plan",
      "--company-code",
      "ST001",
      "--submit",
      "--confirm",
      "--reason",
      "unit direct order",
      "--json",
    ]);

    const submitCall = calls.find((call) => call.path === "b2b/order/new/intellectAi/creatOrder");
    expect(submitCall).toMatchObject({
      method: "POST",
      body: {
        companyCode: "ST001",
        invoiceCode: "INV001",
        items: [{ skuCode: "SKU001", quantity: 3 }],
      },
    });
    expect(outputs[0]).toMatchObject({
      submitSummary: { requested: true, mode: "submitted", readyOrderCount: 1, submittedOrderCount: 1 },
      submitResults: [{ orderNo: "DO001", orderId: "ORDER-ID-1" }],
    });
  });
});

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}
