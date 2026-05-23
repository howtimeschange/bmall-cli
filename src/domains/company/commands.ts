import { Command } from 'commander';
import { ConfigManager } from '../../core/config.js';
import { BmallHttpClient } from '../../core/http.js';
import { printResult, success } from '../../core/output.js';
import { SessionStore } from '../../auth/session.js';
import type { GlobalOptions } from '../../auth/commands.js';
import { isIamBundle, TokenBundleSchema, type TokenBundle } from '../../auth/token-bundle.js';
import type { OutputFn } from '../../cli.js';
import { BmallCliError } from '../../core/errors.js';

export function registerCompanyCommands(program: Command, getGlobals: () => GlobalOptions, output?: OutputFn): void {
  const company = program.command('company').description('Company context commands');
  const emit = (payload: unknown, asJson = false) => {
    if (output) output(payload);
    else printResult(payload, asJson);
  };

  company.command('list').description('List available companies').option('--sword <keyword>', 'search keyword').action(async (opts) => {
    const globals = getGlobals();
    const config = new ConfigManager(globals.configHome);
    const resolved = await config.resolve(globals);
    const bundle = await new SessionStore(undefined, globals.configHome).require(resolved.profile);
    const client = new BmallHttpClient(resolved.baseUrl, bundle);
    const response = await client.send({
      method: 'POST',
      path: 'hr/sysCompany/queryCompanyRole/miniGround',
      body: {
        sword: opts.sword ?? ''
      },
      auth: { injectAuthToBody: true }
    });
    const companies = extractRows(response.data);
    emit(success(resolved, { accountType: accountType(bundle), count: companies.length, companies }, { source: 'api', durationMs: response.durationMs }), globals.json);
  });

  company.command('use').description('Set current company context in profile').requiredOption('--company-id <id>', 'company id').option('--company-name <name>', 'company name').action(async (opts) => {
    const globals = getGlobals();
    const config = new ConfigManager(globals.configHome);
    const resolved = await config.resolve(globals);
    const profile = await config.updateProfile(resolved.profile, { companyId: opts.companyId, companyName: opts.companyName });
    emit(success(resolved, { profile }), globals.json);
  });

  company.command('groups').description('List available brand groups for the current account').option('--sword <keyword>', 'search keyword').action(async (opts) => {
    const globals = getGlobals();
    const config = new ConfigManager(globals.configHome);
    const resolved = await config.resolve(globals);
    const bundle = await new SessionStore(undefined, globals.configHome).require(resolved.profile);
    const client = new BmallHttpClient(resolved.baseUrl, bundle);
    const response = await client.send({
      method: 'POST',
      path: isIamBundle(bundle) ? 'hr/iamUser/groupList' : 'manage/app/Common/LoginGroups',
      body: isIamBundle(bundle) ? {} : { sword: opts.sword ?? '' },
      auth: { injectAuthToBody: true }
    });
    const groups = extractRows(response.data);
    emit(success(resolved, { accountType: accountType(bundle), count: groups.length, groups }, { source: 'api', durationMs: response.durationMs }), globals.json);
  });

  company.command('switch-group').description('Switch active brand group and save the returned token').option('--sg-id <id>', 'SysStaffGroup sgId from company groups').option('--group-id <id>', 'brand groupId').action(async (opts) => {
    const globals = getGlobals();
    const config = new ConfigManager(globals.configHome);
    const resolved = await config.resolve(globals);
    const store = new SessionStore(undefined, globals.configHome);
    const current = await store.require(resolved.profile);
    const client = new BmallHttpClient(resolved.baseUrl, current);
    const target = await resolveGroupTarget(client, current, opts);
    const iam = isIamBundle(current);
    const response = await client.send<Record<string, unknown>>({
      method: 'POST',
      path: iam ? 'hr/iamUser/login/changeGroup' : 'manage/app/Common/ChangeLoginGroup',
      body: iam ? { groupId: target.groupId } : { sgId: target.sgId },
      auth: { injectAuthToBody: true }
    });
    const responseData = isRecord(response.data) ? response.data : response.raw;
    const bundle = mergeReturnedBundle(current, responseData);
    await store.save(resolved.profile, bundle);
    await config.updateProfile(resolved.profile, {
      groupId: bundle.groupId,
      companyId: undefined,
      companyName: undefined
    });
    emit(success(resolved, { accountType: accountType(current), switched: true, group: pickGroup(responseData, target), bundle: publicBundle(bundle) }, { source: 'api', durationMs: response.durationMs }), globals.json);
  });

  company.command('switch').description('Switch active login company/store and save the returned token').option('--sc-id <id>', 'SysStaffComp scId from company list').option('--company-id <id>', 'company/store id').action(async (opts) => {
    const globals = getGlobals();
    const config = new ConfigManager(globals.configHome);
    const resolved = await config.resolve(globals);
    const store = new SessionStore(undefined, globals.configHome);
    const current = await store.require(resolved.profile);
    const client = new BmallHttpClient(resolved.baseUrl, current);
    const iam = isIamBundle(current);
    const target = await resolveCompanyTarget(client, current, opts);
    const response = await client.send<Record<string, unknown>>({
      method: 'POST',
      path: iam ? 'hr/iamUser/mini/login/changeCompany' : 'manage/app/Common/ChangeLogin',
      body: iam ? { companyId: target.companyId } : { scId: target.scId },
      auth: { injectAuthToBody: true }
    });
    const responseData = isRecord(response.data) ? response.data : response.raw;
    const bundle = mergeReturnedBundle(current, responseData);
    await store.save(resolved.profile, bundle);
    const company = pickCompany(responseData, target);
    await config.updateProfile(resolved.profile, {
      groupId: bundle.groupId,
      companyId: company.companyId,
      companyName: company.companyName
    });
    emit(success(resolved, { accountType: accountType(current), switched: true, company, bundle: publicBundle(bundle) }, { source: 'api', durationMs: response.durationMs }), globals.json);
  });
}

