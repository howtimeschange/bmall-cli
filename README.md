# Bmall CLI

Bmall CLI 是面向 Semir Reabam/Bmall 订货系统的 API-first 命令行客户端。

它给两类用户提供稳定接口：

- 普通客户和 AI Agent：搜索商品、查看 SKU、检查购物车和订单状态、生成确定性的订单草稿、校验规则链，并对支持的订单流程执行 dry-run 或受控提交。
- 系统运维：诊断订单、检查商品主数据和商品应用、排查库存/客户/IAM 上下文、归一化导出任务，并且只运行 allowlist 中明确允许的 job。

业务命令不使用浏览器自动化、DOM 读取、截图、CDP 或网络拦截。浏览器只用于交互式登录引导。

CLI 发布包内置了一份版本化诊断知识包。它把内部已确认的错误码、根因和排查剧本随 CLI 一起分发给外部用户，因此外部用户不需要本地持有 `reabam-mop-b2b`、后台或小程序源码，也能拿到稳定的诊断建议。

## 当前状态

- 运行时：Node.js 20+
- 包管理器：pnpm 9.15.0
- 语言：TypeScript
- 命令 manifest：`manifests/bmall.commands.json` 中 133 条命令
- 生产 API 默认地址：`https://bmall-api.semirapp.com/api`
- 生产网页登录默认地址：`https://bmall.semirapp.com/`

## 内置诊断知识

先查看 CLI 当前随包发布的诊断知识版本：

```bash
bmall agent knowledge --json
```

这个输出会包含：

- `id`：知识包标识
- `schemaVersion`：知识包结构版本
- `version`：当前 CLI 内置的知识包版本
- `entries`：当前收录的错误码和 playbook 摘要
- `sourceReposRequired`：是否要求用户本地持有源码仓

推荐外部用户在提交支持请求时，连同 `agent knowledge --json` 的 `version` 一起提供，便于内部支持判断你用的是哪一版诊断规则。

## 能力总览

下表按能力域概括了当前 Bmall CLI 已能做到的事情。完整参数和输出列以 `manifests/bmall.commands.json` 与 `docs/command-reference.md` 为准。

