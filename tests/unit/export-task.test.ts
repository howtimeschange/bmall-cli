import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { normalizeExportResponse, waitForExportTask } from "../../src/domains/export/tasks.js";

const tempDirs: string[] = [];

afterEach(() => {
  for (const dir of tempDirs.splice(0)) rmSync(dir, { recursive: true, force: true });
});

describe("export task normalization", () => {
  it("normalizes direct urls", () => {
    const result = normalizeExportResponse({ downloadURL: "https://example.com/order.xlsx" }, { sourceEndpoint: "file/order/exportOrder" });
    expect(result).toMatchObject({
      mode: "direct-url",
      status: "success",
      downloadUrl: "https://example.com/order.xlsx",
      sourceEndpoint: "file/order/exportOrder",
    });
  });

  it("normalizes nested API envelopes with direct urls", () => {
    const result = normalizeExportResponse({
      ok: true,
      data: {
        data: {
          taskId: "T100",
          downloadUrl: "https://example.com/order.xlsx",
          status: "2",
        },
      },
    });

    expect(result).toMatchObject({
      mode: "direct-url",
      taskId: "T100",
      status: "success",
      downloadUrl: "https://example.com/order.xlsx",
    });
  });

  it("normalizes async tasks", () => {
    const result = normalizeExportResponse({ taskCode: "T100", status: "running" });
    expect(result).toMatchObject({ mode: "async-task", taskId: "T100", status: "running" });
  });

  it("writes pending registry when isAsyn has no task id", () => {
    const dir = mkdtempSync(join(tmpdir(), "bmall-export-"));
    tempDirs.push(dir);
    const pendingFile = join(dir, "pending.json");

    const result = normalizeExportResponse(
      { isAsyn: true, message: "accepted" },
      { type: "order", sourceEndpoint: "file/order/exportOrder", operator: "tester", pendingFile },
    );

    expect(result.mode).toBe("pending");
    expect(result.taskId).toBeNull();
    expect(result.pendingRegistryId).toMatch(/^pending-/);
    const registry = JSON.parse(readFileSync(pendingFile, "utf8"));
    expect(registry[0]).toMatchObject({ type: "order", sourceEndpoint: "file/order/exportOrder", operator: "tester" });
  });

  it("waits until task success", async () => {
    vi.useFakeTimers();
    const getTask = vi
      .fn()
      .mockResolvedValueOnce({ mode: "async-task", taskId: "T1", status: "running", downloadUrl: null, sourceEndpoint: null })
      .mockResolvedValueOnce({ mode: "async-task", taskId: "T1", status: "success", downloadUrl: "https://example.com/a.xlsx", sourceEndpoint: null });
    const wait = waitForExportTask(getTask, "T1", { timeoutMs: 1000, intervalMs: 10 });
    await vi.advanceTimersByTimeAsync(10);
    await expect(wait).resolves.toMatchObject({ status: "success", downloadUrl: "https://example.com/a.xlsx" });
    vi.useRealTimers();
  });
});
