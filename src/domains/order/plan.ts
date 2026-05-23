import { readFileSync } from 'node:fs';
import { parseOrderDraft } from '../../schemas/order.js';
import { getOrderAdapter } from './adapters/index.js';
import type { AdapterRuntime } from './types.js';

export async function planOrderFromFile(file: string, runtime?: AdapterRuntime) {
  const draft = parseOrderDraft(JSON.parse(readFileSync(file, 'utf8')));
  return getOrderAdapter(draft.orderType).buildPlan(draft, runtime);
}

export async function planOrderDraft(input: unknown, runtime?: AdapterRuntime) {
  const draft = parseOrderDraft(input);
  return getOrderAdapter(draft.orderType).buildPlan(draft, runtime);
}
