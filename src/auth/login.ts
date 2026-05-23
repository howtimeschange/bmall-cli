import { createServer } from 'node:http';
import { randomBytes } from 'node:crypto';
import { spawn } from 'node:child_process';
import { BmallCliError } from '../core/errors.js';
import { type TokenBundle, TokenBundleSchema } from './token-bundle.js';
import { BmallHttpClient } from '../core/http.js';

export interface BrowserLoginInfo {
  state: string;
  nonce: string;
  callbackUrl: string;
  loginUrl: string;
  consoleSnippet: string;
  bookmarklet: string;
}

export function createBrowserLoginInfo(loginUrl: string, port: number): BrowserLoginInfo {
  const state = randomBytes(16).toString('hex');
  const nonce = randomBytes(16).toString('hex');
  const callbackUrl = `http://127.0.0.1:${port}/callback?state=${state}&nonce=${nonce}`;
  const webLoginUrl = new URL(loginUrl);
  const consoleSnippet = buildConsoleSnippet(callbackUrl, state, nonce);
  return {
    state,
    nonce,
    callbackUrl,
    loginUrl: webLoginUrl.toString(),
    consoleSnippet,
    bookmarklet: `javascript:${encodeURIComponent(consoleSnippet)}`
  };
}

function buildConsoleSnippet(callbackUrl: string, state: string, nonce: string): string {
  return `(async()=>{const read=(k)=>{let v=localStorage.getItem(k);if(v==null)return undefined;try{return JSON.parse(v)}catch(e){return v}};const userInfo=read('bmallv2_userInfo')||read('userInfo')||{};const common=read('common_login')||{};const dataLine=common.DataLine||common.dataLine||{};const b={tokenId:read('tokenId')||read('tokenid')||userInfo.tokenId,groupId:read('groupId')||userInfo.groupId||dataLine.groupId,groupName:read('groupName')||userInfo.groupName||dataLine.groupName,groupCode:read('groupCode')||userInfo.groupCode||dataLine.groupCode,userId:read('userId')||userInfo.userId||dataLine.fid||dataLine.userId,userName:read('userName')||userInfo.userName||dataLine.userName,mobile:read('mobile')||userInfo.mobile,roleCode:read('roleCode')||userInfo.roleCode||dataLine.roleCode,loginActiveTabName:read('loginActiveTabName')||userInfo.loginActiveTabName,permissions:read('permissions')||read('bmallv2_permissions')||[],menuData:read('menuData')||read('bmallv2_menuData')||[]};await fetch(${JSON.stringify(callbackUrl)},{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({state:${JSON.stringify(state)},nonce:${JSON.stringify(nonce)},bundle:b})});console.log('Bmall CLI token bundle sent');})()`;
}

export async function runBrowserLoginReceiver(info: BrowserLoginInfo, timeoutMs = 180000): Promise<TokenBundle> {
  return new Promise((resolve, reject) => {
    const server = createServer((req, res) => {
      if (req.method !== 'POST' || !req.url?.startsWith('/callback')) {
        res.writeHead(404).end();
        return;
      }
      const chunks: Buffer[] = [];
      req.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
      req.on('end', () => {
        try {
          const parsed = JSON.parse(Buffer.concat(chunks).toString('utf8'));
          if (parsed.state !== info.state || parsed.nonce !== info.nonce) {
            throw new BmallCliError('AUTH_REQUIRED', 'Browser login state mismatch.');
          }
          const bundle = TokenBundleSchema.parse(parsed.bundle);
          res.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' }).end('Bmall CLI login received. You can close this tab.');
          server.close();
          resolve(bundle);
        } catch (error) {
          res.writeHead(400, { 'content-type': 'text/plain; charset=utf-8' }).end('Invalid Bmall CLI login payload.');
          server.close();
          reject(error);
        }
      });
    });
    server.listen(Number(new URL(info.callbackUrl).port), '127.0.0.1');
    const timer = setTimeout(() => {
      server.close();
      reject(new BmallCliError('AUTH_REQUIRED', 'Timed out waiting for browser login.'));
    }, timeoutMs);
    server.on('close', () => clearTimeout(timer));
  });
}

export function openBrowser(url: string): void {
  spawn('open', [url], { stdio: 'ignore', detached: true }).unref();
}

export async function loginWithPassword(baseUrl: string, account: string, password: string): Promise<TokenBundle> {
  const client = new BmallHttpClient(baseUrl);
  const response = await client.send<Record<string, unknown>>({
    method: 'POST',
    path: 'manage/app/Common/Login',
    body: { account, password },
    auth: { injectAuthToBody: false }
  });
  return TokenBundleSchema.parse(response.data);
}
