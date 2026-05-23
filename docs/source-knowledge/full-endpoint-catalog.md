# Bmall Full Endpoint Catalog

生成时间：2026-05-24

这份目录是全量归一化接口索引，按业务域分组。精选解释继续看 `interface-map.md` 和 `domain-flows.md`；需要表格分析时看 `source-knowledge.csv` 和 `normalized-endpoints.csv`。

## 总览

| 指标 | 数量 |
| --- | --- |
| 接口出现次数 | 7401 |
| 归一化接口路径 | 4635 |
| 覆盖仓库数 | 4 |

## 按领域索引

### 柔供预售 (supply-presale)

| 归一化路径 | 仓库 | 方法 | 出现次数 | 覆盖 | 首个证据 |
| --- | --- | --- | --- | --- | --- |
| `/activity/mini/supply/presale/activity/itemRel/getItemDetail` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/SupplyPresaleActivityItemRelMiniController.java:28 |
| `/activity/mini/supply/presale/activity/query/detail` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/SupplyPresaleActivityMiniController.java:34 |
| `/activity/mini/supply/presale/cfg/current` | backend, miniapp | POST, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/SupplyPresaleCfgMiniController.java:27 |
| `/activity/mini/supply/presale/item/page` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/SupplyPresaleItemMiniController.java:34 |
| `/activity/mini/supply/presale/order/add/again` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/SupplyPresaleOrderMiniController.java:137 |
| `/activity/mini/supply/presale/order/canBeSubmitItems` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/SupplyPresaleOrderMiniController.java:223 |
| `/activity/mini/supply/presale/order/checkItems` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/SupplyPresaleOrderMiniController.java:197 |
| `/activity/mini/supply/presale/order/checkItems/applyMultiple` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/SupplyPresaleOrderMiniController.java:214 |
| `/activity/mini/supply/presale/order/checkItems/delete` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/SupplyPresaleOrderMiniController.java:205 |
| `/activity/mini/supply/presale/order/clear/failure/item` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/SupplyPresaleOrderMiniController.java:105 |
| `/activity/mini/supply/presale/order/copySupplyPresaleOrder` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/SupplyPresaleOrderMiniController.java:232 |
| `/activity/mini/supply/presale/order/delete` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/SupplyPresaleOrderMiniController.java:146 |
| `/activity/mini/supply/presale/order/grouping/cancel` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/SupplyPresaleOrderMiniController.java:164 |
| `/activity/mini/supply/presale/order/grouping/delete` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/SupplyPresaleOrderMiniController.java:173 |
| `/activity/mini/supply/presale/order/grouping/updateQtyById` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/SupplyPresaleOrderMiniController.java:189 |
| `/activity/mini/supply/presale/order/itemRel/getShopTotal` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/SupplyPresaleOrderItemRelMiniController.java:28 |
| `/activity/mini/supply/presale/order/query/failure/item` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/SupplyPresaleOrderMiniController.java:94 |
| `/activity/mini/supply/presale/order/query/order/detail` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/SupplyPresaleOrderMiniController.java:59 |
| `/activity/mini/supply/presale/order/query/order/detail/item` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/SupplyPresaleOrderMiniController.java:76 |
| `/activity/mini/supply/presale/order/query/order/list` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/SupplyPresaleOrderMiniController.java:84 |
| `/activity/mini/supply/presale/order/query/waiting/order` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/SupplyPresaleOrderMiniController.java:67 |
| `/activity/mini/supply/presale/order/save` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/SupplyPresaleOrderMiniController.java:115 |
| `/activity/mini/supply/presale/order/submit` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/SupplyPresaleOrderMiniController.java:155 |
| `/activity/mini/supply/presale/order/updateQtyById` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/SupplyPresaleOrderMiniController.java:181 |
| `/activity/presaleOrder/adjust/cancel/supplyPresale/order` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderAdjustController.java:67 |
| `/activity/presaleOrder/adjust/check/del/skc/supplyPresaleOrder` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderAdjustController.java:201 |
| `/activity/presaleOrder/adjust/check/revive/skc/supplyPresaleOrder` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderAdjustController.java:211 |
| `/activity/presaleOrder/adjust/del/skc/supplyPresaleOrder` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderAdjustController.java:127 |
| `/activity/presaleOrder/adjust/revive/skc/supplyPresaleOrder` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderAdjustController.java:143 |
| `/activity/supply/presale/activity/audit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleActivityController.java:94 |
| `/activity/supply/presale/activity/itemRel/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleActivityItemRelController.java:44 |
| `/activity/supply/presale/activity/itemRel/pageGather` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleActivityItemRelController.java:52 |
| `/activity/supply/presale/activity/itemRel/selectOne` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleActivityItemRelController.java:36 |
| `/activity/supply/presale/activity/itemRel/update/status` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleActivityItemRelController.java:60 |
| `/activity/supply/presale/activity/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleActivityController.java:78 |
| `/activity/supply/presale/activity/query/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleActivityController.java:52 |
| `/activity/supply/presale/activity/query/skc/count` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleActivityController.java:85 |
| `/activity/supply/presale/activity/selectActivityByPage` | backend, admin-v1 | POST, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleActivityController.java:70 |
| `/activity/supply/presale/activity/selectActivityNo` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleActivityController.java:62 |
| `/activity/supply/presale/activity/updateActivityRule` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleActivityController.java:109 |
| `/activity/supply/presale/cfg/getSupplyPresaleCfgVo` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2964 |
| `/activity/supply/presale/cfg/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleCfgController.java:37 |
| `/activity/supply/presale/cfg/selectOne` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleCfgController.java:29 |
| `/activity/supply/presale/item/type/queryAllList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleItemTypeController.java:68 |
| `/activity/supply/presale/item/type/queryList` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleItemTypeController.java:60 |
| `/activity/supply/presale/item/type/queryPage` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleItemTypeController.java:51 |
| `/activity/supply/presale/item/type/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleItemTypeController.java:33 |
| `/activity/supply/presale/item/type/updateShow` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleItemTypeController.java:42 |
| `/activity/supply/presale/itemCfg/getItemToptipShowFlag` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleItemCfgController.java:117 |
| `/activity/supply/presale/itemCfg/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleItemCfgController.java:51 |
| `/activity/supply/presale/itemCfg/selectOne` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleItemCfgController.java:40 |
| `/activity/supply/presale/itemCfg/update` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleItemCfgController.java:64 |
| `/activity/supply/presale/itemCfg/updateBatch` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleItemCfgController.java:82 |
| `/activity/supply/presale/itemCfg/updateBatchTypeRel` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleItemCfgController.java:101 |
| `/activity/supply/presale/order/activity/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleOrderController.java:196 |
| `/activity/supply/presale/order/association/order` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleOrderController.java:109 |
| `/activity/supply/presale/order/downBox/status` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleOrderController.java:205 |
| `/activity/supply/presale/order/grouping/cancel` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleOrderController.java:187 |
| `/activity/supply/presale/order/itemRel/page` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleOrderItemRelController.java:41 |
| `/activity/supply/presale/order/itemRel/selectOne` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleOrderItemRelController.java:33 |
| `/activity/supply/presale/order/multi/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleOrderController.java:137 |
| `/activity/supply/presale/order/multi/submit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleOrderController.java:171 |
| `/activity/supply/presale/order/page` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleOrderController.java:93 |
| `/activity/supply/presale/order/pageGather` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleOrderController.java:101 |
| `/activity/supply/presale/order/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleOrderController.java:149 |
| `/activity/supply/presale/order/selectOne` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleOrderController.java:85 |
| `/activity/supply/presale/order/split/parentOrder` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleOrderController.java:129 |
| `/activity/supply/presale/order/split/subOrder` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleOrderController.java:119 |
| `/activity/supply/presale/order/splitOrders` | backend, admin-v1 | GET, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleOrderController.java:218 |
| `/activity/supply/presale/order/submit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleOrderController.java:179 |
| `/activity/supply/presale/order/submit/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleOrderController.java:162 |
| `/activity/supply/presale/order/wait/submit` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:3007 |
| `/activity/supplyPresale/presaleOrder/split/check/entranceSelectedOrderWarning` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleOrderSplitController.java:33 |
| `/activity/supplyPresale/presaleOrder/split/check/pageSelectedOrderWarning` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleOrderSplitController.java:53 |
| `/activity/supplyPresale/presaleOrder/split/check/splitOrderResult` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleOrderSplitController.java:71 |
| `/activity/supplyPresale/presaleOrder/split/detail/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleOrderSplitController.java:62 |
| `/activity/supplyPresale/presaleOrder/split/getSplitSwitch` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleOrderSplitController.java:106 |
| `/activity/supplyPresale/presaleOrder/split/getSplitSwitchCountdown` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleOrderSplitController.java:123 |
| `/activity/supplyPresale/presaleOrder/split/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleOrderSplitController.java:42 |
| `/activity/supplyPresale/presaleOrder/split/result/confirm` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleOrderSplitController.java:98 |
| `/activity/supplyPresale/presaleOrder/split/result/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleOrderSplitController.java:89 |
| `/activity/supplyPresale/presaleOrder/split/result/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleOrderSplitController.java:80 |
| `/activity/supplyPresale/presaleOrder/split/saveSplitSwitch` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresaleOrderSplitController.java:114 |
| `/file/supply/presale/commodity/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/SupplyPresaleController.java:34 |
| `/file/supply/presale/import/updateStatus` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/SupplyPresaleController.java:48 |
| `/file/supply/presale/item/export` | backend, admin-v1, admin-v2 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FileSupplyPresaleOrderController.java:63 |
| `/file/supply/presale/order/allocation/status/update/failResult` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FileSupplyPresaleOrderController.java:112 |
| `/file/supply/presale/order/del/skc/failResult` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FileSupplyPresaleOrderController.java:99 |
| `/file/supply/presale/order/export` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FileSupplyPresaleOrderController.java:55 |
| `/file/supply/presale/split/parentOrder/export` | backend, admin-v1 | GET, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FileSupplyPresaleOrderController.java:87 |
| `/file/supply/presale/split/subOrder/export` | backend, admin-v1 | GET, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FileSupplyPresaleOrderController.java:75 |
| `/file/supplyPresale/presaleOrder/split/detail/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FileSupplyPresaleOrderSplitController.java:32 |
| `/file/supplyPresale/presaleOrder/split/merge/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FileSupplyPresaleOrderSplitController.java:40 |
| `/file/supplyPresale/presaleOrder/split/result/detail/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FileSupplyPresaleOrderSplitController.java:56 |
| `/file/supplyPresale/presaleOrder/split/result/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FileSupplyPresaleOrderSplitController.java:48 |
| `/hr/distributor/v2/getFirstChannelList` | backend, admin-v1, admin-v2 | POST, POST(default) | 13 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorNewController.java:97 |
| `/hr/distributor/v2/getSecondChannelList` | backend, admin-v1, admin-v2 | POST, POST(default) | 13 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorNewController.java:105 |
| `/hr/mdmdic/batch/list` | admin-v1, admin-v2 | POST, POST(default) | 15 | 多个前端共享但未抽到后端 | semir-bmall-admin-v2/app/src/services/mdm.ts:111 |

### 中短期预售 (mid-presale)

| 归一化路径 | 仓库 | 方法 | 出现次数 | 覆盖 | 首个证据 |
| --- | --- | --- | --- | --- | --- |
| `/activity/liveChannels/mini/getLiveChannelsByCompanyIdAndActivityId?activityId=${data.activityId}&companyId=${data.companyId}` | miniapp | POST(default) | 1 | 仅单个前端证据 | semir-reabam-front/packageForPresale/services/midtermPresaleApis.js:427 |
| `/activity/liveChannels/presaleOrder/cnt` | backend, admin-v2 | GET, POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:185 |
| `/activity/liveChannels/presaleOrder/gather` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:195 |
| `/activity/liveChannels/presaleOrder/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:174 |
| `/activity/mini/presaleActivity/calculateRuleStandard` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/PresaleActivityMiniController.java:139 |
| `/activity/mini/presaleActivity/changeCompany/check` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/PresaleActivityMiniController.java:90 |
| `/activity/mini/presaleActivity/changeModel/check` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/PresaleActivityMiniController.java:98 |
| `/activity/mini/presaleActivity/companyList` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/PresaleActivityMiniController.java:41 |
| `/activity/mini/presaleActivity/confirm/items` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/PresaleActivityMiniController.java:131 |
| `/activity/mini/presaleActivity/detail` | backend, miniapp | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/PresaleActivityMiniController.java:33 |
| `/activity/mini/presaleActivity/items/all` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/PresaleActivityMiniController.java:66 |
| `/activity/mini/presaleActivity/items/byOrderRule` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/PresaleActivityMiniController.java:74 |
| `/activity/mini/presaleActivity/orderModelList` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/PresaleActivityMiniController.java:49 |
| `/activity/mini/presaleActivity/queryCompanyWhiteRole` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/PresaleActivityMiniController.java:58 |
| `/activity/mini/presaleActivity/queryItems/byOrderId` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/PresaleActivityMiniController.java:106 |
| `/activity/mini/presaleActivity/rules/byOrderModel` | backend, miniapp | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/PresaleActivityMiniController.java:82 |
| `/activity/mini/presaleActivity/specList` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/PresaleActivityMiniController.java:114 |
| `/activity/mini/presaleActivity/submit/check` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/PresaleActivityMiniController.java:123 |
| `/activity/orderModel/queryOrderModelCompany` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/orderModel/OrderModelController.java:141 |
| `/activity/orderModel/queryOrderModelRule` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/orderModel/OrderModelController.java:150 |
| `/activity/presale/activity/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivityNewController.java:190 |
| `/activity/presale/activity/addOrUpdate/check/itemRangeExceeds` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivityNewController.java:242 |
| `/activity/presale/activity/addOrUpdate/item/check` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivityNewController.java:149 |
| `/activity/presale/activity/batchSyncSap` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivityNewController.java:96 |
| `/activity/presale/activity/batchSyncSap/Check` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivityNewController.java:88 |
| `/activity/presale/activity/detail/forUpdate` | backend, admin-v1 | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivityNewController.java:115 |
| `/activity/presale/activity/detailById` | backend, admin-v2 | GET, POST | 5 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivityNewController.java:64 |
| `/activity/presale/activity/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivityNewController.java:199 |
| `/activity/presale/activity/edit/activityCompanyInfo` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivityNewController.java:182 |
| `/activity/presale/activity/edit/activityInfo` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivityNewController.java:157 |
| `/activity/presale/activity/edit/activityItemGoodsInfo` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivityNewController.java:173 |
| `/activity/presale/activity/edit/activityModelInfo` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivityNewController.java:165 |
| `/activity/presale/activity/file/checkCompany` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivityNewController.java:105 |
| `/activity/presale/activity/getGoodsSku/page` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivityNewController.java:226 |
| `/activity/presale/activity/getGroupSourceConfig` | backend, admin-v1 | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivityNewController.java:250 |
| `/activity/presale/activity/getPresaleActivityGoodsComp` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivityNewController.java:209 |
| `/activity/presale/activity/historySyncSapQty` | backend, admin-v1 | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivityNewController.java:80 |
| `/activity/presale/activity/queryAllActivity` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivityNewController.java:72 |
| `/activity/presale/activity/skcInfo/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivityNewController.java:218 |
| `/activity/presale/activity/skcInfo/forUpdate` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivityNewController.java:124 |
| `/activity/presale/activity/skcRuleInfo` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivityNewController.java:132 |
| `/activity/presale/activity/skcRuleInfoPage` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivityNewController.java:141 |
| `/activity/presale/activity/update/check/seasonExist` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivityNewController.java:234 |
| `/activity/presale/activity/whitelist/query/companyList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivityWhitelistController.java:30 |
| `/activity/presale/activity/whitelist/save/companyList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivityWhitelistController.java:38 |
| `/activity/presale/order/activityList` | backend, admin-v2 | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderNewController.java:47 |
| `/activity/presale/order/changeModel/check` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderNewController.java:63 |
| `/activity/presale/order/downBox/status` | backend, admin-v1, admin-v2 | POST, POST(default) | 5 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderNewController.java:39 |
| `/activity/presale/order/orderModelList` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderNewController.java:55 |
| `/activity/presale/order/submit/check` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderNewController.java:71 |
| `/activity/presale/order/submit/check/forUpdate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderNewController.java:79 |
| `/activity/presale/presaleOrder/split/check/entranceSelectedOrderWarning` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderSplitController.java:33 |
| `/activity/presale/presaleOrder/split/check/pageSelectedOrderWarning` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderSplitController.java:53 |
| `/activity/presale/presaleOrder/split/check/splitOrderResult` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderSplitController.java:71 |
| `/activity/presale/presaleOrder/split/detail/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderSplitController.java:62 |
| `/activity/presale/presaleOrder/split/getSplitSwitch` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderSplitController.java:108 |
| `/activity/presale/presaleOrder/split/getSplitSwitchCountdown` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderSplitController.java:125 |
| `/activity/presale/presaleOrder/split/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderSplitController.java:42 |
| `/activity/presale/presaleOrder/split/result/confirm` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderSplitController.java:98 |
| `/activity/presale/presaleOrder/split/result/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderSplitController.java:89 |
| `/activity/presale/presaleOrder/split/result/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderSplitController.java:80 |
| `/activity/presale/presaleOrder/split/saveSplitSwitch` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderSplitController.java:116 |
| `/activity/presaleActivities/addActivity` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivitiesController.java:48 |
| `/activity/presaleActivities/detail` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivitiesController.java:92 |
| `/activity/presaleActivities/findActivity` | backend, admin-v1, admin-v2 | POST, POST(default) | 9 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivitiesController.java:78 |
| `/activity/presaleActivities/findItemActivity` | backend, miniapp | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivitiesController.java:107 |
| `/activity/presaleActivities/findNowActivity` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivitiesController.java:85 |
| `/activity/presaleActivities/findPresaleGoods` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivitiesController.java:101 |
| `/activity/presaleActivities/itemStore/company/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivitiesController.java:127 |
| `/activity/presaleActivities/itemStore/companyCheck` | backend, admin-v2 | POST | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivitiesController.java:118 |
| `/activity/presaleActivities/updateActivity` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivitiesController.java:57 |
| `/activity/presaleActivities/updateStatus` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivitiesController.java:65 |
| `/activity/presaleActivitiesGoods/itemStore/item/detail` | backend, admin-v2 | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivitiesGoodsController.java:105 |
| `/activity/presaleActivitiesGoods/itemStore/skc/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivitiesGoodsController.java:77 |
| `/activity/presaleActivitiesGoods/itemStore/skc/pageExport` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivitiesGoodsController.java:85 |
| `/activity/presaleActivitiesGoods/itemStore/sku/pageExport` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivitiesGoodsController.java:93 |
| `/activity/presaleActivitiesGoods/redis/clearGoodsDetail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivitiesGoodsController.java:56 |
| `/activity/presaleActivitiesGoods/redis/getGoodsDetail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivitiesGoodsController.java:48 |
| `/activity/presaleActivitiesGoods/redis/saveGoodsDetail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivitiesGoodsController.java:39 |
| `/activity/presaleActivityCompanyRel/{id}` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivityCompanyRelController.java:35 |
| `/activity/presaleActivityCompanyRel/availableCompanyMap` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivityCompanyRelController.java:45 |
| `/activity/presaleActivityModelRel/{id}` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivityModelRelController.java:28 |
| `/activity/presaleActivityModelRel/getOneByActivityIdAndModelId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleActivityModelRelController.java:37 |
| `/activity/presaleOrder/add` | backend, miniapp, admin-v1 | POST, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:96 |
| `/activity/presaleOrder/adjust/cancel/presale/order` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderAdjustController.java:56 |
| `/activity/presaleOrder/adjust/check/del/skc` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderAdjustController.java:170 |
| `/activity/presaleOrder/adjust/check/del/skc/presaleOrder` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderAdjustController.java:181 |
| `/activity/presaleOrder/adjust/check/revive/skc/presaleOrder` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderAdjustController.java:191 |
| `/activity/presaleOrder/adjust/del/skc` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderAdjustController.java:78 |
| `/activity/presaleOrder/adjust/del/skc/presaleOrder` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderAdjustController.java:95 |
| `/activity/presaleOrder/adjust/revive/skc/presaleOrder` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderAdjustController.java:111 |
| `/activity/presaleOrder/audit` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:303 |
| `/activity/presaleOrder/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:196 |
| `/activity/presaleOrder/detail2` | backend, miniapp | ANY, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:208 |
| `/activity/presaleOrder/detail3` | backend, miniapp | ANY, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:217 |
| `/activity/presaleOrder/detailById` | backend, miniapp | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:318 |
| `/activity/presaleOrder/detailEdit/package` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:156 |
| `/activity/presaleOrder/getAllSplitSubOrderList` | backend, admin-v1 | GET, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:362 |
| `/activity/presaleOrder/getMgdOrderCountInfo` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:334 |
| `/activity/presaleOrder/getOrderCountInfo` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:326 |
| `/activity/presaleOrder/getOrderNum` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:308 |
| `/activity/presaleOrder/getSplitOrderDetailList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:373 |
| `/activity/presaleOrder/getSplitParentOrderList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:352 |
| `/activity/presaleOrder/getSplitSubOrderList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:343 |
| `/activity/presaleOrder/list` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:224 |
| `/activity/presaleOrder/live/orderStatistics` | backend, admin-v2 | POST | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:419 |
| `/activity/presaleOrder/live/page` | backend, admin-v2 | POST | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:257 |
| `/activity/presaleOrder/mini/last/wait/order` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:234 |
| `/activity/presaleOrder/mini/order/waitSubmit/check` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:447 |
| `/activity/presaleOrder/mini/order/waitSubmit/check?presaleOrderId=${data.presaleOrderId}` | miniapp | POST(default) | 1 | 仅单个前端证据 | semir-reabam-front/packageForPresale/services/midtermPresaleApis.js:333 |
| `/activity/presaleOrder/multi/store/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:120 |
| `/activity/presaleOrder/multi/store/add/byPackage` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:133 |
| `/activity/presaleOrder/multi/store/edit/byPackage` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:146 |
| `/activity/presaleOrder/multi/store/order/calQuantity` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:169 |
| `/activity/presaleOrder/multi/store/order/getWarning` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:178 |
| `/activity/presaleOrder/order/calQuantity` | backend, miniapp | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:111 |
| `/activity/presaleOrder/order/getWarning` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:187 |
| `/activity/presaleOrder/orderCount` | backend, admin-v2 | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:439 |
| `/activity/presaleOrder/orderRollbackLiveShopCart` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:427 |
| `/activity/presaleOrder/orderStatistics` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:404 |
| `/activity/presaleOrder/package/skuList` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:164 |
| `/activity/presaleOrder/page` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:243 |
| `/activity/presaleOrder/page/export/orderItems` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:279 |
| `/activity/presaleOrder/page/export/orderItemsOfChannel` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:295 |
| `/activity/presaleOrder/page/export/orders` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:271 |
| `/activity/presaleOrder/page/export/ordersOfChannel` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:287 |
| `/activity/presaleOrder/syncSap` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderController.java:91 |
| `/file/activity/orderModel/orderModelRuleListExcel` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/orderModel/controller/FileOrderModelController.java:46 |
| `/file/activity/presale/multi/store/presaleOrder/import` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/PresaleController.java:107 |
| `/file/activity/presale/order/import` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/PresaleController.java:75 |
| `/file/activity/presale/orderGoodsItem/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/PresaleController.java:182 |
| `/file/activity/presale/presale/ruleSkc/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/PresaleController.java:172 |
| `/file/export/presale/list/execl` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/PresaleOrderExportController.java:28 |
| `/file/export/presale/order/allocation/status/update/failResult` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/PresaleOrderExportController.java:57 |
| `/file/export/presale/order/del/skc/failResult` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/PresaleOrderExportController.java:44 |
| `/file/export/presale/order/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/PresaleOrderExportController.java:34 |
| `/file/liveChannels/presaleOrder/export` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileLiveChannelsController.java:44 |
| `/file/presale/activity/import/goods` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FilePresaleActivityController.java:31 |
| `/file/presale/activity/itemStore/export` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FilePresaleActivityController.java:48 |
| `/file/presale/activity/model/rule/goods/export` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FilePresaleActivityController.java:39 |
| `/file/presale/presaleOrder/split/detail/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FilePresaleOrderSplitController.java:34 |
| `/file/presale/presaleOrder/split/merge/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FilePresaleOrderSplitController.java:42 |
| `/file/presale/presaleOrder/split/parentOrder/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FilePresaleOrderSplitController.java:67 |
| `/file/presale/presaleOrder/split/result/detail/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FilePresaleOrderSplitController.java:58 |
| `/file/presale/presaleOrder/split/result/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FilePresaleOrderSplitController.java:50 |
| `/file/presale/presaleOrder/split/subOrder/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FilePresaleOrderSplitController.java:77 |
| `/file/sysCompanyFile/companyExcel` | backend, admin-v1, admin-v2 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/hr/controller/SysCompanyFileController.java:46 |
| `/hr/company/label/findCompanyByLabelIds` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/company/label/CompanyLabelController.java:116 |
| `/hr/sysCompany/queryCompanyByLabel` | admin-v1, admin-v2 | POST, POST(default) | 2 | 多个前端共享但未抽到后端 | semir-bmall-admin-v2/app/src/services/presale.ts:149 |
| `/product/client/directSupply/queryPagList/byPresaleOrder` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/client/DirectSupplyClient.java:127 |

### 提货单 (pickup)

| 归一化路径 | 仓库 | 方法 | 出现次数 | 覆盖 | 首个证据 |
| --- | --- | --- | --- | --- | --- |
| `/activity/pickup/activityView/data/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupActivityViewController.java:56 |
| `/activity/pickup/activityView/generateBillOfLading/confirm` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/components/pages/presalePickupManage/presalePickupManageApi.js:21 |
| `/activity/pickup/activityView/generateBillOfLading/confirmAllocationResult` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/components/pages/presalePickupManage/presalePickupManageApi.js:19 |
| `/activity/pickup/activityView/generateBillOfLading/confirmAllocationResultShow` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/components/pages/presalePickupManage/presalePickupManageApi.js:20 |
| `/activity/pickup/activityView/generateBillOfLading/getCompanyAllocationResult/getDetail` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/components/pages/presalePickupManage/presalePickupManageApi.js:22 |
| `/activity/pickup/activityView/generateBillOfLading/getCompanyPageList` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/components/pages/presalePickupManage/presalePickupManageApi.js:18 |
| `/activity/pickup/activityView/generateBillOfLading/getPageList` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/components/pages/presalePickupManage/presalePickupManageApi.js:16 |
| `/activity/pickup/activityView/generateBillOfLading/selectedAllocation` | admin-v1 | POST(default) | 3 | 仅单个前端证据 | semir-reabam-admin/src/components/pages/presalePickupManage/presalePickupManageApi.js:17 |
| `/activity/pickup/activityView/itemEventCompensate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupActivityViewController.java:64 |
| `/activity/pickup/activityView/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupActivityViewController.java:46 |
| `/activity/pickup/activityView/page/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupActivityViewController.java:51 |
| `/activity/pickup/activityView/reSync` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupActivityViewController.java:73 |
| `/activity/pickup/companyView/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupActivityCompanyViewController.java:41 |
| `/activity/pickup/companyView/presaleOrderList` | backend, admin-v1 | GET, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupActivityCompanyViewController.java:56 |
| `/activity/pickup/companyView/reSync` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupActivityCompanyViewController.java:71 |
| `/activity/pickup/config/getPickupConfirmTime` | backend, admin-v1 | GET, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupConfigController.java:45 |
| `/activity/pickup/config/getPickupLowLimit` | backend, admin-v1 | GET, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupConfigController.java:53 |
| `/activity/pickup/config/savePickupConfirmTime` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupConfigController.java:27 |
| `/activity/pickup/config/savePickupLowLimit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupConfigController.java:36 |
| `/activity/pickup/itemView/fillMediumShortPickupData` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupActivityItemViewController.java:47 |
| `/activity/pickup/itemView/getPageList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupActivityItemViewController.java:56 |
| `/activity/pickup/itemView/getPageListGather` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupActivityItemViewController.java:64 |
| `/activity/pickup/itemView/getPresaleSkcActivityPageList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupActivityItemViewController.java:72 |
| `/activity/pickup/itemView/getPresaleSkuDeliveryDatePageList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupActivityItemViewController.java:80 |
| `/activity/pickup/itemView/getSkuPageList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupActivityItemViewController.java:88 |
| `/activity/pickup/itemView/reSyncPresaleOrderStatus` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupActivityItemViewController.java:96 |
| `/activity/pickup/order/confirm` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderController.java:84 |
| `/activity/pickup/order/detail` | backend, miniapp | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderController.java:54 |
| `/activity/pickup/order/mgd/addPickupOrder` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderMgdController.java:172 |
| `/activity/pickup/order/mgd/arrivalNotice/preview` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderMgdController.java:87 |
| `/activity/pickup/order/mgd/arrivalNotice/send` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderMgdController.java:95 |
| `/activity/pickup/order/mgd/batchRefusePickupOrder` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderMgdController.java:155 |
| `/activity/pickup/order/mgd/cancelPickupOrder` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderMgdController.java:234 |
| `/activity/pickup/order/mgd/detail` | backend, admin-v1 | GET, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderMgdController.java:110 |
| `/activity/pickup/order/mgd/export/page` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderMgdController.java:203 |
| `/activity/pickup/order/mgd/export/split/detail/page` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderMgdController.java:264 |
| `/activity/pickup/order/mgd/export/split/page` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderMgdController.java:255 |
| `/activity/pickup/order/mgd/getPickOrderOfOrderId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderMgdController.java:136 |
| `/activity/pickup/order/mgd/getPickOrderSkuList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderMgdController.java:128 |
| `/activity/pickup/order/mgd/getPickupOrderNoInfo` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderMgdController.java:272 |
| `/activity/pickup/order/mgd/getPresalePickupOrderListInfoForExport` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderMgdController.java:196 |
| `/activity/pickup/order/mgd/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderMgdController.java:79 |
| `/activity/pickup/order/mgd/refusePickupOrder` | backend, miniapp, admin-v1 | GET, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderMgdController.java:146 |
| `/activity/pickup/order/mgd/selectPickupOrderSkus` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderMgdController.java:120 |
| `/activity/pickup/order/mgd/updatePickupOrderByActualDelivery` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderMgdController.java:246 |
| `/activity/pickup/order/mgd/updatePickupOrderFinish` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderMgdController.java:223 |
| `/activity/pickup/order/orderConfirmDetail` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderController.java:123 |
| `/activity/pickup/order/orderItems` | backend, miniapp | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderController.java:64 |
| `/activity/pickup/order/orderItemsByGoPickup` | backend, miniapp | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderController.java:74 |
| `/activity/pickup/order/page` | backend, miniapp | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderController.java:44 |
| `/activity/pickup/order/subOrderList` | backend, miniapp | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderController.java:95 |
| `/activity/pickup/order/updateBatch/partialType` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderController.java:104 |
| `/activity/pickup/order/updateBatch/rejectType` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderController.java:114 |
| `/activity/pickup/orderRel/selectPickupOrdDetailByPreOrdId` | backend, admin-v1 | GET, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderRelController.java:44 |
| `/activity/pickup/orderRel/selectPickupOrdDetailByPreOrdId/export` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderRelController.java:35 |
| `/activity/pickup/orderRel/selectPickupOrders` | backend, miniapp | GET | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderRelController.java:65 |
| `/activity/pickup/orderRel/selectPresaleOrders` | backend, miniapp | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderRelController.java:54 |
| `/activity/pickup/priority/listByAll` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupPriorityController.java:42 |
| `/activity/pickup/priority/listByPage` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupPriorityController.java:34 |
| `/activity/pickup/priority/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupPriorityController.java:50 |
| `/activity/pickup/skcConfig/addOrEdit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupSkcConfigController.java:52 |
| `/activity/pickup/skcConfig/delById` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupSkcConfigController.java:61 |
| `/activity/pickup/skcConfig/listByPage` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupSkcConfigController.java:36 |
| `/activity/pickup/skcConfig/listByPage/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupSkcConfigController.java:44 |
| `/activity/pickup/skuReplacement/batchDelete` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupSkuReplacementController.java:41 |
| `/activity/pickup/skuReplacement/listByPage` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupSkuReplacementController.java:33 |
| `/activity/pickup/split/check/entranceSelectedOrderWarning` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderSplitController.java:47 |
| `/activity/pickup/split/check/pageSelectedOrderWarning` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderSplitController.java:67 |
| `/activity/pickup/split/check/splitOrderResult` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderSplitController.java:86 |
| `/activity/pickup/split/detail/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderSplitController.java:76 |
| `/activity/pickup/split/getSplitParentOrderList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderSplitController.java:167 |
| `/activity/pickup/split/getSplitSubOrderList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderSplitController.java:149 |
| `/activity/pickup/split/getSplitSwitch` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderSplitController.java:123 |
| `/activity/pickup/split/getSplitSwitchCountdown` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderSplitController.java:140 |
| `/activity/pickup/split/mini/getSplitSubOrderList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderSplitController.java:157 |
| `/activity/pickup/split/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderSplitController.java:56 |
| `/activity/pickup/split/result/confirm` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderSplitController.java:114 |
| `/activity/pickup/split/result/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderSplitController.java:105 |
| `/activity/pickup/split/result/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderSplitController.java:95 |
| `/activity/pickup/split/saveSplitSwitch` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderSplitController.java:131 |
| `/activity/presale/pickup/manage/activityStatus/update` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresalePickupManageController.java:191 |
| `/activity/presale/pickup/manage/activityView/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresalePickupManageController.java:180 |
| `/activity/presale/pickup/manage/activityView/pageGather` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresalePickupManageController.java:202 |
| `/activity/presale/pickup/manage/companyView/dealerPage` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresalePickupManageController.java:232 |
| `/activity/presale/pickup/manage/companyView/page` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresalePickupManageController.java:212 |
| `/activity/presale/pickup/manage/companyView/pageGather` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresalePickupManageController.java:222 |
| `/activity/presale/pickup/manage/companyView/presaleOrder/page` | backend, admin-v1 | GET, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresalePickupManageController.java:246 |
| `/activity/presale/pickup/manage/generateBillOfLading/confirm` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresalePickupManageController.java:305 |
| `/activity/presale/pickup/manage/generateBillOfLading/confirmAllocationResult` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresalePickupManageController.java:281 |
| `/activity/presale/pickup/manage/generateBillOfLading/confirmAllocationResultShow` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresalePickupManageController.java:297 |
| `/activity/presale/pickup/manage/generateBillOfLading/getCompanyAllocationResult/getDetail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresalePickupManageController.java:289 |
| `/activity/presale/pickup/manage/generateBillOfLading/getCompanyPage` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresalePickupManageController.java:264 |
| `/activity/presale/pickup/manage/generateBillOfLading/getExecuteStatus` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresalePickupManageController.java:314 |
| `/activity/presale/pickup/manage/generateBillOfLading/getPage` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresalePickupManageController.java:255 |
| `/activity/presale/pickup/manage/generateBillOfLading/getPresaleOrderPage` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresalePickupManageController.java:273 |
| `/activity/presale/pickup/manage/getPickupConfirmTime` | backend, admin-v1 | GET, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresalePickupManageController.java:130 |
| `/activity/presale/pickup/manage/getPickupLowLimit` | backend, admin-v1 | GET, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresalePickupManageController.java:113 |
| `/activity/presale/pickup/manage/itemView/getPage` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresalePickupManageController.java:148 |
| `/activity/presale/pickup/manage/itemView/getPageGather` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresalePickupManageController.java:156 |
| `/activity/presale/pickup/manage/itemView/getPresaleSkcActivityPage` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresalePickupManageController.java:164 |
| `/activity/presale/pickup/manage/itemView/getPresaleSkuDeliveryDatePage` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresalePickupManageController.java:172 |
| `/activity/presale/pickup/manage/priority/listByAll` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresalePickupManageController.java:88 |
| `/activity/presale/pickup/manage/priority/listByPage` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresalePickupManageController.java:96 |
| `/activity/presale/pickup/manage/priority/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresalePickupManageController.java:104 |
| `/activity/presale/pickup/manage/savePickupConfirmTime` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresalePickupManageController.java:138 |
| `/activity/presale/pickup/manage/savePickupLowLimit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresalePickupManageController.java:121 |
| `/activity/presaleOrder/adjust/check/del/skc/pickupOrder` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderAdjustController.java:221 |
| `/activity/presaleOrder/adjust/del/skc/pickupOrder` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleOrderAdjustController.java:159 |
| `/activity/supplyPresale/pickup/manage/activityStatus/update` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresalePickupManageController.java:192 |
| `/activity/supplyPresale/pickup/manage/activityView/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresalePickupManageController.java:181 |
| `/activity/supplyPresale/pickup/manage/activityView/pageGather` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresalePickupManageController.java:201 |
| `/activity/supplyPresale/pickup/manage/companyView/dealerPage` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresalePickupManageController.java:239 |
| `/activity/supplyPresale/pickup/manage/companyView/page` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresalePickupManageController.java:212 |
| `/activity/supplyPresale/pickup/manage/companyView/page/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresalePickupManageController.java:221 |
| `/activity/supplyPresale/pickup/manage/companyView/pageGather` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresalePickupManageController.java:230 |
| `/activity/supplyPresale/pickup/manage/companyView/presaleOrder/page` | backend, admin-v1 | GET, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresalePickupManageController.java:253 |
| `/activity/supplyPresale/pickup/manage/generateBillOfLading/confirm` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresalePickupManageController.java:312 |
| `/activity/supplyPresale/pickup/manage/generateBillOfLading/confirmAllocationResult` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresalePickupManageController.java:288 |
| `/activity/supplyPresale/pickup/manage/generateBillOfLading/confirmAllocationResultShow` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresalePickupManageController.java:304 |
| `/activity/supplyPresale/pickup/manage/generateBillOfLading/getCompanyAllocationResult/getDetail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresalePickupManageController.java:296 |
| `/activity/supplyPresale/pickup/manage/generateBillOfLading/getCompanyPage` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresalePickupManageController.java:271 |
| `/activity/supplyPresale/pickup/manage/generateBillOfLading/getExecuteStatus` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresalePickupManageController.java:321 |
| `/activity/supplyPresale/pickup/manage/generateBillOfLading/getPage` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresalePickupManageController.java:262 |
| `/activity/supplyPresale/pickup/manage/generateBillOfLading/getPresaleOrderPage` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresalePickupManageController.java:280 |
| `/activity/supplyPresale/pickup/manage/getPickupConfirmTime` | backend, admin-v1 | GET, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresalePickupManageController.java:164 |
| `/activity/supplyPresale/pickup/manage/getPickupLowLimit` | backend, admin-v1 | GET, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresalePickupManageController.java:147 |
| `/activity/supplyPresale/pickup/manage/itemView/getPage` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresalePickupManageController.java:90 |
| `/activity/supplyPresale/pickup/manage/itemView/getPageGather` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresalePickupManageController.java:98 |
| `/activity/supplyPresale/pickup/manage/itemView/getPresaleSkcActivityPage` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresalePickupManageController.java:106 |
| `/activity/supplyPresale/pickup/manage/itemView/getPresaleSkuDeliveryDatePage` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresalePickupManageController.java:114 |
| `/activity/supplyPresale/pickup/manage/priority/listByAll` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresalePickupManageController.java:122 |
| `/activity/supplyPresale/pickup/manage/priority/listByPage` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresalePickupManageController.java:130 |
| `/activity/supplyPresale/pickup/manage/priority/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresalePickupManageController.java:138 |
| `/activity/supplyPresale/pickup/manage/savePickupConfirmTime` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresalePickupManageController.java:172 |
| `/activity/supplyPresale/pickup/manage/savePickupLowLimit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresalePickupManageController.java:155 |
| `/b2b/db2border/updatePickupOrderByActualDelivery` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/Db2borderController.java:55 |
| `/b2b/newStoreOrder/batch/update/canBePickup` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:336 |
| `/b2b/newStoreOrder/detail/pickup/check` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:292 |
| `/b2b/newStoreOrder/mini/checkPickupGoods` | backend, miniapp | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/mini/NewStoreOrderMiniController.java:70 |
| `/b2b/newStoreOrder/stat/batch/update/canBePickup/count` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:360 |
| `/b2b/newStoreOrder/updateOrder/productLinePickupSwitch` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:426 |
| `/b2b/newStoreOrder/updateOrder/productLinePickupSwitch/orderCount` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:418 |
| `/file/b2b/newStoreOrder/update/canBePickup/fail/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileNewStoreOrderController.java:114 |
| `/file/pickup/activityView/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/pickup/controller/FilePresaleOrderPickupController.java:68 |
| `/file/pickup/addOrder/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/pickup/controller/FilePresaleOrderPickupController.java:132 |
| `/file/pickup/addOrder/itemExport` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/pickup/controller/FilePresaleOrderPickupController.java:146 |
| `/file/pickup/addPickupOrder/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/pickup/controller/FilePresaleOrderPickupController.java:159 |
| `/file/pickup/companyView/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/pickup/controller/PresalePickupActivityCompanyViewFileController.java:29 |
| `/file/pickup/companyView/presaleOrderList/export` | backend, admin-v1 | GET, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/pickup/controller/PresalePickupActivityCompanyViewFileController.java:45 |
| `/file/pickup/generateBillOfLading/companyView/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/pickup/controller/PresalePickupGenerateBillOfLadingFileController.java:38 |
| `/file/pickup/generateBillOfLading/companyView/exportAllDetail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/pickup/controller/PresalePickupGenerateBillOfLadingFileController.java:46 |
| `/file/pickup/generateBillOfLading/companyView/exportDetail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/pickup/controller/PresalePickupGenerateBillOfLadingFileController.java:54 |
| `/file/pickup/generateBillOfLading/itemView/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/pickup/controller/PresalePickupGenerateBillOfLadingFileController.java:30 |
| `/file/pickup/generatePickupOrder/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/pickup/controller/FilePresaleOrderPickupController.java:170 |
| `/file/pickup/itemView/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/pickup/controller/PresalePickupActivityItemViewFileController.java:28 |
| `/file/pickup/orderExport` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/pickup/controller/FilePresaleOrderPickupController.java:52 |
| `/file/pickup/priority/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/pickup/controller/FilePresaleOrderPickupController.java:78 |
| `/file/pickup/skuConfig/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/pickup/controller/FilePresaleOrderPickupController.java:121 |
| `/file/pickup/skuConfig/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/pickup/controller/FilePresaleOrderPickupController.java:108 |
| `/file/pickup/skuReplacement/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/pickup/controller/FilePresaleOrderPickupController.java:94 |
| `/file/presale/pickup/manage/activityView/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FilePresalePickupManageController.java:50 |
| `/file/presale/pickup/manage/companyView/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FilePresalePickupManageController.java:73 |
| `/file/presale/pickup/manage/generateBillOfLading/companyView/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FilePresalePickupManageController.java:105 |
| `/file/presale/pickup/manage/generateBillOfLading/companyView/exportAllDetail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FilePresalePickupManageController.java:114 |
| `/file/presale/pickup/manage/generateBillOfLading/companyView/exportDetail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FilePresalePickupManageController.java:123 |
| `/file/presale/pickup/manage/generateBillOfLading/itemView/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FilePresalePickupManageController.java:96 |
| `/file/presale/pickup/manage/itemView/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FilePresalePickupManageController.java:61 |
| `/file/presale/pickup/manage/presaleOrder/export` | backend, admin-v1 | GET, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FilePresalePickupManageController.java:88 |
| `/file/presale/pickup/split/detail/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/pickup/controller/FilePresalePickupOrderSplitController.java:34 |
| `/file/presale/pickup/split/merge/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/pickup/controller/FilePresalePickupOrderSplitController.java:42 |
| `/file/presale/pickup/split/parentOrder/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/pickup/controller/FilePresalePickupOrderSplitController.java:67 |
| `/file/presale/pickup/split/result/detail/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/pickup/controller/FilePresalePickupOrderSplitController.java:58 |
| `/file/presale/pickup/split/result/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/pickup/controller/FilePresalePickupOrderSplitController.java:50 |
| `/file/presale/pickup/split/subOrder/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/pickup/controller/FilePresalePickupOrderSplitController.java:77 |
| `/file/supply/presale/selectPickupOrdDetailByPreOrdId/export` | backend, admin-v1 | GET, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FileSupplyPresaleOrderController.java:45 |
| `/file/supplyPresale/pickup/manage/activityView/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FileSupplyPickupManageController.java:49 |
| `/file/supplyPresale/pickup/manage/companyView/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FileSupplyPickupManageController.java:72 |
| `/file/supplyPresale/pickup/manage/generateBillOfLading/companyView/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FileSupplyPickupManageController.java:105 |
| `/file/supplyPresale/pickup/manage/generateBillOfLading/companyView/exportAllDetail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FileSupplyPickupManageController.java:114 |
| `/file/supplyPresale/pickup/manage/generateBillOfLading/companyView/exportDetail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FileSupplyPickupManageController.java:123 |
| `/file/supplyPresale/pickup/manage/generateBillOfLading/itemView/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FileSupplyPickupManageController.java:96 |
| `/file/supplyPresale/pickup/manage/itemView/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FileSupplyPickupManageController.java:60 |
| `/file/supplyPresale/pickup/manage/presaleOrder/export` | backend, admin-v1 | GET, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/FileSupplyPickupManageController.java:87 |
| `/product/aftersale/pickup` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/aftersale/AfterSaleController.java:144 |

### 购物车 (cart)

| 归一化路径 | 仓库 | 方法 | 出现次数 | 覆盖 | 首个证据 |
| --- | --- | --- | --- | --- | --- |
| `/activity/liveChannelsRel/live/activity/page` | backend, admin-v2 | POST | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsRelController.java:45 |
| `/activity/liveChannelsSkcs/getMoreSkcAddCartInfo` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsSkcsController.java:143 |
| `/activity/liveChannelsSkcs/getSkcAddCartInfo` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsSkcsController.java:101 |
| `/activity/liveShopCart/batchRecountShopCartById` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartController.java:226 |
| `/activity/liveShopCart/checkCompanySubmitOrderQty` | backend, admin-v2 | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartController.java:282 |
| `/activity/liveShopCart/companyCart/company/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartController.java:239 |
| `/activity/liveShopCart/current` | backend, admin-v2 | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartController.java:216 |
| `/activity/liveShopCart/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartController.java:72 |
| `/activity/liveShopCart/live/activity/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartController.java:186 |
| `/activity/liveShopCart/live/cart/sku/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartController.java:152 |
| `/activity/liveShopCart/live/channel/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartController.java:195 |
| `/activity/liveShopCart/live/detail/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartController.java:128 |
| `/activity/liveShopCart/live/detail/page/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartController.java:136 |
| `/activity/liveShopCart/live/gather` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartController.java:112 |
| `/activity/liveShopCart/live/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartController.java:80 |
| `/activity/liveShopCart/live/page/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartController.java:88 |
| `/activity/liveShopCart/liveAll/channel/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartController.java:204 |
| `/activity/liveShopCart/liveAll/detail/page/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartController.java:144 |
| `/activity/liveShopCart/liveAll/gather` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartController.java:120 |
| `/activity/liveShopCart/liveAll/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartController.java:96 |
| `/activity/liveShopCart/liveAll/page/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartController.java:104 |
| `/activity/liveShopCart/orgCart/org/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartController.java:248 |
| `/activity/liveShopCart/orgCart/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartController.java:264 |
| `/activity/liveShopCart/orgCart/page/gather` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartController.java:256 |
| `/activity/liveShopCart/orgCart/skcDetail` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartController.java:272 |
| `/activity/liveShopCart/query/live/orgCart/skc/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartController.java:178 |
| `/activity/liveShopCart/query/live/orgCart/sku/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartController.java:170 |
| `/activity/liveShopCartRel/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartRelController.java:31 |
| `/activity/liveShopCartSkcs/batch/query/cart/skc` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartSkcsController.java:60 |
| `/activity/liveShopCartSkcs/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartSkcsController.java:43 |
| `/activity/liveShopCartSkcs/query/cart/skc` | backend, admin-v2 | POST | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartSkcsController.java:51 |
| `/activity/liveShopCartSkcs/query/cart/skc/auth/check` | backend, admin-v2 | POST | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartSkcsController.java:69 |
| `/activity/liveShopCartSkus/batchAdd` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartSkusController.java:81 |
| `/activity/liveShopCartSkus/batchEdit` | backend, admin-v2 | POST | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartSkusController.java:99 |
| `/activity/liveShopCartSkus/batchEditOrAdd` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartSkusController.java:108 |
| `/activity/liveShopCartSkus/delete/cart/sku` | backend, admin-v2 | POST | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartSkusController.java:62 |
| `/activity/liveShopCartSkus/delete/live/cart` | backend, admin-v2 | POST | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartSkusController.java:71 |
| `/activity/liveShopCartSkus/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartSkusController.java:54 |
| `/activity/liveShopCartSkus/getShopCartSkuListExport` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartSkusController.java:91 |
| `/activity/liveShopCartSpus/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveShopCartSpusController.java:31 |
| `/activity/presaleShopCart/checkCompanySubmitOrderQty` | backend, admin-v2 | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleShopCartController.java:80 |
| `/activity/presaleShopCart/companyCart/company/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleShopCartController.java:60 |
| `/activity/presaleShopCart/countInfo` | backend, admin-v2 | GET, POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleShopCartController.java:51 |
| `/activity/presaleShopCart/getUser/sysCompanyInfoPage` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleShopCartController.java:114 |
| `/activity/presaleShopCart/orgCart/org/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleShopCartController.java:69 |
| `/activity/presaleShopCart/orgCart/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleShopCartController.java:98 |
| `/activity/presaleShopCart/orgCart/page/gather` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleShopCartController.java:90 |
| `/activity/presaleShopCart/orgCart/skcDetail` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleShopCartController.java:106 |
| `/activity/presaleShopCart/query/cart/sku/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleShopCartController.java:122 |
| `/activity/presaleShopCart/query/orgCart/sku/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleShopCartController.java:130 |
| `/activity/presaleShopCartSkcs/batch/query/cart/skc` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleShopCartSkcsController.java:54 |
| `/activity/presaleShopCartSkcs/batch/query/cart/skc/byOrg` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleShopCartSkcsController.java:62 |
| `/activity/presaleShopCartSkcs/query/cart/skc` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleShopCartSkcsController.java:37 |
| `/activity/presaleShopCartSkcs/query/cart/skc/auth/check` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleShopCartSkcsController.java:45 |
| `/activity/presaleShopCartSkus/batchAdd` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleShopCartSkusController.java:38 |
| `/activity/presaleShopCartSkus/batchEdit` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleShopCartSkusController.java:57 |
| `/activity/presaleShopCartSkus/batchEditOrAdd` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleShopCartSkusController.java:66 |
| `/activity/presaleShopCartSkus/delete/cart/sku` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresaleShopCartSkusController.java:48 |
| `/b2b/findCompanyList` | backend, admin-v1, admin-v2 | POST, POST(default) | 10 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/FundManagementController.java:118 |
| `/b2b/itemShopCart/companyCart/company/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ItemShopCartController.java:59 |
| `/b2b/itemShopCart/countInfo` | backend, admin-v2 | GET, POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ItemShopCartController.java:50 |
| `/b2b/itemShopCart/getUser/sysCompanyInfoPage` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ItemShopCartController.java:100 |
| `/b2b/itemShopCart/orgCart/org/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ItemShopCartController.java:68 |
| `/b2b/itemShopCart/orgCart/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ItemShopCartController.java:84 |
| `/b2b/itemShopCart/orgCart/page/gather` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ItemShopCartController.java:76 |
| `/b2b/itemShopCart/orgCart/skcDetail` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ItemShopCartController.java:92 |
| `/b2b/itemShopCart/query/cart/sku/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ItemShopCartController.java:108 |
| `/b2b/itemShopCart/query/orgCart/sku/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ItemShopCartController.java:116 |
| `/b2b/itemShopCartSkcs/batch/query/cart/skc` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ItemShopCartSkcsController.java:44 |
| `/b2b/itemShopCartSkcs/batch/query/cart/skc/byOrg` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ItemShopCartSkcsController.java:52 |
| `/b2b/itemShopCartSkcs/query/cart/skc` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ItemShopCartSkcsController.java:36 |
| `/b2b/itemShopCartSkus/batchAdd` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ItemShopCartSkusController.java:37 |
| `/b2b/itemShopCartSkus/batchEdit` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ItemShopCartSkusController.java:55 |
| `/b2b/itemShopCartSkus/batchEditOrAdd` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ItemShopCartSkusController.java:64 |
| `/b2b/itemShopCartSkus/delete/cart/sku` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ItemShopCartSkusController.java:46 |
| `/b2b/mall/shopCart/findItemPromotionPlan` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/display/MallShopCartController.java:101 |
| `/b2b/mall/shopCart/findItemPromotionPlanGift` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/display/MallShopCartController.java:110 |
| `/b2b/mall/shopCart/findItemPromotionPlanGift/list` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/display/MallShopCartController.java:118 |
| `/b2b/mall/shopCart/getShopCartDetail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/display/MallShopCartController.java:64 |
| `/b2b/mall/shopCart/getShopCartDetailOfSelect` | backend, miniapp | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/display/MallShopCartController.java:80 |
| `/b2b/rpc/shopping/cart/getShopCartByUser` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartRpcController.java:48 |
| `/b2b/rpc/shopping/cart/getShopCartByUserNew` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartRpcController.java:57 |
| `/b2b/rpc/shopping/cart/getShopCartItemQtyForList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartRpcController.java:29 |
| `/b2b/rpc/shopping/cart/getShopCartItemSpecQtyForList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartRpcController.java:39 |
| `/b2b/rpc/shopping/cart/getShopCartSet` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartRpcController.java:69 |
| `/b2b/ShopCart/addSpPromotion` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bShopCartController.java:169 |
| `/b2b/ShopCart/BatchAdd` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bShopCartController.java:37 |
| `/b2b/ShopCart/Confirm` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bShopCartController.java:53 |
| `/b2b/shopCart/countInfo` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ShopCartController.java:201 |
| `/b2b/ShopCart/del/byScIds` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bShopCartController.java:296 |
| `/b2b/ShopCart/delShopCart` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bShopCartController.java:211 |
| `/b2b/ShopCart/Detail` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bShopCartController.java:87 |
| `/b2b/ShopCart/emptyCart` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bShopCartController.java:239 |
| `/b2b/shopCart/getDeliveryDates` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ShopCartController.java:107 |
| `/b2b/ShopCart/getItemBomForOGive` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bShopCartController.java:183 |
| `/b2b/ShopCart/getScCount` | backend, miniapp | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bShopCartController.java:266 |
| `/b2b/shopCart/getShareShopCartPage` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ShopCartController.java:251 |
| `/b2b/shopCart/getShopCartDetail` | miniapp, admin-v1 | POST(default) | 2 | 多个前端共享但未抽到后端 | semir-reabam-admin/src/js/api.js:2729 |
| `/b2b/shopCart/getShopCartDetails` | backend, admin-v1, admin-v2 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ShopCartController.java:76 |
| `/b2b/ShopCart/getShopCartPlans` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bShopCartController.java:253 |
| `/b2b/ShopCart/getUnits` | backend, miniapp, admin-v1 | POST, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bShopCartController.java:225 |
| `/b2b/shopCart/item/clean/selected` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ShopCartController.java:217 |
| `/b2b/shopCart/item/cleanNotInApplyItems` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ShopCartController.java:192 |
| `/b2b/shopCart/item/getEffectiveCount` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ShopCartController.java:243 |
| `/b2b/shopCart/item/inStockList` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ShopCartController.java:163 |
| `/b2b/shopCart/item/notInApplyIds` | backend, miniapp | GET, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ShopCartController.java:182 |
| `/b2b/shopCart/item/notInApplyList` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ShopCartController.java:172 |
| `/b2b/shopCart/item/planList` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ShopCartController.java:145 |
| `/b2b/shopCart/item/selectedList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ShopCartController.java:209 |
| `/b2b/shopCart/item/selectedListOfNormalSku` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ShopCartController.java:235 |
| `/b2b/shopCart/item/stockOutList` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ShopCartController.java:154 |
| `/b2b/shopCart/item/sync` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ShopCartController.java:226 |
| `/b2b/ShopCart/itemPromotionPlan` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bShopCartController.java:308 |
| `/b2b/ShopCart/NAddGift` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bShopCartController.java:156 |
| `/b2b/ShopCart/NGifts` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bShopCartController.java:139 |
| `/b2b/shopCart/removeShopCartItem` | backend, admin-v1, admin-v2 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ShopCartController.java:89 |
| `/b2b/ShopCart/Sel` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bShopCartController.java:286 |
| `/b2b/ShopCart/SelAll` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bShopCartController.java:276 |
| `/b2b/shopCart/shopCart/list` | backend, admin-v1, admin-v2 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ShopCartController.java:97 |
| `/b2b/ShopCart/UpdatePlan` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bShopCartController.java:122 |
| `/b2b/ShopCart/updateScRemark` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bShopCartController.java:197 |
| `/b2b/shopping/cart/addressSelection` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:297 |
| `/b2b/shopping/cart/addShopCartPromotionPlan` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:590 |
| `/b2b/shopping/cart/autoUsingCoupon` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:82 |
| `/b2b/shopping/cart/changeCompany` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:609 |
| `/b2b/shopping/cart/changeExpressFee` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:599 |
| `/b2b/shopping/cart/cleanWhs` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:428 |
| `/b2b/shopping/cart/clearCompanyUpShopCart` | backend, admin-v1, admin-v2 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:165 |
| `/b2b/shopping/cart/clearShopCartPromotionPlan` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:578 |
| `/b2b/shopping/cart/clearUpShopCart` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:157 |
| `/b2b/shopping/cart/clearUpShopCartProduct` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:174 |
| `/b2b/shopping/cart/coupon/list` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:355 |
| `/b2b/shopping/cart/custom/account/remove` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:463 |
| `/b2b/shopping/cart/custom/account/update` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:453 |
| `/b2b/shopping/cart/findOrderPromotionPlan` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:283 |
| `/b2b/shopping/cart/getShopCartQuantity` | backend, miniapp | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:211 |
| `/b2b/shopping/cart/getShopCartResult` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:198 |
| `/b2b/shopping/cart/getShopCartResultWithCoupon` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:133 |
| `/b2b/shopping/cart/getShopCartSimpleInfo` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:323 |
| `/b2b/shopping/cart/gift/bom/action/list` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:364 |
| `/b2b/shopping/cart/giftResult` | miniapp | POST(default) | 1 | 仅单个前端证据 | semir-reabam-front/public/api.js:201 |
| `/b2b/shopping/cart/group/order/add/company/switch` | backend, admin-v1, admin-v2 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:545 |
| `/b2b/shopping/cart/invoiceHeaderSelection` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:310 |
| `/b2b/shopping/cart/item/addFixedPackageItem` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:83 |
| `/b2b/shopping/cart/item/additionalItemList` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:274 |
| `/b2b/shopping/cart/item/additionalItemSelection` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:265 |
| `/b2b/shopping/cart/item/addShopCartItem` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:65 |
| `/b2b/shopping/cart/item/addShopCartItems` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:74 |
| `/b2b/shopping/cart/item/b2bCompanyShopCartUserDetailList` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2921 |
| `/b2b/shopping/cart/item/batchAddToShopCart` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:175 |
| `/b2b/shopping/cart/item/batchRemoveShopCartItems` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:308 |
| `/b2b/shopping/cart/item/batchUpdateItemRemark` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:216 |
| `/b2b/shopping/cart/item/buyNow` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:104 |
| `/b2b/shopping/cart/item/changeExpressFee` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:495 |
| `/b2b/shopping/cart/item/combination/add` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:414 |
| `/b2b/shopping/cart/item/combination/product` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:426 |
| `/b2b/shopping/cart/item/combination/product/byPlanId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:439 |
| `/b2b/shopping/cart/item/combinationPackage/bom` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:378 |
| `/b2b/shopping/cart/item/combinationPackage/bom/product` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:390 |
| `/b2b/shopping/cart/item/combinationPackage/selection` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:366 |
| `/b2b/shopping/cart/item/commonUpdateItemQuantity` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:141 |
| `/b2b/shopping/cart/item/commonUpdateItemQuantityAsync` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:152 |
| `/b2b/shopping/cart/item/commonUpdateItemQuantitySync` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:166 |
| `/b2b/shopping/cart/item/findProductPromotionPlan` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:285 |
| `/b2b/shopping/cart/item/fixedPackage/product` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:354 |
| `/b2b/shopping/cart/item/fixedPackage/selection` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:342 |
| `/b2b/shopping/cart/item/gift/bom/action/list` | backend, miniapp | ANY, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:320 |
| `/b2b/shopping/cart/item/giftList` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:252 |
| `/b2b/shopping/cart/item/giftSelection` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:241 |
| `/b2b/shopping/cart/item/package/strippingPackage` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:402 |
| `/b2b/shopping/cart/item/plan/child/gift/action/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:331 |
| `/b2b/shopping/cart/item/removeShopCartItem` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:192 |
| `/b2b/shopping/cart/item/updateCartExpectedDate` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:477 |
| `/b2b/shopping/cart/item/updateCartItemPrice` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:128 |
| `/b2b/shopping/cart/item/updateCartItemQuantity` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:116 |
| `/b2b/shopping/cart/item/updateItemAttr` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:452 |
| `/b2b/shopping/cart/item/updateItemAttrs` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:465 |
| `/b2b/shopping/cart/item/updateItemLogistics` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:486 |
| `/b2b/shopping/cart/item/updateItemRemark` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:204 |
| `/b2b/shopping/cart/item/updateItemSelection` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:296 |
| `/b2b/shopping/cart/item/updatePromotionPlan` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:228 |
| `/b2b/shopping/cart/item/updateShopCartItems` | backend, miniapp, admin-v1 | POST, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShopingCartItemController.java:92 |
| `/b2b/shopping/cart/order/getWarning` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:343 |
| `/b2b/shopping/cart/orderType/action/list` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:503 |
| `/b2b/shopping/cart/orderType/action/list/v2` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:513 |
| `/b2b/shopping/cart/orderType/action/set` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:522 |
| `/b2b/shopping/cart/pay/later/custom/account/update` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:476 |
| `/b2b/shopping/cart/pay/later/order/update` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:490 |
| `/b2b/shopping/cart/plan/child/gift/action/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:377 |
| `/b2b/shopping/cart/plus/urgent/expressfee/set` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:534 |
| `/b2b/shopping/cart/product/getWarning` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:333 |
| `/b2b/shopping/cart/selectCouponByUser` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:108 |
| `/b2b/shopping/cart/selectedItem` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:186 |
| `/b2b/shopping/cart/selectWhs` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:418 |
| `/b2b/shopping/cart/shopCart/giftPools/selection` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:555 |
| `/b2b/shopping/cart/shopCartAdditionalItemList` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:271 |
| `/b2b/shopping/cart/shopCartAdditionalItemSelection` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:261 |
| `/b2b/shopping/cart/shopCartGiftList` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:248 |
| `/b2b/shopping/cart/shopCartGiftSelection` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:235 |
| `/b2b/shopping/cart/unSelectCoupon` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:121 |
| `/b2b/shopping/cart/updateAttr` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:441 |
| `/b2b/shopping/cart/updateCustomDiscount` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:565 |
| `/b2b/shopping/cart/updateDeliveryType` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:406 |
| `/b2b/shopping/cart/updateRemark` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:147 |
| `/b2b/shopping/cart/updateShopCartDeductAmount` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:391 |
| `/b2b/shopping/cart/updateShopCartPromotionPlan` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:222 |
| `/b2b/shopping/cart/useCouponLimit` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/shopping/ShoppingCartController.java:94 |
| `/config/decoration/b2bmall/cart/confirm/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/decoration/DecorationB2BMallB2BCartConfirmController.java:28 |
| `/config/decoration/b2bmall/cart/confirm/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/decoration/DecorationB2BMallB2BCartConfirmController.java:40 |
| `/config/shoppingCartDecorateb2bMail/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/shoppingcartdecorate/controller/ShoppingCartDecorateB2bMailController.java:32 |
| `/config/shoppingCartDecorateb2bMail/info` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/shoppingcartdecorate/controller/ShoppingCartDecorateB2bMailController.java:41 |
| `/config/shoppingCartDecorateMail/edit` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1823 |
| `/config/shoppingCartDecorateMail/info` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1821 |
| `/config/shoppingCartDecorateMealMail/edit` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1827 |
| `/config/shoppingCartDecorateMealMail/info` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1825 |
| `/file/b2bOrder/export/compShopCartItem` | backend, admin-v1, admin-v2 | POST, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/order/controller/B2bOrderController.java:126 |
| `/file/b2bOrder/export/shopCartItem` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/order/controller/B2bOrderController.java:110 |
| `/file/itemShopCart/export/cart/sku/url` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileItemShopCartController.java:35 |
| `/file/itemShopCart/export/orgCart` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileItemShopCartController.java:59 |
| `/file/itemShopCart/export/orgCart/updateExport` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileItemShopCartController.java:43 |
| `/file/itemShopCart/import/orgCart/skc` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileItemShopCartController.java:51 |
| `/file/liveShopCart/export/cart/sku` | backend, admin-v2 | POST | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileLiveShopCartController.java:64 |
| `/file/liveShopCart/export/cart/sku/url` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileLiveShopCartController.java:73 |
| `/file/liveShopCart/export/orgCart` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileLiveShopCartController.java:81 |
| `/file/liveShopCart/export/orgCart/updateExport` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileLiveShopCartController.java:89 |
| `/file/liveShopCart/import/orgCart/skc` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileLiveShopCartController.java:97 |
| `/file/liveShopCart/item/export` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileLiveShopCartController.java:38 |
| `/file/liveShopCart/live/export` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileLiveShopCartController.java:46 |
| `/file/liveShopCart/liveAll/export` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileLiveShopCartController.java:55 |
| `/file/presaleShopCart/export/cart/sku/url` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FilePresaleShopCartController.java:35 |
| `/file/presaleShopCart/export/orgCart` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FilePresaleShopCartController.java:59 |
| `/file/presaleShopCart/export/orgCart/updateExport` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FilePresaleShopCartController.java:43 |
| `/file/presaleShopCart/import/orgCart/skc` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FilePresaleShopCartController.java:51 |
| `/hr/distributor/downBox/page` | backend, admin-v1, admin-v2 | POST, POST(default) | 7 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorController.java:87 |
| `/hr/iamUser/userPage` | backend, admin-v1, admin-v2 | POST, POST(default) | 5 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamUserController.java:118 |
| `/hr/staff/downBox/page` | backend, admin-v1, admin-v2 | POST, POST(default) | 9 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/StaffController.java:248 |

### 商品/SKC/SKU (product-skc-sku)

| 归一化路径 | 仓库 | 方法 | 出现次数 | 覆盖 | 首个证据 |
| --- | --- | --- | --- | --- | --- |
| `/activity/liveChannels/channel/pageSkc` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:299 |
| `/activity/liveChannels/channel/skcSerialNumber` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:307 |
| `/activity/liveChannelsSkcs/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsSkcsController.java:41 |
| `/activity/liveChannelsSkcs/explain/get` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsSkcsController.java:76 |
| `/activity/liveChannelsSkcs/explain/product/get` | backend, admin-v2 | POST | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsSkcsController.java:127 |
| `/activity/liveChannelsSkcs/explain/product/switch` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsSkcsController.java:118 |
| `/activity/liveChannelsSkcs/explain/switch` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsSkcsController.java:66 |
| `/activity/liveChannelsSkcs/getMoreSkcInfo` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsSkcsController.java:135 |
| `/activity/liveChannelsSkcs/getSkcInfo` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsSkcsController.java:93 |
| `/activity/liveChannelsSkcs/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsSkcsController.java:49 |
| `/activity/liveChannelsSkcs/show/switch` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsSkcsController.java:84 |
| `/activity/liveChannelsSkus/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsSkusController.java:36 |
| `/activity/orderRule/queryRuleBySkcCodes` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/orderRule/OrderRuleController.java:134 |
| `/activity/orderRule/queryRuleBySkcCodesAndModelIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/orderRule/OrderRuleController.java:144 |
| `/activity/orderRuleItemDetail/getGoodsSku/page` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/orderRule/OrderRuleItemDetailController.java:39 |
| `/app/Platform/ProductType/List` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/PlatformController.java:44 |
| `/app/Platform/ProductType/ParentList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/PlatformController.java:57 |
| `/app/Platform/ProductType/ParentListWithArea` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/PlatformController.java:70 |
| `/app/Platform/ProductType/SubList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/PlatformController.java:84 |
| `/app/productDecoration/find` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/productdecoration/controller/productDecorationController.java:34 |
| `/app/System/AppCodes` | backend | POST | 2 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/AppCodeController.java:47 |
| `/appc/product/activitylabel/itemids/get` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/activitylabel/AppcActivityLabelController.java:27 |
| `/b2b/billmaterials/item/replace/comp/check` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/billmaterials/controller/BillmaterialsItemReplaceController.java:74 |
| `/b2b/billmaterials/item/replace/comp/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/billmaterials/controller/BillmaterialsItemReplaceController.java:65 |
| `/b2b/billmaterials/item/replace/edit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/billmaterials/controller/BillmaterialsItemReplaceController.java:37 |
| `/b2b/billmaterials/item/replace/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/billmaterials/controller/BillmaterialsItemReplaceController.java:56 |
| `/b2b/billmaterials/item/replace/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/billmaterials/controller/BillmaterialsItemReplaceController.java:47 |
| `/b2b/bookorder/mitem` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2bBookOrder/B2bBookOrderController.java:46 |
| `/b2b/comp/coupon/product/list` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/coupon/controller/SysCompanyCouponController.java:88 |
| `/b2b/coupon/items` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/coupon/controller/B2bMCouponController.java:100 |
| `/b2b/difference/item/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/differenceOrder/controller/B2BDifferenceOrderController.java:53 |
| `/b2b/exchange/detail/items` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bExchangeController.java:92 |
| `/b2b/goodsIn/order/add/item/check` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/GoodsInOrderController.java:118 |
| `/b2b/item/leadTime/getSet` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/set/leadtime/controller/B2BItemLeadTimeSetController.java:41 |
| `/b2b/item/leadTime/import` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/set/leadtime/controller/B2BItemLeadTimeSetController.java:30 |
| `/b2b/item/leadTime/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/set/leadtime/controller/B2BItemLeadTimeSetController.java:51 |
| `/b2b/item/leadTime/rpc/getSet` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/set/leadtime/controller/B2BItemLeadTimeSetController.java:82 |
| `/b2b/item/leadTime/rpc/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/set/leadtime/controller/B2BItemLeadTimeSetController.java:72 |
| `/b2b/item/leadTime/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/set/leadtime/controller/B2BItemLeadTimeSetController.java:61 |
| `/b2b/item/related/b2bmall/search` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2BItemRelatedController.java:58 |
| `/b2b/item/related/copy` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2BItemRelatedController.java:67 |
| `/b2b/item/related/saveOrUpdate` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2BItemRelatedController.java:37 |
| `/b2b/item/related/search` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2BItemRelatedController.java:48 |
| `/b2b/itemReplenishment/home/skc/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ItemReplenishmentController.java:79 |
| `/b2b/itemReplenishment/item/detail` | backend, admin-v2 | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ItemReplenishmentController.java:71 |
| `/b2b/itemReplenishment/skc/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ItemReplenishmentController.java:36 |
| `/b2b/logistics/config/action/itemList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/delivery/controller/B2bLogisticsController.java:134 |
| `/b2b/logistics/config/action/itemLogisticsList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/delivery/controller/B2bLogisticsController.java:100 |
| `/b2b/logistics/config/action/rpc/itemLogisticsImport` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/delivery/controller/B2bLogisticsController.java:160 |
| `/b2b/mitem/drag` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/MitemController.java:109 |
| `/b2b/mitem/goods` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/MitemController.java:34 |
| `/b2b/mitem/set` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/MitemController.java:69 |
| `/b2b/order/item/list` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/item/controller/OrderItemController.java:24 |
| `/b2b/order/item/logisticsList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:950 |
| `/b2b/order/limit/product/copy/all` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/limit/set/controller/B2BOrderLimitProductController.java:83 |
| `/b2b/order/limit/product/copy/one` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/limit/set/controller/B2BOrderLimitProductController.java:68 |
| `/b2b/order/limit/product/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/limit/set/controller/B2BOrderLimitProductController.java:44 |
| `/b2b/order/limit/product/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/limit/set/controller/B2BOrderLimitProductController.java:53 |
| `/b2b/order/limit/product/rpc/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/limit/set/controller/B2BOrderLimitProductRpcController.java:34 |
| `/b2b/order/limit/product/switch` | backend, admin-v1 | ANY, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/limit/set/controller/B2BOrderLimitProductController.java:35 |
| `/b2b/order/new/detail/item/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderNewController.java:59 |
| `/b2b/order/new/itemDetail/confirmOrder` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderNewController.java:177 |
| `/b2b/order/new/itemDetail/confirmOrder/preCheck` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderNewController.java:185 |
| `/b2b/order/new/itemDetail/confirmOrder/submit` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderNewController.java:193 |
| `/b2b/order/orderDetail/items` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:1032 |
| `/b2b/order/surplus/itemAmount` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:908 |
| `/b2b/order/update/itemExpectedDate` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:937 |
| `/b2b/order/update/itemRemark` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:959 |
| `/b2b/product/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/ProductController.java:49 |
| `/b2b/product/promotion/item/search` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/ProductController.java:110 |
| `/b2b/product/search` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/ProductController.java:34 |
| `/b2b/product/types` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/ProductController.java:64 |
| `/b2b/quote/itemdetail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bQuoteController.java:123 |
| `/b2b/rebateRate/config/calculateBySkcCodeAndCompanyId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/RebateRateConfigController.java:73 |
| `/b2b/rebateRate/config/calculateBySkcCodeAndOrgCode` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/RebateRateConfigController.java:82 |
| `/b2b/rebateTask/show` | backend, miniapp | ANY, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/rebate/controller/RebateTaskController.java:20 |
| `/b2b/receive/difference/order/item/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/difference/receive/order/controller/B2bReceiveDifferenceOrderController.java:60 |
| `/b2b/refund/item/bom/actually/refunded/money/init` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/refund/amount/controller/B2BRefundBomItemAmountController.java:22 |
| `/b2b/refund/th/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/refund/pay/B2BThPayRefundTaskController.java:56 |
| `/b2b/refund/th/refresh` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/refund/pay/B2BThPayRefundTaskController.java:37 |
| `/b2b/reserve/addProduct` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/ReserveProductController.java:74 |
| `/b2b/reserve/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/ReserveProductController.java:119 |
| `/b2b/reserve/excelAddProduct` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/ReserveProductController.java:135 |
| `/b2b/reserve/listProduct` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/ReserveProductController.java:47 |
| `/b2b/reserve/listReserveProduct` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/ReserveProductController.java:60 |
| `/b2b/reserve/openReserve/{itemId}` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/ReserveProductController.java:154 |
| `/b2b/reserve/product/action/depositInfo` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/ReserveProductController.java:170 |
| `/b2b/reserve/putOnOffShelve` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/ReserveProductController.java:104 |
| `/b2b/reserve/removeProduct` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/ReserveProductController.java:90 |
| `/b2b/sales/order/limit/product/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderController.java:426 |
| `/b2b/sales/order/product/ca/products` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderProductController.java:45 |
| `/b2b/sales/order/product/coupon/use` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderProductController.java:34 |
| `/b2b/sales/order/product/proxy/comps` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderProductProxyController.java:39 |
| `/b2b/sales/order/product/proxy/info` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderProductProxyController.java:31 |
| `/b2b/sales/order/product/proxy/info/specdIds` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderProductProxyController.java:55 |
| `/b2b/sales/order/product/proxy/info/v2` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderProductProxyController.java:47 |
| `/b2b/sales/order/product/update` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderController.java:262 |
| `/b2b/spikePrice/getSpikePlanMap` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/product/SpikePriceController.java:27 |
| `/b2b/spikePrice/getSpikePriceMap/item` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/product/SpikePriceController.java:38 |
| `/b2b/spikePrice/getSpikePriceMap/more/item` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/product/SpikePriceController.java:43 |
| `/b2b/spikePrice/getSpikePriceMap/more/spec` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/product/SpikePriceController.java:59 |
| `/b2b/spikePrice/getSpikePriceMap/spec` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/product/SpikePriceController.java:54 |
| `/b2b/supplier/product/copy` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/supplier/product/controller/ProductOfSupplierController.java:77 |
| `/b2b/supplier/product/delete` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/supplier/product/controller/ProductOfSupplierController.java:65 |
| `/b2b/supplier/product/find/un_exist_specid` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/supplier/product/controller/ProductOfSupplierController.java:124 |
| `/b2b/supplier/product/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/supplier/product/controller/ProductOfSupplierController.java:89 |
| `/b2b/supplier/product/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/supplier/product/controller/ProductOfSupplierController.java:40 |
| `/b2b/supplier/product/move` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/supplier/product/controller/ProductOfSupplierController.java:112 |
| `/b2b/supplier/product/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/supplier/product/controller/ProductOfSupplierController.java:53 |
| `/b2b/supplier/product/status/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/supplier/product/controller/StatusSetController.java:46 |
| `/b2b/supplier/product/status/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/supplier/product/controller/StatusSetController.java:33 |
| `/b2b/v1/order/split/item/action/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderSplitController.java:49 |
| `/b2b/v2/order/split/item/action/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderSplitController.java:63 |
| `/config/actionAward/spokesperson/items` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1245 |
| `/config/allocationSET/reasons/itemStatus/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:663 |
| `/config/b2b/freight/set/special/items` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/freight/set/B2BDfreightSetSpecialItemController.java:27 |
| `/config/b2b/funds/custom/account/products` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bFundsController.java:34 |
| `/config/b2b/itemMoq/{itemId}` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:645 |
| `/config/b2b/mItemIntegralSet/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1084 |
| `/config/b2b/mItemIntegralSet/remove` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1090 |
| `/config/b2b/moa/exclude/item/action/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:501 |
| `/config/b2b/moq/items` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:488 |
| `/config/b2bMall/mitem/itemCategory` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/mall/controller/B2bMallController.java:181 |
| `/config/barcodeSearchRule/itemSearchRuleDetailType/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/BarcodeSearchRuleController.java:110 |
| `/config/barcodeSearchRule/search` | backend | POST | 3 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/feign/ConfigFeignHystrixClient.java:47 |
| `/config/bondedWarehouseSet/delete` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/product/taxrate/mitemtaxrate/controller/BondedWarehouseSetController.java:62 |
| `/config/bondedWarehouseSet/info` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/product/taxrate/mitemtaxrate/controller/BondedWarehouseSetController.java:53 |
| `/config/bondedWarehouseSet/mwhs/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/product/taxrate/mitemtaxrate/controller/BondedWarehouseSetController.java:72 |
| `/config/bondedWarehouseSet/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/product/taxrate/mitemtaxrate/controller/BondedWarehouseSetController.java:44 |
| `/config/bondedWarehouseSet/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/product/taxrate/mitemtaxrate/controller/BondedWarehouseSetController.java:35 |
| `/config/codingRule/itemCode/getCode` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/codingrule/controller/CodingRuleItemCodeController.java:59 |
| `/config/codingRule/itemCode/info` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/codingrule/controller/CodingRuleItemCodeController.java:50 |
| `/config/codingRule/itemCode/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/codingrule/controller/CodingRuleItemCodeController.java:41 |
| `/config/costPriceList/getCostPrice` | backend | POST | 3 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/feign/ConfigFeignHystrixClient.java:59 |
| `/config/countMitem` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/ProductShelfController.java:88 |
| `/config/customize/business/itemList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/CustomizeBusinessController.java:46 |
| `/config/dealer/item/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/dealer/DealerController.java:81 |
| `/config/dealer/item/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/dealer/DealerController.java:67 |
| `/config/deliveryscope/itemAdd` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2088 |
| `/config/deliveryscope/itemget` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2089 |
| `/config/deliveryset/get` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/feign/ConfigFeignHystrixClient.java:137 |
| `/config/dTaskCenter/batch/editor` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/DTaskCenterController.java:65 |
| `/config/dTaskCenter/editor` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/DTaskCenterController.java:60 |
| `/config/dTaskCenter/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/DTaskCenterController.java:45 |
| `/config/dTaskCenter/reset` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/DTaskCenterController.java:80 |
| `/config/dTaskCenter/send` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/DTaskCenterController.java:155 |
| `/config/dTaskCenterAlert/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/DTaskCenterController.java:110 |
| `/config/dTaskCenterAlert/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/DTaskCenterController.java:125 |
| `/config/dTaskCenterAlert/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/DTaskCenterController.java:95 |
| `/config/item/default/supplier/copy` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/itemDefaultSupplier/ItemDefaultSupplierController.java:51 |
| `/config/item/default/supplier/getItemDefaultSupplierMap` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/itemDefaultSupplier/ItemDefaultSupplierController.java:128 |
| `/config/item/default/supplier/inherit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/itemDefaultSupplier/ItemDefaultSupplierController.java:62 |
| `/config/item/default/supplier/page` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/itemDefaultSupplier/ItemDefaultSupplierController.java:76 |
| `/config/item/default/supplier/record/page` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/itemDefaultSupplier/ItemDefaultSupplierController.java:118 |
| `/config/item/default/supplier/remove` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/itemDefaultSupplier/ItemDefaultSupplierController.java:107 |
| `/config/item/default/supplier/save` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/itemDefaultSupplier/ItemDefaultSupplierController.java:96 |
| `/config/item/service/copy` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:1020 |
| `/config/item/service/delete` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:978 |
| `/config/item/service/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:953 |
| `/config/item/service/detail/items` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:992 |
| `/config/item/service/detail/types` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:1007 |
| `/config/item/service/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:940 |
| `/config/item/service/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:966 |
| `/config/itemLabel/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:475 |
| `/config/itemLabel/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:462 |
| `/config/itemLabel/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:449 |
| `/config/itemLabel/move` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:885 |
| `/config/itemLabelGroup/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/product/taggroup/controller/MitemLabelGroupController.java:55 |
| `/config/itemLabelGroup/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/product/taggroup/controller/MitemLabelGroupController.java:69 |
| `/config/itemLabelGroup/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/product/taggroup/controller/MitemLabelGroupController.java:41 |
| `/config/itemLabelGroup/move` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/product/taggroup/controller/MitemLabelGroupController.java:84 |
| `/config/itemtype/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:252 |
| `/config/itemtype/del` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:239 |
| `/config/itemtype/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:226 |
| `/config/itemtype/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:213 |
| `/config/itemtype/op` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:265 |
| `/config/itemTypeTree/list` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:817 |
| `/config/mallModule/mitemType/get` | admin-v1 | POST(default) | 2 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1791 |
| `/config/mallModule/mitemType/preserve` | admin-v1 | POST(default) | 2 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1789 |
| `/config/member/gradeset/items` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1575 |
| `/config/mitembrand/page` | admin-v2 | POST | 1 | 仅单个前端证据 | semir-bmall-admin-v2/app/src/services/common.ts:55 |
| `/config/mitemCompTaxRate/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/product/taxrate/mitemcomptaxrate/controller/MitemCompTaxRateController.java:41 |
| `/config/mitemCompTaxRate/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/product/taxrate/mitemcomptaxrate/controller/MitemCompTaxRateController.java:32 |
| `/config/mitemCompTaxRate/set/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/product/taxrate/mitemcomptaxrate/controller/MitemCompTaxRateController.java:51 |
| `/config/mItemIntegralSet/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:552 |
| `/config/mItemIntegralSet/excelAdd` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:705 |
| `/config/mItemIntegralSet/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:537 |
| `/config/mItemIntegralSet/memberGrade` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1432 |
| `/config/mItemIntegralSet/remove` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:567 |
| `/config/mitemPriceTag/info` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/itemPriceTag/controller/MItemPriceTagController.java:69 |
| `/config/mitemPriceTag/itemPage` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/itemPriceTag/controller/MItemPriceTagController.java:80 |
| `/config/mitemPriceTag/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/itemPriceTag/controller/MItemPriceTagController.java:59 |
| `/config/mitemPriceTag/remove` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/itemPriceTag/controller/MItemPriceTagController.java:49 |
| `/config/mitemPriceTag/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/itemPriceTag/controller/MItemPriceTagController.java:38 |
| `/config/mitemPriceTag/searchSpecItemPrice` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/itemPriceTag/controller/MItemPriceTagController.java:96 |
| `/config/mitemSet/get` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/MitemDetailSetController.java:37 |
| `/config/mitemSet/save` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/MitemDetailSetController.java:52 |
| `/config/mitemSpecTypeData/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/product/specdata/controller/MitemSpecDataController.java:78 |
| `/config/mitemSpecTypeData/count` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/product/specdata/controller/MitemSpecDataController.java:128 |
| `/config/mitemSpecTypeData/delete` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/product/specdata/controller/MitemSpecDataController.java:111 |
| `/config/mitemSpecTypeData/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/product/specdata/controller/MitemSpecDataController.java:62 |
| `/config/mitemSpecTypeData/import` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/product/specdata/controller/MitemSpecDataController.java:186 |
| `/config/mitemSpecTypeData/import/check` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/product/specdata/controller/MitemSpecDataController.java:167 |
| `/config/mitemSpecTypeData/list` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/product/specdata/controller/MitemSpecDataController.java:47 |
| `/config/mitemSpecTypeData/modify` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/product/specdata/controller/MitemSpecDataController.java:95 |
| `/config/mitemTaxRate/delete` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/product/taxrate/mitemtaxrate/controller/MitemTaxRateController.java:61 |
| `/config/mitemTaxRate/info` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/product/taxrate/mitemtaxrate/controller/MitemTaxRateController.java:52 |
| `/config/mitemTaxRate/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/product/taxrate/mitemtaxrate/controller/MitemTaxRateController.java:43 |
| `/config/mitemTaxRate/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/product/taxrate/mitemtaxrate/controller/MitemTaxRateController.java:34 |
| `/config/mitemtype/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:200 |
| `/config/mitemTypeTaxRate/info` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/product/taxrate/mitemtaxrate/controller/MitemTypeTaxRateController.java:39 |
| `/config/mitemTypeTaxRate/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/product/taxrate/mitemtaxrate/controller/MitemTypeTaxRateController.java:30 |
| `/config/mitemWorkshop/copy` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/itemWorkshop/controller/MitemWorkshopController.java:60 |
| `/config/mitemWorkshop/inherit/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/itemWorkshop/controller/MitemWorkshopController.java:101 |
| `/config/mitemWorkshop/item/workshop/map` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/itemWorkshop/controller/MitemWorkshopController.java:124 |
| `/config/mitemWorkshop/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/itemWorkshop/controller/MitemWorkshopController.java:81 |
| `/config/mitemWorkshop/record/page` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/itemWorkshop/controller/MitemWorkshopController.java:146 |
| `/config/mitemWorkshop/remove` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/itemWorkshop/controller/MitemWorkshopController.java:71 |
| `/config/mitemWorkshop/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/itemWorkshop/controller/MitemWorkshopController.java:51 |
| `/config/orderType/itemStatus/copy` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:1108 |
| `/config/orderType/itemStatus/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:1092 |
| `/config/priceControlsMitem/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/PriceControlsController.java:66 |
| `/config/priceControlsMitem/batchAdd` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/PriceControlsController.java:52 |
| `/config/priceControlsMitem/batchCopy` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/PriceControlsController.java:108 |
| `/config/priceControlsMitem/delete` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/PriceControlsController.java:122 |
| `/config/priceControlsMitem/lowestPrice/get` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/PriceControlsController.java:134 |
| `/config/privateField/get` | backend | POST | 3 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/feign/ConfigFeignHystrixClient.java:71 |
| `/config/product/costset/item/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/product/costset/controller/ProductCostSetController.java:104 |
| `/config/product/costset/item/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/product/costset/controller/ProductCostSetController.java:67 |
| `/config/product/costset/item/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/product/costset/controller/ProductCostSetController.java:93 |
| `/config/product/costset/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/product/costset/controller/ProductCostSetController.java:54 |
| `/config/product/costset/status/get` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/product/costset/controller/ProductCostSetController.java:40 |
| `/config/product/label/group/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/productlabel/controller/ProductLabelGroupController.java:47 |
| `/config/product/label/group/move` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/productlabel/controller/ProductLabelGroupController.java:55 |
| `/config/product/label/group/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/productlabel/controller/ProductLabelGroupController.java:39 |
| `/config/product/label/group/tree/list` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/productlabel/controller/ProductLabelGroupController.java:31 |
| `/config/product/label/list` | backend, miniapp, admin-v1 | POST, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/productlabel/controller/ProductLabelController.java:37 |
| `/config/product/label/list/all` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/productlabel/controller/ProductLabelController.java:45 |
| `/config/product/label/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/productlabel/controller/ProductLabelController.java:29 |
| `/config/product/shelf/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/ProductShelfController.java:47 |
| `/config/product/shelf/del` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/ProductShelfController.java:55 |
| `/config/product/shelf/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/ProductShelfController.java:39 |
| `/config/product/shelf/item/edit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/ProductShelfController.java:64 |
| `/config/product/shelf/item/findByAllOrShelfId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/ProductShelfController.java:80 |
| `/config/product/shelf/item/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/ProductShelfController.java:72 |
| `/config/product/shelf/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/ProductShelfController.java:31 |
| `/config/productDecoration/find` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/productdecoration/controller/ProductDecorationController.java:96 |
| `/config/productDecoration/get` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/productdecoration/controller/ProductDecorationController.java:45 |
| `/config/productDecoration/reg/get` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/productdecoration/controller/ProductDecorationController.java:62 |
| `/config/productDecoration/save` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/productdecoration/controller/ProductDecorationController.java:79 |
| `/config/productDecoration/share/set` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/productdecoration/controller/ProductDecorationController.java:105 |
| `/config/productionWorkshop/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/productionworkshop/controller/ProductionWorkshopController.java:42 |
| `/config/productionWorkshop/delete` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/productionworkshop/controller/ProductionWorkshopController.java:105 |
| `/config/productionWorkshop/info` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/productionworkshop/controller/ProductionWorkshopController.java:75 |
| `/config/productionWorkshop/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/productionworkshop/controller/ProductionWorkshopController.java:90 |
| `/config/productionWorkshop/update` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/productionworkshop/controller/ProductionWorkshopController.java:59 |
| `/config/productorgin/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:331 |
| `/config/productorgin/del` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:357 |
| `/config/productorgin/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:742 |
| `/config/productorgin/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:344 |
| `/config/rpc/item/apply/companyId/get` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:798 |
| `/config/rpc/rightsGroups/find` | backend | POST | 2 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/rights/groups/controller/RightsGroupsRPCController.java:72 |
| `/config/supplier/item/comp/copy` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/item/SupplierItemController.java:126 |
| `/config/supplier/item/comp/data/map` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/item/SupplierItemRpcController.java:29 |
| `/config/supplier/item/comp/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/item/SupplierItemController.java:147 |
| `/config/supplier/item/comp/inherit/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/item/SupplierItemController.java:69 |
| `/config/supplier/item/comp/item/delete` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/item/SupplierItemController.java:107 |
| `/config/supplier/item/comp/item/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/item/SupplierItemController.java:97 |
| `/config/supplier/item/comp/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/item/SupplierItemController.java:45 |
| `/config/supplier/item/comp/price/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/item/SupplierItemController.java:184 |
| `/config/supplier/item/comp/proxy/comp/map` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/item/SupplierItemRpcController.java:38 |
| `/config/supplier/item/comp/proxy/comp/map/b2b` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/item/SupplierItemRpcController.java:47 |
| `/config/supplier/item/comp/proxy/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/item/SupplierItemController.java:175 |
| `/config/supplier/item/comp/proxy/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/item/SupplierItemController.java:117 |
| `/config/supplier/item/comp/remove` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/item/SupplierItemController.java:137 |
| `/config/supplier/item/comp/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/item/SupplierItemController.java:87 |
| `/config/supplier/item/comp/search` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/item/SupplierItemController.java:166 |
| `/config/taskTypeTable/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/DTaskCenterController.java:140 |
| `/config/v1/industryAttr/{industry}/item/action/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/IndustryAttrController.java:82 |
| `/config/v1/industryAttr/{industry}/item/listByIndustry` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/IndustryAttrController.java:100 |
| `/config/v1/industryAttr/item/action/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/IndustryAttrController.java:41 |
| `/config/v1/industryAttr/item/action/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/IndustryAttrController.java:55 |
| `/config/v1/item/industryAttr/{industry}/action/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/IndustryAttrController.java:120 |
| `/config/v1/item/industryAttr/B2bOrderItemProperty/action/list` | miniapp | POST(default) | 1 | 仅单个前端证据 | semir-reabam-front/public/api.js:174 |
| `/core/appc/mealMall/item/publish` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:197 |
| `/core/appc/Member/mitemType/publish` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:199 |
| `/core/v1/groupbuy/act/product/action/page` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1825 |
| `/file/activity/orderRule/multi/orderRule/item/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/orderRule/controller/FileOrderRuleController.java:55 |
| `/file/b2b/freight/special/product/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/freight/B2bFreightController.java:42 |
| `/file/b2b/item/logisticsProvider/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/logisticsItem/controller/B2BItemLogisticsProviderImportController.java:28 |
| `/file/import/config/product/label/group/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ConfigImportController.java:34 |
| `/file/import/config/product/label/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ConfigImportController.java:48 |
| `/file/import/config/spokesperson/item` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1724 |
| `/file/import/dorderhq/items/import` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:696 |
| `/file/import/item/import` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2310 |
| `/file/import/item/importimg` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:556 |
| `/file/import/item/skc/importimg` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:586 |
| `/file/import/item/sku/importimg` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:567 |
| `/file/import/itemType/exceladd` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:117 |
| `/file/import/mitemb2b/exceladd` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:446 |
| `/file/import/mitemmall/exceladd` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:427 |
| `/file/import/mitemorder/exceladd` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2390 |
| `/file/import/priceControlsMitem/excelAdd` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:331 |
| `/file/import/product/importMItemDetails` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:951 |
| `/file/import/product/importMItemShareWords` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:965 |
| `/file/import/product/importProductLabels` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:980 |
| `/file/import/product/mitem/excelAdd` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:373 |
| `/file/import/product/mitem/shop/excelAdd` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:408 |
| `/file/import/reserve/excelAddProduct` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:606 |
| `/file/import/retail/reserve/excelAddProduct` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:531 |
| `/file/item/sizeratio/importItemSizeRatio` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitem/controller/ItemSizeRatioFileController.java:32 |
| `/file/items/apply/packages/comp/excelAdd` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitem/packages/controller/MitemApplyPackageCompImportController.java:35 |
| `/file/items/apply/packages/detail/excelAdd` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitem/packages/controller/MItemApplyPackageDetailImportController.java:33 |
| `/file/items/size/config/exceladd` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitem/config/controller/MItemSizeConfigImportController.java:32 |
| `/file/items/size/config/importItemMultipleConfig` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitem/config/controller/ItemMultipleConfigController.java:37 |
| `/file/items/skc/size/ratio/exceladd` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitem/config/controller/MItemSkcSizeRatioImportController.java:39 |
| `/file/mdm/mdmItemSyncByArticleCodes` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitem/controller/MItemImportController.java:61 |
| `/file/mem/endorsement/items` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2136 |
| `/file/mem/endorsement/items/upload` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2134 |
| `/file/mItem/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitem/controller/MItemImportController.java:40 |
| `/file/mitemCompTaxRate/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitemcomptaxrate/MitemCompTaxRateImportController.java:33 |
| `/file/mitemPriceTag/importItem` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitempricetag/MItemPriceTagImportController.java:46 |
| `/file/mitemSpecTypeData/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitemspecdata/controller/MitemSpecDataImportController.java:38 |
| `/file/mitemWorkshop/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitemworkshop/MitemWorkshopImportController.java:35 |
| `/file/product/orderLimitQty/importData` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/product/limit/controller/ProductOrderLimitQtyFileController.java:39 |
| `/file/supplierMitemComp/b2b/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/supplying/controller/SupplierMitemCompController.java:35 |
| `/health/check` | backend | GET | 19 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/HealthCheckController.java:15 |
| `/hr/item/collect/list` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CollectController.java:63 |
| `/hr/kpirule/v2/repeat/items` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2183 |
| `/hr/operation/promotion/items` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:134 |
| `/hr/promotion/get/item` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1819 |
| `/member/financeCard/applyProductByPage` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/semir-member/src/main/java/com/reabam/controller/finance/card/FinanceCardController.java:70 |
| `/member/financeCard/itemsByPackageIds` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/semir-member/src/main/java/com/reabam/controller/finance/card/FinanceCardController.java:86 |
| `/member/financeCard/mitemPackage/itemPage` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/semir-member/src/main/java/com/reabam/controller/finance/card/FinanceCardMitemPackageController.java:35 |
| `/member/financeCard/mitemPackage/query/item/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/semir-member/src/main/java/com/reabam/controller/finance/card/FinanceCardMitemPackageController.java:44 |
| `/openapi/b2border/delivery/itemSpec` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1003 |
| `/openapi/goodsin/itemorder/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:899 |
| `/openapi/intellectAi/itemData` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/controller/IntellectAiDataController.java:95 |
| `/openapi/intellectAi/itemDataByUserAllCompanyAuth` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/controller/IntellectAiDataController.java:104 |
| `/openapi/item/findItemPriceList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/ProductController.java:31 |
| `/openapi/item/mitemcomp/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:724 |
| `/openapi/item/mtBillMaterials` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:857 |
| `/openapi/itemseries/maintain` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:357 |
| `/openapi/mdm/sku/saveOrUpdate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/MdmController.java:255 |
| `/openapi/mitemBarcode/change` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1139 |
| `/openapi/mitemType/query` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:754 |
| `/openapi/product/barcode/bind` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:550 |
| `/openapi/product/bomItem/query` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:809 |
| `/openapi/product/brand/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:170 |
| `/openapi/product/configUnit/batchupdate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:113 |
| `/openapi/product/configUnit/update` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1297 |
| `/openapi/product/configUnitGroup/update` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1313 |
| `/openapi/product/inStoreMachining/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1541 |
| `/openapi/product/inStoreMachining/query` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1571 |
| `/openapi/product/item/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:212 |
| `/openapi/product/item/anonymousAddItem` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:260 |
| `/openapi/product/item/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:734 |
| `/openapi/product/item/query` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:687 |
| `/openapi/product/itemLabel/update` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:820 |
| `/openapi/product/itemSpec/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:278 |
| `/openapi/product/itemSpec/delete` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:299 |
| `/openapi/product/label/group/save` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1481 |
| `/openapi/product/label/save` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1496 |
| `/openapi/product/mitemcomp` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:278 |
| `/openapi/product/mitemcomp/batch` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:290 |
| `/openapi/product/nearExpireItem/edit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:305 |
| `/openapi/product/nearExpireItem/editItem` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:320 |
| `/openapi/product/picture` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:702 |
| `/openapi/product/priceList/update` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1281 |
| `/openapi/product/proRule/saveLsRule` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1511 |
| `/openapi/product/proRule/savePromotion` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1526 |
| `/openapi/product/type/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:191 |
| `/openapi/productorgin/change` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:68 |
| `/openapi/receive/item/costPrice` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:629 |
| `/product/activity/label/getCacheCompanyActivityLabel` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/client/ActivityLabelDomainClient.java:32 |
| `/product/activity/label/getCacheMultipleCompanyActivityLabel` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/client/ActivityLabelDomainClient.java:42 |
| `/product/activity/label/getProductActivityLabel` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/client/ActivityLabelDomainClient.java:52 |
| `/product/activitylabel/batchAddOrDel` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/activitylabel/ActivityLabelController.java:160 |
| `/product/activitylabel/company/action/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/activitylabel/ActivityLabelController.java:133 |
| `/product/activitylabel/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/activitylabel/ActivityLabelController.java:110 |
| `/product/activitylabel/excelAdd` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/activitylabel/ActivityLabelController.java:144 |
| `/product/activitylabel/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/activitylabel/ActivityLabelController.java:62 |
| `/product/activitylabel/getActivityLabelOfConditions` | backend, admin-v1, admin-v2 | POST, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/activitylabel/ActivityLabelController.java:152 |
| `/product/activitylabel/getExclItem` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/activitylabel/ActivityLabelController.java:86 |
| `/product/activitylabel/getItem` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/activitylabel/ActivityLabelController.java:74 |
| `/product/activitylabel/getType` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/activitylabel/ActivityLabelController.java:98 |
| `/product/activitylabel/itemids/get` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/activitylabel/ActivityLabelController.java:120 |
| `/product/activitylabel/list` | backend, miniapp, admin-v1 | POST, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/activitylabel/ActivityLabelController.java:50 |
| `/product/aftersale/accept` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/aftersale/AfterSaleController.java:81 |
| `/product/aftersale/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/aftersale/AfterSaleController.java:32 |
| `/product/aftersale/barCode` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/aftersale/AfterSaleController.java:45 |
| `/product/aftersale/deliver` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/aftersale/AfterSaleController.java:157 |
| `/product/aftersale/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/aftersale/AfterSaleController.java:69 |
| `/product/aftersale/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/aftersale/AfterSaleController.java:57 |
| `/product/aftersale/quality/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/aftersale/AfterSaleController.java:127 |
| `/product/aftersale/receive` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/aftersale/AfterSaleController.java:170 |
| `/product/aftersale/repair/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/aftersale/AfterSaleController.java:111 |
| `/product/aftersale/returnvisit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/aftersale/AfterSaleController.java:183 |
| `/product/aftersale/test/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/aftersale/AfterSaleController.java:95 |
| `/product/allot/delete` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/AllotOrderV2Controller.java:32 |
| `/product/allot/gettransfersset` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/AllotOrderV1Controller.java:386 |
| `/product/allot/order/add` | backend | POST | 2 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/AllotOrderV1Controller.java:82 |
| `/product/allot/order/append/info` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/AllotOrderV1Controller.java:639 |
| `/product/allot/order/close` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/AllotOrderV1Controller.java:465 |
| `/product/allot/order/confirmwhsin` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/AllotOrderV1Controller.java:366 |
| `/product/allot/order/confirmwhsout` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/AllotOrderV1Controller.java:399 |
| `/product/allot/order/delayReceiving` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/AllotOrderV1Controller.java:657 |
| `/product/allot/order/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/AllotOrderV1Controller.java:192 |
| `/product/allot/order/dispose` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/AllotOrderV1Controller.java:210 |
| `/product/allot/order/getAllotType` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/AllotOrderV1Controller.java:481 |
| `/product/allot/order/getAvailableQuantity` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/AllotOrderV1Controller.java:648 |
| `/product/allot/order/gwhsout` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/AllotOrderV1Controller.java:442 |
| `/product/allot/order/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/AllotOrderV1Controller.java:174 |
| `/product/allot/order/receiving/finish` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/AllotOrderV1Controller.java:621 |
| `/product/allot/order/takequantity` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/AllotOrderV1Controller.java:350 |
| `/product/allot/order/whsin` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/AllotOrderV1Controller.java:264 |
| `/product/allot/order/whsout` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/AllotOrderV1Controller.java:288 |
| `/product/allot/order/whsOut/finish` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/AllotOrderV1Controller.java:630 |
| `/product/allot/orderSimpleInfo/{allotOrderId}` | backend | POST | 2 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/AllotOrderV1Controller.java:143 |
| `/product/allot/orderSimpleInfo/anonymous` | backend | POST | 2 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/AllotOrderV1Controller.java:153 |
| `/product/allot/productShelf/save` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/AllotOrderV2Controller.java:42 |
| `/product/allot/whs/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/AllotOrderV1Controller.java:335 |
| `/product/analysis/date/list` | backend, miniapp | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/report/controller/ProductRankingListController.java:50 |
| `/product/app/System/AppCodes` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/AppCodeV2Controller.java:42 |
| `/product/asyncPic` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/dock/shenhui/controller/ItemAsyncController.java:103 |
| `/product/barcode/chenge/openapi` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemBarcode/controller/MitemBarcodeController.java:80 |
| `/product/barcode/whsout/record` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:603 |
| `/product/batch/price/adjustment/detail` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2860 |
| `/product/batch/price/adjustment/item` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2862 |
| `/product/batch/price/adjustment/item/details` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2863 |
| `/product/batch/price/adjustment/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2859 |
| `/product/batch/price/adjustment/save` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2861 |
| `/product/batch/priceList/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/BatchPriceListController.java:42 |
| `/product/batch/priceList/update` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/BatchPriceListController.java:33 |
| `/product/brand` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsV2Controller.java:112 |
| `/product/checkProductUCode` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:645 |
| `/product/checkvouch/close` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:487 |
| `/product/checkvouch/confirm` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:473 |
| `/product/checkvouch/confirm/append` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:462 |
| `/product/checkvouch/confirmadd` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:439 |
| `/product/checkvouch/confirmEditor` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:451 |
| `/product/checkvouch/dateil` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:393 |
| `/product/checkvouch/exAlrCheckvouch` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:557 |
| `/product/checkvouch/execl` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2426 |
| `/product/checkvouch/item/record/del` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:429 |
| `/product/checkvouch/item/record/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:421 |
| `/product/checkvouch/item/shelf` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:403 |
| `/product/checkvouch/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:372 |
| `/product/checkvouch/redate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:531 |
| `/product/checkvouch/shelf/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:412 |
| `/product/checkvouch/statistics` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:542 |
| `/product/checkvouch/suredate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:520 |
| `/product/checkvouch/update` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:498 |
| `/product/checkvouch/update/append` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:509 |
| `/product/client/apply/package/detail` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/client/MitemApplyPackageClient.java:30 |
| `/product/client/directSupply/getBatchSortById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/client/DirectSupplyClient.java:67 |
| `/product/client/directSupply/getById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/client/DirectSupplyClient.java:50 |
| `/product/client/directSupply/getByIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/client/DirectSupplyClient.java:143 |
| `/product/client/directSupply/queryBatchNo/bySkcCodes` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/client/DirectSupplyClient.java:76 |
| `/product/client/directSupply/queryInfo/byPagIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/client/DirectSupplyClient.java:92 |
| `/product/client/directSupply/queryInfoHasPrice/byPagIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/client/DirectSupplyClient.java:100 |
| `/product/client/directSupply/queryItems/byPagIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/client/DirectSupplyClient.java:84 |
| `/product/client/directSupply/queryPagList/byCondition` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/client/DirectSupplyClient.java:116 |
| `/product/client/directSupply/queryTotalPrice/byPagIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/client/DirectSupplyClient.java:108 |
| `/product/client/item/sizeRatio/delCacheByIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/client/ItemSizeRatioClient.java:63 |
| `/product/client/item/sizeRatio/listCacheByIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/client/ItemSizeRatioClient.java:38 |
| `/product/client/item/sizeRatio/listCacheOrgByIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/client/ItemSizeRatioClient.java:46 |
| `/product/client/item/sizeRatio/querySizeRatioByItemIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/client/ItemSizeRatioClient.java:55 |
| `/product/combination/addedit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1019 |
| `/product/combination/dateil` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1003 |
| `/product/combination/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:989 |
| `/product/common/advancedFilterList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/CommonController.java:49 |
| `/product/common/orderProductWarning` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/CommonController.java:30 |
| `/product/company/promotion/package/available/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/promotion/fixedpackage/controller/FixedPackageController.java:41 |
| `/product/company/sizeratio/delete` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/sizeratio/controller/CompanyItemSizeRatioController.java:59 |
| `/product/company/sizeratio/detail` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/sizeratio/controller/CompanyItemSizeRatioController.java:36 |
| `/product/company/sizeratio/update` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/sizeratio/controller/CompanyItemSizeRatioController.java:45 |
| `/product/costPrice/batch/get` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/costprice/controller/CostPriceController.java:49 |
| `/product/costPrice/calculate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/costprice/controller/CostPriceController.java:84 |
| `/product/costPrice/get` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/costprice/controller/CostPriceController.java:38 |
| `/product/costPrice/getByCompanyId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/costprice/controller/CostPriceController.java:73 |
| `/product/costPrice/getByWhsId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/costprice/controller/CostPriceController.java:61 |
| `/product/costRevaluation/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/costRevaluation/controller/CostRevaluationController.java:81 |
| `/product/costRevaluation/count` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/costRevaluation/controller/CostRevaluationController.java:113 |
| `/product/costRevaluation/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/costRevaluation/controller/CostRevaluationController.java:66 |
| `/product/costRevaluation/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/costRevaluation/controller/CostRevaluationController.java:51 |
| `/product/costRevaluation/refreshWhs` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/costRevaluation/controller/CostRevaluationController.java:98 |
| `/product/dallotOrder/addDallotOrder` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/AllotOrderV1Controller.java:550 |
| `/product/dallotOrder/allotReasons/itemStatus` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/AllotOrderV1Controller.java:535 |
| `/product/dallotOrder/DallotOrderDetail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/AllotOrderV1Controller.java:526 |
| `/product/dallotOrder/execl` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/AllotOrderV1Controller.java:495 |
| `/product/dallotOrderItem/addDallotOrderItem` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/AllotOrderV1Controller.java:612 |
| `/product/dallotOrderItem/findList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/AllotOrderV1Controller.java:511 |
| `/product/dcheckVouchBatchInfoRecord/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/dcheckvouch/controller/DcheckVouchBatchInfoRecordController.java:34 |
| `/product/detail` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:284 |
| `/product/detail/spec/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/spec/controller/ProductDetailSpecController.java:26 |
| `/product/diffOrder/accept` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/diffOrder/DiffOrderController.java:65 |
| `/product/diffOrder/checkItem` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/diffOrder/DiffOrderController.java:75 |
| `/product/diffOrder/info` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/diffOrder/DiffOrderController.java:38 |
| `/product/diffOrder/itemPage` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/diffOrder/DiffOrderController.java:55 |
| `/product/diffOrder/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/diffOrder/DiffOrderController.java:47 |
| `/product/directSupplyModel/add` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyModelController.java:99 |
| `/product/directSupplyModel/copy` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyModelController.java:122 |
| `/product/directSupplyModel/deleteItems` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyModelController.java:184 |
| `/product/directSupplyModel/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyModelController.java:66 |
| `/product/directSupplyModel/detailTop` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyModelController.java:88 |
| `/product/directSupplyModel/getAttrBoxDown` | backend, admin-v2 | GET | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyModelController.java:153 |
| `/product/directSupplyModel/getBatchBoxDown` | admin-v2 | POST | 2 | 仅单个前端证据 | semir-bmall-admin-v2/app/src/pages/directSupplyManagementPackage/service/index.ts:407 |
| `/product/directSupplyModel/getBatchBoxDownPage` | backend, admin-v2 | POST | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyModelController.java:161 |
| `/product/directSupplyModel/getModelItemInfo` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyModelController.java:192 |
| `/product/directSupplyModel/getPackageBoxDown` | backend, admin-v2 | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyModelController.java:176 |
| `/product/directSupplyModel/getProductLineBoxDown` | backend, admin-v2 | GET | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyModelController.java:168 |
| `/product/directSupplyModel/item/list/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyModelController.java:55 |
| `/product/directSupplyModel/pull/list` | backend, admin-v2 | POST | 5 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyModelController.java:146 |
| `/product/directSupplyModel/queryPage` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyModelController.java:77 |
| `/product/directSupplyModel/saveItems` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyModelController.java:200 |
| `/product/directSupplyModel/update` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyModelController.java:110 |
| `/product/directSupplyModel/updateStatusBatch` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyModelController.java:133 |
| `/product/directSupplyModelAttr/add` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyModelAttrController.java:69 |
| `/product/directSupplyModelAttr/check` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyModelAttrController.java:94 |
| `/product/directSupplyModelAttr/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyModelAttrController.java:82 |
| `/product/directSupplyModelAttr/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyModelAttrController.java:41 |
| `/product/directSupplyModelAttrValue/check` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyModelAttrValueController.java:40 |
| `/product/directSupplyModelAttrValue/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyModelAttrValueController.java:30 |
| `/product/directSupplyModelRel/addBatchPriority` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyModelRelController.java:57 |
| `/product/directSupplyModelRel/addCategory` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyModelRelController.java:45 |
| `/product/directSupplyModelRel/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyModelRelController.java:34 |
| `/product/directSupplyModelRel/list` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyModelRelController.java:70 |
| `/product/directSupplyPackage/deletePackage` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyPackageController.java:59 |
| `/product/directSupplyPackage/detail` | backend, admin-v2 | GET | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyPackageController.java:70 |
| `/product/directSupplyPackage/getDirectPackageList` | backend, admin-v2 | POST | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyPackageController.java:51 |
| `/product/directSupplyPackage/queryTotalPrice/byPagIds` | backend, admin-v2 | POST | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyPackageController.java:119 |
| `/product/directSupplyPackage/save` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyPackageController.java:78 |
| `/product/directSupplyPackage/update` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyPackageController.java:86 |
| `/product/directSupplyPackageAttr/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyPackageAttrController.java:31 |
| `/product/directSupplyPackageAttrValue/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyPackageAttrValueController.java:31 |
| `/product/directSupplyPackageRel/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyPackageRelController.java:31 |
| `/product/directSupplyPackageSku/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyPackageSkuController.java:37 |
| `/product/directSupplyPackageSku/queryModelItemPage` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyPackageSkuController.java:48 |
| `/product/doc/barcodes` | backend | POST | 2 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:596 |
| `/product/doc/barcodes/temp` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:610 |
| `/product/findShAccount` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/dock/shenhui/controller/ItemAsyncController.java:62 |
| `/product/getBookingRecords` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2575 |
| `/product/getFixedBomItemList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2853 |
| `/product/getItemSpecListOfSpecIdList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsV2Controller.java:175 |
| `/product/getPurchasePrice` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsV2Controller.java:135 |
| `/product/getTableUniqueNo` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1828 |
| `/product/guide/mitem/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1139 |
| `/product/guide/priceList/addItem` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1580 |
| `/product/guide/priceList/delete` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1620 |
| `/product/guide/priceList/findItemList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1555 |
| `/product/in/barcodes` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:629 |
| `/product/info/batchGetBillmaterialsByItemIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductInfoController.java:110 |
| `/product/info/batchGetItemSimpleMap` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductInfoController.java:86 |
| `/product/info/batchGetItemSpecSimpleMap` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductInfoController.java:92 |
| `/product/info/batchGetSpecBillmaterialsByItemIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductInfoController.java:116 |
| `/product/info/batchUpdateStatus/group` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductInfoController.java:69 |
| `/product/info/batchUpdateStatus/label` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductInfoController.java:80 |
| `/product/info/batchUpdateStatus/package` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductInfoController.java:58 |
| `/product/info/getBillmaterialsByItemId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductInfoController.java:104 |
| `/product/info/getBillmaterialsDetailByBomId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductInfoController.java:122 |
| `/product/info/getItemDefaultImg` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductInfoController.java:98 |
| `/product/info/getProductAttribute` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductInfoController.java:144 |
| `/product/info/getSkcSizeRatioCal` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductInfoController.java:164 |
| `/product/info/getSpecDetailBySpecId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductInfoController.java:136 |
| `/product/info/getSpecInfoBySpecIds` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductInfoController.java:154 |
| `/product/info/item/list/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductInfoController.java:48 |
| `/product/inStoreMachining/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/inStoreMachining/controller/InStoreMachiningController.java:79 |
| `/product/inStoreMachining/adjust` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/inStoreMachining/controller/InStoreMachiningController.java:120 |
| `/product/inStoreMachining/cancel` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/inStoreMachining/controller/InStoreMachiningController.java:206 |
| `/product/inStoreMachining/delete` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/inStoreMachining/controller/InStoreMachiningController.java:183 |
| `/product/inStoreMachining/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/inStoreMachining/controller/InStoreMachiningController.java:65 |
| `/product/inStoreMachining/finish` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/inStoreMachining/controller/InStoreMachiningController.java:193 |
| `/product/inStoreMachining/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/inStoreMachining/controller/InStoreMachiningController.java:51 |
| `/product/inStoreMachining/receipt` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/inStoreMachining/controller/InStoreMachiningController.java:140 |
| `/product/inStoreMachining/refund` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/inStoreMachining/controller/InStoreMachiningController.java:163 |
| `/product/inStoreMachining/saveBatch` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/inStoreMachining/controller/InStoreMachiningController.java:98 |
| `/product/item/attributesdetaill` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2458 |
| `/product/item/attributesList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2545 |
| `/product/item/brandItems/count` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/MitemController.java:144 |
| `/product/item/brandItems/getBrandList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/MitemController.java:108 |
| `/product/item/brandItems/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/MitemController.java:117 |
| `/product/item/brandItems/sku` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/MitemController.java:135 |
| `/product/item/brandItems/spu` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/MitemController.java:126 |
| `/product/item/cacheById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/client/MitemDomainClient.java:39 |
| `/product/item/calSizeRatioQty` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/MitemController.java:74 |
| `/product/item/check/sku` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2529 |
| `/product/item/delete` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/pages/product/service.js:283 |
| `/product/item/delete/statistics/count` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/pages/product/service.js:300 |
| `/product/item/deleteCacheByItemIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/client/MitemDomainClient.java:78 |
| `/product/item/findAllSpecByItemId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/MitemController.java:99 |
| `/product/item/getBmItems` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2560 |
| `/product/item/getMiddleDropDownBoxList` | backend, miniapp, admin-v1, admin-v2 | POST, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/MitemController.java:213 |
| `/product/item/getProductLineDropDownBoxList` | backend, miniapp, admin-v1, admin-v2 | POST, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/MitemController.java:205 |
| `/product/item/getSmallDropDownBoxList` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/MitemController.java:221 |
| `/product/item/group/add` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsGroupController.java:74 |
| `/product/item/group/batchAddOrDel` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsGroupController.java:183 |
| `/product/item/group/detail` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsGroupController.java:59 |
| `/product/item/group/filterRules` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsGroupController.java:103 |
| `/product/item/group/item_list` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsGroupController.java:90 |
| `/product/item/group/item_list_add` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsGroupController.java:134 |
| `/product/item/group/item_list_del` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsGroupController.java:149 |
| `/product/item/group/itemListAdd` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsGroupController.java:163 |
| `/product/item/group/list` | backend, admin-v1 | POST, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsGroupController.java:44 |
| `/product/item/group/move` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsGroupController.java:119 |
| `/product/item/group/qty` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsGroupController.java:174 |
| `/product/item/importimg` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2359 |
| `/product/item/intellectAi/getCompanyDiagnosisData` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/IntellectAiMItemController.java:56 |
| `/product/item/intellectAi/getIntellectAiOrderCreateBeforeSkcData` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/IntellectAiMItemController.java:33 |
| `/product/item/intellectAi/itemData` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/IntellectAiMItemController.java:41 |
| `/product/item/intellectAi/itemDataByUserAllCompanyAuth` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/IntellectAiMItemController.java:49 |
| `/product/item/listCacheByIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/client/MitemDomainClient.java:51 |
| `/product/item/mapCacheByIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/client/MitemDomainClient.java:64 |
| `/product/item/mitemlabel` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2486 |
| `/product/item/mitemlabel/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2500 |
| `/product/item/mitemlabel/del` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2515 |
| `/product/item/product/chain/getProductChainInfo` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/MitemProductChainController.java:35 |
| `/product/item/querySizeRatioByItemId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/MitemController.java:90 |
| `/product/item/querySizeRatioByItemIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/MitemController.java:82 |
| `/product/item/setattributes` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2472 |
| `/product/item/skc/cacheDetailBySkcCode` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/client/MitemSkcDomainClient.java:30 |
| `/product/item/skc/listCacheDetailBySkcCodes` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/client/MitemSkcDomainClient.java:42 |
| `/product/item/skc/mapCacheDetailBySkcCodes` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/client/MitemSkcDomainClient.java:55 |
| `/product/item/skc/mapCacheInfoBySkcCodes` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/client/MitemSkcDomainClient.java:72 |
| `/product/item/spec/cacheById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/client/MitemSpecDomainClient.java:39 |
| `/product/item/spec/getSpuDetailByItemId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/MitemSpecController.java:94 |
| `/product/item/spec/listCacheByIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/client/MitemSpecDomainClient.java:51 |
| `/product/item/spec/mapCacheByIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/client/MitemSpecDomainClient.java:64 |
| `/product/item/spec/query/mitem/id` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/MitemSpecController.java:84 |
| `/product/item/spec/scene/findSkcListBySpuId` | backend, miniapp | GET | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/MitemSpecController.java:75 |
| `/product/item/spec/size` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/MitemSpecController.java:66 |
| `/product/itemAsync` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/dock/shenhui/controller/ItemAsyncController.java:112 |
| `/product/itemAsyncByItemCode` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/dock/shenhui/controller/ItemAsyncController.java:70 |
| `/product/itembarcode/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2807 |
| `/product/itembarcode/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2338 |
| `/product/itembarcode/unbind` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2352 |
| `/product/itemGroup/scene/findSpuList` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/ItemGroupController.java:37 |
| `/product/itemGroupDetail/scene/findSkcList` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/ItemGroupDetailController.java:35 |
| `/product/itemPicAsyncByFilter` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/dock/shenhui/controller/ItemAsyncController.java:92 |
| `/product/itemPicAsyncByItemCode` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/dock/shenhui/controller/ItemAsyncController.java:81 |
| `/product/itemSearch/search` | backend, admin-v1, admin-v2 | POST, POST(default) | 5 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/productSearch/controller/ItemSearchController.java:24 |
| `/product/itemType/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2443 |
| `/product/kuaidi100/refund/send` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/expressInquiry/expressController.java:72 |
| `/product/kuaidi100/send` | backend | POST | 3 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/feign/ProductFeignClient.java:50 |
| `/product/kuaidi100/sendList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/expressInquiry/expressController.java:59 |
| `/product/lastmonth/rank` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/report/controller/ProductReportController.java:101 |
| `/product/listPirce/get` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ListPriceController.java:42 |
| `/product/listPirce/get/anon` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ListPriceController.java:54 |
| `/product/listPirce/getPrice` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ListPriceController.java:68 |
| `/product/mall/getProBomDetail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductMallController.java:33 |
| `/product/mall/itemGroup/itemList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductMallController.java:49 |
| `/product/mall/itemGroup/itemList/b2bMall` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductMallV2Controller.java:93 |
| `/product/mall/moreProducts/itemList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductMallV2Controller.java:53 |
| `/product/mall/moreProducts/itemList/b2bMall` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductMallV2Controller.java:69 |
| `/product/mall/scene/detail/b2bMall` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductMallV2Controller.java:126 |
| `/product/mdm/color/saveOrUpdate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/MdmProductController.java:46 |
| `/product/mdm/goodsCategory/saveOrUpdate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/MdmProductController.java:69 |
| `/product/mdm/initSpu` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/MdmItemController.java:82 |
| `/product/mdm/mdmItemSync` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/MdmItemController.java:34 |
| `/product/mdm/mdmItemSyncByArticleCodes` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/MdmItemController.java:51 |
| `/product/mdm/relevance/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/dock/mdm/controller/MdmRelevanceController.java:59 |
| `/product/mdm/relevance/del` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/dock/mdm/controller/MdmRelevanceController.java:71 |
| `/product/mdm/relevance/dic/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/dock/mdm/controller/MdmRelevanceController.java:82 |
| `/product/mdm/relevance/list` | backend, miniapp | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/dock/mdm/controller/MdmRelevanceController.java:47 |
| `/product/mdm/relevance/mdmProdLineOrMinorDefects/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/dock/mdm/controller/MdmRelevanceController.java:35 |
| `/product/mdm/size/saveOrUpdate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/MdmProductController.java:57 |
| `/product/mdm/sku/saveOrUpdate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/MdmProductController.java:93 |
| `/product/mdm/spu/saveOrUpdate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/MdmProductController.java:81 |
| `/product/mdm/sync/config/save` | backend | ANY | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/dock/mdm/controller/MdmItemSyncConfigController.java:21 |
| `/product/mini/getItemDetail` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/mini/ProductsMiniController.java:31 |
| `/product/mini/item/comment` | backend, miniapp | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/mini/ProductsMiniController.java:40 |
| `/product/mini/item/difyToMallChatMessages` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/mini/MitemMiniController.java:100 |
| `/product/mini/item/home/page/skcList` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/mini/MitemMiniController.java:63 |
| `/product/mini/item/home/page/spuList` | backend, miniapp | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/mini/MitemMiniController.java:53 |
| `/product/mini/item/home/rank/allChannel` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/mini/MitemMiniController.java:83 |
| `/product/mini/item/home/rank/offline` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/mini/MitemMiniController.java:73 |
| `/product/mini/item/home/rank/statisticsSale` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/mini/MitemMiniController.java:92 |
| `/product/mini/item/pageForFinanceCard` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/mini/MitemMiniController.java:44 |
| `/product/mini/item/rank/allChannel/cityOfCompany` | backend, miniapp | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/mini/MiniItemRankController.java:80 |
| `/product/mini/item/rank/allChannel/hotSellingSize` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/mini/MiniItemRankController.java:43 |
| `/product/mini/item/rank/allChannel/list` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/mini/MiniItemRankController.java:34 |
| `/product/mini/item/rank/allChannel/platformList` | backend, miniapp | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/mini/MiniItemRankController.java:61 |
| `/product/mini/item/rank/allChannel/relatedSkcList` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/mini/MiniItemRankController.java:52 |
| `/product/mini/item/rank/allChannel/saleDateStatistics` | backend, miniapp | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/mini/MiniItemRankController.java:70 |
| `/product/mini/item/related` | backend, miniapp | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/mini/ProductsMiniController.java:48 |
| `/product/mini/item/spec/activity/list` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/mini/MitemSpecProductMiniController.java:29 |
| `/product/mini/item/spec/list` | backend, miniapp | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/mini/MitemSpecProductMiniController.java:38 |
| `/product/mitem/addLinkedProduct` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1257 |
| `/product/mitem/addMItem` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1287 |
| `/product/mitem/addPrice` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1341 |
| `/product/mitem/addRecItems` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:725 |
| `/product/mitem/batchCopy` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1051 |
| `/product/mitem/batchCopyMoreToOne` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1035 |
| `/product/mitem/common/findAndSpecBySkcCode` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitem/MitemCommonController.java:33 |
| `/product/mitem/common/findSpecBySkcCodes` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitem/MitemCommonController.java:45 |
| `/product/mitem/common/getExistSkcCode` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitem/MitemCommonController.java:64 |
| `/product/mitem/common/getGroupSeasonAndYearByItemIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitem/MitemCommonController.java:54 |
| `/product/mitem/common/getSeasonAndYearByItemIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitem/MitemCommonController.java:73 |
| `/product/mitem/custom/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2603 |
| `/product/mitem/custom/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2618 |
| `/product/mitem/deleteLinkedProduct` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1272 |
| `/product/mitem/deleteMitemSpec` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1326 |
| `/product/mitem/deletePrice` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1491 |
| `/product/mitem/delRecItems` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:743 |
| `/product/mitem/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1130 |
| `/product/mitem/detail/simple` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsV2Controller.java:63 |
| `/product/mitem/findB2BUnitList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1169 |
| `/product/mitem/findLinkedProducts` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1242 |
| `/product/mitem/findMitemList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1390 |
| `/product/mitem/findPriceDetail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1227 |
| `/product/mitem/findPriceList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1184 |
| `/product/mitem/findUnitList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1154 |
| `/product/mitem/getItemCode` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2712 |
| `/product/mitem/getJdToken` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1417 |
| `/product/mitem/getRecItems` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:709 |
| `/product/mitem/getTkJs` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1428 |
| `/product/mitem/goods` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1356 |
| `/product/mitem/group/findPriceList` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1210 |
| `/product/mitem/itemCode/check` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1312 |
| `/product/mitem/itemDetailParse` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1407 |
| `/product/mitem/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:674 |
| `/product/mitem/miscellaneous` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1441 |
| `/product/mitem/recItem/drag` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:774 |
| `/product/mitem/recItemSort` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:759 |
| `/product/mitem/removeMItem` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2395 |
| `/product/mitem/shelves` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:660 |
| `/product/mitem/shop/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2589 |
| `/product/mitem/simplList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:790 |
| `/product/mitem/size/config/batch/del` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemconfig/controller/MitemSizeConfigController.java:49 |
| `/product/mitem/size/config/findByList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemconfig/controller/MitemSizeConfigController.java:37 |
| `/product/mitem/skc/size/ration/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/sizeratio/controller/MItemSkcSizeRatioController.java:56 |
| `/product/mitem/skc/size/ration/batch/delete` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/sizeratio/controller/MItemSkcSizeRatioController.java:84 |
| `/product/mitem/skc/size/ration/findByPage` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/sizeratio/controller/MItemSkcSizeRatioController.java:42 |
| `/product/mitem/skc/size/ration/update` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/sizeratio/controller/MItemSkcSizeRatioController.java:70 |
| `/product/mitem/spec` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsV2Controller.java:73 |
| `/product/mitem/spec/move` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2833 |
| `/product/mitem/switchSupplier` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2698 |
| `/product/mitem/types` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:693 |
| `/product/mitem/updatePrice` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1476 |
| `/product/mitemComp/common/new/findFirstByItemIdAndCompanyId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemComp/controller/MItemCompCommonNewController.java:58 |
| `/product/mitemComp/common/new/findMItemByItemIdAndCompanyId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemComp/controller/MItemCompCommonNewController.java:66 |
| `/product/mitemComp/common/new/getApplyItemCodeList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemComp/controller/MItemCompCommonNewController.java:106 |
| `/product/mitemComp/common/new/getApplyItemCodeMap` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemComp/controller/MItemCompCommonNewController.java:125 |
| `/product/mitemComp/common/new/getApplyItemIdList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemComp/controller/MItemCompCommonNewController.java:98 |
| `/product/mitemComp/common/new/getApplyItemIdsAndCompanyId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemComp/controller/MItemCompCommonNewController.java:90 |
| `/product/mitemComp/common/new/getApplyItemIdsByCompanyIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemComp/controller/MItemCompCommonNewController.java:142 |
| `/product/mitemComp/common/new/getApplyItemList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemComp/controller/MItemCompCommonNewController.java:82 |
| `/product/mitemComp/common/new/getCompanyAndApplyItemMap` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemComp/controller/MItemCompCommonNewController.java:116 |
| `/product/mitemComp/common/new/getEffectiveSpecIdList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemComp/controller/MItemCompCommonNewController.java:198 |
| `/product/mitemComp/common/new/getExistByItemIdAndCompanyIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemComp/controller/MItemCompCommonNewController.java:150 |
| `/product/mitemComp/common/new/getGroupDefaultCompanyId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemComp/controller/MItemCompCommonNewController.java:50 |
| `/product/mitemComp/common/new/getInApplyItemIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemComp/controller/MItemCompCommonNewController.java:188 |
| `/product/mitemComp/common/new/getMItemCompBySpecIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemComp/controller/MItemCompCommonNewController.java:158 |
| `/product/mitemComp/common/new/getNotInApplyItemIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemComp/controller/MItemCompCommonNewController.java:178 |
| `/product/mitemComp/common/new/getNotInApplyItemIdsByCompanyIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemComp/controller/MItemCompCommonNewController.java:168 |
| `/product/mitemComp/common/new/packageCompList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemComp/controller/MItemCompCommonNewController.java:207 |
| `/product/mitemcomp/copy` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:975 |
| `/product/mitemcomp/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:805 |
| `/product/mitemcomp/many/change` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:932 |
| `/product/mitemcomp/move` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:947 |
| `/product/mitemcomp/opt` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:832 |
| `/product/mitemcomp/opt2` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:907 |
| `/product/mitemComp/shelf/findByList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemComp/controller/MitemCompController.java:30 |
| `/product/mitemComp/shelf/updateMitemCompShelf` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemComp/controller/MitemCompController.java:40 |
| `/product/mitemDisassembly/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemDisassembly/controller/MitemDisassemblyController.java:97 |
| `/product/mitemDisassembly/count` | backend | POST | 2 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/product/mitemdisassembly/feign/MitemDisassemblyFeignHystrixClient.java:37 |
| `/product/mitemDisassembly/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemDisassembly/controller/MitemDisassemblyController.java:78 |
| `/product/mitemDisassembly/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemDisassembly/controller/MitemDisassemblyController.java:61 |
| `/product/mitemDisassembly/set/get` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemDisassembly/controller/MitemDisassemblyController.java:160 |
| `/product/mitemDisassembly/set/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemDisassembly/controller/MitemDisassemblyController.java:150 |
| `/product/mitemMultipleConfig/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MitemMultipleConfigController.java:56 |
| `/product/mitemMultipleConfig/orderMultipleWarning` | backend, miniapp | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MitemMultipleConfigController.java:66 |
| `/product/mitemMultipleConfig/removeMultipleConfig` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MitemMultipleConfigController.java:47 |
| `/product/mitemMultipleConfig/save` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MitemMultipleConfigController.java:42 |
| `/product/mitemSpecComp/findByList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemSpecComp/controller/MitemSpecCompController.java:73 |
| `/product/mitemSpecComp/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemSpecComp/controller/MitemSpecCompController.java:44 |
| `/product/mitemSpecComp/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemSpecComp/controller/MitemSpecCompController.java:60 |
| `/product/mitemSpecComp/updateMitemSpecCompShelf` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemSpecComp/controller/MitemSpecCompController.java:83 |
| `/product/mwhs/addMwhs` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1767 |
| `/product/mwhs/deleteMwhs` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1798 |
| `/product/mwhs/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1752 |
| `/product/mwhs/findList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1737 |
| `/product/mwhs/getMwhs` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1784 |
| `/product/mwhs/updateMwhs` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1813 |
| `/product/newRefund/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2323 |
| `/product/newRefund/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2310 |
| `/product/notseparatelypurchaseditem/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/promotion/notseparatelypurchaseditem/controller/NotSeparatelyPurchasedItemController.java:43 |
| `/product/notseparatelypurchaseditem/delete` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/promotion/notseparatelypurchaseditem/controller/NotSeparatelyPurchasedItemController.java:54 |
| `/product/notseparatelypurchaseditem/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/promotion/notseparatelypurchaseditem/controller/NotSeparatelyPurchasedItemController.java:34 |
| `/product/order/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2634 |
| `/product/orderLimitQty/batchAdd` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductOrderLimitQtyController.java:50 |
| `/product/orderLimitQty/deleteOne` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductOrderLimitQtyController.java:66 |
| `/product/orderLimitQty/getPageList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductOrderLimitQtyController.java:42 |
| `/product/orderLimitQty/getPurchasedQtyMap` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductOrderLimitQtyController.java:91 |
| `/product/orderLimitQty/getSkuMaxPurchaseQty` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductOrderLimitQtyController.java:83 |
| `/product/orderLimitQty/updateOne` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductOrderLimitQtyController.java:58 |
| `/product/orderLimitQty/updatePurchasedQtyOfOrderId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductOrderLimitQtyController.java:75 |
| `/product/osearch` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:260 |
| `/product/pag/batchAddOrDelItem` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemPag/controller/MitemApplyPackageController.java:166 |
| `/product/pag/batchUpdateStatus` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemPag/controller/MitemApplyPackageController.java:141 |
| `/product/pag/clearItemComp` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemPag/controller/MitemApplyPackageController.java:193 |
| `/product/pag/comp/batchAddOrDelCompany` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemPag/controller/MitemApplyPackageCompController.java:79 |
| `/product/pag/comp/getItemPackageAndComp` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemPag/controller/MitemApplyPackageCompController.java:99 |
| `/product/pag/comp/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemPag/controller/MitemApplyPackageCompController.java:46 |
| `/product/pag/comp/update` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemPag/controller/MitemApplyPackageCompController.java:69 |
| `/product/pag/detail` | backend, admin-v1 | GET, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemPag/controller/MitemApplyPackageController.java:97 |
| `/product/pag/item/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemPag/controller/MitemApplyPackageController.java:107 |
| `/product/pag/list` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemPag/controller/MitemApplyPackageController.java:128 |
| `/product/pag/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemPag/controller/MitemApplyPackageController.java:62 |
| `/product/picking/logistics/update` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/whsoutPicking/PickingController.java:213 |
| `/product/priceList/addB2bPrice` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1694 |
| `/product/priceList/addItem` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1570 |
| `/product/priceList/addPriceListItem` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2729 |
| `/product/pricelist/b2b/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/B2bPriceListController.java:39 |
| `/product/pricelist/b2b/types` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/B2bPriceListController.java:53 |
| `/product/priceList/batchAdd` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1635 |
| `/product/priceList/batchAddB2bPrice` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1722 |
| `/product/priceList/batchAddSalePrice` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1872 |
| `/product/priceList/delete` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1610 |
| `/product/priceList/deleteB2bPrice` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1708 |
| `/product/priceList/deleteMitemPriceList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2762 |
| `/product/priceList/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1595 |
| `/product/priceList/editorSalePrice` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1857 |
| `/product/priceList/excelAdd` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1649 |
| `/product/priceList/findB2bPriceAccordingTo` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1680 |
| `/product/priceList/findB2bPriceList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1671 |
| `/product/priceList/findItemList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1548 |
| `/product/priceList/findMitemPriceList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2745 |
| `/product/priceList/findSalePriceList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1843 |
| `/product/priceList/group/findSalePriceList` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:933 |
| `/product/print/batch/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:791 |
| `/product/print/batch/update` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/printBatch/PrintBatchController.java:30 |
| `/product/productionLine/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/productionLine/controller/ProductionLineController.java:48 |
| `/product/productionLine/copy` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/productionLine/controller/ProductionLineController.java:63 |
| `/product/productionLine/delete` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/productionLine/controller/ProductionLineController.java:95 |
| `/product/productionLine/list` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/productionLine/controller/ProductionLineController.java:33 |
| `/product/productionLine/set` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/productionLine/controller/ProductionLineController.java:79 |
| `/product/productionPlan/cancel` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productionplan/controller/ProductionPlanController.java:149 |
| `/product/productionPlan/delete` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productionplan/controller/ProductionPlanController.java:138 |
| `/product/productionPlan/info` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productionplan/controller/ProductionPlanController.java:99 |
| `/product/productionPlan/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productionplan/controller/ProductionPlanController.java:86 |
| `/product/productionPlan/print` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productionplan/controller/ProductionPlanController.java:127 |
| `/product/productionPlan/productionCompleted` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productionplan/controller/ProductionPlanController.java:112 |
| `/product/productionPlan/receiving` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productionplan/controller/ProductionPlanController.java:62 |
| `/product/productionPlan/save` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productionplan/controller/ProductionPlanController.java:54 |
| `/product/productionPlanItem/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productionplan/controller/ProductionPlanItemController.java:36 |
| `/product/productSearch/search` | backend | ANY | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/productSearch/controller/ProductSearchController.java:37 |
| `/product/promotion` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsV2Controller.java:83 |
| `/product/promotion/fixedpackage/micropage` | backend, miniapp, admin-v1 | POST, POST(default) | 5 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/promotion/fixedpackage/controller/FixedPackageController.java:33 |
| `/product/promotion/package/available/list` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/promotion/fixedpackage/controller/FixedPackageController.java:50 |
| `/product/promotion/package/getPackageItemInfos` | backend | POST | 2 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/promotion/fixedpackage/controller/FixedPackageController.java:61 |
| `/product/promotion/package/getPlansInfos` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/promotion/fixedpackage/controller/FixedPackageController.java:69 |
| `/product/promotion/package/getPlansItemInfos` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/promotion/fixedpackage/controller/FixedPackageController.java:77 |
| `/product/proportion/size/ratio/add` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/sizeratio/controller/ItemProportionSizeRatioController.java:84 |
| `/product/proportion/size/ratio/batch/delete` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/sizeratio/controller/ItemProportionSizeRatioController.java:102 |
| `/product/proportion/size/ratio/launchSeason/list` | backend, admin-v2 | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/sizeratio/controller/ItemProportionSizeRatioController.java:52 |
| `/product/proportion/size/ratio/launchYear/list` | backend, admin-v2 | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/sizeratio/controller/ItemProportionSizeRatioController.java:44 |
| `/product/proportion/size/ratio/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/sizeratio/controller/ItemProportionSizeRatioController.java:60 |
| `/product/proportion/size/ratio/queryProportionSizeRatioExist` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/sizeratio/controller/ItemProportionSizeRatioController.java:76 |
| `/product/proportion/size/ratio/silhouette/list` | backend, admin-v2 | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/sizeratio/controller/ItemProportionSizeRatioController.java:36 |
| `/product/proportion/size/ratio/update` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/sizeratio/controller/ItemProportionSizeRatioController.java:93 |
| `/product/proRule/bomitem/del` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:462 |
| `/product/proRule/getBbCoupons` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:416 |
| `/product/proRule/getCoupons` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:401 |
| `/product/proRule/getProBomDetail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:386 |
| `/product/proRule/getProDetail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:356 |
| `/product/proRule/getProDetail/objectList` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:493 |
| `/product/proRule/getProDetailPro1s` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:431 |
| `/product/proRule/getProDetailPro2s` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:446 |
| `/product/proRule/getProDetailPro3s` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:585 |
| `/product/proRule/getProItemBoms` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:371 |
| `/product/proRule/getProList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:341 |
| `/product/proRule/getRuleDetail` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:91 |
| `/product/proRule/getRuleDetail/appGroups` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:502 |
| `/product/proRule/getRuleDetail/coupons` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:477 |
| `/product/proRule/getRuleDetail/exclGroups` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:513 |
| `/product/proRule/getRuleDetail/exclItems` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:524 |
| `/product/proRule/getRuleDetail/mutexs` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:535 |
| `/product/proRule/getRuleDetail/superimposed` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:106 |
| `/product/proRule/getRulelist` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:76 |
| `/product/proRule/planBom/action/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:553 |
| `/product/proRule/planBom/action/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:545 |
| `/product/proRule/planBom/action/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:569 |
| `/product/proRule/planBom/line/action/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:561 |
| `/product/proRule/promotion_source_to_redis_all` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:310 |
| `/product/proRule/promotion_to_redis` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:283 |
| `/product/proRule/promotion_to_redis_all` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:298 |
| `/product/proRule/promotion/accept` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:214 |
| `/product/proRule/promotion/cleanup` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:324 |
| `/product/proRule/promotion/close` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:222 |
| `/product/proRule/saveCombRule` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:190 |
| `/product/proRule/saveLsRule` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:137 |
| `/product/proRule/savePromotion` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:206 |
| `/product/proRule/saveProRule` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:121 |
| `/product/proRule/saveSuitRule` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemProRuleController.java:174 |
| `/product/purchase/return/exceladd` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/stock/PurchaseImportController.java:68 |
| `/product/queryLabelNameByItemId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsV2Controller.java:165 |
| `/product/ranking/filter/condition/list` | backend, miniapp, admin-v1 | POST, POST(default) | 5 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/report/controller/ProductRankingListController.java:26 |
| `/product/ranking/list` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/report/controller/ProductReportController.java:42 |
| `/product/recycle/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/recycle/RecycleController.java:54 |
| `/product/recycle/cancel` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/recycle/RecycleController.java:67 |
| `/product/recycle/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/recycle/RecycleController.java:42 |
| `/product/recycle/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/recycle/RecycleController.java:31 |
| `/product/refresh/saleTotalQty` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2844 |
| `/product/retail/ranking/list` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/report/controller/ProductReportController.java:52 |
| `/product/retail/reserve/action/getReserveItemInfo` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ReserveProductController.java:200 |
| `/product/retail/reserve/action/getReserveItemSpec` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ReserveProductController.java:216 |
| `/product/retail/reserve/action/listReserveItemInfo` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ReserveProductController.java:208 |
| `/product/retail/reserve/addProduct` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ReserveProductController.java:83 |
| `/product/retail/reserve/copy` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ReserveProductController.java:190 |
| `/product/retail/reserve/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ReserveProductController.java:127 |
| `/product/retail/reserve/excelAddProduct` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ReserveProductController.java:143 |
| `/product/retail/reserve/get/reserveItemRetailDeliveryConfig` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ReserveProductController.java:226 |
| `/product/retail/reserve/listProduct` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ReserveProductController.java:55 |
| `/product/retail/reserve/listReserveProduct` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ReserveProductController.java:69 |
| `/product/retail/reserve/openReserve/{itemId}` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ReserveProductController.java:163 |
| `/product/retail/reserve/product/action/depositInfo` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ReserveProductController.java:179 |
| `/product/retail/reserve/putOnOffShelve` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ReserveProductController.java:112 |
| `/product/retail/reserve/removeProduct` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ReserveProductController.java:99 |
| `/product/retail/salesvolume` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/report/controller/ProductReportController.java:91 |
| `/product/rpc/productSearch/search` | backend | ANY | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/productSearch/controller/ProductSearchController.java:26 |
| `/product/sales/statistics/2c/page` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductSalesController.java:47 |
| `/product/sales/statistics/page` | backend, admin-v1, admin-v2 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductSalesController.java:34 |
| `/product/salesvolume/country/day/list` | backend, miniapp | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/report/controller/ProductRankingListController.java:58 |
| `/product/salesvolume/detail` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/report/controller/ProductRankingListController.java:42 |
| `/product/salesvolume/province/list` | backend, miniapp | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/report/controller/ProductRankingListController.java:66 |
| `/product/scene/addedit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1108 |
| `/product/scene/dateil` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1080 |
| `/product/scene/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1066 |
| `/product/scene/move` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1094 |
| `/product/scenecomp/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1534 |
| `/product/scenecomp/copy` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2824 |
| `/product/scenecomp/del` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1520 |
| `/product/scenecomp/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1506 |
| `/product/schedule_delivery/instraction/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ScheduledDeliveryController.java:39 |
| `/product/schedule_delivery/instraction/saveOrUpdate` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ScheduledDeliveryController.java:30 |
| `/product/search` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:151 |
| `/product/shenhui/sync/config/save` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/dock/shenhui/controller/DpItemSyncConfigController.java:24 |
| `/product/shenhui/syncItemImgData` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/dock/shenhui/controller/ItemAsyncController.java:128 |
| `/product/sizeratio/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/sizeratio/controller/ItemSizeRatioController.java:39 |
| `/product/sizeratio/batch/delete` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/sizeratio/controller/ItemSizeRatioController.java:59 |
| `/product/sizeratio/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/sizeratio/controller/ItemSizeRatioController.java:30 |
| `/product/sizeratio/update` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/sizeratio/controller/ItemSizeRatioController.java:49 |
| `/product/smartReplenishment/add` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2000 |
| `/product/smartReplenishment/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1737 |
| `/product/smartReplenishment/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1735 |
| `/product/smartReplenishment/list/comp` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1739 |
| `/product/smartReplenishment/list/detail` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1743 |
| `/product/smartReplenishment/list/item` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1741 |
| `/product/smartReplenishment/preview` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1745 |
| `/product/smartReplenishment/timing/record` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1747 |
| `/product/smartReplenishment/timing/record/info` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1749 |
| `/product/smartReplenishment/timing/stop` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1751 |
| `/product/testAutoAsync` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/dock/shenhui/controller/ItemAsyncController.java:44 |
| `/product/testItemAsync` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/dock/shenhui/controller/ItemAsyncController.java:53 |
| `/product/uniquecode/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemBarcode/controller/UniqueCodeImportController.java:30 |
| `/product/unit_group/del` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/UnitGroupController.java:95 |
| `/product/unit_group/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/UnitGroupController.java:65 |
| `/product/unit_group/get_details` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/UnitGroupController.java:80 |
| `/product/unit_group/item/get_units` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/UnitGroupController.java:101 |
| `/product/unit_group/list` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/UnitGroupController.java:35 |
| `/product/unit_group/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/UnitGroupController.java:50 |
| `/product/unit_group/unit_group_conversion` | backend | POST | 3 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/feign/ProductFeignClient.java:28 |
| `/product/update/linePlan` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2866 |
| `/product/warehouse/default` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/WarehouseController.java:32 |
| `/product/whsin/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1907 |
| `/product/whsin/addm` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1934 |
| `/product/whsIn/delete` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/WhsInController.java:31 |
| `/product/whsin/detail` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1973 |
| `/product/whsin/execl` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2411 |
| `/product/whsin/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1889 |
| `/product/whsIn/setPostingDate` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2794 |
| `/product/whsOut/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2276 |
| `/product/whsOut/cancel` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/WhsOutController.java:54 |
| `/product/whsOut/delete` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/WhsOutController.java:44 |
| `/product/whsOut/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2134 |
| `/product/whsout/exceladd` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/stock/WhsOutImpoController.java:44 |
| `/product/whsOut/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2076 |
| `/product/whsOut/picking/cancel` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/whsoutPicking/PickingController.java:241 |
| `/product/whsOut/picking/delivery` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/whsoutPicking/PickingController.java:223 |
| `/product/whsOut/picking/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/whsoutPicking/PickingController.java:110 |
| `/product/whsOut/picking/list` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/whsoutPicking/PickingController.java:48 |
| `/product/whsOut/receiving/finish` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/WhsOutController.java:65 |
| `/product/whsOut/setPostingDate` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2778 |
| `/product/whsOut/updateLogistics` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2262 |
| `/reabam-b2b/b2b/bookorder/mitem` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/feign/SupplyFeignHystrixClient.java:28 |
| `/schedule/abandoned` | backend | POST | 6 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/schedule/ScheduleController.java:29 |
| `/task/priceList/batchAddSpecUnitPriceList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-task/src/main/java/com/reabam/product/controller/PriceListController.java:48 |
| `/task/productCostSetItem/batchStepCommit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-task/src/main/java/com/reabam/config/controller/ProductCostSetItemController.java:29 |
| `/task/supplier/product/batchStepCommit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-task/src/main/java/com/reabam/b2b/supplier/controller/SupplierProductImportController.java:30 |
| `/warehouse/batch/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/ProductStorageBatchController.java:167 |
| `/warehouse/batch/add/anon` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/ProductStorageBatchController.java:182 |
| `/warehouse/batch/doc/item/record` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/ProductStorageBatchController.java:151 |
| `/warehouse/batch/doc/record` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/ProductStorageBatchController.java:117 |
| `/warehouse/batch/doc/record/anon` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/ProductStorageBatchController.java:136 |
| `/warehouse/batch/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/ProductStorageBatchController.java:53 |
| `/warehouse/batch/queryListBybatchCodeIn` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/ProductStorageBatchController.java:66 |
| `/warehouse/batch/updateBatch` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/ProductStorageBatchController.java:214 |
| `/warehouse/batch/updateBatchCheck` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/ProductStorageBatchController.java:199 |
| `/warehouse/batch/whs/data` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/ProductStorageBatchController.java:77 |
| `/warehouse/batch/whs/data/anon` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/ProductStorageBatchController.java:90 |
| `/warehouse/batchConversion/itemPage` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2793 |
| `/warehouse/uniquecode/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/ProductBarcodeController.java:29 |

### 客户/组织 (customer-org)

| 归一化路径 | 仓库 | 方法 | 出现次数 | 覆盖 | 首个证据 |
| --- | --- | --- | --- | --- | --- |
| `/activity/liveChannels/check/company/permissions` | backend, admin-v2 | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:346 |
| `/activity/liveChannels/filterCompanyByChannelId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:372 |
| `/activity/liveChannels/getUser/sysCompanyInfoPage` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:338 |
| `/activity/liveChannels/mini/getLiveChannelsByCompanyIdAndActivityId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/LiveChannelsMiniController.java:29 |
| `/activity/orderModel/queryOrderModel/companyPage` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/orderModel/OrderModelController.java:167 |
| `/activity/orderModel/updateOrderModelCompany` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/orderModel/OrderModelController.java:120 |
| `/activity/orderModelCompanyRel/{id}` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/orderModel/OrderModelCompanyRelController.java:29 |
| `/app/Company/GetCompanyQrCode` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/CompanyController.java:50 |
| `/app/Company/GetMemberByQrCode` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/CompanyController.java:71 |
| `/app/Company/getPermanentCode` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/CompanyController.java:103 |
| `/app/Company/getPermanentURL` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/CompanyController.java:117 |
| `/app/Company/group/init` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/CompanyController.java:133 |
| `/app/Company/invoiceHeader/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/CompanyController.java:148 |
| `/app/Company/invoiceHeader/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/CompanyController.java:162 |
| `/app/Company/ShareRecords/Add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/CompanyController.java:90 |
| `/app/System/AppCode/Company/optionName` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/AppCodeController.java:121 |
| `/app/System/GetCompanyAuthInfo` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/SystemController.java:82 |
| `/appc/Company/AboutUs` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/AppcCompanyController.java:113 |
| `/appc/Company/bindCompany` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/AppcCompanyController.java:143 |
| `/appc/Company/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/AppcCompanyController.java:93 |
| `/appc/Company/findCompanyDistance` | backend | ANY | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/AppcCompanyController.java:78 |
| `/appc/Company/findSameCityCompanyList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/AppcCompanyController.java:133 |
| `/appc/Company/GetCompanyQrCode` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/AppcCompanyController.java:59 |
| `/appc/Company/province/city` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/AppcCompanyController.java:125 |
| `/b2b/comp/coupon/delivery` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/coupon/controller/SysCompanyCouponController.java:60 |
| `/b2b/comp/coupon/list` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/coupon/controller/SysCompanyCouponController.java:48 |
| `/b2b/comp/coupon/mall/list` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/coupon/controller/SysCompanyCouponController.java:77 |
| `/b2b/intellectAiOrder/companyBalance` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/IntellectAiOrderController.java:140 |
| `/b2b/intelligenceDistributionCompany/pageByIntelligenceDistributionId` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/intelligencedistribution/controller/IntelligenceDistributionCompanyController.java:34 |
| `/b2b/intelligenceDistributionSourceDocument/pageByCompanyId` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/intelligencedistribution/controller/IntelligenceDistributionSourceDocumentController.java:46 |
| `/b2b/invoice/distributorInvoice/list` | backend, miniapp, admin-v1, admin-v2 | POST, POST(default) | 5 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/invoice/B2bOrderInvoiceController.java:78 |
| `/b2b/logistics/config/action/getCompanyArea` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/delivery/controller/B2bLogisticsController.java:294 |
| `/b2b/mallSet/company/currentCompanyWheel` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bMallCompanySetController.java:49 |
| `/b2b/mallSet/company/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bMallCompanySetController.java:39 |
| `/b2b/mallSet/company/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bMallCompanySetController.java:29 |
| `/b2b/order/company/address/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:320 |
| `/b2b/order/companyInfo` | backend, miniapp, admin-v1, admin-v2 | POST, POST(default) | 7 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:291 |
| `/b2b/plus/urgent/delivery/express/fee/getByCompanyId` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/delivery/plusUrgent/controller/PlusUrgentDeliveryExpressFeeController.java:43 |
| `/b2b/quote/companyInfo` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bQuoteController.java:94 |
| `/b2b/rebateRate/config/calculateByItemIdAndCompanyId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/RebateRateConfigController.java:91 |
| `/b2b/sales/order/need/payByCompanyId` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderController.java:330 |
| `/b2b/sales/order/yunst/batchAgentPayByDistributor` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2122 |
| `/b2b/sap/company/available/balance` | backend, miniapp | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/SapController.java:27 |
| `/b2b/v1/company/depositOrder/action/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/deposit/web/DepositApiController.java:79 |
| `/b2b/v1/company/depositOrder/action/page` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/deposit/web/DepositApiController.java:59 |
| `/b2b/v1/order/split/company/action/get` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderSplitController.java:131 |
| `/b2b/v1/order/split/distributor/action/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderSplitController.java:78 |
| `/b2b/v1/order/split/distributor/action/sum` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderSplitController.java:93 |
| `/b2b/wx/company/authenticateInfo` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bWxCompanyController.java:41 |
| `/b2b/wx/company/authenticateSave` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bWxCompanyController.java:32 |
| `/comp/add/announcement/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CompanyController.java:172 |
| `/comp/add/announcement/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CompanyController.java:157 |
| `/comp/add/announcement/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CompanyController.java:126 |
| `/comp/add/announcement/look` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CompanyController.java:141 |
| `/comp/add/business/info/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CompanyController.java:403 |
| `/comp/add/comp/credit/change/openapi` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CompanyController.java:350 |
| `/comp/add/comp/excelAdd` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CompanyController.java:234 |
| `/comp/add/comp/init` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CompanyController.java:272 |
| `/comp/add/comp/initLongitudeAndLatitude` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CompanyController.java:440 |
| `/comp/add/comp/staffgroup` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CompanyController.java:96 |
| `/comp/add/company/authorize/setting` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CompanyController.java:434 |
| `/comp/add/company/edit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CompanyController.java:414 |
| `/comp/add/company/receiveNetCode/check` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CompanyController.java:424 |
| `/comp/add/companyAttributes/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CompanyController.java:257 |
| `/comp/add/getCompanyInfo` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CompanyController.java:363 |
| `/comp/add/getCompanyInfo/byCode` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CompanyController.java:388 |
| `/comp/add/getCompanyInfo/byCode/anonymous` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CompanyController.java:375 |
| `/comp/add/group/init` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CompanyController.java:288 |
| `/comp/add/householdInfo/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CompanyController.java:219 |
| `/comp/add/householdInfo/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CompanyController.java:203 |
| `/comp/add/householdInfo/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CompanyController.java:188 |
| `/comp/add/invoiceHeader/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CompanyController.java:304 |
| `/comp/add/invoiceHeader/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CompanyController.java:333 |
| `/comp/add/invoiceHeader/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CompanyController.java:318 |
| `/comp/add/route/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CompanyController.java:111 |
| `/config/b2b/orderset/private/autoReceiveCompanyConfigInit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:299 |
| `/config/company/department/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/department/controller/CompanyDepartmentController.java:34 |
| `/config/company/department/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/department/controller/CompanyDepartmentController.java:42 |
| `/config/company/department/move` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/department/controller/CompanyDepartmentController.java:50 |
| `/config/company/department/tree/list` | backend, admin-v1 | POST, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/department/controller/CompanyDepartmentController.java:26 |
| `/config/company/getAttr` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:1032 |
| `/config/company/setAttr` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:1052 |
| `/config/companySet/list` | backend, admin-v1 | POST, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/CompanySetController.java:26 |
| `/config/distributor/credit/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:637 |
| `/config/mallModule/mallModuleCompany/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/mall/MallModuleRpcController.java:29 |
| `/config/mallModuleCompany/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/mall/module/MallModuleCompanyController.java:48 |
| `/config/mallModuleCompany/detailByGroupId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/mall/module/MallModuleCompanyController.java:59 |
| `/config/mallModuleCompany/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/mall/module/MallModuleCompanyController.java:35 |
| `/config/meal/mallModuleCompany/detail` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1595 |
| `/config/meal/mallModuleCompany/edit` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1597 |
| `/config/merchantSettlementSetting/getByCompanyId` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/merchantsettlement/controller/MerchantSettlementSettingController.java:41 |
| `/config/outsourcingItem/company/list/bySpecIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/outsourcingItem/controller/OutsourcingItemController.java:94 |
| `/config/outsourcingItem/company/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/outsourcingItem/controller/OutsourcingItemController.java:55 |
| `/config/rpc/appcode/getByOptionNameAndCodeAndCompanyIdAndGroupId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeRpcController.java:58 |
| `/config/rpc/appcode/getByOptionNameAndCodeAndCompanyIdAndGroupIdAndExtinfo4` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeRpcController.java:64 |
| `/config/rpc/appcode/getByOptionNameAndCompanyIdAndGroupId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeRpcController.java:94 |
| `/config/rpc/appcode/getOrInheritCompanyId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeRpcController.java:43 |
| `/config/rpc/appcode/inherit/getByOptionNameAndCodeAndCompanyIdAndGroupId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeRpcController.java:79 |
| `/config/rpc/appcode/inherit/getByOptionNameAndCompanyIdAndGroupId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeRpcController.java:108 |
| `/core/app/order/seperate/companys` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1537 |
| `/core/app/order/seperate/companys/transfer` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1539 |
| `/core/v1/groupbuy/act/company/action/page` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1823 |
| `/file/b2b/funds/company/account/amount/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/funds/account/company/controller/CompanyAccountAmountImportController.java:30 |
| `/file/company/company/qty/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/company/CompanyController.java:30 |
| `/file/import/company/logisticsProvider` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:1021 |
| `/file/import/distributor` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2363 |
| `/file/import/hr/company/param` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:993 |
| `/file/sysCompanyFile/importSysCompanyFile` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/hr/controller/SysCompanyFileController.java:35 |
| `/hr/client/distributor/queryByDisCodeList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/client/DistributorClient.java:48 |
| `/hr/client/distributor/queryById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/client/DistributorClient.java:35 |
| `/hr/comp/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CompanyController.java:58 |
| `/hr/comp/list` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CompanyController.java:42 |
| `/hr/company/audit` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2537 |
| `/hr/company/authorize/setting` | miniapp | POST(default) | 1 | 仅单个前端证据 | semir-reabam-front/public/api.js:41 |
| `/hr/company/copy` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2539 |
| `/hr/company/extended/rpc/getSyscompanyExtended` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CompanyExtendedRpcController.java:31 |
| `/hr/company/extended/rpc/getSyscompanyExtendedMap` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CompanyExtendedRpcController.java:55 |
| `/hr/company/grade/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/grade/CompanyGradeController.java:58 |
| `/hr/company/grade/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/grade/CompanyGradeController.java:46 |
| `/hr/company/grade/gradeApp` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/grade/CompanyGradeController.java:96 |
| `/hr/company/grade/gradeCalculate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/grade/CompanyGradeController.java:83 |
| `/hr/company/grade/gradeSpecify` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/grade/CompanyGradeController.java:117 |
| `/hr/company/grade/list` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/grade/CompanyGradeController.java:70 |
| `/hr/company/integral/record` | backend, admin-v1 | ANY, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/company/integral/CompanyIntegralRecordController.java:26 |
| `/hr/company/invitationCodeValid` | miniapp | POST(default) | 1 | 仅单个前端证据 | semir-reabam-front/public/api.js:226 |
| `/hr/company/invite/set/detail` | backend, admin-v1 | ANY, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/company/invite/CompanyInviteRewardSetController.java:52 |
| `/hr/company/invite/set/edit` | backend, admin-v1 | ANY, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/company/invite/CompanyInviteRewardSetController.java:41 |
| `/hr/company/invite/set/switch` | backend, admin-v1 | ANY, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/company/invite/CompanyInviteRewardSetController.java:28 |
| `/hr/company/label/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/company/label/CompanyLabelController.java:44 |
| `/hr/company/label/adjustCompanyLabelOrderNo` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/company/label/CompanyLabelController.java:107 |
| `/hr/company/label/comp/adjustOrderNo` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/company/label/CompanyLabelCompController.java:48 |
| `/hr/company/label/comp/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/company/label/CompanyLabelCompController.java:58 |
| `/hr/company/label/comp/mall` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/company/label/CompanyLabelCompController.java:68 |
| `/hr/company/label/comp/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/company/label/CompanyLabelCompController.java:38 |
| `/hr/company/label/del` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/company/label/CompanyLabelController.java:72 |
| `/hr/company/label/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/company/label/CompanyLabelController.java:54 |
| `/hr/company/label/getLabelApplyCompany` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/company/label/CompanyLabelController.java:63 |
| `/hr/company/label/list` | backend, admin-v1, admin-v2 | POST, POST(default) | 5 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/company/label/CompanyLabelController.java:89 |
| `/hr/company/label/listCompanyLabelAnonymous` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/company/label/CompanyLabelController.java:98 |
| `/hr/company/receiveNetCode/check` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:342 |
| `/hr/company/supply/getCompanyListByCompanyIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/company/supply/CompanySupplyController.java:28 |
| `/hr/company/upgrade/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/upgrade/controller/SysCompanyUpgradeSetController.java:38 |
| `/hr/company/upgrade/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/upgrade/controller/SysCompanyUpgradeSetController.java:53 |
| `/hr/companyAttributes/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1525 |
| `/hr/companyTlAccount/addBatch` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:738 |
| `/hr/companyTlAccount/deleteBatch` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:740 |
| `/hr/companyTlAccount/page` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:736 |
| `/hr/companyTlAccount/updateBatch` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:742 |
| `/hr/distributor` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorController.java:48 |
| `/hr/distributor/commonSearch` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorController.java:119 |
| `/hr/distributor/distributorfund` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorController.java:53 |
| `/hr/distributor/downBox/pageByUser` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorController.java:95 |
| `/hr/distributor/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorController.java:63 |
| `/hr/distributor/getByCode` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorController.java:69 |
| `/hr/distributor/getByUser` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorController.java:78 |
| `/hr/distributor/invoice/batchSave` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorInvoiceController.java:109 |
| `/hr/distributor/invoice/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorInvoiceController.java:51 |
| `/hr/distributor/invoice/getLastUpdateTimeRange` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorInvoiceController.java:155 |
| `/hr/distributor/invoice/queryActiveByDisId` | admin-v2 | GET | 1 | 仅单个前端证据 | semir-bmall-admin-v2/app/src/pages/midPackageOrder/service/common.ts:34 |
| `/hr/distributor/invoice/queryByDisId` | admin-v2 | GET | 3 | 仅单个前端证据 | semir-bmall-admin-v2/app/src/pages/retailerFiles/service/index.ts:303 |
| `/hr/distributor/invoice/queryByDisIdAndInvoiceCode` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorInvoiceController.java:184 |
| `/hr/distributor/invoice/queryInvoiceByDisIdAndInvoiceList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorInvoiceController.java:165 |
| `/hr/distributor/invoice/selectAndSyncByCodes` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorInvoiceController.java:137 |
| `/hr/distributor/invoice/syncByCodes` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorInvoiceController.java:118 |
| `/hr/distributor/invoice/syncByTime` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorInvoiceController.java:127 |
| `/hr/distributor/invoice/syncFromMdmInvoice` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorInvoiceController.java:146 |
| `/hr/distributor/list/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorController.java:103 |
| `/hr/distributor/saveUpdate` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1990 |
| `/hr/distributor/sync/sap/invoice` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorController.java:112 |
| `/hr/distributor/v2/detail` | backend, admin-v2 | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorNewController.java:161 |
| `/hr/distributor/v2/getDistributorById` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorNewController.java:213 |
| `/hr/distributor/v2/getDistributorDropDownBoxList` | backend, admin-v2 | POST | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorNewController.java:90 |
| `/hr/distributor/v2/getDistributorList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorNewController.java:142 |
| `/hr/distributor/v2/getDistributorMapById` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorNewController.java:222 |
| `/hr/distributor/v2/getLastUpdateTimeRange` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorNewController.java:65 |
| `/hr/distributor/v2/getModelGeneraList` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorNewController.java:73 |
| `/hr/distributor/v2/getModelMinorList` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorNewController.java:81 |
| `/hr/distributor/v2/insert` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorNewController.java:184 |
| `/hr/distributor/v2/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorNewController.java:134 |
| `/hr/distributor/v2/saveAll` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorNewController.java:195 |
| `/hr/distributor/v2/selectAndSyncByCodes` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorNewController.java:114 |
| `/hr/distributor/v2/syncByCodes` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorNewController.java:47 |
| `/hr/distributor/v2/syncByTime` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorNewController.java:56 |
| `/hr/distributor/v2/syncFromMdmDistributor` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorNewController.java:123 |
| `/hr/distributor/v2/update` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorNewController.java:172 |
| `/hr/distributorAttributes/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/distributor/controller/DistributorAttributesController.java:36 |
| `/hr/distributorfund` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorController.java:58 |
| `/hr/iamUser/mini/login/changeCompany` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/mini/IamUserMiniConotroller.java:41 |
| `/hr/iamUserRoleRel/companyUser/pageByCompanyId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamUserRoleRelController.java:65 |
| `/hr/invitation/code` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CompanyInvitationCodeController.java:25 |
| `/hr/invoice/common/distributor/queryById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/invovice/b2b/controller/InvoiceCommonController.java:33 |
| `/hr/invoiceHeaderr/page/company` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/InvoiceHeaderController.java:58 |
| `/hr/mb2bcrd3/getMb2Crd3FirstByFidAndCompanyId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/Mb2bCrd3Controller.java:80 |
| `/hr/mb2bcrd3/getMb2Crd3ListByFidAndCompanyId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/Mb2bCrd3Controller.java:71 |
| `/hr/settlement/queryCompanyAccountPage` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2650 |
| `/hr/staff/app/company/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StaffV2Controller.java:138 |
| `/hr/staff/company/detail` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StaffV2Controller.java:126 |
| `/hr/staff/delDistributor` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2569 |
| `/hr/staff/distributor/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StaffV2Controller.java:171 |
| `/hr/staff/editDistributor` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StaffV2Controller.java:159 |
| `/hr/staff/updateOprAllCompany` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/StaffController.java:255 |
| `/hr/staffdata/getSysCompanyByUser` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/StaffDataController.java:101 |
| `/hr/sysCompany/intellectAi/authorityCompanyData` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/SysCompanyController.java:311 |
| `/hr/sysCompany/intellectAi/companyData` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/SysCompanyController.java:295 |
| `/hr/sysCompany/intellectAi/companyInfo` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/SysCompanyController.java:319 |
| `/hr/sysCompany/intellectAi/distributorData` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/SysCompanyController.java:303 |
| `/hr/sysCompany/intellectAi/distributorInfo` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/SysCompanyController.java:327 |
| `/hr/syscompany/labelComp/list` | admin-v2 | GET | 1 | 仅单个前端证据 | semir-bmall-admin-v2/app/src/pages/storeFiles/service/addStoreFile.ts:54 |
| `/hr/syscompany/labelComp/saveOrUpdate` | admin-v2 | POST | 1 | 仅单个前端证据 | semir-bmall-admin-v2/app/src/pages/storeFiles/service/addStoreFile.ts:66 |
| `/hr/sysCompany/query/label/count` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/SysCompanyController.java:225 |
| `/hr/sysCompany/queryCompanyLabelPage` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:3179 |
| `/hr/sysCompany/queryCompanyRole/miniGround` | miniapp | POST(default) | 1 | 仅单个前端证据 | semir-reabam-front/public/globalApis.js:253 |
| `/hr/sysCompany/queryItemCompanyRole` | miniapp | POST(default) | 1 | 仅单个前端证据 | semir-reabam-front/public/globalApis.js:269 |
| `/hr/sysCompany/queryLiveLabelPage` | admin-v2 | POST | 1 | 仅单个前端证据 | semir-bmall-admin-v2/app/src/services/presale.ts:134 |
| `/hr/syscompany/v2/detail` | admin-v2 | GET, POST | 3 | 仅单个前端证据 | semir-bmall-admin-v2/app/src/pages/storeFiles/service/addStoreFile.ts:30 |
| `/hr/syscompany/v2/getFirstChannelList` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/SyscompanyNewController.java:224 |
| `/hr/syscompany/v2/getLastUpdateTimeRange` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/SyscompanyNewController.java:83 |
| `/hr/syscompany/v2/getSecondChannelList` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/SyscompanyNewController.java:232 |
| `/hr/syscompany/v2/getWhsLastUpdateTimeRange` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/SyscompanyNewController.java:91 |
| `/hr/syscompany/v2/insert` | admin-v2 | POST | 1 | 仅单个前端证据 | semir-bmall-admin-v2/app/src/pages/storeFiles/service/addStoreFile.ts:9 |
| `/hr/syscompany/v2/page` | admin-v2 | POST | 1 | 仅单个前端证据 | semir-bmall-admin-v2/app/src/pages/storeFiles/service/index.ts:26 |
| `/hr/syscompany/v2/pull/list` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/SyscompanyNewController.java:240 |
| `/hr/syscompany/v2/queryActivityCompanyCodeList` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/SyscompanyNewController.java:251 |
| `/hr/syscompany/v2/saveAll` | admin-v2 | POST | 1 | 仅单个前端证据 | semir-bmall-admin-v2/app/src/pages/storeFiles/service/addStoreFile.ts:78 |
| `/hr/syscompany/v2/selectAndSyncByCodes` | backend, admin-v2 | POST | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/SyscompanyNewController.java:101 |
| `/hr/syscompany/v2/syncByCodes` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/SyscompanyNewController.java:47 |
| `/hr/syscompany/v2/syncByTime` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/SyscompanyNewController.java:56 |
| `/hr/syscompany/v2/syncFromMdmStore` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/SyscompanyNewController.java:111 |
| `/hr/syscompany/v2/syncFromMdmWhs` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/SyscompanyNewController.java:125 |
| `/hr/syscompany/v2/syncWhsByCodes` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/SyscompanyNewController.java:65 |
| `/hr/syscompany/v2/syncWhsByTime` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/SyscompanyNewController.java:74 |
| `/hr/syscompany/v2/update` | admin-v2 | POST | 1 | 仅单个前端证据 | semir-bmall-admin-v2/app/src/pages/storeFiles/service/addStoreFile.ts:21 |
| `/hr/sysstaffTlAccount/companyAuth` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:747 |
| `/hr/wechatUser/pre/add/company` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/WechatUserController.java:126 |
| `/manage/app/Common/BindCompany` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:161 |
| `/manage/app/Common/LoginCompanys` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:347 |
| `/manage/app/Common/ToBindCompany` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:142 |
| `/manage/app/Common/updateCompanyName` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:475 |
| `/member/distributor/financeCard/batchEffectiveCardList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/semir-member/src/main/java/com/reabam/controller/finance/card/DistributorFinanceCardController.java:150 |
| `/member/distributor/financeCard/bathUpdateOccupyAccountBalance` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/semir-member/src/main/java/com/reabam/controller/finance/card/DistributorFinanceCardController.java:166 |
| `/member/distributor/financeCard/calculateFinanceCardForPendingOrder` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/semir-member/src/main/java/com/reabam/controller/finance/card/DistributorFinanceCardController.java:158 |
| `/member/distributor/financeCard/cardList` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/semir-member/src/main/java/com/reabam/controller/finance/card/DistributorFinanceCardController.java:88 |
| `/member/distributor/financeCard/details` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/semir-member/src/main/java/com/reabam/controller/finance/card/DistributorFinanceCardController.java:72 |
| `/member/distributor/financeCard/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/semir-member/src/main/java/com/reabam/controller/finance/card/DistributorFinanceCardController.java:63 |
| `/member/distributor/financeCard/effectiveCardList` | backend, admin-v2 | POST | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/semir-member/src/main/java/com/reabam/controller/finance/card/DistributorFinanceCardController.java:141 |
| `/member/distributor/financeCard/findCardPackageIdsByCompanyIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/semir-member/src/main/java/com/reabam/controller/finance/card/DistributorFinanceCardController.java:175 |
| `/member/distributor/financeCard/findCardPackageIdsMapByCompanyIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/semir-member/src/main/java/com/reabam/controller/finance/card/DistributorFinanceCardController.java:184 |
| `/member/distributor/financeCard/flow/flowByPage` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/semir-member/src/main/java/com/reabam/controller/finance/card/DistributorFinanceCardFlowController.java:52 |
| `/member/distributor/financeCard/flow/flowList` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/semir-member/src/main/java/com/reabam/controller/finance/card/DistributorFinanceCardFlowController.java:43 |
| `/member/distributor/financeCard/get/order/available/card` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/semir-member/src/main/java/com/reabam/controller/finance/card/DistributorFinanceCardController.java:128 |
| `/member/distributor/financeCard/listByPage` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/semir-member/src/main/java/com/reabam/controller/finance/card/DistributorFinanceCardController.java:80 |
| `/member/distributor/financeCard/mgd/order/cardList` | backend, admin-v1, admin-v2 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/semir-member/src/main/java/com/reabam/controller/finance/card/DistributorFinanceCardController.java:95 |
| `/member/distributor/financeCard/mini/order/cardList` | backend, miniapp | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/semir-member/src/main/java/com/reabam/controller/finance/card/DistributorFinanceCardController.java:107 |
| `/member/distributor/financeCard/record/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/semir-member/src/main/java/com/reabam/controller/finance/card/DistributorFinanceCardRecordController.java:31 |
| `/member/distributor/financeCard/updateOccupyAccountBalance` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/semir-member/src/main/java/com/reabam/controller/finance/card/DistributorFinanceCardController.java:133 |
| `/openapi/addSyscompany` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:690 |
| `/openapi/company/address` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:954 |
| `/openapi/company/query` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:739 |
| `/openapi/distributor/accountBalance/change` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1329 |
| `/openapi/distributor/credit/change` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:248 |
| `/openapi/hr/distributor` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:263 |
| `/openapi/intellectAi/companyBalance` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/controller/IntellectAiDataController.java:113 |
| `/openapi/intellectAi/companyData` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/controller/IntellectAiDataController.java:69 |
| `/openapi/intellectAi/companyDiagnosisData` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/controller/IntellectAiDataController.java:77 |
| `/openapi/intellectAi/companyInfo` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/controller/IntellectAiDataController.java:122 |
| `/openapi/intellectAi/distributorData` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/controller/IntellectAiDataController.java:61 |
| `/openapi/intellectAi/distributorInfo` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/controller/IntellectAiDataController.java:131 |
| `/openapi/receive/company/salesTarget` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:640 |
| `/openapi/receive/company/statements` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:651 |

### 库存 (stock)

| 归一化路径 | 仓库 | 方法 | 出现次数 | 覆盖 | 首个证据 |
| --- | --- | --- | --- | --- | --- |
| `/b2b/config/set/stockset` | backend | POST | 2 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bRPCPayConfigController.java:20 |
| `/b2b/inventory/info` | backend, miniapp, admin-v1 | POST, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/SupplyInventoryController.java:35 |
| `/b2b/inventory/product/invqty` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/SupplyInventoryController.java:47 |
| `/b2b/order/getOutStockOccupyTimeTips` | backend, miniapp, admin-v1, admin-v2 | POST, POST(default) | 7 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:1008 |
| `/b2b/order/new/getOrderInfoStatistics` | backend, admin-v2 | POST | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderNewController.java:108 |
| `/b2b/order/new/getReplenishmentOrderCount` | backend, admin-v2 | GET, POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderNewController.java:169 |
| `/b2b/order/outStockItems` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:1024 |
| `/b2b/product/outOfStock` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/ProductController.java:76 |
| `/b2b/product/stockInfo` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/ProductController.java:90 |
| `/b2b/substitute/batchUpdatePreStock` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderSubstituteController.java:182 |
| `/b2b/substitute/updatePreStock` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderSubstituteController.java:173 |
| `/b2b/whs/invoice/getOutStockConfirmWarehouseList` | backend, admin-v1 | ANY, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/B2bWarehouseInvoiceController.java:85 |
| `/config/b2b/booking/stockControlSetting` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:671 |
| `/config/inventory/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/InventoryController.java:98 |
| `/config/inventory/comp/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/InventoryController.java:82 |
| `/config/inventory/del` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/InventoryController.java:114 |
| `/config/inventory/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/InventoryController.java:52 |
| `/config/inventory/item/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/InventoryController.java:67 |
| `/config/inventory/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/InventoryController.java:37 |
| `/config/inventorySet/get` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/inventory/controller/InventorySetController.java:37 |
| `/config/inventorySet/rpc/getIsControlDealer` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/inventory/controller/InventorySetRpcController.java:27 |
| `/config/inventorySet/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/inventory/controller/InventorySetController.java:52 |
| `/config/sale/mall/stock/copy` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:961 |
| `/config/sys/group/config/getHideStockConfig` | backend, admin-v2 | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/SysGroupConfigController.java:80 |
| `/config/sys/group/config/getMiniHideStockConfig` | backend, miniapp | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/SysGroupConfigController.java:96 |
| `/config/sys/group/config/saveHideStockConfig` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/SysGroupConfigController.java:88 |
| `/file/b2b/itemReplenishment/item/export` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileItemReplenishmentController.java:30 |
| `/file/export/itemStockStatistics` | backend, admin-v1, admin-v2 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/ProductExportController.java:277 |
| `/file/export/mitembarcode/stock` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/mitem/controller/MitemBarcodeExportController.java:79 |
| `/file/export/stock` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/ProductExportController.java:155 |
| `/file/export/stock/barcodes` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/ProductExportController.java:184 |
| `/file/export/stock/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/ProductExportController.java:139 |
| `/file/logiWhsStockTransfer/import` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/warehouse/stockTransfer/LogiWhsStockTransferFileController.java:33 |
| `/file/order/exportOrder` | backend, admin-v1, admin-v2 | POST, POST(default) | 5 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileOrderController.java:30 |
| `/file/smartReplenishment/temp/import` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitem/controller/ItemStockController.java:36 |
| `/hr/sysCompany/queryCompanyRole/middleGround/page` | admin-v2 | POST | 1 | 仅单个前端证据 | semir-bmall-admin-v2/app/src/pages/supplyPurchaseStock/service/index.ts:77 |
| `/openapi/logiWhsStockTransfer/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:380 |
| `/openapi/logiWhsStockTransfer/cancel` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:395 |
| `/openapi/logiWhsStockTransfer/Posting` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:409 |
| `/openapi/product/stock/itemList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1414 |
| `/openapi/product/stock/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1183 |
| `/openapi/stock/update` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:917 |
| `/openapi/wms/initItemStockSellOut` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiWmsController.java:77 |
| `/openapi/wms/initSkcStockSellOut` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiWmsController.java:86 |
| `/openapi/wms/initSkuStockSellOut` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiWmsController.java:95 |
| `/openapi/wms/initStockSellOut` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiWmsController.java:103 |
| `/openapi/wms/stock/findByWhsCodeAndWhsId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiWmsController.java:44 |
| `/product/barcode/stock/barcodes` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemBarcode/controller/MitemBarcodeController.java:53 |
| `/product/barcode/stock/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemBarcode/controller/MitemBarcodeController.java:66 |
| `/product/bookingStock` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsV2Controller.java:146 |
| `/product/checkvouch/exceladd` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/stock/CheckVouchImportController.java:37 |
| `/product/export/stock` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2381 |
| `/product/inventory/band/exceladd` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/InventoryController.java:340 |
| `/product/inventory/delete` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/InventoryController.java:100 |
| `/product/inventory/get_itemstock_by_specids` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/InventoryController.java:458 |
| `/product/inventory/getImportTemplateUrl` | backend, admin-v1, admin-v2 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/InventoryController.java:239 |
| `/product/inventory/itemType/exceladd` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/InventoryController.java:320 |
| `/product/inventory/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/InventoryController.java:45 |
| `/product/inventory/mitemcomp/exceladd` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/InventoryController.java:435 |
| `/product/inventory/mitemType/exceladd` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/InventoryController.java:301 |
| `/product/inventory/orderGoodsTemplateSetting` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/InventoryController.java:83 |
| `/product/inventory/orderGoodsTemplateSettingInfo` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/InventoryController.java:92 |
| `/product/inventory/orderGoodsTemplateSettingList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/InventoryController.java:75 |
| `/product/inventory/originPlace/exceladd` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/InventoryController.java:359 |
| `/product/inventory/series/exceladd` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/InventoryController.java:378 |
| `/product/inventory/source/order/list` | backend | POST | 4 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/feign/ProductFeignClient.java:39 |
| `/product/inventory/stock/exceladd` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/InventoryController.java:416 |
| `/product/inventory/unit/exceladd` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/InventoryController.java:397 |
| `/product/inventory/upload` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/InventoryController.java:115 |
| `/product/inventory/upload2` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/InventoryController.java:252 |
| `/product/item/page/syncStockSellOut` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/MitemController.java:152 |
| `/product/item/stock/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:577 |
| `/product/itemStock/companyId/specId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ItemStockRpcController.java:47 |
| `/product/itemStock/specId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ItemStockRpcController.java:37 |
| `/product/itemStock/standard/itemIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ItemStockRpcController.java:57 |
| `/product/itemStock/statistics/page` | backend, admin-v1, admin-v2 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ItemStockRpcController.java:69 |
| `/product/itemStock/statistics/page/skc` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ItemStockRpcController.java:80 |
| `/product/itemStock/statistics/skc/size` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ItemStockRpcController.java:90 |
| `/product/mini/item/getLocalStockAndSales` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/mini/ProductsMiniController.java:56 |
| `/product/mini/item/getLocalStockAndSales?itemId=${data.itemId}` | miniapp | POST(default) | 1 | 仅单个前端证据 | semir-reabam-front/packageForProduct/services/productDetailApis.js:68 |
| `/product/mini/stock/shop/getSkcStockShopRate` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/mini/ProductStockShopController.java:30 |
| `/product/mItem/localStockSales/getLocalStockSalesOfSkuCodes` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/MItemLocalStockSalesController.java:32 |
| `/product/mitemComp/common/new/getExistStockApplySkcCode` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemComp/controller/MItemCompCommonNewController.java:134 |
| `/product/purchase/exceladd` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/stock/PurchaseImportController.java:53 |
| `/product/rpc/inventoryLimit/checkItemIsLimit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/inventory/controller/InventoryLimitRpcController.java:31 |
| `/product/stock` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:353 |
| `/product/stock/barcodes` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2032 |
| `/product/stock/costChanges` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2060 |
| `/product/stock/datail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2018 |
| `/product/stock/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2004 |
| `/product/stock/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:1990 |
| `/product/stock/savedatail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/product/controller/ProductsController.java:2046 |
| `/product/stock/total` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/stock/controller/StockController.java:31 |
| `/product/stock/unit/quantity` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/stock/controller/StockController.java:42 |
| `/product/whsin/exceladd` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/stock/WhsInImportController.java:44 |
| `/task/checkvouch/stockItemBatchStepCommit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-task/src/main/java/com/reabam/productNew/stock/CheckVouchController.java:27 |
| `/task/mitem/stockItemBatchStepCommit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-task/src/main/java/com/reabam/product/controller/MitemController.java:29 |
| `/task/mitemComp/stockItemBatchStepCommit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-task/src/main/java/com/reabam/product/controller/MItemCompController.java:30 |
| `/task/priceList/stockItemBatchStepCommit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-task/src/main/java/com/reabam/product/controller/PriceListController.java:32 |
| `/task/purchase/stockItemBatchStepCommit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-task/src/main/java/com/reabam/productNew/stock/PurchaseController.java:32 |
| `/task/purchaseReturn/stockItemBatchStepCommit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-task/src/main/java/com/reabam/productNew/stock/PurchaseController.java:42 |
| `/task/stock/mitemBarcode/stockItemBatchStepCommit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-task/src/main/java/com/reabam/product/controller/ItemStockController.java:58 |
| `/task/stock/smartReplenishment/temp/stockItemBatchStepCommit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-task/src/main/java/com/reabam/product/controller/ItemStockController.java:42 |
| `/task/whsIn/stockItemBatchStepCommit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-task/src/main/java/com/reabam/productNew/stock/WhsInController.java:27 |
| `/task/whsOut/stockItemBatchStepCommit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-task/src/main/java/com/reabam/productNew/stock/WhsOutController.java:27 |
| `/warehouse/itemstock/findGeneralItemStock` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/stock/controller/ItemStockController.java:39 |
| `/warehouse/itemstock/findStoreItemStock` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/stock/controller/ItemStockController.java:32 |
| `/warehouse/logiWhsBatchItemStatusStock/queryBatchItemStatusStock` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2272 |
| `/warehouse/logiWhsStockShipment/transport` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2657 |
| `/warehouse/mini/itemstock/findGeneralItemStock` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/stock/controller/mini/MiniItemStockController.java:32 |
| `/warehouse/mini/itemstock/findItemStockForMini` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/stock/controller/mini/MiniItemStockController.java:40 |
| `/warehouse/mWhs/getInMainWhsStockItemIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/MWhsController.java:103 |
| `/warehouse/mWhs/getMainWhsStockByItemIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/MWhsController.java:38 |
| `/warehouse/mWhs/getMainWhsStockByItemIdsNoLogin` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/MWhsController.java:47 |
| `/warehouse/mWhs/getMainWhsStockBySkcCodes` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/MWhsController.java:56 |
| `/warehouse/mWhs/getMainWhsStockBySkuCodes` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/MWhsController.java:74 |
| `/warehouse/mWhs/getMainWhsStockBySpecIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/MWhsController.java:65 |
| `/warehouse/mWhs/getPreWhsStockBySpecIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/MWhsController.java:83 |
| `/warehouse/sellOut/sync/allStockSellout` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/SellOutController.java:70 |
| `/warehouse/sellOut/sync/allStockSellout/withAsyncRecord` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/SellOutController.java:82 |
| `/warehouse/sellOut/sync/preStockSellout` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/SellOutController.java:52 |
| `/warehouse/sellOut/sync/stockSellout` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/SellOutController.java:43 |
| `/warehouse/sellOut/sync/updateAllStockShortInSize` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/SellOutController.java:120 |
| `/warehouse/sellOut/sync/updatePreStockShortInSize` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/SellOutController.java:102 |
| `/warehouse/sellOut/sync/updateStockShortInSize` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/SellOutController.java:93 |

### 新店订单 (new-store-order)

| 归一化路径 | 仓库 | 方法 | 出现次数 | 覆盖 | 首个证据 |
| --- | --- | --- | --- | --- | --- |
| `/b2b/newStoreOrder/batch/market` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:327 |
| `/b2b/newStoreOrder/batch/update/orderStatus` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:302 |
| `/b2b/newStoreOrder/batch/update/realityCompany` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:314 |
| `/b2b/newStoreOrder/detail/base` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:268 |
| `/b2b/newStoreOrder/detail/main` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:259 |
| `/b2b/newStoreOrder/detail/sku/gather` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:284 |
| `/b2b/newStoreOrder/detail/sku/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:276 |
| `/b2b/newStoreOrder/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:235 |
| `/b2b/newStoreOrder/detailEdit/package` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:251 |
| `/b2b/newStoreOrder/detailEdit/sku` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:243 |
| `/b2b/newStoreOrder/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:370 |
| `/b2b/newStoreOrder/mini/detail` | backend, miniapp | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/mini/NewStoreOrderMiniController.java:84 |
| `/b2b/newStoreOrder/mini/item/detail` | backend, miniapp | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/mini/NewStoreOrderMiniController.java:92 |
| `/b2b/newStoreOrder/mini/item/orderConfirm` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/mini/NewStoreOrderMiniController.java:116 |
| `/b2b/newStoreOrder/mini/item/orderConfirm/batchNo` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/mini/NewStoreOrderMiniController.java:124 |
| `/b2b/newStoreOrder/mini/orderConfirm` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/mini/NewStoreOrderMiniController.java:132 |
| `/b2b/newStoreOrder/mini/orderConfirmDetail` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/mini/NewStoreOrderMiniController.java:168 |
| `/b2b/newStoreOrder/mini/pageList` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/mini/NewStoreOrderMiniController.java:62 |
| `/b2b/newStoreOrder/mini/pick/b2bOrder/add` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/mini/NewStoreOrderMiniController.java:153 |
| `/b2b/newStoreOrder/mini/pick/orderPreCheck` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/mini/NewStoreOrderMiniController.java:141 |
| `/b2b/newStoreOrder/mini/relation/order` | backend, miniapp | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/mini/NewStoreOrderMiniController.java:100 |
| `/b2b/newStoreOrder/mini/updateStoreOrderCompany` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/mini/NewStoreOrderMiniController.java:108 |
| `/b2b/newStoreOrder/package/skuList` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:176 |
| `/b2b/newStoreOrder/page` | backend, admin-v2 | POST | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:196 |
| `/b2b/newStoreOrder/page/stat` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:205 |
| `/b2b/newStoreOrder/pick/b2bOrder/add` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:122 |
| `/b2b/newStoreOrder/pick/getItemList` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:105 |
| `/b2b/newStoreOrder/pick/getItemList/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:113 |
| `/b2b/newStoreOrder/pick/orderInfo` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:97 |
| `/b2b/newStoreOrder/pick/orderPreCheck` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:133 |
| `/b2b/newStoreOrder/recountByOrderNo` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:409 |
| `/b2b/newStoreOrder/save/byItem` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:141 |
| `/b2b/newStoreOrder/save/byPackage` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:164 |
| `/b2b/newStoreOrder/stat/batch/market/count` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:352 |
| `/b2b/newStoreOrder/stat/update/orderStatus/count` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:344 |
| `/b2b/newStoreOrder/update/byItem` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:154 |
| `/b2b/newStoreOrder/update/byPackage` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:185 |
| `/b2b/newStoreOrder/updateOfB2bOrder` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:379 |
| `/b2b/newStoreOrder/updateOfCancelB2bOrder` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:389 |
| `/b2b/newStoreOrder/updateOfOutStockB2bOrder` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:398 |
| `/b2b/newStoreOrder/updateOrder/batchNo` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:443 |
| `/b2b/newStoreOrder/updateOrder/batchNo/preCheck` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderController.java:435 |
| `/b2b/newStoreOrderRel/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderRelController.java:31 |
| `/b2b/newStoreOrderSkc/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderSkcController.java:45 |
| `/b2b/newStoreOrderSkc/report/item/listSku/bySkcCode` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderSkcController.java:69 |
| `/b2b/newStoreOrderSkc/report/item/relationModelPage` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderSkcController.java:77 |
| `/b2b/newStoreOrderSkc/report/item/relationOrderPage` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderSkcController.java:88 |
| `/b2b/newStoreOrderSkc/report/item/skc/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderSkcController.java:53 |
| `/b2b/newStoreOrderSkc/report/item/statistics` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderSkcController.java:61 |
| `/b2b/newStoreOrderSku/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderSkuController.java:37 |
| `/b2b/newStoreOrderSku/report/sku/forExport` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderSkuController.java:45 |
| `/b2b/newStoreOrderSpu/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderSpuController.java:50 |
| `/b2b/newStoreOrderSpu/report/distributor/companyList` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderSpuController.java:98 |
| `/b2b/newStoreOrderSpu/report/distributor/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderSpuController.java:74 |
| `/b2b/newStoreOrderSpu/report/distributor/page/especially/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderSpuController.java:115 |
| `/b2b/newStoreOrderSpu/report/distributor/page/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderSpuController.java:82 |
| `/b2b/newStoreOrderSpu/report/distributor/relationModelPage` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderSpuController.java:106 |
| `/b2b/newStoreOrderSpu/report/distributor/statistics` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderSpuController.java:90 |
| `/b2b/newStoreOrderSpu/report/model/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderSpuController.java:58 |
| `/b2b/newStoreOrderSpu/report/model/page/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/NewStoreOrderSpuController.java:66 |
| `/file/b2b/newStoreOrder/exportById` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileNewStoreOrderController.java:58 |
| `/file/b2b/newStoreOrder/getNewOrderPackageImportUrl` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileNewStoreOrderController.java:152 |
| `/file/b2b/newStoreOrder/getNewOrderPackageImportUrl?modelId=${data.modelId}` | admin-v2 | POST | 1 | 仅单个前端证据 | semir-bmall-admin-v2/app/src/pages/newStoreOrders/service/packageOrder.ts:152 |
| `/file/b2b/newStoreOrder/import/update/company` | admin-v2 | POST | 1 | 仅单个前端证据 | semir-bmall-admin-v2/app/src/pages/newStoreOrders/service/index.ts:78 |
| `/file/b2b/newStoreOrder/multi/store/import/goods` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileNewStoreOrderController.java:123 |
| `/file/b2b/newStoreOrder/multi/store/import/package` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileNewStoreOrderController.java:138 |
| `/file/b2b/newStoreOrder/page/export` | admin-v2 | POST | 2 | 仅单个前端证据 | semir-bmall-admin-v2/app/src/pages/newStoreOrders/service/index.ts:34 |
| `/file/b2b/newStoreOrder/pick/getItemList/export` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileNewStoreOrderController.java:161 |
| `/file/b2b/newStoreOrder/report/relationOrderPage/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileNewStoreOrderController.java:97 |
| `/file/b2b/newStoreOrder/update/company/list/export` | admin-v2 | POST | 1 | 仅单个前端证据 | semir-bmall-admin-v2/app/src/pages/newStoreOrders/service/index.ts:98 |
| `/file/b2b/newStoreOrder/update/marketStatus/fail/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileNewStoreOrderController.java:105 |
| `/file/b2b/newStoreOrderSpu/report/distributor/page/export` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileNewStoreOrderSpuController.java:38 |
| `/file/b2b/newStoreOrderSpu/report/model/page/export` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileNewStoreOrderSpuController.java:30 |
| `/file/directSupplyPackage/exportCurrentPackageItem` | backend, admin-v2 | POST | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileDirectSupplyPackageController.java:67 |
| `/file/newStoreOrderSku/report/sku/export` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileNewStoreOrderSkuController.java:29 |
| `/hr/sysCompany/queryCompanyListByOrgId` | admin-v2 | POST | 1 | 仅单个前端证据 | semir-bmall-admin-v2/app/src/pages/newStoreOrders/service/common.ts:62 |
| `/warehouse/mWhs/getNewStoreWhsStockBySpecIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/MWhsController.java:92 |
| `/warehouse/sellOut/sync/newStoreStock` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/SellOutController.java:61 |
| `/warehouse/sellOut/sync/updateNewStoreStockShortInSize` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/SellOutController.java:111 |

### 待审核单 (pending-review-order)

| 归一化路径 | 仓库 | 方法 | 出现次数 | 覆盖 | 首个证据 |
| --- | --- | --- | --- | --- | --- |
| `/b2b/pendingReviewOrder/addPendingOrder` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/PendingReviewOrderController.java:88 |
| `/b2b/pendingReviewOrder/bathSubmitPendingOrder` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/PendingReviewOrderController.java:117 |
| `/b2b/pendingReviewOrder/calculateOrderAmount` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/PendingReviewOrderController.java:140 |
| `/b2b/pendingReviewOrder/calculateThePriceOfCompanyChanges` | backend, admin-v2 | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/PendingReviewOrderController.java:76 |
| `/b2b/pendingReviewOrder/checkPendingReviewOrder` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/PendingReviewOrderController.java:68 |
| `/b2b/pendingReviewOrder/getOrderPageList` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/PendingReviewOrderController.java:42 |
| `/b2b/pendingReviewOrder/mini/cancel` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/mini/PendingReviewOrderMiniController.java:44 |
| `/b2b/pendingReviewOrder/mini/detail` | backend, miniapp | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/mini/PendingReviewOrderMiniController.java:52 |
| `/b2b/pendingReviewOrder/mini/itemDetail/confirmOrder` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/mini/PendingReviewOrderMiniController.java:109 |
| `/b2b/pendingReviewOrder/mini/itemDetail/confirmOrder/preCheck` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/mini/PendingReviewOrderMiniController.java:117 |
| `/b2b/pendingReviewOrder/mini/itemDetail/confirmOrder/submit` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/mini/PendingReviewOrderMiniController.java:125 |
| `/b2b/pendingReviewOrder/mini/orderSourceType/check` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/mini/PendingReviewOrderMiniController.java:81 |
| `/b2b/pendingReviewOrder/mini/pendingOrder/items` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/mini/PendingReviewOrderMiniController.java:89 |
| `/b2b/pendingReviewOrder/mini/submit` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/mini/PendingReviewOrderMiniController.java:60 |
| `/b2b/pendingReviewOrder/mini/submitPass` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/mini/PendingReviewOrderMiniController.java:69 |
| `/b2b/pendingReviewOrder/mini/updatePendingOrderItems` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/mini/PendingReviewOrderMiniController.java:97 |
| `/b2b/pendingReviewOrder/noPassPendingReviewOrder` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/PendingReviewOrderController.java:59 |
| `/b2b/pendingReviewOrder/order/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/PendingReviewOrderController.java:51 |
| `/b2b/pendingReviewOrder/pendingOrderPriceStatistics` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/PendingReviewOrderController.java:109 |
| `/b2b/pendingReviewOrder/submitPendingOrder` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/PendingReviewOrderController.java:97 |
| `/b2b/pendingReviewOrderSku/{id}` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/PendingReviewOrderSkuController.java:36 |
| `/b2b/pendingReviewOrderSku/getPendingReviewOrderSku` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/PendingReviewOrderSkuController.java:44 |
| `/b2b/pendingReviewOrderSuit/{id}` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/PendingReviewOrderSuitController.java:31 |
| `/file/b2b/pendingReviewOrder/pendingReviewOrderFailExport` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FilePendingReviewOrderController.java:31 |

### 报表/导出 (report-export)

| 归一化路径 | 仓库 | 方法 | 出现次数 | 覆盖 | 首个证据 |
| --- | --- | --- | --- | --- | --- |
| `/activity/liveChannels/activity/commodity/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:330 |
| `/activity/liveChannels/label/store/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:139 |
| `/activity/liveChannels/store/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:121 |
| `/activity/liveChannelsSkcs/getLiveSkcCargoListExport` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsSkcsController.java:110 |
| `/activity/liveChannelsSkcs/pageExport` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsSkcsController.java:57 |
| `/activity/liveChannelsSkus/getLiveSkuCargoListExport` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsSkusController.java:45 |
| `/b2b/billmaterials/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/billmaterials/controller/BillmaterialsExportController.java:29 |
| `/b2b/billmoney/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/BillMoneyController.java:185 |
| `/b2b/Db2bOrderBill/rpc/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/db2borderbill/Db2borderBillRpcController.java:47 |
| `/b2b/intellectAiOrder/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/IntellectAiOrderController.java:132 |
| `/b2b/itemReplenishment/skc/pageExport` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ItemReplenishmentController.java:60 |
| `/b2b/itemReplenishment/skc/pageExportSizeList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ItemReplenishmentController.java:52 |
| `/b2b/itemReplenishment/sku/pageExport` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/ItemReplenishmentController.java:44 |
| `/b2b/itemreport/report` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/ItemReportController.java:33 |
| `/b2b/need/getExport` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/NeedOrderController.java:253 |
| `/b2b/need/getExportShow` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/NeedOrderController.java:240 |
| `/b2b/order/limit/product/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/limit/set/controller/B2BOrderLimitProductController.java:98 |
| `/b2b/order/limit/product/multipleCompanyExport` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/limit/set/controller/B2BOrderLimitProductController.java:111 |
| `/b2b/order/new/getOrderExportPageList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderNewController.java:68 |
| `/b2b/order/new/getOrderInvoiceExportPageList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderNewController.java:84 |
| `/b2b/order/new/getOrderItemExportPageList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderNewController.java:76 |
| `/b2b/supplier/product/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/supplier/product/controller/ProductOfSupplierController.java:100 |
| `/b2b/supplier/reportList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/SupplierController.java:57 |
| `/b2b/supplierBill/rpc/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/supplierBill/controller/SupplierBillRpcController.java:46 |
| `/config/checkvouch/diffset/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/checkvouchset/controller/CheckVouchDiffSetController.java:92 |
| `/config/mitemSpecTypeData/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/product/specdata/controller/MitemSpecDataController.java:148 |
| `/config/mitemWorkshop/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/itemWorkshop/controller/MitemWorkshopController.java:114 |
| `/config/packingCharge/export` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1621 |
| `/config/product/costset/item/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/product/costset/controller/ProductCostSetController.java:80 |
| `/config/purchaseLimit/export` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1660 |
| `/config/supplier/item/comp/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/item/SupplierItemController.java:157 |
| `/file/activity/orderModel/orderModelActivityExcel` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/orderModel/controller/FileOrderModelController.java:56 |
| `/file/activity/orderModel/orderModelCompanyExcel` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/orderModel/controller/FileOrderModelController.java:36 |
| `/file/activity/orderModel/orderModelPreviewCompanyExcel` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/orderModel/controller/FileOrderModelController.java:97 |
| `/file/activity/orderModel/orderModelRuleExcel` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/orderModel/controller/FileOrderModelController.java:88 |
| `/file/activity/orderModel/orderModelRuleImport` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/orderModel/controller/FileOrderModelController.java:77 |
| `/file/activity/orderModel/orderModelRuleItemExcel` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/orderModel/controller/FileOrderModelController.java:67 |
| `/file/activity/orderRule/exportChoiceOrderRuleItem` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/orderRule/controller/FileOrderRuleController.java:45 |
| `/file/activity/orderRule/exportOrderRuleItem` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/orderRule/controller/FileOrderRuleController.java:36 |
| `/file/activity/presale/commodity/import` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/PresaleController.java:61 |
| `/file/activity/presale/getPresalePackageImportUrl` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/PresaleController.java:123 |
| `/file/activity/presale/getPresalePackageImportUrl?modelId=${data.modelId}` | admin-v2 | POST | 1 | 仅单个前端证据 | semir-bmall-admin-v2/app/src/pages/midPackageOrder/service/packageOrder.ts:150 |
| `/file/activity/presale/multi/store/import/package` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/PresaleController.java:131 |
| `/file/activity/presale/multi/store/order/import` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/PresaleController.java:90 |
| `/file/activity/presale/skcInfo/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/PresaleController.java:149 |
| `/file/activity/presale/syncSapResult/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/activity/presale/controller/PresaleController.java:50 |
| `/file/activity/salesPromotion/packageDetailExport` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/FileSalesPromotionController.java:26 |
| `/file/activity/scratchCard/record/export` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:83 |
| `/file/area/get` | backend, admin-v1 | POST, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/hr/controller/SysAreaController.java:35 |
| `/file/area/getStr` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/hr/controller/SysAreaController.java:45 |
| `/file/asyn/export/b2b/clear` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/B2bAsynExportController.java:38 |
| `/file/asyn/export/b2b/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/B2bAsynExportController.java:25 |
| `/file/asyn/export/b2b/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/B2bAsynExportController.java:32 |
| `/file/async/export/addOrUpdateExportRecord` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileAsyncExportController.java:43 |
| `/file/async/export/done` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileAsyncExportController.java:60 |
| `/file/async/export/exportAndUpdateRecord` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileAsyncExportController.java:90 |
| `/file/async/export/fail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileAsyncExportController.java:69 |
| `/file/async/export/file/async/export/exportAndCreateRecord` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileAsyncExportController.java:127 |
| `/file/async/export/process` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileAsyncExportController.java:80 |
| `/file/async/export/save` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileAsyncExportController.java:52 |
| `/file/async/export/syncExportByDataList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileAsyncExportController.java:165 |
| `/file/attachment/replace` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/attachment/controller/AttachmentController.java:24 |
| `/file/b2b/difference/order/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/difference/send/controller/B2bDifferenceOrderFileController.java:24 |
| `/file/b2b/freight/special/product/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/freight/B2bFreightController.java:57 |
| `/file/b2b/funds/custom/account/amount/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/funds/account/custom/controller/CustomAccountAmountImportController.java:28 |
| `/file/b2b/funds/export` | backend | ANY | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/funds/account/company/controller/CompanyAccountAmountExportController.java:32 |
| `/file/b2b/funds/multi/companies/account/amount/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/funds/account/company/controller/CompanyAccountAmountImportController.java:46 |
| `/file/b2b/funds/multi/companies/account/amount/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/funds/account/company/controller/CompanyAccountAmountImportController.java:38 |
| `/file/b2b/funds/multi/companies/custom/account/amount/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/funds/account/custom/controller/CustomAccountAmountImportController.java:36 |
| `/file/b2b/invoice/exportAllInvoiceDetails` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/order/controller/B2bWhsInvoiceFileController.java:38 |
| `/file/b2b/invoice/exportInvoiceDetail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/order/controller/B2bWhsInvoiceFileController.java:30 |
| `/file/b2b/item/leadTime/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/leadtime/controller/B2BItemLeadTimeSetImportController.java:29 |
| `/file/b2b/item/leadTime/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/leadtime/controller/B2BItemLeadTimeSetImportController.java:24 |
| `/file/b2b/item/list/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitem/controller/B2bItemExportController.java:26 |
| `/file/b2b/item/logisticsProvider/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/logisticsItem/controller/B2BItemLogisticsProviderImportController.java:33 |
| `/file/b2b/item/vehicle/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/config/vehicle/controller/VehicleImportController.java:31 |
| `/file/b2b/item/vehicle/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/config/vehicle/controller/VehicleImportController.java:26 |
| `/file/b2b/linePlan/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/lineplan/controller/B2BOrderLinePlanImportController.java:21 |
| `/file/b2b/multiStore/order/list/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/multiStoreOrder/controller/MultiStoreOrderController.java:22 |
| `/file/b2b/multiStore/order/splitOrder/export` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/multiStoreOrder/controller/MultiStoreOrderController.java:35 |
| `/file/b2b/need/order/type/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/need/controller/NeedOrderTypeTemplateExportController.java:34 |
| `/file/b2b/order/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/order/controller/B2bOrderController.java:73 |
| `/file/b2b/order/item/adjust/qty/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/order/controller/OrderItemFileController.java:39 |
| `/file/b2b/order/item/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/order/controller/OrderItemFileController.java:30 |
| `/file/b2b/receive/difference/order/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/difference/receive/controller/B2bReceiveDifferenceOrderFileController.java:24 |
| `/file/b2b/receive/difference/order/item/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/difference/receive/controller/B2bReceiveDifferenceOrderFileController.java:32 |
| `/file/b2b/supplier/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/supplier/controller/SupplierController.java:32 |
| `/file/b2bOrder/batch/delivery/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/order/controller/B2bOrderController.java:85 |
| `/file/b2bOrder/batch/delivery/import/result` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/order/controller/B2bOrderController.java:99 |
| `/file/b2bOrder/deliveryList/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/order/controller/B2bOrderController.java:48 |
| `/file/b2bOrder/deliveryList/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/order/controller/B2bOrderController.java:59 |
| `/file/b2bOrder/export/mutiOrderGoods` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/order/controller/B2bOrderController.java:117 |
| `/file/batchConversion/export` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2796 |
| `/file/batchConversion/importItem` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2795 |
| `/file/bondedWarehouseSet/export` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2240 |
| `/file/bondedWarehouseSet/import` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2239 |
| `/file/brandSalesman/import` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/brandsalesman/BrandSalesmanV2Controller.java:43 |
| `/file/checkvouch/itemRecord/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/product/dcheckvouch/checkvouchItemRecord/DcheckvouchItemRecordController.java:28 |
| `/file/config/rebateReward/export` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:93 |
| `/file/customization/business/obj/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/config/customizebusiness/CustomizeBusinessController.java:42 |
| `/file/customization/business/obj/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/config/customizebusiness/CustomizeBusinessController.java:32 |
| `/file/Db2bOrderBill/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/order/controller/Db2bOrderBillExportController.java:44 |
| `/file/diffOrder/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/product/difforder/DiffOrderExportController.java:24 |
| `/file/directSupplyModel/attrImport` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/product/directsupplymodel/controller/DirectSupplyModelExportController.java:39 |
| `/file/directSupplyModel/getImportTemplateUrl` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/product/directsupplymodel/controller/DirectSupplyModelExportController.java:81 |
| `/file/directSupplyModel/itemExport` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/product/directsupplymodel/controller/DirectSupplyModelExportController.java:70 |
| `/file/directSupplyModel/itemImport` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/product/directsupplymodel/controller/DirectSupplyModelExportController.java:53 |
| `/file/directSupplyPackage/exportCurrentItem` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileDirectSupplyPackageController.java:76 |
| `/file/directSupplyPackage/exportPackage` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileDirectSupplyPackageController.java:38 |
| `/file/directSupplyPackage/exportPackageItem` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileDirectSupplyPackageController.java:47 |
| `/file/directSupplyPackage/importItem` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileDirectSupplyPackageController.java:56 |
| `/file/dock/product/mapping/sync/export` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2300 |
| `/file/export/aftersale/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/ProductExportController.java:268 |
| `/file/export/b2b/billmaterials/itemList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/B2bExportController.java:179 |
| `/file/export/b2b/coupon/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/B2bExportController.java:241 |
| `/file/export/b2b/exchange` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/B2bExportController.java:64 |
| `/file/export/b2b/invoice/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/B2bExportController.java:87 |
| `/file/export/b2b/moa/items` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/B2bExportController.java:219 |
| `/file/export/b2b/moq/items` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/B2bExportController.java:205 |
| `/file/export/b2b/order` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/B2bExportController.java:192 |
| `/file/export/b2b/order/stat/download` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/b2bstat/controller/FileB2bOrderDailyStatContoller.java:28 |
| `/file/export/b2b/quote/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/B2bExportController.java:99 |
| `/file/export/b2b/reserveProduct` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/B2bExportController.java:113 |
| `/file/export/b2b/retailReserveProduct` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/B2bExportController.java:153 |
| `/file/export/b2b/suppliercomp/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/B2bExportController.java:77 |
| `/file/export/bookingRecords` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/ProductExportController.java:216 |
| `/file/export/checkvouch/execl` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/ProductExportController.java:124 |
| `/file/export/config/orderCompGroup` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2024 |
| `/file/export/config/product/label/group/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/ConfigExportController.java:50 |
| `/file/export/config/product/label/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/ConfigExportController.java:59 |
| `/file/export/config/rebates_reward` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:754 |
| `/file/export/config/redoubled` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1346 |
| `/file/export/config/supplier/direct/delivery/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/ConfigExportController.java:68 |
| `/file/export/costRevaluation` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/product/costrevaluation/controller/CostRevaluationExportController.java:31 |
| `/file/export/coupon/member/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2464 |
| `/file/export/coupon/qrcode` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1884 |
| `/file/export/dailyStatement` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2484 |
| `/file/export/dallotOrder/execl` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2406 |
| `/file/export/dallotOrder/send/execl` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/ProductExportController.java:109 |
| `/file/export/dealer/item/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/ConfigExportController.java:40 |
| `/file/export/delivery` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2426 |
| `/file/export/detailtask/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/HrExportController.java:123 |
| `/file/export/dispatch` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/HrExportController.java:97 |
| `/file/export/distributor` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/HrExportController.java:74 |
| `/file/export/distributorFund` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/HrExportController.java:85 |
| `/file/export/doc/barcodes` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/ProductExportController.java:171 |
| `/file/export/dorderhq/batch/items` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:700 |
| `/file/export/dsuggestion/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2466 |
| `/file/export/entitycard` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2430 |
| `/file/export/export/mitemSeries` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/mitem/controller/MitemExportController.java:114 |
| `/file/export/export/mitemUnit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/mitem/controller/MitemExportController.java:128 |
| `/file/export/export/productOrgin` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/mitem/controller/MitemExportController.java:100 |
| `/file/export/file/v1/industryAttr/item/action/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/ConfigExportController.java:79 |
| `/file/export/finance/cost/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2468 |
| `/file/export/guides` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/HrExportController.java:211 |
| `/file/export/invoiceHeaderr` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/HrExportController.java:186 |
| `/file/export/item/qrcode` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/ProductExportController.java:248 |
| `/file/export/itembarcode/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/ProductExportController.java:232 |
| `/file/export/itemFromReq` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/ProductExportController.java:299 |
| `/file/export/items/size/config/exportList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/mitem/controller/MItemSizeConfigExportController.java:34 |
| `/file/export/itemSalesStatistics` | backend, admin-v1, admin-v2 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/ProductExportController.java:286 |
| `/file/export/itemType` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/mitem/controller/MitemExportController.java:72 |
| `/file/export/kpirule` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/HrExportController.java:62 |
| `/file/export/location` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/HrExportController.java:173 |
| `/file/export/marketingsms/plan/members` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2456 |
| `/file/export/mem/marketingsms/plan/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2444 |
| `/file/export/mem/marketingsms/planRecord/detail` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2448 |
| `/file/export/mem/marketingsms/planRecord/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2446 |
| `/file/export/mem/marketingsms/template/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2442 |
| `/file/export/member` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:821 |
| `/file/export/member_spokesman/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2462 |
| `/file/export/member/booking/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2470 |
| `/file/export/mitem` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/mitem/controller/MitemExportController.java:48 |
| `/file/export/mitembarcode` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/mitem/controller/MitemBarcodeExportController.java:58 |
| `/file/export/mitemBrand` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/mitem/controller/MitemExportController.java:86 |
| `/file/export/mitemSeries` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2012 |
| `/file/export/mitemUnit` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2000 |
| `/file/export/offline/limit` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:33 |
| `/file/export/order` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2418 |
| `/file/export/pay_qrcoder` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2022 |
| `/file/export/priceControls/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/PriceControlsExportController.java:36 |
| `/file/export/productOrgin` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2010 |
| `/file/export/qrcodeorder` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1166 |
| `/file/export/RecItems` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/ProductExportController.java:63 |
| `/file/export/recycle/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/ProductExportController.java:255 |
| `/file/export/refund` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2422 |
| `/file/export/regNoticeItem` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/HrExportController.java:199 |
| `/file/export/report/saleAnalysis/order` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2489 |
| `/file/export/report/saleAnalysis/product` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2472 |
| `/file/export/settlement/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/HrExportController.java:162 |
| `/file/export/show/members` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2458 |
| `/file/export/splitRuleApplyExtend` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/FinanceExportController.java:43 |
| `/file/export/staffCompQrcode` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2454 |
| `/file/export/stored/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2300 |
| `/file/export/sysGroup` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/HrExportController.java:46 |
| `/file/export/task/clearAlreadyFinishFileExportTask` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/task/FileExportTaskController.java:54 |
| `/file/export/task/downloadTaskFile` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/task/FileExportTaskController.java:43 |
| `/file/export/task/findReportExportTaskByUser` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/task/FileExportTaskController.java:31 |
| `/file/export/task/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/HrExportController.java:110 |
| `/file/export/task/removeFileExportTask` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/task/FileExportTaskController.java:66 |
| `/file/export/taskdetail/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/HrExportController.java:149 |
| `/file/export/taskstaff/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/HrExportController.java:136 |
| `/file/export/template` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/ProductExportController.java:201 |
| `/file/export/ticket/packages/qrcode` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:334 |
| `/file/export/unit_group` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/ProductExportController.java:49 |
| `/file/export/whsin/execl` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/ProductExportController.java:76 |
| `/file/export/whsOut/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/ProductExportController.java:91 |
| `/file/export/whsOut/picking/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/ProductExportController.java:101 |
| `/file/export/wx/smallstore/detail` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2701 |
| `/file/export/wx/smallstore/order` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2700 |
| `/file/finance/card/export/distributor/finance/card` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/member/FileExportFinanceCardController.java:88 |
| `/file/finance/card/export/distributor/flow` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/member/FileExportFinanceCardController.java:56 |
| `/file/finance/card/export/distributor/flow/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/member/FileExportFinanceCardController.java:66 |
| `/file/finance/card/export/distributor/record` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/member/FileExportFinanceCardController.java:77 |
| `/file/finance/card/export/flow` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/member/FileExportFinanceCardController.java:46 |
| `/file/finance/card/export/package/item` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/member/FileExportFinanceCardController.java:36 |
| `/file/finance/card/import/adjust` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/member/FileImportFinanceCardController.java:38 |
| `/file/freightset/special/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/FreightSetController.java:45 |
| `/file/hr/acctDetailExport` | backend, admin-v1 | ANY, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/hr/controller/SysstaffTlAccountController.java:51 |
| `/file/hr/bankaccount/yunst/queryInExpDetail/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/hr/controller/BankAccountManageController.java:48 |
| `/file/hr/createAntiCounterfeitingQrCode` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/hr/controller/AntiCounterfeitingCodeFileController.java:81 |
| `/file/hr/distributor/v2/page/export` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileDistributorNewController.java:32 |
| `/file/hr/exportAntiCounterfeitingCode` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/hr/controller/AntiCounterfeitingCodeFileController.java:57 |
| `/file/hr/exportAntiCounterfeitingQrCode` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/hr/controller/AntiCounterfeitingCodeFileController.java:69 |
| `/file/hr/exportMissionObjectivesItem` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/hr/controller/MissionObjectivesFileController.java:48 |
| `/file/hr/exportUserArchives` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/hr/controller/SysstaffController.java:103 |
| `/file/hr/fddContractSigningRecord/exportFddContractZip` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2296 |
| `/file/hr/grantGenerateVoucherExport` | backend | ANY | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/hr/controller/SysstaffTlAccountController.java:65 |
| `/file/hr/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/hr/controller/SysstaffController.java:91 |
| `/file/hr/importAntiCounterfeitingCode` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/hr/controller/AntiCounterfeitingCodeFileController.java:42 |
| `/file/hr/importMissionObjectivesItem` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/hr/controller/MissionObjectivesFileController.java:30 |
| `/file/hr/importStaffLogiWhsStor` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/hr/controller/SysstaffController.java:80 |
| `/file/hr/importUser` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/hr/controller/SysstaffController.java:65 |
| `/file/hr/incomeRecordExport` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/hr/controller/TaskReceiveFileController.java:34 |
| `/file/hr/kpirule/v2/repeat/items/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/hr/controller/KpiController.java:48 |
| `/file/hr/lkImgExport` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/hr/controller/SysstaffController.java:53 |
| `/file/hr/partnershipAgreementExport` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/hr/controller/PartnershipAgreementFileController.java:36 |
| `/file/hr/settlementManageExport` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/hr/controller/SettlementManageFileController.java:36 |
| `/file/hr/syscompany/v2/page/export` | admin-v2 | POST | 1 | 仅单个前端证据 | semir-bmall-admin-v2/app/src/pages/storeFiles/service/index.ts:37 |
| `/file/hr/taskManageExport` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2503 |
| `/file/hr/tlAccountExport` | backend, admin-v1 | ANY, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/hr/controller/SysstaffTlAccountController.java:36 |
| `/file/http/post` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/http/CommonController.java:20 |
| `/file/iamUser/page/export` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileIamUserController.java:28 |
| `/file/import/{name}` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportV2Controller.java:72 |
| `/file/import/band/exceladd` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:136 |
| `/file/import/batchChangePrice/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:1043 |
| `/file/import/checkvouch/exceladd` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:546 |
| `/file/import/common/product/brand/rate` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/CommonImportController.java:38 |
| `/file/import/common/product/type/rate` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/CommonImportController.java:51 |
| `/file/import/comp/excelAdd` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:238 |
| `/file/import/comp/excelUpdate` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:285 |
| `/file/import/companySet/excelAdd` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:305 |
| `/file/import/config/deliveryscope` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2093 |
| `/file/import/costRevaluation` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/product/costrevaluation/controller/CostRevaluationImportController.java:31 |
| `/file/import/dallot/add/exceladd` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:687 |
| `/file/import/dallot/send/exceladd` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:668 |
| `/file/import/dealersettlement` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2049 |
| `/file/import/express` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ExpressImportController.java:50 |
| `/file/import/express/exceladd` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:647 |
| `/file/import/hr/authen` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:706 |
| `/file/import/hr/distributor` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:926 |
| `/file/import/hr/operate` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:731 |
| `/file/import/invoiceHeaderr` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/InvoiceHeaderrController.java:41 |
| `/file/import/location/exceladd` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:788 |
| `/file/import/offline/limit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:1033 |
| `/file/import/originPlace/exceladd` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:155 |
| `/file/import/purchase/exceladd` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:506 |
| `/file/import/purchaseReturn/exceladd` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:526 |
| `/file/import/RecItems` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:97 |
| `/file/import/series/exceladd` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:174 |
| `/file/import/settlement/exceladd` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:908 |
| `/file/import/staff/exceladd` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:770 |
| `/file/import/supplier/direct/delivery` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:1007 |
| `/file/import/supplier/excelAdd` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:214 |
| `/file/import/suppliercomp/excelAdd` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:352 |
| `/file/import/taskdispatch/exceladd` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:842 |
| `/file/import/taskinspected/exceladd` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:864 |
| `/file/import/tasklocation/exceladd` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:806 |
| `/file/import/taskManage/exceladd` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:824 |
| `/file/import/tasksettlement/exceladd` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:886 |
| `/file/import/unit_group` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:79 |
| `/file/import/unit/exceladd` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:193 |
| `/file/import/whsIn/exceladd` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:485 |
| `/file/import/whsOut/exceladd` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ImportController.java:465 |
| `/file/inStoreMachining/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/mitem/controller/InStoreMachiningExportController.java:43 |
| `/file/insurance/correct/importCorrectApplyDetail` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2814 |
| `/file/insurance/manage/exportInsuranceDetail` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2807 |
| `/file/insurance/manage/importInsuranceDetail` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2806 |
| `/file/intellectAiOrder/export` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileIntellectAiOrderController.java:26 |
| `/file/intelligencedistribution/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/intelligencedistribution/IntelligencedistributionFileController.java:28 |
| `/file/item/brandItems/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/MitemController.java:35 |
| `/file/item/default/supplier/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/config/itemdefaultsupplier/ItemDefaultSupplierFileController.java:44 |
| `/file/item/default/supplier/import` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/config/itemdefaultsupplier/ItemDefaultSupplierFileController.java:33 |
| `/file/item/delete/item/result/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/MitemController.java:43 |
| `/file/item/sizeratio/export/ItemProportionSizeRatio` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitem/controller/ItemSizeRatioFileController.java:76 |
| `/file/item/sizeratio/exportItemSizeRatio` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitem/controller/ItemSizeRatioFileController.java:40 |
| `/file/item/sizeratio/import/asyncItemProportionSizeRatio` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitem/controller/ItemSizeRatioFileController.java:57 |
| `/file/item/sizeratio/import/asyncItemProportionSizeRatio/forBigDataSave` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitem/controller/ItemSizeRatioFileController.java:67 |
| `/file/item/sizeratio/import/ItemProportionSizeRatio` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitem/controller/ItemSizeRatioFileController.java:49 |
| `/file/item/syncMdmItem/failResult/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/MitemController.java:52 |
| `/file/items/apply/packages/comp/export/detail/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitem/packages/controller/MitemApplyPackageCompImportController.java:61 |
| `/file/items/apply/packages/comp/export/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitem/packages/controller/MitemApplyPackageCompImportController.java:47 |
| `/file/items/apply/packages/detail/export/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitem/packages/controller/MItemApplyPackageDetailImportController.java:42 |
| `/file/items/size/config/exportItemMultipleConfig` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitem/config/controller/ItemMultipleConfigController.java:55 |
| `/file/items/size/config/exportItemMultipleConfig11` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitem/config/controller/ItemMultipleConfigController.java:46 |
| `/file/items/skc/size/ratio/export/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitem/config/controller/MItemSkcSizeRatioImportController.java:52 |
| `/file/liveChannels/activity/commodity/export` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileLiveChannelsController.java:84 |
| `/file/liveChannels/channel/item/export` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileLiveChannelsController.java:76 |
| `/file/liveChannels/label/store/page/excel` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileLiveChannelsController.java:66 |
| `/file/liveChannels/product/export` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileLiveChannelsController.java:35 |
| `/file/liveChannels/store/page/excel` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileLiveChannelsController.java:56 |
| `/file/livingThingAuth/uploadVideo` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/file/controller/LivingThingAuthUploadController.java:19 |
| `/file/log/export/exportDockLog` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:428 |
| `/file/log/export/exportTaskLog` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:426 |
| `/file/logiWhsInNotice/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/warehouse/logiInNotice/LogiWhsInNoticeFileController.java:38 |
| `/file/logiWhsInNotice/importItem` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/warehouse/logiInNotice/LogiWhsInNoticeFileController.java:51 |
| `/file/logiWhsOutNotice/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/warehouse/logiOutNotice/LogiWhsOutNoticeFileController.java:38 |
| `/file/logiWhsOutNotice/importLogistics` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/warehouse/logiOutNotice/LogiWhsOutNoticeFileController.java:52 |
| `/file/mdm/relevance/mdmRelevance/exceladd` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/product/mdm/controller/MdmRelevanceFileController.java:34 |
| `/file/mdm/relevance/mdmRelevance/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/product/mdm/controller/MdmRelevanceFileController.java:56 |
| `/file/mem/amount/change` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2600 |
| `/file/mem/entitycard/exportMentityCards` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1421 |
| `/file/member/growth/value/setting/item/export` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2232 |
| `/file/member/growth/value/setting/item/import` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2231 |
| `/file/member/growth/value/setting/type/export` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2234 |
| `/file/member/growth/value/setting/type/import` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2233 |
| `/file/mitamBarcode/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitem/controller/MitemBarcodeController.java:42 |
| `/file/mitem/mitemComp/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/product/apply/controller/MitemCompExportController.java:22 |
| `/file/mitem/spec/batch/annex/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/supplying/controller/MitemSpecBatchAnnexController.java:28 |
| `/file/mitemCompTaxRate/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitemcomptaxrate/MitemCompTaxRateImportController.java:48 |
| `/file/mitemDisassembly/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/product/mitemdisassembly/controller/MitemDisassemblyExportController.java:43 |
| `/file/mitemlabel/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitem/controller/MitemlabelController.java:42 |
| `/file/mitemlabel/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitem/controller/MitemlabelController.java:29 |
| `/file/mitemPackage/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/product/mitemspeccomp/controller/MitemPackageController.java:26 |
| `/file/mitemPriceTag/import` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitempricetag/MItemPriceTagImportController.java:35 |
| `/file/mitemSpecComp/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/product/mitemspeccomp/controller/MitemSpecCompExportController.java:49 |
| `/file/mitemSpecComp/export/replaceOrder` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/product/mitemspeccomp/controller/MitemSpecCompExportController.java:62 |
| `/file/mitemSpecComp/import/{type}` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/product/mitemspeccomp/controller/MitemSpecCompImportController.java:36 |
| `/file/mitemSpecTypeData/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitemspecdata/controller/MitemSpecDataExportController.java:51 |
| `/file/mitemTaxRate/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitemtaxrate/MitemTaxRateImportController.java:48 |
| `/file/mitemTaxRate/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitemtaxrate/MitemTaxRateImportController.java:33 |
| `/file/mitemTypeTaxRate/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitemtypetaxrate/MitemTypeTaxRateImportController.java:48 |
| `/file/mitemTypeTaxRate/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/mitemtypetaxrate/MitemTypeTaxRateImportController.java:33 |
| `/file/need/order/type/import` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/need/controller/NeedOrderTypeTemplateImporttController.java:25 |
| `/file/needQuantitySetItem/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/needquantitysetitem/NeedQuantitySetItemFileController.java:35 |
| `/file/needQuantitySetItem/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/needquantitysetitem/NeedQuantitySetItemFileController.java:49 |
| `/file/notSeparatelyPurchasedItem/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/product/promotion/notseparatelypurchaseditem/controller/NotSeparatelyPurchasedItemFileController.java:31 |
| `/file/order/exportOrderInvoice` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileOrderController.java:48 |
| `/file/order/exportOrderItem` | backend, admin-v1, admin-v2 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileOrderController.java:38 |
| `/file/order/multiStoreOrder/export` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileOrderController.java:64 |
| `/file/order/multiStoreOrder/import` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/controller/FileOrderController.java:56 |
| `/file/orderType/item/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/OrderTypeItemController.java:34 |
| `/file/oss/upload` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/file/controller/FileController.java:140 |
| `/file/oss/upload/get` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/file/controller/FileController.java:167 |
| `/file/oss/upload/getUn` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/file/controller/FileController.java:154 |
| `/file/oss/v2/template/upload` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/file/controller/OssController.java:38 |
| `/file/oss/v2/upload` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/file/controller/OssController.java:29 |
| `/file/outsourcingItem/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/outsourcingItem/OutsourcingItemImportController.java:48 |
| `/file/outsourcingItem/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/outsourcingItem/OutsourcingItemImportController.java:33 |
| `/file/priceList/item/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/product/pricelist/BatchListPriceItemImportController.java:29 |
| `/file/product/delivery/item/setting/specified/item/export` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:322 |
| `/file/product/group/item/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/product/group/controller/FileItemGroupController.java:32 |
| `/file/product/item/flashSaleProduct/import` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2857 |
| `/file/product/offline/report/export/report/customer` | backend, admin-v1, admin-v2 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/product/offline/controller/FileOfflineProductReportController.java:43 |
| `/file/product/offline/report/export/report/operation` | backend, admin-v1, admin-v2 | POST, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/product/offline/controller/FileOfflineProductReportController.java:34 |
| `/file/product/orderLimitQty/exportData` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/product/limit/controller/ProductOrderLimitQtyFileController.java:28 |
| `/file/product/pricelist/b2b/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/product/b2bpriceuse/B2BPriceuseController.java:119 |
| `/file/product/pricelist/b2b/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/product/b2bpriceuse/B2BPriceuseController.java:86 |
| `/file/product/pricelist/b2b/types` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/product/b2bpriceuse/B2BPriceuseController.java:64 |
| `/file/productShelf/import` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/product/shelf/ProductShelfImportController.java:33 |
| `/file/retail/dorderHq/export` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2501 |
| `/file/retail/order/export` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:116 |
| `/file/retail/sales/refund/apply/export` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2504 |
| `/file/supplier/annex/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/supplying/controller/SupplierAnnexController.java:27 |
| `/file/supplierBill/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/supplying/controller/SupplierBillExportController.java:41 |
| `/file/supplierMitemComp/b2b/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/supplying/controller/SupplierMitemCompController.java:51 |
| `/file/supplying/refund/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/supplying/controller/SupplyingReturnController.java:29 |
| `/file/sys/tag/exportTagMemberList` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1651 |
| `/file/sysCompanyFile/companyLabelExcel` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/hr/controller/SysCompanyFileController.java:55 |
| `/file/track/event/user/record/export` | backend, admin-v1, admin-v2 | POST, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/track/controller/FileTrackEventUserRecordController.java:26 |
| `/file/upyun/upload` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/file/controller/FileController.java:53 |
| `/file/v1/activityLabel/action/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/ActivityLabelExportController.java:41 |
| `/file/v1/activityLabel/action/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/importing/controller/ActivityLabelImportController.java:48 |
| `/file/v1/b2bOrder/split/action/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/B2bOrderSplitController.java:58 |
| `/file/v1/b2bOrder/split/item/action/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/B2bOrderSplitController.java:40 |
| `/file/v1/depositOrder/action/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/b2b/deposit/DepositController.java:37 |
| `/file/v1/split/settleOrder/action/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/SplitSettleController.java:49 |
| `/file/v1/split/settleOrder/sharer/action/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/export/controller/SplitSettleController.java:86 |
| `/file/vod/video/createUpload` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/file/controller/VodVideoController.java:41 |
| `/file/vod/video/createUploadNoResolve` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/file/controller/VodVideoController.java:53 |
| `/file/vod/video/getPlayAddress` | backend, admin-v1 | POST, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/file/controller/VodVideoController.java:77 |
| `/file/vod/video/refreshUpload` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/file/controller/VodVideoController.java:65 |
| `/hr/distributor/v2/pageExport` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/DistributorNewController.java:151 |
| `/hr/iamUser/page/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamUserController.java:69 |
| `/hr/iamUserRoleRel/pageByUserId/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamUserRoleRelController.java:57 |
| `/hr/statement/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StatementController.java:62 |
| `/product/costRevaluation/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/costRevaluation/controller/CostRevaluationController.java:128 |
| `/product/directSupplyPackageSku/exportModelItemList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/controller/DirectSupplyPackageSkuController.java:59 |
| `/product/mitemComp/common/new/exportPackageCompDetailList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemComp/controller/MItemCompCommonNewController.java:226 |
| `/product/mitemDisassembly/export` | backend | POST | 2 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-file/src/main/java/com/reabam/product/mitemdisassembly/feign/MitemDisassemblyFeignHystrixClient.java:24 |
| `/product/offline/report/common/queryFilterItem/advanced` | backend, admin-v1, admin-v2 | POST, POST(default) | 5 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/report/controller/offline/OfflineProductReportController.java:64 |
| `/product/offline/report/customer/page` | backend, admin-v1, admin-v2 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/report/controller/offline/OfflineProductReportController.java:82 |
| `/product/offline/report/customer/queryFilterItem/base` | backend, admin-v1, admin-v2 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/report/controller/offline/OfflineProductReportController.java:56 |
| `/product/offline/report/export/report/customer` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/report/controller/offline/OfflineProductReportController.java:105 |
| `/product/offline/report/export/report/operation` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/report/controller/offline/OfflineProductReportController.java:97 |
| `/product/offline/report/mini/offline/item/detail` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/report/controller/offline/mini/MiniOfflineProductReportController.java:74 |
| `/product/offline/report/mini/offline/rank` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/report/controller/offline/mini/MiniOfflineProductReportController.java:48 |
| `/product/offline/report/mini/query/hot` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/report/controller/offline/mini/MiniOfflineProductReportController.java:58 |
| `/product/offline/report/mini/rank/queryFilterItem/base` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/report/controller/offline/mini/MiniOfflineProductReportController.java:66 |
| `/product/offline/report/mini/test` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/report/controller/offline/mini/MiniOfflineProductReportController.java:39 |
| `/product/offline/report/operation/page` | backend, admin-v1, admin-v2 | POST, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/report/controller/offline/OfflineProductReportController.java:73 |
| `/product/offline/report/operation/queryFilterItem/base` | backend, admin-v1, admin-v2 | POST, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/report/controller/offline/OfflineProductReportController.java:48 |
| `/product/pag/getItemPackageExport` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemPag/controller/MitemApplyPackageController.java:225 |
| `/product/pag/item/page/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/productNew/mitemPag/controller/MitemApplyPackageController.java:118 |
| `/product/proportion/size/ratio/queryProportionSizeRatioExport` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/sizeratio/controller/ItemProportionSizeRatioController.java:68 |
| `/product/ranking/page` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-product/src/main/java/com/reabam/report/controller/ProductRankingListController.java:34 |
| `/sms/marketing/report/kuaimai` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-sms/src/main/java/com/reabam/sms/controller/SmsReportController.java:38 |
| `/sms/marketing/report/lmobile` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-sms/src/main/java/com/reabam/sms/controller/SmsReportController.java:56 |
| `/track/event/user/record/config/action/get` | backend, admin-v1, admin-v2 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/semir-track/src/main/java/com/reabam/controller/TrackEventUserRecordController.java:78 |
| `/track/event/user/record/config/app/get` | backend, admin-v1, admin-v2 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/semir-track/src/main/java/com/reabam/controller/TrackEventUserRecordController.java:86 |
| `/track/event/user/record/config/module/get` | backend, admin-v1, admin-v2 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/semir-track/src/main/java/com/reabam/controller/TrackEventUserRecordController.java:70 |
| `/track/event/user/record/export` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/semir-track/src/main/java/com/reabam/controller/TrackEventUserRecordController.java:50 |
| `/track/event/user/record/page` | backend, admin-v1, admin-v2 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/semir-track/src/main/java/com/reabam/controller/TrackEventUserRecordController.java:42 |
| `/warehouse/batch/export` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/ProductStorageBatchController.java:105 |
| `/warehouse/logiNearExpireItem/export` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1926 |
| `/warehouse/logiNearExpireItemComp/export` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1935 |
| `/warehouse/outCostChange/export` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:74 |

### 登录/权限 (auth)

| 归一化路径 | 仓库 | 方法 | 出现次数 | 覆盖 | 首个证据 |
| --- | --- | --- | --- | --- | --- |
| `/appc/wxa/auth/decodeUserInfo` | backend | ANY | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/wx/controller/WxaController.java:43 |
| `/appc/wxa/auth/getSession` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/wx/controller/WxaController.java:27 |
| `/appc/wxa/auth/wxDecode` | backend | ANY | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/wx/controller/WxaController.java:59 |
| `/hr/bankaccount/auth/detail` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2074 |
| `/hr/bankaccount/enterprise/auth` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2084 |
| `/hr/bankaccount/personal/auth` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2076 |
| `/hr/bankaccount/phone/auth` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2078 |
| `/hr/fddAccount/fddAuthCallBack` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2278 |
| `/hr/fddAccount/invokeBeforeAuthSign` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2279 |
| `/hr/fddAccount/invokeBeforeAuthSignCallBack` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2280 |
| `/hr/fddAccount/registerAndGetAuthUrl` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2277 |
| `/hr/fddAccount/registerAndGetEnterpriseAuthUrl` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2276 |
| `/hr/iamRoleRel/roleFun/existAuthority/current` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamRoleRelController.java:44 |
| `/hr/iamUser/ai/getIamUserAuth` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamUserController.java:173 |
| `/hr/iamUser/intellectAi/iamAccessTokenLogin` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IntellectAiIamUserController.java:38 |
| `/hr/iamUser/intellectAi/iamLogin` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IntellectAiIamUserController.java:30 |
| `/hr/iamUser/login` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamUserController.java:77 |
| `/hr/iamUser/login/changeGroup` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamUserController.java:85 |
| `/hr/iamUser/login/sso` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamUserController.java:93 |
| `/hr/iamUser/loginOut` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamUserController.java:101 |
| `/hr/iamUser/mini/login` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/mini/IamUserMiniConotroller.java:33 |
| `/hr/iamUser/mini/login/checkDataAuth` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/mini/IamUserMiniConotroller.java:67 |
| `/hr/iamUser/mini/loginOut` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/mini/IamUserMiniConotroller.java:57 |
| `/hr/iamUser/mini/wechatLogin` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/mini/IamUserMiniConotroller.java:49 |
| `/hr/staff/authentication/info` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/StaffController.java:194 |
| `/hr/staff/delauthen` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/StaffController.java:147 |
| `/hr/staff/delAuthen` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StaffV2Controller.java:85 |
| `/hr/staff/editAuthen` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StaffV2Controller.java:71 |
| `/hr/supplier/authentication/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/SupplierAuthenticationController.java:53 |
| `/hr/supplier/authentication/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/SupplierAuthenticationController.java:34 |
| `/hr/supplier/authentication/staffSupplierList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/SupplierAuthenticationController.java:44 |
| `/hr/sysstaffTlAccount/idFileUploadAuth` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:746 |
| `/hr/sysstaffTlAccount/queryAuthInfo` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:753 |
| `/man/loginSet/b2b` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageV2Controller.java:35 |
| `/manage/app/Common/ChangeLogin` | backend, miniapp | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:362 |
| `/manage/app/Common/ChangeLoginGroup` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:584 |
| `/manage/app/common/cleantoken` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:782 |
| `/manage/app/Common/GetUserAuthStatus` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:258 |
| `/manage/app/Common/Login` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:82 |
| `/manage/app/common/login/changeRole` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:91 |
| `/manage/app/Common/LoginGroups` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:568 |
| `/manage/app/Common/LoginOut` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:176 |
| `/manage/app/token/renewal` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:793 |
| `/manage/app/workWeixin/login/getCorpPreAuthCode` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:210 |
| `/manage/app/workWeixin/login/getGroupBindingInfo` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:216 |
| `/manage/app/workWeixin/login/groupBinding` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:213 |
| `/manage/app/workWeixin/login/groupUnbinding` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:214 |
| `/manage/app/workWeixin/login/userBinding` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:215 |
| `/manage/changeLoginGroup` | admin-v1 | POST(default) | 2 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1507 |
| `/manage/loginGroups` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1504 |
| `/manage/man/loginSet/b2b` | miniapp | POST(default) | 1 | 仅单个前端证据 | semir-reabam-front/public/api.js:167 |
| `/manage/rpc/rolefun/existAuthority` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/RolefunRpcController.java:48 |
| `/manage/rpc/rolefun/existAuthority/current` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/RolefunRpcController.java:66 |
| `/manage/workWeixin/login/getGroupBindingInfo` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:237 |
| `/manage/workWeixin/login/groupBinding` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:234 |
| `/manage/workWeixin/login/groupUnbinding` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:235 |
| `/manage/workWeixin/login/userBinding` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:236 |
| `/openapi/iam/user/ai/getIamUserAuth` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/controller/IamUserOpenapiController.java:50 |
| `/openapi/iam/user/authCheck/effective` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/controller/IamUserOpenapiController.java:34 |
| `/openapi/intellectAi/iamLogin` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/controller/IntellectAiDataController.java:45 |
| `/openapi/mop/login` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1385 |
| `/warehouse/logiNearExpireItem/edit` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1922 |
| `/warehouse/logiNearExpireItem/page` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1920 |
| `/warehouse/logiNearExpireItem/upload` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1924 |
| `/warehouse/logiNearExpireItemComp/edit` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1929 |
| `/warehouse/logiNearExpireItemComp/page` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1931 |
| `/warehouse/logiNearExpireItemComp/upload` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1933 |
| `/weixin/mini_program/get_user_info` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wxapp/control/WeixinMiniProgramAuthController.java:24 |
| `/wx/getToken` | backend | POST | 2 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/wx/controller/WeiXinController.java:96 |
| `/wx/om/wxConfig/getAuthorizationUrl` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/om/controller/WxConfigController.java:75 |
| `/wx/tp/authorizationCallBack` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wx/controller/WeiXinTpController.java:449 |
| `/wx/tp/getAuthorizationUrl` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wx/controller/WeiXinTpController.java:434 |
| `/wx/wxapp/auth/b2b/getSession` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wxapp/control/WxaAuthController.java:117 |
| `/wx/wxapp/auth/b2bSessionInfo` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wxapp/control/WxaAuthController.java:61 |
| `/wx/wxapp/auth/b2bWxLogin` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wxapp/control/WxaAuthController.java:73 |
| `/wx/wxapp/auth/decodeUserInfo` | backend | ANY | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wxapp/control/WxaAuthController.java:94 |
| `/wx/wxapp/auth/sessionInfo` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wxapp/control/WxaAuthController.java:49 |
| `/wx/wxapp/auth/wxDecode` | backend | ANY | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wxapp/control/WxaAuthController.java:110 |
| `/wxapp/auth/b2b/getSession` | miniapp | POST(default) | 1 | 仅单个前端证据 | semir-reabam-front/public/api.js:72 |
| `/wxapp/auth/b2bWxLogin` | miniapp | POST(default) | 1 | 仅单个前端证据 | semir-reabam-front/public/api.js:74 |
| `/wxapp/auth/decodeUserInfo` | backend | ANY | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/wx/feign/WxaHystrixClient.java:39 |
| `/wxapp/auth/getSession` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/wx/feign/WxaHystrixClient.java:25 |
| `/wxapp/auth/wxDecode` | backend, miniapp | ANY, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/wx/feign/WxaHystrixClient.java:53 |

### 其他 (other)

| 归一化路径 | 仓库 | 方法 | 出现次数 | 覆盖 | 首个证据 |
| --- | --- | --- | --- | --- | --- |
| `/activity/${actHashId}` | miniapp | PUT | 1 | 仅单个前端证据 | semir-reabam-front/packageForLive/utils/wechat-mudu.min.js:6 |
| `/activity/b2b/wheel/comps` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/wheel/B2bManagerWheelController.java:120 |
| `/activity/b2b/wheel/decoration` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/wheel/B2bManagerWheelController.java:106 |
| `/activity/b2b/wheel/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/wheel/B2bManagerWheelController.java:92 |
| `/activity/b2b/wheel/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/wheel/B2bManagerWheelController.java:63 |
| `/activity/b2b/wheel/list` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/wheel/B2bManagerWheelController.java:49 |
| `/activity/b2b/wheel/mall/page` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/wheel/B2bManagerWheelController.java:134 |
| `/activity/b2b/wheel/mall/result` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/wheel/B2bWheelController.java:46 |
| `/activity/b2b/wheel/mall/reward` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/wheel/B2bWheelController.java:63 |
| `/activity/b2b/wheel/orderWheelInfo` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/wheel/B2bWheelController.java:73 |
| `/activity/b2b/wheel/type` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/wheel/B2bManagerWheelController.java:78 |
| `/activity/common/active/activity/list` | backend, admin-v1, admin-v2 | GET, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/ActivityCommonController.java:28 |
| `/activity/liveChannels/callbackChangeData` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:276 |
| `/activity/liveChannels/checkItemShow` | backend, admin-v2 | GET, POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:315 |
| `/activity/liveChannels/currentBrand/liveInfo` | backend, admin-v2 | GET, POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:354 |
| `/activity/liveChannels/del` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:157 |
| `/activity/liveChannels/detail` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:87 |
| `/activity/liveChannels/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:79 |
| `/activity/liveChannels/detailOfMuDuId` | backend, admin-v2 | GET, POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:95 |
| `/activity/liveChannels/edit/live` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:259 |
| `/activity/liveChannels/getJumpMuDuLiveUrl` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:166 |
| `/activity/liveChannels/label/store/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:130 |
| `/activity/liveChannels/live/addActivity` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:222 |
| `/activity/liveChannels/live/addshop` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:241 |
| `/activity/liveChannels/live/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:103 |
| `/activity/liveChannels/live/queryshop` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:250 |
| `/activity/liveChannels/more` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:292 |
| `/activity/liveChannels/muDuLiveCallback` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:267 |
| `/activity/liveChannels/new/live` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:206 |
| `/activity/liveChannels/online/count` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:284 |
| `/activity/liveChannels/query/activity/commodity` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:323 |
| `/activity/liveChannels/query/live` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:214 |
| `/activity/liveChannels/query/live/activity` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:232 |
| `/activity/liveChannels/rtmpPublishAddr` | backend, admin-v2 | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:364 |
| `/activity/liveChannels/status/switch` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:148 |
| `/activity/liveChannels/store/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsController.java:112 |
| `/activity/liveChannelsRel/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsRelController.java:37 |
| `/activity/liveChannelsSpus/channel/detail` | backend, admin-v2 | GET, POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsSpusController.java:44 |
| `/activity/liveChannelsSpus/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsSpusController.java:32 |
| `/activity/liveChannelsThirdRel/{id}` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/live/LiveChannelsThirdRelController.java:31 |
| `/activity/member/wheel/comps` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2162 |
| `/activity/member/wheel/decoration` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2161 |
| `/activity/member/wheel/detail` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2160 |
| `/activity/member/wheel/edit` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2158 |
| `/activity/member/wheel/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2159 |
| `/activity/orderModel/{modelId}` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/orderModel/OrderModelController.java:52 |
| `/activity/orderModel/addOrderModel` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/orderModel/OrderModelController.java:81 |
| `/activity/orderModel/cpOrderModel/{modelId}` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/orderModel/OrderModelController.java:101 |
| `/activity/orderModel/queryOrderModel/activityPage` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/orderModel/OrderModelController.java:183 |
| `/activity/orderModel/queryOrderModel/ruleItemPage` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/orderModel/OrderModelController.java:191 |
| `/activity/orderModel/queryOrderModel/rulePage` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/orderModel/OrderModelController.java:175 |
| `/activity/orderModel/queryOrderModelActivity` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/orderModel/OrderModelController.java:159 |
| `/activity/orderModel/queryPageList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/orderModel/OrderModelController.java:62 |
| `/activity/orderModel/updateModelStatus` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/orderModel/OrderModelController.java:71 |
| `/activity/orderModel/updateOrderModel` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/orderModel/OrderModelController.java:91 |
| `/activity/orderModel/updateOrderModelInfo` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/orderModel/OrderModelController.java:111 |
| `/activity/orderModel/updateOrderModelRule` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/orderModel/OrderModelController.java:131 |
| `/activity/orderModelRuleRel/{id}` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/orderModel/OrderModelRuleRelController.java:33 |
| `/activity/orderModelRuleRel/page` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/orderModel/OrderModelRuleRelController.java:41 |
| `/activity/orderRule/{ruleId}` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/orderRule/OrderRuleController.java:47 |
| `/activity/orderRule/addRule` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/orderRule/OrderRuleController.java:75 |
| `/activity/orderRule/bathUpdateRuleStatus` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/orderRule/OrderRuleController.java:65 |
| `/activity/orderRule/cpRule/{ruleId}` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/orderRule/OrderRuleController.java:95 |
| `/activity/orderRule/queryPageList` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/orderRule/OrderRuleController.java:56 |
| `/activity/orderRule/queryRuleByRuleCodeList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/orderRule/OrderRuleController.java:124 |
| `/activity/orderRule/queryRuleItem` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/orderRule/OrderRuleController.java:105 |
| `/activity/orderRule/queryRuleItemByIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/orderRule/OrderRuleController.java:114 |
| `/activity/orderRule/updateRule` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/orderRule/OrderRuleController.java:85 |
| `/activity/orderRuleItemDetail/{id}` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/orderRule/OrderRuleItemDetailController.java:31 |
| `/activity/scratchCard/cash/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2849 |
| `/activity/scratchCard/config/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:88 |
| `/activity/scratchCard/config/getBuyPassList` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:85 |
| `/activity/scratchCard/config/getMemMsgItemList` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:87 |
| `/activity/scratchCard/config/getRecordList` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:86 |
| `/activity/scratchCard/config/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:90 |
| `/activity/scratchCard/config/save` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:89 |
| `/adv/filters` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-advanced/src/main/java/com/reabam/adv/controller/AdvancedController.java:67 |
| `/adv/get_filters` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-advanced/src/main/java/com/reabam/adv/controller/AdvancedController.java:51 |
| `/app/actionaward/growth/modifygrowthvalue` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wx/feign/RetailFeignHystrixClient.java:14 |
| `/app/CacheManage/ClearCache` | backend | POST | 2 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/CacheManageController.java:43 |
| `/app/CacheManage/ReadCache` | backend | POST | 2 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/CacheManageController.java:68 |
| `/app/CacheManage/SetCache` | backend | POST | 2 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/CacheManageController.java:104 |
| `/app/Chat/GetChatUserInfo` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/ChatController.java:39 |
| `/app/Chat/RegChat` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/ChatController.java:32 |
| `/app/Discover/{infoType}/AddComment` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/DDiscoverController.java:178 |
| `/app/Discover/{infoType}/Collect` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/DDiscoverController.java:211 |
| `/app/Discover/{infoType}/Comments` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/DDiscoverController.java:195 |
| `/app/Discover/{infoType}/Detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/DDiscoverController.java:92 |
| `/app/Discover/{infoType}/DetailPage` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/DDiscoverController.java:138 |
| `/app/Discover/{infoType}/MyCollect` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/DDiscoverController.java:66 |
| `/app/Discover/getHotHouseholds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/DDiscoverController.java:303 |
| `/app/Discover/getHotTags` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/DDiscoverController.java:320 |
| `/app/Discover/getShareUrl` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/DDiscoverController.java:227 |
| `/app/Discover/mct/Open` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/DDiscoverController.java:354 |
| `/app/Discover/reading` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/DDiscoverController.java:337 |
| `/app/Discover/ShareDetail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/DDiscoverController.java:244 |
| `/app/DsmsOrder/FindAllDsmsOptions` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/DsmsOrderController.java:43 |
| `/app/DsmsOrder/GetDsmsqty` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/DsmsOrderController.java:36 |
| `/app/DsmsOrder/SaveDsmsOrder` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/DsmsOrderController.java:50 |
| `/app/DsmsOrder/SaveDsmsOrder2` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/DsmsOrderController.java:61 |
| `/app/DsmsOrder/wxQrcodeOrder` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/DsmsOrderController.java:79 |
| `/app/DsmsOrder/WxScanPayNotify/{coordinatorGroupId}` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/DsmsOrderController.java:85 |
| `/app/SysConfig/CoursePath` | backend | POST | 2 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/SysConfigController.java:96 |
| `/app/SysConfig/GetSysConfig` | backend | POST | 2 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/SysConfigController.java:74 |
| `/app/SysConfig/SetSysConfig` | backend | POST | 2 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/SysConfigController.java:52 |
| `/app/System/AppCode/{optionName}` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/AppCodeController.java:63 |
| `/app/System/AppCode/{optionName}/Page` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/AppCodeController.java:84 |
| `/app/System/CommonData` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/AppCodeController.java:105 |
| `/app/System/CommonDatas` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/AppCodeController.java:97 |
| `/app/System/SendMsg` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/SystemController.java:44 |
| `/app/System/ServerAddress` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/SystemController.java:109 |
| `/app/System/SetMenuDisplay` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/SystemController.java:145 |
| `/app/System/Suggestion/Add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/SystemController.java:96 |
| `/app/System/SysAdverts` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/SystemController.java:60 |
| `/app/System/UserIdentity` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/manage/controller/SystemController.java:127 |
| `/appc/wxa/getGroupInfo` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/wx/controller/WxaController.java:75 |
| `/b2b/account/recharge/delete` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/recharge/controller/B2BAccountRechargeController.java:60 |
| `/b2b/account/recharge/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/recharge/controller/B2BAccountRechargeController.java:79 |
| `/b2b/account/recharge/move` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/recharge/controller/B2BAccountRechargeController.java:49 |
| `/b2b/account/recharge/rechargeable/list` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/recharge/controller/B2BAccountRechargeController.java:88 |
| `/b2b/account/recharge/saveOrUpdate` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/recharge/controller/B2BAccountRechargeController.java:38 |
| `/b2b/account/recharge/search` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/recharge/controller/B2BAccountRechargeController.java:70 |
| `/b2b/act/getSigninAct` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/SigninController.java:85 |
| `/b2b/act/saveSigninAct` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/SigninController.java:97 |
| `/b2b/act/signin` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/SigninController.java:54 |
| `/b2b/act/signinlist` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/SigninController.java:43 |
| `/b2b/agreement/list` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/agreement/B2bAgreementController.java:45 |
| `/b2b/agreement/status` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/agreement/B2bAgreementController.java:58 |
| `/b2b/agreement/update` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/agreement/B2bAgreementController.java:74 |
| `/b2b/app/couponList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/FundManagementController.java:138 |
| `/b2b/batch/accounts` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/pay/v2/B2bBatchPayController.java:82 |
| `/b2b/batch/pay` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/pay/v2/B2bBatchPayController.java:50 |
| `/b2b/billmaterials/bom/init` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/BillmaterialsController.java:72 |
| `/b2b/billmaterials/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/BillmaterialsController.java:62 |
| `/b2b/billmaterials/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/billmaterials/controller/BillmaterialsImportController.java:31 |
| `/b2b/billmaterials/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/BillmaterialsController.java:41 |
| `/b2b/billmaterials/maintain` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/BillmaterialsController.java:26 |
| `/b2b/billmaterials/search` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/BillmaterialsController.java:49 |
| `/b2b/billmoney/add` | backend, miniapp, admin-v1 | POST, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/BillMoneyController.java:56 |
| `/b2b/billmoney/bankAccounts` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/BillMoneyController.java:95 |
| `/b2b/billmoney/cancel` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/BillMoneyController.java:159 |
| `/b2b/billmoney/checkFinishedBillMoney` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/BillMoneyController.java:83 |
| `/b2b/billmoney/checkTodayBillMoney` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/BillMoneyController.java:72 |
| `/b2b/billmoney/confirm` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/BillMoneyController.java:131 |
| `/b2b/billmoney/detail` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/BillMoneyController.java:117 |
| `/b2b/billmoney/edit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/BillMoneyController.java:197 |
| `/b2b/billmoney/list` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/BillMoneyController.java:106 |
| `/b2b/billmoney/refund` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/BillMoneyController.java:173 |
| `/b2b/billmoney/type/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/BillMoneyController.java:205 |
| `/b2b/bookorder/addGOrder` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2bBookOrder/B2bBookOrderController.java:34 |
| `/b2b/br/findBrTreeChildNodes` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/BillmaterialsRpcController.java:32 |
| `/b2b/br/findBrTreeChildNodes/calculate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/BillmaterialsRpcController.java:40 |
| `/b2b/common/advancedFilterList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/CommonController.java:49 |
| `/b2b/common/commonData` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/CommonController.java:89 |
| `/b2b/count/couponList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/FundManagementController.java:128 |
| `/b2b/coupon/accept` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/coupon/controller/B2bMCouponController.java:193 |
| `/b2b/coupon/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/coupon/controller/B2bMCouponController.java:88 |
| `/b2b/coupon/close` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/coupon/controller/B2bMCouponController.java:208 |
| `/b2b/coupon/couponIsOccupyList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/coupon/controller/B2bMCouponController.java:77 |
| `/b2b/coupon/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/coupon/controller/B2bMCouponController.java:68 |
| `/b2b/coupon/eliminateItems` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/coupon/controller/B2bMCouponController.java:218 |
| `/b2b/coupon/eliminateTypes` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/coupon/controller/B2bMCouponController.java:226 |
| `/b2b/coupon/get/delivery` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/coupon/controller/B2bMCouponController.java:136 |
| `/b2b/coupon/get/deliveryLock` | backend | POST | 2 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/wheel/feign/B2bMCouponClient.java:25 |
| `/b2b/coupon/get/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/coupon/controller/B2bMCouponController.java:124 |
| `/b2b/coupon/get/remove` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/coupon/controller/B2bMCouponController.java:178 |
| `/b2b/coupon/list` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/coupon/controller/B2bMCouponController.java:56 |
| `/b2b/coupon/types` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/coupon/controller/B2bMCouponController.java:112 |
| `/b2b/db2border/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/Db2borderController.java:38 |
| `/b2b/db2border/pendingOrderCheck` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/Db2borderController.java:46 |
| `/b2b/Db2bOrderBill/addGOrder` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/db2borderbill/Db2borderBillController.java:41 |
| `/b2b/Db2bOrderBill/cancel` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/db2borderbill/Db2borderBillController.java:81 |
| `/b2b/Db2bOrderBill/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/db2borderbill/Db2borderBillController.java:66 |
| `/b2b/Db2bOrderBill/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/db2borderbill/Db2borderBillController.java:53 |
| `/b2b/Db2bOrderBill/refund/discount/money/reset` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/db2borderbill/Db2borderBillController.java:106 |
| `/b2b/Db2bOrderBill/rpc/count` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/db2borderbill/Db2borderBillRpcController.java:32 |
| `/b2b/Db2bOrderBill/unliquidated/order` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/db2borderbill/Db2borderBillController.java:96 |
| `/b2b/deliver/shipment/getMgdDeliveryShipmentTracking` | backend, admin-v1 | GET, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/InvoiceDeliveryShipmentController.java:46 |
| `/b2b/deliver/shipment/getMiniDeliveryShipmentTracking` | backend, miniapp | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/InvoiceDeliveryShipmentController.java:38 |
| `/b2b/deliver/shipment/manualSyncDeliveryShipmentTracking` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/InvoiceDeliveryShipmentController.java:55 |
| `/b2b/delivery/config/copy` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/delivery/controller/B2BDeliverySetController.java:68 |
| `/b2b/delivery/config/detail` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/delivery/controller/B2BDeliverySetController.java:54 |
| `/b2b/delivery/config/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/delivery/controller/B2BDeliverySetController.java:39 |
| `/b2b/difference/accept` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/differenceOrder/controller/B2BDifferenceOrderController.java:61 |
| `/b2b/difference/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/differenceOrder/controller/B2BDifferenceOrderController.java:37 |
| `/b2b/difference/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/differenceOrder/controller/B2BDifferenceOrderController.java:45 |
| `/b2b/dock/oms/config/save` | backend | ANY | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/dock/r3/controller/OmsDockOrderConfigController.java:26 |
| `/b2b/exchange/accept` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bExchangeController.java:119 |
| `/b2b/exchange/add` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bExchangeController.java:47 |
| `/b2b/exchange/cancel` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bExchangeController.java:105 |
| `/b2b/exchange/detail` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bExchangeController.java:78 |
| `/b2b/exchange/list` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bExchangeController.java:64 |
| `/b2b/freight/discount/copy` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/freight/discount/FreightDiscountController.java:58 |
| `/b2b/freight/discount/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/freight/discount/FreightDiscountController.java:33 |
| `/b2b/freight/discount/interval/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/freight/discount/FreightDiscountController.java:74 |
| `/b2b/freight/discount/set` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/freight/discount/FreightDiscountController.java:45 |
| `/b2b/fundmanagement/balance` | backend, miniapp, admin-v1 | POST, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/FundManagementController.java:50 |
| `/b2b/fundmanagement/change` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/FundManagementController.java:92 |
| `/b2b/fundmanagement/check` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/FundManagementController.java:98 |
| `/b2b/fundmanagement/getGroupActiveCustomAccountList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/FundManagementController.java:77 |
| `/b2b/fundmanagement/integral/change` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/FundManagementController.java:108 |
| `/b2b/fundmanagement/test/refresh` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/schedule/RefreshRecordController.java:27 |
| `/b2b/funds/custom/account/change` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/funds/B2BFundsCustomAccountController.java:46 |
| `/b2b/funds/custom/account/checkExternalOrderNo` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/funds/B2BFundsCustomAccountController.java:92 |
| `/b2b/funds/custom/account/getRecord` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/funds/B2BFundsCustomAccountController.java:100 |
| `/b2b/funds/custom/account/rebateBalance` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/funds/B2BFundsCustomAccountController.java:76 |
| `/b2b/funds/custom/account/rebateRecordDetails` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/funds/B2BFundsCustomAccountController.java:84 |
| `/b2b/funds/custom/account/rebateRecords` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/funds/B2BFundsCustomAccountController.java:68 |
| `/b2b/funds/custom/account/records` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/funds/B2BFundsCustomAccountController.java:59 |
| `/b2b/funds/custom/account/test` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/funds/B2BFundsCustomAccountController.java:108 |
| `/b2b/getInvitationCodeQrcode` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bAppController.java:53 |
| `/b2b/goodsIn/excelAdd` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/GoodsInOrderController.java:259 |
| `/b2b/goodsIn/order/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/GoodsInOrderController.java:108 |
| `/b2b/goodsIn/order/cancel` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/GoodsInOrderController.java:135 |
| `/b2b/goodsIn/order/close` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/GoodsInOrderController.java:153 |
| `/b2b/goodsIn/order/closeForX5` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/GoodsInOrderController.java:170 |
| `/b2b/goodsIn/order/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/GoodsInOrderController.java:91 |
| `/b2b/goodsIn/order/execl` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/GoodsInOrderController.java:243 |
| `/b2b/goodsIn/order/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/GoodsInOrderController.java:71 |
| `/b2b/goodsIn/order/receiving/finish` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/GoodsInOrderController.java:251 |
| `/b2b/goodsIn/order/whsIn` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/GoodsInOrderController.java:191 |
| `/b2b/goodsIn/orderItems/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/GoodsInOrderController.java:226 |
| `/b2b/goodsInOrder/accept` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/goodsInOrder/controller/GoodsInOrderV2Controller.java:50 |
| `/b2b/goodsInOrder/delete` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/goodsInOrder/controller/GoodsInOrderV2Controller.java:38 |
| `/b2b/intellectAiOrder/cancel` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/IntellectAiOrderController.java:103 |
| `/b2b/intellectAiOrder/confirm` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/IntellectAiOrderController.java:113 |
| `/b2b/intellectAiOrder/create` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/IntellectAiOrderController.java:78 |
| `/b2b/intellectAiOrder/currentUser/pageGather` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/IntellectAiOrderController.java:62 |
| `/b2b/intellectAiOrder/currentUser/pageList` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/IntellectAiOrderController.java:54 |
| `/b2b/intellectAiOrder/detail` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/IntellectAiOrderController.java:70 |
| `/b2b/intellectAiOrder/mini/cancel` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/mini/IntellectAiOrderMiniController.java:90 |
| `/b2b/intellectAiOrder/mini/create` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/mini/IntellectAiOrderMiniController.java:65 |
| `/b2b/intellectAiOrder/mini/currentUser/pageGather` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/mini/IntellectAiOrderMiniController.java:49 |
| `/b2b/intellectAiOrder/mini/currentUser/pageList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/mini/IntellectAiOrderMiniController.java:41 |
| `/b2b/intellectAiOrder/mini/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/mini/IntellectAiOrderMiniController.java:57 |
| `/b2b/intellectAiOrder/mini/saveOrSubmit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/mini/IntellectAiOrderMiniController.java:81 |
| `/b2b/intellectAiOrder/mini/selectCreateProgress` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/mini/IntellectAiOrderMiniController.java:73 |
| `/b2b/intellectAiOrder/mini/submit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/mini/IntellectAiOrderMiniController.java:100 |
| `/b2b/intellectAiOrder/saveOrConfirm` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/IntellectAiOrderController.java:94 |
| `/b2b/intellectAiOrder/selectCreateProgress` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/IntellectAiOrderController.java:86 |
| `/b2b/intellectAiOrder/submit` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/IntellectAiOrderController.java:122 |
| `/b2b/intelligenceDistribution/add` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:297 |
| `/b2b/intelligenceDistribution/cancel` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:294 |
| `/b2b/intelligenceDistribution/confirm` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/intelligencedistribution/controller/IntelligenceDistributionController.java:152 |
| `/b2b/intelligenceDistribution/distributionDetail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/intelligencedistribution/controller/IntelligenceDistributionController.java:89 |
| `/b2b/intelligenceDistribution/finish` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/intelligencedistribution/controller/IntelligenceDistributionController.java:163 |
| `/b2b/intelligenceDistribution/info` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/intelligencedistribution/controller/IntelligenceDistributionController.java:103 |
| `/b2b/intelligenceDistribution/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/intelligencedistribution/controller/IntelligenceDistributionController.java:79 |
| `/b2b/intelligenceDistribution/refreshSchemeStatus` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:255 |
| `/b2b/intelligenceDistribution/set/get` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/intelligencedistribution/controller/IntelligenceDistributionController.java:174 |
| `/b2b/intelligenceDistribution/set/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/intelligencedistribution/controller/IntelligenceDistributionController.java:183 |
| `/b2b/intelligenceDistribution/turn/goodInOrder` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/intelligencedistribution/controller/IntelligenceDistributionController.java:194 |
| `/b2b/intelligenceDistribution/turn/plan` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/intelligencedistribution/controller/IntelligenceDistributionController.java:141 |
| `/b2b/intelligenceDistribution/turnGoodsIn/distributionDetail` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:68 |
| `/b2b/intelligenceDistribution/update` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/intelligencedistribution/controller/IntelligenceDistributionController.java:64 |
| `/b2b/intelligenceDistributionEventRecord/page` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/intelligencedistribution/controller/IntelligenceDistributionEventRecordController.java:32 |
| `/b2b/intelligenceDistributionMerchant/distributionDetail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/intelligencedistribution/controller/IntelligenceDistributionMerchantController.java:66 |
| `/b2b/intelligenceDistributionMerchant/finish` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/intelligencedistribution/controller/IntelligenceDistributionMerchantController.java:77 |
| `/b2b/intelligenceDistributionMerchant/info` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/intelligencedistribution/controller/IntelligenceDistributionMerchantController.java:56 |
| `/b2b/intelligenceDistributionMerchant/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/intelligencedistribution/controller/IntelligenceDistributionMerchantController.java:47 |
| `/b2b/intelligenceDistributionMerchant/pageByIntelligenceDistributionId` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:82 |
| `/b2b/intelligenceDistributionSourceDocument/pageByIntelligenceDistributionId` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/intelligencedistribution/controller/IntelligenceDistributionSourceDocumentController.java:36 |
| `/b2b/invitationCode/background` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bAppController.java:46 |
| `/b2b/invoice/detail` | backend, miniapp, admin-v1 | POST, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/invoice/B2bOrderInvoiceController.java:59 |
| `/b2b/invoice/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/invoice/B2bOrderInvoiceController.java:46 |
| `/b2b/invoice/set/info` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/invoice/B2bOrderInvoiceController.java:70 |
| `/b2b/lately/order/list` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/latelyorder/controller/LatelyOrderController.java:37 |
| `/b2b/logistics/action/copy` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/delivery/controller/B2bLogisticsController.java:195 |
| `/b2b/logistics/config/action/codeCheck` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/delivery/controller/B2bLogisticsController.java:149 |
| `/b2b/logistics/config/action/deleteLogisticsArea` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/delivery/controller/B2bLogisticsController.java:264 |
| `/b2b/logistics/config/action/get` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/delivery/controller/B2bLogisticsController.java:61 |
| `/b2b/logistics/config/action/getLogisticsArea` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/delivery/controller/B2bLogisticsController.java:282 |
| `/b2b/logistics/config/action/rpc/findLogisticsItemProvider` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/delivery/controller/B2bLogisticsController.java:144 |
| `/b2b/logistics/config/action/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/delivery/controller/B2bLogisticsController.java:81 |
| `/b2b/logistics/config/action/saveLogisticsArea` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/delivery/controller/B2bLogisticsController.java:245 |
| `/b2b/logistics/config/action/saveLogisticsItem` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/delivery/controller/B2bLogisticsController.java:113 |
| `/b2b/logistics/import/save` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/delivery/controller/B2bLogisticsController.java:170 |
| `/b2b/logistics/provider/action/inherit/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/delivery/controller/B2bLogisticsController.java:228 |
| `/b2b/logistics/provider/action/page` | backend, miniapp, admin-v1 | POST, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/delivery/controller/B2bLogisticsController.java:209 |
| `/b2b/mallSet/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2BMallSetController.java:33 |
| `/b2b/mallSet/set` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2BMallSetController.java:44 |
| `/b2b/mine` | backend, miniapp | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bAppController.java:40 |
| `/b2b/msupplierAttributes/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/msupplierattributes/controller/MsupplierAttributesController.java:38 |
| `/b2b/multiStore/order/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/MultiStoreOrderController.java:56 |
| `/b2b/multiStore/order/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/MultiStoreOrderController.java:75 |
| `/b2b/multiStore/order/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/MultiStoreOrderController.java:50 |
| `/b2b/multiStore/order/placeOrder` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/MultiStoreOrderController.java:93 |
| `/b2b/multiStore/order/singleStorePlaceOrder` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/MultiStoreOrderController.java:101 |
| `/b2b/multiStore/order/splitOrder/detail` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/MultiStoreOrderController.java:84 |
| `/b2b/multiStoreOrderDetail/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/MultiStoreOrderDetailController.java:31 |
| `/b2b/multiStoreOrderDetailDistribution/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/MultiStoreOrderDetailDistributionController.java:31 |
| `/b2b/multiStoreSplitOrder/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/MultiStoreSplitOrderController.java:33 |
| `/b2b/multiStoreSplitOrder/list` | backend, admin-v1 | GET, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/MultiStoreSplitOrderController.java:44 |
| `/b2b/need/accept` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/NeedOrderController.java:137 |
| `/b2b/need/allocation` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/NeedOrderController.java:199 |
| `/b2b/need/anewAllocation` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/NeedOrderController.java:171 |
| `/b2b/need/batch/allocation` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/NeedOrderController.java:219 |
| `/b2b/need/cancel` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/NeedOrderController.java:158 |
| `/b2b/need/getMWhs` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/NeedOrderController.java:186 |
| `/b2b/need/needDate/modify` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/NeedOrderController.java:267 |
| `/b2b/need/order/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/NeedOrderController.java:94 |
| `/b2b/need/order/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/NeedOrderController.java:64 |
| `/b2b/need/order/detail/openApi` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/NeedOrderController.java:81 |
| `/b2b/need/order/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/NeedOrderController.java:51 |
| `/b2b/need/orderItems/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/NeedOrderController.java:122 |
| `/b2b/need/orderType/config/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/needOrder/controller/NeedOrderTypeConfigController.java:42 |
| `/b2b/need/orderType/config/edit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/needOrder/controller/NeedOrderTypeConfigController.java:50 |
| `/b2b/need/orderType/config/editDetail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/needOrder/controller/NeedOrderTypeConfigController.java:59 |
| `/b2b/need/orderType/config/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/needOrder/controller/NeedOrderTypeConfigController.java:34 |
| `/b2b/need/orderType/get` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/needOrder/controller/NeedOrderTypeController.java:25 |
| `/b2b/need/orderType/rpc/get` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/needOrder/controller/NeedOrderTypeRpcController.java:25 |
| `/b2b/needOrder/delete` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/needOrder/controller/NeedOrderV2Controller.java:32 |
| `/b2b/order/accept` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:680 |
| `/b2b/order/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:126 |
| `/b2b/order/add/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2736 |
| `/b2b/order/addGOrder` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:704 |
| `/b2b/order/address/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:312 |
| `/b2b/order/address/remove` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:887 |
| `/b2b/order/address/save` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:876 |
| `/b2b/order/address/update` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:304 |
| `/b2b/order/adjust` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/adjustment/controller/AdjustOrderController.java:25 |
| `/b2b/order/adjust/qty` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/adjustment/controller/AdjustOrderController.java:34 |
| `/b2b/order/batch/changePrice` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2BOrderBatchController.java:38 |
| `/b2b/order/batch/delivery` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:441 |
| `/b2b/order/batch/findOrders` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2BOrderBatchController.java:28 |
| `/b2b/order/batch/receiving` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/BatchReceivingController.java:42 |
| `/b2b/order/batch/receiving/getItems` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/BatchReceivingController.java:32 |
| `/b2b/order/batchacceptorder` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:654 |
| `/b2b/order/batchacceptorder/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:239 |
| `/b2b/order/batchpayorder/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:201 |
| `/b2b/order/cancel` | backend, miniapp, admin-v1 | POST, POST(default) | 5 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:612 |
| `/b2b/order/cancelApply` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:815 |
| `/b2b/order/changeOrderType` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/ordertypechange/OrderTypeChangeController.java:26 |
| `/b2b/order/closeOrder` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:842 |
| `/b2b/order/delivery` | backend | POST | 2 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:384 |
| `/b2b/order/delivery/with_out_orderitem` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:521 |
| `/b2b/order/detail` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:337 |
| `/b2b/order/detail/openApi` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:358 |
| `/b2b/order/detail/record` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:371 |
| `/b2b/order/detailcopy` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:748 |
| `/b2b/order/detailMain` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:350 |
| `/b2b/order/getacceptrolefun` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:666 |
| `/b2b/order/getAvailablePickQty` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:485 |
| `/b2b/order/getAvailableQtyMap` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:916 |
| `/b2b/order/getCostPrice` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:858 |
| `/b2b/order/give/integral/setting/copy` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/integral/controller/B2BGiveIntegralSettingController.java:61 |
| `/b2b/order/give/integral/setting/delete` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/integral/controller/B2BGiveIntegralSettingController.java:42 |
| `/b2b/order/give/integral/setting/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/integral/controller/B2BGiveIntegralSettingController.java:52 |
| `/b2b/order/give/integral/setting/saveOrUpdate` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/integral/controller/B2BGiveIntegralSettingController.java:32 |
| `/b2b/order/info/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:1053 |
| `/b2b/order/invoice/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:151 |
| `/b2b/order/invoiceReviewInfo` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:1016 |
| `/b2b/order/list` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:140 |
| `/b2b/order/list/execl` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:734 |
| `/b2b/order/mgd/orderCount` | backend, admin-v1, admin-v2 | GET | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:1069 |
| `/b2b/order/negotiate/refund` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:992 |
| `/b2b/order/new/appOrderList` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderNewController.java:118 |
| `/b2b/order/new/getDeliveryInfoByInvoiceNos` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderNewController.java:202 |
| `/b2b/order/new/getOrderCountStatistics` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderNewController.java:100 |
| `/b2b/order/new/getOrderPageList` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderNewController.java:92 |
| `/b2b/order/new/intellectAi/creatOrder` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderNewController.java:213 |
| `/b2b/order/new/multiStoreOrder/add` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderNewController.java:142 |
| `/b2b/order/new/multiStoreOrder/checkAdd` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderNewController.java:134 |
| `/b2b/order/new/multiStoreOrder/show` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderNewController.java:126 |
| `/b2b/order/orderCount` | backend, miniapp, admin-v1 | GET, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:1061 |
| `/b2b/order/orderDeductRate/update` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:897 |
| `/b2b/order/orderDetail/adjust` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:1040 |
| `/b2b/order/orderItemById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:1096 |
| `/b2b/order/orderTypeList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/ordertypechange/OrderTypeChangeController.java:37 |
| `/b2b/order/picking` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:471 |
| `/b2b/order/picking/delivery` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:508 |
| `/b2b/order/receiving` | backend, miniapp | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:578 |
| `/b2b/order/refreshSupply` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:982 |
| `/b2b/order/refund/apply` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:802 |
| `/b2b/order/showType` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:829 |
| `/b2b/order/split/delivery` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:494 |
| `/b2b/order/stat/distribution` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2951 |
| `/b2b/order/stat/overview` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2950 |
| `/b2b/order/stat/seasonalDistribution` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2954 |
| `/b2b/order/stat/trend` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2952 |
| `/b2b/order/test` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:999 |
| `/b2b/order/type/count` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:145 |
| `/b2b/order/update/deliveryDate` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:924 |
| `/b2b/order/update/linePlan` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:972 |
| `/b2b/order/whsout/cancel` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:596 |
| `/b2b/order/wmsCancelInvoice` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/OrderController.java:634 |
| `/b2b/orderGiftPools/availableGiftPools` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/orderGift/controller/OrderGiftPoolsController.java:58 |
| `/b2b/orderGiftPools/getDetailList` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/orderGift/controller/OrderGiftPoolsController.java:34 |
| `/b2b/orderGiftPools/receiveRecords` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/orderGift/controller/OrderGiftPoolsController.java:50 |
| `/b2b/orderGiftPools/setValidityDate` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/orderGift/controller/OrderGiftPoolsController.java:42 |
| `/b2b/orderTypeConfig/b2BOrderTypeInfo` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderTypeConfigController.java:73 |
| `/b2b/orderTypeConfig/b2bOrderTypeItemList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderTypeConfigController.java:85 |
| `/b2b/orderTypeConfig/b2bOrderTypeList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderTypeConfigController.java:52 |
| `/b2b/orderTypeConfig/orderTypePayTime` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderTypeConfigController.java:108 |
| `/b2b/orderTypeConfig/saveB2bOrderType` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderTypeConfigController.java:63 |
| `/b2b/orderTypeConfig/saveB2bOrderTypeConfig` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderTypeConfigController.java:40 |
| `/b2b/orderTypeConfig/saveItem` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderTypeConfigController.java:96 |
| `/b2b/pay/commit` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2533 |
| `/b2b/pay/result` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/PayController.java:35 |
| `/b2b/pay/type` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2532 |
| `/b2b/pay/v2` | miniapp, admin-v1 | POST(default) | 3 | 多个前端共享但未抽到后端 | semir-reabam-admin/src/components/common/prepaidPhone.vue:187 |
| `/b2b/pay/v2/getPayType` | miniapp, admin-v1, admin-v2 | POST, POST(default) | 3 | 多个前端共享但未抽到后端 | semir-bmall-admin-v2/app/src/components/NewShopOrder/CreateNewShopOrderForm/services/index.ts:141 |
| `/b2b/pay/v2/QuickPay` | miniapp | POST(default) | 1 | 仅单个前端证据 | semir-reabam-front/public/api.js:249 |
| `/b2b/pay/v2/UnderLinePay` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/components/common/under.vue:211 |
| `/b2b/payconfig/copy` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/payconifg/B2bPayConfigController.java:66 |
| `/b2b/payconfig/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/payconifg/B2bPayConfigController.java:41 |
| `/b2b/payconfig/openOrderPay` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/payconifg/B2bPayConfigController.java:76 |
| `/b2b/payconfig/set` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/payconifg/B2bPayConfigController.java:53 |
| `/b2b/payment/instructions/get` | backend, miniapp, admin-v1 | POST, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/instructions/controller/PaymentInstructionsController.java:31 |
| `/b2b/payment/instructions/set` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/instructions/controller/PaymentInstructionsController.java:39 |
| `/b2b/payment/list/addSlip` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/payconifg/B2BPaymentListController.java:67 |
| `/b2b/payment/list/config/get` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/payconifg/B2BPaymentListController.java:41 |
| `/b2b/payment/list/delSlip` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/payconifg/B2BPaymentListController.java:79 |
| `/b2b/payment/list/getPhone` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/payconifg/B2BPaymentListController.java:85 |
| `/b2b/payment/list/page` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/payconifg/B2BPaymentListController.java:49 |
| `/b2b/payment/list/save` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/payconifg/B2BPaymentListController.java:57 |
| `/b2b/paytime/api/info` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/paytime/api/B2bPayTimeController.java:29 |
| `/b2b/paytime/manage/copy` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/paytime/manage/B2bPayTimeManageController.java:59 |
| `/b2b/paytime/manage/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/paytime/manage/B2bPayTimeManageController.java:47 |
| `/b2b/paytime/manage/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/paytime/manage/B2bPayTimeManageController.java:35 |
| `/b2b/plus/urgent/delivery/express/fee/copy` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/delivery/plusUrgent/controller/PlusUrgentDeliveryExpressFeeController.java:52 |
| `/b2b/plus/urgent/delivery/express/fee/saveOrUpdate` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/delivery/plusUrgent/controller/PlusUrgentDeliveryExpressFeeController.java:32 |
| `/b2b/purchase/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/PurchaseController.java:54 |
| `/b2b/purchase/addPurchase/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/PurchaseController.java:75 |
| `/b2b/purchase/delete` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/purchase/controller/PurchaseV2Controller.java:36 |
| `/b2b/purchase/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/PurchaseController.java:115 |
| `/b2b/purchase/docItemIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/purchase/controller/PurchaseV2Controller.java:48 |
| `/b2b/purchase/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/PurchaseController.java:93 |
| `/b2b/purchase/openapi/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/PurchaseController.java:152 |
| `/b2b/purchase/refund` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/PurchaseController.java:135 |
| `/b2b/purchaseReturn/accept` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/PurchaseReturnController.java:183 |
| `/b2b/purchaseReturn/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/PurchaseReturnController.java:74 |
| `/b2b/purchaseReturn/cancel` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/PurchaseReturnController.java:170 |
| `/b2b/purchaseReturn/close` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/PurchaseReturnController.java:227 |
| `/b2b/purchaseReturn/confirm` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/PurchaseReturnController.java:194 |
| `/b2b/purchaseReturn/delete` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/purchaseReturn/controller/PurchaseReturnV2Controller.java:37 |
| `/b2b/purchaseReturn/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/PurchaseReturnController.java:152 |
| `/b2b/purchaseReturn/docItemIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/purchaseReturn/controller/PurchaseReturnV2Controller.java:49 |
| `/b2b/purchaseReturn/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/PurchaseReturnController.java:132 |
| `/b2b/purchaseReturn/openapi/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/PurchaseReturnController.java:111 |
| `/b2b/purchaseReturn/openapi/update` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/PurchaseReturnController.java:205 |
| `/b2b/query/invoiceListForSap` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/rpc/QueryB2BOrderContoller.java:26 |
| `/b2b/quote/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bQuoteController.java:38 |
| `/b2b/quote/cancel` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bQuoteController.java:79 |
| `/b2b/quote/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bQuoteController.java:66 |
| `/b2b/quote/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bQuoteController.java:53 |
| `/b2b/r3/kafka/cancel` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/dock/r3/kafka/controller/TestController.java:77 |
| `/b2b/r3/kafka/listenB2b` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/dock/r3/kafka/controller/TestController.java:47 |
| `/b2b/r3/kafka/listenReview` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/dock/r3/kafka/controller/TestController.java:59 |
| `/b2b/r3/kafka/listenReviewCallback` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/dock/r3/kafka/controller/TestController.java:65 |
| `/b2b/r3/kafka/scheduledCancellation` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/dock/r3/kafka/controller/TestController.java:89 |
| `/b2b/r3/kafka/shipConfirm` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/dock/r3/kafka/controller/TestController.java:36 |
| `/b2b/r3/kafka/testListenDelivery` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/dock/r3/kafka/controller/TestController.java:53 |
| `/b2b/r3/kafka/timedConfirmation` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/dock/r3/kafka/controller/TestController.java:83 |
| `/b2b/rebate/info` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/rebate/controller/RebateController.java:31 |
| `/b2b/rebate/orderList` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/rebate/controller/RebateController.java:54 |
| `/b2b/rebate/rewordInfo` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/rebate/controller/RebateController.java:43 |
| `/b2b/rebate/testCalculateRebate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/rebate/controller/RebateCalculateController.java:33 |
| `/b2b/rebate/testRefundRebate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/rebate/controller/RebateCalculateController.java:42 |
| `/b2b/rebate/testSend` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/rebate/controller/RebateCalculateController.java:47 |
| `/b2b/rebateRate/config/add` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/RebateRateConfigController.java:48 |
| `/b2b/rebateRate/config/calculate/middle` | backend, admin-v1, admin-v2 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/RebateRateConfigController.java:107 |
| `/b2b/rebateRate/config/calculate/mini` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/RebateRateConfigController.java:99 |
| `/b2b/rebateRate/config/delete` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/RebateRateConfigController.java:64 |
| `/b2b/rebateRate/config/list` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/RebateRateConfigController.java:40 |
| `/b2b/rebateRate/config/update` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/RebateRateConfigController.java:56 |
| `/b2b/rebateRewardRecord/accept` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/rebate/controller/RebateRewardRecordController.java:59 |
| `/b2b/rebateRewardRecord/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/rebate/controller/RebateRewardRecordController.java:50 |
| `/b2b/rebateRewardRecord/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/rebate/controller/RebateRewardRecordController.java:41 |
| `/b2b/receive/difference/order/accept` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/difference/receive/order/controller/B2bReceiveDifferenceOrderController.java:69 |
| `/b2b/receive/difference/order/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/difference/receive/order/controller/B2bReceiveDifferenceOrderController.java:51 |
| `/b2b/receive/difference/order/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/difference/receive/order/controller/B2bReceiveDifferenceOrderController.java:42 |
| `/b2b/refund/accept` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/RefundController.java:149 |
| `/b2b/refund/action/shortDeliveryRefund` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/RefundController.java:249 |
| `/b2b/refund/actually/refunded/money/reset` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/RefundController.java:288 |
| `/b2b/refund/add` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/RefundController.java:60 |
| `/b2b/refund/add/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/RefundController.java:280 |
| `/b2b/refund/applicationAmount/edit` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/RefundController.java:240 |
| `/b2b/refund/association/record` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2854 |
| `/b2b/refund/auditOrderItemList` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:67 |
| `/b2b/refund/cancel` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/RefundController.java:135 |
| `/b2b/refund/close` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/RefundController.java:185 |
| `/b2b/refund/confirmRefund` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/RefundController.java:226 |
| `/b2b/refund/confirmReturn` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/RefundController.java:165 |
| `/b2b/refund/detail` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/RefundController.java:88 |
| `/b2b/refund/get/suggestPrice` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/RefundController.java:271 |
| `/b2b/refund/list` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/RefundController.java:74 |
| `/b2b/refund/picking/receiving` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/RefundController.java:211 |
| `/b2b/refund/receiving` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/RefundController.java:200 |
| `/b2b/refund/receiving/finish` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/RefundController.java:99 |
| `/b2b/refund/refundAppendRemark` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/RefundController.java:109 |
| `/b2b/refund/type/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/refund/config/controller/B2BRefundConfigController.java:27 |
| `/b2b/refund/updateAttachment` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/RefundController.java:120 |
| `/b2b/rpc/mallSet/get` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2BMallSetRpcController.java:33 |
| `/b2b/rpc/sales/order/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/other/controller/SalesOrderRPCController.java:37 |
| `/b2b/rpc/update/order/linePlan` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2BOrderLinePlanController.java:17 |
| `/b2b/sales/monthly/order/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/other/controller/SalesOrderCreateController.java:63 |
| `/b2b/sales/order/{orderId}/action/simpleInfo` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderController.java:437 |
| `/b2b/sales/order/action/simpleInfo/anonymous` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderController.java:452 |
| `/b2b/sales/order/add` | backend, miniapp, admin-v1 | POST, POST(default) | 6 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderController.java:129 |
| `/b2b/sales/order/address/update` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderController.java:248 |
| `/b2b/sales/order/againSyncOrder` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderController.java:192 |
| `/b2b/sales/order/change` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderController.java:494 |
| `/b2b/sales/order/change/accountList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderController.java:543 |
| `/b2b/sales/order/change/check` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderController.java:513 |
| `/b2b/sales/order/change/onlyCalculate` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderController.java:524 |
| `/b2b/sales/order/coupon/undertakers` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderController.java:469 |
| `/b2b/sales/order/create` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderController.java:215 |
| `/b2b/sales/order/delivery/complete` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderController.java:403 |
| `/b2b/sales/order/getGiveCoupon` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderController.java:276 |
| `/b2b/sales/order/getGiveInfo` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderController.java:289 |
| `/b2b/sales/order/invoicing` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderController.java:341 |
| `/b2b/sales/order/log/giftItem/action/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderController.java:307 |
| `/b2b/sales/order/log/summery/action/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderController.java:298 |
| `/b2b/sales/order/logisticsList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderController.java:551 |
| `/b2b/sales/order/market/plan/undertakers` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderController.java:482 |
| `/b2b/sales/order/need/pay` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderController.java:318 |
| `/b2b/sales/order/proxy/delivery` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderController.java:355 |
| `/b2b/sales/order/proxy/delivery/batch` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderController.java:368 |
| `/b2b/sales/order/proxy/delivery/cancel` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderController.java:393 |
| `/b2b/sales/order/proxy/rejected` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderController.java:379 |
| `/b2b/sales/order/receive/complete` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderController.java:413 |
| `/b2b/sales/order/takeById` | backend, miniapp | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderController.java:203 |
| `/b2b/sales/order/yunst/batchAgentPay` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2118 |
| `/b2b/sap/available/balance` | backend, miniapp | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/controller/SapController.java:36 |
| `/b2b/settlement/event/send/again` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/other/controller/Db2borderSettlementSourceController.java:36 |
| `/b2b/showFieldSet/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/orderSet/controller/ShowFieldController.java:24 |
| `/b2b/showFieldSet/rpc/get` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/orderSet/controller/ShowFieldRpcController.java:28 |
| `/b2b/substitute/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderSubstituteController.java:81 |
| `/b2b/substitute/orderCheck` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderSubstituteController.java:72 |
| `/b2b/substitute/presale/pick/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderSubstituteController.java:92 |
| `/b2b/substitute/presale/pick/check` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderSubstituteController.java:128 |
| `/b2b/substitute/presale/pick/getItemList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderSubstituteController.java:119 |
| `/b2b/substitute/presale/pick/getItemListByFilter` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderSubstituteController.java:136 |
| `/b2b/substitute/presale/pick/mini/add` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderSubstituteController.java:106 |
| `/b2b/substitute/presale/pick/mini/orderPreCheck` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderSubstituteController.java:159 |
| `/b2b/substitute/presale/pick/orderPreCheck` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderSubstituteController.java:145 |
| `/b2b/supplier/comp/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/SupplierController.java:151 |
| `/b2b/supplier/comp/copy` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/SupplierController.java:205 |
| `/b2b/supplier/comp/del` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/SupplierController.java:169 |
| `/b2b/supplier/comp/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/SupplierController.java:187 |
| `/b2b/supplier/comp/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/SupplierController.java:132 |
| `/b2b/supplier/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/SupplierController.java:70 |
| `/b2b/supplier/editorSupplier` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/SupplierController.java:88 |
| `/b2b/supplier/excelAdd` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/SupplierController.java:104 |
| `/b2b/supplier/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/SupplierController.java:52 |
| `/b2b/supplier/type/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/SupplierController.java:216 |
| `/b2b/supplierBill/accept` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/SupplierBillController.java:148 |
| `/b2b/supplierBill/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/SupplierBillController.java:50 |
| `/b2b/supplierBill/cancel` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/SupplierBillController.java:116 |
| `/b2b/supplierBill/delete` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/supplierBill/controller/SupplierBillV2Controller.java:31 |
| `/b2b/supplierBill/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/SupplierBillController.java:102 |
| `/b2b/supplierBill/findPurchases` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/SupplierBillController.java:131 |
| `/b2b/supplierBill/findSupplierDepositOrder` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/SupplierBillController.java:139 |
| `/b2b/supplierBill/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/SupplierBillController.java:88 |
| `/b2b/supplierBill/rpc/count` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/supplierBill/controller/SupplierBillRpcController.java:32 |
| `/b2b/supplierBill/unsettlement/isDraft/check` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/SupplierBillController.java:157 |
| `/b2b/supplierBill/update` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/SupplierBillController.java:72 |
| `/b2b/supplierDepositOrder/accept` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/supplierDepositOrder/controller/SupplierDepositOrderController.java:40 |
| `/b2b/supplierDepositOrder/cancel` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/supplierDepositOrder/controller/SupplierDepositOrderController.java:74 |
| `/b2b/supplierDepositOrder/delete` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/supplierDepositOrder/controller/SupplierDepositOrderController.java:65 |
| `/b2b/supplierDepositOrder/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/supplierDepositOrder/controller/SupplierDepositOrderController.java:49 |
| `/b2b/supplierDepositOrder/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/supplierDepositOrder/controller/SupplierDepositOrderController.java:57 |
| `/b2b/supplierDepositOrder/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/supplierDepositOrder/controller/SupplierDepositOrderController.java:32 |
| `/b2b/tagPriceWarning/config/customer/search` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/tagprice/controller/B2bTagPriceWarningConfigController.java:62 |
| `/b2b/tagPriceWarning/config/delete` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/tagprice/controller/B2bTagPriceWarningConfigController.java:56 |
| `/b2b/tagPriceWarning/config/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/tagprice/controller/B2bTagPriceWarningConfigController.java:35 |
| `/b2b/tagPriceWarning/config/options` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/tagprice/controller/B2bTagPriceWarningConfigController.java:80 |
| `/b2b/tagPriceWarning/config/org/search` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/tagprice/controller/B2bTagPriceWarningConfigController.java:67 |
| `/b2b/tagPriceWarning/config/page` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/tagprice/controller/B2bTagPriceWarningConfigController.java:30 |
| `/b2b/tagPriceWarning/config/save` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/tagprice/controller/B2bTagPriceWarningConfigController.java:40 |
| `/b2b/tagPriceWarning/config/update` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/tagprice/controller/B2bTagPriceWarningConfigController.java:45 |
| `/b2b/tagPriceWarning/config/updateStatus` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/tagprice/controller/B2bTagPriceWarningConfigController.java:50 |
| `/b2b/v1/bank/account/action/agreeApply` | miniapp | POST(default) | 1 | 仅单个前端证据 | semir-reabam-front/public/api.js:247 |
| `/b2b/v1/bank/account/action/agreeApplyConfirm` | miniapp | POST(default) | 1 | 仅单个前端证据 | semir-reabam-front/public/api.js:248 |
| `/b2b/v1/bank/account/action/bankCardInfo` | miniapp | POST(default) | 1 | 仅单个前端证据 | semir-reabam-front/public/api.js:246 |
| `/b2b/v1/bank/account/action/page` | miniapp | POST(default) | 1 | 仅单个前端证据 | semir-reabam-front/public/api.js:245 |
| `/b2b/v1/bank/account/action/unbind` | miniapp | POST(default) | 1 | 仅单个前端证据 | semir-reabam-front/public/api.js:250 |
| `/b2b/v1/depositOrder/action/add` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/deposit/web/DepositApiController.java:49 |
| `/b2b/v1/depositOrder/action/cancel` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/deposit/web/DepositController.java:106 |
| `/b2b/v1/depositOrder/action/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/deposit/web/DepositController.java:66 |
| `/b2b/v1/depositOrder/action/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/deposit/web/DepositController.java:47 |
| `/b2b/v1/depositOrder/action/refund` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/deposit/web/DepositController.java:82 |
| `/b2b/v1/depositOrder/goods/action/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/deposit/web/DepositController.java:93 |
| `/b2b/v1/depositOrder/goods/action/pendingBalance` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/deposit/web/DepositApiController.java:95 |
| `/b2b/v1/order/recordSplit/action/unsettle` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderSplitController.java:140 |
| `/b2b/v1/order/split/action/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderSplitController.java:105 |
| `/b2b/v1/staff/bank/account/action/page` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2630 |
| `/b2b/v2/order/split/action/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/SalesOrderSplitController.java:118 |
| `/b2b/whs/invoice/acceptOrReject` | backend, miniapp, admin-v1 | ANY, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/B2bWarehouseInvoiceController.java:75 |
| `/b2b/whs/invoice/complete` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:3056 |
| `/b2b/whs/invoice/detail` | backend, miniapp, admin-v1 | ANY, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/B2bWarehouseInvoiceController.java:56 |
| `/b2b/whs/invoice/details` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/B2bWarehouseInvoiceController.java:93 |
| `/b2b/whs/invoice/list` | backend, miniapp, admin-v1 | ANY, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/B2bWarehouseInvoiceController.java:47 |
| `/b2b/whs/invoice/mgd/detail` | backend, admin-v1 | ANY, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/order/B2bWarehouseInvoiceController.java:66 |
| `/config/actionAward/editors` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2040 |
| `/config/actionAward/explain` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1383 |
| `/config/actionAward/saveExplain` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1385 |
| `/config/actionAward/spokesperson/copy` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1243 |
| `/config/actionAward/spokesperson/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:744 |
| `/config/actionAward/spokesperson/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1241 |
| `/config/actionAward/spokesperson/save` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:746 |
| `/config/actionAwardItem/add` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:864 |
| `/config/actionAwardItem/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:862 |
| `/config/adaptationMemberGrade` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1287 |
| `/config/adaptationMemberGradeInfo` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1285 |
| `/config/aftersale/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1440 |
| `/config/aftersale/getList` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2028 |
| `/config/aftersale/set` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1442 |
| `/config/agreement/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/agreement/AgreementController.java:36 |
| `/config/agreement/get` | backend, admin-v1 | POST, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/feign/ConfigFeignHystrixClient.java:94 |
| `/config/allocationSET/copy` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:675 |
| `/config/allocationSET/editor` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:690 |
| `/config/allocationSET/get` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:647 |
| `/config/allot/reasons/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:655 |
| `/config/appcode/add` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:505 |
| `/config/appcode/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:770 |
| `/config/appcode/list` | backend, miniapp, admin-v1 | POST, POST(default) | 5 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:489 |
| `/config/appcode/move` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:522 |
| `/config/appCode/v2/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeV2Controller.java:31 |
| `/config/appCode/v2/retailCostType/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeV2Controller.java:39 |
| `/config/appCodeExtend/save` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeExtendController.java:27 |
| `/config/attr/{industry}` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:1062 |
| `/config/attribute/get` | backend, admin-v1 | ANY, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/attribute/controller/AttributeController.java:25 |
| `/config/attributes/list` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:857 |
| `/config/attributes/set` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:870 |
| `/config/b2b/addRecItems` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:370 |
| `/config/b2b/agreementset/copy` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/agreement/B2bSetAgreementController.java:48 |
| `/config/b2b/agreementset/list` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/feign/ConfigFeignHystrixClient.java:83 |
| `/config/b2b/agreementset/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/agreement/B2bSetAgreementController.java:38 |
| `/config/b2b/booking/defDlineset` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:723 |
| `/config/b2b/booking/whs` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:697 |
| `/config/b2b/credit/save` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:87 |
| `/config/b2b/credit/temp/action/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:104 |
| `/config/b2b/credit/temp/action/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:116 |
| `/config/b2b/credit/temp/action/remove` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:124 |
| `/config/b2b/credit/temp/action/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:95 |
| `/config/b2b/delRecItems` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:387 |
| `/config/b2b/fastWayDiscount/getNewFastWayDiscountCode` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1754 |
| `/config/b2b/fastWayDiscount/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1756 |
| `/config/b2b/fastWayDiscount/update` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1758 |
| `/config/b2b/freightset/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:262 |
| `/config/b2b/freightset/save` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:276 |
| `/config/b2b/funds/custom/account/types` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bFundsController.java:46 |
| `/config/b2b/funds/custom/accounts` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bFundsController.java:58 |
| `/config/b2b/funds/custom/accounts/v2` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bFundsController.java:70 |
| `/config/b2b/funds/custom/rebateAccounts` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bFundsController.java:64 |
| `/config/b2b/fundsset/save` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:73 |
| `/config/b2b/getRecItems` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:328 |
| `/config/b2b/lineset/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:233 |
| `/config/b2b/lineset/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:219 |
| `/config/b2b/lineset/save` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:248 |
| `/config/b2b/moa/action/copy` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:516 |
| `/config/b2b/moa/action/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:473 |
| `/config/b2b/moa/action/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:446 |
| `/config/b2b/moq/copy` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:506 |
| `/config/b2b/moq/main` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:463 |
| `/config/b2b/moq/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:436 |
| `/config/b2b/order_pay_set/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:563 |
| `/config/b2b/order_pay_set/set` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:579 |
| `/config/b2b/orderamount` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:531 |
| `/config/b2b/orderset/copy` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:314 |
| `/config/b2b/orderset/get/expand` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bOrderSetController.java:26 |
| `/config/b2b/orderset/save` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:291 |
| `/config/b2b/receivableaccount/copy` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:157 |
| `/config/b2b/receivableaccount/inherit/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:147 |
| `/config/b2b/receivableaccount/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:139 |
| `/config/b2b/recItemSort` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:403 |
| `/config/b2b/recItemsShelves` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:419 |
| `/config/b2b/refundReturn/action/getSetting` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:624 |
| `/config/b2b/refundWay/get` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:611 |
| `/config/b2b/refundWay/set` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:592 |
| `/config/b2b/setorderamount` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:547 |
| `/config/b2bMall/get` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/mall/controller/B2bMallController.java:126 |
| `/config/b2bMall/getV2` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/mall/controller/B2bMallController.java:229 |
| `/config/b2bMall/mallModule/{moduleType}/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/mall/controller/B2bMallController.java:208 |
| `/config/b2bMall/mallModule/func/getV2` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/mall/controller/B2bMallController.java:237 |
| `/config/b2bMall/mallModule/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/mall/controller/B2bMallController.java:90 |
| `/config/b2bMall/mallModule/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/mall/controller/B2bMallController.java:75 |
| `/config/b2bMall/mallModule/preserve` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/mall/controller/B2bMallController.java:107 |
| `/config/b2bMall/mallModule/publish` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/mall/controller/B2bMallController.java:218 |
| `/config/b2bmall/micropage` | miniapp | POST(default) | 1 | 仅单个前端证据 | semir-reabam-front/public/api.js:229 |
| `/config/b2bmall/micropage/{stencilId}/action/get` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/mall/controller/api/MicroPageApiController.java:31 |
| `/config/b2bmall/micropage/action/refreshCache` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/mall/controller/api/MicroPageApiController.java:39 |
| `/config/b2bMall/module/{moduleType}` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/mall/controller/B2bMallController.java:157 |
| `/config/b2bMall/module/{moduleType}/get` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/mall/controller/B2bMallController.java:168 |
| `/config/b2bMall/module/getConfig` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/mall/controller/B2bMallController.java:245 |
| `/config/b2bMall/module/M0018` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1426 |
| `/config/b2bMall/module/M0018/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1424 |
| `/config/b2bMall/module/M0023` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1494 |
| `/config/b2bMall/module/M0023/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1492 |
| `/config/b2bMall/module/M0024` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1502 |
| `/config/b2bMall/module/M0025` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1524 |
| `/config/b2bMall/module/M0025/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1522 |
| `/config/b2bMall/module/M0030` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1528 |
| `/config/b2bMall/module/M0030/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1526 |
| `/config/b2bMall/module/M0035` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1535 |
| `/config/b2bMall/module/M0035/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1534 |
| `/config/b2bMall/module/M0069` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1537 |
| `/config/b2bMall/module/M0069/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1536 |
| `/config/b2bMall/module/M0070` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1532 |
| `/config/b2bMall/module/M0070/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1530 |
| `/config/b2bMall/module/M0071` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:452 |
| `/config/b2bMall/module/M0071/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:450 |
| `/config/b2bMall/module/M0072` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:448 |
| `/config/b2bMall/module/M0072/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:446 |
| `/config/b2bMall/module/M0073` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:440 |
| `/config/b2bMall/module/M0073/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:438 |
| `/config/b2bMall/module/saveConfig` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/mall/controller/B2bMallController.java:253 |
| `/config/b2bMall/refreshCache` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/mall/controller/B2bMallController.java:137 |
| `/config/b2bMall/urlType/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/mall/controller/B2bMallController.java:60 |
| `/config/b2bMall/urlType/list/{moduleType}` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/mall/controller/B2bMallController.java:203 |
| `/config/band/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:279 |
| `/config/band/del` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:305 |
| `/config/band/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:318 |
| `/config/band/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:292 |
| `/config/barcodeSearchRule/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/BarcodeSearchRuleController.java:72 |
| `/config/barcodeSearchRule/regular/search` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/BarcodeSearchRuleController.java:96 |
| `/config/barcodeSearchRule/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/BarcodeSearchRuleController.java:49 |
| `/config/brandSalesman/action/getByItem` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/brandsalesman/controller/BrandSalesmanController.java:133 |
| `/config/brandSalesman/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/brandsalesman/controller/BrandSalesmanController.java:43 |
| `/config/brandSalesman/copy` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/brandsalesman/controller/BrandSalesmanController.java:60 |
| `/config/brandSalesman/delete` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/brandsalesman/controller/BrandSalesmanController.java:123 |
| `/config/brandSalesman/info` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/brandsalesman/controller/BrandSalesmanController.java:93 |
| `/config/brandSalesman/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/brandsalesman/controller/BrandSalesmanController.java:108 |
| `/config/brandSalesman/update` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/brandsalesman/controller/BrandSalesmanController.java:77 |
| `/config/card/list` | admin-v1 | POST(default) | 2 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1761 |
| `/config/card/preserve` | admin-v1 | POST(default) | 2 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1763 |
| `/config/certification/list` | admin-v1 | POST(default) | 2 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1765 |
| `/config/certification/set` | admin-v1 | POST(default) | 2 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1767 |
| `/config/changeTypeFee` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:96 |
| `/config/checkvouch/diffset/batch/delete` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/checkvouchset/controller/CheckVouchDiffSetController.java:66 |
| `/config/checkvouch/diffset/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/checkvouchset/controller/CheckVouchDiffSetController.java:79 |
| `/config/checkvouch/diffset/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/checkvouchset/controller/CheckVouchDiffSetController.java:41 |
| `/config/checkvouch/diffset/query` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/checkvouchset/controller/CheckVouchDiffSetController.java:104 |
| `/config/checkvouch/diffset/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/checkvouchset/controller/CheckVouchDiffSetController.java:53 |
| `/config/checkvouch/set/addCheck` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/checkvouchset/controller/CheckVouchSetController.java:120 |
| `/config/checkvouch/set/copy` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/checkvouchset/controller/CheckVouchSetController.java:111 |
| `/config/checkvouch/set/inherit/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/checkvouchset/controller/CheckVouchSetController.java:96 |
| `/config/checkvouch/set/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/checkvouchset/controller/CheckVouchSetController.java:48 |
| `/config/checkvouch/set/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/checkvouchset/controller/CheckVouchSetController.java:83 |
| `/config/codingRule/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/codingrule/controller/CodingRuleController.java:32 |
| `/config/codingRule/receiveNetCode/getCode` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/codingrule/controller/CodingRuleReceiveNetCodeController.java:59 |
| `/config/codingRule/receiveNetCode/info` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/codingrule/controller/CodingRuleReceiveNetCodeController.java:50 |
| `/config/codingRule/receiveNetCode/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/codingrule/controller/CodingRuleReceiveNetCodeController.java:41 |
| `/config/codingRule/supplierCode/getCode` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/codingrule/controller/CodingRuleSupplierCodeController.java:58 |
| `/config/codingRule/supplierCode/info` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/codingrule/controller/CodingRuleSupplierCodeController.java:49 |
| `/config/codingRule/supplierCode/save` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/codingrule/controller/CodingRuleSupplierCodeController.java:40 |
| `/config/comment/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1120 |
| `/config/comment/set` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1122 |
| `/config/common/advancedFilterList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/CommonController.java:32 |
| `/config/common/cache` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/CommonController.java:58 |
| `/config/common/cache/get` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/CommonController.java:73 |
| `/config/common/version` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/controller/ConfigCommonController.java:21 |
| `/config/commonData/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/CommonDataController.java:59 |
| `/config/commonData/copy` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/CommonDataController.java:88 |
| `/config/commonData/list` | backend, miniapp, admin-v1 | POST, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/CommonDataController.java:43 |
| `/config/commonData/move` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/CommonDataController.java:74 |
| `/config/commonData/wecharmall/get` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/CommonDataController.java:104 |
| `/config/commonData/wecharmall/set` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/CommonDataController.java:119 |
| `/config/costPriceList/copy` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/costpricelist/controller/CostPriceListController.java:75 |
| `/config/costPriceList/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/costpricelist/controller/CostPriceListController.java:45 |
| `/config/costPriceList/getPriceListId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/costpricelist/controller/CostPriceListController.java:122 |
| `/config/costPriceList/getStandardCostPrice` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/costpricelist/controller/CostPriceListController.java:103 |
| `/config/costPriceList/getStandardCostPriceListDetails` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/costpricelist/controller/CostPriceListController.java:134 |
| `/config/costPriceList/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/costpricelist/controller/CostPriceListController.java:60 |
| `/config/creditSet/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1786 |
| `/config/creditSet/save` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1788 |
| `/config/customDiscountWay/info` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2071 |
| `/config/customDiscountWay/move` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2073 |
| `/config/customDiscountWay/update` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2072 |
| `/config/customerservice/batchCopy` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1760 |
| `/config/customerservice/edit` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1607 |
| `/config/customerservice/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1605 |
| `/config/customize/business/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/CustomizeBusinessController.java:55 |
| `/config/customize/business/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/CustomizeBusinessController.java:65 |
| `/config/customize/business/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/CustomizeBusinessController.java:37 |
| `/config/customizeAccountChgType` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:88 |
| `/config/customPrintTemplate/create` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/print/CustomPrintTemplateController.java:32 |
| `/config/customPrintTemplate/delete` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/print/CustomPrintTemplateController.java:80 |
| `/config/customPrintTemplate/delete/batch` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/print/CustomPrintTemplateController.java:93 |
| `/config/customPrintTemplate/getCustomOnline/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/print/CustomPrintTemplateController.java:137 |
| `/config/customPrintTemplate/getCustomPrintTemplate` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/print/CustomPrintTemplateController.java:119 |
| `/config/customPrintTemplate/getCustomPrintTemplate/list` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/print/CustomPrintTemplateController.java:128 |
| `/config/customPrintTemplate/setDefault` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/print/CustomPrintTemplateController.java:107 |
| `/config/customPrintTemplate/updateOnlineTemplateId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/print/CustomPrintTemplateController.java:68 |
| `/config/customPrintTemplate/updateTemplateCount` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/print/CustomPrintTemplateController.java:147 |
| `/config/customPrintTemplate/updateTemplateCountBatch` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/print/CustomPrintTemplateController.java:158 |
| `/config/customPrintTemplate/updateTemplateFile` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/print/CustomPrintTemplateController.java:44 |
| `/config/customPrintTemplate/updateTemplateInfo` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/print/CustomPrintTemplateController.java:56 |
| `/config/dealer/copy` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/dealer/DealerController.java:96 |
| `/config/dealer/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/dealer/DealerController.java:38 |
| `/config/dealer/excelAdd` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/dealer/DealerController.java:104 |
| `/config/dealer/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/dealer/DealerController.java:52 |
| `/config/decorate/{moduleType}` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/PlatformDecorateController.java:117 |
| `/config/decorate/{moduleType}/get` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/PlatformDecorateController.java:127 |
| `/config/decorate/{moduleType}/switch` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/PlatformDecorateController.java:152 |
| `/config/decorate/M0019` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2060 |
| `/config/decorate/M0019/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2054 |
| `/config/decorate/M0020` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2061 |
| `/config/decorate/M0020/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2055 |
| `/config/decorate/M0021` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2062 |
| `/config/decorate/M0021/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2056 |
| `/config/decorate/M0022` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2063 |
| `/config/decorate/M0022/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2057 |
| `/config/decorate/M0024/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1500 |
| `/config/decorate/M0033` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2064 |
| `/config/decorate/M0033/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2058 |
| `/config/decorate/M0053` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2068 |
| `/config/decorate/M0053/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2066 |
| `/config/decorate/M0054` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2069 |
| `/config/decorate/M0054/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2067 |
| `/config/decoration/b2bmall/order/detail/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/decoration/DecorationB2BMallB2BOrderDetailController.java:28 |
| `/config/decoration/b2bmall/order/detail/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/decoration/DecorationB2BMallB2BOrderDetailController.java:40 |
| `/config/decoration/common/mall/copy` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/DecorationCommonSetMallController.java:57 |
| `/config/decoration/common/mall/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/DecorationCommonSetMallController.java:44 |
| `/config/decoration/common/mall/get/result` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/DecorationCommonSetMallController.java:70 |
| `/config/decoration/common/mall/getStartPageUrlMallResult` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/DecorationCommonSetMallController.java:82 |
| `/config/decoration/common/mall/set` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/DecorationCommonSetMallController.java:31 |
| `/config/deliveryscope/add` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2086 |
| `/config/deliveryscope/copy` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2092 |
| `/config/deliveryscope/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2087 |
| `/config/deliveryscope/typeAdd` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2090 |
| `/config/deliveryscope/typeget` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2091 |
| `/config/department/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/department/controller/DepartmentController.java:39 |
| `/config/department/createId/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/department/controller/DepartmentController.java:72 |
| `/config/department/list` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/department/controller/DepartmentController.java:47 |
| `/config/department/move` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/department/controller/DepartmentController.java:55 |
| `/config/department/tree/list` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/department/controller/DepartmentController.java:31 |
| `/config/department/user/get` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/department/controller/DepartmentController.java:63 |
| `/config/discount_set/discountTypes/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1294 |
| `/config/discount_set/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1290 |
| `/config/discount_set/set` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1292 |
| `/config/discoverdecorate/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/discoverdecorate/controller/DiscoverDecorateController.java:31 |
| `/config/discoverdecorate/info` | backend, miniapp, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/discoverdecorate/controller/DiscoverDecorateController.java:40 |
| `/config/doubleScreen/copy` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1232 |
| `/config/doubleScreen/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1224 |
| `/config/doubleScreen/save` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1228 |
| `/config/doubleScreen/stencilList` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1222 |
| `/config/equityAlias/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2839 |
| `/config/explain/findByType` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/explain/ConfigExplainController.java:28 |
| `/config/explain/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/explain/ConfigExplainController.java:36 |
| `/config/fieldSetting/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/fieldsetting/controller/FieldSettingTypeController.java:32 |
| `/config/fieldSettingPage/applyPageFields` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/fieldsetting/controller/FieldSettingPageController.java:84 |
| `/config/fieldSettingPage/getPageFields` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/fieldsetting/controller/FieldSettingPageController.java:58 |
| `/config/fieldSettingPage/getPageFields/byPageCode` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/fieldsetting/controller/FieldSettingPageController.java:71 |
| `/config/fieldSettingPage/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/fieldsetting/controller/FieldSettingPageController.java:46 |
| `/config/fieldSettingPage/setActive` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/fieldsetting/controller/FieldSettingPageController.java:119 |
| `/config/fieldSettingPage/setPermission` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/fieldsetting/controller/FieldSettingPageController.java:131 |
| `/config/fieldSettingPage/sortPageFields` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/fieldsetting/controller/FieldSettingPageController.java:106 |
| `/config/freight/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1283 |
| `/config/freight/set` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1281 |
| `/config/glue/set/copy` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:145 |
| `/config/guide/integral/mall/set/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:436 |
| `/config/guide/integral/mall/set/save` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:434 |
| `/config/guide/wxa/menu/edit` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1963 |
| `/config/guide/wxa/menu/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1961 |
| `/config/guideset/edit` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1734 |
| `/config/guideset/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1736 |
| `/config/guidewxa/center/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:601 |
| `/config/guidewxa/center/info` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:590 |
| `/config/guidewxa/mallModule/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1949 |
| `/config/guidewxa/mallModule/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1953 |
| `/config/guidewxa/mallModule/preserve` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1951 |
| `/config/guidewxa/urlType/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1955 |
| `/config/houchuPrinter/attr/save` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2117 |
| `/config/houchuPrinter/copy` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1249 |
| `/config/houchuPrinter/delete` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1251 |
| `/config/houchuPrinter/detail` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1253 |
| `/config/houchuPrinter/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1247 |
| `/config/houchuPrinter/save` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1255 |
| `/config/hr/finance/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/FinanceSetController.java:43 |
| `/config/hr/finance/set` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/FinanceSetController.java:59 |
| `/config/hr/merchantgroup/addedit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/HrSetController.java:74 |
| `/config/hr/merchantgroup/del` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/HrSetController.java:89 |
| `/config/hr/merchantgroup/list` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/HrSetController.java:59 |
| `/config/hr/notice/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/HrSetController.java:44 |
| `/config/industryAttributes/queryAttributes` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/industryattributes/controller/IndustryAttributesController.java:37 |
| `/config/inspection_project/add` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1296 |
| `/config/inspection_project/del` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1300 |
| `/config/inspection_project/detail` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1304 |
| `/config/inspection_project/edit` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1298 |
| `/config/inspection_project/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1302 |
| `/config/integralMall/mallModule/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1405 |
| `/config/integralMall/mallModule/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1403 |
| `/config/integralMall/mallModule/preserve` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1407 |
| `/config/integralMall/urlType/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1409 |
| `/config/IntegralPeriod/add` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:736 |
| `/config/IntegralPeriod/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:734 |
| `/config/logistics/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/logistics/LogisticsSetController.java:36 |
| `/config/logistics/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/logistics/LogisticsSetController.java:45 |
| `/config/maintainer/add` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1436 |
| `/config/maintainer/del` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1438 |
| `/config/maintainer/list` | admin-v1 | POST(default) | 2 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2026 |
| `/config/mall/antiFakeCode/edit` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:45 |
| `/config/mall/antiFakeCode/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:47 |
| `/config/mall/income/editMallIncome` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1811 |
| `/config/mall/income/getMallIncome` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1809 |
| `/config/mall/menu/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/mall/menu/controller/MallMainMenuSettingController.java:27 |
| `/config/mall/menu/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/mall/menu/controller/MallMainMenuSettingController.java:36 |
| `/config/mall/order/confirm/get` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/MallOrderConfirmPageController.java:38 |
| `/config/mall/order/confirm/save` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/MallOrderConfirmPageController.java:29 |
| `/config/mall/theme/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/mall/theme/controller/MallThemeController.java:27 |
| `/config/mall/theme/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/mall/theme/controller/MallThemeController.java:36 |
| `/config/mall/urlType/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:1083 |
| `/config/mallModule/classify/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:22 |
| `/config/mallModule/copy` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1466 |
| `/config/mallModule/get` | admin-v1 | POST(default) | 2 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1801 |
| `/config/mallModule/list` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/mall/controller/api/MallModuleController.java:36 |
| `/config/mallModule/preserve` | admin-v1 | POST(default) | 2 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1803 |
| `/config/mallModule/stencilList` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/mall/controller/api/MallModuleController.java:25 |
| `/config/mallModule/switchStencil` | admin-v1 | POST(default) | 2 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1797 |
| `/config/mallRedoubled/add` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1336 |
| `/config/mallRedoubled/copy` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1342 |
| `/config/mallRedoubled/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1338 |
| `/config/mallRedoubled/op` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1340 |
| `/config/mallSameCityDelivery/editInfo` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:616 |
| `/config/mallSameCityDelivery/info` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:614 |
| `/config/marketingsms/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1182 |
| `/config/marketingsms/set` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1180 |
| `/config/mcard/create` | admin-v1 | POST(default) | 2 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1783 |
| `/config/mcard/get` | admin-v1 | POST(default) | 2 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1779 |
| `/config/mcard/getWxaLink` | admin-v1 | POST(default) | 2 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1781 |
| `/config/mcard/update` | admin-v1 | POST(default) | 2 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1785 |
| `/config/mdm/brand/saveOrUpdate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/controller/MdmConfigController.java:65 |
| `/config/mdm/getMdmBrandConfig` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/controller/MdmConfigController.java:76 |
| `/config/mdm/getRegionList` | miniapp, admin-v1, admin-v2 | POST, POST(default) | 3 | 多个前端共享但未抽到后端 | semir-bmall-admin-v2/app/src/services/common.ts:45 |
| `/config/mdm/value/saveOrUpdate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/controller/MdmConfigController.java:45 |
| `/config/mdm/value/saveOrUpdate/groupId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/controller/MdmConfigController.java:56 |
| `/config/meal/marketingActivities/get` | admin-v1 | POST(default) | 2 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:291 |
| `/config/meal/marketingActivities/save` | admin-v1 | POST(default) | 2 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:289 |
| `/config/meal/online/copy` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1633 |
| `/config/meal/orderAppear/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:338 |
| `/config/meal/orderAppear/set` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:339 |
| `/config/meal/set/copy` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1752 |
| `/config/meal/set/edit` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1750 |
| `/config/meal/set/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1748 |
| `/config/mealMall/certification/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:380 |
| `/config/mealMall/certification/set` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:381 |
| `/config/mealMall/common/copy` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:330 |
| `/config/mealMall/common/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:332 |
| `/config/mealMall/common/set` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:331 |
| `/config/mealMall/mallModule/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1627 |
| `/config/mealMall/mallModule/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1625 |
| `/config/mealMall/mallModule/preserve` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1626 |
| `/config/mealMall/page/classify/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:23 |
| `/config/mealMall/page/module/edit` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1629 |
| `/config/mealMall/page/module/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1630 |
| `/config/mealMall/page/module/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:340 |
| `/config/mealMall/page/urlType/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1628 |
| `/config/mealMall/urlType/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1624 |
| `/config/mealMallSameCityDelivery/editInfo` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:630 |
| `/config/mealMallSameCityDelivery/info` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:632 |
| `/config/mem/integralSeparateAccountsSet/getSetInfo` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1790 |
| `/config/mem/integralSeparateAccountsSet/mergeSet` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1792 |
| `/config/member/gradeset/types` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1577 |
| `/config/membercard/img/get` | admin-v1 | POST(default) | 2 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1775 |
| `/config/membercard/img/set` | admin-v1 | POST(default) | 2 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1777 |
| `/config/memberEntitlementCard/detail` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:567 |
| `/config/memberEntitlementCard/edit` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:569 |
| `/config/memberEntitlementCard/list` | admin-v1 | POST(default) | 2 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:571 |
| `/config/memberGrade/detail` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:852 |
| `/config/memberGrade/maintain` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:850 |
| `/config/membership/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1110 |
| `/config/membership/set` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1112 |
| `/config/merchantArea/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/MerchantAreaController.java:52 |
| `/config/merchantArea/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/MerchantAreaController.java:67 |
| `/config/merchantArea/move` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/MerchantAreaController.java:82 |
| `/config/merchantAreaTree/list` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/MerchantAreaController.java:37 |
| `/config/merchantSettlementSetting/copy` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:207 |
| `/config/merchantSettlementSetting/update` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:209 |
| `/config/needQuantitySetItem/delete` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/needquantitysetitem/controller/NeedQuantitySetItemController.java:52 |
| `/config/needQuantitySetItem/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/needquantitysetitem/controller/NeedQuantitySetItemController.java:43 |
| `/config/needQuantitySetItem/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/needquantitysetitem/controller/NeedQuantitySetItemController.java:34 |
| `/config/needSet/copy` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:927 |
| `/config/needSet/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:900 |
| `/config/needSet/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:915 |
| `/config/offlineOrderItemLimit/copy` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:37 |
| `/config/offlineOrderItemLimit/getOrderTypeLimitEnable` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:29 |
| `/config/offlineOrderItemLimit/orderTypeLimitEnable` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:27 |
| `/config/offlineOrderItemLimit/saveOrUpdate` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:35 |
| `/config/offlineOrderItemLimit/search` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:39 |
| `/config/online/copy` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1490 |
| `/config/order/comp/group/del` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/OrderCompGroupController.java:72 |
| `/config/order/comp/group/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/OrderCompGroupController.java:42 |
| `/config/order/comp/group/detail/regions` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/OrderCompGroupController.java:52 |
| `/config/order/comp/group/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/OrderCompGroupController.java:62 |
| `/config/order/comp/group/set` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/OrderCompGroupController.java:32 |
| `/config/order/routing/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1277 |
| `/config/order/routing/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1275 |
| `/config/order/routing/set` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1279 |
| `/config/orderDeliveryType/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/orderdeliverytype/controller/OrderDeliveryTypeController.java:43 |
| `/config/orderDeliveryType/delete` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/orderdeliverytype/controller/OrderDeliveryTypeController.java:107 |
| `/config/orderDeliveryType/info` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/orderdeliverytype/controller/OrderDeliveryTypeController.java:76 |
| `/config/orderDeliveryType/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:1100 |
| `/config/orderDeliveryType/page` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/orderdeliverytype/controller/OrderDeliveryTypeController.java:92 |
| `/config/orderDeliveryType/update` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/orderdeliverytype/controller/OrderDeliveryTypeController.java:60 |
| `/config/orderType/accept/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/OrderTypeSetController.java:34 |
| `/config/orderType/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:111 |
| `/config/orderType/batchAdOrderType` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:786 |
| `/config/orderType/batchCopyBusinessType` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:801 |
| `/config/orderType/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:77 |
| `/config/orderType/move` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:141 |
| `/config/orderType/optionName/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:61 |
| `/config/orderType/remove` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:126 |
| `/config/outsourcingItem/copy` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/outsourcingItem/controller/OutsourcingItemController.java:84 |
| `/config/outsourcingItem/delete` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/outsourcingItem/controller/OutsourcingItemController.java:64 |
| `/config/outsourcingItem/inherit/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/outsourcingItem/controller/OutsourcingItemController.java:75 |
| `/config/outsourcingItem/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/outsourcingItem/controller/OutsourcingItemController.java:46 |
| `/config/outsourcingItem/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/outsourcingItem/controller/OutsourcingItemController.java:37 |
| `/config/packingCharge/batchCopy` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1620 |
| `/config/packingCharge/edit` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1618 |
| `/config/packingCharge/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1619 |
| `/config/pay_qrcode/page` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1212 |
| `/config/payConfig/change` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:205 |
| `/config/payConfig/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:191 |
| `/config/payConfig/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:175 |
| `/config/permission/copy` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/PermissionController.java:78 |
| `/config/permission/get` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/PermissionController.java:50 |
| `/config/permission/save` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/PermissionController.java:64 |
| `/config/permission/types` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/PermissionController.java:36 |
| `/config/priceControls/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/PriceControlsController.java:38 |
| `/config/priceControls/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/PriceControlsController.java:94 |
| `/config/priceControls/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/PriceControlsController.java:80 |
| `/config/print/getPrintDataByCode` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/print/PrintController.java:26 |
| `/config/printCode/getDesignTemplatePrintCode` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/print/PrintCodeController.java:28 |
| `/config/printCode/getPreviewTemplatePrintCode` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/print/PrintCodeController.java:40 |
| `/config/printCode/getPrintTemplatePrintCode` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/print/PrintCodeController.java:50 |
| `/config/printer/template/copy` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/printertemplate/controller/PrinterController.java:140 |
| `/config/printer/template/delete` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/printertemplate/controller/PrinterController.java:127 |
| `/config/printer/template/find` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/printertemplate/controller/PrinterController.java:70 |
| `/config/printer/template/inherit/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/printertemplate/controller/PrinterController.java:112 |
| `/config/printer/template/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/printertemplate/controller/PrinterController.java:47 |
| `/config/printer/template/optionName/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/printertemplate/controller/PrinterController.java:86 |
| `/config/printer/template/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/printertemplate/controller/PrinterController.java:99 |
| `/config/printer/ticket/custom/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/printertemplate/controller/PrinterTicketCustomController.java:36 |
| `/config/privateField/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/privatefield/controller/PrivateFieldController.java:69 |
| `/config/privateField/cache/refresh` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/privatefield/controller/PrivateFieldController.java:89 |
| `/config/privateField/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/privatefield/controller/PrivateFieldController.java:51 |
| `/config/privateField/status/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/privatefield/controller/PrivateFieldController.java:121 |
| `/config/purchaseLimit/batchCopy` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1658 |
| `/config/purchaseLimit/copy` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:25 |
| `/config/purchaseLimit/edit` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1656 |
| `/config/purchaseLimit/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1654 |
| `/config/purchaseSet/copy` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/purchase/controller/PurchaseSetController.java:69 |
| `/config/purchaseSet/query` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/purchase/controller/PurchaseSetController.java:35 |
| `/config/purchaseSet/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/purchase/controller/PurchaseSetController.java:47 |
| `/config/purchaseSet/saveInherit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/purchase/controller/PurchaseSetController.java:58 |
| `/config/qrcodeorder/copy` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1164 |
| `/config/qrcodeorder/del` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1162 |
| `/config/qrcodeorder/detail` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1158 |
| `/config/qrcodeorder/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1156 |
| `/config/qrcodeorder/maintenance` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1160 |
| `/config/reasoncommon/manage/editReturnGoodsReason` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/reasoncommon/ReasonCommonManageController.java:30 |
| `/config/reasoncommon/manage/returnGoodsReasonInfo` | backend, miniapp, admin-v1 | POST, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/reasoncommon/ReasonCommonManageController.java:44 |
| `/config/rebatePlan/accept` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/rebate/controller/RebatePlanController.java:57 |
| `/config/rebatePlan/cancel` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/rebate/controller/RebatePlanController.java:65 |
| `/config/rebatePlan/close` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/rebate/controller/RebatePlanController.java:40 |
| `/config/rebatePlan/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/rebate/controller/RebatePlanController.java:49 |
| `/config/rebatePlan/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/rebate/controller/RebatePageController.java:40 |
| `/config/rebatePlan/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/rebate/controller/RebatePlanController.java:31 |
| `/config/rebateReward/delete` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:103 |
| `/config/rebateReward/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:99 |
| `/config/rebateReward/saveBatch` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:101 |
| `/config/rebateRewardConfig/add` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:95 |
| `/config/rebateRewardConfig/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:97 |
| `/config/rebateRewardDetail/delete` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:109 |
| `/config/rebateRewardDetail/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:105 |
| `/config/rebateRewardDetail/saveBatch` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:107 |
| `/config/rebateRule/editable` | backend, admin-v1 | ANY, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/rebate/controller/RebateRuleController.java:31 |
| `/config/rebateRule/getById` | backend, admin-v1 | ANY, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/rebate/controller/RebateRuleController.java:25 |
| `/config/rebateRule/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/rebate/controller/RebatePageController.java:31 |
| `/config/rebateRule/save` | backend, admin-v1 | ANY, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/rebate/controller/RebateRuleController.java:19 |
| `/config/rebateSet/days/copy` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/rebatesetdays/controller/RebateSetDaysController.java:42 |
| `/config/rebateSet/days/info` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/rebatesetdays/controller/RebateSetDaysController.java:33 |
| `/config/rebateSet/days/save` | backend, admin-v1 | ANY, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/rebatesetdays/controller/RebateSetDaysController.java:24 |
| `/config/replenishment/numberLimit/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/replenishment/controller/ReplenishmentController.java:25 |
| `/config/replenishment/numberLimit/set` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/replenishment/controller/ReplenishmentController.java:33 |
| `/config/retail/guideShareSet/edit` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1635 |
| `/config/retail/guideShareSet/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1637 |
| `/config/retail/integralRetailProfitSplit/setSplit` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1800 |
| `/config/retail/integralRetailProfitSplit/setSplitInfo` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1798 |
| `/config/retail/screen/copyScreenSetting` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1234 |
| `/config/retail/screen/getScreenSetting` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1226 |
| `/config/retail/screen/updateScreenSetting` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1230 |
| `/config/rights/department/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/rights/department/controller/RightsDepartmentController.java:41 |
| `/config/rights/department/get` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/rights/department/controller/RightsDepartmentController.java:53 |
| `/config/rights/department/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/rights/department/controller/RightsDepartmentController.java:30 |
| `/config/rightsGroups/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/rights/groups/controller/RightsGroupsController.java:77 |
| `/config/rightsGroups/delete` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/rights/groups/controller/RightsGroupsController.java:111 |
| `/config/rightsGroups/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/rights/groups/controller/RightsGroupsController.java:62 |
| `/config/rightsGroups/find` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/rights/groups/controller/RightsGroupsController.java:209 |
| `/config/rightsGroups/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/rights/groups/controller/RightsGroupsController.java:146 |
| `/config/rightsGroups/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/rights/groups/controller/RightsGroupsController.java:47 |
| `/config/rightsGroups/modify` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/rights/groups/controller/RightsGroupsController.java:94 |
| `/config/rightsGroups/move` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/rights/groups/controller/RightsGroupsController.java:128 |
| `/config/rightsGroups/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/rights/groups/controller/RightsGroupsController.java:161 |
| `/config/rightsGroups/set/get` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/rights/groups/controller/RightsGroupsController.java:177 |
| `/config/rightsGroups/set/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/rights/groups/controller/RightsGroupsController.java:192 |
| `/config/rightsGroups/user/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/rights/groups/controller/RightsGroupsUserController.java:54 |
| `/config/rightsGroups/user/delete` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/rights/groups/controller/RightsGroupsUserController.java:90 |
| `/config/rightsGroups/user/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/rights/groups/controller/RightsGroupsUserController.java:46 |
| `/config/rightsGroups/user/list` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/rights/groups/controller/RightsGroupsUserController.java:37 |
| `/config/rightsGroups/user/modify` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/rights/groups/controller/RightsGroupsUserController.java:72 |
| `/config/rightsGroups/user/move` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/rights/groups/controller/RightsGroupsUserController.java:107 |
| `/config/role/addedit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/SroleSetController.java:53 |
| `/config/role/del` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/SroleSetController.java:66 |
| `/config/role/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/SroleSetController.java:79 |
| `/config/role/getRoleByCode` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/SroleSetController.java:90 |
| `/config/role/getRoleById` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/SroleSetController.java:101 |
| `/config/role/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/SroleSetController.java:40 |
| `/config/rpc/appcode/findByOptionNameAndFCategoryIdAndGroupId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeRpcController.java:129 |
| `/config/rpc/appcode/getByOptionNameAndGroupId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeRpcController.java:136 |
| `/config/rpc/appcode/getExtendSetting` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeRpcController.java:115 |
| `/config/rpc/appcode/getFirstByOptionNameAndGroupId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeRpcController.java:152 |
| `/config/rpc/appcode/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeRpcController.java:147 |
| `/config/rpc/appcode/orderType/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeRpcController.java:158 |
| `/config/rpc/appcode/save` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeRpcController.java:142 |
| `/config/rpc/rightsGroups/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/rights/groups/controller/RightsGroupsRPCController.java:42 |
| `/config/rpc/rightsGroups/set/get` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/rights/groups/controller/RightsGroupsRPCController.java:57 |
| `/config/sale/logistics/custom/save` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:49 |
| `/config/scancode/info` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2302 |
| `/config/scancode/save` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2303 |
| `/config/series/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:371 |
| `/config/series/del` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:436 |
| `/config/series/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:729 |
| `/config/series/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:423 |
| `/config/SettlementSet/copy` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:75 |
| `/config/SettlementSet/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:79 |
| `/config/SettlementSet/save` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:77 |
| `/config/share/term/delete` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:191 |
| `/config/share/term/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:195 |
| `/config/share/term/move` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:189 |
| `/config/share/term/save` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:193 |
| `/config/shareDescription/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:171 |
| `/config/shareDescription/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:156 |
| `/config/shareDescriptionType/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:186 |
| `/config/smartSet/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1794 |
| `/config/smartSet/save` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1796 |
| `/config/smemberset/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:738 |
| `/config/smemberset/set` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:740 |
| `/config/spokesman/get` | admin-v1 | POST(default) | 2 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1902 |
| `/config/spokesman/set` | admin-v1 | POST(default) | 2 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1904 |
| `/config/supplier/direct/delivery/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/directDelivery/SupplierDirectDeliveryController.java:31 |
| `/config/supplier/direct/delivery/remove` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/directDelivery/SupplierDirectDeliveryController.java:52 |
| `/config/supplier/direct/delivery/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/directDelivery/SupplierDirectDeliveryController.java:41 |
| `/config/supplier/payType/delete` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/SupplierPayTypeController.java:81 |
| `/config/supplier/payType/list` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/SupplierPayTypeController.java:45 |
| `/config/supplier/payType/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/SupplierPayTypeController.java:60 |
| `/config/sys/group/config/getConfigByKey` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/SysGroupConfigController.java:47 |
| `/config/sys/group/config/getConfigByKeys` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/SysGroupConfigController.java:55 |
| `/config/sys/group/config/getIntelligentReplenishmentAlgorithmConfig` | backend, admin-v2 | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/SysGroupConfigController.java:113 |
| `/config/sys/group/config/getValueByKey` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/SysGroupConfigController.java:39 |
| `/config/sys/group/config/saveBatchValueByKeys` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/SysGroupConfigController.java:64 |
| `/config/sys/group/config/saveIntelligentReplenishmentAlgorithmConfig` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/SysGroupConfigController.java:104 |
| `/config/sys/group/config/saveValueByKey` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/SysGroupConfigController.java:72 |
| `/config/sys/tag/ConditionGroupInfoType` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1641 |
| `/config/sys/tag/conditionInfoType` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1643 |
| `/config/sys/tag/tagMemberList` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1649 |
| `/config/sys/tag/tagSettingInfo` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1647 |
| `/config/sys/tag/tagSettingList` | admin-v1 | POST(default) | 2 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:306 |
| `/config/sys/tag/tagSettingSave` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1645 |
| `/config/tasktype/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/dcommondata/controller/DcommondDataController.java:36 |
| `/config/tasktype/get` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/dcommondata/controller/DcommondDataController.java:49 |
| `/config/tasktype/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/dcommondata/controller/DcommondDataController.java:58 |
| `/config/tasktype/queryDcommonDataListByCTypeCode` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/dcommondata/controller/DcommondDataController.java:72 |
| `/config/taxrate/copy` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/taxrate/controller/TaxRateSetController.java:108 |
| `/config/taxrate/delete` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/taxrate/controller/TaxRateSetController.java:95 |
| `/config/taxrate/inherit/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/taxrate/controller/TaxRateSetController.java:80 |
| `/config/taxrate/list` | backend, admin-v1 | POST, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/taxrate/controller/TaxRateSetController.java:43 |
| `/config/taxrate/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/supplier/taxrate/controller/TaxRateSetController.java:67 |
| `/config/theme/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:831 |
| `/config/theme/set` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:844 |
| `/config/tl/findByTypeCode` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/tl/TlAppCodeController.java:30 |
| `/config/underline/cashier/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:305 |
| `/config/underline/cashierApply/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:306 |
| `/config/underline/copy` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:762 |
| `/config/unit/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:410 |
| `/config/unit/del` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:397 |
| `/config/unit/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:755 |
| `/config/unit/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:384 |
| `/config/urlType/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1805 |
| `/config/v1/b2b/freightset/action/copy` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:784 |
| `/config/v1/b2b/freightset/scheme/action/addProvinceLine` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:775 |
| `/config/v1/b2b/freightset/scheme/action/get` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:737 |
| `/config/v1/b2b/freightset/scheme/action/getType` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:748 |
| `/config/v1/b2b/freightset/scheme/action/removeProvinceLine` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:766 |
| `/config/v1/b2b/freightset/scheme/action/update` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/B2bSetController.java:757 |
| `/config/v1/b2b/inv/qty/action/show` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/api/InvShowConfigApiController.java:33 |
| `/config/v1/b2b/setting/common/action/get` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/api/CommonConfigApiController.java:34 |
| `/config/v1/decorate/{platformType}/common/action/copy` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/PlatformDecorateController.java:84 |
| `/config/v1/decorate/{platformType}/common/action/get` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/PlatformDecorateController.java:68 |
| `/config/v1/decorate/{platformType}/common/action/save` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/PlatformDecorateController.java:52 |
| `/config/v1/decorate/b2bmall/common/action/copy` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1613 |
| `/config/v1/decorate/b2bmall/common/action/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1609 |
| `/config/v1/decorate/b2bmall/common/action/save` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1610 |
| `/config/v1/decorate/b2bmall/microPage/action/del` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/PlatformDecorateController.java:108 |
| `/config/v1/decorate/b2bmall/microPage/action/page` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/PlatformDecorateController.java:97 |
| `/config/v1/decorate/guide/common/action/copy` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1614 |
| `/config/v1/decorate/guide/common/action/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1611 |
| `/config/v1/decorate/guide/common/action/save` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1612 |
| `/config/v1/decorate/guideWxa/microPage/action/del` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1959 |
| `/config/v1/decorate/guideWxa/microPage/action/page` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1957 |
| `/config/v1/decorate/mall/microPage/action/del` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2145 |
| `/config/v1/decorate/mall/microPage/action/page` | admin-v1 | POST(default) | 2 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:547 |
| `/config/v1/decorate/mealMall/microPage/action/del` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1671 |
| `/config/v1/decorate/mealMall/microPage/action/page` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1669 |
| `/config/v1/finance/currency/action/page` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2160 |
| `/config/v1/finance/currency/action/remove` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2162 |
| `/config/v1/finance/currency/action/save` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2161 |
| `/config/v1/finance/currency/exchangeRate/action/batchSave` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2165 |
| `/config/v1/finance/currency/exchangeRate/action/page` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2163 |
| `/config/v1/finance/currency/exchangeRate/action/save` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2164 |
| `/config/v1/finance/retail/action/copy` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2159 |
| `/config/v1/finance/retail/action/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2157 |
| `/config/v1/finance/retail/action/save` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2158 |
| `/config/v1/guide/inv/qty/action/show` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/api/InvShowConfigApiController.java:54 |
| `/config/v1/industryAttr/excelAdd` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/IndustryAttrController.java:69 |
| `/config/v1/retail/integral/holdDays/action/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1666 |
| `/config/v1/setting/feedback/action/get` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/FeedbackSettingController.java:70 |
| `/config/v1/setting/feedback/action/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/FeedbackSettingController.java:40 |
| `/config/v2/decorate/{moduleType}/get` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/PlatformDecorateController.java:138 |
| `/config/vehicle/delete` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/vehicle/controller/VehicleConfigController.java:40 |
| `/config/vehicle/get` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/vehicle/controller/VehicleConfigController.java:46 |
| `/config/vehicle/getVehicleConfig` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/vehicle/controller/VehicleConfigController.java:51 |
| `/config/vehicle/page` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/vehicle/controller/VehicleConfigController.java:35 |
| `/config/vehicle/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/vehicle/controller/VehicleConfigController.java:30 |
| `/config/vehicle/vehicleConfigImport` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/b2b/vehicle/controller/VehicleConfigController.java:57 |
| `/config/weChatMallGroup/active` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:632 |
| `/config/weChatMallGroup/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:582 |
| `/config/weChatMallGroup/move` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-config/src/main/java/com/reabam/system/controller/AppCodeController.java:617 |
| `/core/app/Business/Act/Detail` | miniapp | POST(default) | 1 | 仅单个前端证据 | semir-reabam-front/public/api.js:127 |
| `/core/app/Business/Act/Open` | miniapp | POST(default) | 1 | 仅单个前端证据 | semir-reabam-front/public/api.js:117 |
| `/core/app/Business/express/callback` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/express/ExpressController.java:30 |
| `/core/app/Business/express/list` | backend, miniapp, admin-v1 | POST, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/express/ExpressController.java:52 |
| `/core/app/Business/order/uniqueCodeAttr` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:718 |
| `/core/app/Business/order/updateAttr` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2002 |
| `/core/app/Business/order/updateUniCodeAttr` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:720 |
| `/core/app/Common/getKeyWord` | backend, miniapp | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/suggest/controller/CommonController.java:49 |
| `/core/app/Discover/getHotTags` | miniapp | POST(default) | 1 | 仅单个前端证据 | semir-reabam-front/public/api.js:121 |
| `/core/app/Discover/Household/Detai` | miniapp | POST(default) | 1 | 仅单个前端证据 | semir-reabam-front/public/api.js:120 |
| `/core/app/Discover/Household/Detail` | miniapp | POST(default) | 1 | 仅单个前端证据 | semir-reabam-front/public/api.js:122 |
| `/core/app/Discover/Household/List` | miniapp | POST(default) | 1 | 仅单个前端证据 | semir-reabam-front/public/api.js:119 |
| `/core/app/MsgCenter/TaskRemind/List` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1660 |
| `/core/app/MsgCenter/TaskRemind/Read` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1396 |
| `/core/app/System/AppCodes` | miniapp | POST(default) | 1 | 仅单个前端证据 | semir-reabam-front/public/api.js:126 |
| `/core/b2bcustomize/popup/show` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/decoration/controller/PopupDecorateController.java:42 |
| `/core/groupbuy/makeSucceed` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1753 |
| `/core/groupbuyAct/add` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1982 |
| `/core/groupbuyAct/detail` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1981 |
| `/core/groupbuyAct/edit` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1983 |
| `/core/groupbuyAct/list` | admin-v1 | POST(default) | 2 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1980 |
| `/core/mealmall/personal/center/setting/drag` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:232 |
| `/core/mealmall/personal/center/setting/info` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:236 |
| `/core/mealmall/personal/center/setting/update` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:234 |
| `/core/order/modification_time` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:777 |
| `/core/order/seperate/manual` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1860 |
| `/core/order/seperate/transfer` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1862 |
| `/core/v1/mall/home/publish` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:418 |
| `/dock/mysql5/findByCode` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-dock-mysql5/src/main/java/com/reabam/hr/gufen/controller/UserInfoController.java:46 |
| `/dock/mysql5/findByLastModifiedDate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-dock-mysql5/src/main/java/com/reabam/hr/gufen/controller/UserInfoController.java:38 |
| `/dock/mysql5/getAll` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-dock-mysql5/src/main/java/com/reabam/hr/gufen/controller/UserInfoController.java:54 |
| `/dock/mysql5/pageAll` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-dock-mysql5/src/main/java/com/reabam/hr/gufen/controller/UserInfoController.java:30 |
| `/file/config/rebateReward/import` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:91 |
| `/file/Goods/RecItems` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:839 |
| `/file/import/config/rebates_reward` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:752 |
| `/file/import/config/redoubled` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1344 |
| `/file/import/industry_attribute_item` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1694 |
| `/file/import/member/common` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2344 |
| `/file/import/member/coupon/excelAdd` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2342 |
| `/file/import/member/excelAdd` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2317 |
| `/file/import/member/service` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2321 |
| `/file/import/orderCompGroup/excelAdd` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1726 |
| `/file/import/orderRoutingComp/excelCheck` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1728 |
| `/file/import/packingCharge/exceladd` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1622 |
| `/file/import/qrcodeorder/excelAdd` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1168 |
| `/file/mem/integral/import` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2319 |
| `/file/mem/pullNewQrcode` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:514 |
| `/file/retail/order/import` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2658 |
| `/gen/getId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-id-generator/src/main/java/com/reabam/generator/controller/GeneratorController.java:34 |
| `/gen/getIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-id-generator/src/main/java/com/reabam/generator/controller/GeneratorController.java:47 |
| `/gen/getUid` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-id-generator/src/main/java/com/reabam/generator/controller/GeneratorController.java:60 |
| `/gen/getUids` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-id-generator/src/main/java/com/reabam/generator/controller/GeneratorController.java:73 |
| `/getBoardConfig` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-support/reabam-support-config/src/main/java/com/reabam/feign/set/retail/QueueNumberBoardConfigClient.java:19 |
| `/hr/announcement/add` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1490 |
| `/hr/announcement/comps` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/AnnouncementController.java:36 |
| `/hr/announcement/look` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1488 |
| `/hr/antiCounterfeitingCode/delete` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2712 |
| `/hr/antiCounterfeitingCode/findScanRecord` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:112 |
| `/hr/antiCounterfeitingCode/page` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2710 |
| `/hr/antiCounterfeitingCode/update` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2711 |
| `/hr/appcode/getPhone` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/AppCodeController.java:33 |
| `/hr/bankaccount/accountparame/detail` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:774 |
| `/hr/bankaccount/accountparame/set` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:772 |
| `/hr/bankaccount/add` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2072 |
| `/hr/bankaccount/allinpay/sign` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1670 |
| `/hr/bankaccount/applybindbankcard` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2086 |
| `/hr/bankaccount/bankmanageinfo/change` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2094 |
| `/hr/bankaccount/bindbankcard` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2088 |
| `/hr/bankaccount/detail` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1668 |
| `/hr/bankaccount/enterprisebank/bind` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2082 |
| `/hr/bankaccount/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1666 |
| `/hr/bankaccount/phone/sendMsg` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2080 |
| `/hr/bankaccount/unbindBankCard` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2090 |
| `/hr/bankaccount/yunst/queryInExpDetail` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2102 |
| `/hr/bankaccount/yunst/withdrawApply` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2110 |
| `/hr/business/info/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2591 |
| `/hr/cmbBatchPayRecord/cmbPayCallbackOfManual` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2676 |
| `/hr/collect` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CollectController.java:35 |
| `/hr/collect/del` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CollectController.java:80 |
| `/hr/collect/list` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CollectController.java:50 |
| `/hr/common/advancedFilterList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/CommonController.java:28 |
| `/hr/dock/gufen/sync/sap/invoice` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/dock/gufen/controller/GuFenController.java:51 |
| `/hr/dock/gufen/syncOrganization` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/dock/gufen/controller/GuFenController.java:35 |
| `/hr/dock/gufen/syncUser` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/dock/gufen/controller/GuFenController.java:67 |
| `/hr/fddAccount/getFddAccountInfo` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2282 |
| `/hr/fddAccount/getFddEnterpriseAccountInfo` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2281 |
| `/hr/fddContractSigningRecord/pageOfMgd` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2295 |
| `/hr/fddTemplate/getTemplateFileInfo` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2270 |
| `/hr/fddTemplate/uploadTemplate` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2269 |
| `/hr/fun/permission/copy` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/FunctionalApplicationController.java:76 |
| `/hr/fun/permission/get` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/FunctionalApplicationController.java:48 |
| `/hr/fun/permission/save` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/FunctionalApplicationController.java:62 |
| `/hr/fun/permission/types` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/FunctionalApplicationController.java:34 |
| `/hr/guide/address/delete` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/guide/address/controller/GuideAddressController.java:45 |
| `/hr/guide/address/getDefault` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/guide/address/controller/GuideAddressController.java:66 |
| `/hr/guide/address/saveOrUpdate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/guide/address/controller/GuideAddressController.java:34 |
| `/hr/guide/address/search` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/guide/address/controller/GuideAddressController.java:56 |
| `/hr/guide/interests/guides` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/guide/interests/controller/GuideInterestsController.java:35 |
| `/hr/guide/interests/integral/change` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/guide/interests/controller/GuideInterestsController.java:57 |
| `/hr/guide/interests/integral/record/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/guide/interests/controller/GuideInterestsController.java:46 |
| `/hr/guide/sign/in/delete` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/guide/signIn/controller/GuideSignInController.java:51 |
| `/hr/guide/sign/in/guide/search` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/guide/signIn/controller/GuideSignInController.java:70 |
| `/hr/guide/sign/in/saveOrUpdate` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/guide/signIn/controller/GuideSignInController.java:40 |
| `/hr/guide/sign/in/search` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/guide/signIn/controller/GuideSignInController.java:62 |
| `/hr/guide/sign/in/signIn` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/guide/signIn/controller/GuideSignInController.java:78 |
| `/hr/handover/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/DhandoverController.java:23 |
| `/hr/handover/getDefaultHd` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/DhandoverController.java:29 |
| `/hr/handover/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/DhandoverController.java:17 |
| `/hr/iamDataInitialization/iamAddMenuOrFunPermissions` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamTableDataInitializationController.java:54 |
| `/hr/iamDataInitialization/initIamMenuAndFunData` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamTableDataInitializationController.java:36 |
| `/hr/iamDataInitialization/oldAddMenuOrFunPermissions` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamTableDataInitializationController.java:45 |
| `/hr/iamDataInitialization/synNewBrandPermissions` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamTableDataInitializationController.java:65 |
| `/hr/iamFunction/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamFunctionController.java:31 |
| `/hr/iamMenu/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamMenuController.java:31 |
| `/hr/iamRole/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamRoleController.java:41 |
| `/hr/iamRole/function/select` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamRoleController.java:78 |
| `/hr/iamRole/mainMenuList` | backend, admin-v2 | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamRoleController.java:69 |
| `/hr/iamRole/roleCopy` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamRoleController.java:50 |
| `/hr/iamRole/rolePage` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamRoleController.java:58 |
| `/hr/iamRoleRel/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamRoleRelController.java:31 |
| `/hr/iamSync/syncAccount` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamSyncController.java:38 |
| `/hr/iamSync/syncRole` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamSyncController.java:29 |
| `/hr/iamUser/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamUserController.java:53 |
| `/hr/iamUser/getIamUserInfo` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamUserController.java:145 |
| `/hr/iamUser/getStaffByUserId` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamUserController.java:129 |
| `/hr/iamUser/getStaffPage` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamUserController.java:137 |
| `/hr/iamUser/groupList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamUserController.java:110 |
| `/hr/iamUser/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamUserController.java:61 |
| `/hr/iamUser/sso/redirectUrl` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamUserController.java:165 |
| `/hr/iamUserRoleRel/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamUserRoleRelController.java:41 |
| `/hr/iamUserRoleRel/pageByUserId` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamUserRoleRelController.java:49 |
| `/hr/init/group/registerView` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/SysGroupController.java:112 |
| `/hr/interimPartnershipAgreement/queryInfo` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2178 |
| `/hr/interimPartnershipAgreement/queryPage` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2177 |
| `/hr/invoice/b2bOrder/apply` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/invovice/b2b/controller/InvoiceController.java:57 |
| `/hr/invoice/b2bOrder/cancel` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/invovice/b2b/controller/InvoiceController.java:124 |
| `/hr/invoice/invoiceheader` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/invovice/b2b/controller/InvoiceController.java:137 |
| `/hr/invoice/myinvoice/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/invovice/b2b/controller/InvoiceController.java:146 |
| `/hr/invoice/redPunch` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/invovice/b2b/controller/InvoiceController.java:86 |
| `/hr/invoice/refreshInvoiceStatus` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/invovice/b2b/controller/InvoiceController.java:73 |
| `/hr/invoiceHeader/add` | miniapp, admin-v1 | POST(default) | 2 | 多个前端共享但未抽到后端 | semir-reabam-admin/src/js/api.js:2761 |
| `/hr/invoiceHeader/detail` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2762 |
| `/hr/invoiceHeader/list` | miniapp | POST(default) | 1 | 仅单个前端证据 | semir-reabam-front/public/api.js:156 |
| `/hr/invoiceHeaderr/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/InvoiceHeaderController.java:33 |
| `/hr/invoiceHeaderr/info` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/InvoiceHeaderController.java:40 |
| `/hr/invoiceHeaderr/page` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/InvoiceHeaderController.java:46 |
| `/hr/kpiplan/comp/staff/action/page` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1315 |
| `/hr/kpiplan/role/action/page` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:681 |
| `/hr/kpirule/detail/types` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1924 |
| `/hr/live/code/add` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:859 |
| `/hr/live/code/get/staff` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:871 |
| `/hr/live/code/get/staff/members` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:872 |
| `/hr/live/code/get/task` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:863 |
| `/hr/live/code/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:861 |
| `/hr/location/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/location/LocationManageController.java:35 |
| `/hr/location/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/location/LocationManageController.java:45 |
| `/hr/location/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/location/LocationManageController.java:55 |
| `/hr/mb2bcrd3/list` | admin-v2 | GET | 3 | 仅单个前端证据 | semir-bmall-admin-v2/app/src/components/NewShopOrder/CreateNewShopOrderForm/services/index.ts:93 |
| `/hr/mb2bcrd3/saveOrUpdate` | admin-v2 | POST | 2 | 仅单个前端证据 | semir-bmall-admin-v2/app/src/components/NewShopOrder/components/AddressManage/services/index.ts:26 |
| `/hr/mdm/channel/saveOrUpdate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/client/MdmHrClient.java:45 |
| `/hr/mdm/invoice/saveOrUpdate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/client/MdmHrClient.java:89 |
| `/hr/mdm/retailer/saveOrUpdate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/client/MdmHrClient.java:77 |
| `/hr/mdm/store/saveOrUpdate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/client/MdmHrClient.java:55 |
| `/hr/mdm/whs/saveOrUpdate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/client/MdmHrClient.java:66 |
| `/hr/mdmdic/list` | admin-v2 | GET | 1 | 仅单个前端证据 | semir-bmall-admin-v2/app/src/services/mdm.ts:87 |
| `/hr/mdmInvoice/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/MdmInvoiceController.java:31 |
| `/hr/mdmRetailer/page` | backend, admin-v2 | POST | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/MdmRetailerController.java:32 |
| `/hr/mdmStore/diff` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/MdmStoreController.java:40 |
| `/hr/mdmStore/page` | backend, admin-v2 | POST | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/MdmStoreController.java:31 |
| `/hr/missionObjectives/add` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:223 |
| `/hr/missionObjectives/getStatisticalUnitDataSouse` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:222 |
| `/hr/missionObjectives/getTargetTypeDataSouse` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:221 |
| `/hr/missionObjectives/info` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:225 |
| `/hr/missionObjectives/page` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:226 |
| `/hr/missionObjectives/update` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:224 |
| `/hr/operation/promotion/detail` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:136 |
| `/hr/operation/promotion/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:138 |
| `/hr/operation/promotion/persons` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:132 |
| `/hr/operation/promotion/save` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:130 |
| `/hr/org/sync/config/save` | backend | ANY | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/dock/gufen/controller/OrgSyncConfigController.java:22 |
| `/hr/performance/init` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/PerformanceController.java:22 |
| `/hr/platform/parameter/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:139 |
| `/hr/platform/parameter/set` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:141 |
| `/hr/promotion/add` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1815 |
| `/hr/promotion/get/staff` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1821 |
| `/hr/promotion/get/task` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1817 |
| `/hr/promotion/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1813 |
| `/hr/regnotice/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/regnotice/controller/RegNoticeController.java:34 |
| `/hr/regnotice/page` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/regnotice/controller/RegNoticeController.java:40 |
| `/hr/regnoticeitem/page` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/regnotice/controller/RegNoticeItemController.java:69 |
| `/hr/regnoticeitem/send` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/regnotice/controller/RegNoticeItemController.java:50 |
| `/hr/retail/invoice/accept` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:180 |
| `/hr/retail/invoice/batchApply` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:386 |
| `/hr/retail/invoice/cancel` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:384 |
| `/hr/retail/invoice/close` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:182 |
| `/hr/retail/invoice/commit` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:178 |
| `/hr/retail/invoice/detail` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:184 |
| `/hr/retail/invoice/getConfig` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:320 |
| `/hr/retail/invoice/mallTypes` | admin-v1 | POST(default) | 2 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:275 |
| `/hr/retail/invoice/orderSearch` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:381 |
| `/hr/retail/invoice/redPunch` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:382 |
| `/hr/retail/invoice/refreshInvoiceStatus` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:365 |
| `/hr/retail/invoice/search` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:186 |
| `/hr/retail/invoice/setConfig` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:319 |
| `/hr/settlement/close` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2645 |
| `/hr/settlement/confirm` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2564 |
| `/hr/settlement/detail` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2560 |
| `/hr/settlement/detail/tasklist` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2561 |
| `/hr/settlement/grant` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2652 |
| `/hr/settlement/grantSendSmsCode` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2706 |
| `/hr/settlement/invoice/add` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:843 |
| `/hr/settlement/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2559 |
| `/hr/settlement/staff/tasklist` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2562 |
| `/hr/settlement/taskdetail/tasklist` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2563 |
| `/hr/split/account/add` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:147 |
| `/hr/split/account/detail` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:149 |
| `/hr/split/account/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:151 |
| `/hr/split/account/record/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:157 |
| `/hr/split/config/get` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:155 |
| `/hr/split/config/save` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:153 |
| `/hr/staff/add/bankcard` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/StaffController.java:224 |
| `/hr/staff/add/openapi` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/StaffController.java:181 |
| `/hr/staff/attribute` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/StaffController.java:172 |
| `/hr/staff/bankcard/info` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/StaffController.java:215 |
| `/hr/staff/compstaffs` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/StaffController.java:133 |
| `/hr/staff/deloperate` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/StaffController.java:160 |
| `/hr/staff/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/StaffController.java:61 |
| `/hr/staff/edit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/StaffController.java:75 |
| `/hr/staff/edit/comp` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/StaffController.java:104 |
| `/hr/staff/editOperate` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StaffV2Controller.java:98 |
| `/hr/staff/experience/findComps` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StaffV2Controller.java:60 |
| `/hr/staff/getIsDetect` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StaffV2Controller.java:222 |
| `/hr/staff/information` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StaffV2Controller.java:251 |
| `/hr/staff/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/StaffController.java:47 |
| `/hr/staff/modifyPassword` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StaffV2Controller.java:43 |
| `/hr/staff/operate/detail` | backend, admin-v1 | POST, POST(default) | 3 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StaffV2Controller.java:148 |
| `/hr/staff/role` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/StaffController.java:117 |
| `/hr/staff/signInMaker` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/StaffController.java:238 |
| `/hr/staff/supplier/brand/findByStaffSupplierId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StaffSupplierItemBrandController.java:42 |
| `/hr/staff/supplier/brand/updateStaffSupplierItemBrand` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StaffSupplierItemBrandController.java:32 |
| `/hr/staff/supplier/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StaffSupplierController.java:61 |
| `/hr/staff/supplier/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StaffSupplierController.java:32 |
| `/hr/staff/supplier/remove` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StaffSupplierController.java:51 |
| `/hr/staff/supplier/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StaffSupplierController.java:41 |
| `/hr/staff/updateStaffSex` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/StaffController.java:203 |
| `/hr/staffcomp/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StaffCompController.java:52 |
| `/hr/staffcomp/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StaffCompController.java:90 |
| `/hr/staffcomp/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StaffCompController.java:40 |
| `/hr/staffcomp/listByStaffId` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StaffCompController.java:102 |
| `/hr/staffcomp/remove` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StaffCompController.java:78 |
| `/hr/staffcomp/update` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StaffCompController.java:65 |
| `/hr/staffdata/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/StaffDataController.java:53 |
| `/hr/staffdata/import` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/StaffDataController.java:91 |
| `/hr/staffdata/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/StaffDataController.java:41 |
| `/hr/staffdata/listByStaffId` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/StaffDataController.java:111 |
| `/hr/staffdata/remove` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/StaffDataController.java:79 |
| `/hr/staffdata/update` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/StaffDataController.java:66 |
| `/hr/staffLogiWhsStor/addBatch` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/staffstor/controller/StaffLogiWhsStorController.java:40 |
| `/hr/staffLogiWhsStor/deleteBatch` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/staffstor/controller/StaffLogiWhsStorController.java:69 |
| `/hr/staffLogiWhsStor/page` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/staffstor/controller/StaffLogiWhsStorController.java:84 |
| `/hr/staffLogiWhsStor/queryLogiWhsStorStaff` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/staffstor/controller/StaffLogiWhsStorController.java:98 |
| `/hr/staffLogiWhsStor/updateBatch` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/staffstor/controller/StaffLogiWhsStorController.java:55 |
| `/hr/statement/detail` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StatementController.java:73 |
| `/hr/statement/filter` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StatementController.java:245 |
| `/hr/statement/fix` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StatementController.java:256 |
| `/hr/statement/generate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StatementController.java:85 |
| `/hr/statement/generate/audit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StatementController.java:136 |
| `/hr/statement/generate/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StatementController.java:111 |
| `/hr/statement/generate/forward` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StatementController.java:97 |
| `/hr/statement/generate/refresh` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StatementController.java:123 |
| `/hr/statement/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StatementController.java:51 |
| `/hr/statement/transferMethod/add` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StatementController.java:152 |
| `/hr/statement/transferMethod/edit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StatementController.java:180 |
| `/hr/statement/transferMethod/inherit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StatementController.java:227 |
| `/hr/statement/transferMethod/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StatementController.java:209 |
| `/hr/statement/transferMethod/offset` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StatementController.java:194 |
| `/hr/statement/transferMethod/remove` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/StatementController.java:167 |
| `/hr/sysGroup/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/SysGroupController.java:37 |
| `/hr/sysGroup/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/SysGroupController.java:105 |
| `/hr/sysGroup/findByGroupId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/SysGroupRpcController.java:52 |
| `/hr/sysGroup/findGroupByGroupIdSet` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/SysGroupRpcController.java:47 |
| `/hr/sysGroup/findSysGroupsByActive` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/SysGroupRpcController.java:36 |
| `/hr/sysGroup/getCode` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/SysGroupController.java:66 |
| `/hr/sysGroup/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/SysGroupController.java:82 |
| `/hr/sysGroup/undateFee` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/SysGroupController.java:88 |
| `/hr/sysstaffBankBranch/queryListByCnapsNameLike` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:749 |
| `/hr/sysstaffHeadBank/queryListByParticipantAliasLike` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2689 |
| `/hr/sysStaffRel/listById` | backend, admin-v1 | GET, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/SysStaffRelController.java:33 |
| `/hr/sysStaffRel/unbind/{mobile}/{staffId}` | backend | DELETE | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/SysStaffRelController.java:44 |
| `/hr/sysstaffTlAccount/custRegister` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:732 |
| `/hr/sysstaffTlAccount/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:730 |
| `/hr/sysstaffTlAccount/orderConfirm` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:769 |
| `/hr/sysstaffTlAccount/passwordManagement` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2638 |
| `/hr/sysstaffTlAccount/passwordSuccess` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2639 |
| `/hr/sysstaffTlAccount/queryAccountSafeInfo` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2636 |
| `/hr/sysstaffTlAccount/queryAcctDetail` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:765 |
| `/hr/sysstaffTlAccount/queryInfo` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:744 |
| `/hr/sysstaffTlAccount/sendMsg` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:734 |
| `/hr/sysstaffTlAccount/syncagreeinfo` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:751 |
| `/hr/sysstaffTlAccount/updateAssociatedAccount` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2186 |
| `/hr/sysstaffTlAccount/updateMAccountBankInfo` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2678 |
| `/hr/sysstaffTlAccount/updateTlAccount` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2648 |
| `/hr/sysstaffTlAccount/userWithdraw` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:767 |
| `/hr/taskManage/detail` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2106 |
| `/hr/taskManage/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2104 |
| `/hr/taskManage/location/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2108 |
| `/hr/taskManage/receive/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2574 |
| `/hr/taskReceive/countGroupByStatus` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2185 |
| `/hr/taskReceive/queryIncomeRecord` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2685 |
| `/hr/test/restOrganization` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/dock/gufen/controller/TestController.java:22 |
| `/hr/the/pacific/cancelCorrect` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2817 |
| `/hr/the/pacific/confirmInsurance` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2805 |
| `/hr/the/pacific/correctApply` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2818 |
| `/hr/the/pacific/detail` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2803 |
| `/hr/the/pacific/edit` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2804 |
| `/hr/the/pacific/findByBatchNoAndName` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2802 |
| `/hr/the/pacific/findByInsuranceId` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2815 |
| `/hr/the/pacific/findCorrectDetail` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2819 |
| `/hr/the/pacific/getBatchNo` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2808 |
| `/hr/the/pacific/getCallbackResult` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2816 |
| `/hr/train/curricula/question/delete` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:579 |
| `/hr/train/curricula/question/detail` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:589 |
| `/hr/train/curricula/question/detail/answer/saveOrUpdate` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:581 |
| `/hr/train/curricula/question/detail/types` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:585 |
| `/hr/train/curricula/question/import` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2585 |
| `/hr/train/curricula/question/saveOrUpdate` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:583 |
| `/hr/train/curricula/question/search` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:587 |
| `/hr/trainCurricula/apply/addApply` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:605 |
| `/hr/trainCurricula/apply/applyList` | admin-v1 | POST(default) | 2 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:601 |
| `/hr/trainCurricula/apply/cancelByApplyIds` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:599 |
| `/hr/trainCurricula/apply/copy` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:607 |
| `/hr/trainCurricula/apply/getInherit` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2266 |
| `/hr/trainCurricula/apply/setInherit` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2264 |
| `/hr/trainCurricula/catalog/children` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:647 |
| `/hr/trainCurricula/catalog/coverSave` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:659 |
| `/hr/trainCurricula/catalog/delete` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:649 |
| `/hr/trainCurricula/catalog/ext/saveOrUpdate` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:663 |
| `/hr/trainCurricula/catalog/getById` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:657 |
| `/hr/trainCurricula/catalog/isFinalNode` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:651 |
| `/hr/trainCurricula/catalog/move` | admin-v1 | POST(default) | 2 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:593 |
| `/hr/trainCurricula/catalog/saveOrUpdate` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:661 |
| `/hr/trainCurricula/catalog/tree` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:653 |
| `/hr/trainCurricula/getById` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:655 |
| `/hr/trainCurricula/getCatalog` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:409 |
| `/hr/trainCurricula/query` | admin-v1 | POST(default) | 2 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:641 |
| `/hr/trainCurricula/saveOrUpdate` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:643 |
| `/hr/wechatAssistantTemplate/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/WechatAssistantTemplateController.java:35 |
| `/hr/wechatAssistantTemplate/save` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/WechatAssistantTemplateController.java:44 |
| `/hr/wechatAssistantTemplate/send` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/WechatAssistantTemplateController.java:53 |
| `/hr/wechatAssistantTemplateContent/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/WechatAssistantTemplateContentController.java:31 |
| `/hr/wechatUser/assistant/manage/state` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/WechatUserController.java:108 |
| `/hr/wechatUser/assistant/state/pop` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/WechatUserController.java:100 |
| `/hr/wechatUser/code2Session` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/WechatUserController.java:82 |
| `/hr/wechatUser/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/WechatUserController.java:52 |
| `/hr/wechatUser/detailByMobile` | backend, admin-v2 | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/WechatUserController.java:62 |
| `/hr/wechatUser/mini/bindWechatUser/list` | backend, miniapp | GET | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/WechatUserController.java:145 |
| `/hr/wechatUser/mini/unbind/{mobile}` | backend | DELETE | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/WechatUserController.java:157 |
| `/hr/wechatUser/mini/unbind/${data.mobile}` | miniapp | DELETE | 1 | 仅单个前端证据 | semir-reabam-front/packageForMy/services/messageApis.js:23 |
| `/hr/wechatUser/save/wechatUserInfo` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/WechatUserController.java:91 |
| `/hr/wechatUser/unbind/{mobile}` | backend | DELETE | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/WechatUserController.java:72 |
| `/hr/wechatUser/unbind/${mobile}` | admin-v2 | DELETE | 1 | 仅单个前端证据 | semir-bmall-admin-v2/app/src/pages/iamUser/service/index.ts:225 |
| `/hr/wechatUser/update/assistant/pop/state` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/WechatUserController.java:117 |
| `/hr/wechatUser/update/openStoreAssistant/state` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/WechatUserController.java:136 |
| `/hr/wechatUserRel/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/WechatUserRelController.java:31 |
| `/hr/weCome/add` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/UserWeComController.java:34 |
| `/hr/weCome/delete` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/UserWeComController.java:46 |
| `/hr/weCome/list` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/UserWeComController.java:28 |
| `/hr/weCome/update` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/hr/controller/UserWeComController.java:40 |
| `/hr/yeahka/add/contract` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:125 |
| `/hr/yeahka/add/shop` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:131 |
| `/hr/yeahka/city` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:137 |
| `/hr/yeahka/contract/payFee` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:129 |
| `/hr/yeahka/contract/payList` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:127 |
| `/hr/yeahka/merchant/add` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:133 |
| `/hr/yeahka/merchantclass` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:135 |
| `/hr/yeahka/uploadFile` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:123 |
| `/hr/yunst/pay` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2112 |
| `/iamUserRel/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/IamUserRelController.java:31 |
| `/manage/app/available/platform/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:802 |
| `/manage/app/common/changeThemeColors` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:765 |
| `/manage/app/Common/ForgetPwd` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:198 |
| `/manage/app/Common/GetUpyunFormParams` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:421 |
| `/manage/app/Common/GetUserInfo` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:738 |
| `/manage/app/Common/Register` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:123 |
| `/manage/app/Common/ResetPwd` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:213 |
| `/manage/app/Common/SendMsg` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:243 |
| `/manage/app/Common/UpdatePassword` | backend, miniapp, admin-v1 | POST, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:228 |
| `/manage/app/Common/UpdatePhone` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:324 |
| `/manage/app/Common/updateStateOrIdentity` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:497 |
| `/manage/app/Common/UpdateUser` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:289 |
| `/manage/app/Common/updateUserName` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:534 |
| `/manage/app/Common/UserIdentity` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:385 |
| `/manage/app/Common/UserInfo` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:603 |
| `/manage/app/Common/ValidPhone` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:309 |
| `/manage/app/Common/Version` | backend | ANY | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:404 |
| `/manage/app/menu/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/MenuController.java:26 |
| `/manage/app/system/auditUser` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:687 |
| `/manage/app/system/editorRole` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:723 |
| `/manage/app/system/findRoles` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:705 |
| `/manage/app/System/FindSFunction` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:650 |
| `/manage/app/System/FindUsedsedSFunction` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:669 |
| `/manage/app/System/SetMenuDisplay` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:632 |
| `/manage/app/UpGrade/NewVersion` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-manage/src/main/java/com/reabam/manage/controller/ManageController.java:68 |
| `/manage/getUserInfo` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:881 |
| `/manage/UpdateUser` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1629 |
| `/mem/member/integral/update` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wx/feign/MemberFeignHystrixClient.java:35 |
| `/mem/member/wxUpdateMemberInfo` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wx/feign/MemberFeignHystrixClient.java:63 |
| `/member/financeCard/addOrEdit` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/semir-member/src/main/java/com/reabam/controller/finance/card/FinanceCardController.java:118 |
| `/member/financeCard/applyPackage` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/semir-member/src/main/java/com/reabam/controller/finance/card/FinanceCardController.java:78 |
| `/member/financeCard/bathOrderCalculateFinanceCardUse` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/semir-member/src/main/java/com/reabam/controller/finance/card/FinanceCardController.java:144 |
| `/member/financeCard/calculateFinanceCardUse` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/semir-member/src/main/java/com/reabam/controller/finance/card/FinanceCardController.java:136 |
| `/member/financeCard/details` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/semir-member/src/main/java/com/reabam/controller/finance/card/FinanceCardController.java:102 |
| `/member/financeCard/detailsById` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/semir-member/src/main/java/com/reabam/controller/finance/card/FinanceCardController.java:110 |
| `/member/financeCard/flow/adjust/save` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/semir-member/src/main/java/com/reabam/controller/finance/card/FinanceCardFlowController.java:44 |
| `/member/financeCard/flowAdjustTotal` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/semir-member/src/main/java/com/reabam/controller/finance/card/FinanceCardController.java:62 |
| `/member/financeCard/flowByPage` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/semir-member/src/main/java/com/reabam/controller/finance/card/FinanceCardController.java:94 |
| `/member/financeCard/listByPage` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/semir-member/src/main/java/com/reabam/controller/finance/card/FinanceCardController.java:127 |
| `/member/financeCard/queryFilterItem` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/semir-member/src/main/java/com/reabam/controller/finance/card/FinanceCardController.java:53 |
| `/openapi/activity/liveChannels/muDuLiveCallback` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiActivityController.java:36 |
| `/openapi/allot/order/whsin` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:603 |
| `/openapi/allot/order/whsout` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1556 |
| `/openapi/allotOrder/addOtherAllotOrder` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:441 |
| `/openapi/allotorder/list/query` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:98 |
| `/openapi/allotOrder/updateAllot` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:462 |
| `/openapi/allotOrder/updateQty` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:483 |
| `/openapi/antiCounterfeitingCode/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/AntiCounterfeitingCodeController.java:37 |
| `/openapi/antiCounterfeitingCode/query` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/AntiCounterfeitingCodeController.java:51 |
| `/openapi/b2b/whsInvoice` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/B2bOrderController.java:144 |
| `/openapi/b2border/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/B2bOrderController.java:57 |
| `/openapi/b2border/billmoney/confirm` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/B2bOrderController.java:133 |
| `/openapi/b2border/changeStatus` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:624 |
| `/openapi/b2border/delivery` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:971 |
| `/openapi/b2border/delivery/cancel` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1253 |
| `/openapi/b2border/delivery/simple` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:987 |
| `/openapi/b2border/drefund/accept` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/B2bOrderController.java:76 |
| `/openapi/b2border/drefund/receiving` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/B2bOrderController.java:99 |
| `/openapi/b2border/editMcoupon` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/B2bOrderController.java:113 |
| `/openapi/b2border/list/query` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1209 |
| `/openapi/b2border/new/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/B2bOrderController.java:67 |
| `/openapi/b2border/refund/confirmReturn` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/B2bOrderController.java:122 |
| `/openapi/b2border/refund/differenceRefund` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:513 |
| `/openapi/b2borderItem/changeStatus` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1237 |
| `/openapi/b2bquote/changeStatus` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:640 |
| `/openapi/b2brefund/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:672 |
| `/openapi/b2brefund/changeStatus` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:656 |
| `/openapi/b2brefund/confirmRefund` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:233 |
| `/openapi/b2brefund/list/query` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1223 |
| `/openapi/b2brefund/refund/confirmRefund` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:528 |
| `/openapi/bond/management/send` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:608 |
| `/openapi/brandSalesman/update` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:573 |
| `/openapi/Business/Staff/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:713 |
| `/openapi/checkvouch/list/query` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:128 |
| `/openapi/CheckVouch/Posting` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:752 |
| `/openapi/comp/credit/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:558 |
| `/openapi/comp/credit/change` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1159 |
| `/openapi/costRevaluation/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:218 |
| `/openapi/coupon/accept` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:188 |
| `/openapi/currency/rate/change` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1466 |
| `/openapi/customs/dataUp` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/ThirdOrderSalesDetailedController.java:42 |
| `/openapi/diffOrder/accept` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:543 |
| `/openapi/dPurchaseReturn/query` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:768 |
| `/openapi/fund/management/new/send` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:588 |
| `/openapi/fund/management/query` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1586 |
| `/openapi/fund/management/send` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:572 |
| `/openapi/goodsin/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:378 |
| `/openapi/goodsin/cancel` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:399 |
| `/openapi/goodsin/completion` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1603 |
| `/openapi/goodsin/order/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:878 |
| `/openapi/goodsin/order/addList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:438 |
| `/openapi/goodsin/update` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:513 |
| `/openapi/goodsin/updateQty` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:504 |
| `/openapi/hr/maintain` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1172 |
| `/openapi/iam/api/sync/account` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/controller/IamController.java:44 |
| `/openapi/iam/api/sync/role` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/controller/IamController.java:31 |
| `/openapi/iamUser/sso/redirect` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/controller/IamSsoController.java:27 |
| `/openapi/inStore/machining/order/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/InStoreMachiningController.java:45 |
| `/openapi/inStore/machining/order/finnish` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/InStoreMachiningController.java:81 |
| `/openapi/inStore/machining/order/receipt` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/InStoreMachiningController.java:66 |
| `/openapi/intellectAi/createOrder` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/controller/IntellectAiDataController.java:86 |
| `/openapi/intellectAi/groupData` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/controller/IntellectAiDataController.java:53 |
| `/openapi/logiWhsReceivingAudit/audit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:468 |
| `/openapi/mdm/brand/saveOrUpdate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/MdmController.java:65 |
| `/openapi/mdm/channel/saveOrUpdate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/MdmController.java:84 |
| `/openapi/mdm/color/saveOrUpdate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/MdmController.java:178 |
| `/openapi/mdm/goodsCategory/saveOrUpdate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/MdmController.java:218 |
| `/openapi/mdm/invoice/saveOrUpdate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/MdmController.java:159 |
| `/openapi/mdm/region/saveOrUpdate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/MdmController.java:274 |
| `/openapi/mdm/retailer/saveOrUpdate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/MdmController.java:140 |
| `/openapi/mdm/size/saveOrUpdate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/MdmController.java:197 |
| `/openapi/mdm/spu/saveOrUpdate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/MdmController.java:237 |
| `/openapi/mdm/store/saveOrUpdate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/MdmController.java:103 |
| `/openapi/mdm/value/saveOrUpdate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/MdmController.java:46 |
| `/openapi/mdm/whs/saveOrUpdate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/MdmController.java:121 |
| `/openapi/msupplier/maintain` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:420 |
| `/openapi/needOrder/allocationt` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:203 |
| `/openapi/needOrder/change/status` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1400 |
| `/openapi/needOrder/changeStatus` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:529 |
| `/openapi/needOrder/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1105 |
| `/openapi/needorder/list/query` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:83 |
| `/openapi/order/addAllotOrder` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiOrderController.java:36 |
| `/openapi/order/customAccountDeductRate/change` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:588 |
| `/openapi/order/delivery/complete` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/DeliveryApiController.java:30 |
| `/openapi/order/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1122 |
| `/openapi/order/externalOrderNoAsync` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:782 |
| `/openapi/order/findOrderByOutOrderNo` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:797 |
| `/openapi/params/sign` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:137 |
| `/openapi/picking/createOutboundOrder` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1269 |
| `/openapi/printlog/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1069 |
| `/openapi/printTaks/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1037 |
| `/openapi/printTaks/set` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1053 |
| `/openapi/proRule/promotion/accept` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:423 |
| `/openapi/proRule/saveCombRule` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/PromotionController.java:29 |
| `/openapi/purchase/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:618 |
| `/openapi/purchaseReceipt/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1086 |
| `/openapi/purchaseReturn/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1018 |
| `/openapi/purchaseReturn/addList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:453 |
| `/openapi/purchaseReturn/update` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1193 |
| `/openapi/splitSettleOrder/update` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1369 |
| `/openapi/supply/order/delivery` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1345 |
| `/openapi/supply/orderItem/change` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1354 |
| `/openapi/third/editThirdOrderSalesDetailed` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/ThirdOrderSalesDetailedController.java:30 |
| `/openapi/whsIn/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:315 |
| `/openapi/whsIn/date/list/query` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:158 |
| `/openapi/whsIn/list/query` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1436 |
| `/openapi/whsInNotice/accept` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:483 |
| `/openapi/whsInNotice/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:335 |
| `/openapi/whsInNotice/addList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:666 |
| `/openapi/whsInNotice/cancelOrClose` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:365 |
| `/openapi/whsout/accept` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:173 |
| `/openapi/whsout/add` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:336 |
| `/openapi/whsOut/date/list/query` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:143 |
| `/openapi/whsOut/list/query` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiController.java:1451 |
| `/openapi/whsOutNotice/accept` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:498 |
| `/openapi/whsOutNotice/cancelOrClose` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApi2Controller.java:350 |
| `/openapi/wms/allotDelivery` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiWmsController.java:68 |
| `/openapi/wms/findDiffOrder` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-openapi/src/main/java/com/reabam/openapi/controller/OpenApiWmsController.java:59 |
| `/openapi/x5/full/manegement` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/x5/controller/X5FullManagementController.java:32 |
| `/openapi/x5/order/confirm` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/x5/controller/X5OpenApiController.java:44 |
| `/openapi/x5/refund/confirm` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/x5/controller/X5OpenApiController.java:70 |
| `/receiving` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-support/reabam-support-b2b/reabam-support-b2b-feign/src/main/java/com/reabam/refund/B2BOrderRefundClient.java:12 |
| `/sch/schedule/mergeScheduleJob` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-schedule/src/main/java/com/reabam/schedule/controller/ScheduleController.java:55 |
| `/sch/schedule/refresh` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-schedule/src/main/java/com/reabam/schedule/controller/ScheduleController.java:39 |
| `/sch/schedule/refresh/job` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-schedule/src/main/java/com/reabam/schedule/controller/ScheduleController.java:70 |
| `/schedule/dowork` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-support/reabam-support-schedule/reabam-support-schedule-core/src/main/java/com/reabam/schedule/controller/ScheduleDoWorkController.java:36 |
| `/send/test` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/test/SendEventController.java:26 |
| `/send/test/sendUnreliableEventMessage` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/test/SendEventController.java:37 |
| `/sms/rpc/super/entrance/retry` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-sms/src/main/java/com/reabam/sms/controller/SmsSupperEntranceController.java:29 |
| `/sms/rpc/verifyMsgCode` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-sms/src/main/java/com/reabam/sms/controller/SmsRpcController.java:28 |
| `/sms/sendAliyunSMSMsg` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-sms/src/main/java/com/reabam/sms/SendSMSController.java:21 |
| `/sms/sendMsgController/getSysMeg` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-sms/src/main/java/com/reabam/sms/controller/SendMsgController.java:108 |
| `/sms/sendMsgController/kuaimai` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-sms/src/main/java/com/reabam/sms/controller/SendMsgController.java:120 |
| `/sms/sendMsgController/sendMsg` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-sms/src/main/java/com/reabam/sms/controller/SendMsgController.java:41 |
| `/sms/sendMsgController/sendMsgByServcer` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-sms/src/main/java/com/reabam/sms/controller/SendMsgController.java:92 |
| `/sms/sendMsgController/sendMsgBySmsType` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-sms/src/main/java/com/reabam/sms/controller/SendMsgController.java:61 |
| `/task/billmaterials/batchStepCommit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-task/src/main/java/com/reabam/b2b/billmaterials/controller/BillmaterialsImportController.java:30 |
| `/task/checkVouchDiffSet/batchStepCommit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-task/src/main/java/com/reabam/config/controller/CheckVouchDiffSetController.java:29 |
| `/task/staffComp/batchStepCommit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-task/src/main/java/com/reabam/sttaff/controller/StaffCompController.java:29 |
| `/task/staffData/batchStepCommit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-task/src/main/java/com/reabam/sttaff/controller/StaffDataController.java:29 |
| `/task/staffSupplier/batchStepCommit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-task/src/main/java/com/reabam/sttaff/controller/StaffSupplierController.java:29 |
| `/task/supplierItemComp/batchStepCommit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-task/src/main/java/com/reabam/b2b/supplier/controller/SupplierItemCompController.java:29 |
| `/task/updateOrg/updateOrgInfo` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-task/src/main/java/com/reabam/controller/UpdateOrgInfoController.java:21 |
| `/track/event/user/record/add` | backend, miniapp, admin-v1, admin-v2 | POST, POST(default) | 4 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/semir-track/src/main/java/com/reabam/controller/TrackEventUserRecordController.java:58 |
| `/track/event/user/record/get/headerIp` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/semir-track/src/main/java/com/reabam/controller/TrackEventUserRecordController.java:109 |
| `/track/event/user/record/init/config/cache` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/semir-track/src/main/java/com/reabam/controller/TrackEventUserRecordController.java:94 |
| `/warehouse/accept/outboundOrder` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/WarehouseController.java:169 |
| `/warehouse/accept/warehouseReceipt` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/WarehouseController.java:148 |
| `/warehouse/batchConversion/add` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2794 |
| `/warehouse/batchConversion/info` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2792 |
| `/warehouse/batchConversion/page` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2791 |
| `/warehouse/confirm/outboundOrder` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/WarehouseController.java:179 |
| `/warehouse/confirm/warehouseReceipt` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/WarehouseController.java:158 |
| `/warehouse/createBatchBarcodeByOutbount` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/WarehouseController.java:139 |
| `/warehouse/createOrUpdateOutboundOrderDraft` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/WarehouseController.java:130 |
| `/warehouse/createOrUpdateWarehouseReceiptDraft` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/WarehouseController.java:95 |
| `/warehouse/createOutboundOrder` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/WarehouseController.java:107 |
| `/warehouse/createWarehouseReceipt` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/WarehouseController.java:72 |
| `/warehouse/logiWhsCaseCode/relateOrder/caseCode/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:559 |
| `/warehouse/mlogiWhs/add` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1835 |
| `/warehouse/mlogiWhs/info` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1839 |
| `/warehouse/mlogiWhs/page` | admin-v1 | POST(default) | 3 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2241 |
| `/warehouse/mlogiWhs/update` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1837 |
| `/warehouse/mlogiWhsArea/add` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1852 |
| `/warehouse/mlogiWhsArea/info` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1856 |
| `/warehouse/mlogiWhsArea/page` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1858 |
| `/warehouse/mlogiWhsArea/update` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1854 |
| `/warehouse/mlogiWhsComp/addBatch` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1843 |
| `/warehouse/mlogiWhsComp/delBatch` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1845 |
| `/warehouse/mlogiWhsComp/page` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1841 |
| `/warehouse/mlogiWhsComp/updateDefaultItemStatusId` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1849 |
| `/warehouse/mlogiWhsComp/updateIsDefDamagedWhs` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1847 |
| `/warehouse/mlogiWhsContainer/add` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1872 |
| `/warehouse/mlogiWhsContainer/info` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1876 |
| `/warehouse/mlogiWhsContainer/page` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1878 |
| `/warehouse/mlogiWhsContainer/update` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1874 |
| `/warehouse/mlogiWhsContainer/upload` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1688 |
| `/warehouse/mlogiWhsContainerType/add` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1861 |
| `/warehouse/mlogiWhsContainerType/info` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1865 |
| `/warehouse/mlogiWhsContainerType/page` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1867 |
| `/warehouse/mlogiWhsContainerType/update` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1863 |
| `/warehouse/mlogiWhsItemStatus/add` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1887 |
| `/warehouse/mlogiWhsItemStatus/info` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1883 |
| `/warehouse/mlogiWhsItemStatus/page` | admin-v1 | POST(default) | 2 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2270 |
| `/warehouse/mlogiWhsItemStatus/update` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1885 |
| `/warehouse/mlogiWhsShelvesScript/add` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1896 |
| `/warehouse/mlogiWhsShelvesScript/info` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1892 |
| `/warehouse/mlogiWhsShelvesScript/page` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1890 |
| `/warehouse/mlogiWhsShelvesScript/update` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1894 |
| `/warehouse/mlogiWhsShelvesScriptStor/page` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1898 |
| `/warehouse/mlogiWhsShelvesType/add` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2183 |
| `/warehouse/mlogiWhsShelvesType/info` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2182 |
| `/warehouse/mlogiWhsShelvesType/page` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2181 |
| `/warehouse/mlogiWhsShelvesType/update` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2184 |
| `/warehouse/mlogiWhsStorArea/add` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2192 |
| `/warehouse/mlogiWhsStorArea/getLineTypeDataSouse` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2191 |
| `/warehouse/mlogiWhsStorArea/getStoreAreTypeDataSouse` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2190 |
| `/warehouse/mlogiWhsStorArea/info` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2194 |
| `/warehouse/mlogiWhsStorArea/page` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2195 |
| `/warehouse/mlogiWhsStorArea/pageByStor` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2203 |
| `/warehouse/mlogiWhsStorArea/update` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2193 |
| `/warehouse/mlogiWhsStorArea/updateWorkAreaSn` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2204 |
| `/warehouse/mlogiWhsStorLocation/add` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2197 |
| `/warehouse/mlogiWhsStorLocation/getLineTypeDataSouse` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2201 |
| `/warehouse/mlogiWhsStorLocation/info` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2199 |
| `/warehouse/mlogiWhsStorLocation/page` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2200 |
| `/warehouse/mlogiWhsStorLocation/update` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2198 |
| `/warehouse/mlogiWhsStorLocation/upload` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1690 |
| `/warehouse/mlogiWhsWorkArea/add` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2186 |
| `/warehouse/mlogiWhsWorkArea/info` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2188 |
| `/warehouse/mlogiWhsWorkArea/page` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:1869 |
| `/warehouse/mlogiWhsWorkArea/type/list` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2185 |
| `/warehouse/mlogiWhsWorkArea/update` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2187 |
| `/warehouse/mlogiWhsWorkAreaPrinter/add` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2214 |
| `/warehouse/mlogiWhsWorkAreaPrinter/delete` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2216 |
| `/warehouse/mlogiWhsWorkAreaPrinter/info` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2213 |
| `/warehouse/mlogiWhsWorkAreaPrinter/page` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2212 |
| `/warehouse/mlogiWhsWorkAreaPrinter/update` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2215 |
| `/warehouse/mlogiWhsWorkAreaStor/addBatch` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2206 |
| `/warehouse/mlogiWhsWorkAreaStor/delBatch` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2207 |
| `/warehouse/mlogiWhsWorkAreaStor/page` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2205 |
| `/warehouse/mWhs/getWhsIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/MWhsController.java:29 |
| `/warehouse/mWhsRel/updateWhsType` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/MWhsRelController.java:36 |
| `/warehouse/mWhsType/getWhsTypeByWhsIds` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/MWhsTypeController.java:35 |
| `/warehouse/mWhsType/getWhsTypeByWhsTypeIdList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/MWhsTypeController.java:43 |
| `/warehouse/mWhsType/getWhsTypeList` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/MWhsTypeController.java:51 |
| `/warehouse/outCostChange/add` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:71 |
| `/warehouse/outCostChange/import` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:76 |
| `/warehouse/outCostChange/info` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:73 |
| `/warehouse/outCostChange/page` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:72 |
| `/warehouse/outcostchangeitem/getOutByChangeItem` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:70 |
| `/warehouse/outcostchangeitem/import` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:75 |
| `/warehouse/outcostchangeitem/page` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:69 |
| `/warehouse/picking/createOrUpdateOutboundOrderDraft` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/PickOrderController.java:81 |
| `/warehouse/picking/createOutboundOrder` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/PickOrderController.java:35 |
| `/warehouse/picking/createOutOrIn` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/PickOrderController.java:44 |
| `/warehouse/picking/mobile/create/order` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/PickOrderController.java:90 |
| `/warehouse/picking/order/cancel` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/PickOrderController.java:108 |
| `/warehouse/pickingRpc/query/source/from/DwhsoutPicking` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/PickOrderRpcController.java:44 |
| `/warehouse/pickingRpc/queryDwhsoutPicking` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/PickOrderRpcController.java:38 |
| `/warehouse/testPosting` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/controller/WarehouseController.java:56 |
| `/warehouse/whs/comp/isBatch` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/whs/controller/WhsController.java:31 |
| `/wechatAssistantSendRecord/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/WechatAssistantSendRecordController.java:31 |
| `/wechatAssistantSendRecordRel/detailById` | backend | GET | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-hr/src/main/java/com/reabam/controller/WechatAssistantSendRecordRelController.java:31 |
| `/wx/account/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wxops/controller/WxAccountController.java:97 |
| `/wx/account/getAccountId` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wxops/controller/WxAccountController.java:110 |
| `/wx/account/tlist` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wxops/controller/WxAccountController.java:80 |
| `/wx/app/accept/notice` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wxapp/notice/WxAppNoticeController.java:45 |
| `/wx/app/notice/meal` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wxapp/notice/WxAppNoticeController.java:36 |
| `/wx/app/notice/order/pay/success` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wxapp/notice/WxAppNoticeController.java:27 |
| `/wx/common/qrCode/createQrCdoe` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/common/controller/QrCodeController.java:28 |
| `/wx/common/qrCode/getQrCdoe` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/common/controller/QrCodeController.java:40 |
| `/wx/createQrCode` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wx/controller/WeiXinController.java:413 |
| `/wx/createTempQrCode` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wx/controller/WeiXinController.java:393 |
| `/wx/dispatch` | backend | GET, POST | 2 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wx/controller/WeiXinController.java:81 |
| `/wx/dispatch/{wxSN}` | backend | GET, POST | 2 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wx/controller/WeiXinController.java:50 |
| `/wx/getOpenId` | backend | POST | 2 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/wx/controller/WeiXinController.java:33 |
| `/wx/getWxJsConfig` | backend | POST | 2 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/wx/controller/WeiXinController.java:57 |
| `/wx/getWxPay` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/wx/controller/WeiXinController.java:69 |
| `/wx/getWxPayForApp` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/wx/controller/WeiXinController.java:81 |
| `/wx/getWxUserInfo` | backend | POST | 2 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/wx/controller/WeiXinController.java:45 |
| `/wx/mcard/createQrCode` | admin-v1 | POST(default) | 2 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:1787 |
| `/wx/messageTemplate` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wx/controller/WxMsgTemplateController.java:38 |
| `/wx/om/templatemsg/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/om/controller/WxTemplateMsgController.java:37 |
| `/wx/om/templatemsg/start` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/om/controller/WxTemplateMsgController.java:51 |
| `/wx/om/templatemsg/stop` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/om/controller/WxTemplateMsgController.java:67 |
| `/wx/om/templatemsg/update_msg_associated_wxsn` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/om/controller/WxTemplateMsgController.java:82 |
| `/wx/om/wxConfig/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/om/controller/WxConfigController.java:61 |
| `/wx/om/wxConfig/list` | backend, admin-v1 | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/om/controller/WxConfigController.java:46 |
| `/wx/om/wxConfig/openBind` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/om/controller/WxConfigController.java:90 |
| `/wx/om/wxConfig/openUnbind` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/om/controller/WxConfigController.java:106 |
| `/wx/om/wxConfig/updateWxConfig` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/om/controller/WxConfigController.java:122 |
| `/wx/om/wxConfig/wax/revertcoderelease` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/om/controller/WxConfigController.java:235 |
| `/wx/om/wxConfig/wax/undocodeaudit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/om/controller/WxConfigController.java:219 |
| `/wx/om/wxConfig/wax/verify_audit_status` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/om/controller/WxConfigController.java:251 |
| `/wx/om/wxConfig/wxa/getTemplateList` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/om/controller/WxConfigController.java:154 |
| `/wx/om/wxConfig/wxa/getWxaQRcode` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/om/controller/WxConfigController.java:138 |
| `/wx/om/wxConfig/wxa/onekeyAudit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/om/controller/WxConfigController.java:169 |
| `/wx/om/wxConfig/wxa/oneKeyRelease` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/om/controller/WxConfigController.java:203 |
| `/wx/om/wxConfigOpen/detail` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/om/controller/WxConfigOpenController.java:54 |
| `/wx/om/wxConfigOpen/edit` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/om/controller/WxConfigOpenController.java:67 |
| `/wx/om/wxConfigOpen/list` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/om/controller/WxConfigOpenController.java:40 |
| `/wx/pay/wallet` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wx/controller/PayWalletController.java:36 |
| `/wx/pay/wallet/query` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wx/controller/PayWalletController.java:48 |
| `/wx/privacy/getprivacysetting` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wxprivacy/controller/WxPrivacyController.java:34 |
| `/wx/privacy/setprivacysetting` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wxprivacy/controller/WxPrivacyController.java:42 |
| `/wx/privacy/uploadprivacyextfile` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wxprivacy/controller/WxPrivacyController.java:51 |
| `/wx/public/pullmember` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wxpublic/controller/WxPublicController.java:31 |
| `/wx/security/check/msgCheck` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wxsecurity/controller/MsgSecCheckController.java:22 |
| `/wx/security/check/msgCheck2` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wxsecurity/controller/MsgSecCheckController.java:27 |
| `/wx/sendTemplateMsg` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wx/controller/WeiXinController.java:323 |
| `/wx/sendTemplateMsg/{wxSN}` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wx/controller/WeiXinController.java:336 |
| `/wx/sengCouponMsg` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wx/controller/WxMsgTemplateController.java:84 |
| `/wx/smallstore/order/detail` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2697 |
| `/wx/smallstore/order/detail/page` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2698 |
| `/wx/smallstore/order/merge` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2699 |
| `/wx/smallstore/order/page` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api.js:2696 |
| `/wx/tp/dispatch` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wx/controller/WeiXinTpController.java:61 |
| `/wx/tp/dispatch/{wxSN}` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wx/controller/WeiXinTpController.java:134 |
| `/wx/tp/dispatch2/{thirdOpenAppId}/{wxSN}` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wx/controller/WeiXinTpController.java:286 |
| `/wx/v1/subscription/user/action/checkFollow` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wx/controller/WxSubscriptionController.java:32 |
| `/wx/work/config/detail` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2209 |
| `/wx/work/config/edit` | admin-v1 | POST(default) | 1 | 仅单个前端证据 | semir-reabam-admin/src/js/api2.js:2210 |
| `/wx/wxapp/getGroupInfo` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-core/src/main/java/com/reabam/wx/feign/WxaHystrixClient.java:67 |
| `/wx/wxMatter/uploadImageForUrl` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wxops/controller/WxMatterController.java:30 |
| `/wx/wxmsg/template/queryTemplateId` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wxapp/control/WxMsgPlusTemplateController.java:34 |
| `/wx/wxmsg/template/queryTemplateId/v2` | backend | POST | 1 | 仅后端源码证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wxapp/control/WxMsgPlusTemplateController.java:53 |
| `/wx/wxmsg/template/queryTemplateId/v3` | backend, miniapp | POST, POST(default) | 2 | 后端+前端均有证据 | reabam-mop-b2b/reabam-service/reabam-wx/src/main/java/com/reabam/wxapp/control/WxMsgPlusTemplateController.java:62 |
