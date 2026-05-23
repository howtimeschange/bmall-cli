import { BaseOrderFlowAdapter } from './base.js';
import type { PermissionRequirement } from '../types.js';

export class SupplyPresaleAdapter extends BaseOrderFlowAdapter {
  type = 'supply-presale' as const;
  displayName = '柔供预售订单';
  endpoints = {
    currentConfig: 'activity/mini/supply/presale/cfg/current',
    activity: 'activity/mini/supply/presale/activity/query/detail',
    items: 'activity/mini/supply/presale/item/page',
    itemDetail: 'activity/mini/supply/presale/activity/itemRel/getItemDetail',
    itemTip: 'activity/supply/presale/itemCfg/getItemToptipShowFlag',
    add: 'activity/mini/supply/presale/order/save',
    cart: 'activity/mini/supply/presale/order/query/waiting/order',
    updateQty: 'activity/mini/supply/presale/order/updateQtyById',
    failureItems: 'activity/mini/supply/presale/order/query/failure/item',
    clearFailureItems: 'activity/mini/supply/presale/order/clear/failure/item',
    validate: 'activity/mini/supply/presale/order/checkItems',
    canSubmitItems: 'activity/mini/supply/presale/order/canBeSubmitItems',
    applyMultiple: 'activity/mini/supply/presale/order/checkItems/applyMultiple',
    deleteCheck: 'activity/mini/supply/presale/order/checkItems/delete',
    submit: 'activity/mini/supply/presale/order/submit',
    list: 'activity/mini/supply/presale/order/query/order/list',
    detail: 'activity/mini/supply/presale/order/query/order/detail',
    detailItems: 'activity/mini/supply/presale/order/query/order/detail/item',
    cancel: 'activity/mini/supply/presale/order/cancel',
  };

  requiredPermissions(): PermissionRequirement[] {
    return [
      { funCode: 'b2b:supply:presale:add', name: '柔供加购', requiredFor: 'submit' },
      { funCode: 'b2b:supply:presale:submit', name: '柔供提交', requiredFor: 'submit' },
    ];
  }
}
