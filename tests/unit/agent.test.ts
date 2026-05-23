import { describe, expect, it } from "vitest";
import { explainError } from "../../src/domains/agent/commands.js";

describe("agent deterministic helpers", () => {
  it("maps Puma address error to address diagnosis and patch commands", () => {
    const result = explainError("401700000");

    expect(result).toMatchObject({
      code: "401700000",
      canCliFixDirectly: true,
    });
    expect(JSON.stringify(result)).toContain("ops order diagnose-pending");
    expect(JSON.stringify(result)).toContain("ops address check");
    expect(JSON.stringify(result)).toContain("ops address patch");
  });

  it("recognizes the same address failure from message text", () => {
    const result = explainError("", "收货地址不完整，请先维护区");
    expect(result).toMatchObject({ code: "401700000" });
  });
});
