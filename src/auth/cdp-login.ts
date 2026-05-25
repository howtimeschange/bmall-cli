import { spawn } from 'node:child_process';
import { createHash, randomBytes } from 'node:crypto';
import { mkdir } from 'node:fs/promises';
import { Socket } from 'node:net';
import { join } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';
import { BmallCliError } from '../core/errors.js';
import { getConfigHome } from '../core/storage.js';
import { TokenBundleSchema, type TokenBundle } from './token-bundle.js';

export interface CdpLoginOptions {
  host?: string;
  port?: number;
  loginUrl: string;
  launch?: boolean;
  chromePath?: string;
  userDataDir?: string;
  configHome?: string;
  waitMs?: number;
  waitLoginMs?: number;
}

export interface CdpLoginResult {
  bundle: TokenBundle;
  pageUrl: string;
  launched: boolean;
}

interface CdpPage {
  type?: string;
  url?: string;
  webSocketDebuggerUrl?: string;
}

export async function readTokenBundleFromCdp(options: CdpLoginOptions): Promise<CdpLoginResult> {
  const host = options.host ?? '127.0.0.1';
  const port = options.port ?? 9222;
  const loginUrl = new URL(options.loginUrl).toString();
  let launched = false;

  if (options.launch) {
    const ready = await probeCdp(host, port);
    if (!ready) {
      await launchChromeForCdp({
        port,
        loginUrl,
        chromePath: options.chromePath,
        userDataDir: options.userDataDir ?? defaultManagedProfileDir(options.configHome)
      });
      launched = true;
      await waitForCdp(host, port, options.waitMs ?? 30000);
    }
  }

  return await waitForTokenBundle({ host, port, loginUrl, launched, waitLoginMs: options.waitLoginMs ?? 180000 });
}