| 能力域 | 面向对象 | 当前可以做到的事情 | 典型命令 | 边界和安全说明 |
| --- | --- | --- | --- | --- |
| 环境与版本检查 | 客户、运维、Agent | 查看 CLI 版本、Node 版本、当前 profile、环境、baseUrl 和本地配置状态。 | `bmall version --json`、`bmall doctor --json` | 本地只读，不访问业务数据。 |
| Profile 管理 | 客户、运维、Agent | 列出 profile、切换默认 profile、配置不同环境的 API baseUrl。 | `bmall profile list --json`、`bmall profile use semir-prod --json`、`bmall profile set-env --env prod --base-url ... --json` | 只写本地配置，不修改 Bmall 后端。 |
| 登录与 token 管理 | 客户、运维、Agent | 通过浏览器辅助登录、账号密码登录、导入 token bundle、续期、退出和检查当前登录态。 | `bmall auth login --browser --json`、`bmall auth import-token --from-file token-bundle.json --json`、`bmall whoami --json` | token 存本地安全存储或受保护文件；业务命令不依赖浏览器自动化。 |
| 权限检查 | 运维、Agent | 查看当前账号权限和判断某个权限点是否可用，辅助 Agent 决定能否执行后续命令。 | `bmall permission list --json`、`bmall permission check --code <PERMISSION_CODE> --json` | 只做当前 token 视角的权限判断，不绕过后台权限。 |
| 多品牌/集团上下文 | 客户、运维、Agent | 查询可登录品牌商/集团，并切换当前 token 的集团上下文。兼容老 Bmall 账号和 IAM 账号。 | `bmall company groups --json`、`bmall company switch-group --group-id <GROUP_ID> --json` | 切换后会保存新的 `tokenId/groupId` 到当前 profile。 |
| 门店/公司上下文 | 客户、运维、Agent | 查询可登录门店/公司、切换真实后端登录门店，或仅设置本地下单默认门店。 | `bmall company list --json`、`bmall company switch --company-id <COMPANY_ID> --json`、`bmall company use --company-id <COMPANY_ID> --json` | `company switch` 会调用后端换 token；`company use` 只改本地默认值。 |
| 商品搜索与商品详情 | 客户、Agent | 按关键字查商品、查看商品详情、SKU/SKC、尺码配比、商品标签。 | `bmall product search --keyword "卫衣" --json`、`bmall product sku --skc-code <SKC_CODE> --company-id <COMPANY_ID> --json` | 只读查询，适合 Agent 智能选品和下单前确认。 |
| 库存检查 | 客户、运维、Agent | 按 SKU 和公司检查可用库存，辅助判断能否下单或排查库存异常。 | `bmall stock check --sku-code <SKU_CODE> --company-id <COMPANY_ID> --json` | 只读查询，不发起库存同步。 |
| 购物车操作 | 客户、Agent | 查看购物车、加购、移除、清空，为 Agent 代客下单提供可控入口。 | `bmall cart list --json`、`bmall cart add --file item.json --confirm --reason "客户确认加购" --json` | 写操作需要确认门禁和审计记录。 |
| 通用订单能力 | 客户、运维、Agent | 生成订单计划、校验订单草稿、dry-run/受控提交、查询订单、取消订单、查看发货和发票信息。 | `bmall order plan --file order.json --json`、`bmall order submit --file order.json --dry-run --json`、`bmall order get --order-no <ORDER_NO> --json` | 真实提交属于财务写操作，必须显式 `--confirm`；不支持的路径会返回 blocked/unsupported。 |
| 订单类型发现 | 客户、运维、Agent | 列出系统识别到的订单类型、查看订单类型详情、解释订单规则链和流程链。 | `bmall order-type list --json`、`bmall order-rule explain --type replenishment --json`、`bmall order-flow inspect --type pickup --json` | 用于下单前规划和排查规则，不代表所有类型都允许真实提交。 |
| 补货订单 | 客户、Agent | 对普通补货订单执行 plan、validate、submit、diagnose。 | `bmall replenishment plan --file order.json --json`、`bmall replenishment submit --file order.json --dry-run --json` | 提交受写操作门禁保护。 |
| 多门店补货订单 | 客户、Agent | 对多门店补货订单执行 plan、validate、submit、diagnose。 | `bmall multi-store-order plan --file order.json --json`、`bmall multi-store-order validate --file order.json --json` | 适合一个草稿覆盖多个门店的场景，提交仍需确认。 |
| 中短期订单 | 客户、运维、Agent | 查询中短期活动、参与公司、订货模型、规则、货品、规则状态和提货列表，并执行 validate/submit/diagnose。 | `bmall mid-order activity --activity-id <ACTIVITY_ID> --json`、`bmall mid-order rules --activity-id <ACTIVITY_ID> --order-model-id <MODEL_ID> --json` | 活动、模型、规则状态要先查清，再提交。 |
| 柔供预售订单 | 客户、运维、Agent | 查询柔供预售活动和货品、查看预售购物车、加购、取消，并执行 validate/submit/diagnose。 | `bmall supply-presale activity --activity-id <ACTIVITY_ID> --json`、`bmall supply-presale cart --activity-id <ACTIVITY_ID> --company-id <COMPANY_ID> --json` | 加购/取消/提交均按写操作处理。 |
| 预售提货单 | 客户、运维、Agent | 查询提货单列表、详情、货品、关联预售单、拒绝提货，并执行 validate/submit/diagnose。 | `bmall pickup list --company-id <COMPANY_ID> --json`、`bmall pickup related-presale --pickup-id <PICKUP_ID> --json` | 拒绝或提交提货单需要确认门禁。 |
| 新店订单/新店提货 | 客户、运维、Agent | 查询新店订单、详情、货品、关联订单，生成确认计划，并按新店提货链路 dry-run/提交。 | `bmall new-store-order list --company-id <COMPANY_ID> --json`、`bmall new-store-order confirm-plan --new-store-order-id <ID> --batch-no <BATCH_NO> --json` | dry-run 会输出 `checkPickupGoods -> orderConfirm -> orderPreCheck -> pick/b2bOrder/add` 链路。 |
| 待审核订单 | 运维、Agent | 对待审核订单做 plan、validate、submit、diagnose，查询来源类型、详情、审核前检查、审核和取消。 | `bmall pending-order detail --order-id <ORDER_ID> --json`、`bmall pending-order review-check --order-id <ORDER_ID> --json`、`bmall pending-order review --order-id <ORDER_ID> --confirm --reason "审核通过" --json` | 审核/取消是高风险写操作，必须确认并写入审计。 |
| 订单运维诊断 | 运维、Agent | 诊断订单、诊断待审核单、查看时间线、关联对象、阻断原因、拆单检查、同步检查和订单导出。 | `bmall ops order diagnose --order-no <ORDER_NO> --json`、`bmall ops order diagnose-pending --order-id <ORDER_ID> --json` | 没有安全后端 facade 的链路会明确报 unsupported，不返回假成功。 |
| 收货地址排查与修复 | 运维、Agent | 查询门店收货地址、检查省市区和详细地址完整性，并对允许修改的手工地址执行 dry-run/patch。 | `bmall ops address check --company-id <COMPANY_ID> --json`、`bmall ops address patch --company-id <COMPANY_ID> --address-id <ADDRESS_ID> --region-name <区县> --dry-run --json` | MDM 地址禁止 CLI 直接 patch；Puma `401700000` 可用该链路定位。 |
| 商品主数据与商品应用运维 | 运维、Agent | 查商品主数据、商品应用、商品组、套装、标签、价格，触发受控导入/应用更新/图片同步。 | `bmall ops product master search --item-code <ITEM_CODE> --json`、`bmall ops product apply list --item-code <ITEM_CODE> --json`、`bmall ops product image-sync --item-code <ITEM_CODE> --dry-run --json` | 导入、应用更新、图片同步属于写操作，先 dry-run 再确认。 |
| 库存同步运维 | 运维、Agent | 查询库存和库存同步状态，辅助判断库存异常来自商品、仓库还是同步链路。 | `bmall ops stock query --sku-code <SKU_CODE> --json`、`bmall ops stock sync-status --item-code <ITEM_CODE> --json` | 只读排查，不直接暴露任意同步 job。 |
| 客户/门店/经销商运维 | 运维、Agent | 查询客户、门店、经销商基础信息，辅助核对下单主体、账户、门店和组织关系。 | `bmall ops customer get --company-code <COMPANY_CODE> --json`、`bmall ops store get --store-code <STORE_CODE> --json`、`bmall ops retailer get --retailer-code <RETAILER_CODE> --json` | 只读查询，敏感字段会脱敏输出。 |
| IAM 运维 | 运维、Agent | 查询 IAM 用户和角色信息，排查账号、角色、菜单、权限和品牌/门店上下文问题。 | `bmall ops iam user --user <USER> --json`、`bmall ops iam role --role-code <ROLE_CODE> --json` | 只读查询，不修改 IAM 权限。 |
| 异步导出任务 | 运维、Agent | 列出导出任务、查看任务详情、轮询任务完成、下载导出文件。 | `bmall ops export task list --json`、`bmall ops export task wait --task-id <TASK_ID> --timeout 10m --json`、`bmall ops export task download --task-id <TASK_ID> --output ./export.xlsx --json` | 下载文件路径由用户显式指定；轮询有超时控制。 |
| Allowlist Job | 运维、Agent | 查看允许执行的 job，并只运行 `manifests/job-allowlist.json` 中登记的安全 job。 | `bmall ops job list --module order --json`、`bmall ops job run --job-id <JOB_ID> --dry-run --json` | 禁止通用 `schedule/dowork`；未在 allowlist 的 job 不会执行。 |
| 配置与日志缺口标识 | 运维、Agent | 让 Agent 明确知道哪些后台配置/日志能力仍需要安全 facade。 | `bmall ops config get --key <KEY> --json`、`bmall ops log api --request-id <REQUEST_ID> --json` | 当前会返回 `*_REQUIRES_BACKEND_FACADE`，不会伪装成已支持。 |
| Agent 能力发现 | Agent、运维 | 通过 manifest 获取可用命令、参数、访问级别、输出列和执行策略。 | `bmall manifest list --json`、`bmall manifest get order.submit --json` | manifest 与 Commander 叶子命令有 contract 测试约束。 |
| Agent 错误解释 | Agent、运维 | 对已知错误码给出确定性根因、排查命令、修复路径和知识包版本信息。 | `bmall agent explain-error --error-code 401700000 --json`、`bmall agent knowledge --json` | 诊断规则随 CLI 一起发布；未知错误会给出通用诊断入口和升级支持提示。 |

