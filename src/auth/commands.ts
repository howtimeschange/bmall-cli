import { Command } from 'commander';
import { createInterface } from 'node:readline/promises';
import { ConfigManager } from '../core/config.js';
import { BmallHttpClient } from '../core/http.js';
import { printResult, success } from '../core/output.js';
import { SessionStore } from './session.js';
import { readTokenImport } from './token.js';
import { createBrowserLoginInfo, loginWithPassword, openBrowser, parseAccountLoginType, runBrowserLoginReceiver } from './login.js';
import { readTokenBundleFromCdp } from './cdp-login.js';
import { BmallCliError } from '../core/errors.js';
import { TokenBundleSchema, type TokenBundle } from './token-bundle.js';

export interface GlobalOptions {
  profile?: string;
  env?: string;
  json?: boolean;
  configHome?: string;
}

export async function whoami(baseUrl: string, bundle: TokenBundle): Promise<unknown> {
  const client = new BmallHttpClient(baseUrl, bundle);
  const response = await client.send({
    method: 'POST',
    path: 'manage/app/Common/GetUserInfo',
    body: {},
    auth: { injectAuthToBody: true }
  });
  return response.data;
}

export async function menuList(baseUrl: string, bundle: TokenBundle): Promise<unknown> {
  const client = new BmallHttpClient(baseUrl, bundle);
  const response = await client.send({
    method: 'POST',
    path: 'manage/app/menu/list',
    body: {
      roleCode: bundle.roleCode
    },
    auth: { injectAuthToBody: true }
  });
  return response.data;
}

export async function renewToken(baseUrl: string, bundle: TokenBundle): Promise<TokenBundle> {
  const client = new BmallHttpClient(baseUrl, bundle);
  try {
    const response = await client.send({
      method: 'POST',
      path: 'manage/app/token/renewal',
      body: {},
      auth: { injectAuthToBody: true }
    });
    return TokenBundleSchema.parse({ ...bundle, ...(typeof response.data === 'object' && response.data ? response.data : {}) });
  } catch (error) {
    if (error instanceof BmallCliError) {
      throw new BmallCliError(error.code, `Token renewal failed: ${error.message}`, {
        status: error.status,
        details: error.details,
        recover: error.recover ?? 'Check whether the current token is still valid, then run `bmall auth login` if renewal is rejected.'
      });
    }
    throw error;
  }
}

