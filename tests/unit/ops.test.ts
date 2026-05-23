import { describe, expect, it } from "vitest";
import { Command } from "commander";
import { diagnoseOrderFromApi, blockingReasonsFromDraft, normalizeOrderDiagnosis, registerOpsOrderCommands, splitCheck, syncCheck } from "../../src/domains/ops/order.js";
import { productWritePlan } from "../../src/domains/ops/product.js";

describe("ops order diagnosis", () => {
  it("returns the stable diagnosis shape", () => {
    const diagnosis = normalizeOrderDiagnosis(
      {
        data: {
          orderNo: "DH202605230001",
          orderType: "mid-presale",
          currentState: { status: "待审核" },
          items: [{ skuCode: "SKU001", quantity: 1 }],
        },
      },
      {},
    );

    expect(Object.keys(diagnosis)).toEqual([
      "orderType",
      "orderNo",
      "relation",
      "currentState",
      "ruleChain",
      "timeline",
      "amount",
      "items",
      "blockingIssues",
      "warnings",
      "nextActions",
    ]);
    expect(diagnosis.orderType).toBe("mid-presale");
    expect(diagnosis.orderNo).toBe("DH202605230001");
    expect(diagnosis.items).toHaveLength(1);
  });

  it("finds draft blocking reasons", () => {
    const result = blockingReasonsFromDraft({ items: [{ skuCode: "SKU001", quantity: 0 }] });
    expect(result.ok).toBe(false);
    expect(result.blockingIssues[0].code).toBe("INVALID_QUANTITY");
  });

  it("diagnoses pending-review address completeness through real endpoints", async () => {
    const calls: Array<{ method: string; path: string; body?: unknown }> = [];
    const client = {
      request: async (method: string, path: string, body?: unknown) => {
        calls.push({ method, path, body });
        return {
          data: {
            id: 10001,
            orderNo: "PD202605230001",
            orderTypeName: "待审核补货单",
            orderStatusName: "待审核",
            companyId: "C001",
            companyName: "森马湖南骏森-安江镇隆平广场店",
            addressId: "A1",
            provinceName: "湖南省",
            cityName: "怀化市",
            regionName: "区",
            conAddress: "安江镇新德利超市四楼森马店",
            consignee: "丁张梅",
            consiPhone: "15115220772",
            skcList: [{ skuCode: "SKU001", quantity: 1 }],
            totalAmount: 518,
          },
        };
      },
    };

    const result = await diagnoseOrderFromApi(client, { type: "pending-review", orderId: "10001" });

    expect(calls[0]).toEqual({ method: "POST", path: "b2b/pendingReviewOrder/order/detail", body: { orderId: "10001" } });
    expect(result.orderType).toBe("pending-review");
    expect(result.blockingIssues[0]).toMatchObject({ code: "ADDRESS_REGION_INCOMPLETE", phase: "fulfillment" });
    expect(result.nextActions[0]).toContain("ops address check");
  });

  it("checks split and sync status without executing writes", () => {
    expect(splitCheck({ status: "已成团" }).ok).toBe(true);
    expect(splitCheck({ status: "待审核" }).blockingIssues[0].code).toBe("SPLIT_STATE_NOT_READY");
    expect(syncCheck({ syncStatus: "unknown" }).warnings[0].code).toBe("SYNC_UNKNOWN");
  });

  it("does not synthesize API-backed order diagnosis when no client is wired", async () => {
    const program = new Command().exitOverride();
    registerOpsOrderCommands(program);

    await expect(program.parseAsync(["node", "bmall", "order", "diagnose", "--order-no", "DH1"])).rejects.toThrow(
      "ORDER_DIAGNOSE_REQUIRES_API_CLIENT",
    );
    await expect(program.parseAsync(["node", "bmall", "order", "timeline", "--order-id", "10001"])).rejects.toThrow(
      "ORDER_TIMELINE_REQUIRES_API_CLIENT",
    );
    await expect(program.parseAsync(["node", "bmall", "order", "export", "--order-no", "DH1"])).rejects.toThrow(
      "ORDER_EXPORT_REQUIRES_API_CLIENT",
    );
  });

  it("requires dry-run or confirm for product writes", async () => {
    await expect(productWritePlan("product/apply/update", { input: "apply.csv" })).rejects.toThrow();
    await expect(productWritePlan("product/apply/update", { input: "apply.csv", dryRun: true })).resolves.toMatchObject({ mode: "dry-run" });
  });
});
