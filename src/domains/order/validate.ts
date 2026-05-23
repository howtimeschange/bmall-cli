import type { OrderPlan } from '../../schemas/order.js';
import { getOrderAdapter } from './adapters/index.js';
import type { AdapterRuntime } from './types.js';

export async function validateOrderPlan(plan: OrderPlan, runtime?: AdapterRuntime) {
  return getOrderAdapter(plan.orderType).validate(plan, runtime);
}
