import { dryRun } from "../../core/dry-run.js";
import { writeAudit } from "../../core/audit.js";
import { createInterface } from "node:readline/promises";
import { stdin as defaultInput, stderr as defaultOutput } from "node:process";
import type { Readable, Writable } from "node:stream";

export type AccessLevel = "read" | "write" | "destructive" | "financial";

export interface WriteGateOptions {
  dryRun?: boolean;
  confirm?: boolean;
  reason?: string;
  json?: boolean;
}

export interface InteractiveWriteGateOptions {
  command: string;
  summary?: string;
  question?: (prompt: string) => Promise<string>;
  interactive?: boolean;
  input?: Readable;
  output?: Writable;
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

  if (!options.confirm) {
    throw new Error(access === "financial" ? "FINANCIAL_REQUIRES_DRY_RUN_OR_CONFIRM" : "WRITE_REQUIRES_DRY_RUN_OR_CONFIRM");
  }

  if (!String(options.reason ?? "").trim()) {
    throw new Error("WRITE_REQUIRES_REASON");
  }
}

export async function authorizeWriteGate(
  options: WriteGateOptions,
  access: AccessLevel = "write",
  promptOptions: InteractiveWriteGateOptions,
): Promise<void> {
  if (access === "read" || options.dryRun || (options.confirm && String(options.reason ?? "").trim())) {
    assertWriteGate(options, access);
    return;
  }

  if (options.confirm && !String(options.reason ?? "").trim()) {
    assertWriteGate(options, access);
    return;
  }

  if (!canPromptForAuthorization(options, promptOptions)) {
    assertWriteGate(options, access);
    return;
  }

  const ask = promptOptions.question ?? createTerminalQuestion(promptOptions.input, promptOptions.output);
  try {
    const summary = promptOptions.summary ? `\n影响: ${promptOptions.summary}` : "";
    const answer = (await ask(
      [
        `\n即将执行需要用户授权的 ${access} 操作: ${promptOptions.command}`,
        summary,
        "这会修改 Bmall 业务数据。输入 yes 继续，其他任意输入取消: ",
      ].filter(Boolean).join("\n"),
    )).trim().toLowerCase();

    if (answer !== "yes") {
      throw new Error("WRITE_CONFIRMATION_CANCELLED");
    }

    const reason = (await ask("请输入本次授权理由: ")).trim();
    if (!reason) {
      throw new Error("WRITE_REQUIRES_REASON");
    }

    options.confirm = true;
    options.reason = reason;
    assertWriteGate(options, access);
  } finally {
    if ("close" in ask && typeof ask.close === "function") ask.close();
  }
}

function canPromptForAuthorization(options: WriteGateOptions, promptOptions: InteractiveWriteGateOptions): boolean {
  if (options.json) return false;
  if (process.argv.includes("--json")) return false;
  if (promptOptions.interactive !== undefined) return promptOptions.interactive;
  const input = promptOptions.input ?? defaultInput;
  const output = promptOptions.output ?? defaultOutput;
  return Boolean(streamIsTty(input) && streamIsTty(output));
}

function streamIsTty(stream: Readable | Writable): boolean {
  return "isTTY" in stream && stream.isTTY === true;
}

function createTerminalQuestion(input: Readable | undefined, output: Writable | undefined): ((prompt: string) => Promise<string>) & { close: () => void } {
  const rl = createInterface({ input: input ?? defaultInput, output: output ?? defaultOutput });
  const ask = ((prompt: string) => rl.question(prompt)) as ((prompt: string) => Promise<string>) & { close: () => void };
  ask.close = () => rl.close();
  return ask;
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