interface GroupTarget {
  sgId?: string;
  groupId?: string;
  groupName?: string;
  groupCode?: string;
}

interface CompanyTarget {
  scId?: string;
  companyId?: string;
  companyName?: string;
  companyCode?: string;
}

async function resolveGroupTarget(client: BmallHttpClient, bundle: TokenBundle, opts: { sgId?: string; groupId?: string }): Promise<GroupTarget> {
  if (isIamBundle(bundle)) {
    if (!opts.groupId) {
      throw new BmallCliError('INPUT_ERROR', 'IAM brand switching requires --group-id.', {
        recover: 'Run `bmall company groups --json`, then pass the groupId to `bmall company switch-group --group-id <id>`.'
      });
    }
    return { groupId: opts.groupId };
  }
  if (opts.sgId) return { sgId: opts.sgId, groupId: opts.groupId };
  if (!opts.groupId) {
    throw new BmallCliError('INPUT_ERROR', 'Use --sg-id or --group-id for brand switching.', {
      recover: 'Run `bmall company groups --json`, then pass sgId or groupId.'
    });
  }
  const response = await client.send({
    method: 'POST',
    path: 'manage/app/Common/LoginGroups',
    body: { sword: '' },
    auth: { injectAuthToBody: true }
  });
  const groups = extractRows(response.data);
  const group = groups.find((item) => stringValue(item.groupId) === opts.groupId);
  const sgId = stringValue(group?.sgId);
  if (!group || !sgId) {
    throw new BmallCliError('INPUT_ERROR', `No login brand found for groupId ${opts.groupId}.`, {
      recover: 'Run `bmall company groups --json` and use an available groupId or sgId.'
    });
  }
  return {
    sgId,
    groupId: stringValue(group.groupId),
    groupName: stringValue(group.groupName),
    groupCode: stringValue(group.groupCode)
  };
}

async function resolveCompanyTarget(client: BmallHttpClient, bundle: TokenBundle, opts: { scId?: string; companyId?: string }): Promise<CompanyTarget> {
  if (isIamBundle(bundle)) {
    if (!opts.companyId) {
      throw new BmallCliError('INPUT_ERROR', 'IAM company switching requires --company-id.', {
        recover: 'Run `bmall company list --json`, then pass the companyId to `bmall company switch --company-id <id>`.'
      });
    }
    return { companyId: opts.companyId };
  }
  if (opts.scId) return { scId: opts.scId, companyId: opts.companyId };
  if (!opts.companyId) {
    throw new BmallCliError('INPUT_ERROR', 'Use --sc-id or --company-id for company switching.', {
      recover: 'Run `bmall company list --json`, then pass scId or companyId.'
    });
  }
  const response = await client.send({
    method: 'POST',
    path: 'manage/app/Common/LoginCompanys',
    body: {
      sword: '',
      groupId: bundle.groupId
    },
    auth: { injectAuthToBody: true }
  });
  const companies = extractRows(response.data);
  const company = companies.find((item) => stringValue(item.companyId) === opts.companyId);
  const scId = stringValue(company?.scId);
  if (!company || !scId) {
    throw new BmallCliError('INPUT_ERROR', `No login company found for companyId ${opts.companyId}.`, {
      recover: 'Run `bmall company list --json` and use an available companyId or scId.'
    });
  }
  return {
    scId,
    companyId: stringValue(company.companyId),
    companyName: stringValue(company.companyName),
    companyCode: stringValue(company.companyCode)
  };
}

