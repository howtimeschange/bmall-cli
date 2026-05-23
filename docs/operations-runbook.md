# 运维 Runbook

## 外部分发诊断知识

外部用户安装的 CLI 不要求本地有 Bmall 后端、后台或小程序源码。已确认的错误码解释和排查剧本会随 CLI 作为版本化知识包发布：

```bash
bmall agent knowledge --json
bmall agent explain-error --error-code 401700000 --json
```

运维支持收到用户反馈时，先记录知识包 `version`、`sourceKnowledge.generatedAt`、出错命令 `requestId`、错误码、错误原文、脱敏后的 `profile/env/groupId/companyId/orderId` 或 `orderNo`。不要要求外部用户提供源码路径，也不要让用户发送 token、cookie、authorization header、完整手机号或身份证号。

## 订单诊断

先使用标准化诊断命令：

```bash
bmall ops order diagnose --order-no DH202605230001 --json
bmall ops order diagnose-pending --order-id 10001 --json
```

再按需查看关系、时间线和本地规则解释：

```bash
bmall ops order relations --order-no DH202605230001 --json
bmall ops order timeline --order-id 10001 --json
bmall ops order blocking-reasons --type mid-presale --file draft.json --json
bmall ops order split-check --type pickup --pickup-order-id PK001 --json
bmall ops order sync-check --type mid-presale --presale-order-id P001 --json
```

除非后续放入专门 allowlist，不要用 CLI 写命令执行拆单、SAP 同步、订单调整或取消。

## 地址完整性失败

如果审核失败报 `[401700000] 收货地址不完整，请先维护区`，根因不是账户余额。后端会校验 `provinceName`、`cityName`、`regionName`；这个文案表示 `regionName` 为空或仍等于占位值 `区`。

先用 CLI 切到正确品牌和门店：

```bash
bmall agent knowledge --json
bmall agent explain-error --error-code 401700000 --json
bmall company groups --json
bmall company switch-group --group-id <PUMA_GROUP_ID> --json
bmall company list --sword "安江镇隆平广场" --json
bmall company switch --company-id <COMPANY_ID> --json
```

再检查订单和地址：

```bash
bmall ops order diagnose-pending --order-id 10001 --json
bmall ops address check --company-id <COMPANY_ID> --json
bmall ops address list --company-id <COMPANY_ID> --json
```

如果异常地址是手工维护地址，先 dry-run 看将要提交的完整 `addressListReqs`：

```bash
bmall ops address patch \
  --company-id <COMPANY_ID> \
  --address-id <ADDRESS_ID> \
  --region-name 洪江市 \
  --region-code 431281 \
  --dry-run \
  --json
```

确认生成的 `hr/mb2bcrd3/saveOrUpdate` payload 没问题后，再执行确认写入：

```bash
bmall ops address patch \
  --company-id <COMPANY_ID> \
  --address-id <ADDRESS_ID> \
  --region-name 洪江市 \
  --region-code 431281 \
  --confirm \
  --reason "修复待审核订单因收货地址区字段缺失导致审核失败" \
  --json
```

如果地址来自 MDM (`sourceType=2`)，不要用 CLI 直接 patch。应先修门店主数据，再触发主数据同步，让 Bmall 收到完整区县字段。

门店档案里的收货地址维护走 `hr/mb2bcrd3/saveOrUpdate`，CLI 会先读取完整地址列表，再保存整页 `addressListReqs`，避免误删其他地址。新增、编辑、删除和设置默认地址都必须先 dry-run 或带确认理由：

```bash
bmall ops address create \
  --company-id <COMPANY_ID> \
  --province-name 浙江省 \
  --city-name 杭州市 \
  --region-name 西湖区 \
  --con-address "文三路 1 号" \
  --consignee 张三 \
  --consi-phone 13800000000 \
  --default \
  --dry-run \
  --json

bmall ops address update --company-id <COMPANY_ID> --address-id <ADDRESS_ID> --con-address "文三路 2 号" --dry-run --json
bmall ops address set-default --company-id <COMPANY_ID> --address-id <ADDRESS_ID> --dry-run --json
bmall ops address delete --company-id <COMPANY_ID> --address-id <ADDRESS_ID> --dry-run --json
```

MDM 来源地址不允许直接编辑字段或删除；需要从主数据修正后同步。设置默认地址只重排 `isDefault`，可以用于 MDM 地址。

