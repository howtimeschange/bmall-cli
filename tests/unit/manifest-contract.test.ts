import { describe, expect, it } from "vitest";
import type { Command } from "commander";
import { createCli } from "../../src/cli.js";
import { COMMAND_MANIFEST } from "../../src/core/manifest.js";

function leafNames(command: Command, prefix: string[] = []): string[] {
  const name = command.name();
  const next = name && name !== "bmall" ? [...prefix, name] : prefix;
  if (command.commands.length === 0) return [next.join(".")];
  return command.commands.flatMap((child) => leafNames(child, next));
}

describe("command manifest contract", () => {
  it("matches the actual commander leaf command surface", () => {
    const registered = leafNames(createCli()).sort();
    const manifest = COMMAND_MANIFEST.map((entry) => entry.name).sort();

    expect(manifest).toEqual(registered);
  });

  it("keeps business commands API-first", () => {
    const browserCommands = COMMAND_MANIFEST.filter((entry) => entry.browser);
    expect(browserCommands).toEqual([]);
    expect(COMMAND_MANIFEST.find((entry) => entry.name === "auth.login")?.loginBootstrap).toBe("system-browser");
  });
});
