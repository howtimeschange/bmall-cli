# Security

## Secret Handling

The CLI must not log tokens, passwords, cookies, full phone numbers, ID numbers, or authorization headers. Local audit redaction treats fields matching `token`, `tokenId`, `password`, `mobile`, `phone`, `idNo`, `authorization`, or `cookie` as secret.

Token storage belongs to the auth/core implementation. This Worker C scope only adds audit redaction for operations records.

## Access Levels

- `read`: list, search, get, diagnose, export task read.
- `write`: configuration changes, product imports, product application updates, image sync, job run.
- `destructive`: delete, clear, cancel, remove. These must use `--dry-run`, `--confirm --reason`, or an interactive terminal confirmation.
- `financial`: order submit or payment-related actions. These must use `--dry-run`, `--confirm --reason`, or an interactive terminal confirmation.

Any operation that changes Bmall business state must be user-authorized before execution. This includes create, update, delete, clear, cancel, cart mutation, order submit, pending-order review, pickup refusal, address patch, product application update, product import, image sync, and job run.

Write operations must use either `--dry-run` or an explicit authorization path. For scripts, automation, and Agent JSON calls, the authorization path is `--confirm --reason`. For a human running the CLI in an interactive TTY without `--json`, the CLI displays the command and impact summary, asks for `yes`, then asks for a non-empty authorization reason before continuing. Job run requires `--dry-run` or authorization plus an enabled allowlist entry. Order submit must never report `submitted: true` unless an API runtime is wired, authorization is present, and the API call succeeds; confirmed offline submits return blocked/unsupported.

## Browser Policy

Operations, export, and job commands are API-first. Manifest entries set `browser: false`. Browser login bootstrap may be implemented by auth, but these business commands must not read DOM, automate pages, intercept browser traffic, or depend on screenshots.

## Job Policy

Generic `schedule/dowork` is forbidden because it can reflectively call arbitrary backend beans and methods. The CLI only reads `manifests/job-allowlist.json`. Disabled or pending approval jobs are visible for planning but cannot run.

## Audit

Local audit records are JSONL files under:

```text
~/.bmall-cli/audit/YYYY-MM-DD.jsonl
```

Records include timestamp, profile/env, user/company/group, command, redacted args, access level, request id, and result status. Server-side audit should be added before using write operations as a compliance source of record.

Current audited local paths include order submit, operations writes, and allowlisted job runs. Audit files are local JSONL only and do not replace server audit.
