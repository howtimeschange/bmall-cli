import { dryRun } from "../../core/dry-run.js";
import { writeAudit } from "../../core/audit.js";

export type AccessLevel = "read" | "write" | "destructive" | "financial";

export interface WriteGateOptions {
  dryRun?: boolean;
  confirm?: boolean;
  reason?: string;
}

export interface AuditContext {
  profile?: string;
  env?: string;
  user?: string;
  company?: string;
  group?: string;
  command: string;
  access: AccessLevel;
  args?: Record<string, unknown>;
  requestId?: string;
  configHome?: string;
}

const SECRET_FIELD = /(token|tokenId|password|mobile|phone|idNo|authorization|cookie)/i;

export function assertWriteGate(options: WriteGateOptions, access: AccessLevel = "write"): void {
  if (access === "read") return;

  if (options.dryRun) return;

  if (access === "financial" && !options.confirm) {
    throw new Error("FINANCIAL_REQUIRES_DRY_RUN_OR_CONFIRM");
  }

  if (!options.confirm) {
    throw new Error("WRITE_REQUIRES_DRY_RUN_OR_CONFIRM");
  }

  if ((access === "destructive" || access === "write") && !String(options.reason ?? "").trim()) {
    throw new Error("WRITE_REQUIRES_REASON");
  }
}

export function redactValue(key: string, value: unknown): unknown {
  if (SECRET_FIELD.test(key)) return "[REDACTED]";
  if (Array.isArray(value)) return value.map((item) => redactObject(item));
  if (value && typeof value === "object") return redactObject(value);
  return value;
}

export function redactObject<T>(input: T): T {
  if (!input || typeof input !== "object" || Array.isArray(input)) return input;
  return Object.fromEntries(
    Object.entries(input as Record<string, unknown>).map(([key, value]) => [key, redactValue(key, value)]),
  ) as T;
}

export function buildAuditRecord(context: AuditContext, status: "dry-run" | "success" | "failed", message?: string) {
  return {
    timestamp: new Date().toISOString(),
    profile: context.profile ?? "default",
    env: context.env ?? "unknown",
    user: context.user ?? null,
    company: context.company ?? null,
    group: context.group ?? null,
    command: context.command,
    access: context.access,
    requestId: context.requestId ?? null,
    args: redactObject(context.args ?? {}),
    result: { status, message: message ?? null },
  };
}

export function dryRunPlan(command: string, affected: number, apiCalls: Array<Record<string, unknown>>) {
  return {
    ok: true,
    mode: "dry-run",
    command,
    affected,
    apiCalls,
    nextActions: ["Review affected records", "Re-run with --confirm --reason after approval"],
  };
}

export async function auditOperation(
  context: AuditContext,
  result: "ok" | "error" | "dry-run",
  args: Record<string, unknown> = context.args ?? {},
): Promise<void> {
  await writeAudit(
    {
      profile: context.profile,
      env: context.env,
      command: context.command,
      access: context.access,
      requestId: context.requestId,
      args,
      result,
    },
    context.configHome,
  );
}

export function unsupportedDryRun(command: string, access: AccessLevel, options: WriteGateOptions & Record<string, unknown>) {
  assertWriteGate(options, access);
  return {
    ...dryRun(command, options),
    ok: true,
    mode: "dry-run",
    command,
    blocked: true,
    message: "Command skeleton only; no API call is implemented.",
  };
}