export function registerAuthCommands(program: Command, getGlobals: () => GlobalOptions): void {
  const auth = program.command('auth').description('Authentication commands');

  auth
    .command('import-token')
    .description('Import a Bmall token or token bundle')
    .option('--token <token>', 'tokenId string')
    .option('--bundle <json>', 'token bundle JSON string')
    .option('--from-file <path>', 'read token or token bundle from file')
    .option('--skip-verify', 'save without calling whoami')
    .action(async (opts) => {
      const globals = getGlobals();
      const config = new ConfigManager(globals.configHome);
      const resolved = await config.resolve(globals);
      const store = new SessionStore(undefined, globals.configHome);
      const bundle = await readTokenImport({ token: opts.token, bundle: opts.bundle, fromFile: opts.fromFile });
      let verified: unknown = undefined;
      if (!opts.skipVerify) verified = await whoami(resolved.baseUrl, bundle);
      await store.save(resolved.profile, bundle);
      printResult(success(resolved, { profile: resolved.profile, env: resolved.env, verified: Boolean(verified), bundle: publicBundle(bundle) }), globals.json);
    });

  auth
    .command('login')
    .description('Login with browser-assisted loopback flow or account/password')
    .option('--browser', 'start browser-assisted login')
    .option('--no-open', 'do not open system browser')
    .option('--cdp', 'read token bundle from an attached Chrome CDP browser')
    .option('--cdp-host <host>', 'Chrome CDP host', '127.0.0.1')
    .option('--cdp-port <port>', 'Chrome CDP port', '9222')
    .option('--cdp-launch', 'launch Chrome with CDP enabled before reading token')
    .option('--cdp-user-data-dir <path>', 'Chrome user data dir to use when launching CDP Chrome')
    .option('--chrome-path <path>', 'Chrome executable path for --cdp-launch')
    .option('--account <account>', 'account/mobile for password login')
    .option('--password <password>', 'password for password login')
    .option('--account-type <type>', 'password login account system: bmall for original ordering-mall account, iam for IAM user-center account')
    .option('--brand <nameOrCode>', 'brand name or brand code for IAM password login, for example 森马 or C326')
    .option('--skip-verify', 'save without calling whoami')
    .action(async (opts) => {
      const globals = getGlobals();
      const config = new ConfigManager(globals.configHome);
      const resolved = await config.resolve(globals);
      const store = new SessionStore(undefined, globals.configHome);
      let bundle: TokenBundle;
      let loginInfo: unknown;
      if (opts.cdp) {
        const cdp = await readTokenBundleFromCdp({
          host: opts.cdpHost,
          port: Number(opts.cdpPort),
          loginUrl: resolved.loginUrl,
          launch: Boolean(opts.cdpLaunch),
          userDataDir: opts.cdpUserDataDir,
          chromePath: opts.chromePath,
          configHome: globals.configHome
        });
        loginInfo = { cdp: true, pageUrl: cdp.pageUrl, launched: cdp.launched };
        bundle = cdp.bundle;
      } else if (opts.browser) {
        const port = 49152 + Math.floor(Math.random() * 10000);
        const info = createBrowserLoginInfo(resolved.loginUrl, port);
        loginInfo = {
          callbackUrl: info.callbackUrl,
          loginUrl: info.loginUrl,
          consoleSnippet: info.consoleSnippet,
          bookmarklet: info.bookmarklet
        };
        printResult(success(resolved, loginInfo), globals.json);
        if (opts.open !== false) openBrowser(info.loginUrl);
        bundle = await runBrowserLoginReceiver(info);
      } else {
        if (!opts.account || !opts.password) {
          throw new BmallCliError('INPUT_ERROR', 'Use --browser, --cdp, or provide --account and --password.');
        }
        const accountType = parseAccountLoginType(opts.accountType);
        const saved = await store.get(resolved.profile);
        const groupId = accountType === 'iam'
          ? await resolveIamLoginGroupId({ brand: opts.brand, saved, profileGroupId: resolved.profileConfig.groupId, json: globals.json })
          : undefined;
        bundle = await loginWithPassword(resolved.baseUrl, opts.account, opts.password, accountType, { groupId });
      }
      if (!opts.skipVerify) await whoami(resolved.baseUrl, bundle);
      await store.save(resolved.profile, bundle);
      printResult(success(resolved, { profile: resolved.profile, env: resolved.env, saved: true, loginInfo, bundle: publicBundle(bundle) }), globals.json);
    });

  auth
    .command('renew')
    .description('Renew the current token bundle')
    .action(async () => {
      const globals = getGlobals();
      const resolved = await new ConfigManager(globals.configHome).resolve(globals);
      const store = new SessionStore(undefined, globals.configHome);
      const current = await store.require(resolved.profile);
      const renewed = await renewToken(resolved.baseUrl, current);
      await store.save(resolved.profile, renewed);
      printResult(success(resolved, { profile: resolved.profile, renewed: true, bundle: publicBundle(renewed) }), globals.json);
    });

  auth
    .command('doctor')
    .description('Check local auth profile')
    .action(async () => {
      const globals = getGlobals();
      const resolved = await new ConfigManager(globals.configHome).resolve(globals);
      const bundle = await new SessionStore(undefined, globals.configHome).require(resolved.profile);
      let serverUser: unknown = undefined;
      try {
        serverUser = await whoami(resolved.baseUrl, bundle);
      } catch (error) {
        serverUser = { ok: false, error: error instanceof Error ? error.message : String(error) };
      }
      const menu = await readMenuDiagnostics(resolved.baseUrl, bundle);
      printResult(success(resolved, { hasToken: true, bundle: publicBundle(bundle), serverUser, ...menu }), globals.json);
    });

  auth
    .command('logout')
    .description('Delete saved credentials for the active profile')
    .action(async () => {
      const globals = getGlobals();
      const resolved = await new ConfigManager(globals.configHome).resolve(globals);
      await new SessionStore(undefined, globals.configHome).logout(resolved.profile);
      printResult(success(resolved, { loggedOut: true, profile: resolved.profile }), globals.json);
    });
}

