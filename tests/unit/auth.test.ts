import { createServer } from 'node:http';
import { mkdtemp, readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Command } from 'commander';
import { TokenBundleSchema } from '../../src/auth/token-bundle.js';
import { SessionStore } from '../../src/auth/session.js';
import { registerAuthCommands, registerWhoamiCommand, type GlobalOptions } from '../../src/auth/commands.js';
import { createBrowserLoginInfo } from '../../src/auth/login.js';
import { extractPermissionCodes } from '../../src/domains/permission/commands.js';
import { EncryptedJsonSecretStorage } from '../../src/core/storage.js';
import { ConfigManager } from '../../src/core/config.js';

beforeEach(() => {
  process.env.BMALL_SECRET_STORAGE = 'file';
});

afterEach(() => {
  delete process.env.BMALL_SECRET_STORAGE;
});

describe('auth token bundle', () => {
  it('parses token bundles with default permission arrays', () => {
    expect(TokenBundleSchema.parse({ tokenId: 'abc' })).toMatchObject({ tokenId: 'abc', permissions: [], menuData: [] });
  });

  it('normalizes numeric mobile values from browser localStorage', () => {
    expect(TokenBundleSchema.parse({ tokenId: 'abc', mobile: 13800000000 }).mobile).toBe('13800000000');
  });

  it('extracts permission codes from permissions and menuData', () => {
    const codes = extractPermissionCodes({
      tokenId: 'abc',
      permissions: [{ funCode: 'b2b:order:create' }],
      menuData: [{ children: [{ permissionCode: 'supply:order:booking' }] }]
    });
    expect(codes).toEqual(['b2b:order:create', 'supply:order:booking']);
  });
});

