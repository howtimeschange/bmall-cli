import { ORDER_TYPE_MANIFEST, getOrderTypeManifest } from './manifest.js';
import { getOrderAdapter } from './adapters/index.js';
import { buildRuleChainSkeleton } from './rule-chain.js';
import type { BmallOrderType } from '../../schemas/order.js';

export function listOrderTypes() {
  return ORDER_TYPE_MANIFEST;
}

export function inspectOrderFlow(type: BmallOrderType) {
  const manifest = getOrderTypeManifest(type);
  const adapter = getOrderAdapter(type);
  return {
    orderType: type,
    displayName: manifest?.displayName ?? adapter.displayName,
    browser: false,
    canRead: manifest?.canRead ?? true,
    canSubmit: manifest?.canSubmit ?? false,
    requiredPermissions: manifest?.requiredPermissions ?? adapter.requiredPermissions(),
    endpoints: adapter.endpoints,
    ruleChain: buildRuleChainSkeleton({
      'order-type': { status: manifest ? 'pass' : 'warning', summary: manifest ? '订单类型已在 manifest 注册' : '订单类型未在 manifest 注册' },
    }),
  };
}