## 安装

```bash
pnpm install
pnpm build
pnpm link --global
bmall version --json
```

如果不想全局 link，也可以在本地直接运行：

```bash
node dist/cli.js version --json
```

## 登录认证

推荐使用浏览器辅助登录：

```bash
bmall auth login --browser --env prod --profile semir-prod --json
```

这个命令会打开 Bmall 网页登录页，并打印本地 loopback 回调地址和控制台/bookmarklet 片段。片段只读取白名单内的 localStorage 字段，并把 token bundle 发送给本地 receiver。

也可以导入已有 token bundle：

```bash
bmall auth import-token --env prod --profile semir-prod --from-file ./token-bundle.json --json
bmall whoami --profile semir-prod --env prod --json
```

支持单次命令环境变量覆盖：

```bash
BMALL_TOKEN=... bmall whoami --json
BMALL_TOKEN_BUNDLE='{"tokenId":"..."}' bmall whoami --json
```

不要提交 token 文件。仓库 `.gitignore` 已排除本地凭证和审计路径。

## 客户侧常用流程

```bash
bmall product search --keyword "卫衣" --limit 20 --json
bmall product sku --skc-code S123456 --company-id 20001 --json
bmall stock check --sku-code SKU001 --company-id 20001 --json
bmall order-type list --json
bmall order-rule explain --type replenishment --json
bmall order validate --file order.json --json
bmall order submit --file order.json --dry-run --json
```