async function resolveIamLoginGroupId(input: { brand?: string; saved?: TokenBundle; profileGroupId?: string; json?: boolean }): Promise<string | undefined> {
  const brand = input.brand?.trim();
  const candidates = knownBrandCandidates(input.saved, input.profileGroupId);
  if (!brand) {
    if (!input.json && process.stdin.isTTY && process.stdout.isTTY && candidates.length > 0) {
      return promptForBrand(candidates);
    }
    return input.saved?.groupId ?? input.profileGroupId;
  }
  const saved = input.saved;
  const matched = candidates.find((candidate) => [candidate.groupName, candidate.groupCode, candidate.groupId].some((value) => String(value ?? '').toLowerCase() === brand.toLowerCase()));
  if (matched) return matched.groupId;
  if (saved?.groupId && [saved.groupName, saved.groupCode, saved.groupId].some((value) => String(value ?? '').toLowerCase() === brand.toLowerCase())) {
    return saved.groupId;
  }
  if (/^[0-9a-f-]{24,}$/i.test(brand)) return brand;
  throw new BmallCliError('INPUT_ERROR', `未找到品牌“${brand}”对应的已保存上下文。请先用浏览器/CDP或原订货商城账号登录一次该品牌，或传入当前 profile 已知的品牌名称/编码。`, {
    recover: '例如当前 profile 已保存森马/C326 时，可使用 --brand 森马 或 --brand C326。'
  });
}

interface BrandCandidate {
  groupId: string;
  groupName?: string;
  groupCode?: string;
}

function knownBrandCandidates(saved?: TokenBundle, profileGroupId?: string): BrandCandidate[] {
  const candidates: BrandCandidate[] = [];
  if (saved?.groupId) candidates.push({ groupId: saved.groupId, groupName: saved.groupName, groupCode: saved.groupCode });
  if (profileGroupId && !candidates.some((candidate) => candidate.groupId === profileGroupId)) candidates.push({ groupId: profileGroupId });
  return candidates;
}

async function promptForBrand(candidates: BrandCandidate[]): Promise<string> {
  const lines = candidates.map((candidate, index) => {
    const name = candidate.groupName ?? '已保存品牌';
    const code = candidate.groupCode ? ` / ${candidate.groupCode}` : '';
    return `${index + 1}. ${name}${code}`;
  });
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  try {
    const answer = (await rl.question(`请选择 IAM 登录品牌：\n${lines.join('\n')}\n输入序号、品牌名称或品牌编码：`)).trim();
    const selected = candidates[Number(answer) - 1] ?? candidates.find((candidate) => [candidate.groupName, candidate.groupCode].some((value) => String(value ?? '').toLowerCase() === answer.toLowerCase()));
    if (!selected) {
      throw new BmallCliError('INPUT_ERROR', `未找到选择的品牌“${answer}”。请重新执行并输入列表中的序号、品牌名称或品牌编码。`);
    }
    return selected.groupId;
  } finally {
    rl.close();
  }
}

export function registerWhoamiCommand(program: Command, getGlobals: () => GlobalOptions): void {
  program.command('whoami').description('Show current Bmall identity').action(async () => {
    const globals = getGlobals();
    const resolved = await new ConfigManager(globals.configHome).resolve(globals);
    const bundle = await new SessionStore(undefined, globals.configHome).require(resolved.profile);
    const data = await whoami(resolved.baseUrl, bundle);
    const menu = await readMenuDiagnostics(resolved.baseUrl, bundle);
    printResult(success(resolved, { bundle: publicBundle(bundle), serverUser: data, ...menu }), globals.json);
  });
}

function publicBundle(bundle: TokenBundle): Omit<TokenBundle, 'tokenId'> & { tokenId: string } {
  const parsed = TokenBundleSchema.parse(bundle);
  return { ...parsed, tokenId: `${parsed.tokenId.slice(0, 4)}...${parsed.tokenId.slice(-4)}` };
}

async function readMenuDiagnostics(baseUrl: string, bundle: TokenBundle): Promise<{ menuList?: unknown; menuListWarning?: string }> {
  try {
    return { menuList: await menuList(baseUrl, bundle) };
  } catch (error) {
    return { menuListWarning: error instanceof Error ? error.message : String(error) };
  }
}
