# Bmall CLI

Bmall CLI 是 Semir Reabam/Bmall 订货商城的 API-first 命令行客户端。

它把网页端常见的下单、切换品牌/门店、订单排查、商品运维、导出任务、诊断知识和受控 job 操作整理成稳定的 CLI 能力，方便人直接使用，也方便 AI Agent 以结构化 JSON 调用。

## 一句话了解

| 你是谁 | Bmall CLI 能帮你做什么 | 推荐入口 |
| --- | --- | --- |
| 普通客户 | 搜商品、查 SKU 和库存、规划订单、校验规则、dry-run 下单。 | `product`、`stock`、`order`、`replenishment`、`pickup` |
| 系统运维 | 切品牌/门店、查订单链路、排查待审核失败、维护地址、查商品主数据、轮询导出任务、运行 allowlist job。 | `company`、`ops order`、`ops address`、`ops product`、`ops export task`、`ops job` |
| AI Agent | 读取 manifest 做能力规划，用 `--json` 拿稳定输出，根据错误码拿确定性排障剧本。 | `manifest`、`agent knowledge`、`agent explain-error` |

业务命令不使用浏览器自动化、DOM 读取、截图、CDP 或网络拦截。浏览器只用于交互式登录引导。

## 当前状态

| 项目 | 说明 |
| --- | --- |
| 运行时 | Node.js 20+ |
| 语言 | TypeScript |
| CLI bin | `bmall` |
| 包管理器 | pnpm 9.15.0 |
| 命令数 | `manifests/bmall.commands.json` 中 134 条命令 |
| 生产 API | `https://bmall-api.semirapp.com/api` |
| 生产网页 | `https://bmall.semirapp.com/` |
| 默认输出 | 人类可读文本；加 `--json` 输出 Agent 友好的 JSON |

## 快速安装

当前推荐从 GitHub 源码安装：

```bash
git clone https://github.com/howtimeschange/bmall-cli.git
cd bmall-cli
corepack enable
pnpm install
pnpm build
pnpm link --global
bmall version --json
```

如果不想全局 link，也可以直接运行构建产物：

```bash
node dist/cli.js version --json
```

日常更新：

```bash
git pull
pnpm install
pnpm build
```

## 第一次使用

### 1. 登录

推荐使用浏览器辅助登录。CLI 会打开 Bmall 登录页，登录完成后通过本地 loopback 接收 token bundle，并保存到当前 profile。

```bash
bmall auth login --browser --env prod --profile semir-prod --json
```

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

### 2. 确认登录态和上下文

```bash
bmall whoami --profile semir-prod --env prod --json
bmall company groups --profile semir-prod --env prod --json
bmall company list --profile semir-prod --env prod --json
```

### 3. 切换品牌和门店

订货商城有多品牌/集团和门店/公司两层上下文。CLI 会复用后端返回的新 `tokenId`，并把新的 `groupId`、品牌信息、门店信息保存回当前 profile。

```bash
bmall company switch-group --group-id <GROUP_ID> --json
bmall company switch --company-id <COMPANY_ID> --json
bmall whoami --json
```

老 Bmall 账号也兼容原系统内部 ID：

```bash
bmall company switch-group --sg-id <SG_ID> --json
bmall company switch --sc-id <SC_ID> --json
```

`company switch` 会真正调用后端切换 token 上下文；`company use` 只修改本地默认下单门店。

## 三分钟上手

### 客户智能下单

```bash
bmall product search --keyword "卫衣" --limit 20 --json
bmall product sku --skc-code <SKC_CODE> --company-id <COMPANY_ID> --json
bmall stock check --sku-code <SKU_CODE> --company-id <COMPANY_ID> --json
bmall order-type list --json
bmall order-rule explain --type replenishment --json
bmall order validate --file order.json --json
bmall order submit --file order.json --dry-run --json
```

真实提交订单属于财务写操作，需要显式确认：

```bash
bmall order submit --file order.json --confirm --reason "客户确认下单" --json
```

### 运维排查订单问题

