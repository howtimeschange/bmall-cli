import { describe, expect, it } from "vitest";
import { blockingReasonsFromDraft, normalizeOrderDiagnosis, splitCheck, syncCheck } from "../../src/domains/ops/order.js";
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

  it("checks split and sync status without executing writes", () => {
    expect(splitCheck({ status: "已成团" }).ok).toBe(true);
    expect(splitCheck({ status: "待审核" }).blockingIssues[0].code).toBe("SPLIT_STATE_NOT_READY");
    expect(syncCheck({ syncStatus: "unknown" }).warnings[0].code).toBe("SYNC_UNKNOWN");
  });

  it("requires dry-run or confirm for product writes", async () => {
    await expect(productWritePlan("product/apply/update", { input: "apply.csv" })).rejects.toThrow();
    await expect(productWritePlan("product/apply/update", { input: "apply.csv", dryRun: true })).resolves.toMatchObject({ mode: "dry-run" });
  });
});
