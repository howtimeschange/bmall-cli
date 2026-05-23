import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join } from "node:path";

export type ExportMode = "direct-url" | "async-task" | "stream" | "pending";
export type ExportStatus = "running" | "success" | "failed" | "unknown";

export interface NormalizedExportTask {
  mode: ExportMode;
  taskId: string | null;
  status: ExportStatus;
  downloadUrl: string | null;
  sourceEndpoint: string | null;
  pendingRegistryId?: string;
  raw?: unknown;
}

export interface PendingExportRecord {
  id: string;
  createdAt: string;
  type?: string;
  sourceEndpoint?: string;
  operator?: string;
  raw: unknown;
}

const DIRECT_URL_KEYS = ["downloadURL", "downloadUrl", "fileUrl", "url"];
const TASK_ID_KEYS = ["taskId", "taskCode", "recordId", "id"];

function pickString(source: Record<string, unknown>, keys: string[]): string | null {
  for (const key of keys) {
    const value = source[key];
    if (typeof value === "string" && value.trim()) return value;
    if (typeof value === "number") return String(value);
  }
  return null;
}

export function pendingRegistryPath(): string {
  return join(homedir(), ".bmall-cli", "exports", "pending.json");
}

function readPendingRegistry(filePath = pendingRegistryPath()): PendingExportRecord[] {
  try {
    return JSON.parse(readFileSync(filePath, "utf8")) as PendingExportRecord[];
  } catch {
    return [];
  }
}

