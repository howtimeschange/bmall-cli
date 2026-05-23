import { mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { describe, expect, it } from 'vitest';
import { Command } from 'commander';
import { assertWriteGate, authorizeWriteGate } from '../../src/domains/ops/safety.js';
import { registerJobCommands } from '../../src/domains/job/commands.js';
import { registerPendingOrderCommands } from '../../src/domains/pending-order/commands.js';
import { registerOrderCommands } from '../../src/domains/order/commands.js';

describe('write safety gates', () => {
  it('uses stable errors for write, destructive, and financial gates', () => {
    expect(() => assertWriteGate({}, 'write')).toThrow('WRITE_REQUIRES_DRY_RUN_OR_CONFIRM');
    expect(() => assertWriteGate({ confirm: true }, 'write')).toThrow('WRITE_REQUIRES_REASON');
    expect(() => assertWriteGate({ confirm: true }, 'destructive')).toThrow('WRITE_REQUIRES_REASON');
    expect(() => assertWriteGate({}, 'financial')).toThrow('FINANCIAL_REQUIRES_DRY_RUN_OR_CONFIRM');
    expect(() => assertWriteGate({ confirm: true }, 'financial')).toThrow('WRITE_REQUIRES_REASON');
    expect(() => assertWriteGate({ confirm: true, reason: 'customer authorized submit' }, 'financial')).not.toThrow();
  });

  it('can collect interactive write authorization and reason', async () => {
    const options: { confirm?: boolean; reason?: string } = {};
    const prompts: string[] = [];
    const answers = ['yes', '同步门店主数据'];

    await authorizeWriteGate(options, 'write', {
      command: 'ops.store.mdm.confirm',
      summary: '确认 1 个门店 MDM 暂存记录到业务档案',
      interactive: true,
      question: async (prompt) => {
        prompts.push(prompt);
        return answers.shift() ?? '';
      },
    });

    expect(options).toMatchObject({ confirm: true, reason: '同步门店主数据' });
    expect(prompts.join('\n')).toContain('ops.store.mdm.confirm');
    expect(prompts.join('\n')).toContain('确认 1 个门店 MDM 暂存记录到业务档案');
  });

  it('keeps stable non-interactive errors without prompting', async () => {
    await expect(
      authorizeWriteGate({ json: true }, 'financial', {
        command: 'order.submit',
        question: async () => {
          throw new Error('SHOULD_NOT_PROMPT');
        },
      }),
    ).rejects.toThrow('FINANCIAL_REQUIRES_DRY_RUN_OR_CONFIRM');
  });

  it('audits job run dry-runs with redacted fixed params', async () => {
    const dir = await mkdtemp(join(tmpdir(), 'bmall-job-audit-'));
    const allowlistPath = join(dir, 'jobs.json');
    await writeFile(
      allowlistPath,
      JSON.stringify({
        jobs: [
          {
            jobId: 'safeEnabledJob',
            module: 'product',
            description: 'safe enabled job',
            enabled: true,
            status: 'enabled',
            requiresApproval: false,
            targetObject: 'safeEnabledJob',
            targetMethod: 'execute',
            fixedParams: { tokenId: 'job-secret-token', scope: 'fixed' },
          },
        ],
      }),
    );
    const outputs: unknown[] = [];
    const program = new Command().exitOverride();
    registerJobCommands(program, undefined, allowlistPath, (payload) => outputs.push(payload), dir);

    await program.parseAsync(['node', 'bmall', 'job', 'run', '--job-id', 'safeEnabledJob', '--dry-run', '--json']);

    const auditFile = join(dir, 'audit', `${new Date().toISOString().slice(0, 10)}.jsonl`);
    const audit = JSON.parse((await readFile(auditFile, 'utf8')).trim());
    expect(outputs[0]).toMatchObject({ ok: true, mode: 'dry-run', jobId: 'safeEnabledJob' });
    expect(audit).toMatchObject({ command: 'ops.job.run', access: 'write', result: 'dry-run' });
    expect(JSON.stringify(audit)).not.toContain('job-secret-token');
  });

  it('guards pending-order destructive commands before API execution', async () => {
    const outputs: unknown[] = [];
    const calls: unknown[] = [];
    const client = {
      request: async (...args: unknown[]) => {
        calls.push(args);
        return { ok: true };
      },
    };
    const program = new Command().exitOverride();
    registerPendingOrderCommands(program, (payload) => outputs.push(payload), client);

    await expect(program.parseAsync(['node', 'bmall', 'pending-order', 'cancel', '--order-id', '10001', '--confirm'])).rejects.toThrow(
      'WRITE_REQUIRES_REASON',
    );
    await program.parseAsync(['node', 'bmall', 'pending-order', 'source-type', '--order-id', '10001', '--json']);

    expect(calls.at(-1)).toEqual(['POST', 'b2b/pendingReviewOrder/mini/orderSourceType/check', { orderId: '10001' }]);
    expect(outputs.at(-1)).toMatchObject({ ok: true });
  });

  it('throws a stable error when CLI order submit has no dry-run or confirm', async () => {
    const dir = await mkdtemp(join(tmpdir(), 'bmall-order-submit-gate-'));
    const draftPath = join(dir, 'draft.json');
    await writeFile(draftPath, JSON.stringify({ companyId: '20001', orderType: 'replenishment', items: [{ skuCode: 'SKU001', quantity: 1 }] }));
    const program = new Command().exitOverride();
    registerOrderCommands(program, () => undefined);

    await expect(program.parseAsync(['node', 'bmall', 'order', 'submit', '--file', draftPath])).rejects.toThrow(
      'FINANCIAL_REQUIRES_DRY_RUN_OR_CONFIRM',
    );
  });

  it('throws a stable error when CLI order submit has confirm but no reason', async () => {
    const dir = await mkdtemp(join(tmpdir(), 'bmall-order-submit-reason-'));
    const draftPath = join(dir, 'draft.json');
    await writeFile(draftPath, JSON.stringify({ companyId: '20001', orderType: 'replenishment', items: [{ skuCode: 'SKU001', quantity: 1 }] }));
    const program = new Command().exitOverride();
    registerOrderCommands(program, () => undefined);

    await expect(program.parseAsync(['node', 'bmall', 'order', 'submit', '--file', draftPath, '--confirm'])).rejects.toThrow(
      'WRITE_REQUIRES_REASON',
    );
  });
});