describe('auth import-token command', () => {
  it('saves imported token encrypted with --skip-verify', async () => {
    const home = await mkdtemp(join(tmpdir(), 'bmall-auth-'));
    const program = new Command();
    program.option('--config-home <path>').option('--profile <name>').option('--env <name>').option('--json').exitOverride();
    registerAuthCommands(program, () => program.opts<GlobalOptions>());
    program.configureOutput({ writeOut: () => undefined, writeErr: () => undefined });
    await program.parseAsync(['node', 'bmall', '--config-home', home, '--profile', 'unit', 'auth', 'import-token', '--token', 'test-token', '--skip-verify', '--json']);
    const saved = await new SessionStore(undefined, home).require('unit');
    expect(saved.tokenId).toBe('test-token');
    const raw = await readFile(join(home, 'credentials.json'), 'utf8');
    expect(raw).not.toContain('test-token');
    expect((await stat(join(home, 'credentials.json'))).mode & 0o077).toBe(0);
  });

  it('uses BMALL_TOKEN without writing credentials', async () => {
    const home = await mkdtemp(join(tmpdir(), 'bmall-auth-env-'));
    process.env.BMALL_TOKEN = 'env-token';
    try {
      const saved = await new SessionStore(undefined, home).require('unit');
      expect(saved.tokenId).toBe('env-token');
      await expect(readFile(join(home, 'credentials.json'), 'utf8')).rejects.toMatchObject({ code: 'ENOENT' });
    } finally {
      delete process.env.BMALL_TOKEN;
    }
  });

  it('uses BMALL_TOKEN_BUNDLE before saved credentials', async () => {
    const home = await mkdtemp(join(tmpdir(), 'bmall-auth-env-bundle-'));
    await new SessionStore(undefined, home).save('unit', { tokenId: 'saved-token', permissions: [], menuData: [] });
    process.env.BMALL_TOKEN_BUNDLE = JSON.stringify({ tokenId: 'env-bundle-token', groupId: 'G1' });
    try {
      const saved = await new SessionStore(undefined, home).require('unit');
      expect(saved).toMatchObject({ tokenId: 'env-bundle-token', groupId: 'G1' });
    } finally {
      delete process.env.BMALL_TOKEN_BUNDLE;
    }
  });

  it('builds browser login URL from resolved loginUrl instead of API baseUrl', async () => {
    const home = await mkdtemp(join(tmpdir(), 'bmall-auth-login-url-'));
    const manager = new ConfigManager(home);
    await manager.updateProfile('unit', { env: 'test', baseUrl: 'https://api.example.test/api', loginUrl: 'https://web.example.test/login' });
    const resolved = await manager.resolve({ profile: 'unit' });
    const info = createBrowserLoginInfo(resolved.loginUrl, 49200);
    expect(info.loginUrl).toBe('https://web.example.test/login');
    expect(resolved.baseUrl).toBe('https://api.example.test/api');
  });

  it('browser login snippet reads observed Bmall localStorage keys', () => {
    const info = createBrowserLoginInfo('https://bmall.semirapp.com/#/', 49152);
    expect(info.loginUrl).toBe('https://bmall.semirapp.com/#/');
    expect(info.consoleSnippet).toContain("read('tokenid')");
    expect(info.consoleSnippet).toContain("read('common_login')");
    expect(info.consoleSnippet).toContain("read('bmallv2_userInfo')");
    expect(info.consoleSnippet).toContain("read('bmallv2_menuData')");
  });

  it('renews token through manage/app/token/renewal and saves returned bundle', async () => {
    const home = await mkdtemp(join(tmpdir(), 'bmall-auth-renew-'));
    await new SessionStore(undefined, home).save('unit', { tokenId: 'old-token', permissions: [], menuData: [] });
    const requests: Array<{ url: string; body: unknown }> = [];
    const server = createServer((req, res) => {
      const chunks: Buffer[] = [];
      req.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
      req.on('end', () => {
        requests.push({ url: req.url ?? '', body: JSON.parse(Buffer.concat(chunks).toString('utf8')) });
        res.writeHead(200, { 'content-type': 'application/json' }).end(JSON.stringify({ code: 200, data: { tokenId: 'new-token', groupId: 'G1' } }));
      });
    });
    await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
    const baseUrl = `http://127.0.0.1:${(server.address() as { port: number }).port}/api`;
    await new ConfigManager(home).updateProfile('unit', { baseUrl, loginUrl: 'http://127.0.0.1:3000/' });
    try {
      const program = new Command();
      program.option('--config-home <path>').option('--profile <name>').option('--env <name>').option('--json').exitOverride();
      registerAuthCommands(program, () => program.opts<GlobalOptions>());
      program.configureOutput({ writeOut: () => undefined, writeErr: () => undefined });
      await program.parseAsync(['node', 'bmall', '--config-home', home, '--profile', 'unit', 'auth', 'renew', '--json']);
      expect(requests[0].url).toContain('/api/manage/app/token/renewal');
      expect(requests[0].body).toMatchObject({ tokenId: 'old-token' });
      await expect(new SessionStore(undefined, home).require('unit')).resolves.toMatchObject({ tokenId: 'new-token', groupId: 'G1' });
    } finally {
      server.close();
    }
  });

  it('calls menu list with roleCode from token bundle', async () => {
    const home = await mkdtemp(join(tmpdir(), 'bmall-auth-menu-'));
    await new SessionStore(undefined, home).save('unit', { tokenId: 'unit-token', roleCode: 'admin', permissions: [], menuData: [] });
    const requests: Array<{ url: string; body: unknown }> = [];
    const server = createServer((req, res) => {
      const chunks: Buffer[] = [];
      req.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
      req.on('end', () => {
        requests.push({ url: req.url ?? '', body: JSON.parse(Buffer.concat(chunks).toString('utf8')) });
        if (req.url?.includes('/Common/GetUserInfo')) {
          res.writeHead(200, { 'content-type': 'application/json' }).end(JSON.stringify({ ResultInt: 0, userData: { userName: 'Unit' } }));
          return;
        }
        res.writeHead(200, { 'content-type': 'application/json' }).end(JSON.stringify({ code: 200, data: [] }));
      });
    });
    await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
    const baseUrl = `http://127.0.0.1:${(server.address() as { port: number }).port}/api`;
    await new ConfigManager(home).updateProfile('unit', { baseUrl, loginUrl: 'http://127.0.0.1:3000/' });
    try {
      const program = new Command();
      program.option('--config-home <path>').option('--profile <name>').option('--env <name>').option('--json').exitOverride();
      registerWhoamiCommand(program, () => program.opts<GlobalOptions>());
      program.configureOutput({ writeOut: () => undefined, writeErr: () => undefined });
      await program.parseAsync(['node', 'bmall', '--config-home', home, '--profile', 'unit', 'whoami', '--json']);
      expect(requests.find((request) => request.url.includes('/menu/list'))?.body).toMatchObject({ roleCode: 'admin' });
    } finally {
      server.close();
    }
  });

  it('adds menu list diagnostics to whoami without failing identity output', async () => {
    const home = await mkdtemp(join(tmpdir(), 'bmall-auth-whoami-'));
    await new SessionStore(undefined, home).save('unit', { tokenId: 'unit-token', permissions: [], menuData: [] });
    const outputs: unknown[] = [];
    const server = createServer((req, res) => {
      const text = String(req.url).includes('GetUserInfo')
        ? JSON.stringify({ code: 200, data: { userName: 'tester' } })
        : JSON.stringify({ ResultInt: 1, ResultString: 'menu unavailable' });
      res.writeHead(200, { 'content-type': 'application/json' }).end(text);
    });
    await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
    const baseUrl = `http://127.0.0.1:${(server.address() as { port: number }).port}/api`;
    await new ConfigManager(home).updateProfile('unit', { baseUrl, loginUrl: 'http://127.0.0.1:3000/' });
    try {
      const program = new Command();
      program.option('--config-home <path>').option('--profile <name>').option('--env <name>').option('--json').exitOverride();
      registerWhoamiCommand(program, () => program.opts<GlobalOptions>());
      vi.spyOn(process.stdout, 'write').mockImplementation((chunk: string | Uint8Array) => {
        outputs.push(JSON.parse(String(chunk)));
        return true;
      });
      await program.parseAsync(['node', 'bmall', '--config-home', home, '--profile', 'unit', 'whoami', '--json']);
      const envelope = outputs[0] as { data: { serverUser: unknown; menuListWarning?: string } };
      expect(envelope.data.serverUser).toMatchObject({ userName: 'tester' });
      expect(envelope.data.menuListWarning).toContain('menu unavailable');
    } finally {
      vi.restoreAllMocks();
      server.close();
    }
  });

  it('encrypts fallback credential JSON at rest', async () => {
    const home = await mkdtemp(join(tmpdir(), 'bmall-auth-fallback-'));
    const storage = new EncryptedJsonSecretStorage({ configHome: home });
    await storage.set('unit', { tokenId: 'fallback-secret' });
    const raw = await readFile(join(home, 'credentials.json'), 'utf8');
    expect(raw).not.toContain('fallback-secret');
    await expect(storage.get('unit')).resolves.toMatchObject({ tokenId: 'fallback-secret' });
  });
});
