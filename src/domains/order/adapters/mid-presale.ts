import { BaseOrderFlowAdapter } from './base.js';
import type { PermissionRequirement } from '../types.js';

export class MidPresaleAdapter extends BaseOrderFlowAdapter {
  type = 'mid-presale' as const;
  displayName = '中短期订单';
  endpoints = {
    activity: 'activity/mini/presaleActivity/detail',
    companies: 'activity/mini/presaleActivity/companyList',
    companyWhiteRole: 'activity/mini/presaleActivity/queryCompanyWhiteRole',
    changeCompanyCheck: 'activity/mini/presaleActivity/changeCompany/check',
    models: 'activity/mini/presaleActivity/orderModelList',
    rules: 'activity/mini/presaleActivity/rules/byOrderModel',
    changeModelCheck: 'activity/mini/presaleActivity/changeModel/check',
    itemsAll: 'activity/mini/presaleActivity/items/all',
    itemsByRule: 'activity/mini/presaleActivity/items/byOrderRule',
    specList: 'activity/mini/presaleActivity/specList',
    ruleStatus: 'activity/mini/presaleActivity/calculateRuleStandard',
    plan: 'activity/mini/presaleActivity/confirm/items',
    validate: 'activity/mini/presaleActivity/submit/check',
    waitSubmitCheck: 'activity/presaleOrder/mini/order/waitSubmit/check',
    submit: 'activity/presaleOrder/add',
    list: 'activity/presaleOrder/list',
    detail: 'activity/presaleOrder/detailById',
    itemsByOrderId: 'activity/mini/presaleActivity/queryItems/byOrderId',
    lastWaitOrder: 'activity/presaleOrder/mini/last/wait/order',
    pickupList: 'activity/pickup/orderRel/selectPickupOrders',
  };

  requiredPermissions(): PermissionRequirement[] {
    return [{ funCode: 'mini:presale:order:save', name: '中短期下单', requiredFor: 'submit' }];
  }
}
