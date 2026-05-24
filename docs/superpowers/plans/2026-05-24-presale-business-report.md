# Presale Business Report Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a formal `report presale-business` CLI command that generates JSON and Excel summary/detail reports for flexible-supply and middle/short-term presale business.

**Architecture:** Keep API orchestration and normalized metric calculation in a focused presale report module under `src/domains/report/`, and keep workbook generation/parsing in a companion Excel module backed by a distributable pure-JavaScript spreadsheet dependency. Register a thin Commander action in the existing report command surface and preserve the existing `pickup-customer-skc` command.

**Tech Stack:** Node.js 20+, TypeScript, Commander, Vitest, `exceljs`, existing Bmall API client.

---

### Task 1: Lock The Reporting Contract With Tests

**Files:**
- Modify: `tests/unit/report.test.ts`

- [ ] **Step 1: Add a failing `mid` report test**

Test `report presale-business --source mid --start-date ... --end-date ... --output ...` with two activities where only one is in range. Assert that the order and pickup requests contain only the in-range activity id, the normalized summary contains order/customer/pickup/market-value metrics, and an `.xlsx` file is written.

- [ ] **Step 2: Add a failing `supply` export amount test**

Provide a fake completed asynchronous export and a downloaded workbook containing a `totalPrice` value. Assert that the command calls `file/supply/presale/order/export`, resolves the exported amount, and records an export-backed amount basis.

- [ ] **Step 3: Confirm RED**

Run: `./node_modules/.bin/vitest run tests/unit/report.test.ts`

Expected: FAIL because `report presale-business` is not registered.

### Task 2: Implement Data Collection And Excel Output

**Files:**
- Create: `src/domains/report/presale-business.ts`
- Create: `src/domains/report/presale-workbook.ts`
- Modify: `src/domains/report/commands.ts`
- Modify: `package.json`
- Modify: `pnpm-lock.yaml`

- [ ] **Step 1: Add spreadsheet runtime dependency**

Add `exceljs` as a production dependency so installed CLI packages can read the supply export and generate a formatted workbook with filters and frozen headers without relying on local temporary tooling.

- [ ] **Step 2: Implement source mappings and pagination**

Define the supply/mid activity, order, pickup-activity, and pickup-customer endpoint mappings. Normalize activity identifiers/dates, filter the inclusive window, page through selected result sets, and compute shared summary metrics.

- [ ] **Step 3: Implement amount resolution**

For `mid`, aggregate `goodsTotalPrice` from fetched order rows. For `supply`, start the existing `allActAllOrder` export, poll existing export tasks until success or timeout, download it, and sum the exported `totalPrice` column. Throw a clear error if the required amount cannot be resolved.

- [ ] **Step 4: Implement workbook writer**

Write a formatted workbook with `总结`, `活动明细`, `客户提货`, `订单明细`, and `口径说明` sheets, then return the absolute output path in the JSON result.

- [ ] **Step 5: Wire the Commander command**

Register `presale-business` under `report` with source, date-window, output, activity filter, paging, and export polling options.

- [ ] **Step 6: Confirm GREEN**

Run: `./node_modules/.bin/vitest run tests/unit/report.test.ts`

Expected: PASS.

### Task 3: Publish The Formal Command Surface

**Files:**
- Modify: `src/core/manifest.ts`
- Modify: `manifests/bmall.commands.json`
- Modify: `scripts/generate-command-docs.ts`
- Modify: `docs/command-reference.md`
- Modify: `tests/unit/command-surface-smoke.test.ts`

- [ ] **Step 1: Add manifest metadata**

Register `report.presale-business` with read access, arguments, and summary/detail columns while retaining the existing `report.pickup-customer-skc` entry.

- [ ] **Step 2: Include report commands in generated documentation**

Extend the current generator filter from `ops.*` to also include `report.*`, so the already-present customer + SKC command is visible in the formal command reference.

- [ ] **Step 3: Add smoke stubs and scenario**

Provide minimal middle/short-term response fixtures and an output path scenario so the manifest-driven CLI smoke test runs the new command through the real registration surface.

- [ ] **Step 4: Validate surface**

Run: `./node_modules/.bin/vitest run tests/unit/manifest-contract.test.ts tests/unit/command-surface-smoke.test.ts`

Expected: PASS.

### Task 4: Validate The Deliverable

**Files:**
- Review: `src/domains/report/*.ts`
- Review: `docs/command-reference.md`

- [ ] **Step 1: Regenerate command docs**

Run: `./node_modules/.bin/tsx scripts/generate-command-docs.ts manifests/bmall.commands.json docs/command-reference.md`

- [ ] **Step 2: Run focused validation**

Run: `./node_modules/.bin/vitest run tests/unit/report.test.ts tests/unit/manifest-contract.test.ts tests/unit/command-surface-smoke.test.ts`

- [ ] **Step 3: Run build**

Run: `./node_modules/.bin/tsc -p tsconfig.json`

- [ ] **Step 4: Inspect generated workbook**

Read the workbook written by the report test and assert that the required sheets and key summary cells exist. Attempt a visual workbook render with the workspace spreadsheet runtime; if the known native rendering dependency cannot load, report that limitation with the programmatic workbook verification evidence.
