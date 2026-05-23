# Bmall CLI Agent Usage

The Bmall CLI is API-first. Business commands do not use browser automation, DOM reading, screenshots, CDP, or network interception. Browser usage is limited to interactive login bootstrap handled by the auth domain.

Agents should discover supported commands from `manifests/bmall.commands.json`. Every command declares `audience`, `access`, `auth`, `browser`, `args`, and output `columns`.

## Operations Pattern

Use read commands first:

```bash
bmall ops order diagnose --order-no DH202605230001 --json
bmall ops product master search --item-code SM123 --json
bmall ops export task list --type order --json
```

For write commands, run a dry run before requesting approval:

```bash
bmall ops product apply update --input apply-items.csv --dry-run --json
bmall ops product apply update --input apply-items.csv --confirm --reason "approved product application change" --json
```

Job commands are intentionally narrow:

```bash
bmall ops job list --module order --json
```

`schedule/dowork` is not exposed as a generic command. A job can dry-run only when it is enabled in `manifests/job-allowlist.json`; an actual run also requires `--confirm --reason`.

`auth.renew` is implemented and renews the saved token through `manage/app/token/renewal`.

`agent.*` commands are not implemented in this CLI slice. The manifest lists `agent.explain-error` only as an explicit unsupported placeholder so agents do not assume an executable local agent API exists.

Order submit must be treated as financial. Without a real API runtime, even `--confirm` returns blocked/unsupported; never infer success from an offline plan.

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

Agents can depend on these keys even when backend support is partial.
