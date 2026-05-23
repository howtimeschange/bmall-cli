import { mkdir, readFile, rename, stat, unlink, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { homedir } from 'node:os';
import { createCipheriv, createDecipheriv, createHash, randomBytes } from 'node:crypto';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { BmallCliError } from './errors.js';

const execFileAsync = promisify(execFile);
const KEYCHAIN_SERVICE = 'bmall-cli';
const FALLBACK_FORMAT = 'bmall-cli-secret-v1';

export interface FileStoreOptions {
  configHome?: string;
}

export function getConfigHome(explicit?: string): string {
  return explicit ?? process.env.BMALL_CONFIG_HOME ?? join(homedir(), '.bmall-cli');
}

async function ensureParent(file: string): Promise<void> {
  await mkdir(dirname(file), { recursive: true, mode: 0o700 });
}

async function writeJsonFile(file: string, value: unknown, mode = 0o600): Promise<void> {
  await ensureParent(file);
  const tmp = `${file}.${process.pid}.${Date.now()}.tmp`;
  await writeFile(tmp, `${JSON.stringify(value, null, 2)}\n`, { mode });
  await rename(tmp, file);
  await chmodIfPossible(file, mode);
}

async function chmodIfPossible(file: string, mode: number): Promise<void> {
  const { chmod } = await import('node:fs/promises');
  await chmod(file, mode);
}

async function readJsonFile<T>(file: string, fallback: T): Promise<T> {
  try {
    const raw = await readFile(file, 'utf8');
    return JSON.parse(raw) as T;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return fallback;
    throw new BmallCliError('STORAGE_ERROR', `Failed to read ${file}`, { details: error });
  }
}

export interface SecretStorage {
  get(profile: string): Promise<unknown | undefined>;
  set(profile: string, value: unknown): Promise<void>;
  delete(profile: string): Promise<void>;
}

export class EncryptedJsonSecretStorage implements SecretStorage {
  readonly file: string;
  private readonly key: Buffer;

  constructor(opts: FileStoreOptions = {}) {
    const configHome = getConfigHome(opts.configHome);
    this.file = join(configHome, 'credentials.json');
    this.key = createHash('sha256').update(`${configHome}:${homedir()}:${process.platform}`).digest();
  }

  async get(profile: string): Promise<unknown | undefined> {
    await this.assertMode();
    const data = await readJsonFile<Record<string, EncryptedSecretEntry>>(this.file, {});
    const entry = data[profile];
    if (!entry) return undefined;
    if (isEncryptedSecretEntry(entry)) return this.decrypt(entry);
    await this.set(profile, entry);
    return entry;
  }

  async set(profile: string, value: unknown): Promise<void> {
    const data = await readJsonFile<Record<string, EncryptedSecretEntry>>(this.file, {});
    data[profile] = this.encrypt(value);
    await writeJsonFile(this.file, data, 0o600);
  }

  async delete(profile: string): Promise<void> {
    const data = await readJsonFile<Record<string, unknown>>(this.file, {});
    delete data[profile];
    await writeJsonFile(this.file, data, 0o600);
  }

  private encrypt(value: unknown): EncryptedSecretEntry {
    const iv = randomBytes(12);
    const cipher = createCipheriv('aes-256-gcm', this.key, iv);
    const plaintext = Buffer.from(JSON.stringify(value), 'utf8');
    const ciphertext = Buffer.concat([cipher.update(plaintext), cipher.final()]);
    return {
      format: FALLBACK_FORMAT,
      iv: iv.toString('base64'),
      tag: cipher.getAuthTag().toString('base64'),
      value: ciphertext.toString('base64')
    };
  }

  private decrypt(entry: EncryptedSecretEntry | unknown): unknown {
    if (!isEncryptedSecretEntry(entry)) {
      throw new BmallCliError('STORAGE_ERROR', 'Unsupported credential storage format.', {
        recover: 'Re-import the token with `bmall auth import-token`.'
      });
    }
    try {
      const decipher = createDecipheriv('aes-256-gcm', this.key, Buffer.from(entry.iv, 'base64'));
      decipher.setAuthTag(Buffer.from(entry.tag, 'base64'));
      const plaintext = Buffer.concat([decipher.update(Buffer.from(entry.value, 'base64')), decipher.final()]);
      return JSON.parse(plaintext.toString('utf8'));
    } catch (error) {
      throw new BmallCliError('STORAGE_ERROR', 'Failed to decrypt saved credentials.', { details: error });
    }
  }

  private async assertMode(): Promise<void> {
    try {
      const info = await stat(this.file);
      if ((info.mode & 0o077) !== 0) await chmodIfPossible(this.file, 0o600);
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error;
    }
  }
}

export class MacOSKeychainSecretStorage implements SecretStorage {
  async get(profile: string): Promise<unknown | undefined> {
    try {
      const { stdout } = await execFileAsync('security', ['find-generic-password', '-s', KEYCHAIN_SERVICE, '-a', profile, '-w'], { encoding: 'utf8' });
      return JSON.parse(decodeKeychainPassword(stdout.trim()));
    } catch (error) {
      if (isSecurityMissingPassword(error)) return undefined;
      throw new BmallCliError('STORAGE_ERROR', 'Failed to read macOS Keychain credentials.', { details: error });
    }
  }

  async set(profile: string, value: unknown): Promise<void> {
    await execFileAsync('security', ['add-generic-password', '-U', '-s', KEYCHAIN_SERVICE, '-a', profile, '-w', JSON.stringify(value)]);
  }

  async delete(profile: string): Promise<void> {
    try {
      await execFileAsync('security', ['delete-generic-password', '-s', KEYCHAIN_SERVICE, '-a', profile]);
    } catch (error) {
      if (!isSecurityMissingPassword(error)) {
        throw new BmallCliError('STORAGE_ERROR', 'Failed to delete macOS Keychain credentials.', { details: error });
      }
    }
  }
}

export class SecretStorageChain implements SecretStorage {
  private readonly primary: SecretStorage | undefined;
  private readonly fallback: SecretStorage;

  constructor(opts: FileStoreOptions = {}) {
    this.primary = process.platform === 'darwin' && process.env.BMALL_SECRET_STORAGE !== 'file' ? new MacOSKeychainSecretStorage() : undefined;
    this.fallback = new EncryptedJsonSecretStorage(opts);
  }

  async get(profile: string): Promise<unknown | undefined> {
    if (this.primary) {
      const value = await this.tryPrimary('get', profile);
      if (value !== undefined) return value;
    }
    return this.fallback.get(profile);
  }

  async set(profile: string, value: unknown): Promise<void> {
    if (this.primary && (await this.tryPrimary('set', profile, value)) !== undefined) return;
    await this.fallback.set(profile, value);
  }

  async delete(profile: string): Promise<void> {
    if (this.primary) await this.tryPrimary('delete', profile);
    await this.fallback.delete(profile);
  }

  private async tryPrimary(method: 'get', profile: string): Promise<unknown | undefined>;
  private async tryPrimary(method: 'set', profile: string, value: unknown): Promise<true | undefined>;
  private async tryPrimary(method: 'delete', profile: string): Promise<true | undefined>;
  private async tryPrimary(method: 'get' | 'set' | 'delete', profile: string, value?: unknown): Promise<unknown | true | undefined> {
    try {
      if (!this.primary) return undefined;
      if (method === 'get') return await this.primary.get(profile);
      if (method === 'set') {
        await this.primary.set(profile, value);
        return true;
      }
      await this.primary.delete(profile);
      return true;
    } catch {
      return undefined;
    }
  }
}

export class JsonSecretStorage extends EncryptedJsonSecretStorage {}

interface EncryptedSecretEntry {
  format: typeof FALLBACK_FORMAT;
  iv: string;
  tag: string;
  value: string;
}

function isEncryptedSecretEntry(value: unknown): value is EncryptedSecretEntry {
  if (!value || typeof value !== 'object') return false;
  const entry = value as Record<string, unknown>;
  return entry.format === FALLBACK_FORMAT && typeof entry.iv === 'string' && typeof entry.tag === 'string' && typeof entry.value === 'string';
}

function isSecurityMissingPassword(error: unknown): boolean {
  const err = error as { code?: number; stderr?: string; message?: string };
  const text = `${err.stderr ?? ''} ${err.message ?? ''}`;
  return err.code === 44 || text.includes('could not be found') || text.includes('The specified item could not be found');
}

export function decodeKeychainPassword(value: string): string {
  const trimmed = value.trim();
  if (/^[0-9a-f]+$/i.test(trimmed) && trimmed.length % 2 === 0) {
    const decoded = Buffer.from(trimmed, 'hex').toString('utf8');
    if (decoded.startsWith('{') || decoded.startsWith('[')) return decoded;
  }
  return trimmed;
}

export class JsonConfigStorage<T extends object> {
  readonly file: string;

  constructor(opts: FileStoreOptions = {}) {
    this.file = join(getConfigHome(opts.configHome), 'config.json');
  }

  async read(defaults: T): Promise<T> {
    return readJsonFile<T>(this.file, defaults);
  }

  async write(value: T): Promise<void> {
    await writeJsonFile(this.file, value, 0o600);
  }

  async remove(): Promise<void> {
    try {
      await unlink(this.file);
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error;
    }
  }
}
