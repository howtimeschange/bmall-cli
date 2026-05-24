import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

type ManifestCommand = {
  name: string;
  description: string;
  audience: string;
  access: string;
  strategy?: string;
  auth?: string;
  browser: boolean;
  args?: Array<{ name: string; required?: boolean }>;
  columns?: string[];
};

function renderCommand(command: ManifestCommand): string {
  const args = (command.args ?? [])
    .map((arg) => `--${arg.name}${arg.required ? " (required)" : ""}`)
    .join(", ");
  const columns = (command.columns ?? []).join(", ");
  return [
    `### ${command.name}`,
    "",
    command.description,
    "",
    `- Audience: ${command.audience}`,
    `- Access: ${command.access}`,
    `- Auth: ${command.strategy ?? command.auth ?? "unknown"}`,
    `- Browser: ${command.browser}`,
    `- Args: ${args || "none"}`,
    `- Columns: ${columns || "none"}`,
    "",
  ].join("\n");
}

export function generateCommandDocs(manifestPath: string) {
  const manifest = JSON.parse(readFileSync(manifestPath, "utf8")) as { commands: ManifestCommand[] };
  const documentedCommands = manifest.commands.filter((command) => (
    command.name.startsWith("ops.")
    || command.name.startsWith("ai-replenishment.")
    || command.name.startsWith("report.")
  ));
  return ["## Operations Commands", "", ...documentedCommands.map(renderCommand)].join("\n");
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const manifestPath = resolve(process.argv[2] ?? "manifests/bmall.commands.json");
  const outputPath = process.argv[3] ? resolve(process.argv[3]) : null;
  const docs = generateCommandDocs(manifestPath);
  if (outputPath) {
    writeFileSync(outputPath, docs, "utf8");
  } else {
    process.stdout.write(docs);
  }
}
