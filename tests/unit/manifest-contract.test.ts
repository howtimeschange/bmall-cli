import { describe, expect, it } from "vitest";
import type { Command } from "commander";
import { createCli } from "../../src/cli.js";
import { COMMAND_MANIFEST } from "../../src/core/manifest.js";
import type { CommandManifestEntry } from "../../src/core/manifest.js";

function leafNames(command: Command, prefix: string[] = []): string[] {
  const name = command.name();
  const next = name && name !== "bmall" ? [...prefix, name] : prefix;
  if (command.commands.length === 0) return [next.join(".")];
  return command.commands.flatMap((child) => leafNames(child, next));
}

function leafCommands(command: Command, prefix: string[] = []): Array<{ name: string; command: Command }> {
  const name = command.name();
  const next = name && name !== "bmall" ? [...prefix, name] : prefix;
  if (command.commands.length === 0) return [{ name: next.join("."), command }];
  return command.commands.flatMap((child) => leafCommands(child, next));
}

function actualArgNames(command: Command): string[] {
  const positional = command.registeredArguments.map((arg) => arg.name());
  const options = command.options
    .map((option) => option.long?.replace(/^--/, ""))
    .filter((name): name is string => Boolean(name && name !== "json"));
  return [...positional, ...options].sort();
}

function manifestArgNames(entry: CommandManifestEntry): string[] {
  return entry.args.map((arg) => arg.name).sort();
}

describe("command manifest contract", () => {
  it("matches the actual commander leaf command surface", () => {
    const registered = leafNames(createCli()).sort();
    const manifest = COMMAND_MANIFEST.map((entry) => entry.name).sort();

    expect(manifest).toEqual(registered);
  });

  it("keeps manifest args aligned with commander command args", () => {
    const registered = new Map(leafCommands(createCli()).map((entry) => [entry.name, actualArgNames(entry.command)]));
    const mismatches = COMMAND_MANIFEST.flatMap((entry) => {
      const actual = registered.get(entry.name);
      if (!actual) return [];
      const manifest = manifestArgNames(entry);
      return JSON.stringify(actual) === JSON.stringify(manifest)
        ? []
        : [{ name: entry.name, actual, manifest }];
    });

    expect(mismatches).toEqual([]);
  });

  it("keeps business commands API-first", () => {
    const browserCommands = COMMAND_MANIFEST.filter((entry) => entry.browser);
    expect(browserCommands).toEqual([]);
    expect(COMMAND_MANIFEST.find((entry) => entry.name === "auth.login")?.loginBootstrap).toBe("system-browser");
  });
});
