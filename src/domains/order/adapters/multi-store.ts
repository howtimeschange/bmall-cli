import { BaseOrderFlowAdapter } from './base.js';
import type { PermissionRequirement } from '../types.js';

export class MultiStoreReplenishmentAdapter extends BaseOrderFlowAdapter {
  type = 'multi-store-replenishment' as const;
  displayName = '多门店补货订单';
  endpoints = {
    plan: 'b2b/order/new/multiStoreOrder/show',
    validate: 'b2b/order/new/multiStoreOrder/checkAdd',
    submit: 'b2b/order/new/multiStoreOrder/add',
    import: 'file/order/multiStoreOrder/import',
    export: 'file/order/multiStoreOrder/export',
  };

  requiredPermissions(): PermissionRequirement[] {
    return [
      { funCode: 'supply:multiStoreOrder:booking', name: '多门店订货', requiredFor: 'submit' },
      { funCode: 'b2b:order:multiSotreOrder:add', name: '新增多门店订单', requiredFor: 'submit' },
    ];
  }
}
