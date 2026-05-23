import { request } from 'undici';
import { BmallCliError } from './errors.js';
import { makeRequestId } from './output.js';
import { isIamBundle, type TokenBundle } from '../auth/token-bundle.js';

export interface NormalizedResponse<T = unknown> {
  ok: boolean;
  data?: T;
  message?: string;
  code?: string | number;
  raw: unknown;
}

export interface RequestAuthOptions {
  appId?: string;
  injectAuthToBody?: boolean;
  injectAuthToQuery?: boolean;
  multipart?: boolean;
}

export interface BmallRequestOptions {
  method?: string;
  path: string;
  body?: unknown;
  query?: Record<string, string | number | boolean | undefined>;
  headers?: Record<string, string>;
  token?: TokenBundle;
  auth?: RequestAuthOptions;
  timeoutMs?: number;
}

export function normalizeResponse<T = unknown>(raw: unknown): NormalizedResponse<T> {
  if (typeof raw === 'string') {
    if (/^https?:\/\//.test(raw)) return { ok: true, data: raw as T, raw };
    return { ok: true, data: raw as T, raw };
  }
  if (!raw || typeof raw !== 'object') return { ok: true, data: raw as T, raw };
  const obj = raw as Record<string, unknown>;
  if ('ResultInt' in obj || 'ResultString' in obj) {
    const code = obj.ResultInt;
    const ok = code === 0 || code === '0' || code === 200 || code === '200';
    return {
      ok,
      code: code as string | number,
      data: (obj.data ?? obj.Data ?? obj.tokenId ?? obj) as T,
      message: String(obj.ResultString ?? obj.msg ?? obj.message ?? ''),
      raw
    };
  }
  if ('code' in obj) {
    const code = obj.code;
    const ok = code === 0 || code === '0' || code === 200 || code === '200' || code === 'SUCCESS';
    return {
      ok,
      code: code as string | number,
      data: (obj.data ?? obj.result ?? obj) as T,
      message: String(obj.msg ?? obj.message ?? ''),
      raw
    };
  }
  if ('downloadURL' in obj || 'fileUrl' in obj || 'url' in obj || 'taskId' in obj || 'taskCode' in obj || 'recordId' in obj) {
    return { ok: true, data: obj as T, raw };
  }
  return { ok: true, data: raw as T, raw };
}

export function buildAuthHeaders(bundle: TokenBundle, appId = 'mall_middle_ground'): Record<string, string> {
  const headers: Record<string, string> = {
    'x-token-id': bundle.tokenId,
    tokenId: bundle.tokenId,
    'x-app-id': appId
  };
  if (bundle.userId) headers['x-user-id'] = bundle.userId;
  if (bundle.groupId) {
    headers['x-group-id'] = bundle.groupId;
    headers.group_id = bundle.groupId;
  }
  if (isIamBundle(bundle)) headers['x-user-type'] = '1';
  return headers;
}

export function injectAuthBody<T>(body: T, bundle: TokenBundle, enabled = true): T {
  if (!enabled || !body || typeof body !== 'object' || Array.isArray(body)) return body;
  return {
    tokenId: bundle.tokenId,
    ...(bundle.groupId ? { groupId: bundle.groupId } : {}),
    ...(body as Record<string, unknown>)
  } as T;
}

type UndiciRequestBody = string | Uint8Array | Buffer | FormData;

export function buildRequest(baseUrl: string, opts: BmallRequestOptions): { url: URL; headers: Record<string, string>; body?: UndiciRequestBody } {
  const url = new URL(opts.path.replace(/^\//, ''), baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`);
  for (const [key, value] of Object.entries(opts.query ?? {})) {
    if (value !== undefined) url.searchParams.set(key, String(value));
  }
  const headers: Record<string, string> = { ...(opts.headers ?? {}) };
  const auth = opts.auth ?? {};
  if (opts.token) {
    Object.assign(headers, buildAuthHeaders(opts.token, auth.appId));
    if (auth.injectAuthToQuery) {
      url.searchParams.set('tokenId', opts.token.tokenId);
      if (opts.token.groupId) url.searchParams.set('groupId', opts.token.groupId);
    }
  }
  let body: UndiciRequestBody | undefined;
  if (opts.body !== undefined) {
    if (auth.multipart && opts.body instanceof FormData) {
      if (opts.token) {
        opts.body.set('tokenId', opts.token.tokenId);
        if (opts.token.groupId) opts.body.set('groupId', opts.token.groupId);
      }
      body = opts.body;
    } else {
      headers['content-type'] ??= 'application/json';
      body = JSON.stringify(opts.token ? injectAuthBody(opts.body, opts.token, auth.injectAuthToBody !== false) : opts.body);
    }
  }
  return { url, headers, body };
}

export class BmallHttpClient {
  constructor(private readonly baseUrl: string, private readonly token?: TokenBundle) {}

  async send<T = unknown>(opts: BmallRequestOptions): Promise<NormalizedResponse<T> & { requestId: string; durationMs: number }> {
    const started = Date.now();
    const requestId = makeRequestId();
    const built = buildRequest(this.baseUrl, { ...opts, token: opts.token ?? this.token });
    const method = (opts.method ?? (built.body ? 'POST' : 'GET')) as 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    const response = await request(built.url, {
      method: method as never,
      body: built.body as never,
      headers: { ...built.headers, 'x-request-id': requestId },
      bodyTimeout: opts.timeoutMs,
      headersTimeout: opts.timeoutMs
    });
    const contentType = response.headers['content-type'] ?? '';
    const rawText = await response.body.text();
    const raw = contentType.toString().includes('application/json') && rawText ? JSON.parse(rawText) : rawText;
    if (response.statusCode >= 400) {
      throw new BmallCliError(response.statusCode === 401 ? 'AUTH_EXPIRED' : 'HTTP_ERROR', `HTTP ${response.statusCode}`, {
        status: response.statusCode,
        details: raw
      });
    }
    const normalized = normalizeResponse<T>(raw);
    if (!normalized.ok) {
      throw new BmallCliError('SERVER_ERROR', normalized.message || 'Bmall API returned an error', { details: normalized.raw });
    }
    return { ...normalized, requestId, durationMs: Date.now() - started };
  }
}
