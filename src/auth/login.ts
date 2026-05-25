import { createServer } from 'node:http';
import { constants, createHash, publicEncrypt, randomBytes } from 'node:crypto';
import { spawn } from 'node:child_process';
import { BmallCliError } from '../core/errors.js';
import { type TokenBundle, TokenBundleSchema } from './token-bundle.js';
import { BmallHttpClient } from '../core/http.js';

export type AccountLoginType = 'bmall' | 'iam';

const IAM_PASSWORD_PUBLIC_KEY = [
  '-----BEGIN PUBLIC KEY-----',
  'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArODjK8hG+5vq37/CN5XbBogMOP7mvEnl/glBljS8kaIKdG2npKiIHIlfbbzIzzXjqb1xsEJ00CtCtmPPmxeBCVYHev4Nl0SxZEiXm4XeHTurLmIcLV5quGyPaDVh3K726TujAmNgxQVTBtgOUDJVp9gTyHTPcPUUdxQGKlDUX3y010El4sCdsBGuRauV/pL5cLQpIJVJIwd6SG+t/r9Z94d4zXQAfW3qD/KrN6ZBKKivp0O0r4oicrnBf44Xt4MxSAs6+4TvdxD1CewGmY8vdZME1DhJRkbeiUKJDOMlnw4BzlZkLmlEo4gsmCLnrS2JQeYX74x48XCOODskJGol/QIDAQAB',
  '-----END PUBLIC KEY-----'
].join('\n');

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

export interface PasswordLoginOptions {
  groupId?: string;
}

export async function loginWithPassword(baseUrl: string, account: string, password: string, accountType: AccountLoginType, options: PasswordLoginOptions = {}): Promise<TokenBundle> {
  const client = new BmallHttpClient(baseUrl);
  if (accountType === 'iam') {
    if (!options.groupId) {
      throw new BmallCliError('INPUT_ERROR', 'IAM 用户中心账号登录需要先选择品牌：请使用 --brand <品牌名称或品牌编码>，例如 --brand 森马 或 --brand C326。');
    }
    const response = await client.send<Record<string, unknown>>({
      method: 'POST',
      path: 'hr/iamUser/mini/login',
      body: { groupId: options.groupId, mobile: account, password: encryptIamPassword(password) },
      auth: { injectAuthToBody: false }
    });
    return mapIamLoginBundle(response.data);
  }
  const response = await client.send<Record<string, unknown>>({
    method: 'POST',
    path: 'manage/app/Common/Login',
    body: {
      mobile: account,
      loginWord: md5(password),
      loginType: 'b2bmall',
      wxSn: ''
    },
    auth: { injectAuthToBody: false }
  });
  return mapBmallLoginBundle(response.data, response.raw);
}

export function parseAccountLoginType(value: unknown): AccountLoginType {
  if (value === 'bmall' || value === 'iam') return value;
  throw new BmallCliError('INPUT_ERROR', '账号密码登录需要先明确账号体系：请添加 --account-type bmall（原订货商城账号）或 --account-type iam（IAM 用户中心账号）。');
}

function mapBmallLoginBundle(data: unknown, raw: unknown): TokenBundle {
  const rawObj = raw && typeof raw === 'object' ? raw as Record<string, unknown> : {};
  return TokenBundleSchema.parse(data && typeof data === 'object' && 'tokenId' in data ? data : rawObj.DataLine ?? rawObj.data ?? rawObj);
}

function mapIamLoginBundle(data: unknown): TokenBundle {
  const obj = data && typeof data === 'object' ? data as Record<string, unknown> : {};
  const groupInfo = obj.groupInfo && typeof obj.groupInfo === 'object' ? obj.groupInfo as Record<string, unknown> : {};
  return TokenBundleSchema.parse({
    tokenId: obj.tokenId,
    groupId: obj.groupId ?? groupInfo.groupId,
    groupName: obj.groupName ?? groupInfo.groupName,
    groupCode: obj.groupCode ?? groupInfo.groupCode,
    userId: obj.userId,
    userName: obj.userName,
    mobile: obj.mobile ?? obj.userMobile,
    roleCode: obj.roleCode,
    loginActiveTabName: 'iam',
    permissions: Array.isArray(obj.roleFunctionList) ? obj.roleFunctionList : [],
    menuData: Array.isArray(obj.roleMenuList) ? obj.roleMenuList : []
  });
}

function encryptIamPassword(password: string): string {
  const bytes = Buffer.from(password, 'utf8');
  const maxChunkSize = 245;
  const encrypted: Buffer[] = [];
  for (let offset = 0; offset < bytes.length; offset += maxChunkSize) {
    encrypted.push(publicEncrypt({ key: IAM_PASSWORD_PUBLIC_KEY, padding: constants.RSA_PKCS1_PADDING }, bytes.subarray(offset, offset + maxChunkSize)));
  }
  return Buffer.concat(encrypted).toString('base64');
}

function md5(value: string): string {
  return createHash('md5').update(value).digest('hex');
}