```bash
bmall ops order diagnose --order-no <ORDER_NO> --json
bmall ops order relations --order-no <ORDER_NO> --json
bmall ops order timeline --order-no <ORDER_NO> --json
bmall ops order blocking-reasons --order-no <ORDER_NO> --json
```

待审核订单：

```bash
bmall pending-order detail --order-id <PENDING_ORDER_ID> --json
bmall pending-order review-check --order-id <PENDING_ORDER_ID> --json
bmall ops order diagnose-pending --order-id <PENDING_ORDER_ID> --json
```

### Agent 快速接入

```bash
bmall manifest list --json
bmall manifest get order.submit --json
bmall agent knowledge --json
bmall agent explain-error --error-code 401700000 --json
```

Agent 建议流程：

1. 先用 `manifest list/get` 读取命令、参数、访问级别和执行策略。
2. 对所有真实业务命令加 `--json`。
3. 写操作先 dry-run，再让用户确认 `--confirm --reason`。
4. 遇到错误码先调 `agent explain-error`，再调用对应 `ops` 诊断命令。
5. 不要把 token、cookie、authorization header 放进 prompt 或日志。

## 能力地图

完整参数和输出列以 `manifests/bmall.commands.json` 与 `docs/command-reference.md` 为准。

| 能力域 | 当前可以做到的事情 | 典型命令 | 安全边界 |
| --- | --- | --- | --- |
| 环境与 profile | 查看版本、环境、baseUrl、profile，切换默认 profile，配置自定义 API 地址。 | `version`、`doctor`、`profile list`、`profile set-env` | 本地配置操作，不改业务数据。 |
| 登录认证 | 浏览器辅助登录、账号密码登录、导入 token、续期、退出、查看当前身份。 | `auth login`、`auth import-token`、`auth renew`、`whoami` | token 不应提交到仓库；输出会脱敏。 |
| 多品牌和门店 | 查询并切换品牌/集团、门店/公司，兼容老 Bmall 和 IAM 账号。 | `company groups`、`company switch-group`、`company list`、`company switch` | 切换后保存新 token 上下文；`company use` 只改本地默认值。 |
| 权限 | 查看当前权限，判断某个权限点是否可用。 | `permission list`、`permission check` | 只做当前 token 视角判断，不绕过权限。 |
| 商品 | 搜索商品、查看详情、SKU/SKC、尺码配比、标签。 | `product search`、`product get`、`product sku`、`product size-ratio` | 只读查询。 |
| 库存 | 查询 SKU/公司维度库存。 | `stock check` | 只读查询，不触发同步。 |
| 购物车 | 查看、加购、移除、清空购物车。 | `cart list`、`cart add`、`cart remove`、`cart clear` | 写操作需要确认和审计。 |
| 通用订单 | 计划、校验、提交、查询、取消、发货、发票。 | `order plan`、`order validate`、`order submit`、`order get` | 真实提交必须 `--confirm --reason`。 |
| 订单类型和规则 | 发现订单类型，解释规则链和流程链。 | `order-type list`、`order-rule explain`、`order-flow inspect` | 用于规划和诊断，不代表所有类型都开放真实提交。 |
| 补货订单 | 普通补货订单 plan、validate、submit、diagnose。 | `replenishment plan`、`replenishment submit` | 写操作受门禁保护。 |
| 多门店补货 | 多门店补货 plan、validate、submit、diagnose。 | `multi-store-order plan`、`multi-store-order validate` | 适合一个草稿覆盖多个门店。 |
| 中短期订单 | 查询活动、公司、模型、规则、货品、规则状态和提货列表，并执行校验/提交/诊断。 | `mid-order activity`、`mid-order rules`、`mid-order submit` | 先确认活动和模型，再提交。 |
| 柔供预售 | 查询活动和货品、查看购物车、加购、取消、校验、提交、诊断。 | `supply-presale activity`、`supply-presale cart`、`supply-presale add` | 加购、取消、提交都是写操作。 |
| 预售提货 | 查询提货单、详情、货品、关联预售单，拒绝或提交提货。 | `pickup list`、`pickup related-presale`、`pickup submit` | 拒绝或提交需要确认。 |
| 新店订单 | 查询新店订单、详情、货品、关联订单，生成确认计划，执行新店提货链路。 | `new-store-order list`、`new-store-order confirm-plan`、`new-store-order submit` | dry-run 会展示完整调用链。 |
| 待审核订单 | 查看来源类型、详情、审核前检查、审核、取消、诊断。 | `pending-order detail`、`pending-order review-check`、`pending-order review` | 审核/取消是高风险写操作。 |
| 订单运维 | 诊断订单、待审核单、时间线、关联对象、阻断原因、拆单、同步检查、导出。 | `ops order diagnose`、`ops order diagnose-pending`、`ops order relations` | 没有安全 API 的能力会明确返回 unsupported。 |
| 地址排查和修复 | 查询地址、检查省市区和详细地址完整性，patch 可修改的手工地址。 | `ops address check`、`ops address patch` | MDM 地址禁止 CLI 直接修改。 |
| 商品运维 | 查主数据、商品应用、商品组、套装、标签、价格，执行受控导入/应用更新/图片同步。 | `ops product master search`、`ops product apply list`、`ops product image-sync` | 导入和更新先 dry-run，再确认。 |
| 库存运维 | 查询库存和同步状态。 | `ops stock query`、`ops stock sync-status` | 不暴露任意同步 job。 |
| 客户/门店/经销商 | 查询客户、门店、经销商基础信息。 | `ops customer get`、`ops store get`、`ops retailer get` | 只读查询，敏感字段脱敏。 |
| IAM | 查询 IAM 用户和角色。 | `ops iam user`、`ops iam role` | 不修改 IAM 权限。 |
| 异步导出任务 | 查询任务、轮询完成、下载文件。 | `ops export task list`、`ops export task wait`、`ops export task download` | 轮询有超时；下载路径显式指定。 |
| Allowlist job | 查看和运行 allowlist 中的安全 job。 | `ops job list`、`ops job run` | 禁止通用 `schedule/dowork`。 |
| 配置与日志缺口 | 明确标识仍需要后端安全 facade 的配置/日志能力。 | `ops config get`、`ops log api` | 返回 `*_REQUIRES_BACKEND_FACADE`，不伪装成功。 |
| Agent 能力发现 | 暴露命令契约、参数、访问级别、输出列和执行策略。 | `manifest list`、`manifest get` | manifest 与 Commander 命令有测试约束。 |
| Agent 诊断知识 | 查看内置诊断知识包，按错误码返回根因、排查命令和修复路径。 | `agent knowledge`、`agent explain-error` | 诊断知识随 CLI 发布；未知错误给通用升级路径。 |

