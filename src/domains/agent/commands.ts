import { Command } from "commander";
import {
  diagnosticEntries,
  explainKnownDiagnostic,
  explainUnknownDiagnostic,
  getDiagnosticKnowledgeSummary,
} from "./diagnostic-knowledge.js";

type OutputFn = (payload: unknown) => void;

export function explainError(code: string, message?: string) {
  return explainKnownDiagnostic(code, message) ?? explainUnknownDiagnostic(code);
}

export function registerAgentCommands(program: Command, output: OutputFn): void {
  const agent = program.command("agent").description("Deterministic helper commands for external AI agents");
  agent
    .command("knowledge")
    .description("Show bundled diagnostic knowledge pack metadata")
    .option("--json")
    .action(() => {
      output(getDiagnosticKnowledgeSummary());
    });
  agent
    .command("explain-error")
    .description("Explain known Bmall error codes and map them to CLI remediation commands")
    .option("--error-code <errorCode>")
    .option("--message <message>")
    .option("--json")
    .action((options) => {
      output(explainError(String(options.errorCode ?? ""), typeof options.message === "string" ? options.message : undefined));
    });
}

export { getDiagnosticKnowledgeSummary };

export const agentErrorExplanations = Object.fromEntries(diagnosticEntries.map((entry) => [entry.code, entry]));
