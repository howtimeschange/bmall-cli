import { Command } from 'commander';
import { SessionStore } from '../../auth/session.js';
import type { GlobalOptions } from '../../auth/commands.js';
import { BmallCliError } from '../../core/errors.js';
import { ConfigManager } from '../../core/config.js';
import { BmallHttpClient, type BmallRequestOptions } from '../../core/http.js';
import { success } from '../../core/output.js';
import { dryRun } from '../../core/dry-run.js';

type ClientLike = { send<T = unknown>(opts: BmallRequestOptions): Promise<{ data?: T; requestId: string; durationMs: number }> };
type OutputFn = (payload: unknown) => void;

export interface CartCommandDeps {
  createClient?: (baseUrl: string, token: Awaited<ReturnType<SessionStore['require']>>) => ClientLike;
}

const endpoints = {
  list: 'b2b/shopping/cart/getShopCartResult',
  detailOfSelect: 'b2b/mall/shopCart/getShopCartDetailOfSelect',
  add: 'b2b/shopping/cart/item/addShopCartItem',
  addMany: 'b2b/shopping/cart/item/addShopCartItems',
  remove: 'b2b/shopping/cart/item/delete',
  clear: 'b2b/shopping/cart/item/clear',
};

export function registerCartCommands(program: Command, getGlobals: () => GlobalOptions, output: OutputFn, deps: CartCommandDeps = {}): void {
  const cmd = program.command('cart').description('Shopping cart commands');
  cmd.command('list').option('--company-id <companyId>').option('--json').action(async (opts) => {
    await callApi(getGlobals(), output, deps, endpoints.list, { companyId: opts.companyId });
  });
  cmd.command('add').requiredOption('--sku-code <skuCode>').requiredOption('--qty <qty>').option('--company-id <companyId>').option('--confirm').option('--dry-run').option('--reason <reason>').option('--json').action(async (opts) => {
    if (opts.dryRun) {
      output(dryRun(endpoints.add, { skuCode: opts.skuCode, qty: Number(opts.qty), companyId: opts.companyId }));
      return;
    }
    requireConfirmReason(opts, 'Cart add');
    await callApi(getGlobals(), output, deps, endpoints.add, {
      skuCode: opts.skuCode,
      qty: Number(opts.qty),
      companyId: opts.companyId,
      reason: opts.reason
    });
  });
  cmd.command('remove').requiredOption('--sku-code <skuCode>').option('--company-id <companyId>').option('--confirm').option('--dry-run').option('--reason <reason>').option('--json').action(async (opts) => {
    if (opts.dryRun) {
      output(dryRun(endpoints.remove, { skuCode: opts.skuCode, companyId: opts.companyId }));
      return;
    }
    requireConfirmReason(opts, 'Cart remove');
    await callApi(getGlobals(), output, deps, endpoints.remove, {
      skuCode: opts.skuCode,
      companyId: opts.companyId,
      reason: opts.reason
    });
  });
  cmd.command('clear').option('--company-id <companyId>').option('--confirm').option('--dry-run').option('--reason <reason>').option('--json').action(async (opts) => {
    if (opts.dryRun) {
      output(dryRun(endpoints.clear, { companyId: opts.companyId }));
      return;
    }
    requireConfirmReason(opts, 'Cart clear');
    await callApi(getGlobals(), output, deps, endpoints.clear, {
      companyId: opts.companyId,
      reason: opts.reason
    });
  });
}

export const cartEndpoints = endpoints;

async function callApi(globals: GlobalOptions, output: OutputFn, deps: CartCommandDeps, path: string, body: Record<string, unknown>): Promise<void> {
  const resolved = await new ConfigManager(globals.configHome).resolve(globals);
  const bundle = await new SessionStore(undefined, globals.configHome).require(resolved.profile);
  const client = deps.createClient?.(resolved.baseUrl, bundle) ?? new BmallHttpClient(resolved.baseUrl, bundle);
  const response = await client.send({
    method: 'POST',
    path,
    body: withCompany(body, resolved.profileConfig.companyId),
    auth: { injectAuthToBody: true }
  });
  output(success({ ...resolved, requestId: response.requestId }, response.data, { source: 'api', durationMs: response.durationMs }));
}

function requireConfirmReason(opts: { confirm?: boolean; reason?: string }, action: string): void {
  if (!opts.confirm || !opts.reason) {
    throw new BmallCliError('INPUT_ERROR', `${action} requires --confirm and --reason`, {
      recover: 'Read with `cart list` first. Only execute mutations when the confirm/reason policy is complete.'
    });
  }
}

function withCompany(body: Record<string, unknown>, defaultCompanyId?: string): Record<string, unknown> {
  const cleaned = Object.fromEntries(Object.entries(body).filter(([, value]) => value !== undefined && value !== ''));
  if (!cleaned.companyId && defaultCompanyId) cleaned.companyId = defaultCompanyId;
  return cleaned;
}
