import { describe, expect, it } from "vitest";
import { explainError, getDiagnosticKnowledgeSummary } from "../../src/domains/agent/commands.js";

describe("agent deterministic helpers", () => {
  it("maps Puma address error to address diagnosis and patch commands", () => {
    const result = explainError("401700000");

    expect(result).toMatchObject({
      code: "401700000",
      canCliFixDirectly: true,
      knowledgePack: {
        id: "bmall-cli-diagnostics",
        schemaVersion: 1,
      },
      fundingBasis: {
        primary: "sap-available-balance",
        orderBalanceFields: ["sapDistributorBalance", "companyAvailableBalance"],
        rebateBalanceFields: ["rebateBalance", "rebateAvailableBalance"],
        legacyBmallFundsHeader: "b2b/fundmanagement/balance",
        legacyHeaderIsOrderBalanceSource: false,
      },
      evidence: {
        level: "source-reviewed",
      },
    });
    expect(result.playbook).toMatchObject({
      id: "pending-review-address-region-missing",
      title: "待审核订单地址区县缺失",
    });
    expect(result.supportBundleHints).toEqual(
      expect.arrayContaining(["knowledgePack", "requestId", "profile", "groupId", "companyId", "pendingOrderId"]),
    );
    expect(JSON.stringify(result)).toContain("ops order diagnose-pending");
    expect(JSON.stringify(result)).toContain("ops address check");
    expect(JSON.stringify(result)).toContain("ops address patch");
    expect(JSON.stringify(result)).toContain("SAP");
    expect(JSON.stringify(result)).toContain("b2b/fundmanagement/balance");
  });

  it("recognizes the same address failure from message text", () => {
    const result = explainError("", "收货地址不完整，请先维护区");
    expect(result).toMatchObject({ code: "401700000" });
  });

  it("exposes versioned diagnostic knowledge metadata for external users", () => {
    const summary = getDiagnosticKnowledgeSummary();

    expect(summary).toMatchObject({
      id: "bmall-cli-diagnostics",
      schemaVersion: 1,
      distribution: "bundled",
      sourceReposRequired: false,
    });
    expect(summary.entries).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          code: "401700000",
          playbookId: "pending-review-address-region-missing",
          evidenceLevel: "source-reviewed",
        }),
      ]),
    );
  });
});
