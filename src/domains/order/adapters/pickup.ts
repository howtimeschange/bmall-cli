import { BaseOrderFlowAdapter } from './base.js';
import type { PermissionRequirement } from '../types.js';

export class PickupAdapter extends BaseOrderFlowAdapter {
  type = 'pickup' as const;
  displayName = '预售提货单';
  endpoints = {
    list: 'activity/pickup/order/mgd/page',
    detail: 'activity/pickup/order/mgd/detail',
    items: 'activity/pickup/order/mgd/selectPickupOrderSkus',
    add: 'activity/pickup/order/mgd/addPickupOrder',
    refuse: 'activity/pickup/order/mgd/refusePickupOrder',
    arrivalNoticePreview: 'activity/pickup/order/mgd/arrivalNotice/preview',
    arrivalNoticeSend: 'activity/pickup/order/mgd/arrivalNotice/send',
    miniList: 'activity/pickup/order/page',
    miniDetail: 'activity/pickup/order/detail',
    miniItems: 'activity/pickup/order/orderItems',
    miniItemsByGoPickup: 'activity/pickup/order/orderItemsByGoPickup',
    confirm: 'activity/pickup/order/confirm',
    confirmDetail: 'activity/pickup/order/orderConfirmDetail',
    subOrderList: 'activity/pickup/order/subOrderList',
    legacyList: 'activity/pickup/order/list',
    legacyDetail: 'activity/pickup/order/detail',
    legacyItems: 'activity/pickup/order/item/list',
    relatedPresale: 'activity/pickup/orderRel/selectPresaleOrders',
    validate: 'activity/pickup/order/check',
    submit: 'activity/pickup/order/submit',
    legacyRefuse: 'activity/pickup/order/refuse',
    relPickupOrders: 'activity/pickup/orderRel/selectPickupOrders',
  };

  requiredPermissions(): PermissionRequirement[] {
    return [{ funCode: 'new:store:order:pickup', name: '提货下单', requiredFor: 'submit' }];
  }
}
