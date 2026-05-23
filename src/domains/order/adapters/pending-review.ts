import { BaseOrderFlowAdapter } from './base.js';
import type { PermissionRequirement } from '../types.js';

export class PendingReviewAdapter extends BaseOrderFlowAdapter {
  type = 'pending-review' as const;
  displayName = '待审核订单';
  endpoints = {
    plan: 'b2b/shopping/cart/order/getWarning',
    validate: 'b2b/mall/shopCart/getShopCartDetailOfSelect',
    submit: 'b2b/order/pending/submit',
    sourceType: 'b2b/order/pending/source/type',
    list: 'b2b/order/pending/list',
    detail: 'b2b/order/pending/detail',
  };

  requiredPermissions(): PermissionRequirement[] {
    return [{ funCode: 'pending:order:create', name: '创建待审核单', requiredFor: 'submit' }];
  }
}
