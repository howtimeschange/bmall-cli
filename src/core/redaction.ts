const SENSITIVE_KEYS = new Set([
  'authorization',
  'password',
  'token',
  'tokenid',
  'tokenId',
  'x-token-id',
  'cookie',
  'set-cookie',
  'secret'
]);

export function redactValue(value: unknown): unknown {
  if (typeof value !== 'string') return value;
  if (value.length <= 8) return '***';
  return `${value.slice(0, 4)}...${value.slice(-4)}`;
}

export function redact<T>(input: T): T {
  if (Array.isArray(input)) return input.map((item) => redact(item)) as T;
  if (!input || typeof input !== 'object') return input;
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(input as Record<string, unknown>)) {
    out[key] = SENSITIVE_KEYS.has(key) || SENSITIVE_KEYS.has(key.toLowerCase()) ? redactValue(value) : redact(value);
  }
  return out as T;
}
