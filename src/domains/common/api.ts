import { readFileSync } from 'node:fs';
import { SessionStore } from '../../auth/session.js';
import type { GlobalOptions } from '../../auth/commands.js';
import { ConfigManager } from '../../core/config.js';
import { BmallHttpClient, type BmallRequestOptions } from '../../core/http.js';
import { success } from '../../core/output.js';

export type OutputFn = (payload: unknown) => void;

export type ClientLike = {
  send<T = unknown>(opts: BmallRequestOptions): Promise<{ data?: T; requestId: string; durationMs: number }>;
};

export interface DomainCommandDeps {
  createClient?: (baseUrl: string, token: Awaited<ReturnType<SessionStore['require']>>) => ClientLike;
}

export interface ApiStep {
  name: string;
  path: string;
  method?: string;
  body?: Record<string, unknown>;
}

const NON_BODY_OPTION_KEYS = new Set(['json', 'confirm', 'dryRun', 'reason', 'file']);

export function cleanOptionsBody(options: Record<string, unknown>, extra: Record<string, unknown> = {}): Record<string, unknown> {
  const entries = Object.entries({ ...options, ...extra }).filter(([key, value]) => {
    if (NON_BODY_OPTION_KEYS.has(key)) return false;
    return value !== undefined && value !== '';
  });
  return Object.fromEntries(entries);
}

export function readJsonFile(file?: string): Record<string, unknown> {
  if (!file) return {};
  const parsed = JSON.parse(readFileSync(file, 'utf8'));
  return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed as Record<string, unknown> : { value: parsed };
}

export function mergeFileAndOptions(options: Record<string, unknown>, extra: Record<string, unknown> = {}): Record<string, unknown> {
  return { ...readJsonFile(typeof options.file === 'string' ? options.file : undefined), ...cleanOptionsBody(options, extra) };
}

export async function callBmallApi(
  globals: GlobalOptions,
  output: OutputFn,
  deps: DomainCommandDeps,
  path: string,
  body: Record<string, unknown> = {},
  request: { method?: string; meta?: Record<string, unknown> } = {},
): Promise<void> {
  const resolved = await new ConfigManager(globals.configHome).resolve(globals);
  const bundle = await new SessionStore(undefined, globals.configHome).require(resolved.profile);
  const client = deps.createClient?.(resolved.baseUrl, bundle) ?? new BmallHttpClient(resolved.baseUrl, bundle);
  const method = request.method ?? 'POST';
  const response = await client.send({
    method,
    path,
    ...(method.toUpperCase() === 'GET' ? { query: withCompany(body, resolved.profileConfig.companyId) as Record<string, string | number | boolean | undefined> } : { body: withCompany(body, resolved.profileConfig.companyId) }),
    auth: { injectAuthToBody: method.toUpperCase() !== 'GET', injectAuthToQuery: method.toUpperCase() === 'GET' },
  });
  output(success({ ...resolved, requestId: response.requestId }, response.data, { source: 'api', durationMs: response.durationMs, ...request.meta }));
}

export async function callBmallApiSequence(
  globals: GlobalOptions,
  output: OutputFn,
  deps: DomainCommandDeps,
  steps: ApiStep[],
  defaultBody: Record<string, unknown>,
): Promise<void> {
  const resolved = await new ConfigManager(globals.configHome).resolve(globals);
  const bundle = await new SessionStore(undefined, globals.configHome).require(resolved.profile);
  const client = deps.createClient?.(resolved.baseUrl, bundle) ?? new BmallHttpClient(resolved.baseUrl, bundle);
  const results = [];
  let lastRequestId: string | undefined;
  let totalDurationMs = 0;

  for (const step of steps) {
    const method = step.method ?? 'POST';
    const body = withCompany(step.body ?? defaultBody, resolved.profileConfig.companyId);
    const response = await client.send({
      method,
      path: step.path,
      ...(method.toUpperCase() === 'GET' ? { query: body as Record<string, string | number | boolean | undefined> } : { body }),
      auth: { injectAuthToBody: method.toUpperCase() !== 'GET', injectAuthToQuery: method.toUpperCase() === 'GET' },
    });
    lastRequestId = response.requestId;
    totalDurationMs += response.durationMs;
    results.push({
      name: step.name,
      endpoint: step.path,
      requestId: response.requestId,
      data: response.data,
    });
  }

  output(success({ ...resolved, requestId: lastRequestId }, { steps: results }, { source: 'api', durationMs: totalDurationMs }));
}

export function dryRunSequence(command: string, steps: ApiStep[], body: Record<string, unknown>) {
  return {
    ok: true,
    mode: 'dry-run',
    command,
    blocked: false,
    apiCalls: steps.map((step) => ({
      method: step.method ?? 'POST',
      endpoint: step.path,
      body: step.body ?? body,
    })),
    nextActions: ['Review the API call sequence', 'Run validate before confirmed submit', 'Re-run with --confirm --reason after user approval'],
  };
}

function withCompany(body: Record<string, unknown>, defaultCompanyId?: string): Record<string, unknown> {
  const cleaned = Object.fromEntries(Object.entries(body).filter(([, value]) => value !== undefined && value !== ''));
  if (!cleaned.companyId && defaultCompanyId) cleaned.companyId = defaultCompanyId;
  return cleaned;
}
