# Agent 指南

## 项目

Bmall CLI 是 Semir Reabam/Bmall 订货系统的 API-first 命令行客户端。运行时是 Node.js 20+、TypeScript、Commander，主要用于商品、购物车、订单、待审核单、公司上下文、运维诊断、导出任务和 allowlist job。

这个仓库是独立 Git 仓库，但它放在 Bmall 多仓工作区里。排查真实业务问题时，CLI 通常负责现场取数、复现和安全执行；根因证据经常需要同时查看同级源码仓，尤其是后端 `../reabam-mop-b2b/`。

## 导航

- `src/cli.ts`：Commander 注册入口；新增命令时先确认是否需要注册到这里。
- `src/core/`：配置、HTTP、输出 envelope、错误、审计、manifest 支撑。
- `src/auth/`：token bundle、profile/session、登录导入和续期。
- `src/domains/`：业务命令域；每个子目录对应一组 CLI 命令。
- `manifests/bmall.commands.json`：Agent 可见的命令契约；命令注册和 manifest 要保持一致。
- `manifests/job-allowlist.json`：可运行 job 的唯一 allowlist。
- `tests/`：Vitest 单测和少量 contract 测试。
- `docs/`：Agent 使用、运维 runbook、安全、命令参考和源码导航。
- `CODEMAP.md`：本仓代码地图。
- `docs/source-code-navigation.md`：从 CLI 跳到 Bmall 后端/前端源码的排查指南。

## 同级源码仓

- `../reabam-mop-b2b/`：Java 8、Spring Boot 2.4.2 后端；订单审核、地址、余额、商品、库存、job、导出任务等真实业务逻辑优先查这里。
- `../semir-reabam-front/`：订货商城微信小程序；客户侧下单、待审核、地址展示和品牌上下文可查这里。
- `../semir-reabam-admin/`：Vue 2 旧后台；旧后台审核、配置和排障页面可查这里。
- `../semir-bmall-admin-v2/`：React/ICE 后台 v2；新后台页面、service 层和 iframe 集成可查这里。
- `../AGENTS.md`、`../CODEMAP.md`：工作区级导航，解释多仓边界。

## 命令

- 安装：`pnpm install`
- 构建：`pnpm build`
- 测试：`pnpm test`
- 生成命令文档：`pnpm docs`
- 本地直接运行：`node dist/cli.js version --json`
- 未构建时调试：`./node_modules/.bin/tsx src/cli.ts version --json`

如果本机没有全局 `pnpm`，先使用仓库内已有依赖运行 `./node_modules/.bin/tsx` 或 `./node_modules/.bin/vitest` 做聚焦验证，并在交付说明里写清没有跑到的命令。

## 工作规则

- 编辑前执行 `git status --short`。这个仓库可能有用户未提交改动，不要 reset 或覆盖无关文件。
- 业务命令必须 API-first。除 `auth login --browser` 这类登录引导外，不要用浏览器自动化、DOM、截图、CDP 或网络拦截实现业务能力。
- 新增或改名命令时，同时更新 Commander 注册、`manifests/bmall.commands.json`、`docs/command-reference.md` 和相关测试。
- 真实写操作必须有 `--dry-run` 或 `--confirm --reason` 门禁；订单提交属于 financial 操作，不能合成本地假成功。
- `schedule/dowork` 不能暴露成通用执行入口；job 只能走 `manifests/job-allowlist.json`。
- 不要提交 token、cookie、authorization header、手机号、身份证号或本地审计/凭证文件。
- 后端 endpoint 没有源码或线上证据时，要标成 unsupported / requires backend facade，不要返回 `{ ok: true }` 伪成功。

## 排查原则

- 先用 CLI 确认 profile、品牌、门店、订单号、待审核单 id、API 返回和 request id。
- 再到同级源码仓查 controller、service、DTO、mapper、前端 service 或页面调用。
- 结论要区分三层证据：CLI 现场数据、后端/前端源码逻辑、推断或待验证项。
- Puma 订单审核这类问题不要只看“账户有钱”。例如 `[401700000] 收货地址不完整，请先维护区` 要沿着地址完整性校验查 `provinceName`、`cityName`、`regionName` 和详细地址。

## 验证

- 命令注册或 manifest 改动：运行 `pnpm test -- tests/unit/manifest-contract.test.ts`，再按需运行 `pnpm docs`。
- HTTP、auth、输出 envelope 改动：运行相关 `tests/unit/*`，高风险时运行 `pnpm test`。
- 写操作、安全门禁、job 改动：运行 `tests/unit/write-safety.test.ts`、`tests/unit/job.test.ts` 和相关 domain 测试。
- docs-only 改动：至少复查新增文档和 `git diff -- <paths>`。

## 维护

保持根指南短而可执行。跨仓业务排查细节放到 `docs/source-code-navigation.md`；目录或命令有明显变化时同步更新 `CODEMAP.md`。
