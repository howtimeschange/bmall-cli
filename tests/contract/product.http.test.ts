import { describe, expect, it } from 'vitest';
import { productEndpoints } from '../../src/domains/product/commands.js';

describe('product endpoint contract', () => {
  it('maps product commands to observed backend endpoints', () => {
    expect(productEndpoints.search).toBe('product/itemSearch/search');
    expect(productEndpoints.sku).toBe('product/mini/item/spec/list');
    expect(productEndpoints.sizeRatio).toBe('product/item/calSizeRatioQty');
    expect(productEndpoints.labels).toBe('product/activitylabel/getActivityLabelOfConditions');
  });
});
