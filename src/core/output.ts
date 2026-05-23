import { BmallCliError, toBmallError } from './errors.js';

export interface CommandContextLike {
  profile?: string;
  env?: string;
  requestId?: string;
}

export interface SuccessEnvelope<T> {
  ok: true;
  profile?: string;
  env?: string;
  requestId: string;
  data: T;
  warnings: string[];
  meta: {
    durationMs?: number;
    source: 'api' | 'local';
  };
}

export interface ErrorEnvelope {
  ok: false;
  requestId: string;
  error: {
    code: string;
    message: string;
    recover?: string;
  };
}

export function makeRequestId(prefix = 'cli'): string {
  return `${prefix}_${new Date().toISOString().replace(/[-:.TZ]/g, '')}_${Math.random().toString(36).slice(2, 8)}`;
}

export function success<T>(ctx: CommandContextLike, data: T, meta: Partial<SuccessEnvelope<T>['meta']> = {}): SuccessEnvelope<T> {
  return {
    ok: true,
    profile: ctx.profile,
    env: ctx.env,
    requestId: ctx.requestId ?? makeRequestId(),
    data,
    warnings: [],
    meta: {
      source: 'local',
      ...meta
    }
  };
}

export function failure(ctx: CommandContextLike, error: unknown): ErrorEnvelope {
  const normalized = error instanceof BmallCliError ? error : toBmallError(error);
  return {
    ok: false,
    requestId: ctx.requestId ?? makeRequestId(),
    error: {
      code: normalized.code,
      message: normalized.message,
      recover: normalized.recover
    }
  };
}

export function printResult(result: unknown, asJson = false): void {
  if (asJson || typeof result !== 'string') {
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
    return;
  }
  process.stdout.write(`${result}\n`);
}
