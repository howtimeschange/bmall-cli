# Agent 代码地图

最近复查：2026-05-24

## 概览

`bmall-cli` 是 Bmall 多品牌订货系统的命令行客户端。代码以 Commander 命令注册为入口，按业务域拆在 `src/domains/` 下，统一通过 `src/core/http.ts` 调 Bmall API，并通过 manifest 暴露给 Agent 做能力规划。

排查真实业务问题时，本仓只是一半地图：CLI 能复现、归一化输出和安全执行，但订单审核、余额、地址、库存、商品应用、导出任务和 job 的真实业务逻辑通常要回到同级源码仓确认。

项目内 `docs/source-knowledge/` 已沉淀四个订货商城源码仓的静态接口知识包。查接口、字段、枚举、页面入口或柔供/中短期/提货链路时，优先用该知识包做导航，再回源码文件做证据复核。核心入口包括 `index.md`、`full-endpoint-catalog.md`、`endpoint-coverage.md`、`bmall-code-knowledge.json`、`source-knowledge.csv` 和 `normalized-endpoints.csv`。

## 顶层地图

| 路径 | 用途 | Agent 注意事项 |
| --- | --- | --- |
| `README.md` | 用户入口、安装、常用命令和 Puma 地址排障说明。 | 当前已有本地改动，编辑前看 diff。 |
| `src/cli.ts` | CLI 程序入口和命令注册。 | `registerWorkerBCommands` 是客户侧/订单域，`registerWorkerCCommands` 是 ops/export/job 域。 |
| `src/index.ts` | 包入口。 | 保持与 CLI 导出兼容。 |
| `src/core/` | 配置、HTTP、错误、输出、manifest、审计和脱敏。 | 改这里影响所有命令；优先补单测。 |
| `src/auth/` | token bundle、profile/session、登录导入、续期、whoami。 | 不要扩大 token 持久化或日志输出面。 |
| `src/domains/` | 业务命令实现。 | 新命令要同步 manifest、文档和测试。 |
| `src/schemas/` | 订单和规则链结构。 | 影响 plan/validate/submit 的输入输出契约。 |
| `manifests/bmall.commands.json` | Agent 能力 manifest。 | 必须和 Commander 叶子命令一致，或者明确记录 action-style 命令。 |
| `manifests/job-allowlist.json` | job run 安全 allowlist。 | 默认不要启用未审批 job。 |
| `scripts/generate-command-docs.ts` | 从 manifest 生成命令参考。 | 改 manifest 后运行 `pnpm docs`。 |
| `docs/` | 使用、安全、运维和命令参考。 | 跨仓源码导航见 `docs/source-code-navigation.md`。 |
| `docs/source-knowledge/` | 项目内源码接口知识包。 | 本仓未来 `source-explorer` 命令应以这里的 JSON/CSV 为输入或生成目标；脚本会扫描父工作区四个源码仓。 |
| `tests/unit/` | domain 和 core 单测。 | 优先跑和改动相关的聚焦测试。 |
| `tests/contract/` | 少量 HTTP contract 测试。 | 只覆盖有限 endpoint，不等于完整线上契约证明。 |
| `tests/fixtures/` | 测试 fixture。 | 避免放真实 token、手机号或订单敏感信息。 |
| `dist/` | 构建产物。 | 不要手工编辑。 |
| `node_modules/` | 本地依赖。 | 不要提交或编辑。 |

## Core 模块

| 路径 | 用途 | 风险点 |
| --- | --- | --- |
| `src/core/http.ts` | Bmall HTTP client、auth 注入、response normalize。 | 认证、错误 envelope 和 ResultInt/code 归一化会影响全部命令。 |
| `src/core/config.ts` | profile/env/baseUrl 解析。 | 生产默认地址和 custom env 行为要稳定。 |
| `src/core/output.ts` | success/failure envelope 和 request id。 | Agent 依赖 JSON shape；不要随意改字段名。 |
| `src/core/errors.ts` | CLI 错误类型。 | unsupported/blocked/auth/server error 要可区分。 |
| `src/core/manifest.ts` | manifest 加载和查询。 | manifest contract 测试应覆盖。 |
| `src/core/audit.ts`、`src/core/redaction.ts` | 本地审计和敏感字段脱敏。 | 写操作和财务操作不要漏审计或泄密。 |

