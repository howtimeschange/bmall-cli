import { BaseOrderFlowAdapter } from './base.js';
import type { PermissionRequirement } from '../types.js';

export class PickupAdapter extends BaseOrderFlowAdapter {
  type = 'pickup' as const;
  displayName = '预售提货单';
  endpoints = {
    list: 'activity/pickup/order/list',
    detail: 'activity/pickup/order/detail',
    items: 'activity/pickup/order/item/list',
    relatedPresale: 'activity/pickup/orderRel/selectPresaleOrders',
    validate: 'activity/pickup/order/check',
    submit: 'activity/pickup/order/submit',
    refuse: 'activity/pickup/order/refuse',
    relPickupOrders: 'activity/pickup/orderRel/selectPickupOrders',
  };

  requiredPermissions(): PermissionRequirement[] {
    return [{ funCode: 'new:store:order:pickup', name: '提货下单', requiredFor: 'submit' }];
  }
}
