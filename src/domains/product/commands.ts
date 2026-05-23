import { Command } from 'commander';
import { SessionStore } from '../../auth/session.js';
import type { GlobalOptions } from '../../auth/commands.js';
import { ConfigManager } from '../../core/config.js';
import { BmallHttpClient, type BmallRequestOptions } from '../../core/http.js';
import { success } from '../../core/output.js';

type OutputFn = (payload: unknown) => void;
type ClientLike = { send<T = unknown>(opts: BmallRequestOptions): Promise<{ data?: T; requestId: string; durationMs: number }> };

export interface CustomerCommandDeps {
  createClient?: (baseUrl: string, token: Awaited<ReturnType<SessionStore['require']>>) => ClientLike;
}

const endpoints = {
  search: 'product/itemSearch/search',
  get: 'product/itemSearch/detail',
  sku: 'product/mini/item/spec/list',
  sizeRatio: 'product/item/calSizeRatioQty',
  labels: 'product/activitylabel/getActivityLabelOfConditions',
};

export function registerProductCommands(program: Command, getGlobals: () => GlobalOptions, output: OutputFn, deps: CustomerCommandDeps = {}): void {
  const cmd = program.command('product').description('Product search and SKU commands');
  cmd.command('search').option('--keyword <keyword>').option('--limit <limit>', 'limit', '20').option('--company-id <companyId>').option('--json').action(async (opts) => {
    await callApi(getGlobals(), output, deps, endpoints.search, {
      keyword: opts.keyword,
      limit: Number(opts.limit),
      companyId: opts.companyId
    });
  });
  cmd.command('get').option('--item-code <itemCode>').option('--item-id <itemId>').option('--company-id <companyId>').option('--json').action(async (opts) => {
    await callApi(getGlobals(), output, deps, endpoints.get, {
      itemCode: opts.itemCode,
      itemId: opts.itemId,
      companyId: opts.companyId
    });
  });
  cmd.command('sku').option('--skc-code <skcCode>').option('--company-id <companyId>').option('--json').action(async (opts) => {
    await callApi(getGlobals(), output, deps, endpoints.sku, {
      skcCode: opts.skcCode,
      companyId: opts.companyId
    });
  });
  cmd.command('size-ratio').requiredOption('--skc-code <skcCode>').requiredOption('--quantity <quantity>').option('--company-id <companyId>').option('--json').action(async (opts) => {
    await callApi(getGlobals(), output, deps, endpoints.sizeRatio, {
      skcCode: opts.skcCode,
      quantity: Number(opts.quantity),
      companyId: opts.companyId
    });
  });
  cmd.command('labels').option('--item-code <itemCode>').option('--company-id <companyId>').option('--json').action(async (opts) => {
    await callApi(getGlobals(), output, deps, endpoints.labels, {
      itemCode: opts.itemCode,
      companyId: opts.companyId
    });
  });
}

export const productEndpoints = endpoints;

async function callApi(globals: GlobalOptions, output: OutputFn, deps: CustomerCommandDeps, path: string, body: Record<string, unknown>): Promise<void> {
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

function withCompany(body: Record<string, unknown>, defaultCompanyId?: string): Record<string, unknown> {
  const cleaned = Object.fromEntries(Object.entries(body).filter(([, value]) => value !== undefined && value !== ''));
  if (!cleaned.companyId && defaultCompanyId) cleaned.companyId = defaultCompanyId;
  return cleaned;
}