export function writePendingExport(record: Omit<PendingExportRecord, "id" | "createdAt">, filePath = pendingRegistryPath()): PendingExportRecord {
  const existing = readPendingRegistry(filePath);
  const next: PendingExportRecord = {
    id: `pending-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    ...record,
  };
  mkdirSync(dirname(filePath), { recursive: true, mode: 0o700 });
  writeFileSync(filePath, JSON.stringify([...existing, next], null, 2), { encoding: "utf8", mode: 0o600 });
  return next;
}

export function normalizeExportResponse(raw: unknown, options: { sourceEndpoint?: string; type?: string; operator?: string; pendingFile?: string } = {}): NormalizedExportTask {
  const source = raw && typeof raw === "object" && "data" in raw && (raw as { data?: unknown }).data
    ? (raw as { data: unknown }).data
    : raw;
  const obj = source && typeof source === "object" ? source as Record<string, unknown> : {};
  const downloadUrl = pickString(obj, DIRECT_URL_KEYS);
  const taskId = pickString(obj, TASK_ID_KEYS);
  const status = normalizeTaskStatus(obj.status ?? obj.taskStatus ?? obj.state);
  const sourceEndpoint = String(obj.sourceEndpoint ?? options.sourceEndpoint ?? "") || null;

  if (downloadUrl) {
    return { mode: "direct-url", taskId, status: status === "unknown" ? "success" : status, downloadUrl, sourceEndpoint, raw };
  }

  if (taskId) {
    return { mode: "async-task", taskId, status, downloadUrl: null, sourceEndpoint, raw };
  }

  if (obj.isAsyn === true || obj.isAsync === true || obj.async === true) {
    const pending = writePendingExport(
      { type: options.type, sourceEndpoint: sourceEndpoint ?? undefined, operator: options.operator, raw },
      options.pendingFile,
    );
    return {
      mode: "pending",
      taskId: null,
      status: "unknown",
      downloadUrl: null,
      sourceEndpoint,
      pendingRegistryId: pending.id,
      raw,
    };
  }

  if (raw instanceof Uint8Array || Buffer.isBuffer(raw)) {
    return { mode: "stream", taskId: null, status: "success", downloadUrl: null, sourceEndpoint, raw: null };
  }

  return { mode: "async-task", taskId: null, status, downloadUrl: null, sourceEndpoint, raw };
}

export function normalizeTaskStatus(value: unknown): ExportStatus {
  const status = String(value ?? "").toLowerCase();
  if (["success", "done", "finished", "complete", "completed", "2"].includes(status)) return "success";
  if (["failed", "fail", "error", "3"].includes(status)) return "failed";
  if (["running", "pending", "processing", "1"].includes(status)) return "running";
  return "unknown";
}

export async function waitForExportTask(
  getTask: (taskId: string) => Promise<NormalizedExportTask>,
  taskId: string,
  options: { timeoutMs?: number; intervalMs?: number } = {},
) {
  const timeoutMs = options.timeoutMs ?? 10 * 60 * 1000;
  const intervalMs = options.intervalMs ?? 2000;
  const deadline = Date.now() + timeoutMs;
  let last = await getTask(taskId);

  while (Date.now() < deadline && last.status !== "success" && last.status !== "failed") {
    await new Promise((resolve) => setTimeout(resolve, intervalMs));
    last = await getTask(taskId);
  }

  if (last.status !== "success" && last.status !== "failed") {
    return { ...last, status: "unknown" as ExportStatus };
  }
  return last;
}

export async function downloadExportTask(
  task: NormalizedExportTask,
  output: string,
  fetchBytes: (url: string) => Promise<Uint8Array>,
) {
  if (!task.downloadUrl) throw new Error("EXPORT_TASK_HAS_NO_DOWNLOAD_URL");
  const bytes = await fetchBytes(task.downloadUrl);
  mkdirSync(dirname(output), { recursive: true });
  writeFileSync(output, bytes);
  return { ok: true, output, bytes: bytes.byteLength };
}

type ApiClient = { request: (method: string, path: string, body?: unknown) => Promise<unknown> };
type OutputFn = (payload: unknown) => unknown;
type CommandLike = {
  command(name: string): CommandLike;
  description(text: string): CommandLike;
  option(flags: string, description?: string, defaultValue?: unknown): CommandLike;
  requiredOption(flags: string, description?: string): CommandLike;
  action(fn: (options: Record<string, unknown>) => unknown): CommandLike;
};

function parseDurationMs(value: unknown): number {
  const text = String(value ?? "10m");
  const match = text.match(/^(\d+)(ms|s|m)?$/);
  if (!match) return 10 * 60 * 1000;
  const amount = Number(match[1]);
  const unit = match[2] ?? "ms";
  if (unit === "m") return amount * 60 * 1000;
  if (unit === "s") return amount * 1000;
  return amount;
}

function emit(output: OutputFn | undefined, payload: unknown): unknown {
  if (output) return output(payload);
  return payload;
}

export function registerExportCommands(program: CommandLike, client?: ApiClient, output?: OutputFn) {
  const task = program.command("export").description("Export operations").command("task").description("Export task operations");

  task.command("list").option("--type <type>").option("--json").action(async (options) => {
    const result = client ? await client.request("GET", "cli/export/tasks", options) : { items: [] };
    return emit(output, result);
  });
  task.command("get").requiredOption("--task-id <taskId>").option("--json").action(async (options) => {
    const raw = client ? await client.request("GET", `cli/export/tasks/${options.taskId}`, options) : { taskId: options.taskId };
    return emit(output, normalizeExportResponse(raw, { sourceEndpoint: "cli/export/tasks" }));
  });
  task.command("wait").requiredOption("--task-id <taskId>").option("--timeout <timeout>", "timeout such as 10m", "10m").option("--json").action(async (options) => {
    if (!client) return emit(output, { mode: "async-task", taskId: options.taskId, status: "unknown", downloadUrl: null, sourceEndpoint: null });
    const result = await waitForExportTask(async (taskId) => {
      const raw = await client.request("GET", `cli/export/tasks/${taskId}`, {});
      return normalizeExportResponse(raw, { sourceEndpoint: "cli/export/tasks" });
    }, String(options.taskId), { timeoutMs: parseDurationMs(options.timeout), intervalMs: 2000 });
    return emit(output, result);
  });
  task.command("download").requiredOption("--task-id <taskId>").requiredOption("--output <output>").option("--json").action(async (options) => {
    const raw = client ? await client.request("GET", `cli/export/tasks/${options.taskId}`, options) : { taskId: options.taskId };
    return emit(output, normalizeExportResponse(raw, { sourceEndpoint: "cli/export/tasks" }));
  });

  return task;
}
