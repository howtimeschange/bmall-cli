# 跨仓源码导航

最近复查：2026-05-24

## 为什么需要跨仓

`bmall-cli` 的定位是 API-first 的现场工具：它负责切换品牌/门店上下文、调用已知 endpoint、归一化输出、执行 dry-run 和受控写操作。它不是业务系统本体。

所以排查线上问题时，CLI 只能证明“当前接口返回了什么”和“命令会提交什么 payload”。要解释为什么审核失败、余额为什么没生效、哪个字段被后端校验、前端页面为什么传了某个值，通常还要看同级源码仓。

## 工作区入口

| 路径 | 用途 | 什么时候看 |
| --- | --- | --- |
| `../AGENTS.md` | Bmall 多仓工作区总指南。 | 不确定该进哪个仓时先看。 |
| `../CODEMAP.md` | 工作区级代码地图。 | 需要理解后端、小程序、旧后台、v2 后台边界时看。 |
| `../reabam-mop-b2b/AGENTS.md`、`../reabam-mop-b2b/CODEMAP.md` | Java/Spring Boot 后端指南和地图。 | 查订单审核、地址、余额、商品、库存、导出、job 根因时看。 |
| `../semir-reabam-front/AGENTS.md`、`../semir-reabam-front/CODEMAP.md` | 微信小程序指南和地图。 | 查客户侧下单、待审核、地址维护、品牌门店上下文时看。 |
| `../semir-reabam-admin/AGENTS.md`、`../semir-reabam-admin/CODEMAP.md` | Vue 2 旧后台指南和地图。 | 查旧后台审核、配置、历史页面和接口调用时看。 |
| `../semir-bmall-admin-v2/AGENTS.md`、`../semir-bmall-admin-v2/CODEMAP.md` | React/ICE 后台 v2 指南和地图。 | 查新后台页面、service 层、iframe 集成或新模块时看。 |

## 推荐排查顺序

1. 在 `bmall-cli` 里确认命令能力和安全边界：`bmall manifest list --json`、`bmall manifest get <command> --json`。
2. 确认登录上下文：`bmall whoami --json`、`bmall company groups --json`、`bmall company list --json`。
3. 用只读命令采集事实：订单、待审核单、客户、地址、商品、库存、request id、原始错误码。
4. 到后端源码查 endpoint、controller、service、DTO、mapper、校验分支和错误码。
5. 如果 payload 来源可疑，再到小程序或后台源码查页面、service 层和表单字段。
6. 输出结论时分开写：CLI 事实、源码证据、仍待线上验证的推断。

## 常用搜索命令

从 `bmall-cli` 查命令和 endpoint：

```bash
rg "diagnose-pending|pending-order|address|401700000|review" src tests docs manifests
rg "path:|b2b/|manage/|hr/" src/domains src/core tests
```

从后端查业务逻辑：

```bash
cd ../reabam-mop-b2b
rg "401700000|收货地址不完整|regionName|provinceName|cityName" .
rg "pending|review|审核|余额|balance|account" reabam-service reabam-support
rg "b2b/order|pending|saveOrUpdate|addressListReqs" reabam-service reabam-support
```

从前端查 payload 来源：

```bash
cd ../semir-reabam-front
rg "pending|review|address|regionName|provinceName|cityName" pages packageFor* components blocks api utils

cd ../semir-reabam-admin
rg "pending|review|address|regionName|provinceName|cityName" src

cd ../semir-bmall-admin-v2
rg "pending|review|address|regionName|provinceName|cityName" app/src
```

## Puma 订单审核案例模式

用户描述可能是：“客户账户有钱，审核的时候还是会提示这个，然后失败”。这种问题不要先假设是余额逻辑，先把错误码和后端校验链路拆开。

### CLI 侧取证

```bash
bmall agent explain-error --error-code 401700000 --json
bmall company groups --json
bmall company switch-group --group-id <PUMA_GROUP_ID> --json
bmall company list --sword "<门店关键字>" --json
bmall company switch --company-id <COMPANY_ID> --json
bmall ops order diagnose-pending --order-id <PENDING_ORDER_ID> --json
bmall ops address check --company-id <COMPANY_ID> --json
bmall ops address list --company-id <COMPANY_ID> --json
```

如果看到 `[401700000] 收货地址不完整，请先维护区`，重点看地址字段，不要把“客户账户有钱”当成已解释该错误。这个错误通常指 `regionName` 为空、缺失，或仍是占位值 `区`。

### 后端侧确认

在 `../reabam-mop-b2b/` 中优先搜索：

```bash
rg "401700000|收货地址不完整|请先维护区" .
rg "regionName|provinceName|cityName|addressListReqs" reabam-service reabam-support
rg "pending|review|审核" reabam-service/reabam-b2b reabam-support
```

确认点：

- 哪个审核接口抛出错误。
- 校验的是订单收货地址、门店地址，还是 MDM 同步来的客户地址。
- `provinceName`、`cityName`、`regionName`、详细地址是否都必填。
- 地址来源是否允许通过 CLI patch；MDM 来源地址应回主数据修复。
- 余额/账户校验是否在地址校验之前或之后，避免把后续未执行的余额逻辑误判成根因。

### 前端侧确认

如果后端校验字段来自页面 payload，再查小程序或后台：

```bash
cd ../semir-reabam-front
rg "regionName|provinceName|cityName|address" pages packageFor* components blocks api utils

cd ../semir-reabam-admin
rg "regionName|provinceName|cityName|address|review" src

cd ../semir-bmall-admin-v2
rg "regionName|provinceName|cityName|address|review" app/src
```

确认点：

- 页面是否传了完整区县字段。
- 页面是否只展示了“账户/余额”文案，但实际后端返回是地址错误。
- 是否有老后台和 v2 后台字段名不一致。

## 证据写法

排查报告推荐用下面格式：

```text
结论：
- 当前失败不是余额不足，而是地址区县字段缺失。

CLI 事实：
- profile/group/company/order id。
- 命令、request id、接口返回错误码和关键字段。

源码证据：
- 后端文件和方法：说明校验字段、抛错条件。
- 前端文件和方法：说明 payload 来源。

处理建议：
- 手工地址：先 dry-run，再 confirm patch。
- MDM 地址：回主数据修复并同步。

待验证：
- 线上重新审核结果。
```

## 改代码时的边界

- 默认只改 `bmall-cli`。除非用户明确要求修后端或前端，不要顺手改 sibling 仓。
- 如果 CLI 暴露了新 endpoint，要在后端源码、接口文档或真实只读请求中找到证据。
- 如果只是为排查而加命令，优先只读；写命令必须有 `--dry-run` 和 `--confirm --reason`。
- 如果需要跨仓提交，分别在每个 Git 仓做 `git status --short --branch`、验证和提交说明。
