import { BaseOrderFlowAdapter } from './base.js';
import type { PermissionRequirement } from '../types.js';

export class ReplenishmentAdapter extends BaseOrderFlowAdapter {
  type = 'replenishment' as const;
  displayName = '补货订单';
  endpoints = {
    plan: 'b2b/order/new/itemDetail/confirmOrder',
    validate: 'b2b/order/new/itemDetail/confirmOrder/preCheck',
    submit: 'b2b/order/new/itemDetail/confirmOrder/submit',
    legacyCartSubmit: 'b2b/sales/order/add',
    list: 'b2b/order/new/appOrderList',
    detail: 'b2b/sales/order/takeById',
    cancel: 'b2b/order/new/cancel',
    delivery: 'b2b/order/new/delivery/list',
    invoice: 'b2b/order/new/invoice/list',
  };

  requiredPermissions(): PermissionRequirement[] {
    return [{ funCode: 'b2b:order:create', name: '创建补货订单', requiredFor: 'submit' }];
  }
}
