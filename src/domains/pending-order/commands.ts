import { Command } from 'commander';
import { readFileSync } from 'node:fs';
import { registerAdapterCommand } from '../order/commands.js';
import { assertWriteGate, auditOperation, dryRunPlan, type WriteGateOptions } from '../ops/safety.js';

type ApiClient = { request: (method: string, path: string, body?: unknown) => Promise<unknown> };

const endpoints = {
  sourceType: 'b2b/pendingReviewOrder/mini/orderSourceType/check',
  miniDetail: 'b2b/pendingReviewOrder/mini/detail',
  middleDetail: 'b2b/pendingReviewOrder/order/detail',
  reviewCheck: 'b2b/pendingReviewOrder/checkPendingReviewOrder',
  review: 'b2b/pendingReviewOrder/submitPendingOrder',
  batchReview: 'b2b/pendingReviewOrder/bathSubmitPendingOrder',
  miniReview: 'b2b/pendingReviewOrder/mini/submitPass',
  cancel: 'b2b/pendingReviewOrder/mini/cancel',
};

export const pendingOrderEndpoints = endpoints;

export function registerPendingOrderCommands(program: Command, output: (payload: unknown) => void, client?: ApiClient, configHome?: string | (() => string | undefined)): void {
  const pending = registerAdapterCommand(program, 'pending-order', 'pending-review', output);
  pending.command('source-type').requiredOption('--order-id <orderId>').option('--json').action(async (opts) => {
    output(await requireClient(client).request('POST', endpoints.sourceType, { orderId: opts.orderId }));
  });
  pending.command('detail').requiredOption('--order-id <orderId>').option('--middle-ground').option('--json').action(async (opts) => {
    output(await requireClient(client).request('POST', opts.middleGround ? endpoints.middleDetail : endpoints.miniDetail, { orderId: opts.orderId }));
  });
  pending.command('review-check').requiredOption('--file <file>').option('--json').action(async (opts) => {
    const body = { pendingReviewOrderSubmitReqList: [readJson(opts.file)] };
    output(await requireClient(client).request('POST', endpoints.reviewCheck, body));
  });
  pending.command('review').requiredOption('--file <file>').option('--dry-run').option('--confirm').option('--reason <reason>').option('--mini').option('--json').action(async (opts: WriteGateOptions & Record<string, unknown>) => {
    assertWriteGate(opts, 'write');
    const body = readJson(String(opts.file));
    const endpoint = opts.mini ? endpoints.miniReview : endpoints.review;
    if (opts.dryRun) {
      const result = dryRunPlan('pending-order.review', 1, [{ method: 'POST', endpoint, body }]);
      await auditOperation({ command: 'pending-order.review', access: 'write', args: body, configHome: typeof configHome === 'function' ? configHome() : configHome }, 'dry-run');
      output(result);
      return;
    }
    const result = await requireClient(client).request('POST', endpoint, body);
    await auditOperation({ command: 'pending-order.review', access: 'write', args: body, configHome: typeof configHome === 'function' ? configHome() : configHome }, 'ok');
    output(result);
  });
  pending.command('cancel').requiredOption('--order-id <orderId>').option('--dry-run').option('--confirm').option('--reason <reason>').option('--json').action(async (opts: WriteGateOptions & Record<string, unknown>) => {
    assertWriteGate(opts, 'destructive');
    const body = { orderId: Number(opts.orderId), cancelReason: opts.reason };
    if (opts.dryRun) {
      output(dryRunPlan('pending-order.cancel', 1, [{ method: 'POST', endpoint: endpoints.cancel, body }]));
      return;
    }
    output(await requireClient(client).request('POST', endpoints.cancel, body));
  });
}

function requireClient(client?: ApiClient): ApiClient {
  if (!client) throw new Error('PENDING_ORDER_COMMAND_REQUIRES_API_CLIENT');
  return client;
}

function readJson(file: string): Record<string, unknown> {
  const parsed = JSON.parse(readFileSync(file, 'utf8'));
  return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed as Record<string, unknown> : { value: parsed };
}
