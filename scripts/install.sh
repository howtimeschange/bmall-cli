#!/usr/bin/env bash
set -euo pipefail

REPO_URL="${BMALL_CLI_REPO_URL:-https://github.com/howtimeschange/bmall-cli.git}"
INSTALL_DIR="${BMALL_CLI_INSTALL_DIR:-$HOME/.bmall-cli/app}"
BRANCH="${BMALL_CLI_BRANCH:-main}"

log() {
  printf '[bmall-cli] %s\n' "$*"
}

fail() {
  printf '[bmall-cli] ERROR: %s\n' "$*" >&2
  exit 1
}

need_cmd() {
  command -v "$1" >/dev/null 2>&1 || fail "Missing required command: $1"
}

need_cmd git
need_cmd node
need_cmd npm

node_major="$(node -p "Number(process.versions.node.split('.')[0])")"
if [ "$node_major" -lt 20 ]; then
  fail "Node.js 20+ is required. Current version: $(node -v)"
fi

if ! command -v corepack >/dev/null 2>&1; then
  fail "corepack is required. Install Node.js 20+ from https://nodejs.org/ or enable corepack manually."
fi

log "Installing from $REPO_URL#$BRANCH"
mkdir -p "$(dirname "$INSTALL_DIR")"

if [ -d "$INSTALL_DIR/.git" ]; then
  log "Updating existing checkout: $INSTALL_DIR"
  git -C "$INSTALL_DIR" fetch origin "$BRANCH"
  git -C "$INSTALL_DIR" checkout "$BRANCH"
  git -C "$INSTALL_DIR" pull --ff-only origin "$BRANCH"
else
  if [ -e "$INSTALL_DIR" ]; then
    fail "$INSTALL_DIR exists but is not a git checkout. Set BMALL_CLI_INSTALL_DIR to another path or move it away."
  fi
  log "Cloning to $INSTALL_DIR"
  git clone --branch "$BRANCH" "$REPO_URL" "$INSTALL_DIR"
fi

cd "$INSTALL_DIR"

log "Enabling Corepack"
corepack enable

if ! command -v pnpm >/dev/null 2>&1; then
  log "Preparing pnpm through Corepack"
  corepack prepare pnpm@9.15.0 --activate
fi

PNPM_CMD="pnpm"
if ! command -v pnpm >/dev/null 2>&1; then
  PNPM_CMD="corepack pnpm"
fi

log "Installing dependencies"
$PNPM_CMD install --frozen-lockfile

log "Building CLI"
$PNPM_CMD build

log "Linking global bmall command"
npm link --global

log "Verifying installation"
bmall version --json

log "Done. Try: bmall auth login --browser --cdp --cdp-launch --env prod --profile semir-prod --json"
