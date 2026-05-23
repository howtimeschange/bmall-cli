import { Command } from 'commander';
import { ConfigManager } from '../../core/config.js';
import { BmallHttpClient } from '../../core/http.js';
import { printResult, success } from '../../core/output.js';
import { SessionStore } from '../../auth/session.js';
import type { GlobalOptions } from '../../auth/commands.js';

export function registerCompanyCommands(program: Command, getGlobals: () => GlobalOptions): void {
  const company = program.command('company').description('Company context commands');

  company.command('list').description('List available companies').action(async () => {
    const globals = getGlobals();
    const config = new ConfigManager(globals.configHome);
    const resolved = await config.resolve(globals);
    const bundle = await new SessionStore(undefined, globals.configHome).require(resolved.profile);
    const client = new BmallHttpClient(resolved.baseUrl, bundle);
    const response = await client.send({
      method: 'POST',
      path: 'manage/app/Common/LoginCompanys',
      body: {
        sword: '',
        groupId: bundle.groupId
      },
      auth: { injectAuthToBody: true }
    });
    printResult(success(resolved, response.data, { source: 'api', durationMs: response.durationMs }), globals.json);
  });

  company.command('use').description('Set current company context in profile').requiredOption('--company-id <id>', 'company id').option('--company-name <name>', 'company name').action(async (opts) => {
    const globals = getGlobals();
    const config = new ConfigManager(globals.configHome);
    const resolved = await config.resolve(globals);
    const profile = await config.updateProfile(resolved.profile, { companyId: opts.companyId, companyName: opts.companyName });
    printResult(success(resolved, { profile }), globals.json);
  });
}