## 支持的订单类型

CLI 使用独立 adapter 建模不同订单链路。

| 类型 | 说明 | 常用命令 |
| --- | --- | --- |
| `replenishment` | 普通补货订单 | `replenishment plan`、`replenishment submit` |
| `multi-store-replenishment` | 多门店补货订单 | `multi-store-order plan`、`multi-store-order validate` |
| `mid-presale` | 中短期订单 | `mid-order activity`、`mid-order rules`、`mid-order submit` |
| `supply-presale` | 柔供预售订单 | `supply-presale activity`、`supply-presale cart`、`supply-presale submit` |
| `pickup` | 预售提货单 | `pickup list`、`pickup items`、`pickup submit` |
| `new-store` | 新店订单/新店提货链路 | `new-store-order list`、`new-store-order confirm-plan`、`new-store-order submit` |
| `pending-review` | 待审核订单 | `pending-order detail`、`pending-order review-check`、`pending-order review` |
| `one-piece-pending` | 一件代发待审核补货 | 作为可发现订单类型参与规则识别 |
| `live-presale`、`direct-package`、`intellect-ai-replenishment`、`sales-repurchase` | 扩展订单类型 | 可发现，不作为默认提交入口 |

新店订单 dry-run 提交会明确输出完整链路：

```text
checkPickupGoods -> orderConfirm -> orderPreCheck -> pick/b2bOrder/add
```

## 典型排障：Puma 订单审核地址报错

