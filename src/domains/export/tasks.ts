import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join } from "node:path";
import { request } from "undici";

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
const TASK_ID_KEYS = ["taskId", "taskCode", "recordId", "id", "fid"];
const ASYNC_TASK_PAGE_ENDPOINT = "file/asyn/export/b2b/page";
const EXPORT_TASK_PAGE_ENDPOINT = "file/export/task/findReportExportTaskByUser";
const EXPORT_TASK_DOWNLOAD_ENDPOINT = "file/export/task/downloadTaskFile";

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

export function findTaskInList(raw: unknown, taskId: string): NormalizedExportTask {
  const items = extractTaskItems(raw);
  const found = items.find((item) => {
    const obj = item && typeof item === "object" ? item as Record<string, unknown> : {};
    return TASK_ID_KEYS.some((key) => String(obj[key] ?? "") === taskId);
  });
  return normalizeExportResponse(found ?? { taskId, status: "unknown", raw }, { sourceEndpoint: ASYNC_TASK_PAGE_ENDPOINT });
}

function extractTaskItems(raw: unknown): unknown[] {
  const source = raw && typeof raw === "object" && "data" in raw && (raw as { data?: unknown }).data
    ? (raw as { data: unknown }).data
    : raw;
  if (Array.isArray(source)) return source;
  const obj = source && typeof source === "object" ? source as Record<string, unknown> : {};
  for (const key of ["content", "items", "records", "rows", "list", "DataLine"]) {
    if (Array.isArray(obj[key])) return obj[key] as unknown[];
  }
  if (obj.data && typeof obj.data === "object") return extractTaskItems(obj.data);
  return [];
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

export async function fetchUrlBytes(url: string): Promise<Uint8Array> {
  const response = await request(url);
  if (response.statusCode >= 400) throw new Error(`EXPORT_DOWNLOAD_HTTP_${response.statusCode}`);
  return new Uint8Array(await response.body.arrayBuffer());
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

function requireClient(client: ApiClient | undefined): ApiClient {
  if (!client) throw new Error("EXPORT_TASK_REQUIRES_API_CLIENT");
  return client;
}

export function registerExportCommands(program: CommandLike, client?: ApiClient, output?: OutputFn) {
  const task = program.command("export").description("Export operations").command("task").description("Export task operations");

  task.command("list").option("--type <type>").option("--page-index <pageIndex>").option("--page-size <pageSize>").option("--json").action(async (options) => {
    const body = { pageIndex: Number(options.pageIndex ?? 1), pageSize: Number(options.pageSize ?? 20), type: options.type };
    return emit(output, await requireClient(client).request("POST", ASYNC_TASK_PAGE_ENDPOINT, body));
  });
  task.command("get").requiredOption("--task-id <taskId>").option("--json").action(async (options) => {
    const raw = await requireClient(client).request("POST", ASYNC_TASK_PAGE_ENDPOINT, { taskId: options.taskId, pageIndex: 1, pageSize: 20 });
    return emit(output, findTaskInList(raw, String(options.taskId)));
  });
  task.command("wait").requiredOption("--task-id <taskId>").option("--timeout <timeout>", "timeout such as 10m", "10m").option("--json").action(async (options) => {
    const result = await waitForExportTask(async (taskId) => {
      const raw = await requireClient(client).request("POST", ASYNC_TASK_PAGE_ENDPOINT, { taskId, pageIndex: 1, pageSize: 20 });
      return findTaskInList(raw, taskId);
    }, String(options.taskId), { timeoutMs: parseDurationMs(options.timeout), intervalMs: 2000 });
    return emit(output, result);
  });
  task.command("download").requiredOption("--task-id <taskId>").requiredOption("--output <output>").option("--json").action(async (options) => {
    const raw = await requireClient(client).request("POST", EXPORT_TASK_DOWNLOAD_ENDPOINT, { taskId: options.taskId });
    const normalized = normalizeExportResponse(raw, { sourceEndpoint: EXPORT_TASK_DOWNLOAD_ENDPOINT });
    return emit(output, await downloadExportTask(normalized, String(options.output), fetchUrlBytes));
  });

  return task;
}

export const exportTaskEndpoints = {
  asyncPage: ASYNC_TASK_PAGE_ENDPOINT,
  reportPage: EXPORT_TASK_PAGE_ENDPOINT,
  download: EXPORT_TASK_DOWNLOAD_ENDPOINT,
};