## Domain 地图

| 路径 | 命令范围 | 说明 |
| --- | --- | --- |
| `src/domains/agent/` | `agent explain-error` | 本地确定性错误解释，不调用 LLM。 |
| `src/domains/ai-replenishment/` | `ai-replenishment plan` | CLI 本地智能补货算法；真实创建订单必须走 `--submit --dry-run` 或 `--submit --confirm --reason`。 |
| `src/domains/company/` | `company groups/list/switch-group/switch/use` | 多品牌和门店上下文；排查前优先确认。 |
| `src/domains/product/` | `product search/get/sku/size-ratio/labels` | 客户侧商品读取。 |
| `src/domains/stock/` | `stock check` | 库存读取。 |
| `src/domains/cart/` | `cart list/add/remove/clear` | 写操作要 confirm/reason gate。 |
| `src/domains/order/` | `order list/get/cancel/delivery/invoice/validate/submit`、`order-type/order-flow/order-rule` | 订单读取、计划、校验、提交和规则解释。 |
| `src/domains/pending-order/` | `pending-order source-type/detail/review-check/review/cancel` | 待审核单链路；Puma 审核问题重点看这里和 ops address。 |
| `src/domains/mid-order/`、`supply-presale/`、`pickup/`、`new-store-order/` | 特定订单类型流程 | 多数命令是 API sequence 或受控 dry-run/submit。 |
| `src/domains/report/` | `report supply-pickup-*`、`report pickup-customer-skc`、`report presale-business` | 预售提货和预售业务报表；`presale-business` 会输出 JSON 汇总和 Excel 工作簿。 |
| `src/domains/ops/` | `ops order/product/stock/customer/store/retailer/iam/config/log/address` | 运维诊断和受控写操作；不能伪成功。 |
| `src/domains/export/` | `ops export task *` | 导出任务归一化和下载。 |
| `src/domains/job/` | `ops job *` | allowlist job list/run。 |
| `src/domains/source/` | 预留：`source scan/endpoint/flow` | 目前尚未实现；后续按 `../docs/superpowers/plans/2026-05-24-bmall-source-explorer.md` 固化 source knowledge。 |
| `src/domains/common/` | shared API helpers | 跨 domain 改动要广测。 |

## 同级源码仓入口

| 业务问题 | 优先查 CLI | 再查 sibling 源码 |
| --- | --- | --- |
| 待审核单审核失败 | `pending-order`、`ops order diagnose-pending`、`ops address` | `../reabam-mop-b2b/` 的 B2B 订单审核、地址校验、账户/余额服务；必要时查两个后台审核页面。 |
| 地址不完整、区县缺失 | `src/domains/ops/address.ts`、`docs/operations-runbook.md` | 后端地址保存/查询接口、MDM 同步逻辑、小程序/后台地址维护页面。 |
| 客户账户余额/授信 | `ops customer`、`ops order relations/diagnose` | 后端客户、账户、订单审核 service 和 mapper。 |
| 商品主数据/商品应用 | `ops product`、`product` | 后端 product service、后台 v2 service/page、旧后台历史页面。 |
| 库存异常 | `stock`、`ops stock` | 后端 warehouse/product 支撑模块和库存同步 job。 |
| 导出任务 | `src/domains/export/` | 后端导出记录、任务查询和文件下载 endpoint。 |
| job 执行 | `src/domains/job/`、`manifests/job-allowlist.json` | 后端 schedule 服务和目标 job bean；不能走任意 `schedule/dowork`。 |
| 柔供/中短期/提货单接口定位 | 未来 `source` domain；当前先看 `docs/source-knowledge/` | `interface-map.md` 查关键接口，`domain-flows.md` 查链路，`full-endpoint-catalog.md` 查全量接口，`bmall-code-knowledge.json` 查证据行号。 |
| 客户+SKC 提货率报表 | `src/domains/report/`、`src/domains/pickup/` | `docs/source-knowledge/domain-flows.md` 已区分提货单口径和原始订单口径。 |
| 柔供/中短期预售业务报表 | `src/domains/report/presale-business.ts`、`src/domains/report/presale-workbook.ts` | 汇总活动、订单、提货、客户进度和金额口径；柔供金额依赖系统现有异步导出任务。 |