如果审核时报 `[401700000] 收货地址不完整，请先维护区`，这通常不是账户余额问题，而是收货地址区县字段缺失。后端会校验 `provinceName`、`cityName`、`regionName` 和详细地址；其中 `regionName` 为空或仍为占位值 `区` 时会阻断审核。

先让 CLI 解释错误：

```bash
bmall agent explain-error --error-code 401700000 --json
```

再切到 Puma 对应品牌和门店，诊断订单和地址：

```bash
bmall company groups --json
bmall company switch-group --group-id <PUMA_GROUP_ID> --json
bmall company list --sword "<门店关键字>" --json
bmall company switch --company-id <COMPANY_ID> --json
bmall ops order diagnose-pending --order-id <PENDING_ORDER_ID> --json
bmall ops address check --company-id <COMPANY_ID> --json
```

如果是不来自 MDM 的手工地址，可以先 dry-run，再确认修复：

```bash
bmall ops address patch --company-id <COMPANY_ID> --address-id <ADDRESS_ID> --region-name <区县> --region-code <区县编码> --dry-run --json
bmall ops address patch --company-id <COMPANY_ID> --address-id <ADDRESS_ID> --region-name <区县> --region-code <区县编码> --confirm --reason "补齐订单审核收货地址区县" --json
```

如果地址来源是 MDM，CLI 会阻止直接 patch，需要先修门店主数据并同步到 Bmall。

## 输出约定

业务脚本和 Agent 推荐统一使用 `--json`。成功输出通常包含：

```json
{
  "ok": true,
  "requestId": "cli_...",
  "data": {},
  "warnings": [],
  "meta": {}
}
```

失败输出通常包含：

```json
{
  "ok": false,
  "requestId": "cli_...",
  "error": {
    "code": "AUTH_REQUIRED",
    "message": "No token bundle saved for profile default",
    "recover": "Run `bmall auth login` or `bmall auth import-token`."
  }
}
```

支持请求建议提供这些脱敏信息：

- `requestId`
- `profile`、`env`、`groupId`、`companyId`
- `orderNo` 或 `pendingOrderId`
- 错误码和错误原文
- `bmall agent knowledge --json` 输出里的知识包版本

不要发送 token、cookie、authorization header、完整手机号或身份证号。

## 安全原则

- 不记录 token、password、cookie、完整手机号、身份证号或 authorization header。
- 本地审计记录写入 `~/.bmall-cli/audit/YYYY-MM-DD.jsonl`。
- 业务命令不通过浏览器自动化执行。
- 订单提交、审核、地址 patch、商品应用更新、job run 等写操作必须经过 dry-run 或 `--confirm --reason`。
- 通用 `schedule/dowork` 被禁止；job 只能走 `manifests/job-allowlist.json`。
- 没有确认安全 API 的页面专属流程会返回 `*_REQUIRES_BACKEND_FACADE` 或 unsupported，不会返回假成功。

## 项目结构

```text
.
├── src/                    # TypeScript 源码
│   ├── auth/               # 登录、token、profile/session
│   ├── core/               # HTTP、配置、输出、错误、manifest、审计、脱敏
│   └── domains/            # 业务命令域
├── manifests/              # Agent 命令契约和 job allowlist
├── docs/                   # 安全、Agent 使用、运维 runbook、命令参考
├── tests/                  # Vitest 单测和 contract 测试
└── scripts/                # 文档生成脚本
```

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
node dist/cli.js agent knowledge --json
node dist/cli.js order submit --file order.json --dry-run --json
```

新增或改名命令时，请同步更新：

- Commander 注册
- `manifests/bmall.commands.json`
- `docs/command-reference.md`
- 相关单测，尤其是 manifest contract 测试

## 更多文档

| 文档 | 内容 |
| --- | --- |
| `docs/command-reference.md` | 完整命令、参数和输出列 |
| `docs/agent-usage.md` | Agent 调用方式和规划建议 |
| `docs/operations-runbook.md` | 运维排障 runbook |
| `docs/security.md` | 安全和脱敏规则 |
| `docs/source-code-navigation.md` | 从 CLI 跳到 Bmall 后端/前端源码的排查路线 |
