#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const cliRoot = path.resolve(scriptDir, '../../..');
const workspaceRoot = path.resolve(cliRoot, '..');
const knowledgeDir = path.resolve(scriptDir, '..');
const jsonOutputPath = path.join(knowledgeDir, 'bmall-code-knowledge.json');
const inventoryCsvOutputPath = path.join(knowledgeDir, 'source-knowledge.csv');
const normalizedCsvOutputPath = path.join(knowledgeDir, 'normalized-endpoints.csv');
const fullCatalogOutputPath = path.join(knowledgeDir, 'full-endpoint-catalog.md');
const coverageOutputPath = path.join(knowledgeDir, 'endpoint-coverage.md');

const repos = [
  {
    id: 'backend',
    name: 'reabam-mop-b2b',
    path: path.join(workspaceRoot, 'reabam-mop-b2b'),
    type: 'spring-boot',
    scanRoots: [
      'reabam-service',
      'reabam-support',
    ],
  },
  {
    id: 'miniapp',
    name: 'semir-reabam-front',
    path: path.join(workspaceRoot, 'semir-reabam-front'),
    type: 'wechat-miniapp',
    scanRoots: [
      '.',
    ],
  },
  {
    id: 'admin-v1',
    name: 'semir-reabam-admin',
    path: path.join(workspaceRoot, 'semir-reabam-admin'),
    type: 'vue2-admin',
    scanRoots: [
      'src',
    ],
  },
  {
    id: 'admin-v2',
    name: 'semir-bmall-admin-v2',
    path: path.join(workspaceRoot, 'semir-bmall-admin-v2'),
    type: 'ice-react-admin',
    scanRoots: [
      'app/src',
    ],
  },
];

const ignoredDirs = new Set([
  '.git',
  '.idea',
  'node_modules',
  'miniprogram_npm',
  'dist',
  'target',
  '.cache',
]);

const endpointPrefixes = [
  'activity/',
  'api/activity/',
  '/api/activity/',
  '/activity/',
  'b2b/',
  'api/b2b/',
  '/api/b2b/',
  '/b2b/',
  'product/',
  'api/product/',
  '/api/product/',
  '/product/',
  'warehouse/',
  'api/warehouse/',
  '/api/warehouse/',
  '/warehouse/',
  'hr/',
  'api/hr/',
  '/api/hr/',
  '/hr/',
  'config/',
  'api/config/',
  '/api/config/',
  '/config/',
  'file/',
  'api/file/',
  '/api/file/',
  '/file/',
  'track/',
  'api/track/',
  '/api/track/',
  '/track/',
  'manage/',
  'api/manage/',
  '/api/manage/',
  '/manage/',
  'member/',
  'api/member/',
  '/api/member/',
  '/member/',
  'core/',
  'api/core/',
  '/api/core/',
  '/core/',
  'wx/',
  'wxapp/',
  '/wx/',
  '/wxapp/',
];

const repoOrder = ['backend', 'miniapp', 'admin-v1', 'admin-v2'];
const frontendRepoIds = new Set(['miniapp', 'admin-v1', 'admin-v2']);
const domainOrder = [
  'supply-presale',
  'mid-presale',
  'pickup',
  'cart',
  'product-skc-sku',
  'customer-org',
  'stock',
  'new-store-order',
  'pending-review-order',
  'report-export',
  'auth',
  'other',
];

const domainLabels = {
  'supply-presale': '柔供预售',
  'mid-presale': '中短期预售',
  pickup: '提货单',
  cart: '购物车',
  'product-skc-sku': '商品/SKC/SKU',
  'customer-org': '客户/组织',
  stock: '库存',
  'new-store-order': '新店订单',
  'pending-review-order': '待审核单',
  'report-export': '报表/导出',
  auth: '登录/权限',
  other: '其他',
};

const coverageLabels = {
  'backend-and-frontend': '后端+前端均有证据',
  'backend-only': '仅后端源码证据',
  'frontend-only': '仅单个前端证据',
  'frontend-shared-only': '多个前端共享但未抽到后端',
  unknown: '未知',
};

const coverageOrder = [
  'backend-and-frontend',
  'backend-only',
  'frontend-shared-only',
  'frontend-only',
  'unknown',
];

