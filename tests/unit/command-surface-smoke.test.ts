import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';
import { mkdtemp, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { ConfigManager } from '../../src/core/config.js';
import { SessionStore } from '../../src/auth/session.js';
import { createCli } from '../../src/cli.js';
import { COMMAND_MANIFEST } from '../../src/core/manifest.js';

type RecordedRequest = {
  method: string;
  path: string;
  body: unknown;
  query: Record<string, string>;
};

let server: ReturnType<typeof createServer>;
let baseUrl = '';
let configHome = '';
let orderDraftFile = '';
let pendingReviewFile = '';
let patchFile = '';
let downloadFile = '';
let reportFile = '';
const requests: RecordedRequest[] = [];

beforeAll(async () => {
  server = createServer(handleRequest);
  await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
  const address = server.address();
  if (!address || typeof address === 'string') throw new Error('SMOKE_SERVER_START_FAILED');
  baseUrl = `http://127.0.0.1:${address.port}/api`;
});

afterAll(async () => {
  await new Promise<void>((resolve, reject) => server.close((error) => (error ? reject(error) : resolve())));
});

beforeEach(async () => {
  process.env.BMALL_SECRET_STORAGE = 'file';
  requests.length = 0;
  configHome = await mkdtemp(join(tmpdir(), 'bmall-command-smoke-'));
  const manager = new ConfigManager(configHome);
  await manager.updateProfile('unit', { env: 'local', baseUrl, loginUrl: 'http://127.0.0.1:3000/', companyId: 'C001', groupId: 'G001' });
  await new SessionStore(undefined, configHome).save('unit', {
    tokenId: 'unit-token',
    groupId: 'G001',
    groupName: 'Unit Group',
    userId: 'U001',
    userName: 'Unit User',
    roleCode: 'unit-role',
    permissions: [{ funCode: 'b2b:order:create' }],
    menuData: [{ funCode: 'menu:order' }],
  });
  orderDraftFile = join(configHome, 'order-draft.json');
  pendingReviewFile = join(configHome, 'pending-review.json');
  patchFile = join(configHome, 'address-patch.json');
  downloadFile = join(configHome, 'download.txt');
  reportFile = join(configHome, 'presale-business.xlsx');
  await writeFile(orderDraftFile, JSON.stringify({
    companyId: 'C001',
    orderType: 'replenishment',
    activityId: 'A001',
    orderModelId: 'M001',
    pickupOrderId: 'PK001',
    newStoreOrderId: 'NS001',
    items: [{ skuCode: 'SKU001', quantity: 1, price: 10 }],
  }));
  await writeFile(pendingReviewFile, JSON.stringify({ orderId: 10001, orderNo: 'PD001', companyId: 'C001', items: [{ skuCode: 'SKU001', quantity: 1 }] }));
  await writeFile(patchFile, JSON.stringify({ regionName: '西湖区', regionCode: '330106' }));
});

describe('manifest command surface smoke', () => {
  it('executes every manifest command through the real CLI registration surface', async () => {
    const results = [];
    for (const entry of COMMAND_MANIFEST) {
      await seedSession();
      const scenario = buildScenario(entry.name);
      const result = await runCli(scenario.argv);
      results.push({ name: entry.name, expectedExitCode: scenario.expectedExitCode, exitCode: result.exitCode, output: result.output });
    }

    const failures = results.filter((result) => result.exitCode !== result.expectedExitCode);
    expect(failures).toEqual([]);
    expect(results).toHaveLength(COMMAND_MANIFEST.length);
  });
});

async function runCli(args: string[]): Promise<{ exitCode: number; output: unknown[] }> {
  const program = createCli();
  const output: unknown[] = [];
  const originalStdout = process.stdout.write;
  process.exitCode = undefined;
  process.stdout.write = ((chunk: string | Uint8Array) => {
    const text = String(chunk).trim();
    if (text) {
      try {
        output.push(JSON.parse(text));
      } catch {
        output.push(text);
      }
    }
    return true;
  }) as typeof process.stdout.write;
  try {
    await program.parseAsync(['node', 'bmall', '--config-home', configHome, '--profile', 'unit', '--env', 'local', '--json', ...args]);
    return { exitCode: process.exitCode && process.exitCode !== 0 ? Number(process.exitCode) : 0, output };
  } catch (error) {
    output.push(error instanceof Error ? { error: error.message } : { error: String(error) });
    return { exitCode: 1, output };
  } finally {
    process.stdout.write = originalStdout;
    process.exitCode = undefined;
  }
}

async function seedSession(): Promise<void> {
  await new SessionStore(undefined, configHome).save('unit', {
    tokenId: 'unit-token',
    groupId: 'G001',
    groupName: 'Unit Group',
    userId: 'U001',
    userName: 'Unit User',
    roleCode: 'unit-role',
    permissions: [{ funCode: 'b2b:order:create' }],
    menuData: [{ funCode: 'menu:order' }],
  });
}

function buildScenario(name: string): { argv: string[]; expectedExitCode: number } {
  const local: Record<string, string[]> = {
    version: ['version'],
    doctor: ['doctor'],
    'profile.list': ['profile', 'list'],
    'profile.use': ['profile', 'use', 'unit'],
    'profile.set-env': ['profile', 'set-env', 'qa', '--base-url', baseUrl],
    'manifest.list': ['manifest', 'list'],
    'manifest.get': ['manifest', 'get', 'version'],
    'auth.import-token': ['auth', 'import-token', '--token', 'smoke-token', '--skip-verify'],
    'auth.login': ['auth', 'login', '--account', 'user', '--password', 'pass', '--skip-verify'],
    'auth.doctor': ['auth', 'doctor'],
    'auth.renew': ['auth', 'renew'],
    'auth.logout': ['auth', 'logout'],
    'agent.knowledge': ['agent', 'knowledge'],
    'agent.explain-error': ['agent', 'explain-error', '--error-code', '401700000', '--message', '收货地址不完整，请先维护区'],
    whoami: ['whoami'],
    'company.list': ['company', 'list', '--sword', '门店'],
    'company.use': ['company', 'use', '--company-id', 'C001', '--company-name', '西湖店'],
    'company.groups': ['company', 'groups', '--sword', 'PUMA'],
    'company.switch-group': ['company', 'switch-group', '--sg-id', 'SG1'],
    'company.switch': ['company', 'switch', '--sc-id', 'SC1'],
    'permission.list': ['permission', 'list'],
    'permission.check': ['permission', 'check', '--fun-code', 'b2b:order:create'],
    'report.presale-business': ['report', 'presale-business', '--source', 'mid', '--start-date', '2026-01-01', '--end-date', '2026-05-24', '--output', reportFile],
    'order-type.list': ['order-type', 'list'],
    'order-type.get': ['order-type', 'get', '--type', 'replenishment'],
    'order-flow.inspect': ['order-flow', 'inspect', '--type', 'replenishment'],
    'order-rule.explain': ['order-rule', 'explain', '--type', 'replenishment'],
    'order.plan': ['order', 'plan', '--file', orderDraftFile],
    'order.validate': ['order', 'validate', '--file', orderDraftFile, '--type', 'replenishment'],
    'order.submit': ['order', 'submit', '--file', orderDraftFile, '--dry-run'],
    'replenishment.plan': ['replenishment', 'plan', '--file', orderDraftFile],
    'replenishment.validate': ['replenishment', 'validate', '--file', orderDraftFile],
    'replenishment.submit': ['replenishment', 'submit', '--file', orderDraftFile, '--dry-run'],
    'replenishment.diagnose': ['replenishment', 'diagnose', '--order-no', 'DH001'],
    'multi-store-order.plan': ['multi-store-order', 'plan', '--file', orderDraftFile],
    'multi-store-order.validate': ['multi-store-order', 'validate', '--file', orderDraftFile],
    'multi-store-order.submit': ['multi-store-order', 'submit', '--file', orderDraftFile, '--dry-run'],
    'multi-store-order.diagnose': ['multi-store-order', 'diagnose', '--order-no', 'DH001'],
    'pending-order.plan': ['pending-order', 'plan', '--file', orderDraftFile],
    'pending-order.validate': ['pending-order', 'validate', '--file', orderDraftFile],
    'pending-order.submit': ['pending-order', 'submit', '--file', orderDraftFile, '--dry-run'],
    'pending-order.diagnose': ['pending-order', 'diagnose', '--order-no', 'PD001'],
    'mid-order.validate': ['mid-order', 'validate', '--file', orderDraftFile],
    'mid-order.submit': ['mid-order', 'submit', '--file', orderDraftFile, '--dry-run'],
    'mid-order.diagnose': ['mid-order', 'diagnose', '--presale-order-id', 'PRE001'],
    'supply-presale.submit': ['supply-presale', 'submit', '--activity-id', 'A001', '--company-id', 'C001', '--dry-run'],
    'supply-presale.diagnose': ['supply-presale', 'diagnose', '--order-id', 'SO001'],
    'pickup.submit': ['pickup', 'submit', '--pickup-order-id', 'PK001', '--file', orderDraftFile, '--dry-run'],
    'pickup.diagnose': ['pickup', 'diagnose', '--pickup-order-id', 'PK001'],
    'new-store-order.submit': ['new-store-order', 'submit', '--file', orderDraftFile, '--dry-run'],
    'new-store-order.diagnose': ['new-store-order', 'diagnose', '--new-store-order-id', 'NS001'],
  };
  const generated = local[name] ?? generatedScenario(name);
  const expectedFailure = new Set(['ops.config.get', 'ops.log.api', 'ops.log.sync-warning', 'ops.job.run']);
  return { argv: generated, expectedExitCode: expectedFailure.has(name) ? 1 : 0 };
}

function generatedScenario(name: string): string[] {
  const parts = name.split('.');
  const argv = [...parts];
  const args = COMMAND_MANIFEST.find((entry) => entry.name === name)?.args ?? [];
  for (const arg of args) {
    if (arg.name === 'confirm') continue;
    if (arg.name === 'dry-run') {
      argv.push('--dry-run');
      continue;
    }
    if (arg.type === 'bool') {
      if (arg.name === 'only-unfulfilled' || arg.name === 'csv' || arg.required) argv.push(`--${arg.name}`);
      continue;
    }
    argv.push(`--${arg.name}`, valueForArg(arg.name, arg.type));
  }
  return argv;
}

function valueForArg(name: string, type: string): string {
  if (name === 'file') return orderDraftFile;
  if (name === 'input') return orderDraftFile;
  if (name === 'from-file') return orderDraftFile;
  if (name === 'output') return downloadFile;
  if (name === 'bundle') return JSON.stringify({ tokenId: 'bundle-token' });
  if (name === 'password') return 'pass';
  if (name === 'base-url') return baseUrl;
  if (name === 'reason') return 'smoke authorization';
  if (name === 'token') return 'smoke-token';
  if (name === 'merchant-ids') return '1162,23391';
  if (name === 'type') return 'replenishment';
  if (name === 'source') return 'supply';
  if (name === 'format') return 'json';
  if (type === 'number') return '1';
  if (type === 'duration') return '1ms';
  if (type === 'csv') return `${name}-1,${name}-2`;
  const values: Record<string, string> = {
    account: 'user',
    name: 'unit',
    env: 'qa',
    keyword: '卫衣',
    'item-code': 'ITEM001',
    'item-id': 'ITEM-ID-001',
    'skc-code': 'SKC001',
    'sku-code': 'SKU001',
    'company-id': 'C001',
    'company-name': '西湖店',
    'order-no': 'DH001',
    'order-id': '10001',
    'pickup-order-id': 'PK001',
    'new-store-order-id': 'NS001',
    'presale-order-id': 'PRE001',
    'activity-id': 'A001',
    'activity-query': '26Q2',
    'activity-ids': 'A001,A002',
    'order-model-id': 'M001',
    'task-id': 'TASK001',
    'job-id': 'orderDailyStatJob',
    'address-id': 'ADDR001',
    key: 'feature.flag',
    value: 'on',
    'fun-code': 'b2b:order:create',
    'error-code': '401700000',
    message: '收货地址不完整，请先维护区',
    module: 'order',
    user: 'tester',
    id: 'ID001',
    'role-code': 'admin',
    'distributor-id': 'D001',
    sword: '关键字',
    status: 'wait',
    from: '2026-05-01',
    to: '2026-05-24',
    'province-name': '浙江省',
    'city-name': '杭州市',
    'region-name': '西湖区',
    'con-address': '文三路 1 号',
    'province-code': '330000',
    'city-code': '330100',
    'region-code': '330106',
    consignee: '张三',
    'consi-phone': '13800000000',
    'company-code': 'C001',
    'company-codes': 'C001,C002',
    'distributor-code': 'D001',
    'distributor-codes': 'D001,D002',
    'distributor-name': '杭州经销商',
    'store-code': 'C001',
    'store-name': '西湖店',
    'retailer-code': 'D001',
    'retailer-name': '杭州经销商',
    'sync-status': '1',
    'pickup-activity-status': 'all',
  };
  return values[name] ?? `${name}-value`;
}

async function handleRequest(req: IncomingMessage, res: ServerResponse): Promise<void> {
  const url = new URL(req.url ?? '/', baseUrl);
  const body = await readBody(req);
  const path = url.pathname.replace(/^\/api\/?/, '');
  const query = Object.fromEntries(url.searchParams.entries());
  requests.push({ method: req.method ?? 'GET', path, body, query });
  if (path === 'download/file.txt') {
    res.writeHead(200, { 'content-type': 'text/plain' }).end('downloaded');
    return;
  }
  res.writeHead(200, { 'content-type': 'application/json' }).end(JSON.stringify(responseFor(path, body)));
}

function responseFor(path: string, body: unknown): unknown {
  if (path.includes('Common/Login')) return { ResultInt: 0, data: { tokenId: 'login-token', groupId: 'G001', userCode: 'Unit User' } };
  if (path.includes('GetUserInfo')) return { ResultInt: 0, data: { userName: 'Unit User', userId: 'U001' } };
  if (path.includes('menu/list')) return { ResultInt: 0, data: [{ funCode: 'menu:order' }] };
  if (path.includes('token/renewal')) return { ResultInt: 0, data: { tokenId: 'renewed-token', groupId: 'G001' } };
  if (path.includes('LoginGroups')) return { ResultInt: 0, DataLine: [{ sgId: 'SG1', groupId: 'G001', groupName: 'Unit Group', groupCode: 'UNIT' }] };
  if (path.includes('ChangeLoginGroup')) return { ResultInt: 0, tokenId: 'group-token', groupId: 'G001', groupName: 'Unit Group', groupCode: 'UNIT' };
  if (path.includes('queryCompanyRole') || path.includes('LoginCompanys')) return { ResultInt: 0, DataLine: [{ scId: 'SC1', companyId: 'C001', companyName: '西湖店', companyCode: 'C001' }] };
  if (path.includes('ChangeLogin')) return { ResultInt: 0, tokenId: 'company-token', groupId: 'G001', companyId: 'C001', companyName: '西湖店' };
  if (path === 'hr/mb2bcrd3/list') return { data: [{ fid: 'ADDR001', provinceName: '浙江省', cityName: '杭州市', regionName: '区', conAddress: '文三路 1 号', sourceType: 1 }] };
  if (path === 'activity/presaleActivities/findActivity') return { data: { content: [{ presaleId: 'M001', presaleCode: '202603', presaleName: '26春中短期', beginTime: '2026-03-05 00:00:00' }] } };
  if (path === 'activity/presaleOrder/page') return { data: { content: [{ id: 'MO001', presaleId: 'M001', companyCode: 'C001', companyName: '西湖店', goodsTotal: 1, goodsTotalPrice: 100 }] } };
  if (path === 'activity/presaleOrder/orderStatistics') return { data: { orderQtyTotalCount: 1, goodsQtyTotalCount: 1 } };
  if (path === 'activity/presale/pickup/manage/activityView/page') return { data: { content: [{ activityId: 'M001', orderQty: 1, pickedQty: 1 }] } };
  if (path === 'activity/presale/pickup/manage/activityView/pageGather') return { data: { orderQtySum: 1, pickedQtySum: 1 } };
  if (path === 'activity/presale/pickup/manage/companyView/dealerPage') return { data: { content: [{ companyCode: 'C001', companyName: '西湖店', orderQty: 1, pickedQty: 1 }] } };
  if (path === 'activity/presale/pickup/manage/companyView/pageGather') return { data: { orderQtySum: 1, pickedQtySum: 1 } };
  if (path === 'hr/mb2bcrd3/getById') return { data: { fid: 'ADDR001', provinceName: '浙江省', cityName: '杭州市', regionName: '西湖区' } };
  if (path.includes('file/asyn/export/b2b/page')) return { data: { records: [{ taskId: 'TASK001', status: '2', downloadUrl: `${baseUrl}/download/file.txt` }] } };
  if (path.includes('downloadTaskFile')) return { data: { taskId: 'TASK001', downloadUrl: `${baseUrl}/download/file.txt` } };
  if (path.includes('exportOrder')) return { data: { taskId: 'TASK001', status: '1' } };
  if (path.includes('pickup/order/mgd/page')) return { content: [{ id: 'PK001', pickupOrderNo: 'TH001', pickupOrderSourceType: 2, companyCode: 'C001', companyName: '西湖店', presalesOrderList: [{ presalesOrderId: 'SO001', presalesOrderNo: 'YS001' }] }] };
  if (path.includes('selectPickupOrderSkus')) return { content: [{ skcCode: 'SKC001', allocatedQuantity: 1, pickedQuantity: 0, pendingPickedQuantity: 1 }] };
  if (path.includes('selectPresaleOrders')) return [{ presaleOrderId: 'SO001', presaleOrderNo: 'YS001' }];
  if (path.includes('query/order/detail/item') || path.includes('queryItems/byOrderId')) return { content: [{ skcCode: 'SKC001', orderQty: 1 }] };
  if (path.includes('activity/supply/presale/activity/page')) return { content: [{ id: 'A001', activityId: 'A001', activityName: '26Q2' }] };
  if (path.includes('pageGather')) return { total: 1 };
  if (path.includes('dealerPage') || path.includes('activityView/page')) return { content: [{ activityId: 'A001', companyCode: 'C001', orderQty: 1, pickedQty: 0 }] };
  if (path.includes('pendingReviewOrder') || path.includes('order/detailByNo')) return { data: { orderNo: 'DH001', companyId: 'C001', provinceName: '浙江省', cityName: '杭州市', regionName: '西湖区', conAddress: '文三路 1 号' } };
  if (path === 'hr/sysCompany/queryCompanyInfoById') return { data: { companyId: 'C001', companyCode: 'C001', companyName: '西湖店' } };
  if (path === 'product/item/brandItems/page') return { data: { content: [{ itemId: 'ITEM-ID-001', itemCode: 'ITEM001', itemName: '26Q2 T恤' }] } };
  if (path === 'product/mitemcomp/list') return { data: { content: [] } };
  if (path === 'product/mdm/mdmItemSyncByArticleCodes') return { ResultInt: 0, data: { synced: true } };
  if (path === 'product/findShAccount') return { data: [{ merchantId: 1162, dpPlaceName: '默认深绘账号' }] };
  if (path === 'product/itemPicAsyncByItemCode') return { data: { synced: true } };
  if (path === 'product/pag/list') return { data: { content: [] } };
  if (path === 'product/pag/save') return { data: 12345 };
  if (path === 'product/pag/comp/batchAddOrDelCompany') return { data: { linked: true } };
  if (path === 'product/pag/comp/getItemPackageAndComp') return { data: { packageList: [{ packageId: 'P001', packageCode: 'PKG001', packageName: '26Q2订货包' }], companyList: [] } };
  if (path === 'product/pag/comp/list') return { data: [{ companyId: 'C001', companyCode: 'C001', companyName: '西湖店', packageVOList: [{ packageId: 'P001', packageCode: 'PKG001', packageName: '26Q2订货包' }] }] };
  if (path === 'product/item/spec/getSpuDetailByItemId') return { data: { itemId: 'ITEM-ID-001', itemCode: 'ITEM001', itemName: '26Q2 T恤', headImage: 'https://img.example/ITEM001.jpg' } };
  if (path === 'product/itemSearch/search') return { data: { records: [{ itemId: 'ITEM-ID-001', itemCode: 'ITEM001', itemName: '26Q2 T恤', headImage: 'https://img.example/ITEM001.jpg' }] } };
  if (path.includes('itemStock') || path.includes('item/page/syncStockSellOut')) return { data: { records: [{ itemCode: 'ITEM001', skuCode: 'SKU001', stockQty: 1 }] } };
  if (path.includes('item') || path.includes('product') || path.includes('shopping') || path.includes('order') || path.includes('activity') || path.includes('iam') || path.includes('sysCompany')) {
    return { data: { endpoint: path, echo: body } };
  }
  return { data: { endpoint: path, echo: body } };
}

async function readBody(req: IncomingMessage): Promise<unknown> {
  const chunks: Buffer[] = [];
  for await (const chunk of req) chunks.push(Buffer.from(chunk));
  if (!chunks.length) return {};
  const text = Buffer.concat(chunks).toString('utf8');
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}