## MDM 主数据同步

门店档案“从 MDM 同步主数据”：

```bash
bmall ops store mdm sync-by-codes --company-codes S001,S002 --dry-run --json
bmall ops store mdm sync-by-time --from 2026-05-01 --to 2026-05-24 --dry-run --json
bmall ops store mdm page --store-code S001 --json
bmall ops store mdm diff --company-code S001 --json
bmall ops store mdm confirm --company-codes S001 --dry-run --json
bmall ops store mdm confirm --company-codes S001 --confirm --reason "同步门店主数据" --json
```

零售档案“从 MDM 同步主数据”：

```bash
bmall ops retailer mdm sync-by-codes --distributor-codes R001,R002 --dry-run --json
bmall ops retailer mdm sync-by-time --from 2026-05-01 --to 2026-05-24 --dry-run --json
bmall ops retailer mdm page --retailer-code R001 --json
bmall ops retailer mdm diff --distributor-code R001 --json
bmall ops retailer mdm confirm --distributor-codes R001 --dry-run --json
bmall ops retailer mdm confirm --distributor-codes R001 --confirm --reason "同步零售商主数据" --json
```

`confirm` 必须指定编码列表或 `--sync-all`。批量全量确认时更要先用 `page/diff` 抽样确认中间表内容，真实执行仍需要 `--confirm --reason`。

## 商品、库存和上下文

只读命令：

```bash
bmall ops product master search --item-code SM123 --json
bmall ops product apply list --item-code SM123 --json
bmall ops stock query --sku-code SKU001 --json
bmall ops customer get --company-code C001 --json
bmall ops store get --company-id 123 --json
bmall ops retailer get --distributor-id D001 --json
```

写命令必须 dry-run 或带确认理由：

```bash
bmall ops product apply update --input apply-items.csv --dry-run --json
bmall ops product image-sync --item-code SM123 --confirm --reason "refresh approved product imagery" --json
```

订单提交是财务写操作。dry-run 可用于计划；未接入真实提交路径或不支持的 adapter 会返回 blocked/unsupported，CLI 不会合成本地假订单号。

待审核订单命令使用现有 Bmall endpoint：

```bash
bmall pending-order source-type --order-id 10001 --json
bmall pending-order detail --order-id 10001 --middle-ground --json
bmall pending-order review-check --file pending-review-submit.json --json
bmall pending-order review --file pending-review-submit.json --dry-run --json
bmall pending-order cancel --order-id 10001 --dry-run --reason "客户取消" --json
```

`review` 和 `cancel` 真写仍需要 `--confirm --reason`。

以下命令目前是明确缺口，不会假成功：

```bash
bmall ops config get --key <KEY> --json
bmall ops config set --key <KEY> --value <VALUE> --confirm --reason "..." --json
bmall ops log api --request-id <REQUEST_ID> --json
bmall ops log sync-warning --order-no <ORDER_NO> --json
```

它们会抛 `*_REQUIRES_BACKEND_FACADE`，直到后端提供安全查询/配置 facade。

## 导出任务

导出响应会被归一化为：

- `direct-url`: response includes `downloadURL`, `downloadUrl`, `fileUrl`, or `url`.
- `async-task`: response includes `taskId`, `taskCode`, or `recordId`.
- `stream`: response is a file stream or binary attachment.
- `pending`: response says `isAsyn: true` but does not include a task id.

命令：

```bash
bmall ops export task list --type order --json
bmall ops export task get --task-id 10001 --json
bmall ops export task wait --task-id 10001 --timeout 10m --json
bmall ops export task download --task-id 10001 --output order.xlsx
```

pending 记录写入 `~/.bmall-cli/exports/pending.json`，方便运维后续补查任务映射。

## Jobs

只展示 allowlist 中的 job：

```bash
bmall ops job list --module order --json
```

`orderDailyStatJob` 当前只是待审批候选，默认禁用。运行 job 必须满足：

- 该 job 在 `manifests/job-allowlist.json` 中启用。
- 命令带 `--dry-run` 预演，或带 `--confirm --reason` 真实执行。
- CLI 只使用 allowlist 固定的 target object、method 和参数。

CLI 绝不接受命令参数传入任意 `targetObject`、`targetMethod` 或 `schedule/dowork`。没有真实后端 facade 时，实际 `job run` 会失败，而不是返回合成成功。
