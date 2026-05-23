import { mkdtemp, readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { ConfigManager } from '../../src/core/config.js';
import { buildAuthHeaders, buildRequest, injectAuthBody, normalizeResponse } from '../../src/core/http.js';
import { redact } from '../../src/core/redaction.js';
import { decodeKeychainPassword, EncryptedJsonSecretStorage } from '../../src/core/storage.js';

beforeEach(() => {
  process.env.BMALL_SECRET_STORAGE = 'file';
});

afterEach(() => {
  delete process.env.BMALL_SECRET_STORAGE;
});

describe('core/http', () => {
  it('normalizes legacy and modern responses', () => {
    expect(normalizeResponse({ ResultInt: 0, data: { a: 1 } })).toMatchObject({ ok: true, data: { a: 1 } });
    expect(normalizeResponse({ ResultInt: 1, ResultString: '失败' })).toMatchObject({ ok: false, message: '失败' });
    expect(normalizeResponse({ code: '200', data: { a: 1 } })).toMatchObject({ ok: true, data: { a: 1 } });
    expect(normalizeResponse({ code: '500', msg: '失败' })).toMatchObject({ ok: false, message: '失败' });
  });

  it('injects Bmall auth headers and JSON body fields', () => {
    const token = { tokenId: 'test-token', userId: '10001', groupId: 'SEMIR', loginActiveTabName: 'iam' as const, permissions: [], menuData: [] };
    expect(buildAuthHeaders(token)).toMatchObject({
      'x-token-id': 'test-token',
      tokenId: 'test-token',
      'x-user-id': '10001',
      'x-group-id': 'SEMIR',
      group_id: 'SEMIR',
      'x-app-id': 'mall_middle_ground',
      'x-user-type': '1'
    });
    expect(injectAuthBody({ keyword: '卫衣' }, token)).toEqual({ tokenId: 'test-token', groupId: 'SEMIR', keyword: '卫衣' });
    const built = buildRequest('https://example.com/api', { path: 'product/search', body: { keyword: 'x' }, token });
    expect(built.headers).toMatchObject({ 'x-token-id': 'test-token', tokenId: 'test-token' });
    expect(JSON.parse(String(built.body))).toMatchObject({ tokenId: 'test-token', groupId: 'SEMIR', keyword: 'x' });
  });

  it('can disable auth body injection per endpoint', () => {
    const token = { tokenId: 'test-token', groupId: 'SEMIR', permissions: [], menuData: [] };
    const built = buildRequest('https://example.com/api', {
      path: 'plain',
      body: { keyword: 'x' },
      token,
      auth: { injectAuthToBody: false }
    });
    expect(JSON.parse(String(built.body))).toEqual({ keyword: 'x' });
  });
});

describe('core/storage and config', () => {
  it('stores fallback secrets encrypted in a 0600 JSON file', async () => {
    const home = await mkdtemp(join(tmpdir(), 'bmall-core-'));
    const storage = new EncryptedJsonSecretStorage({ configHome: home });
    await storage.set('local', { tokenId: 'secret-token' });
    const file = join(home, 'credentials.json');
    const raw = await readFile(file, 'utf8');
    expect(raw).not.toContain('secret-token');
    expect(await storage.get('local')).toMatchObject({ tokenId: 'secret-token' });
    expect((await stat(file)).mode & 0o077).toBe(0);
  });

  it('decodes hex-encoded macOS Keychain password output', () => {
    const json = '{"tokenId":"secret-token"}';
    expect(decodeKeychainPassword(Buffer.from(json, 'utf8').toString('hex'))).toBe(json);
    expect(decodeKeychainPassword(json)).toBe(json);
  });

  it('resolves profiles with CLI args overriding environment variables', async () => {
    const home = await mkdtemp(join(tmpdir(), 'bmall-config-'));
    const manager = new ConfigManager(home);
    await manager.useProfile('from-config');
    await manager.updateProfile('from-config', { env: 'test' });
    process.env.BMALL_PROFILE = 'from-env';
    try {
      expect((await manager.resolve({})).profile).toBe('from-env');
      const resolved = await manager.resolve({ profile: 'from-cli', env: 'local' });
      expect(resolved.profile).toBe('from-cli');
      expect(resolved.env).toBe('local');
      expect(resolved.baseUrl).toBe('http://127.0.0.1:8080');
      expect(resolved.loginUrl).toBe('http://127.0.0.1:3000/');
    } finally {
      delete process.env.BMALL_PROFILE;
    }
  });

  it('resolves login URLs separately from API base URLs', async () => {
    const home = await mkdtemp(join(tmpdir(), 'bmall-config-login-'));
    const manager = new ConfigManager(home);
    expect((await manager.resolve({ env: 'prod' })).loginUrl).toBe('https://bmall.semirapp.com/');
    expect((await manager.resolve({ env: 'test' })).loginUrl).toBe('https://bmall-test.semirapp.com/');
    await manager.setEnv('qa', 'https://qa-api.example.com/api', 'https://qa-web.example.com/');
    await manager.updateProfile('unit', { env: 'qa', loginUrl: 'https://profile-web.example.com/' });
    const resolved = await manager.resolve({ profile: 'unit' });
    expect(resolved.baseUrl).toBe('https://qa-api.example.com/api');
    expect(resolved.loginUrl).toBe('https://profile-web.example.com/');
  });

  it('redacts sensitive values recursively', () => {
    expect(redact({ tokenId: '1234567890abcdef', nested: { password: 'supersecret' } })).toEqual({
      tokenId: '1234...cdef',
      nested: { password: 'supe...cret' }
    });
  });
});
