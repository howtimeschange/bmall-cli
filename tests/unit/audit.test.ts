import { describe, expect, it } from "vitest";
import { assertWriteGate, buildAuditRecord, redactObject } from "../../src/domains/ops/safety.js";

describe("operations write gate and audit redaction", () => {
  it("requires dry-run or confirm for write operations", () => {
    expect(() => assertWriteGate({}, "write")).toThrow("WRITE_REQUIRES_DRY_RUN_OR_CONFIRM");
    expect(() => assertWriteGate({ confirm: true }, "write")).toThrow("WRITE_REQUIRES_REASON");
    expect(() => assertWriteGate({ dryRun: true }, "write")).not.toThrow();
    expect(() => assertWriteGate({ confirm: true, reason: "approved change" }, "write")).not.toThrow();
  });

  it("redacts secret-like fields in audit records", () => {
    const record = buildAuditRecord(
      {
        command: "ops.config.set",
        access: "write",
        args: {
          tokenId: "secret-token",
          mobile: "13800000000",
          key: "order.limit",
          nested: { password: "secret" },
        },
      },
      "dry-run",
    );

    expect(record.args).toEqual({
      tokenId: "[REDACTED]",
      mobile: "[REDACTED]",
      key: "order.limit",
      nested: { password: "[REDACTED]" },
    });
    expect(redactObject({ phone: "123", safe: "ok" })).toEqual({ phone: "[REDACTED]", safe: "ok" });
  });
});
