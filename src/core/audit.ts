import { appendFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { getConfigHome } from './storage.js';
import { redact } from './redaction.js';

export interface AuditRecord {
  timestamp?: string;
  profile?: string;
  env?: string;
  command: string;
  args?: unknown;
  access?: string;
  requestId?: string;
  result: 'ok' | 'error' | 'dry-run';
}

export async function writeAudit(record: AuditRecord, configHome?: string): Promise<void> {
  const dir = join(getConfigHome(configHome), 'audit');
  await mkdir(dir, { recursive: true, mode: 0o700 });
  const date = new Date().toISOString().slice(0, 10);
  await appendFile(join(dir, `${date}.jsonl`), `${JSON.stringify({ ...record, timestamp: record.timestamp ?? new Date().toISOString(), args: redact(record.args) })}\n`, {
    mode: 0o600
  });
}
