import { createServer } from 'node:http';
import { mkdtemp } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Command } from 'commander';
import { ConfigManager } from '../../src/core/config.js';
import { SessionStore } from '../../src/auth/session.js';
import { registerCompanyCommands } from '../../src/domains/company/commands.js';
import type { GlobalOptions } from '../../src/auth/commands.js';

beforeEach(() => {
  process.env.BMALL_SECRET_STORAGE = 'file';
});

afterEach(() => {
  delete process.env.BMALL_SECRET_STORAGE;
  vi.restoreAllMocks();
});

function createProgram(configHome: string): { program: Command; outputs: unknown[] } {
  const program = new Command();
  const outputs: unknown[] = [];
  program.option('--config-home <path>').option('--profile <name>').option('--env <name>').option('--json').exitOverride();
  program.configureOutput({ writeOut: () => undefined, writeErr: () => undefined });
  registerCompanyCommands(program, () => program.opts<GlobalOptions>(), (payload) => outputs.push(payload));
  return { program, outputs };
}

describe('company brand and group switching', () => {
  it('lists login groups through the legacy Bmall brand endpoint', async () => {
    const home = await mkdtemp(join(tmpdir(), 'bmall-company-groups-'));
    await new ConfigManager(home).updateProfile('unit', { env: 'local', baseUrl: 'http://127.0.0.1:0/api', loginUrl: 'http://127.0.0.1:3000/' });
    await new SessionStore(undefined, home).save('unit', { tokenId: 'token-1', groupId: 'SEMIR', userId: 'U1' });
    const requests: Array<{ url: string; body: unknown }> = [];
    const server = createServer((req, res) => {
      const chunks: Buffer[] = [];
      req.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
      req.on('end', () => {
        requests.push({ url: req.url ?? '', body: JSON.parse(Buffer.concat(chunks).toString('utf8')) });
        res.writeHead(200, { 'content-type': 'application/json' }).end(JSON.stringify({
          ResultInt: 0,
          DataLine: [
            { sgId: 'SG1', groupId: 'G1', groupName: '森马', groupCode: 'SEMIR', isActive: 1 },
            { sgId: 'SG2', groupId: 'G2', groupName: 'PUMAKIDS', groupCode: 'PUMA', isActive: 0 }
          ],
          groupQty: 2
        }));
      });
    });
    await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
    const baseUrl = `http://127.0.0.1:${(server.address() as { port: number }).port}/api`;
    await new ConfigManager(home).updateProfile('unit', { baseUrl });
    const { program, outputs } = createProgram(home);

    try {
      await program.parseAsync(['node', 'bmall', '--config-home', home, '--profile', 'unit', '--json', 'company', 'groups']);
      expect(requests[0]).toMatchObject({
        url: '/api/manage/app/Common/LoginGroups',
        body: { tokenId: 'token-1', groupId: 'SEMIR' }
      });
      expect(outputs[0]).toMatchObject({
        ok: true,
        data: {
          count: 2,
          groups: [
            { sgId: 'SG1', groupId: 'G1', groupName: '森马', groupCode: 'SEMIR', isActive: 1 },
            { sgId: 'SG2', groupId: 'G2', groupName: 'PUMAKIDS', groupCode: 'PUMA', isActive: 0 }
          ]
        }
      });
    } finally {
      server.close();
    }
  });

  it('switches login group and persists the returned token bundle', async () => {
    const home = await mkdtemp(join(tmpdir(), 'bmall-company-switch-group-'));
    await new ConfigManager(home).updateProfile('unit', { env: 'local', loginUrl: 'http://127.0.0.1:3000/' });
    await new SessionStore(undefined, home).save('unit', {
      tokenId: 'old-token',
      groupId: 'SEMIR',
      groupName: '森马',
      userId: 'U1',
      userName: 'tester',
      permissions: [{ funCode: 'old' }],
      menuData: []
    });
    const requests: Array<{ url: string; body: unknown }> = [];
    const server = createServer((req, res) => {
      const chunks: Buffer[] = [];
      req.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
      req.on('end', () => {
        requests.push({ url: req.url ?? '', body: JSON.parse(Buffer.concat(chunks).toString('utf8')) });
        res.writeHead(200, { 'content-type': 'application/json' }).end(JSON.stringify({
          ResultInt: 0,
          ResultString: 'SUCCESS',
          tokenId: 'new-token',
          groupId: 'PUMA-G',
          groupCode: 'PUMA',
          groupName: 'PUMAKIDS',
          fid: 'U1',
          userCode: 'tester',
          funs: [{ funCode: 'pending:order:review' }],
          menus: [{ funCode: 'system:set1', funName: '配置' }]
        }));
      });
    });
    await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
    const baseUrl = `http://127.0.0.1:${(server.address() as { port: number }).port}/api`;
    await new ConfigManager(home).updateProfile('unit', { baseUrl });
    const { program, outputs } = createProgram(home);

    try {
      await program.parseAsync(['node', 'bmall', '--config-home', home, '--profile', 'unit', '--json', 'company', 'switch-group', '--sg-id', 'SG-PUMA']);
      expect(requests[0]).toMatchObject({
        url: '/api/manage/app/Common/ChangeLoginGroup',
        body: { tokenId: 'old-token', groupId: 'SEMIR', sgId: 'SG-PUMA' }
      });
      await expect(new SessionStore(undefined, home).require('unit')).resolves.toMatchObject({
        tokenId: 'new-token',
        groupId: 'PUMA-G',
        groupCode: 'PUMA',
        groupName: 'PUMAKIDS',
        userId: 'U1',
        permissions: [{ funCode: 'pending:order:review' }],
        menuData: [{ funCode: 'system:set1', funName: '配置' }]
      });
      const profile = await new ConfigManager(home).resolve({ profile: 'unit' });
      expect(profile.profileConfig.groupId).toBe('PUMA-G');
      expect(outputs[0]).toMatchObject({
        ok: true,
        data: {
          switched: true,
          bundle: {
            tokenId: 'new-...oken',
            groupId: 'PUMA-G',
            groupCode: 'PUMA',
            groupName: 'PUMAKIDS'
          }
        }
      });
    } finally {
      server.close();
    }
  });

  it('switches legacy login group by groupId after resolving sgId from LoginGroups', async () => {
    const home = await mkdtemp(join(tmpdir(), 'bmall-company-switch-group-by-id-'));
    await new ConfigManager(home).updateProfile('unit', { env: 'local', loginUrl: 'http://127.0.0.1:3000/' });
    await new SessionStore(undefined, home).save('unit', {
      tokenId: 'old-token',
      groupId: 'SEMIR',
      userId: 'U1',
      permissions: [],
      menuData: []
    });
    const requests: Array<{ url: string; body: unknown }> = [];
    const server = createServer((req, res) => {
      const chunks: Buffer[] = [];
      req.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
      req.on('end', () => {
        const body = JSON.parse(Buffer.concat(chunks).toString('utf8'));
        requests.push({ url: req.url ?? '', body });
        if (req.url === '/api/manage/app/Common/LoginGroups') {
          res.writeHead(200, { 'content-type': 'application/json' }).end(JSON.stringify({
            ResultInt: 0,
            DataLine: [
              { sgId: 'SG-SEMIR', groupId: 'SEMIR', groupName: '森马' },
              { sgId: 'SG-PUMA', groupId: 'PUMA-G', groupName: 'PUMAKIDS', groupCode: 'PUMA' }
            ]
          }));
          return;
        }
        res.writeHead(200, { 'content-type': 'application/json' }).end(JSON.stringify({
          ResultInt: 0,
          tokenId: 'new-token',
          groupId: 'PUMA-G',
          groupCode: 'PUMA',
          groupName: 'PUMAKIDS',
          fid: 'U1',
          userCode: 'tester',
          funs: [{ funCode: 'pending:order:review' }],
          menus: []
        }));
      });
    });
    await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
    const baseUrl = `http://127.0.0.1:${(server.address() as { port: number }).port}/api`;
    await new ConfigManager(home).updateProfile('unit', { baseUrl });
    const { program, outputs } = createProgram(home);

    try {
      await program.parseAsync(['node', 'bmall', '--config-home', home, '--profile', 'unit', '--json', 'company', 'switch-group', '--group-id', 'PUMA-G']);
      expect(requests.map((item) => item.url)).toEqual([
        '/api/manage/app/Common/LoginGroups',
        '/api/manage/app/Common/ChangeLoginGroup'
      ]);
      expect(requests[1]).toMatchObject({
        body: { tokenId: 'old-token', groupId: 'SEMIR', sgId: 'SG-PUMA' }
      });
      await expect(new SessionStore(undefined, home).require('unit')).resolves.toMatchObject({
        tokenId: 'new-token',
        groupId: 'PUMA-G',
        groupCode: 'PUMA',
        groupName: 'PUMAKIDS'
      });
      expect(outputs[0]).toMatchObject({
        ok: true,
        data: {
          switched: true,
          group: { sgId: 'SG-PUMA', groupId: 'PUMA-G', groupName: 'PUMAKIDS' }
        }
      });
    } finally {
      server.close();
    }
  });

  it('switches login company and persists company context with the returned token bundle', async () => {
    const home = await mkdtemp(join(tmpdir(), 'bmall-company-switch-company-'));
    await new ConfigManager(home).updateProfile('unit', { env: 'local', loginUrl: 'http://127.0.0.1:3000/' });
    await new SessionStore(undefined, home).save('unit', {
      tokenId: 'old-token',
      groupId: 'PUMA-G',
      groupName: 'PUMAKIDS',
      userId: 'U1',
      permissions: [],
      menuData: []
    });
    const requests: Array<{ url: string; body: unknown }> = [];
    const server = createServer((req, res) => {
      const chunks: Buffer[] = [];
      req.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
      req.on('end', () => {
        requests.push({ url: req.url ?? '', body: JSON.parse(Buffer.concat(chunks).toString('utf8')) });
        res.writeHead(200, { 'content-type': 'application/json' }).end(JSON.stringify({
          ResultInt: 0,
          tokenId: 'company-token',
          groupId: 'PUMA-G',
          groupCode: 'PUMA',
          companyId: 'C-PUMA-001',
          companyName: '陆佳雯',
          companyCode: 'PUMA001',
          fid: 'U1',
          userName: 'tester',
          funs: [{ funCode: 'mini:pending:order:review' }],
          menus: []
        }));
      });
    });
    await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
    const baseUrl = `http://127.0.0.1:${(server.address() as { port: number }).port}/api`;
    await new ConfigManager(home).updateProfile('unit', { baseUrl });
    const { program, outputs } = createProgram(home);

    try {
      await program.parseAsync(['node', 'bmall', '--config-home', home, '--profile', 'unit', '--json', 'company', 'switch', '--sc-id', 'SC-PUMA-001']);
      expect(requests[0]).toMatchObject({
        url: '/api/manage/app/Common/ChangeLogin',
        body: { tokenId: 'old-token', groupId: 'PUMA-G', scId: 'SC-PUMA-001' }
      });
      await expect(new SessionStore(undefined, home).require('unit')).resolves.toMatchObject({
        tokenId: 'company-token',
        groupId: 'PUMA-G',
        groupCode: 'PUMA',
        userId: 'U1',
        userName: 'tester',
        permissions: [{ funCode: 'mini:pending:order:review' }]
      });
      const profile = await new ConfigManager(home).resolve({ profile: 'unit' });
      expect(profile.profileConfig).toMatchObject({
        groupId: 'PUMA-G',
        companyId: 'C-PUMA-001',
        companyName: '陆佳雯'
      });
      expect(outputs[0]).toMatchObject({
        ok: true,
        data: {
          switched: true,
          company: {
            companyId: 'C-PUMA-001',
            companyName: '陆佳雯',
            companyCode: 'PUMA001'
          },
          bundle: {
            tokenId: 'comp...oken',
            groupId: 'PUMA-G'
          }
        }
      });
    } finally {
      server.close();
    }
  });

  it('switches legacy login company by companyId after resolving scId from company list', async () => {
    const home = await mkdtemp(join(tmpdir(), 'bmall-company-switch-company-by-id-'));
    await new ConfigManager(home).updateProfile('unit', { env: 'local', loginUrl: 'http://127.0.0.1:3000/' });
    await new SessionStore(undefined, home).save('unit', {
      tokenId: 'old-token',
      groupId: 'PUMA-G',
      groupName: 'PUMAKIDS',
      userId: 'U1',
      permissions: [],
      menuData: []
    });
    const requests: Array<{ url: string; body: unknown }> = [];
    const server = createServer((req, res) => {
      const chunks: Buffer[] = [];
      req.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
      req.on('end', () => {
        const body = JSON.parse(Buffer.concat(chunks).toString('utf8'));
        requests.push({ url: req.url ?? '', body });
        if (req.url === '/api/manage/app/Common/LoginCompanys') {
          res.writeHead(200, { 'content-type': 'application/json' }).end(JSON.stringify({
            ResultInt: 0,
            DataLine: [
              { scId: 'SC-001', companyId: 'C-PUMA-001', companyName: '陆佳雯', companyCode: 'PUMA001' }
            ]
          }));
          return;
        }
        res.writeHead(200, { 'content-type': 'application/json' }).end(JSON.stringify({
          ResultInt: 0,
          tokenId: 'company-token',
          groupId: 'PUMA-G',
          groupCode: 'PUMA',
          companyId: 'C-PUMA-001',
          companyName: '陆佳雯',
          companyCode: 'PUMA001',
          fid: 'U1',
          userName: 'tester'
        }));
      });
    });
    await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
    const baseUrl = `http://127.0.0.1:${(server.address() as { port: number }).port}/api`;
    await new ConfigManager(home).updateProfile('unit', { baseUrl });
    const { program, outputs } = createProgram(home);

    try {
      await program.parseAsync(['node', 'bmall', '--config-home', home, '--profile', 'unit', '--json', 'company', 'switch', '--company-id', 'C-PUMA-001']);
      expect(requests.map((item) => item.url)).toEqual([
        '/api/manage/app/Common/LoginCompanys',
        '/api/manage/app/Common/ChangeLogin'
      ]);
      expect(requests[1]).toMatchObject({
        body: { tokenId: 'old-token', groupId: 'PUMA-G', scId: 'SC-001' }
      });
      const profile = await new ConfigManager(home).resolve({ profile: 'unit' });
      expect(profile.profileConfig).toMatchObject({
        groupId: 'PUMA-G',
        companyId: 'C-PUMA-001',
        companyName: '陆佳雯'
      });
      expect(outputs[0]).toMatchObject({
        ok: true,
        data: {
          switched: true,
          company: { companyId: 'C-PUMA-001', companyName: '陆佳雯', companyCode: 'PUMA001' }
        }
      });
    } finally {
      server.close();
    }
  });

  it('lists IAM login groups through hr/iamUser/groupList', async () => {
    const home = await mkdtemp(join(tmpdir(), 'bmall-company-iam-groups-'));
    await new ConfigManager(home).updateProfile('unit', { env: 'local', loginUrl: 'http://127.0.0.1:3000/' });
    await new SessionStore(undefined, home).save('unit', {
      tokenId: 'iam-token',
      groupId: 'SEMIR',
      userId: '1001',
      userName: 'IAM User',
      loginActiveTabName: 'iam',
      permissions: [],
      menuData: []
    });
    const requests: Array<{ url: string; body: unknown; headers: Record<string, string | string[] | undefined> }> = [];
    const server = createServer((req, res) => {
      const chunks: Buffer[] = [];
      req.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
      req.on('end', () => {
        requests.push({ url: req.url ?? '', body: JSON.parse(Buffer.concat(chunks).toString('utf8')), headers: req.headers });
        res.writeHead(200, { 'content-type': 'application/json' }).end(JSON.stringify({
          code: '200',
          data: [
            { groupId: 'PUMA-G', groupName: 'PUMAKIDS', groupCode: 'PUMA', groupLogo: 'logo.png' }
          ]
        }));
      });
    });
    await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
    const baseUrl = `http://127.0.0.1:${(server.address() as { port: number }).port}/api`;
    await new ConfigManager(home).updateProfile('unit', { baseUrl });
    const { program, outputs } = createProgram(home);

    try {
      await program.parseAsync(['node', 'bmall', '--config-home', home, '--profile', 'unit', '--json', 'company', 'groups']);
      expect(requests[0]).toMatchObject({
        url: '/api/hr/iamUser/groupList',
        body: { tokenId: 'iam-token', groupId: 'SEMIR' }
      });
      expect(requests[0].headers['x-user-type']).toBe('1');
      expect(outputs[0]).toMatchObject({
        ok: true,
        data: {
          accountType: 'iam',
          count: 1,
          groups: [{ groupId: 'PUMA-G', groupName: 'PUMAKIDS', groupCode: 'PUMA' }]
        }
      });
    } finally {
      server.close();
    }
  });

  it('switches IAM login group using groupId and persists mapped token bundle', async () => {
    const home = await mkdtemp(join(tmpdir(), 'bmall-company-iam-switch-group-'));
    await new ConfigManager(home).updateProfile('unit', { env: 'local', loginUrl: 'http://127.0.0.1:3000/' });
    await new SessionStore(undefined, home).save('unit', {
      tokenId: 'old-iam-token',
      groupId: 'SEMIR',
      userId: '1001',
      userName: 'IAM User',
      loginActiveTabName: 'iam',
      permissions: [],
      menuData: []
    });
    const requests: Array<{ url: string; body: unknown }> = [];
    const server = createServer((req, res) => {
      const chunks: Buffer[] = [];
      req.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
      req.on('end', () => {
        requests.push({ url: req.url ?? '', body: JSON.parse(Buffer.concat(chunks).toString('utf8')) });
        res.writeHead(200, { 'content-type': 'application/json' }).end(JSON.stringify({
          code: '200',
          data: {
            tokenId: 'new-iam-token',
            userId: '1001',
            userName: 'IAM User',
            userMobile: '18800001111',
            groupInfo: { groupId: 'PUMA-G', groupName: 'PUMAKIDS', groupCode: 'PUMA' },
            roleFunctionList: [{ funCode: 'pending:order:review', funName: '审核' }],
            roleMenuList: [{ menuCode: 'supply', menuName: '订货' }]
          }
        }));
      });
    });
    await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
    const baseUrl = `http://127.0.0.1:${(server.address() as { port: number }).port}/api`;
    await new ConfigManager(home).updateProfile('unit', { baseUrl });
    const { program, outputs } = createProgram(home);

    try {
      await program.parseAsync(['node', 'bmall', '--config-home', home, '--profile', 'unit', '--json', 'company', 'switch-group', '--group-id', 'PUMA-G']);
      expect(requests[0]).toMatchObject({
        url: '/api/hr/iamUser/login/changeGroup',
        body: { tokenId: 'old-iam-token', groupId: 'PUMA-G' }
      });
      await expect(new SessionStore(undefined, home).require('unit')).resolves.toMatchObject({
        tokenId: 'new-iam-token',
        groupId: 'PUMA-G',
        groupName: 'PUMAKIDS',
        groupCode: 'PUMA',
        userId: '1001',
        mobile: '18800001111',
        loginActiveTabName: 'iam',
        permissions: [{ funCode: 'pending:order:review', funName: '审核' }],
        menuData: [{ menuCode: 'supply', menuName: '订货' }]
      });
      expect(outputs[0]).toMatchObject({
        ok: true,
        data: {
          accountType: 'iam',
          switched: true,
          group: { groupId: 'PUMA-G', groupName: 'PUMAKIDS', groupCode: 'PUMA' }
        }
      });
    } finally {
      server.close();
    }
  });

  it('switches IAM login group by brand name after resolving groupId from group list', async () => {
    const home = await mkdtemp(join(tmpdir(), 'bmall-company-iam-switch-group-by-brand-'));
    await new ConfigManager(home).updateProfile('unit', { env: 'local', loginUrl: 'http://127.0.0.1:3000/' });
    await new SessionStore(undefined, home).save('unit', {
      tokenId: 'old-iam-token',
      groupId: 'SEMIR',
      userId: '1001',
      userName: 'IAM User',
      loginActiveTabName: 'iam',
      permissions: [],
      menuData: []
    });
    const requests: Array<{ url: string; body: unknown }> = [];
    const server = createServer((req, res) => {
      const chunks: Buffer[] = [];
      req.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
      req.on('end', () => {
        requests.push({ url: req.url ?? '', body: JSON.parse(Buffer.concat(chunks).toString('utf8')) });
        if (req.url === '/api/hr/iamUser/groupList') {
          res.writeHead(200, { 'content-type': 'application/json' }).end(JSON.stringify({
            code: '200',
            data: [
              { groupId: '0', groupName: '巴拉巴拉', groupCode: 'C328' },
              { groupId: 'SEMIR', groupName: '森马', groupCode: 'C326' }
            ]
          }));
          return;
        }
        res.writeHead(200, { 'content-type': 'application/json' }).end(JSON.stringify({
          code: '200',
          data: {
            tokenId: 'bala-iam-token',
            userId: '1001',
            userName: 'IAM User',
            groupInfo: { groupId: '0', groupName: '巴拉巴拉', groupCode: 'C328' },
            roleFunctionList: [{ funCode: 'pending:order:review' }]
          }
        }));
      });
    });
    await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
    const baseUrl = `http://127.0.0.1:${(server.address() as { port: number }).port}/api`;
    await new ConfigManager(home).updateProfile('unit', { baseUrl });
    const { program, outputs } = createProgram(home);

    try {
      await program.parseAsync(['node', 'bmall', '--config-home', home, '--profile', 'unit', '--json', 'company', 'switch-group', '--brand', '巴拉']);
      expect(requests.map((item) => item.url)).toEqual([
        '/api/hr/iamUser/groupList',
        '/api/hr/iamUser/login/changeGroup'
      ]);
      expect(requests[1]).toMatchObject({
        body: { tokenId: 'old-iam-token', groupId: '0' }
      });
      await expect(new SessionStore(undefined, home).require('unit')).resolves.toMatchObject({
        tokenId: 'bala-iam-token',
        groupId: '0',
        groupName: '巴拉巴拉',
        groupCode: 'C328'
      });
      expect(outputs[0]).toMatchObject({
        ok: true,
        data: {
          accountType: 'iam',
          switched: true,
          group: { groupId: '0', groupName: '巴拉巴拉', groupCode: 'C328' }
        }
      });
    } finally {
      server.close();
    }
  });

  it('switches IAM login company using companyId and persists company context', async () => {
    const home = await mkdtemp(join(tmpdir(), 'bmall-company-iam-switch-company-'));
    await new ConfigManager(home).updateProfile('unit', { env: 'local', loginUrl: 'http://127.0.0.1:3000/' });
    await new SessionStore(undefined, home).save('unit', {
      tokenId: 'old-iam-token',
      groupId: 'PUMA-G',
      userId: '1001',
      userName: 'IAM User',
      loginActiveTabName: 'iam',
      permissions: [],
      menuData: []
    });
    const requests: Array<{ url: string; body: unknown }> = [];
    const server = createServer((req, res) => {
      const chunks: Buffer[] = [];
      req.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
      req.on('end', () => {
        requests.push({ url: req.url ?? '', body: JSON.parse(Buffer.concat(chunks).toString('utf8')) });
        res.writeHead(200, { 'content-type': 'application/json' }).end(JSON.stringify({
          code: '200',
          data: {
            tokenId: 'company-iam-token',
            userId: '1001',
            userName: 'IAM User',
            userMobile: '18800001111',
            groupInfo: { groupId: 'PUMA-G', groupName: 'PUMAKIDS', groupCode: 'PUMA' },
            companyInfo: {
              companyId: 'C-PUMA-001',
              companyName: '陆佳雯',
              companyCode: 'PUMA001',
              orgId: 9,
              orgName: 'Puma 经销商',
              orgCode: 'D009'
            },
            roleFunctionList: [{ funCode: 'mini:pending:order:review' }]
          }
        }));
      });
    });
    await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
    const baseUrl = `http://127.0.0.1:${(server.address() as { port: number }).port}/api`;
    await new ConfigManager(home).updateProfile('unit', { baseUrl });
    const { program, outputs } = createProgram(home);

    try {
      await program.parseAsync(['node', 'bmall', '--config-home', home, '--profile', 'unit', '--json', 'company', 'switch', '--company-id', 'C-PUMA-001']);
      expect(requests[0]).toMatchObject({
        url: '/api/hr/iamUser/mini/login/changeCompany',
        body: { tokenId: 'old-iam-token', groupId: 'PUMA-G', companyId: 'C-PUMA-001' }
      });
      await expect(new SessionStore(undefined, home).require('unit')).resolves.toMatchObject({
        tokenId: 'company-iam-token',
        groupId: 'PUMA-G',
        groupName: 'PUMAKIDS',
        loginActiveTabName: 'iam',
        permissions: [{ funCode: 'mini:pending:order:review' }]
      });
      const profile = await new ConfigManager(home).resolve({ profile: 'unit' });
      expect(profile.profileConfig).toMatchObject({
        groupId: 'PUMA-G',
        companyId: 'C-PUMA-001',
        companyName: '陆佳雯'
      });
      expect(outputs[0]).toMatchObject({
        ok: true,
        data: {
          accountType: 'iam',
          company: {
            companyId: 'C-PUMA-001',
            companyName: '陆佳雯',
            companyCode: 'PUMA001'
          }
        }
      });
    } finally {
      server.close();
    }
  });
});
