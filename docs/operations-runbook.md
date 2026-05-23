# Operations Runbook

## Order Diagnosis

Start with the normalized diagnosis command:

```bash
bmall ops order diagnose --order-no DH202605230001 --json
```

Then inspect focused views only when needed:

```bash
bmall ops order relations --order-no DH202605230001 --json
bmall ops order timeline --order-id 10001 --json
bmall ops order blocking-reasons --type mid-presale --file draft.json --json
bmall ops order split-check --type pickup --pickup-order-id PK001 --json
bmall ops order sync-check --type mid-presale --presale-order-id P001 --json
```

Do not use CLI write commands for split, SAP sync, order adjustment, or cancellation unless those operations are later placed behind a dedicated allowlist.

## Product, Stock, And Context

Read commands:

```bash
bmall ops product master search --item-code SM123 --json
bmall ops product apply list --item-code SM123 --json
bmall ops stock query --sku-code SKU001 --json
bmall ops customer get --company-code C001 --json
bmall ops store get --company-id 123 --json
bmall ops retailer get --distributor-id D001 --json
```

Write commands must be dry-run or confirmed with a reason:

```bash
bmall ops product apply update --input apply-items.csv --dry-run --json
bmall ops product image-sync --item-code SM123 --confirm --reason "refresh approved product imagery" --json
```

Order submit is treated as a financial write. Dry-run is allowed for planning, but a confirmed submit will still return blocked/unsupported unless the caller supplies a real API runtime; the CLI must not synthesize offline success order numbers.

Pending order `source-type`, `review`, and `cancel` are skeleton commands only. `review` and `cancel` keep the same safety gate as real writes, but they do not execute backend writes until an API mapping is implemented.

## Export Tasks

Export responses are normalized into:

- `direct-url`: response includes `downloadURL`, `downloadUrl`, `fileUrl`, or `url`.
- `async-task`: response includes `taskId`, `taskCode`, or `recordId`.
- `stream`: response is a file stream or binary attachment.
- `pending`: response says `isAsyn: true` but does not include a task id.

Commands:

```bash
bmall ops export task list --type order --json
bmall ops export task get --task-id 10001 --json
bmall ops export task wait --task-id 10001 --timeout 10m --json
bmall ops export task download --task-id 10001 --output order.xlsx
```

Pending records are written under `~/.bmall-cli/exports/pending.json` so operators can request a backend task-query mapping instead of guessing.

## Jobs

Only allowlisted jobs are visible:

```bash
bmall ops job list --module order --json
```

`orderDailyStatJob` is present as a pending approval candidate and is disabled by default. Running a job requires all of the following:

- The job is enabled in `manifests/job-allowlist.json`.
- The command supplies `--dry-run` for rehearsal, or `--confirm --reason` for an actual run.
- The CLI sends fixed target object, method, and parameters from the allowlist.

The CLI must never accept arbitrary `targetObject`, `targetMethod`, or `schedule/dowork` values from command arguments.
