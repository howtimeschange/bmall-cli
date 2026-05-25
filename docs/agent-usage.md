# Bmall CLI Agent Usage

The Bmall CLI is API-first. Business commands do not use browser automation, DOM reading, screenshots, CDP, or network interception. Browser/CDP usage is limited to interactive login bootstrap handled by the auth domain.

Agents should discover supported commands from `manifests/bmall.commands.json`. Every command declares `audience`, `access`, `auth`, `browser`, `args`, and output `columns`.

Released CLI bundles are designed for external users who do not have local access to the Bmall source repositories. Known diagnosis rules are therefore shipped inside the CLI itself as a bundled knowledge pack:

```bash
bmall agent knowledge --json
```

This command exposes the knowledge pack id, schema version, bundled version, source-knowledge snapshot metadata, and the currently included error summaries. `sourceReposRequired: false` means the published CLI package carries enough packaged knowledge for first-line diagnosis without local source code.

## 品牌和门店上下文

Bmall 是多品牌系统。做订单、商品、库存或排障前，先确认当前 token 所在品牌和门店：

```bash
bmall company groups --json
bmall company switch-group --brand <品牌名称或编码> --json
bmall company list --json
bmall company switch --company-id <companyId> --json
bmall whoami --json
```

CLI 会根据 token bundle 自动判断账号类型：老 Bmall 账号走 `manage/app/Common/*`，IAM 账号走 `hr/iamUser/*`。Agent 优先用 `--brand` 传人可读的品牌名称或编码，例如 `--brand 巴拉`、`--brand C328`；如果匹配不唯一，再使用稳定的 `groupId/companyId`。只有人工从老后台拿到了内部 ID 时，才使用 `--sg-id` 或 `--sc-id`。

## Operations Pattern

Use read commands first:

```bash
bmall ops order diagnose --order-no DH202605230001 --json
bmall ops order diagnose-pending --order-id 10001 --json
bmall ops address check --company-id <companyId> --json
bmall ops product master search --item-code SM123 --json
bmall ops export task list --type order --json
```

For write commands, run a dry run before requesting approval:

```bash
bmall ops product apply update --input apply-items.csv --dry-run --json
bmall ops product apply update --input apply-items.csv --confirm --reason "approved product application change" --json
```

Agents must treat every business-state mutation as user-authorized only. Do not execute create, update, delete, clear, cancel, cart mutation, order submit, pending-order review, pickup refusal, address create/update/patch/delete/default, MDM sync confirm/sync-by-* commands, product application update, product import, image sync, or job run unless the user has explicitly approved the exact operation. Use `--dry-run` first, then execute the real command only with `--confirm --reason`. The interactive terminal confirmation is for humans; Agent and `--json` calls must stay non-interactive.

Job commands are intentionally narrow:

```bash
bmall ops job list --module order --json
```

`schedule/dowork` is not exposed as a generic command. A job can dry-run only when it is enabled in `manifests/job-allowlist.json`; an actual run also requires `--confirm --reason`.

`auth.renew` is implemented and renews the saved token through `manage/app/token/renewal`.

For login bootstrap, prefer an attached Chrome CDP session when available:

```bash
bmall auth login --browser --cdp --cdp-port 9222 --profile semir-prod --env prod --json
```

If no CDP Chrome is running, `--cdp-launch` starts a dedicated debug Chrome with an isolated profile under the CLI config directory. It does not affect the user's normal Chrome windows. The user logs in once in that dedicated browser, and the profile keeps the session for later CLI runs:

```bash
bmall auth login --browser --cdp --cdp-launch --profile semir-prod --env prod --json
```

If CDP is unavailable, fall back to `bmall auth login --browser`, then execute the emitted one-time `consoleSnippet` in the logged-in Bmall page.

Account/password login supports both user systems, but the user must choose the system explicitly:

```bash
bmall auth login --account-type bmall --account <mobile> --password '<password>' --profile semir-prod --env prod --json
bmall auth login --account-type iam --brand 森马 --account <mobile> --password '<password>' --profile semir-prod --env prod --json
```

Use `bmall` for the original ordering-mall account and `iam` for the IAM user-center account. IAM password login needs a brand context; pass a user-facing brand name or code with `--brand`, such as `森马` or `C326`, or reuse a profile that already has that brand saved. Do not guess the type for a user; ask them which system their username/password belongs to, or use CDP/browser login when they already have a valid web session.

`agent.explain-error` is a deterministic local helper. It does not call an LLM; it maps known Bmall error codes and messages to bundled diagnosis/remediation playbooks and returns the knowledge pack version with the answer.

When an external user escalates a case, ask them to include:

- `bmall agent knowledge --json` output version
- the failing command output
- `requestId`
- redacted `profile/env/groupId/companyId/orderId` or `orderNo`

Order submit must be treated as financial. Without a real API runtime, even `--confirm --reason` returns blocked/unsupported; never infer success from an offline plan.

## Puma/多品牌订单地址排障

如果审核报 `[401700000] 收货地址不完整，请先维护区`，先切到正确品牌和门店，再查地址完整性。这个错误不是账户余额不足，而是地址的 `regionName` 为空或仍是占位值 `区`。

```bash
bmall agent knowledge --json
bmall agent explain-error --error-code 401700000 --json
bmall company groups --json
bmall company switch-group --brand PUMAKIDS --json
bmall company list --sword "<门店关键字>" --json
bmall company switch --company-id <COMPANY_ID> --json
bmall ops order diagnose-pending --order-id <PENDING_ORDER_ID> --json
bmall ops address check --company-id <COMPANY_ID> --json
```

手工地址可以先 dry-run 修复：

```bash
bmall ops address patch --company-id <COMPANY_ID> --address-id <ADDRESS_ID> --region-name <区县> --region-code <区县编码> --dry-run --json
```

MDM 来源地址不要直接改，走门店主数据修正和同步。

MDM 主数据同步先看中间表和 diff，再确认写入档案：

```bash
bmall ops store mdm page --store-code <STORE_CODE> --json
bmall ops store mdm diff --company-code <STORE_CODE> --json
bmall ops store mdm confirm --company-codes <STORE_CODE> --dry-run --json

bmall ops retailer mdm page --retailer-code <RETAILER_CODE> --json
bmall ops retailer mdm diff --distributor-code <RETAILER_CODE> --json
bmall ops retailer mdm confirm --distributor-codes <RETAILER_CODE> --dry-run --json
```

真实 `confirm` 或 `sync-by-*` 写操作必须使用 `--confirm --reason`。不要在没有编码列表或明确 `--sync-all` 的情况下确认同步。

`ops config get/set`、`ops log api`、`ops log sync-warning` 当前只暴露为明确缺口：没有安全后端 facade 时会抛 `*_REQUIRES_BACKEND_FACADE`，不要把它们当成页面专属流程的替代命令。

## Stable Diagnosis Shape

`ops order diagnose` always returns:

```json
{
  "orderType": "unknown",
  "orderNo": "DH202605230001",
  "relation": {},
  "currentState": {},
  "ruleChain": [],
  "timeline": [],
  "amount": {},
  "items": [],
  "blockingIssues": [],
  "warnings": [],
  "nextActions": []
}
```

Agents can depend on these keys. The command requires a real API token/client and will not synthesize an empty diagnosis when the API is unavailable.