async function launchChromeForCdp(options: { port: number; loginUrl: string; chromePath?: string; userDataDir: string }): Promise<void> {
  const chromePath = options.chromePath ?? defaultChromePath();
  await mkdir(options.userDataDir, { recursive: true, mode: 0o700 });
  const args = [
    `--remote-debugging-port=${options.port}`,
    `--user-data-dir=${options.userDataDir}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--new-window',
    options.loginUrl
  ];
  spawn(chromePath, args, { stdio: 'ignore', detached: true }).unref();
}

function defaultManagedProfileDir(configHome?: string): string {
  return join(getConfigHome(configHome), 'chrome-profile');
}

function defaultChromePath(): string {
  if (process.platform === 'darwin') return '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  if (process.platform === 'win32') return 'chrome.exe';
  return 'google-chrome';
}

async function waitForCdp(host: string, port: number, waitMs: number): Promise<void> {
  const deadline = Date.now() + waitMs;
  while (Date.now() < deadline) {
    try {
      await fetchCdpJson(host, port, '/json/version');
      return;
    } catch {
      await delay(250);
    }
  }
  throw new BmallCliError('AUTH_REQUIRED', `Chrome CDP did not start on ${host}:${port}.`, {
    recover: 'Run auth login --browser --cdp --cdp-launch to start a dedicated debug Chrome profile, or pass --cdp-user-data-dir for a custom profile.'
  });
}

async function probeCdp(host: string, port: number): Promise<boolean> {
  try {
    await fetchCdpJson(host, port, '/json/version');
    return true;
  } catch {
    return false;
  }
}

async function waitForTokenBundle(options: { host: string; port: number; loginUrl: string; launched: boolean; waitLoginMs: number }): Promise<CdpLoginResult> {
  const deadline = Date.now() + options.waitLoginMs;
  let lastError: unknown;
  while (Date.now() < deadline) {
    const page = await findOrCreateBmallPage(options.host, options.port, options.loginUrl);
    if (!page.webSocketDebuggerUrl) {
      throw new BmallCliError('AUTH_REQUIRED', 'CDP Bmall page has no debugger websocket URL.');
    }
    try {
      const value = await evaluateCdp(page.webSocketDebuggerUrl, buildTokenBundleExpression());
      const bundle = TokenBundleSchema.parse(value);
      return { bundle, pageUrl: page.url ?? options.loginUrl, launched: options.launched };
    } catch (error) {
      lastError = error;
      await delay(1000);
    }
  }
  throw new BmallCliError('AUTH_REQUIRED', 'Timed out waiting for Bmall token in the CDP browser.', {
    details: lastError,
    recover: 'Complete login in the dedicated Chrome window, then rerun auth login --browser --cdp --cdp-launch.'
  });
}

async function findOrCreateBmallPage(host: string, port: number, loginUrl: string): Promise<CdpPage> {
  const origin = new URL(loginUrl).origin;
  const pages = await listPages(host, port);
  const existing = pages.find((page) => page.type === 'page' && page.url?.startsWith(origin));
  if (existing) return existing;
  return await createBmallPage(host, port, loginUrl);
}

async function createBmallPage(host: string, port: number, loginUrl: string): Promise<CdpPage> {
  const path = `/json/new?${encodeURIComponent(loginUrl)}`;
  try {
    return await fetchCdpJson<CdpPage>(host, port, path, { method: 'PUT' });
  } catch (error) {
    if (!isCdpMethodUnsupported(error)) throw error;
    return await fetchCdpJson<CdpPage>(host, port, path);
  }
}

async function listPages(host: string, port: number): Promise<CdpPage[]> {
  try {
    return await fetchCdpJson<CdpPage[]>(host, port, '/json/list');
  } catch (error) {
    throw new BmallCliError('AUTH_REQUIRED', `Cannot connect to Chrome CDP at ${host}:${port}.`, {
      details: error,
      recover: 'Start Chrome with --remote-debugging-port=9222, or run auth login --browser --cdp --cdp-launch.'
    });
  }
}

async function fetchCdpJson<T>(host: string, port: number, path: string, init: RequestInit = {}): Promise<T> {
  const response = await fetch(`http://${host}:${port}${path}`, init);
  if (!response.ok) throw new Error(`CDP ${path} returned HTTP ${response.status}`);
  return response.json() as Promise<T>;
}

function isCdpMethodUnsupported(error: unknown): boolean {
  return error instanceof Error && /\bHTTP (404|405)\b/.test(error.message);
}

async function evaluateCdp(webSocketUrl: string, expression: string): Promise<unknown> {
  const socket = await connectWebSocket(webSocketUrl);
  let nextId = 1;
  try {
    const result = await sendCdp(socket, {
      id: nextId++,
      method: 'Runtime.evaluate',
      params: {
        expression,
        awaitPromise: true,
        returnByValue: true
      }
    });
    const remote = result.result?.result;
    if (remote?.subtype === 'error') throw new Error(remote.description ?? remote.value ?? 'CDP evaluation failed');
    return remote?.value;
  } finally {
    socket.end();
  }
}

function buildTokenBundleExpression(): string {
  return `(()=>{const read=(k)=>{let v=localStorage.getItem(k);if(v==null)return undefined;try{return JSON.parse(v)}catch(e){return v}};const userInfo=read('bmallv2_userInfo')||read('userInfo')||{};const common=read('common_login')||{};const dataLine=common.DataLine||common.dataLine||{};return {tokenId:read('tokenId')||read('tokenid')||userInfo.tokenId,groupId:read('groupId')||userInfo.groupId||dataLine.groupId,groupName:read('groupName')||userInfo.groupName||dataLine.groupName,groupCode:read('groupCode')||userInfo.groupCode||dataLine.groupCode,userId:read('userId')||userInfo.userId||dataLine.fid||dataLine.userId,userName:read('userName')||userInfo.userName||dataLine.userName,mobile:read('mobile')||userInfo.mobile,roleCode:read('roleCode')||userInfo.roleCode||dataLine.roleCode,loginActiveTabName:read('loginActiveTabName')||userInfo.loginActiveTabName,permissions:read('permissions')||read('bmallv2_permissions')||[],menuData:read('menuData')||read('bmallv2_menuData')||[]}})()`;
}

async function connectWebSocket(webSocketUrl: string): Promise<Socket> {
  const url = new URL(webSocketUrl);
  const socket = new Socket();
  await new Promise<void>((resolve, reject) => {
    socket.once('error', reject);
    socket.connect(Number(url.port || 80), url.hostname, resolve);
  });
  const key = randomBytes(16).toString('base64');
  const path = `${url.pathname}${url.search}`;
  socket.write([
    `GET ${path} HTTP/1.1`,
    `Host: ${url.host}`,
    'Upgrade: websocket',
    'Connection: Upgrade',
    `Sec-WebSocket-Key: ${key}`,
    'Sec-WebSocket-Version: 13',
    '',
    ''
  ].join('\r\n'));
  await readHandshake(socket, key);
  return socket;
}

async function readHandshake(socket: Socket, key: string): Promise<void> {
  let buffer = Buffer.alloc(0);
  while (!buffer.includes(Buffer.from('\r\n\r\n'))) {
    const chunk = await readSocketChunk(socket);
    buffer = Buffer.concat([buffer, chunk]);
  }
  const header = buffer.toString('utf8');
  const accept = createHash('sha1').update(`${key}258EAFA5-E914-47DA-95CA-C5AB0DC85B11`).digest('base64');
  if (!header.startsWith('HTTP/1.1 101') || !header.toLowerCase().includes(`sec-websocket-accept: ${accept.toLowerCase()}`)) {
    throw new Error('Chrome CDP websocket handshake failed.');
  }
}

async function sendCdp(socket: Socket, message: Record<string, unknown>): Promise<any> {
  socket.write(encodeClientFrame(JSON.stringify(message)));
  while (true) {
    const frame = await readWebSocketFrame(socket);
    const parsed = JSON.parse(frame);
    if (parsed.id === message.id) {
      if (parsed.error) throw new Error(parsed.error.message ?? 'CDP command failed');
      return parsed;
    }
  }
}

async function readWebSocketFrame(socket: Socket): Promise<string> {
  const first = await readSocketChunk(socket);
  return decodeServerFrame(first);
}

function encodeClientFrame(text: string): Buffer {
  const payload = Buffer.from(text);
  const headerLength = payload.length < 126 ? 6 : 8;
  const frame = Buffer.alloc(headerLength + payload.length);
  frame[0] = 0x81;
  if (payload.length < 126) {
    frame[1] = 0x80 | payload.length;
    randomBytes(4).copy(frame, 2);
    maskPayload(payload, frame.subarray(2, 6)).copy(frame, 6);
    return frame;
  }
  frame[1] = 0x80 | 126;
  frame.writeUInt16BE(payload.length, 2);
  randomBytes(4).copy(frame, 4);
  maskPayload(payload, frame.subarray(4, 8)).copy(frame, 8);
  return frame;
}

function decodeServerFrame(frame: Buffer): string {
  let offset = 2;
  let length = frame[1] & 0x7f;
  if (length === 126) {
    length = frame.readUInt16BE(offset);
    offset += 2;
  } else if (length === 127) {
    const bigLength = frame.readBigUInt64BE(offset);
    offset += 8;
    length = Number(bigLength);
  }
  return frame.subarray(offset, offset + length).toString('utf8');
}

function maskPayload(payload: Buffer, mask: Buffer): Buffer {
  return Buffer.from(payload.map((byte, index) => byte ^ mask[index % 4]));
}

function readSocketChunk(socket: Socket): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const onData = (chunk: Buffer) => cleanup(() => resolve(chunk));
    const onError = (error: Error) => cleanup(() => reject(error));
    const cleanup = (done: () => void) => {
      socket.off('data', onData);
      socket.off('error', onError);
      done();
    };
    socket.once('data', onData);
    socket.once('error', onError);
  });
}
