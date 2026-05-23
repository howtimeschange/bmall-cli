import type { BmallOrderType } from '../../../schemas/order.js';
import type { OrderFlowAdapter } from '../types.js';
import { MidPresaleAdapter } from './mid-presale.js';
import { MultiStoreReplenishmentAdapter } from './multi-store.js';
import { NewStoreAdapter } from './new-store.js';
import { PendingReviewAdapter } from './pending-review.js';
import { PickupAdapter } from './pickup.js';
import { ReplenishmentAdapter } from './replenishment.js';
import { SupplyPresaleAdapter } from './supply-presale.js';

const adapters: OrderFlowAdapter[] = [
  new ReplenishmentAdapter(),
  new MultiStoreReplenishmentAdapter(),
  new PendingReviewAdapter(),
  new MidPresaleAdapter(),
  new SupplyPresaleAdapter(),
  new PickupAdapter(),
  new NewStoreAdapter(),
];

export function getOrderAdapter(type: BmallOrderType): OrderFlowAdapter {
  const adapter = adapters.find((item) => item.type === type);
  if (adapter) return adapter;
  if (type === 'one-piece-pending') return new PendingReviewAdapter();
  if (type === 'intellect-ai-replenishment' || type === 'sales-repurchase') return new ReplenishmentAdapter();
  throw new Error(`UNSUPPORTED_ORDER_TYPE: ${type}`);
}

export function listOrderAdapters(): OrderFlowAdapter[] {
  return [...adapters];
}