更多跨仓路线见 `docs/source-code-navigation.md`。

## 常见改动和验证

| 改动类型 | 可能涉及文件 | 验证 |
| --- | --- | --- |
| 新增 CLI 命令 | `src/cli.ts`、`src/domains/<domain>/`、`manifests/bmall.commands.json`、`docs/command-reference.md` | `pnpm test -- tests/unit/manifest-contract.test.ts`，再跑 domain 测试和 `pnpm docs`。 |
| 调整 API client/auth | `src/core/http.ts`、`src/auth/` | `pnpm test -- tests/unit/auth.test.ts tests/unit/core.test.ts`，再跑受影响 domain 测试。 |
| 改写操作门禁 | `src/domains/**`、`src/core/audit.ts` | `pnpm test -- tests/unit/write-safety.test.ts tests/unit/job.test.ts` 和相关 domain 测试。 |
| manifest/doc 变更 | `manifests/*`、`scripts/generate-command-docs.ts`、`docs/command-reference.md` | `pnpm docs`，`pnpm test -- tests/unit/manifest-contract.test.ts`。 |
| 订单/待审核排查 | `src/domains/order/`、`src/domains/pending-order/`、`src/domains/ops/order.ts`、`src/domains/ops/address.ts` | 先跑相关单测，再用真实 profile 做只读 CLI smoke；根因回 sibling 源码确认。 |
| source knowledge / source-explorer | `docs/source-knowledge/`，未来 `src/domains/source/`、`manifests/bmall.commands.json` | 先复跑 `node docs/source-knowledge/scripts/extract-source-knowledge.mjs`；确认 JSON/CSV/Markdown 产物同步；实现 CLI 后补 source domain 测试和 manifest contract。 |
| docs-only | `AGENTS.md`、`CODEMAP.md`、`docs/*.md` | 复查文档和 `git diff -- <paths>`。 |

## 边界和噪音

- 不要编辑 `dist/`、`node_modules/`、本地 token、audit JSONL、导出文件或 fixture 中的敏感真实数据。
- 不要把推定 endpoint 写成已证明能力；没有后端证据时在 manifest/docs 中标 `unsupported` 或 `requiresBackendFacade`。
- 不要把无 client、离线 plan、dry-run 或 skeleton 结果表达成真实提交成功。
- 本仓可查 sibling 源码，但默认不要修改 sibling 仓，除非用户明确要求跨仓修复。
- `docs/source-knowledge/` 是静态抽取结果，不等于线上接口可用性证明；涉及真实数据时仍需 CLI 或运行时接口验证。

## 待确认

- [ ] 后续如果团队确认 `pnpm` 在所有开发机可用，可把 fallback 命令从指南里降级。
- [ ] 对每个 ops facade endpoint 补充后端源码或接口文档证据。
- [ ] 将 Puma 订单审核排查形成稳定的只读诊断脚本或 fixture，避免每次从零查。
- [ ] 按 `../docs/superpowers/plans/2026-05-24-bmall-source-explorer.md` 实现 `source scan/endpoint/flow` 后，再把本文件里的预留说明改成已实现命令说明。
