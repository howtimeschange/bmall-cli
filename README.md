# Bmall CLI

API-first command line client for Semir Reabam/Bmall ordering operations.

The CLI gives two audiences a stable interface:

- Customers and AI agents can search products, inspect SKUs, check cart/order state, build deterministic order drafts, validate rule chains, and dry-run or submit supported order flows.
- Operations users can diagnose orders, inspect product master/application state, check stock/customer/IAM context, normalize export tasks, and run only allowlisted jobs.

Business commands do not use browser automation, DOM reading, screenshots, CDP, or request interception. Browser use is limited to interactive login bootstrap.

## Status

- Runtime: Node.js 20+
- Package manager: pnpm 9.15.0
- Language: TypeScript
- Command manifest: 85 entries in `manifests/bmall.commands.json`
- Default production API base: `https://bmall-api.semirapp.com/api`
- Default production login page: `https://bmall.semirapp.com/`

## Install

```bash
pnpm install
pnpm build
pnpm link --global
bmall version --json
```

For local development without linking:

```bash
node dist/cli.js version --json
```

## Authentication

Recommended browser-assisted login:

```bash
bmall auth login --browser --env prod --profile semir-prod --json
```

The command opens the Bmall web login page and prints a loopback callback plus a console/bookmarklet snippet. The snippet reads only whitelisted localStorage fields and sends a token bundle to the local receiver.

Import an existing token bundle:

```bash
bmall auth import-token --env prod --profile semir-prod --from-file ./token-bundle.json --json
bmall whoami --profile semir-prod --env prod --json
```

One-command environment overrides are also supported:

```bash
BMALL_TOKEN=... bmall whoami --json
BMALL_TOKEN_BUNDLE='{"tokenId":"..."}' bmall whoami --json
```

Do not commit token files. The repo `.gitignore` excludes local credential and audit paths.

## Common Customer Flow

```bash
bmall product search --keyword "卫衣" --limit 20 --json
bmall product sku --skc-code S123456 --company-id 20001 --json
bmall stock check --sku-code SKU001 --company-id 20001 --json
bmall order-type list --json
bmall order-rule explain --type replenishment --json
bmall order validate --file order.json --json
bmall order submit --file order.json --dry-run --json
```

Financial writes are gated. A real submit requires `--confirm`; unsupported/offline submit paths return blocked or unsupported instead of pretending success.

## Supported Order Surfaces

The CLI models order flows with separate adapters:

- `replenishment`: normal replenishment order
- `multi-store-replenishment`: multi-store replenishment
- `mid-presale`: middle/short-term presale order
- `supply-presale`: flexible supply presale order
- `pickup`: presale pickup order
- `new-store`: new-store pickup/order flow
- `pending-review`: pending review order
- `one-piece-pending`: one-piece drop-shipping pending review
- `live-presale`, `direct-package`, `intellect-ai-replenishment`, `sales-repurchase`: discoverable extension surfaces, not default submit paths

Examples:

```bash
bmall mid-order activity --activity-id A001 --json
bmall mid-order rules --activity-id A001 --order-model-id M001 --json
bmall supply-presale cart --activity-id A001 --company-id 20001 --json
bmall pickup list --status wait --company-id 20001 --json
bmall new-store-order confirm-plan --new-store-order-id NS001 --batch-no B001 --json
bmall new-store-order submit --file new-store-pickup.json --dry-run --json
```

The new-store dry-run submit sequence is explicit:

```text
checkPickupGoods -> orderConfirm -> orderPreCheck -> pick/b2bOrder/add
```

## Operations Flow

```bash
bmall ops order diagnose --order-no DH202605230001 --json
bmall ops order relations --order-no DH202605230001 --json
bmall ops product master search --item-code SM123 --json
bmall ops product apply list --item-code SM123 --json
bmall ops stock sync-status --item-code SM123 --json
bmall ops export task wait --task-id 10001 --timeout 10m --json
bmall ops job list --module order --json
```

Write operations require either dry-run or explicit confirmation:

```bash
bmall ops product apply update --input apply-items.csv --dry-run --json
bmall ops product apply update --input apply-items.csv --confirm --reason "approved product application change" --json
```

Generic `schedule/dowork` is intentionally forbidden. Job execution is restricted to `manifests/job-allowlist.json`.

## Command Discovery

Use the manifest for AI-agent planning:

```bash
bmall manifest list --json
bmall manifest get order.submit --json
```

Every manifest entry declares audience, access level, strategy, arguments, columns, and `browser: false`.

## Development

```bash
pnpm install
pnpm build
pnpm test
pnpm docs
```

Useful smoke checks:

```bash
node dist/cli.js version --json
node dist/cli.js manifest list --json
node dist/cli.js order-type list --json
node dist/cli.js order submit --file order.json --dry-run --json
```

Security and operations docs live in:

- `docs/security.md`
- `docs/agent-usage.md`
- `docs/operations-runbook.md`
- `docs/command-reference.md`

## Safety Notes

- Tokens, passwords, cookies, full phone numbers, ID numbers, and authorization headers must not be logged.
- Local audit records are JSONL files under `~/.bmall-cli/audit/YYYY-MM-DD.jsonl`.
- Browser automation is not a business execution path.
- Read-only production smoke tests are safe; real order/config/job writes require approval gates and should be tested in non-production first.
