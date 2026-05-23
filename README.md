# Bmall CLI

Bmall CLI 是面向 Semir Reabam/Bmall 订货系统的 API-first 命令行客户端。

它给两类用户提供稳定接口：

- 普通客户和 AI Agent：搜索商品、查看 SKU、检查购物车和订单状态、生成确定性的订单草稿、校验规则链，并对支持的订单流程执行 dry-run 或受控提交。
- 系统运维：诊断订单、检查商品主数据和商品应用、排查库存/客户/IAM 上下文、归一化导出任务，并且只运行 allowlist 中明确允许的 job。

业务命令不使用浏览器自动化、DOM 读取、截图、CDP 或网络拦截。浏览器只用于交互式登录引导。

## 当前状态

- 运行时：Node.js 20+
- 包管理器：pnpm 9.15.0
- 语言：TypeScript
- 命令 manifest：`manifests/bmall.commands.json` 中 85 条命令
- 生产 API 默认地址：`https://bmall-api.semirapp.com/api`
- 生产网页登录默认地址：`https://bmall.semirapp.com/`

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

订单提交属于财务写操作，默认受保护。真实提交需要 `--confirm`；未接入真实 API 或不支持的提交路径会返回 blocked/unsupported，不会伪装成成功。

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
bmall ops export task wait --task-id 10001 --timeout 10m --json
bmall ops job list --module order --json
```

写操作必须先 dry-run 或显式确认：

```bash
bmall ops product apply update --input apply-items.csv --dry-run --json
bmall ops product apply update --input apply-items.csv --confirm --reason "已审批商品应用调整" --json
```

通用 `schedule/dowork` 被明确禁止。Job 执行只允许读取 `manifests/job-allowlist.json` 中的 allowlist。

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
