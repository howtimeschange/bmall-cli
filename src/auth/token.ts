import { readFile } from 'node:fs/promises';
import { TokenBundleSchema, type TokenBundle } from './token-bundle.js';
import { BmallCliError } from '../core/errors.js';

export interface ImportTokenOptions {
  token?: string;
  bundle?: string;
  fromFile?: string;
}

export async function readTokenImport(opts: ImportTokenOptions): Promise<TokenBundle> {
  const provided = [opts.token, opts.bundle, opts.fromFile].filter(Boolean).length;
  if (provided !== 1) {
    throw new BmallCliError('INPUT_ERROR', 'Provide exactly one of --token, --bundle, or --from-file.');
  }
  if (opts.token) return TokenBundleSchema.parse({ tokenId: opts.token });
  if (opts.bundle) return parseBundleText(opts.bundle);
  if (opts.fromFile) {
    const raw = (await readFile(opts.fromFile, 'utf8')).trim();
    if (!raw) throw new BmallCliError('INPUT_ERROR', `Token file is empty: ${opts.fromFile}`);
    return raw.startsWith('{') ? parseBundleText(raw) : TokenBundleSchema.parse({ tokenId: raw });
  }
  throw new BmallCliError('INPUT_ERROR', 'Missing token input.');
}

function parseBundleText(raw: string): TokenBundle {
  try {
    return TokenBundleSchema.parse(JSON.parse(raw));
  } catch (error) {
    throw new BmallCliError('INPUT_ERROR', 'Invalid token bundle JSON.', { details: error });
  }
}
