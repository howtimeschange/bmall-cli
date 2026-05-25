import { createServer } from 'node:http';
import { createHash } from 'node:crypto';
import { mkdtemp, readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Command } from 'commander';
import { TokenBundleSchema } from '../../src/auth/token-bundle.js';
import { SessionStore } from '../../src/auth/session.js';
import { registerAuthCommands, registerWhoamiCommand, type GlobalOptions } from '../../src/auth/commands.js';
import { createBrowserLoginInfo, loginWithPassword } from '../../src/auth/login.js';
import { readTokenBundleFromCdp } from '../../src/auth/cdp-login.js';
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

function decodeClientFrame(frame: Buffer): string {
  let offset = 2;
  let length = frame[1] & 0x7f;
  if (length === 126) {
    length = frame.readUInt16BE(offset);
    offset += 2;
  }
  const mask = frame.subarray(offset, offset + 4);
  offset += 4;
  const payload = frame.subarray(offset, offset + length);
  return Buffer.from(payload.map((byte, index) => byte ^ mask[index % 4])).toString('utf8');
}

function encodeServerFrame(text: string): Buffer {
  const payload = Buffer.from(text);
  if (payload.length >= 126) {
    const header = Buffer.alloc(4);
    header[0] = 0x81;
    header[1] = 126;
    header.writeUInt16BE(payload.length, 2);
    return Buffer.concat([header, payload]);
  }
  return Buffer.concat([Buffer.from([0x81, payload.length]), payload]);
}

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

  it('reads a browser token bundle from an attached CDP Bmall tab', async () => {
    let evaluateCount = 0;
    const server = createServer((req, res) => {
      if (req.url === '/json/list') {
        const port = (server.address() as { port: number }).port;
        res.writeHead(200, { 'content-type': 'application/json' }).end(JSON.stringify([
          { type: 'page', url: 'https://bmall.semirapp.com/#/index', webSocketDebuggerUrl: `ws://127.0.0.1:${port}/devtools/page/1` }
        ]));
        return;
      }
      if (req.url?.startsWith('/json/new')) {
        const port = (server.address() as { port: number }).port;
        res.writeHead(200, { 'content-type': 'application/json' }).end(JSON.stringify({
          type: 'page',
          url: 'https://bmall.semirapp.com/',
          webSocketDebuggerUrl: `ws://127.0.0.1:${port}/devtools/page/2`
        }));
        return;
      }
      res.writeHead(404).end();
    });
    server.on('upgrade', (req, socket) => {
      const key = req.headers['sec-websocket-key'];
      if (typeof key !== 'string') {
        socket.destroy();
        return;
      }
      const accept = createHash('sha1').update(`${key}258EAFA5-E914-47DA-95CA-C5AB0DC85B11`).digest('base64');
      socket.write([
        'HTTP/1.1 101 Switching Protocols',
        'Upgrade: websocket',
        'Connection: Upgrade',
        `Sec-WebSocket-Accept: ${accept}`,
        '',
        ''
      ].join('\r\n'));
      socket.on('data', (chunk) => {
        const request = JSON.parse(decodeClientFrame(chunk));
        evaluateCount += 1;
        const response = {
          id: request.id,
          result: {
            result: {
              type: evaluateCount === 1 ? 'undefined' : 'object',
              value: evaluateCount === 1 ? undefined : {
                tokenId: 'cdp-token',
                groupId: 'G1',
                groupName: '森马',
                mobile: 13800000000,
                permissions: [],
                menuData: []
              }
            }
          }
        };
        socket.write(encodeServerFrame(JSON.stringify(response)));
      });
    });
    await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
    try {
      const port = (server.address() as { port: number }).port;
      const result = await readTokenBundleFromCdp({ port, loginUrl: 'https://bmall.semirapp.com/' });
      expect(result.bundle).toMatchObject({ tokenId: 'cdp-token', groupId: 'G1', mobile: '13800000000' });
      expect(result.pageUrl).toContain('bmall.semirapp.com');
      expect(evaluateCount).toBe(2);
    } finally {
      server.close();
    }
  });

  it('requires an explicit account system for account/password login', async () => {
    const home = await mkdtemp(join(tmpdir(), 'bmall-auth-account-type-'));
    const program = new Command();
    program.option('--config-home <path>').option('--profile <name>').option('--env <name>').option('--json').exitOverride();
    registerAuthCommands(program, () => program.opts<GlobalOptions>());
    program.configureOutput({ writeOut: () => undefined, writeErr: () => undefined });

    await expect(
      program.parseAsync([
        'node',
        'bmall',
        '--config-home',
        home,
        '--profile',
        'unit',
        '--json',
        'auth',
        'login',
        '--account',
        '13800000000',
        '--password',
        'secret',
        '--skip-verify'
      ])
    ).rejects.toThrow('原订货商城账号');
  });

  it('logs in with the old Bmall account/password endpoint when account type is bmall', async () => {
    const requests: Array<{ url: string; body: Record<string, unknown> }> = [];
    const server = createServer((req, res) => {
      const chunks: Buffer[] = [];
      req.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
      req.on('end', () => {
        requests.push({ url: req.url ?? '', body: JSON.parse(Buffer.concat(chunks).toString('utf8')) });
        res.writeHead(200, { 'content-type': 'application/json' }).end(JSON.stringify({
          ResultInt: 0,
          DataLine: { tokenId: 'bmall-token', groupId: 'G1', userName: '旧商城用户' }
        }));
      });
    });
    await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
    try {
      const baseUrl = `http://127.0.0.1:${(server.address() as { port: number }).port}/api`;
      const bundle = await loginWithPassword(baseUrl, '13800000000', 'secret', 'bmall');
      expect(requests[0].url).toContain('/api/manage/app/Common/Login');
      expect(requests[0].body).toMatchObject({
        mobile: '13800000000',
        loginWord: '5ebe2294ecd0e0f08eab7690d2a6ee69',
        loginType: 'b2bmall'
      });
      expect(requests[0].body).not.toHaveProperty('password');
      expect(bundle).toMatchObject({ tokenId: 'bmall-token', groupId: 'G1', userName: '旧商城用户' });
    } finally {
      server.close();
    }
  });

  it('logs in with the IAM mini endpoint and saves IAM-shaped token bundles', async () => {
    const requests: Array<{ url: string; body: Record<string, unknown> }> = [];
    const server = createServer((req, res) => {
      const chunks: Buffer[] = [];
      req.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
      req.on('end', () => {
        requests.push({ url: req.url ?? '', body: JSON.parse(Buffer.concat(chunks).toString('utf8')) });
        res.writeHead(200, { 'content-type': 'application/json' }).end(JSON.stringify({
          code: '200',
          data: {
            tokenId: 'iam-token',
            userId: 'U1',
            userName: 'IAM用户',
            userMobile: 13800000000,
            roleCode: 'buyer',
            groupInfo: {
              groupId: 'G1',
              groupName: '森马',
              groupCode: 'C326'
            },
            roleFunctionList: [{ funCode: 'order:list' }],
            roleMenuList: [{ menuName: '订货' }]
          }
        }));
      });
    });
    await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
    try {
      const baseUrl = `http://127.0.0.1:${(server.address() as { port: number }).port}/api`;
      const bundle = await loginWithPassword(baseUrl, '13800000000', 'secret', 'iam', { groupId: 'G1' });
      expect(requests[0].url).toContain('/api/hr/iamUser/mini/login');
      expect(requests[0].body.mobile).toBe('13800000000');
      expect(requests[0].body.groupId).toBe('G1');
      expect(requests[0].body.password).not.toBe('secret');
      expect(String(requests[0].body.password)).toMatch(/^[A-Za-z0-9+/]+=*$/);
      expect(bundle).toMatchObject({
        tokenId: 'iam-token',
        userId: 'U1',
        userName: 'IAM用户',
        mobile: '13800000000',
        loginActiveTabName: 'iam',
        permissions: [{ funCode: 'order:list' }],
        menuData: [{ menuName: '订货' }]
      });
    } finally {
      server.close();
    }
  });

  it('reuses the saved profile groupId for IAM account/password login', async () => {
    const home = await mkdtemp(join(tmpdir(), 'bmall-auth-iam-group-'));
    await new SessionStore(undefined, home).save('unit', { tokenId: 'old-token', groupId: 'G-SAVED', permissions: [], menuData: [] });
    const requests: Array<{ url: string; body: Record<string, unknown> }> = [];
    const server = createServer((req, res) => {
      const chunks: Buffer[] = [];
      req.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
      req.on('end', () => {
        requests.push({ url: req.url ?? '', body: JSON.parse(Buffer.concat(chunks).toString('utf8')) });
        if (req.url?.includes('GetUserInfo') || req.url?.includes('menu/list')) {
          res.writeHead(200, { 'content-type': 'application/json' }).end(JSON.stringify({ ResultInt: 0, DataLine: {} }));
          return;
        }
        res.writeHead(200, { 'content-type': 'application/json' }).end(JSON.stringify({
          code: '200',
          data: {
            tokenId: 'iam-token',
            userId: 'U1',
            userName: 'IAM用户',
            userMobile: '13800000000',
            groupInfo: { groupId: 'G-SAVED', groupName: '森马', groupCode: 'C326' },
            roleFunctionList: []
          }
        }));
      });
    });
    await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
    await new ConfigManager(home).updateProfile('unit', { baseUrl: `http://127.0.0.1:${(server.address() as { port: number }).port}/api`, loginUrl: 'http://127.0.0.1:3000/' });
    try {
      const program = new Command();
      program.option('--config-home <path>').option('--profile <name>').option('--env <name>').option('--json').exitOverride();
      registerAuthCommands(program, () => program.opts<GlobalOptions>());
      program.configureOutput({ writeOut: () => undefined, writeErr: () => undefined });
      await program.parseAsync([
        'node',
        'bmall',
        '--config-home',
        home,
        '--profile',
        'unit',
        '--json',
        'auth',
        'login',
        '--account-type',
        'iam',
        '--account',
        '13800000000',
        '--password',
        'secret'
      ]);
      expect(requests.find((request) => request.url.includes('/hr/iamUser/mini/login'))?.body.groupId).toBe('G-SAVED');
      await expect(new SessionStore(undefined, home).require('unit')).resolves.toMatchObject({ tokenId: 'iam-token', groupId: 'G-SAVED', loginActiveTabName: 'iam' });
    } finally {
      server.close();
    }
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
