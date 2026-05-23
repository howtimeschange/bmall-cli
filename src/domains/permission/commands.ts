import { Command } from 'commander';
import { ConfigManager } from '../../core/config.js';
import { printResult, success } from '../../core/output.js';
import { SessionStore } from '../../auth/session.js';
import type { GlobalOptions } from '../../auth/commands.js';
import type { TokenBundle } from '../../auth/token-bundle.js';

export function registerPermissionCommands(program: Command, getGlobals: () => GlobalOptions): void {
  const permission = program.command('permission').description('Permission commands');

  permission.command('list').description('List current token permissions').action(async () => {
    const globals = getGlobals();
    const resolved = await new ConfigManager(globals.configHome).resolve(globals);
    const bundle = await new SessionStore(undefined, globals.configHome).require(resolved.profile);
    printResult(success(resolved, extractPermissionCodes(bundle)), globals.json);
  });

  permission.command('check').description('Check a funCode against current token').requiredOption('--fun-code <code>', 'permission/function code').action(async (opts) => {
    const globals = getGlobals();
    const resolved = await new ConfigManager(globals.configHome).resolve(globals);
    const bundle = await new SessionStore(undefined, globals.configHome).require(resolved.profile);
    const codes = extractPermissionCodes(bundle);
    printResult(success(resolved, { funCode: opts.funCode, allowed: codes.includes(opts.funCode), codes }), globals.json);
  });
}

export function extractPermissionCodes(bundle: TokenBundle): string[] {
  const values = new Set<string>();
  visit(bundle.permissions, values);
  visit(bundle.menuData, values);
  return [...values].sort();
}

function visit(input: unknown, values: Set<string>): void {
  if (Array.isArray(input)) {
    for (const item of input) visit(item, values);
    return;
  }
  if (!input || typeof input !== 'object') return;
  const obj = input as Record<string, unknown>;
  for (const key of ['funCode', 'permissionCode', 'code', 'authCode', 'perms']) {
    const value = obj[key];
    if (typeof value === 'string' && value.trim()) values.add(value);
  }
  for (const value of Object.values(obj)) visit(value, values);
}