## 多品牌和门店切换

订货商城有两层登录上下文：

- 品牌商/集团：老 Bmall 账号使用 `manage/app/Common/LoginGroups` 和 `ChangeLoginGroup`；IAM 账号使用 `hr/iamUser/groupList` 和 `hr/iamUser/login/changeGroup`。
- 门店/公司：老 Bmall 账号使用 `LoginCompanys` 和 `ChangeLogin`；IAM 账号使用 `hr/iamUser/mini/login/changeCompany`。

CLI 会复用后端返回的新 `tokenId`，并把新的 `groupId`、品牌信息、门店信息保存回当前 profile。

```bash
bmall company groups --json
bmall company switch-group --group-id <groupId> --json
bmall company list --json
bmall company switch --company-id <companyId> --json
bmall whoami --json
```

老 Bmall 账号也兼容原系统内部 ID：

```bash
bmall company switch-group --sg-id <sgId> --json
bmall company switch --sc-id <scId> --json
```

推荐 Agent 和运维脚本优先使用稳定的 `groupId/companyId`。CLI 会在老 Bmall 账号下自动从列表接口解析成 `sgId/scId`，IAM 账号则直接使用 `groupId/companyId` 调用 IAM 切换接口。

`company.use` 只修改本地默认下单门店，不会调用后端切换登录门店；需要真正切换 token 上下文时使用 `company switch`。

订单提交属于财务写操作，默认受保护。真实提交需要 `--confirm`；未接入真实 API 或不支持的提交路径会返回 blocked/unsupported，不会伪装成成功。

## Puma 订单审核地址报错

如果审核时报 `[401700000] 收货地址不完整，请先维护区`，这不是账户余额规则，而是收货地址的区县字段缺失。后端会校验 `provinceName`、`cityName`、`regionName` 和详细地址；其中 `regionName` 为空或仍为占位值 `区` 时会阻断审核。

先切换到 Puma 对应品牌和门店，再诊断订单和地址：

```bash
bmall company groups --json
bmall company switch-group --group-id <PUMA_GROUP_ID> --json
bmall company list --sword "<门店关键字>" --json
bmall company switch --company-id <COMPANY_ID> --json
bmall ops order diagnose-pending --order-id <PENDING_ORDER_ID> --json
bmall ops address check --company-id <COMPANY_ID> --json
```

如果是不来自 MDM 的手工地址，可以用 CLI 先 dry-run，再确认修复：

```bash
bmall ops address patch --company-id <COMPANY_ID> --address-id <ADDRESS_ID> --region-name <区县> --region-code <区县编码> --dry-run --json
bmall ops address patch --company-id <COMPANY_ID> --address-id <ADDRESS_ID> --region-name <区县> --region-code <区县编码> --confirm --reason "补齐订单审核收货地址区县" --json
```

