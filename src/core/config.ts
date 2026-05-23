import { z } from 'zod';
import { JsonConfigStorage, getConfigHome } from './storage.js';
import { BmallCliError } from './errors.js';

export const BuiltinEnvSchema = z.enum(['prod', 'test', 'local']);
export type BuiltinEnv = z.infer<typeof BuiltinEnvSchema>;

export const DEFAULT_ENVS: Record<BuiltinEnv, { baseUrl: string; loginUrl: string }> = {
  prod: { baseUrl: 'https://bmall-api.semirapp.com/api', loginUrl: 'https://bmall.semirapp.com/' },
  test: { baseUrl: 'https://bmall-test-api.semirapp.com/api', loginUrl: 'https://bmall-test.semirapp.com/' },
  local: { baseUrl: 'http://127.0.0.1:8080', loginUrl: 'http://127.0.0.1:3000/' }
};

const ProfileSchema = z.object({
  name: z.string().min(1),
  env: z.string().default('prod'),
  baseUrl: z.string().url().optional(),
  loginUrl: z.string().url().optional(),
  companyId: z.string().optional(),
  companyName: z.string().optional(),
  groupId: z.string().optional()
});

const CliConfigSchema = z.object({
  activeProfile: z.string().default('default'),
  profiles: z.record(ProfileSchema).default({}),
  envs: z.record(z.object({ baseUrl: z.string().url(), loginUrl: z.string().url().optional() })).default({})
});

export type ProfileConfig = z.infer<typeof ProfileSchema>;
export type CliConfig = z.infer<typeof CliConfigSchema>;

export interface ResolveOptions {
  profile?: string;
  env?: string;
  configHome?: string;
}

export interface ResolvedConfig {
  configHome: string;
  profile: string;
  env: string;
  baseUrl: string;
  loginUrl: string;
  profileConfig: ProfileConfig;
  raw: CliConfig;
}

export function defaultConfig(): CliConfig {
  return { activeProfile: 'default', profiles: {}, envs: {} };
}

export class ConfigManager {
  readonly storage: JsonConfigStorage<CliConfig>;
  readonly configHome: string;

  constructor(configHome?: string) {
    this.configHome = getConfigHome(configHome);
    this.storage = new JsonConfigStorage<CliConfig>({ configHome: this.configHome });
  }

  async read(): Promise<CliConfig> {
    const parsed = CliConfigSchema.parse(await this.storage.read(defaultConfig()));
    if (!parsed.profiles.default) {
      parsed.profiles.default = { name: 'default', env: 'prod' };
    }
    return parsed;
  }

  async write(config: CliConfig): Promise<void> {
    await this.storage.write(CliConfigSchema.parse(config));
  }

  async resolve(opts: ResolveOptions = {}): Promise<ResolvedConfig> {
    const config = await this.read();
    const profileName = opts.profile ?? process.env.BMALL_PROFILE ?? config.activeProfile ?? 'default';
    const current = config.profiles[profileName] ?? { name: profileName, env: opts.env ?? 'prod' };
    const env = opts.env ?? process.env.BMALL_ENV ?? current.env ?? 'prod';
    const customEnv = config.envs[env];
    const builtinEnv = DEFAULT_ENVS[env as BuiltinEnv];
    const baseUrl = current.baseUrl ?? customEnv?.baseUrl ?? builtinEnv?.baseUrl;
    const loginUrl = current.loginUrl ?? customEnv?.loginUrl ?? builtinEnv?.loginUrl;
    if (!baseUrl) {
      throw new BmallCliError('CONFIG_ERROR', `Unknown Bmall env: ${env}`, {
        recover: 'Run `bmall profile set-env <env> --base-url <url>` or use prod/test/local.'
      });
    }
    if (!loginUrl) {
      throw new BmallCliError('CONFIG_ERROR', `Missing login URL for Bmall env: ${env}`, {
        recover: 'Run `bmall profile set-env <env> --base-url <api-url> --login-url <web-url>` or set profile.loginUrl.'
      });
    }
    return {
      configHome: this.configHome,
      profile: profileName,
      env,
      baseUrl,
      loginUrl,
      profileConfig: { ...current, name: profileName, env },
      raw: config
    };
  }

  async listProfiles(): Promise<ProfileConfig[]> {
    const config = await this.read();
    return Object.values(config.profiles);
  }

  async useProfile(profile: string): Promise<ProfileConfig> {
    const config = await this.read();
    config.profiles[profile] ??= { name: profile, env: 'prod' };
    config.activeProfile = profile;
    await this.write(config);
    return config.profiles[profile];
  }

  async setEnv(env: string, baseUrl: string, loginUrl?: string): Promise<void> {
    const config = await this.read();
    config.envs[env] = { baseUrl, ...(loginUrl ? { loginUrl } : {}) };
    await this.write(config);
  }

  async updateProfile(profile: string, patch: Partial<ProfileConfig>): Promise<ProfileConfig> {
    const config = await this.read();
    const next = { ...(config.profiles[profile] ?? { name: profile, env: 'prod' }), ...patch, name: profile };
    config.profiles[profile] = ProfileSchema.parse(next);
    await this.write(config);
    return config.profiles[profile];
  }
}
