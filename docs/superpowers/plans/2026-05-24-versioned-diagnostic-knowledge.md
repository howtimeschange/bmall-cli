# Versioned Diagnostic Knowledge Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a versioned diagnostic knowledge pack inside `bmall-cli` so external users can diagnose known Bmall failures without a local copy of the Bmall source repositories.

**Architecture:** Add a focused `src/domains/agent/diagnostic-knowledge.ts` module that owns bundled diagnostic metadata, error matching, and playbook lookup. Keep `src/domains/agent/commands.ts` as the Commander adapter and expose the knowledge through `agent explain-error` plus a small `agent knowledge` command. Update manifest/docs so external users understand the CLI carries source-derived knowledge but does not require source code locally.

**Tech Stack:** TypeScript, Commander, Vitest, existing JSON envelope output.

---

### Task 1: Failing Tests for Bundled Knowledge

**Files:**
- Modify: `tests/unit/agent.test.ts`

- [ ] **Step 1: Write failing tests**

Add assertions that `explainError("401700000")` returns `knowledgePack`, `playbook`, `evidence`, and `supportBundleHints`, and that a knowledge summary function exposes pack metadata.

- [ ] **Step 2: Run test to verify it fails**

Run: `./node_modules/.bin/vitest run tests/unit/agent.test.ts`

Expected: FAIL because the current result has only ad hoc fields and there is no knowledge summary export.

### Task 2: Bundled Diagnostic Knowledge Module

**Files:**
- Create: `src/domains/agent/diagnostic-knowledge.ts`
- Modify: `src/domains/agent/commands.ts`

- [ ] **Step 1: Implement minimal knowledge module**

Create typed diagnostic entries with pack id, schema version, version, last reviewed date, source summary, evidence level, message matchers, user-facing explanation, playbook steps, commands, and support bundle hints.

- [ ] **Step 2: Wire `commands.ts` to the module**

Make `explainError` call the matcher and return the versioned explanation. Preserve current behavior for unknown errors.

- [ ] **Step 3: Run agent tests**

Run: `./node_modules/.bin/vitest run tests/unit/agent.test.ts`

Expected: PASS.

### Task 3: CLI and Manifest Surface

**Files:**
- Modify: `src/domains/agent/commands.ts`
- Modify: `src/core/manifest.ts`
- Modify: `manifests/bmall.commands.json`
- Test: `tests/unit/manifest-contract.test.ts`

- [ ] **Step 1: Add `agent knowledge` command**

Expose pack metadata and entry summaries without requiring login or source repos.

- [ ] **Step 2: Update manifest columns**

Add `agent.knowledge` and expand `agent.explain-error` columns to include `knowledgePack`, `playbook`, `evidence`, and `supportBundleHints`.

- [ ] **Step 3: Run manifest tests**

Run: `./node_modules/.bin/vitest run tests/unit/agent.test.ts tests/unit/manifest-contract.test.ts`

Expected: PASS.

### Task 4: External Distribution Docs

**Files:**
- Modify: `docs/agent-usage.md`
- Modify: `docs/operations-runbook.md`
- Modify: `README.md`

- [ ] **Step 1: Document external-user model**

Explain that released CLI packages include versioned diagnostic knowledge derived from internal source review, while external users do not need source repos.

- [ ] **Step 2: Document support escalation**

Tell users to share command output, request id, knowledge pack version, and redacted context when a case is not covered.

- [ ] **Step 3: Run docs/agent tests**

Run: `./node_modules/.bin/vitest run tests/unit/agent.test.ts`

Expected: PASS.