function extractRows(data: unknown): Array<Record<string, unknown>> {
  if (Array.isArray(data)) return data.filter(isRecord);
  if (!isRecord(data)) return [];
  for (const key of ['DataLine', 'data', 'Data', 'rows', 'records', 'list']) {
    const value = data[key];
    if (Array.isArray(value)) return value.filter(isRecord);
  }
  return Object.values(data).flatMap((value) => (Array.isArray(value) ? value.filter(isRecord) : []));
}

function mergeReturnedBundle(current: TokenBundle, data: unknown): TokenBundle {
  const source = isRecord(data) ? data : {};
  const groupInfo = isRecord(source.groupInfo) ? source.groupInfo : {};
  const permissions = arrayValue(source.funs) ?? arrayValue(source.roleFunctionList) ?? current.permissions;
  const menuData = arrayValue(source.menus) ?? arrayValue(source.roleMenuList) ?? current.menuData;
  return TokenBundleSchema.parse({
    ...current,
    tokenId: stringValue(source.tokenId) ?? current.tokenId,
    groupId: stringValue(groupInfo.groupId) ?? stringValue(source.groupId) ?? current.groupId,
    groupName: stringValue(groupInfo.groupName) ?? stringValue(source.groupName) ?? current.groupName,
    groupCode: stringValue(groupInfo.groupCode) ?? stringValue(source.groupCode) ?? current.groupCode,
    userId: stringValue(source.fid) ?? stringValue(source.userId) ?? current.userId,
    userName: stringValue(source.userName) ?? stringValue(source.userCode) ?? current.userName,
    mobile: stringValue(source.userMobile) ?? stringValue(source.mobile) ?? current.mobile,
    roleCode: stringValue(source.roleCode) ?? current.roleCode,
    loginActiveTabName: current.loginActiveTabName,
    permissions,
    menuData
  });
}

function pickGroup(data: unknown, fallback: GroupTarget = {}): GroupTarget {
  const source = isRecord(data) ? data : {};
  const groupInfo = isRecord(source.groupInfo) ? source.groupInfo : {};
  return removeUndefined({
    sgId: fallback.sgId,
    groupId: stringValue(groupInfo.groupId) ?? stringValue(source.groupId) ?? fallback.groupId,
    groupName: stringValue(groupInfo.groupName) ?? stringValue(source.groupName) ?? fallback.groupName,
    groupCode: stringValue(groupInfo.groupCode) ?? stringValue(source.groupCode) ?? fallback.groupCode
  });
}

function pickCompany(data: unknown, fallback: CompanyTarget = {}): CompanyTarget & { orgId?: string; orgName?: string; orgCode?: string } {
  const source = isRecord(data) ? data : {};
  const companyInfo = isRecord(source.companyInfo) ? source.companyInfo : {};
  return removeUndefined({
    scId: fallback.scId,
    companyId: stringValue(companyInfo.companyId) ?? stringValue(source.companyId) ?? fallback.companyId,
    companyName: stringValue(companyInfo.companyName) ?? stringValue(source.companyName) ?? fallback.companyName,
    companyCode: stringValue(companyInfo.companyCode) ?? stringValue(source.companyCode) ?? fallback.companyCode,
    orgId: stringValue(companyInfo.orgId) ?? stringValue(source.orgId),
    orgName: stringValue(companyInfo.orgName) ?? stringValue(source.orgName),
    orgCode: stringValue(companyInfo.orgCode) ?? stringValue(source.orgCode)
  });
}

function publicBundle(bundle: TokenBundle): Omit<TokenBundle, 'tokenId'> & { tokenId: string } {
  const parsed = TokenBundleSchema.parse(bundle);
  return { ...parsed, tokenId: `${parsed.tokenId.slice(0, 4)}...${parsed.tokenId.slice(-4)}` };
}

function stringValue(value: unknown): string | undefined {
  if (value === undefined || value === null) return undefined;
  const text = String(value);
  return text.length > 0 ? text : undefined;
}

function arrayValue(value: unknown): unknown[] | undefined {
  return Array.isArray(value) ? value : undefined;
}

function accountType(bundle: TokenBundle): 'iam' | 'bmall' {
  return isIamBundle(bundle) ? 'iam' : 'bmall';
}

function removeUndefined<T extends Record<string, unknown>>(value: T): T {
  return Object.fromEntries(Object.entries(value).filter(([, field]) => field !== undefined)) as T;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}
