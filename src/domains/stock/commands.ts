import { Command } from 'commander';
import { SessionStore } from '../../auth/session.js';
import type { GlobalOptions } from '../../auth/commands.js';
import { ConfigManager } from '../../core/config.js';
import { BmallHttpClient, type BmallRequestOptions } from '../../core/http.js';
import { success } from '../../core/output.js';

type ClientLike = { send<T = unknown>(opts: BmallRequestOptions): Promise<{ data?: T; requestId: string; durationMs: number }> };
type OutputFn = (payload: unknown) => void;

export interface StockCommandDeps {
  createClient?: (baseUrl: string, token: Awaited<ReturnType<SessionStore['require']>>) => ClientLike;
}

export const stockEndpoints = {
  check: 'product/mini/item/spec/list'
};

const stockWarning = '库存检查暂映射到商品规格聚合接口；独立库存 API 待后端确认';

export function registerStockCommands(program: Command, getGlobals: () => GlobalOptions, output: OutputFn, deps: StockCommandDeps = {}): void {
  program
    .command('stock')
    .description('Stock commands')
    .command('check')
    .requiredOption('--sku-code <skuCode>')
    .requiredOption('--company-id <companyId>')
    .option('--json')
    .action(async (opts) => {
      const globals = getGlobals();
      const resolved = await new ConfigManager(globals.configHome).resolve(globals);
      const bundle = await new SessionStore(undefined, globals.configHome).require(resolved.profile);
      const client = deps.createClient?.(resolved.baseUrl, bundle) ?? new BmallHttpClient(resolved.baseUrl, bundle);
      const response = await client.send({
        method: 'POST',
        path: stockEndpoints.check,
        body: { skuCode: opts.skuCode, companyId: opts.companyId },
        auth: { injectAuthToBody: true }
      });
      const envelope = success({ ...resolved, requestId: response.requestId }, response.data, { source: 'api', durationMs: response.durationMs });
      envelope.warnings.push(stockWarning);
      output(envelope);
    });
}