function walk(dir, predicate, result = []) {
  if (!fs.existsSync(dir)) return result;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (ignoredDirs.has(entry.name)) continue;
      walk(path.join(dir, entry.name), predicate, result);
      continue;
    }

    const filePath = path.join(dir, entry.name);
    if (!predicate || predicate(filePath)) result.push(filePath);
  }

  return result;
}

function readLines(filePath) {
  return fs.readFileSync(filePath, 'utf8').split(/\r?\n/);
}

function rel(filePath) {
  return path.relative(workspaceRoot, filePath);
}

function normalizePath(value) {
  if (!value) return '';

  let normalized = value.trim();
  normalized = normalized.replace(/^https?:\/\/[^/]+\/api\/?/, '/');
  normalized = normalized.replace(/^https?:\/\/[^/]+\//, '/');
  normalized = normalized.replace(/^api\//, '/api/');
  normalized = normalized.replace(/\/+/g, '/');
  normalized = normalized.replace(/^\/api\//, '/');
  normalized = normalized.replace(/\/$/, '');
  return normalized.startsWith('/') ? normalized : `/${normalized}`;
}

function joinPaths(left, right) {
  const a = normalizePath(left || '');
  const b = normalizePath(right || '');
  if (!a || a === '/') return b || '/';
  if (!b || b === '/') return a || '/';
  return normalizePath(`${a}/${b}`);
}

function classifyDomain(input) {
  const text = input.toLowerCase();

  if (text.includes('pickup') || text.includes('提货')) return 'pickup';
  if (text.includes('supplypresale') || text.includes('supply/presale') || text.includes('supply_presale') || text.includes('flexibility') || text.includes('grouppresale') || text.includes('柔供')) return 'supply-presale';
  if (text.includes('presaleorder') || text.includes('presale/order') || text.includes('presaleactivity') || text.includes('presale/activity') || text.includes('presaleactivities') || text.includes('midterm') || text.includes('mediumshort') || text.includes('中短期')) return 'mid-presale';
  if (text.includes('newstoreorder') || text.includes('newstore') || text.includes('storeorderreport') || text.includes('新店')) return 'new-store-order';
  if (text.includes('pendingreview') || text.includes('待审核')) return 'pending-review-order';
  if (text.includes('shopcart') || text.includes('shopping/cart') || text.includes('cart')) return 'cart';
  if (text.includes('itemstock') || text.includes('inventory') || text.includes('stock') || text.includes('库存')) return 'stock';
  if (text.includes('report') || text.includes('/file/') || text.includes('export') || text.includes('导出') || text.includes('报表')) return 'report-export';
  if (text.includes('skc') || text.includes('sku') || text.includes('mitem') || text.includes('/item') || text.includes('product')) return 'product-skc-sku';
  if (text.includes('company') || text.includes('distributor') || text.includes('syscompany') || text.includes('客户') || text.includes('门店')) return 'customer-org';
  if (text.includes('auth') || text.includes('login') || text.includes('token')) return 'auth';
  return 'other';
}

function extractQuotedStrings(text) {
  const values = [];
  const regex = /(['"`])([^'"`]+)\1/g;
  let match;
  while ((match = regex.exec(text))) {
    values.push(match[2]);
  }
  return values;
}

function extractAnnotation(lines, startLine) {
  let text = lines[startLine].trim();
  let cursor = startLine;
  while (text.includes('(') && !text.includes(')') && cursor < lines.length - 1) {
    cursor += 1;
    text += ` ${lines[cursor].trim()}`;
  }

  const typeMatch = text.match(/@(RequestMapping|GetMapping|PostMapping|PutMapping|DeleteMapping|PatchMapping)/);
  if (!typeMatch) return null;

  const annotation = typeMatch[1];
  const quoted = extractQuotedStrings(text);
  let route = quoted[0] || '';
  const methodMatch = text.match(/RequestMethod\.(GET|POST|PUT|DELETE|PATCH)/);
  const method = annotation === 'RequestMapping'
    ? (methodMatch ? methodMatch[1] : 'ANY')
    : annotation.replace('Mapping', '').toUpperCase();

  return {
    annotation,
    method,
    route,
    text,
    startLine,
    endLine: cursor,
  };
}

function nextCodeLine(lines, startLine, maxDistance = 12) {
  for (let i = startLine + 1; i < Math.min(lines.length, startLine + maxDistance + 1); i += 1) {
    const line = lines[i].trim();
    if (!line || line.startsWith('@')) continue;
    return { line, lineNumber: i + 1, index: i };
  }
  return null;
}

function readSignature(lines, startLine) {
  let signature = lines[startLine].trim();
  let cursor = startLine;
  while (!signature.includes('{') && !signature.endsWith(';') && cursor < Math.min(lines.length - 1, startLine + 8)) {
    cursor += 1;
    signature += ` ${lines[cursor].trim()}`;
  }
  return signature.replace(/\s+/g, ' ');
}

function parseJavaSignature(signature) {
  const nameMatch = signature.match(/\s([A-Za-z_][A-Za-z0-9_]*)\s*\(/);
  const methodName = nameMatch ? nameMatch[1] : '';
  const beforeName = methodName ? signature.slice(0, signature.indexOf(`${methodName}(`)).trim() : signature;
  const tokens = beforeName.split(/\s+/).filter(Boolean);
  const returnType = tokens.length ? tokens[tokens.length - 1] : '';
  const paramsMatch = signature.match(/\((.*)\)/);
  const params = paramsMatch ? paramsMatch[1]
    .replace(/@\w+(?:\([^)]*\))?/g, '')
    .replace(/\s+/g, ' ')
    .trim() : '';

  return {
    methodName,
    returnType,
    params,
  };
}

function scanBackend(repo) {
  const files = repo.scanRoots.flatMap((root) => walk(
    path.join(repo.path, root),
    (filePath) => filePath.endsWith('.java') && /controller|Controller|Client|Feign/.test(filePath),
  ));

  const endpoints = [];

  for (const filePath of files) {
    const lines = readLines(filePath);
    let className = path.basename(filePath, '.java');
    let classBasePath = '';

    for (let i = 0; i < lines.length; i += 1) {
      if (!lines[i].includes('@')) continue;
      const annotation = extractAnnotation(lines, i);
      if (!annotation) continue;

      const next = nextCodeLine(lines, annotation.endLine);
      if (next && /\b(class|interface)\b/.test(next.line)) {
        classBasePath = annotation.route || '';
        const classMatch = next.line.match(/\b(class|interface)\s+([A-Za-z_][A-Za-z0-9_]*)/);
        if (classMatch) className = classMatch[2];
        i = annotation.endLine;
        continue;
      }

      if (!next || !/\b(public|private|protected)\b/.test(next.line) || /\bclass\b/.test(next.line)) {
        i = annotation.endLine;
        continue;
      }

      const signature = readSignature(lines, next.index);
      const parsed = parseJavaSignature(signature);
      if (!parsed.methodName) {
        i = annotation.endLine;
        continue;
      }

      const fullPath = joinPaths(classBasePath, annotation.route);
      endpoints.push({
        repo: repo.name,
        repoId: repo.id,
        sourceType: 'backend-controller',
        method: annotation.method,
        path: fullPath,
        normalizedPath: normalizePath(fullPath),
        handler: `${className}.${parsed.methodName}`,
        request: parsed.params,
        response: parsed.returnType,
        domain: classifyDomain(`${fullPath} ${filePath} ${className}`),
        evidence: {
          file: rel(filePath),
          line: annotation.startLine + 1,
        },
      });

      i = annotation.endLine;
    }
  }

  return endpoints;
}

function looksLikeEndpoint(value) {
  if (!value || value.length < 3) return false;
  if (value.startsWith('http') && !value.includes('semirapp.com') && !value.includes('/api/')) return false;
  if (value.startsWith('/pages/') || value.startsWith('/package') || value.startsWith('plugin://')) return false;
  if (/\.(png|jpg|jpeg|gif|svg|webp|css|js|vue|tsx?|json)$/i.test(value)) return false;
  return endpointPrefixes.some((prefix) => value.startsWith(prefix));
}

function detectFrontendMethod(lines, lineIndex) {
  const window = lines.slice(Math.max(0, lineIndex - 8), Math.min(lines.length, lineIndex + 10)).join(' ');
  const methodMatch = window.match(/method\s*:\s*['"`](GET|POST|PUT|DELETE|PATCH|get|post|put|delete|patch)['"`]/);
  if (methodMatch) return methodMatch[1].toUpperCase();
  const reqTypeMatch = window.match(/reqType\s*:\s*['"`](GET|POST|PUT|DELETE|PATCH|get|post|put|delete|patch)['"`]/);
  if (reqTypeMatch) return reqTypeMatch[1].toUpperCase();
  return 'POST(default)';
}

function nearestFunctionName(lines, lineIndex) {
  for (let i = lineIndex; i >= Math.max(0, lineIndex - 30); i -= 1) {
    const line = lines[i];
    const endpointConstantMatch = line.match(/([A-Za-z_][A-Za-z0-9_]*)\s*:\s*spliceUrl\s*\(/);
    if (endpointConstantMatch) return endpointConstantMatch[1];

    const match = line.match(/(?:export\s+)?(?:async\s+)?function\s+([A-Za-z_][A-Za-z0-9_]*)/)
      || line.match(/(?:export\s+)?const\s+([A-Za-z_][A-Za-z0-9_]*)\s*=/)
      || line.match(/([A-Za-z_][A-Za-z0-9_]*)\s*:\s*(?:async\s*)?\(/);
    if (match) return match[1];
  }
  return '';
}

function scanFrontend(repo) {
  const files = repo.scanRoots.flatMap((root) => walk(
    path.join(repo.path, root),
    (filePath) => /\.(js|jsx|ts|tsx|vue)$/.test(filePath),
  ));

  const endpoints = [];
  const seen = new Set();

  for (const filePath of files) {
    const lines = readLines(filePath);

    for (let i = 0; i < lines.length; i += 1) {
      const line = lines[i];
      if (!/(url|fetch|request|Command|apiUrl|spliceUrl|Url\s*\+)/.test(line)) continue;

      const values = extractQuotedStrings(line);
      for (const value of values) {
        if (!looksLikeEndpoint(value)) continue;

        const normalized = normalizePath(value);
        const key = `${repo.id}:${normalized}:${rel(filePath)}:${i + 1}`;
        if (seen.has(key)) continue;
        seen.add(key);

        endpoints.push({
          repo: repo.name,
          repoId: repo.id,
          sourceType: 'frontend-callsite',
          method: detectFrontendMethod(lines, i),
          path: value,
          normalizedPath: normalized,
          handler: nearestFunctionName(lines, i) || path.basename(filePath),
          request: '',
          response: '',
          domain: classifyDomain(`${value} ${filePath}`),
          evidence: {
            file: rel(filePath),
            line: i + 1,
          },
        });
      }
    }
  }

  return endpoints;
}

function countBy(items, field) {
  return items.reduce((acc, item) => {
    const key = item[field] || 'unknown';
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}

function sortByDomain(a, b) {
  const ai = domainOrder.indexOf(a);
  const bi = domainOrder.indexOf(b);
  if (ai !== -1 || bi !== -1) {
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  }
  return a.localeCompare(b);
}

function sortRepos(a, b) {
  const ai = repoOrder.indexOf(a);
  const bi = repoOrder.indexOf(b);
  if (ai !== -1 || bi !== -1) {
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  }
  return a.localeCompare(b);
}

function sortMethods(a, b) {
  const methodOrder = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'ANY', 'POST(default)'];
  const ai = methodOrder.indexOf(a);
  const bi = methodOrder.indexOf(b);
  if (ai !== -1 || bi !== -1) {
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  }
  return a.localeCompare(b);
}

function classifyCoverage(repoIds) {
  const repos = new Set(repoIds);
  const hasBackend = repos.has('backend');
  const frontendCount = [...repos].filter((repoId) => frontendRepoIds.has(repoId)).length;

  if (hasBackend && frontendCount > 0) return 'backend-and-frontend';
  if (hasBackend) return 'backend-only';
  if (frontendCount > 1) return 'frontend-shared-only';
  if (frontendCount === 1) return 'frontend-only';
  return 'unknown';
}

function groupBy(items, getKey) {
  const groups = new Map();
  for (const item of items) {
    const key = getKey(item);
    const existing = groups.get(key) || [];
    existing.push(item);
    groups.set(key, existing);
  }
  return groups;
}

function csvEscape(value) {
  if (value == null) return '';
  const text = Array.isArray(value) ? value.join('|') : String(value);
  if (/[",\n\r]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}

function writeCsv(filePath, headers, rows) {
  const lines = [
    headers.join(','),
    ...rows.map((row) => headers.map((header) => csvEscape(row[header])).join(',')),
  ];
  fs.writeFileSync(filePath, `${lines.join('\n').trimEnd()}\n`);
}

function evidenceText(evidence) {
  if (!evidence) return '';
  return `${evidence.file}:${evidence.line}`;
}

function evidenceList(evidenceItems) {
  return evidenceItems.map(evidenceText).join(' | ');
}

function markdownEscape(value) {
  return String(value ?? '')
    .replace(/\|/g, '\\|')
    .replace(/\r?\n/g, '<br>');
}

function markdownTable(headers, rows) {
  const lines = [
    `| ${headers.join(' | ')} |`,
    `| ${headers.map(() => '---').join(' | ')} |`,
  ];

  for (const row of rows) {
    lines.push(`| ${headers.map((header) => markdownEscape(row[header])).join(' | ')} |`);
  }

  return lines.join('\n');
}

function normalizeDate(iso) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(new Date(iso));
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

function makeDomainDisplay(domain) {
  return domainLabels[domain] ? `${domainLabels[domain]} (${domain})` : domain;
}

function makeCoverageDisplay(category) {
  return coverageLabels[category] ? `${coverageLabels[category]} (${category})` : category;
}

function buildCoverageSummary(normalizedEndpoints) {
  const byCategory = {};
  const byCategoryAndDomain = {};

  for (const endpoint of normalizedEndpoints) {
    const category = endpoint.coverageCategory || 'unknown';
    byCategory[category] = (byCategory[category] || 0) + 1;

    for (const domain of endpoint.domains) {
      byCategoryAndDomain[domain] ||= {};
      byCategoryAndDomain[domain][category] = (byCategoryAndDomain[domain][category] || 0) + 1;
    }
  }

  return {
    byCategory,
    byCategoryAndDomain,
  };
}

function writeFullCatalog(filePath, knowledge) {
  const lines = [
    '# Bmall Full Endpoint Catalog',
    '',
    `生成时间：${normalizeDate(knowledge.generatedAt)}`,
    '',
    '这份目录是全量归一化接口索引，按业务域分组。精选解释继续看 `interface-map.md` 和 `domain-flows.md`；需要表格分析时看 `source-knowledge.csv` 和 `normalized-endpoints.csv`。',
    '',
    '## 总览',
    '',
    markdownTable(
      ['指标', '数量'],
      [
        { 指标: '接口出现次数', 数量: knowledge.summary.totalEndpointOccurrences },
        { 指标: '归一化接口路径', 数量: knowledge.summary.uniqueNormalizedPaths },
        { 指标: '覆盖仓库数', 数量: knowledge.repos.length },
      ],
    ),
    '',
    '## 按领域索引',
    '',
  ];

  const byDomain = groupBy(knowledge.normalizedEndpoints, (item) => item.domains[0] || 'other');
  const domains = [...byDomain.keys()].sort(sortByDomain);

  for (const domain of domains) {
    const rows = byDomain.get(domain)
      .slice()
      .sort((a, b) => a.normalizedPath.localeCompare(b.normalizedPath))
      .map((item) => ({
        '归一化路径': `\`${item.normalizedPath}\``,
        '仓库': item.repos.join(', '),
        '方法': item.methods.join(', '),
        '出现次数': item.occurrences,
        '覆盖': coverageLabels[item.coverageCategory] || item.coverageCategory,
        '首个证据': evidenceText(item.evidence[0]),
      }));

    lines.push(`### ${makeDomainDisplay(domain)}`);
    lines.push('');
    lines.push(markdownTable(['归一化路径', '仓库', '方法', '出现次数', '覆盖', '首个证据'], rows));
    lines.push('');
  }

  fs.writeFileSync(filePath, `${lines.join('\n').trimEnd()}\n`);
}

function writeCoverageReport(filePath, knowledge) {
  const coverage = knowledge.coverage;
  const categoryRows = coverageOrder
    .filter((category) => coverage.byCategory[category])
    .map((category) => ({
      '覆盖类型': makeCoverageDisplay(category),
      '接口数': coverage.byCategory[category],
    }));

  const domainRows = Object.entries(coverage.byCategoryAndDomain)
    .sort(([a], [b]) => sortByDomain(a, b))
    .map(([domain, counts]) => ({
      '领域': makeDomainDisplay(domain),
      '后端+前端': counts['backend-and-frontend'] || 0,
      '仅后端': counts['backend-only'] || 0,
      '多个前端未匹配后端': counts['frontend-shared-only'] || 0,
      '单前端未匹配后端': counts['frontend-only'] || 0,
    }));

  const importantDomains = new Set([
    'supply-presale',
    'mid-presale',
    'pickup',
    'cart',
    'product-skc-sku',
    'stock',
    'new-store-order',
    'pending-review-order',
  ]);

  const alignedRows = knowledge.normalizedEndpoints
    .filter((item) => item.coverageCategory === 'backend-and-frontend')
    .filter((item) => item.domains.some((domain) => importantDomains.has(domain)))
    .sort((a, b) => sortByDomain(a.domains[0], b.domains[0]) || a.normalizedPath.localeCompare(b.normalizedPath))
    .map((item) => ({
      '领域': item.domains.join(', '),
      '接口': `\`${item.normalizedPath}\``,
      '仓库': item.repos.join(', '),
      '方法': item.methods.join(', '),
      '证据': evidenceText(item.evidence[0]),
    }));

  const frontendOnlyRows = knowledge.normalizedEndpoints
    .filter((item) => item.coverageCategory === 'frontend-only' || item.coverageCategory === 'frontend-shared-only')
    .filter((item) => item.domains.some((domain) => importantDomains.has(domain)))
    .sort((a, b) => sortByDomain(a.domains[0], b.domains[0]) || a.normalizedPath.localeCompare(b.normalizedPath))
    .map((item) => ({
      '领域': item.domains.join(', '),
      '接口': `\`${item.normalizedPath}\``,
      '仓库': item.repos.join(', '),
      '方法': item.methods.join(', '),
      '证据': evidenceText(item.evidence[0]),
    }));

  const backendOnlyRows = knowledge.normalizedEndpoints
    .filter((item) => item.coverageCategory === 'backend-only')
    .filter((item) => item.domains.some((domain) => importantDomains.has(domain)))
    .sort((a, b) => sortByDomain(a.domains[0], b.domains[0]) || a.normalizedPath.localeCompare(b.normalizedPath))
    .map((item) => ({
      '领域': item.domains.join(', '),
      '接口': `\`${item.normalizedPath}\``,
      '方法': item.methods.join(', '),
      '证据': evidenceText(item.evidence[0]),
    }));

  const lines = [
    '# Bmall Endpoint Coverage',
    '',
    `生成时间：${normalizeDate(knowledge.generatedAt)}`,
    '',
    '这份报告把归一化接口按“后端是否存在、前端是否调用”做覆盖分析。它来自静态源码抽取，不能替代运行时可用性验证，但能帮助判断接口是否已经有端到端证据。',
    '',
    '## 覆盖口径',
    '',
    '- 后端+前端均有证据：同一归一化路径同时在 `reabam-mop-b2b` 和至少一个前端仓出现。',
    '- 仅后端源码证据：Controller/Feign 等后端源码中出现，当前未抽到前端调用。',
    '- 仅前端证据：前端源码中出现，当前未抽到后端 Controller，可能是动态路径、网关转发、旧接口、抽取遗漏或已废弃接口。',
    '',
    '## 覆盖总览',
    '',
    markdownTable(['覆盖类型', '接口数'], categoryRows),
    '',
    '## 按领域覆盖',
    '',
    markdownTable(['领域', '后端+前端', '仅后端', '多个前端未匹配后端', '单前端未匹配后端'], domainRows),
    '',
    '## 重点业务：前后端均有证据',
    '',
    markdownTable(['领域', '接口', '仓库', '方法', '证据'], alignedRows),
    '',
    '## 重点业务：前端有调用但未匹配后端',
    '',
    '这部分优先用于发现旧接口、动态网关、抽取漏点。判断真实可用性时继续追后端 Controller、网关转发或运行时请求。',
    '',
    markdownTable(['领域', '接口', '仓库', '方法', '证据'], frontendOnlyRows),
    '',
    '## 重点业务：后端有接口但未匹配前端',
    '',
    '这部分通常是中台接口、导出接口、后台内部接口、未上线功能或前端动态拼接导致未抽到调用。',
    '',
    markdownTable(['领域', '接口', '方法', '证据'], backendOnlyRows),
  ];

  fs.writeFileSync(filePath, `${lines.join('\n')}\n`);
}

function main() {
  const generatedAt = new Date().toISOString();
  const inventory = [];

  for (const repo of repos) {
    const endpoints = repo.type === 'spring-boot' ? scanBackend(repo) : scanFrontend(repo);
    inventory.push(...endpoints);
  }

  inventory.sort((a, b) => {
    const repoCompare = a.repo.localeCompare(b.repo);
    if (repoCompare) return repoCompare;
    return a.normalizedPath.localeCompare(b.normalizedPath);
  });

  const normalizedGroups = new Map();
  for (const endpoint of inventory) {
    const key = endpoint.normalizedPath;
    const existing = normalizedGroups.get(key) || {
      normalizedPath: key,
      domains: new Set(),
      repos: new Set(),
      methods: new Set(),
      occurrences: 0,
      evidence: [],
    };
    existing.domains.add(endpoint.domain);
    existing.repos.add(endpoint.repoId);
    existing.methods.add(endpoint.method);
    existing.occurrences += 1;
    if (existing.evidence.length < 8) existing.evidence.push(endpoint.evidence);
    normalizedGroups.set(key, existing);
  }

  const normalizedEndpoints = [...normalizedGroups.values()].map((group) => {
    const reposForEndpoint = [...group.repos].sort(sortRepos);
    return {
      normalizedPath: group.normalizedPath,
      domains: [...group.domains].sort(sortByDomain),
      repos: reposForEndpoint,
      methods: [...group.methods].sort(sortMethods),
      occurrences: group.occurrences,
      coverageCategory: classifyCoverage(reposForEndpoint),
      evidence: group.evidence,
    };
  }).sort((a, b) => a.normalizedPath.localeCompare(b.normalizedPath));

  const coverage = buildCoverageSummary(normalizedEndpoints);

  const knowledge = {
    schemaVersion: 1,
    generatedAt,
    workspaceRoot,
    note: 'Static source extraction. Frontend method defaults come from wrapper conventions; backend request/response are parsed heuristically from Java signatures.',
    repos: repos.map((repo) => ({
      id: repo.id,
      name: repo.name,
      type: repo.type,
      relativePath: path.relative(workspaceRoot, repo.path),
    })),
    summary: {
      totalEndpointOccurrences: inventory.length,
      uniqueNormalizedPaths: normalizedGroups.size,
      byRepo: countBy(inventory, 'repoId'),
      byDomain: countBy(inventory, 'domain'),
    },
    coverage,
    normalizedEndpoints,
    inventory,
  };

  const coverageByPath = new Map(normalizedEndpoints.map((item) => [item.normalizedPath, item.coverageCategory]));

  writeCsv(inventoryCsvOutputPath, [
    'repoId',
    'repo',
    'sourceType',
    'domain',
    'method',
    'coverageCategory',
    'normalizedPath',
    'path',
    'handler',
    'request',
    'response',
    'evidenceFile',
    'evidenceLine',
  ], inventory.map((item) => ({
    repoId: item.repoId,
    repo: item.repo,
    sourceType: item.sourceType,
    domain: item.domain,
    method: item.method,
    coverageCategory: coverageByPath.get(item.normalizedPath),
    normalizedPath: item.normalizedPath,
    path: item.path,
    handler: item.handler,
    request: item.request,
    response: item.response,
    evidenceFile: item.evidence.file,
    evidenceLine: item.evidence.line,
  })));

  writeCsv(normalizedCsvOutputPath, [
    'normalizedPath',
    'domains',
    'repos',
    'methods',
    'occurrences',
    'coverageCategory',
    'evidence',
  ], normalizedEndpoints.map((item) => ({
    normalizedPath: item.normalizedPath,
    domains: item.domains,
    repos: item.repos,
    methods: item.methods,
    occurrences: item.occurrences,
    coverageCategory: item.coverageCategory,
    evidence: evidenceList(item.evidence),
  })));

  fs.writeFileSync(jsonOutputPath, `${JSON.stringify(knowledge, null, 2)}\n`);
  writeFullCatalog(fullCatalogOutputPath, knowledge);
  writeCoverageReport(coverageOutputPath, knowledge);

  console.log(`Wrote ${jsonOutputPath}`);
  console.log(`Wrote ${inventoryCsvOutputPath}`);
  console.log(`Wrote ${normalizedCsvOutputPath}`);
  console.log(`Wrote ${fullCatalogOutputPath}`);
  console.log(`Wrote ${coverageOutputPath}`);
  console.log(JSON.stringify(knowledge.summary, null, 2));
}

main();
