import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { authorizeWriteGate, auditOperation, dryRunPlan } from "../ops/safety.js";

export interface JobAllowlistEntry {
  jobId: string;
  module: string;
  description: string;
  enabled: boolean;
  status?: "enabled" | "disabled" | "pendingApproval" | "requiresApproval";
  requiresApproval?: boolean;
  targetObject?: string;
  targetMethod?: string;
  fixedParams?: Record<string, unknown>;
  impact?: string;
}

export function defaultAllowlistPath(): string {
  return resolve(dirname(fileURLToPath(import.meta.url)), "../../../manifests/job-allowlist.json");
}

export function loadJobAllowlist(filePath = defaultAllowlistPath()): JobAllowlistEntry[] {
  const data = JSON.parse(readFileSync(filePath, "utf8")) as { jobs?: JobAllowlistEntry[] } | JobAllowlistEntry[];
  return Array.isArray(data) ? data : data.jobs ?? [];
}

export function listJobs(jobs: JobAllowlistEntry[], module?: string) {
  return jobs.filter((job) => !module || job.module === module);
}

export function selectRunnableJob(jobs: JobAllowlistEntry[], jobId: string) {
  if (jobId === "schedule/dowork" || jobId.includes("schedule") || jobId.includes("dowork")) {
    throw new Error("GENERIC_SCHEDULE_DOWORK_IS_FORBIDDEN");
  }
  const job = jobs.find((entry) => entry.jobId === jobId);
  if (!job) throw new Error("JOB_NOT_IN_ALLOWLIST");
  if (!job.enabled || job.status === "disabled" || job.status === "pendingApproval" || job.status === "requiresApproval") {
    throw new Error("JOB_NOT_ENABLED");
  }
  if (job.requiresApproval) throw new Error("JOB_REQUIRES_APPROVAL");
  return job;
}

export function buildJobRunPayload(selected: JobAllowlistEntry, reason?: unknown) {
  return {
    jobId: selected.jobId,
    reason,
    targetObject: selected.targetObject,
    targetMethod: selected.targetMethod,
    params: selected.fixedParams ?? {},
  };
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

function emit(output: OutputFn | undefined, payload: unknown): unknown {
  if (output) return output(payload);
  return payload;
}

export async function runJob(selected: JobAllowlistEntry, options: { dryRun?: boolean; reason?: unknown }, client?: ApiClient) {
  const payload = buildJobRunPayload(selected, options.reason);
  if (options.dryRun) {
    return { ...dryRunPlan("ops.job.run", 1, [{ method: "POST", endpoint: "ops/job/run", ...payload }]), jobId: selected.jobId };
  }
  if (!client) throw new Error("JOB_RUN_REQUIRES_BACKEND_FACADE");
  return client.request("POST", "ops/job/run", payload);
}

export function registerJobCommands(program: CommandLike, client?: ApiClient, allowlistPath?: string, output?: OutputFn, configHome?: string | (() => string | undefined)) {
  const job = program.command("job").description("Allowlisted operations jobs");
  job.command("list").option("--module <module>").option("--json").action((options) => {
    return emit(output, { jobs: listJobs(loadJobAllowlist(allowlistPath), options.module ? String(options.module) : undefined) });
  });
  job.command("run").requiredOption("--job-id <jobId>").option("--dry-run").option("--confirm").option("--reason <reason>").option("--json").action(async (options) => {
    const selected = selectRunnableJob(loadJobAllowlist(allowlistPath), String(options.jobId));
    const payload = buildJobRunPayload(selected, options.reason);
    await authorizeWriteGate(options, "write", {
      command: "ops.job.run",
      summary: selected.impact ?? selected.description,
    });
    const result = await runJob(selected, { dryRun: Boolean(options.dryRun), reason: options.reason }, client);
    await auditOperation({ command: "ops.job.run", access: "write", args: payload, configHome: typeof configHome === "function" ? configHome() : configHome }, options.dryRun ? "dry-run" : "ok");
    return emit(output, result);
  });
  return job;
}
