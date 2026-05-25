# Bmall Source Knowledge

生成时间：2026-05-24

## 目标

这是一份面向未来接口探查的源码知识包。它用源码优先的方式分析订货商城 4 个代码仓库，沉淀接口、字段、枚举、页面入口和关键调用链，供后续做 `bmall cli` 的 `source-explorer` 或报表命令时复用。

本知识包不替代后端 Swagger 或运行时抓包。它的定位是：当还不知道接口在哪、字段口径是什么、前后端是否已有可参考实现时，先从这里快速定位。

## 覆盖仓库

| 仓库 | 角色 | 重点 |
| --- | --- | --- |
| `reabam-mop-b2b` | Java/Spring Boot 后端 | Controller、DTO、service/manager、表名和枚举口径 |
| `semir-reabam-front` | 微信小程序商城 | 小程序页面、`pub.request`、`publicFn.request`、柔供/中短期/提货前台链路 |
| `semir-reabam-admin` | Vue 2 旧后台 | 老后台 API key、提货单、柔供、中短期、提货管理、iframe 到 v2 的边界 |
| `semir-bmall-admin-v2` | ICE/React 后台 v2 | v2 service、路由、订单聚合、购物车、报表、商品/SKC/SKU |

## 产物

| 文件 | 用途 |
| --- | --- |
| `bmall-code-knowledge.json` | 机器可读接口候选全集。包含 repo、method、path、归一化 path、domain、handler、证据文件行号。 |
| `source-knowledge.csv` | 全量接口出现清单。每行是一处源码证据，适合 Excel/Numbers/BI 过滤分析。 |
| `normalized-endpoints.csv` | 归一化接口清单。每行是一个接口路径，包含领域、仓库、方法、出现次数、覆盖类型和证据。 |
| `full-endpoint-catalog.md` | 全量 Markdown 接口目录。按领域分组列出全部归一化路径，不再只保留精选接口。 |
| `endpoint-coverage.md` | 前后端覆盖报告。区分“后端+前端均有证据”“仅后端”“仅前端”。 |
| `interface-map.md` | 人读接口地图。按业务域列关键接口、页面入口和请求封装。 |
| `domain-flows.md` | 柔供、中短期、提货单、客户+SKC 视角的端到端流程和口径。 |
| `brand-groups.json` | 当前账号可见品牌组速查表。只保留 `groupName`、`groupCode`、`groupId` 和常用识别词，供 CLI/Agent 快速切换品牌。 |
| `brand-groups.md` | 人读版品牌组速查表。 |
| `scripts/extract-source-knowledge.mjs` | 可复跑静态抽取脚本。一次生成 JSON、CSV、全量目录和覆盖报告，后续可迁入 `bmall-cli source-explorer`。 |

## 当前抽取统计

静态抽取结果来自 `scripts/extract-source-knowledge.mjs`：

| 指标 | 数量 |
| --- | ---: |
| 接口出现次数 | 7,401 |
| 归一化接口路径 | 4,635 |
| 后端候选 | 3,922 |
| 小程序候选 | 457 |
| 旧后台候选 | 2,552 |
| 后台 v2 候选 | 470 |

按领域粗分：

| 领域 | 数量 |
| --- | ---: |
| 商品/SKC/SKU | 1,549 |
| 报表/导出 | 715 |
| 购物车 | 479 |
| 客户/组织 | 430 |
| 提货单 | 349 |
| 中短期 | 278 |
| 库存 | 180 |
| 柔供 | 190 |
| 新店订单 | 144 |
| 待审核单 | 45 |
| 登录/权限 | 113 |
| 其他 | 2,929 |

## 复跑方式

在 `bmall-cli` 项目根目录执行：

```bash
cd /Users/xingyicheng/Documents/bmall/bmall-cli
node docs/source-knowledge/scripts/extract-source-knowledge.mjs
```

输出会覆盖：

```text
/Users/xingyicheng/Documents/bmall/bmall-cli/docs/source-knowledge/bmall-code-knowledge.json
/Users/xingyicheng/Documents/bmall/bmall-cli/docs/source-knowledge/source-knowledge.csv
/Users/xingyicheng/Documents/bmall/bmall-cli/docs/source-knowledge/normalized-endpoints.csv
/Users/xingyicheng/Documents/bmall/bmall-cli/docs/source-knowledge/full-endpoint-catalog.md
/Users/xingyicheng/Documents/bmall/bmall-cli/docs/source-knowledge/endpoint-coverage.md
```

