import { describe, expect, it } from "vitest";
import { Command } from "commander";
import { registerPendingOrderCommands } from "../../src/domains/pending-order/commands.js";

describe("pending-order API commands", () => {
  it("uses the real mini source-type and cancel endpoints", async () => {
    const calls: Array<{ method: string; path: string; body?: unknown }> = [];
    const outputs: unknown[] = [];
    const client = {
      request: async (method: string, path: string, body?: unknown) => {
        calls.push({ method, path, body });
        return { ok: true, path, body };
      },
    };
    const program = new Command().exitOverride();
    registerPendingOrderCommands(program, (payload) => outputs.push(payload), client);

    await program.parseAsync(["node", "bmall", "pending-order", "source-type", "--order-id", "10001", "--json"]);
    await program.parseAsync([
      "node",
      "bmall",
      "pending-order",
      "cancel",
      "--order-id",
      "10001",
      "--confirm",
      "--reason",
      "客户取消",
      "--json",
    ]);

    expect(calls[0]).toEqual({
      method: "POST",
      path: "b2b/pendingReviewOrder/mini/orderSourceType/check",
      body: { orderId: "10001" },
    });
    expect(calls[1]).toEqual({
      method: "POST",
      path: "b2b/pendingReviewOrder/mini/cancel",
      body: { orderId: 10001, cancelReason: "客户取消" },
    });
    expect(outputs).toHaveLength(2);
  });

  it("prechecks review with middle-ground check endpoint and dry-run review submit", async () => {
    const calls: Array<{ method: string; path: string; body?: unknown }> = [];
    const outputs: unknown[] = [];
    const client = {
      request: async (method: string, path: string, body?: unknown) => {
        calls.push({ method, path, body });
        return { ok: true, path, body };
      },
    };
    const program = new Command().exitOverride();
    registerPendingOrderCommands(program, (payload) => outputs.push(payload), client);

    await program.parseAsync(["node", "bmall", "pending-order", "review-check", "--file", fixtureJson(), "--json"]);
    await program.parseAsync(["node", "bmall", "pending-order", "review", "--file", fixtureJson(), "--dry-run", "--json"]);

    expect(calls[0]).toMatchObject({
      method: "POST",
      path: "b2b/pendingReviewOrder/checkPendingReviewOrder",
    });
    expect(outputs[1]).toMatchObject({
      ok: true,
      mode: "dry-run",
      command: "pending-order.review",
      apiCalls: [{ method: "POST", endpoint: "b2b/pendingReviewOrder/submitPendingOrder" }],
    });
  });
});

function fixtureJson(): string {
  return new URL("../fixtures/pending-review-submit.json", import.meta.url).pathname;
}
