import { mkdtemp } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { describe, expect, it, vi } from 'vitest';
import { Command } from 'commander';
import { ConfigManager } from '../../src/core/config.js';
import { SessionStore } from '../../src/auth/session.js';
import { registerProductCommands } from '../../src/domains/product/commands.js';
import { registerStockCommands } from '../../src/domains/stock/commands.js';
import { registerCartCommands } from '../../src/domains/cart/commands.js';
import { registerOrderCommands } from '../../src/domains/order/commands.js';
import type { GlobalOptions } from '../../src/auth/commands.js';
import type { BmallRequestOptions } from '../../src/core/http.js';

function createProgram(configHome: string): Command {
  const program = new Command();
  program.option('--config-home <path>').option('--profile <name>').option('--env <name>').option('--json').exitOverride();
  program.configureOutput({ writeOut: () => undefined, writeErr: () => undefined });
  program.parseOptions(['node', 'bmall', '--config-home', configHome, '--profile', 'unit', '--env', 'local', '--json']);
  return program;
}

async function createHarness() {
  const configHome = await mkdtemp(join(tmpdir(), 'bmall-customer-api-'));
  const config = new ConfigManager(configHome);
  await config.useProfile('unit');
  await config.updateProfile('unit', { env: 'local', companyId: 'C001', groupId: 'G001' });
  await new SessionStore(undefined, configHome).save('unit', { tokenId: 'token-1', groupId: 'G001' });
  const calls: BmallRequestOptions[] = [];
  const client = {
    send: vi.fn(async (opts: BmallRequestOptions) => {
      calls.push(opts);
      return {
        ok: true,
        data: { endpoint: opts.path, body: opts.body, query: opts.query },
        raw: {},
        requestId: `req-${calls.length}`,
        durationMs: 7
      };
    })
  };
  const program = createProgram(configHome);
  const outputs: unknown[] = [];
  const globals = () => program.opts<GlobalOptions>();
  const deps = { createClient: () => client };
  registerProductCommands(program, globals, (payload) => outputs.push(payload), deps);
  registerStockCommands(program, globals, (payload) => outputs.push(payload), deps);
  registerCartCommands(program, globals, (payload) => outputs.push(payload), deps);
  registerOrderCommands(program, globals, (payload) => outputs.push(payload), deps);
  return { configHome, program, calls, outputs };
}

describe('customer API commands', () => {
  it('calls real product API path and emits a success envelope', async () => {
    const { configHome, program, calls, outputs } = await createHarness();
    await program.parseAsync(['node', 'bmall', '--config-home', configHome, '--profile', 'unit', '--env', 'local', '--json', 'product', 'search', '--keyword', '卫衣', '--limit', '20']);

    expect(calls[0]).toMatchObject({
      method: 'POST',
      path: 'product/itemSearch/search',
      body: { keyword: '卫衣', limit: 20, companyId: 'C001' }
    });
    expect(outputs[0]).toMatchObject({
      ok: true,
      profile: 'unit',
      env: 'local',
      requestId: 'req-1',
      data: { endpoint: 'product/itemSearch/search' },
      meta: { source: 'api', durationMs: 7 }
    });
  });

  it('keeps stock check read-only and includes the API-gap warning', async () => {
    const { configHome, program, calls, outputs } = await createHarness();
    await program.parseAsync(['node', 'bmall', '--config-home', configHome, '--profile', 'unit', '--env', 'local', '--json', 'stock', 'check', '--sku-code', 'SKU001', '--company-id', 'C002']);

    expect(calls[0]).toMatchObject({
      method: 'POST',
      path: 'product/mini/item/spec/list',
      body: { skuCode: 'SKU001', companyId: 'C002' }
    });
    expect(outputs[0]).toMatchObject({
      ok: true,
      warnings: ['库存检查暂映射到商品规格聚合接口；独立库存 API 待后端确认']
    });
  });

  it('blocks cart mutations without confirm and reason', async () => {
    const { configHome, program, calls } = await createHarness();
    await expect(
      program.parseAsync(['node', 'bmall', '--config-home', configHome, '--profile', 'unit', '--env', 'local', '--json', 'cart', 'add', '--sku-code', 'SKU001', '--qty', '1'])
    ).rejects.toThrow('Cart add requires --confirm and --reason');
    expect(calls).toHaveLength(0);
  });

  it('previews cart mutations in dry-run mode without calling the API', async () => {
    const { configHome, program, calls, outputs } = await createHarness();
    await program.parseAsync(['node', 'bmall', '--config-home', configHome, '--profile', 'unit', '--env', 'local', '--json', 'cart', 'add', '--sku-code', 'SKU001', '--qty', '1', '--dry-run']);

    expect(calls).toHaveLength(0);
    expect(outputs[0]).toMatchObject({
      dryRun: true,
      wouldCall: 'b2b/shopping/cart/item/addShopCartItem',
      payload: { skuCode: 'SKU001', qty: 1 }
    });
  });

  it('calls order read API and blocks cancel without reason', async () => {
    const { configHome, program, calls } = await createHarness();
    await program.parseAsync(['node', 'bmall', '--config-home', configHome, '--profile', 'unit', '--env', 'local', '--json', 'order', 'get', '--order-no', 'DH001']);
    expect(calls[0]).toMatchObject({
      method: 'POST',
      path: 'b2b/sales/order/takeById',
      body: { orderNo: 'DH001', companyId: 'C001' }
    });

    await expect(
      program.parseAsync(['node', 'bmall', '--config-home', configHome, '--profile', 'unit', '--env', 'local', '--json', 'order', 'cancel', '--order-no', 'DH001', '--confirm'])
    ).rejects.toThrow('Order cancel requires --confirm and --reason');
  });
});