常用检索：

```bash
# 查某个接口在四仓中的证据
jq '.inventory[] | select(.normalizedPath | contains("pickup/order/mgd/page"))' docs/source-knowledge/bmall-code-knowledge.json

# 查某个领域的归一化接口
jq '.normalizedEndpoints[] | select(.domains[]? == "pickup") | .normalizedPath' docs/source-knowledge/bmall-code-knowledge.json

# 查某个前端页面调用了哪些接口
jq '.inventory[] | select(.evidence.file | contains("preSaleBillOfLading"))' docs/source-knowledge/bmall-code-knowledge.json
```

## 请求层约定

后端：

- Spring MVC Controller 使用 `@RequestMapping`、`@PostMapping`、`@GetMapping` 等注解。
- 重点服务集中在 `reabam-service/reabam-activity` 和 `reabam-service/reabam-b2b`。
- 导出接口很多在 `reabam-service/reabam-file`。

小程序：

- 旧式请求：`pub.publicFn.request(fullUrl, params, cb, ..., mode)`，默认 `POST`。
- 新式请求：`pub.request({ url, data, method })`，默认 `POST`，用 `ext.ext.attr.serverAddress` 拼 base URL。
- `public/api.js` 保存大量历史接口常量；预售分包里也有 `spliceUrl('activity/...')` 形式的接口常量。

旧后台：

- 历史入口：`Command.req(key, param)`，key 多在 `src/js/api.js`。
- 新入口：`Command.request({ url: fetch("/path") })`，`fetch` 来自 `src/api/fetch.js`。
- 很多新模块已经通过 iframe 指向后台 v2，旧后台仍保留提货单、柔供、中短期等重要页面。

后台 v2：

- 请求层是 `@ice/plugin-request`，统一配置在 `app/src/app.tsx`。
- service 目录和 page 内 service 文件基本能直接看到 path/method。
- v2 主要覆盖补货/中短期选购、购物车、订货订单聚合、新店订单、报表和商品库存。

## 使用建议

查接口时按这个顺序：

1. 先看 `domain-flows.md` 判断业务链路和口径。
2. 再看 `interface-map.md` 找关键接口和页面入口。
3. 如果要穷尽接口，打开 `full-endpoint-catalog.md` 或 `normalized-endpoints.csv`。
4. 如果要判断前后端是否对齐，先看 `endpoint-coverage.md`，再用 `bmall-code-knowledge.json` 精确查证据文件和行号。

面向命令或脚本消费时：

| 目的 | 推荐文件 |
| --- | --- |
| 精确过滤某个 path/domain/repo | `bmall-code-knowledge.json` |
| 表格透视分析接口覆盖 | `normalized-endpoints.csv` |
| 回查某处源码证据 | `source-knowledge.csv` |
| 给人快速扫全量接口 | `full-endpoint-catalog.md` |
| 判断前后端覆盖缺口 | `endpoint-coverage.md` |

如果要固化为 `bmall-cli` 能力，建议从三个命令开始：

| 命令 | 作用 |
| --- | --- |
| `bmall source scan` | 复跑静态抽取并生成 JSON。 |
| `bmall source endpoints --domain pickup --query 26Q2` | 按领域、关键词、仓库过滤接口候选。 |
| `bmall source flow pickup-customer-skc` | 输出提货单、源订单、客户+SKC 口径的接口链路和字段说明。 |

## 边界

- 这是静态源码抽取，不保证所有接口都在线上可访问。
- 前端默认 method 来自请求封装推断，未显式声明时按 `POST(default)` 标记。
- 后端 request/response 是从 Java 方法签名启发式解析，复杂泛型和继承不会完全展开。
- Controller 之外的 Feign/RPC、异步任务、动态拼接 URL 只能部分覆盖。
- 字段口径仍以源码证据为准，涉及真实数据结果时需要配合 `bmall-cli` 或浏览器/接口运行时验证。
