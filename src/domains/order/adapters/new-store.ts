import { BaseOrderFlowAdapter } from './base.js';
import type { PermissionRequirement } from '../types.js';

export class NewStoreAdapter extends BaseOrderFlowAdapter {
  type = 'new-store' as const;
  displayName = '新店订单';
  endpoints = {
    list: 'b2b/new/store/order/list',
    detail: 'b2b/new/store/order/detail',
    items: 'b2b/new/store/order/items',
    checkPickupGoods: 'b2b/new/store/order/checkPickupGoods',
    confirmPlan: 'b2b/new/store/order/orderConfirm',
    validate: 'b2b/new/store/order/orderPreCheck',
    submit: 'b2b/new/store/order/pick/b2bOrder/add',
    relationOrders: 'b2b/new/store/order/relation/orders',
  };

  requiredPermissions(): PermissionRequirement[] {
    return [{ funCode: 'new:store:order:pickup', name: '新店提货', requiredFor: 'submit' }];
  }
}
