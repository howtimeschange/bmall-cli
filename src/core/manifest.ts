export interface CommandManifestEntry {
  site: 'bmall';
  name: string;
  description: string;
  audience: 'customer' | 'ops' | 'core';
  access: 'read' | 'write' | 'destructive' | 'financial';
  domain: string;
  strategy: 'api-token' | 'api-login' | 'manual-token-import' | 'none';
  browser: boolean;
  loginBootstrap?: 'system-browser';
  args: Array<{ name: string; type: string; required?: boolean; help?: string }>;
  columns: string[];
}

type EntryInput = Omit<CommandManifestEntry, 'site' | 'domain' | 'browser' | 'args' | 'columns'> &
  Partial<Pick<CommandManifestEntry, 'domain' | 'browser' | 'args' | 'columns'>>;

const domain = 'bmall.semirapp.com';

function entry(input: EntryInput): CommandManifestEntry {
  return {
    site: 'bmall',
    domain,
    browser: false,
    args: [],
    columns: [],
    ...input,
  };
}

const orderColumns = ['orderType', 'status', 'blockingIssues', 'warnings', 'nextActions'];
const readToken = 'api-token' as const;

export const COMMAND_MANIFEST: CommandManifestEntry[] = [
  entry({ name: 'version', description: 'Print CLI version', audience: 'core', access: 'read', strategy: 'none', columns: ['version', 'node'] }),
  entry({ name: 'doctor', description: 'Check local CLI profile and environment', audience: 'core', access: 'read', strategy: 'none', columns: ['profile', 'env', 'baseUrl'] }),
  entry({ name: 'profile.list', description: 'List CLI profiles', audience: 'core', access: 'read', strategy: 'none', columns: ['activeProfile', 'profiles'] }),
  entry({ name: 'profile.use', description: 'Switch active CLI profile', audience: 'core', access: 'write', strategy: 'none', args: [{ name: 'name', type: 'str', required: true }], columns: ['profile', 'env'] }),
  entry({ name: 'profile.set-env', description: 'Configure a base URL for an environment', audience: 'core', access: 'write', strategy: 'none', args: [{ name: 'env', type: 'str', required: true }, { name: 'base-url', type: 'url', required: true }], columns: ['env', 'baseUrl'] }),
  entry({ name: 'auth.import-token', description: 'Import a token or token bundle into a CLI profile', audience: 'core', access: 'read', strategy: 'manual-token-import', args: [{ name: 'token', type: 'str' }, { name: 'bundle', type: 'json' }, { name: 'from-file', type: 'path' }], columns: ['profile', 'env', 'userId', 'groupId'] }),
  entry({ name: 'auth.login.browser', description: 'Start a local loopback receiver for browser-assisted login', audience: 'core', access: 'read', strategy: 'api-login', loginBootstrap: 'system-browser', args: [{ name: 'browser', type: 'bool' }, { name: 'no-open', type: 'bool' }], columns: ['profile', 'env', 'callbackUrl'] }),
  entry({ name: 'auth.doctor', description: 'Check saved token and server identity', audience: 'core', access: 'read', strategy: readToken, columns: ['hasToken', 'serverUser'] }),
  entry({ name: 'auth.renew', description: 'Renew the saved token through manage/app/token/renewal', audience: 'core', access: 'write', strategy: readToken, columns: ['profile', 'env', 'bundle'] }),
  entry({ name: 'auth.logout', description: 'Delete saved credentials for a profile', audience: 'core', access: 'write', strategy: readToken, columns: ['loggedOut', 'profile'] }),
  entry({ name: 'agent.explain-error', description: 'Not implemented in this CLI slice; use docs/agent-usage.md for local troubleshooting guidance', audience: 'core', access: 'read', strategy: 'none', columns: ['unsupported', 'message'] }),
  entry({ name: 'whoami', description: 'Show current Bmall identity', audience: 'core', access: 'read', strategy: readToken, columns: ['bundle', 'serverUser'] }),
  entry({ name: 'company.list', description: 'List companies available to the current token', audience: 'customer', access: 'read', strategy: readToken, columns: ['companyId', 'companyName', 'groupId'] }),
  entry({ name: 'company.use', description: 'Set active company context in the profile', audience: 'customer', access: 'write', strategy: readToken, args: [{ name: 'company-id', type: 'str', required: true }], columns: ['profile', 'companyId'] }),
  entry({ name: 'permission.list', description: 'List current token permission codes', audience: 'ops', access: 'read', strategy: readToken, columns: ['funCode'] }),
  entry({ name: 'permission.check', description: 'Check a permission code against token bundle permissions and menu data', audience: 'ops', access: 'read', strategy: readToken, args: [{ name: 'fun-code', type: 'str', required: true }], columns: ['funCode', 'allowed'] }),

  entry({ name: 'product.search', description: 'Search products by keyword or item filters', audience: 'customer', access: 'read', strategy: readToken, args: [{ name: 'keyword', type: 'str' }, { name: 'limit', type: 'number' }], columns: ['itemCode', 'itemName', 'skcCode'] }),
  entry({ name: 'product.get', description: 'Read product detail', audience: 'customer', access: 'read', strategy: readToken, args: [{ name: 'item-code', type: 'str' }], columns: ['itemCode', 'itemName'] }),
  entry({ name: 'product.sku', description: 'Read product SKU/spec matrix', audience: 'customer', access: 'read', strategy: readToken, args: [{ name: 'skc-code', type: 'str' }], columns: ['skuCode', 'specId', 'size', 'color'] }),
  entry({ name: 'product.size-ratio', description: 'Calculate size-ratio quantity suggestions', audience: 'customer', access: 'read', strategy: readToken, args: [{ name: 'skc-code', type: 'str', required: true }, { name: 'quantity', type: 'number', required: true }], columns: ['skuCode', 'quantity'] }),
  entry({ name: 'product.labels', description: 'Read product activity labels', audience: 'customer', access: 'read', strategy: readToken, columns: ['labelCode', 'labelName'] }),
  entry({ name: 'stock.check', description: 'Check stock availability for SKU or item', audience: 'customer', access: 'read', strategy: readToken, args: [{ name: 'sku-code', type: 'str' }], columns: ['skuCode', 'availableQty'] }),
  entry({ name: 'cart.list', description: 'Read shopping cart', audience: 'customer', access: 'read', strategy: readToken, columns: ['skuCode', 'quantity'] }),
  entry({ name: 'cart.add', description: 'Add SKU to cart', audience: 'customer', access: 'write', strategy: readToken, args: [{ name: 'sku-code', type: 'str', required: true }, { name: 'qty', type: 'number', required: true }], columns: ['endpoint', 'body'] }),
  entry({ name: 'cart.remove', description: 'Remove SKU from cart with confirmation', audience: 'customer', access: 'destructive', strategy: readToken, args: [{ name: 'sku-code', type: 'str', required: true }, { name: 'confirm', type: 'bool' }], columns: ['blocked'] }),
  entry({ name: 'cart.clear', description: 'Clear cart with confirmation', audience: 'customer', access: 'destructive', strategy: readToken, args: [{ name: 'confirm', type: 'bool' }], columns: ['blocked'] }),

  entry({ name: 'order-type.list', description: 'List supported Bmall order types', audience: 'customer', access: 'read', strategy: readToken, columns: ['type', 'displayName', 'canSubmit', 'browser'] }),
  entry({ name: 'order-flow.inspect', description: 'Inspect adapter endpoints and rule skeleton for an order type', audience: 'customer', access: 'read', strategy: readToken, args: [{ name: 'type', type: 'str', required: true }], columns: orderColumns }),
  entry({ name: 'order-rule.explain', description: 'Explain order rule-chain phases', audience: 'customer', access: 'read', strategy: readToken, args: [{ name: 'type', type: 'str', required: true }], columns: ['phase', 'status', 'summary'] }),
  entry({ name: 'order.plan', description: 'Build a deterministic order plan from a JSON draft', audience: 'customer', access: 'read', strategy: readToken, args: [{ name: 'file', type: 'path', required: true }], columns: orderColumns }),
  entry({ name: 'order.validate', description: 'Validate an order draft without submitting', audience: 'customer', access: 'read', strategy: readToken, args: [{ name: 'file', type: 'path', required: true }], columns: orderColumns }),
  entry({ name: 'order.submit', description: 'Submit an order draft only when an API runtime is wired; offline confirmed submits are blocked', audience: 'customer', access: 'financial', strategy: readToken, args: [{ name: 'file', type: 'path', required: true }, { name: 'confirm', type: 'bool' }, { name: 'dry-run', type: 'bool' }], columns: ['submitted', 'orderNo', 'status', 'message'] }),
  entry({ name: 'order.list', description: 'List orders', audience: 'customer', access: 'read', strategy: readToken, columns: ['orderNo', 'status'] }),
  entry({ name: 'order.get', description: 'Read one order', audience: 'customer', access: 'read', strategy: readToken, args: [{ name: 'order-no', type: 'str', required: true }], columns: ['orderNo', 'status'] }),
  entry({ name: 'order.cancel', description: 'Cancel an order with confirmation', audience: 'customer', access: 'destructive', strategy: readToken, args: [{ name: 'order-no', type: 'str', required: true }, { name: 'confirm', type: 'bool' }], columns: ['blocked'] }),
  entry({ name: 'order.delivery', description: 'Read order delivery information', audience: 'customer', access: 'read', strategy: readToken, columns: ['invoiceNo', 'deliveryStatus'] }),
  entry({ name: 'order.invoice', description: 'Read order invoice information', audience: 'customer', access: 'read', strategy: readToken, columns: ['invoiceNo', 'invoiceStatus'] }),

  ...['replenishment', 'multi-store-order'].flatMap((name) => [
    entry({ name: `${name}.plan`, description: `Build ${name} order plan`, audience: 'customer', access: 'read', strategy: readToken, args: [{ name: 'file', type: 'path', required: true }], columns: orderColumns }),
    entry({ name: `${name}.validate`, description: `Validate ${name} order`, audience: 'customer', access: 'read', strategy: readToken, args: [{ name: 'file', type: 'path', required: true }], columns: orderColumns }),
    entry({ name: `${name}.submit`, description: `Submit ${name} order only when an API runtime is wired`, audience: 'customer', access: 'financial', strategy: readToken, args: [{ name: 'file', type: 'path', required: true }, { name: 'confirm', type: 'bool' }, { name: 'dry-run', type: 'bool' }], columns: ['submitted', 'orderNo', 'status'] }),
    entry({ name: `${name}.diagnose`, description: `Diagnose ${name} order`, audience: 'ops', access: 'read', strategy: readToken, columns: orderColumns }),
  ]),

  ...['pending-order', 'mid-order', 'supply-presale', 'pickup', 'new-store-order'].flatMap((name) => [
    entry({ name: `${name}.validate`, description: `Validate ${name} flow`, audience: 'customer', access: 'read', strategy: readToken, columns: orderColumns }),
    entry({ name: `${name}.submit`, description: `Submit ${name} flow only when an API runtime is wired`, audience: 'customer', access: 'financial', strategy: readToken, args: [{ name: 'confirm', type: 'bool' }, { name: 'dry-run', type: 'bool' }], columns: ['submitted', 'status', 'message'] }),
    entry({ name: `${name}.diagnose`, description: `Diagnose ${name} flow`, audience: 'ops', access: 'read', strategy: readToken, columns: orderColumns }),
  ]),
  entry({ name: 'mid-order.activity', description: 'Read middle/short-term presale activity detail', audience: 'customer', access: 'read', strategy: readToken, args: [{ name: 'activity-id', type: 'str', required: true }], columns: ['activityId', 'activityName', 'status'] }),
  entry({ name: 'mid-order.companies', description: 'List companies available for a middle/short-term activity', audience: 'customer', access: 'read', strategy: readToken, args: [{ name: 'activity-id', type: 'str', required: true }], columns: ['companyId', 'companyName', 'whiteRole'] }),
  entry({ name: 'mid-order.models', description: 'List order models for a middle/short-term activity and company', audience: 'customer', access: 'read', strategy: readToken, args: [{ name: 'activity-id', type: 'str', required: true }, { name: 'company-id', type: 'str' }], columns: ['orderModelId', 'orderModelName'] }),
  entry({ name: 'mid-order.rules', description: 'List order rules for a middle/short-term order model', audience: 'customer', access: 'read', strategy: readToken, args: [{ name: 'activity-id', type: 'str', required: true }, { name: 'order-model-id', type: 'str', required: true }], columns: ['orderRuleId', 'ruleName', 'threshold'] }),
  entry({ name: 'mid-order.items', description: 'List products in a middle/short-term activity or model rule scope', audience: 'customer', access: 'read', strategy: readToken, args: [{ name: 'activity-id', type: 'str', required: true }, { name: 'order-model-id', type: 'str' }, { name: 'company-id', type: 'str' }], columns: ['itemCode', 'skcCode', 'skuCode'] }),
  entry({ name: 'mid-order.rule-status', description: 'Calculate middle/short-term order rule standard status from a draft', audience: 'customer', access: 'read', strategy: readToken, args: [{ name: 'file', type: 'path', required: true }], columns: ['phase', 'status', 'items'] }),
  entry({ name: 'mid-order.pickup-list', description: 'List pickup orders related to a middle/short-term presale order', audience: 'customer', access: 'read', strategy: readToken, args: [{ name: 'presale-order-id', type: 'str', required: true }], columns: ['pickupOrderId', 'status'] }),
  entry({ name: 'supply-presale.activity', description: 'Read supply presale activity detail', audience: 'customer', access: 'read', strategy: readToken, args: [{ name: 'activity-id', type: 'str' }], columns: ['activityId', 'activityName', 'status'] }),
  entry({ name: 'supply-presale.items', description: 'List supply presale products', audience: 'customer', access: 'read', strategy: readToken, args: [{ name: 'activity-id', type: 'str' }], columns: ['itemCode', 'skuCode', 'status'] }),
  entry({ name: 'supply-presale.cart', description: 'Read supply presale waiting order/cart', audience: 'customer', access: 'read', strategy: readToken, args: [{ name: 'activity-id', type: 'str' }, { name: 'company-id', type: 'str' }], columns: ['skuCode', 'quantity', 'status'] }),
  entry({ name: 'supply-presale.add', description: 'Add a SKU to a supply presale waiting order with write gate', audience: 'customer', access: 'write', strategy: readToken, args: [{ name: 'activity-id', type: 'str', required: true }, { name: 'sku-code', type: 'str', required: true }, { name: 'qty', type: 'number', required: true }, { name: 'dry-run', type: 'bool' }, { name: 'confirm', type: 'bool' }, { name: 'reason', type: 'str' }], columns: ['mode', 'apiCalls'] }),
  entry({ name: 'supply-presale.cancel', description: 'Cancel a supply presale order with destructive gate', audience: 'customer', access: 'destructive', strategy: readToken, args: [{ name: 'order-id', type: 'str', required: true }, { name: 'dry-run', type: 'bool' }, { name: 'confirm', type: 'bool' }, { name: 'reason', type: 'str' }], columns: ['mode', 'apiCalls'] }),
  entry({ name: 'pickup.list', description: 'List pickup orders', audience: 'customer', access: 'read', strategy: readToken, args: [{ name: 'status', type: 'str' }, { name: 'company-id', type: 'str' }], columns: ['pickupOrderId', 'status'] }),
  entry({ name: 'pickup.get', description: 'Read pickup order detail', audience: 'customer', access: 'read', strategy: readToken, args: [{ name: 'pickup-order-id', type: 'str', required: true }], columns: ['pickupOrderId', 'status'] }),
  entry({ name: 'pickup.items', description: 'Read pickup order items', audience: 'customer', access: 'read', strategy: readToken, args: [{ name: 'pickup-order-id', type: 'str', required: true }, { name: 'go-pickup', type: 'bool' }], columns: ['skuCode', 'availableQty', 'pickupQty'] }),
  entry({ name: 'pickup.related-presale', description: 'List presale orders related to a pickup order', audience: 'customer', access: 'read', strategy: readToken, args: [{ name: 'pickup-order-id', type: 'str', required: true }], columns: ['presaleOrderId', 'status'] }),
  entry({ name: 'pickup.refuse', description: 'Refuse a pickup order with destructive gate', audience: 'customer', access: 'destructive', strategy: readToken, args: [{ name: 'pickup-order-id', type: 'str', required: true }, { name: 'reason', type: 'str', required: true }, { name: 'dry-run', type: 'bool' }, { name: 'confirm', type: 'bool' }], columns: ['mode', 'apiCalls'] }),
  entry({ name: 'new-store-order.list', description: 'List new-store orders', audience: 'customer', access: 'read', strategy: readToken, args: [{ name: 'status', type: 'str' }, { name: 'company-id', type: 'str' }], columns: ['newStoreOrderId', 'status'] }),
  entry({ name: 'new-store-order.get', description: 'Read new-store order detail', audience: 'customer', access: 'read', strategy: readToken, args: [{ name: 'new-store-order-id', type: 'str', required: true }], columns: ['newStoreOrderId', 'status'] }),
  entry({ name: 'new-store-order.items', description: 'Read new-store order items', audience: 'customer', access: 'read', strategy: readToken, args: [{ name: 'new-store-order-id', type: 'str', required: true }], columns: ['itemCode', 'skuCode', 'availableQty'] }),
  entry({ name: 'new-store-order.confirm-plan', description: 'Run new-store pickup check and orderConfirm sequence', audience: 'customer', access: 'read', strategy: readToken, args: [{ name: 'new-store-order-id', type: 'str', required: true }, { name: 'batch-no', type: 'str' }], columns: ['steps'] }),
  entry({ name: 'new-store-order.relation-orders', description: 'List B2B orders generated from a new-store order', audience: 'customer', access: 'read', strategy: readToken, args: [{ name: 'new-store-order-id', type: 'str', required: true }], columns: ['orderNo', 'status'] }),
  entry({ name: 'pending-order.source-type', description: 'Local skeleton only; backend source-type API mapping is not implemented', audience: 'customer', access: 'read', strategy: readToken, columns: ['supported', 'message'] }),
  entry({ name: 'pending-order.review', description: 'Local guarded skeleton only; review execution is not implemented', audience: 'customer', access: 'write', strategy: readToken, args: [{ name: 'order-no', type: 'str', required: true }, { name: 'dry-run', type: 'bool' }, { name: 'confirm', type: 'bool' }, { name: 'reason', type: 'str' }], columns: ['blocked', 'message'] }),
  entry({ name: 'pending-order.cancel', description: 'Local guarded skeleton only; cancel execution is not implemented', audience: 'customer', access: 'destructive', strategy: readToken, args: [{ name: 'order-no', type: 'str', required: true }, { name: 'dry-run', type: 'bool' }, { name: 'confirm', type: 'bool' }, { name: 'reason', type: 'str' }], columns: ['blocked', 'message'] }),
];

export function listManifest(): CommandManifestEntry[] {
  return COMMAND_MANIFEST;
}

export function getManifest(name: string): CommandManifestEntry | undefined {
  return COMMAND_MANIFEST.find((item) => item.name === name);
}