如果地址来源是 MDM，CLI 会阻止直接 patch，需要先修门店主数据并同步到 Bmall。

也可以让 Agent 先解释错误：

```bash
bmall agent explain-error --error-code 401700000 --json
bmall agent knowledge --json
```

如果 CLI 没收录你的错误，请把以下脱敏信息发给内部支持：

- `bmall agent knowledge --json` 输出里的 `version`
- 出错命令的 `requestId`
- `profile/env/groupId/companyId/orderId` 或 `orderNo`
- 错误码和错误原文

不要发送 token、cookie、authorization header、完整手机号或身份证号。

## 支持的订单类型

CLI 使用独立 adapter 建模不同订单链路：

- `replenishment`：普通补货订单
- `multi-store-replenishment`：多门店补货订单
- `mid-presale`：中短期订单
- `supply-presale`：柔供预售订单
- `pickup`：预售提货单
- `new-store`：新店订单/新店提货链路
- `pending-review`：待审核订单
- `one-piece-pending`：一件代发待审核补货
- `live-presale`、`direct-package`、`intellect-ai-replenishment`、`sales-repurchase`：可发现的扩展订单类型，不作为默认提交入口

示例：

```bash
bmall mid-order activity --activity-id A001 --json
bmall mid-order rules --activity-id A001 --order-model-id M001 --json
bmall supply-presale cart --activity-id A001 --company-id 20001 --json
bmall pickup list --status wait --company-id 20001 --json
bmall new-store-order confirm-plan --new-store-order-id NS001 --batch-no B001 --json
bmall new-store-order submit --file new-store-pickup.json --dry-run --json
```

新店订单 dry-run 提交会明确输出完整链路：

```text
checkPickupGoods -> orderConfirm -> orderPreCheck -> pick/b2bOrder/add
```

## 运维常用流程

```bash
bmall ops order diagnose --order-no DH202605230001 --json
bmall ops order relations --order-no DH202605230001 --json
bmall ops product master search --item-code SM123 --json
bmall ops product apply list --item-code SM123 --json
bmall ops stock sync-status --item-code SM123 --json
bmall ops customer get --company-code C001 --json
bmall ops iam user --user 155****5783 --json
bmall ops export task wait --task-id 10001 --timeout 10m --json
bmall ops job list --module order --json
```

写操作必须先 dry-run 或显式确认：

```bash
bmall ops product apply update --input apply-items.csv --dry-run --json
bmall ops product apply update --input apply-items.csv --confirm --reason "已审批商品应用调整" --json
```

通用 `schedule/dowork` 被明确禁止。Job 执行只允许读取 `manifests/job-allowlist.json` 中的 allowlist。

以下命令目前会明确报出 `*_REQUIRES_BACKEND_FACADE`，因为还没有确认安全的后台查询/配置 facade：`ops config get/set`、`ops log api`、`ops log sync-warning`。它们登记在 manifest 中是为了让 Agent 知道缺口，而不是假装已经能执行页面专属操作。

## 命令发现

AI Agent 可以通过 manifest 做命令规划：

```bash
bmall manifest list --json
bmall manifest get order.submit --json
```

每条 manifest 都声明 audience、access level、strategy、参数、输出列，并且业务命令均为 `browser: false`。

## 开发

```bash
pnpm install
pnpm build
pnpm test
pnpm docs
```

常用 smoke check：

```bash
node dist/cli.js version --json
node dist/cli.js manifest list --json
node dist/cli.js order-type list --json
node dist/cli.js order submit --file order.json --dry-run --json
```

相关文档：

- `docs/security.md`
- `docs/agent-usage.md`
- `docs/operations-runbook.md`
- `docs/command-reference.md`

## 安全说明

- 不记录 token、password、cookie、完整手机号、身份证号或 authorization header。
- 本地审计记录写入 `~/.bmall-cli/audit/YYYY-MM-DD.jsonl`。
- 浏览器自动化不是业务命令的执行路径。
- 生产只读 smoke test 是安全的；真实订单、配置、job 写操作必须经过确认门禁，并优先在非生产环境验证。
