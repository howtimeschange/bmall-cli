import { SecretStorageChain, type SecretStorage } from '../core/storage.js';
import { TokenBundleSchema, toTokenBundle, type TokenBundle } from './token-bundle.js';
import { BmallCliError } from '../core/errors.js';

export class SessionStore {
  private readonly storage: SecretStorage;

  constructor(storage?: SecretStorage, configHome?: string) {
    this.storage = storage ?? new SecretStorageChain({ configHome });
  }

  async get(profile: string): Promise<TokenBundle | undefined> {
    const envBundle = readEnvTokenBundle();
    if (envBundle) return envBundle;
    const raw = await this.storage.get(profile);
    if (!raw) return undefined;
    return TokenBundleSchema.parse(raw);
  }

  async require(profile: string): Promise<TokenBundle> {
    const bundle = await this.get(profile);
    if (!bundle) {
      throw new BmallCliError('AUTH_REQUIRED', `No token bundle saved for profile ${profile}`, {
        recover: 'Run `bmall auth login` or `bmall auth import-token`.'
      });
    }
    return bundle;
  }

  async save(profile: string, bundle: TokenBundle): Promise<void> {
    await this.storage.set(profile, TokenBundleSchema.parse(bundle));
  }

  async logout(profile: string): Promise<void> {
    await this.storage.delete(profile);
  }
}

function readEnvTokenBundle(): TokenBundle | undefined {
  if (process.env.BMALL_TOKEN_BUNDLE?.trim()) {
    try {
      return toTokenBundle(JSON.parse(process.env.BMALL_TOKEN_BUNDLE));
    } catch (error) {
      throw new BmallCliError('INPUT_ERROR', 'Invalid BMALL_TOKEN_BUNDLE JSON.', { details: error });
    }
  }
  if (process.env.BMALL_TOKEN?.trim()) return toTokenBundle(process.env.BMALL_TOKEN.trim());
  return undefined;
}
