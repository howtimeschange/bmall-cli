# Bmall Interface Map

这份地图按业务域记录关键接口。完整候选在 `bmall-code-knowledge.json`，本文只保留高价值入口和能指导后续探查的证据。

## 请求入口

| 仓库 | 请求层 | Base URL / 前缀 | 证据 |
| --- | --- | --- | --- |
| 后端 `reabam-mop-b2b` | Spring MVC Controller | 网关统一 `/api` 外层，Controller 内通常从 `/activity`、`/b2b`、`/product`、`/warehouse` 开始 | `reabam-service/*/src/main/java/**/controller` |
| 小程序 `semir-reabam-front` | `pub.request` / `pub.publicFn.request` | `ext.ext.attr.serverAddress`，开发环境指向 test API | `semir-reabam-front/public/public.js`、`semir-reabam-front/ext.js` |
| 旧后台 `semir-reabam-admin` | `Command.req` / `Command.request` | `src/js/api.js` 和 `src/api/fetch.js` | `semir-reabam-admin/src/js/api.js`、`semir-reabam-admin/src/api/fetch.js` |
| 后台 v2 `semir-bmall-admin-v2` | `@ice/plugin-request` | service 中写 `/api/...`，拦截器注入 headers | `semir-bmall-admin-v2/app/src/app.tsx` |

## 柔供预售

| 接口 | 方法 | 主要消费者 | 用途 | 证据 |
| --- | --- | --- | --- | --- |
| `/activity/mini/supply/presale/cfg/current` | POST | 小程序 `pages/presaleHome` | 获取当前柔供活动入口 | `semir-reabam-front/pages/presaleHome/index.js:29` |
| `/activity/mini/supply/presale/item/page` | POST | 小程序 `groupBuying` | 柔供商品列表 | `semir-reabam-front/packageForPresale/services/groupBuyApis.js:12` |
| `/activity/mini/supply/presale/activity/query/detail` | POST | 小程序 `groupBuyingShopCar` | 柔供活动详情 | `semir-reabam-front/packageForPresale/services/groupBuyApis.js:6` |
| `/activity/mini/supply/presale/order/query/waiting/order` | POST | 小程序柔供购物车 | 柔供待提交订单/购物车 | `reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/SupplyPresaleOrderMiniController.java:67` |
| `/activity/mini/supply/presale/order/save` | POST | 小程序柔供加购 | 保存柔供预售单 | `reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/SupplyPresaleOrderMiniController.java:115` |
| `/activity/mini/supply/presale/order/submit` | POST | 小程序柔供购物车提交 | 提交柔供预售单 | `reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/SupplyPresaleOrderMiniController.java:155` |
| `/activity/mini/supply/presale/order/query/order/detail/item` | POST | 小程序柔供订单详情 | 源订单 SKU/SKC 明细 | `reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/mini/SupplyPresaleOrderMiniController.java:76` |
| `/activity/supply/presale/activity/page` | POST | 旧后台柔供活动列表 | 柔供活动批次管理 | `semir-reabam-admin/src/js/api.js:2962` |
| `/activity/supply/presale/order/page` | POST | 旧后台柔供追单订单 | 柔供订单列表 | `semir-reabam-admin/src/js/api.js:3001` |
| `/activity/supply/presale/order/pageGather` | POST | 旧后台柔供追单统计 | 柔供订单汇总 | `semir-reabam-admin/src/js/api.js:3149` |

后台 v2 对柔供更多覆盖在补货商品库和购物车：

| 接口 | 方法 | 页面 | 用途 | 证据 |
| --- | --- | --- | --- | --- |
| `/b2b/itemReplenishment/skc/page` | POST | `supplyPurchaseStock` | 柔供/补货商品 SKC 列表 | `semir-bmall-admin-v2/app/src/pages/supplyPurchaseStock/service/index.ts:7` |
| `/b2b/itemShopCart/orgCart/page` | POST | `supplyShopCart` | 柔供客户购物车视角 | `semir-bmall-admin-v2/app/src/pages/supplyShopCart/service/index.ts:105` |
| `/b2b/itemShopCartSkcs/query/cart/skc` | POST | `supplyShopCart` 明细 | 柔供购物车 SKC 明细 | `semir-bmall-admin-v2/app/src/pages/supplyShopCart/components/ShopCarCompany/ShopCartView/services/index.ts:46` |

## 中短期预售

| 接口 | 方法 | 主要消费者 | 用途 | 证据 |
| --- | --- | --- | --- | --- |
| `/activity/mini/presaleActivity/detail` | GET | 小程序 `midtermPresaleHome` | 中短期活动配置 | `semir-reabam-front/packageForPresale/services/midtermPresaleApis.js:58` |
| `/activity/mini/presaleActivity/items/all` | POST | 小程序中短期选货 | 活动商品全集 | `semir-reabam-front/packageForPresale/services/midtermPresaleApis.js:164` |
| `/activity/mini/presaleActivity/items/byOrderRule` | POST | 小程序按订货规则选货 | 规则商品列表 | `semir-reabam-front/packageForPresale/services/midtermPresaleApis.js:185` |
| `/activity/mini/presaleActivity/specList` | POST | 小程序加购规格 | SKC/SKU 规格 | `semir-reabam-front/packageForPresale/services/midtermPresaleApis.js:270` |
| `/activity/presaleOrder/add` | POST | 小程序中短期提交、旧后台新建订单 | 保存/提交中短期预售单 | `semir-reabam-front/packageForPresale/services/midtermPresaleApis.js:291` |
| `/activity/presaleOrder/page` | POST | 旧后台中短期订单列表 | 中短期订单分页 | `semir-reabam-admin/src/js/api.js:3146` |
| `/activity/presaleOrder/orderStatistics` | POST | 旧后台中短期订单列表 | 中短期订单合计 | `semir-reabam-admin/src/js/api.js:3147` |
| `/activity/presale/activity/detailById` | GET | 后台 v2 `midPurchaseStock` | 活动详情 | `semir-bmall-admin-v2/app/src/pages/midPurchaseStock/service/index.ts:16` |
| `/activity/presaleActivitiesGoods/itemStore/skc/page` | POST | 后台 v2 `midPurchaseStock` | 中短期选购 SKC 列表 | `semir-bmall-admin-v2/app/src/pages/midPurchaseStock/service/index.ts:7` |
| `/activity/presaleShopCart/orgCart/page` | POST | 后台 v2 `midShopCart` | 中短期客户购物车 | `semir-bmall-admin-v2/app/src/pages/midShopCart/service/index.ts:85` |
| `/activity/presaleShopCartSkcs/query/cart/skc` | POST | 后台 v2 `midShopCart` | 中短期购物车 SKC 明细 | `semir-bmall-admin-v2/app/src/pages/midShopCart/components/ShopCarCompany/ShopCartView/services/index.ts:46` |
| `/activity/presaleOrder/live/page` | POST | 后台 v2 `midShopCart` | 中短期订单列表 | `semir-bmall-admin-v2/app/src/pages/midShopCart/service/orderList.ts:103` |

## 提货单

| 接口 | 方法 | 主要消费者 | 用途 | 证据 |
| --- | --- | --- | --- | --- |
| `/activity/pickup/order/page` | POST | 小程序提货单列表 | 前台提货单分页 | `semir-reabam-front/packageForPresale/services/pickupOrderApis.js:8` |
| `/activity/pickup/order/detail` | GET | 小程序提货单详情 | 前台提货单基础详情 | `reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderController.java:54` |
| `/activity/pickup/order/orderItems` | GET | 小程序提货商品组件 | 提货单商品 | `semir-reabam-front/packageForPresale/services/pickupOrderApis.js:30` |
| `/activity/pickup/order/orderItemsByGoPickup` | GET | 小程序去提货 | 可提货商品 | `semir-reabam-front/packageForPresale/services/pickupOrderApis.js:40` |
| `/activity/pickup/order/orderConfirmDetail` | POST | 小程序确认提货订单 | 去结算确认页 | `reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderController.java:123` |
| `/activity/pickup/order/confirm` | POST | 小程序提货提交 | 提货确认 | `reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderController.java:84` |
| `/activity/pickup/orderRel/selectPickupOrders` | GET | 小程序预售单详情弹窗 | 源预售单关联提货单 | `reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderRelController.java:65` |
| `/activity/pickup/orderRel/selectPresaleOrders` | GET | 小程序提货单详情 | 提货单关联源预售单 | `reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/pickup/PresalePickupOrderRelController.java:54` |
| `/activity/pickup/order/mgd/page` | POST | 旧后台提货单列表 | 中台提货单分页 | `semir-reabam-admin/src/js/api.js:3106` |
| `/activity/pickup/order/mgd/detail` | GET | 旧后台提货单详情 | 中台提货单详情 | `semir-reabam-admin/src/js/api.js:3115` |
| `/activity/pickup/order/mgd/selectPickupOrderSkus` | POST | 旧后台提货单详情 | 提货单 SKU 明细 | `semir-reabam-admin/src/js/api.js:3116` |
| `/activity/pickup/order/mgd/addPickupOrder` | POST | 旧后台提货单管理 | 新建提货单 | `semir-reabam-admin/src/js/api.js:3110` |
| `/b2b/substitute/presale/pick/check` | POST | 旧后台提货单详情 | 提货转代客下单前校验 | `semir-reabam-admin/src/js/api.js:3112` |
| `/b2b/substitute/presale/pick/add` | POST | 后端 B2B 服务 | 提货单转正式 B2B 销售单 | `reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderSubstituteController.java:92` |

## 提货管理

中短期和柔供提货管理在旧后台有平行 API 文件，结构几乎一致：

| 视角 | 中短期接口 | 柔供接口 | 用途 |
| --- | --- | --- | --- |
| 商品视角 | `/activity/presale/pickup/manage/itemView/getPage` | `/activity/supplyPresale/pickup/manage/itemView/getPage` | 客户+SKC 提货率的商品入口 |
| 商品汇总 | `/activity/presale/pickup/manage/itemView/getPageGather` | `/activity/supplyPresale/pickup/manage/itemView/getPageGather` | 商品视角汇总 |
| 客户视角 | `/activity/presale/pickup/manage/companyView/dealerPage` | `/activity/supplyPresale/pickup/manage/companyView/dealerPage` | 客户维度提货管理 |
| 源预售单列表 | `/activity/presale/pickup/manage/companyView/presaleOrder/page` | `/activity/supplyPresale/pickup/manage/companyView/presaleOrder/page` | 客户视角下关联预售单 |
| 生成提货单活动 | `/activity/presale/pickup/manage/generateBillOfLading/getPage` | `/activity/supplyPresale/pickup/manage/generateBillOfLading/getPage` | 选择活动生成提货单 |
| 生成提货单订单 | `/activity/presale/pickup/manage/generateBillOfLading/getPresaleOrderPage` | `/activity/supplyPresale/pickup/manage/generateBillOfLading/getPresaleOrderPage` | 选择源预售订单 |
| 最终确认 | `/activity/presale/pickup/manage/generateBillOfLading/confirm` | `/activity/supplyPresale/pickup/manage/generateBillOfLading/confirm` | 生成提货单 |

证据：

- 中短期 API 文件：`semir-reabam-admin/src/components/pages/presalePickupManage/presalePickupManageMidApi.js`
- 柔供 API 文件：`semir-reabam-admin/src/components/pages/presalePickupManage/presalePickupManageSupplyApi.js`
- 后端 Controller：`reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/presale/PresalePickupManageController.java`
- 后端 Controller：`reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/controller/supplyPresale/SupplyPresalePickupManageController.java`

## 订货订单和待审核单

| 接口 | 方法 | 主要消费者 | 用途 | 证据 |
| --- | --- | --- | --- | --- |
| `/b2b/order/new/getOrderPageList` | POST | 后台 v2 订货订单 | 聚合订单列表 | `semir-bmall-admin-v2/app/src/pages/supplyOrderBooking/service/index.ts:12` |
| `/b2b/order/new/getOrderInfoStatistics` | POST | 后台 v2 订货订单 | 订单统计 | `semir-bmall-admin-v2/app/src/pages/supplyOrderBooking/service/index.ts:26` |
| `/file/order/exportOrder` | POST | 后台 v2 订货订单 | 订单导出 | `semir-bmall-admin-v2/app/src/pages/supplyOrderBooking/service/index.ts:54` |
| `/b2b/pendingReviewOrder/getOrderPageList` | POST | 后台 v2 审核弹窗 | 待审核单列表 | `semir-bmall-admin-v2/app/src/pages/supplyOrderBooking/service/approveModal.tsx:7` |
| `/b2b/pendingReviewOrder/checkPendingReviewOrder` | POST | 后台 v2 审核弹窗 | 审核通过前校验 | `semir-bmall-admin-v2/app/src/pages/supplyOrderBooking/service/approveModal.tsx:189` |
| `/b2b/pendingReviewOrder/bathSubmitPendingOrder` | POST | 后台 v2 审核弹窗 | 批量提交待审核单 | `semir-bmall-admin-v2/app/src/pages/supplyOrderBooking/service/approveModal.tsx:203` |
| `/b2b/order/new/multiStoreOrder/add` | POST | 后台 v2 多门店下单 | 创建多门店订货单 | `semir-bmall-admin-v2/app/src/pages/supplyOrderBooking/service/addMutilStoreOrder.ts:94` |
| `/b2b/order/new/appOrderList` | POST | 小程序订单列表 | 前台订货单列表 | `semir-reabam-front/packageForOrder/services/orderApis.js:22` |
| `/b2b/pendingReviewOrder/mini/orderSourceType/check` | POST | 小程序订单详情 | 判断普通订单/待审核单 | `semir-reabam-front/packageForOrder/services/orderApis.js:10` |
| `/b2b/order/orderDetail/items` | POST | 小程序订单明细 | 普通订单商品明细 | `semir-reabam-front/public/api.js:299` |
| `/b2b/pendingReviewOrder/mini/pendingOrder/items` | POST | 小程序订单明细 | 待审核商品明细 | `semir-reabam-front/public/api.js:300` |

## 新店订单

| 接口 | 方法 | 主要消费者 | 用途 | 证据 |
| --- | --- | --- | --- | --- |
| `/b2b/newStoreOrder/page` | POST | 后台 v2 新店订单 | 新店订单列表 | `semir-bmall-admin-v2/app/src/pages/newStoreOrders/service/index.ts:8` |
| `/b2b/newStoreOrder/detail/main` | POST | 后台 v2 新店订单详情 | 主信息 | `semir-bmall-admin-v2/app/src/pages/newStoreOrders/service/detail.ts:8` |
| `/b2b/newStoreOrder/detail/sku/page` | POST | 后台 v2 新店订单详情 | SKU 明细 | `semir-bmall-admin-v2/app/src/pages/newStoreOrders/service/detail.ts:20` |
| `/b2b/newStoreOrder/detail/pickup/check` | POST | 后台 v2 新店订单 | 提货前校验 | `semir-bmall-admin-v2/app/src/pages/newStoreOrders/service/detail.ts:69` |
| `/b2b/newStoreOrder/batch/update/canBePickup` | POST | 后台 v2 新店订单 | 批量改提货状态 | `semir-bmall-admin-v2/app/src/pages/newStoreOrders/service/index.ts:205` |
| `/b2b/newStoreOrder/mini/pageList` | POST | 小程序新店订单 | 前台新店订单列表 | `semir-reabam-front/packageForNewShop/services/newShopApis.js:8` |
| `/b2b/newStoreOrder/mini/detail` | GET | 小程序新店详情 | 前台新店订单详情 | `semir-reabam-front/packageForNewShop/services/newShopApis.js:18` |
| `/b2b/newStoreOrder/mini/pick/orderPreCheck` | POST | 小程序新店确认订单 | 下单预校验 | `semir-reabam-front/packageForNewShop/services/orderApis.js:32` |
| `/b2b/newStoreOrder/mini/pick/b2bOrder/add` | POST | 小程序新店确认订单 | 提货转正式订单 | `semir-reabam-front/packageForNewShop/services/orderApis.js:40` |

## 商品、SKC、SKU、库存

| 接口 | 方法 | 主要消费者 | 用途 | 证据 |
| --- | --- | --- | --- | --- |
| `/product/itemGroup/scene/findSpuList` | POST | 小程序商品列表 | SPU 列表 | `semir-reabam-front/packageForProduct/services/classifyApis.js:6` |
| `/product/itemGroupDetail/scene/findSkcList` | POST | 小程序商品列表 | SKC 列表 | `semir-reabam-front/packageForProduct/services/classifyApis.js:16` |
| `/product/item/spec/scene/findSkcListBySpuId` | GET | 小程序商品列表 | SPU 展开 SKC | `semir-reabam-front/packageForProduct/services/classifyApis.js:27` |
| `/product/mini/getItemDetail` | POST | 小程序商品详情 | 商品详情 | `semir-reabam-front/packageForProduct/services/productDetailApis.js:5` |
| `/warehouse/mini/itemstock/findGeneralItemStock` | POST | 小程序商品详情 | 总仓库存 | `semir-reabam-front/packageForProduct/services/productDetailApis.js:7` |
| `/product/mini/item/spec/list` | POST | 小程序商品加购 | SKU 规格 | `semir-reabam-front/public/globalApis.js:103` |
| `/activity/presaleOrder/order/calQuantity` | POST | 小程序柔供/中短期加购 | 数量统计 | `semir-reabam-front/public/globalApis.js:137` |
| `/product/item/brandItems/page` | POST | 旧后台品牌商品 | 品牌商品列表 | `semir-reabam-admin/src/pages/product/service.js:9` |
| `/product/item/brandItems/count` | POST | 旧后台品牌商品 | 品牌商品统计 | `semir-reabam-admin/src/pages/product/service.js:30` |
| `/product/itemStock/statistics/page` | POST | 后台 v2 `productStock` | 商品库存查询 | `semir-bmall-admin-v2/app/src/pages/productStock/service/index.ts:9` |
| `/warehouse/itemstock/findStoreItemStock` | POST | 后端库存服务 | 本店库存 | `reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/stock/controller/ItemStockController.java:32` |
| `/warehouse/itemstock/findGeneralItemStock` | POST | 后端库存服务 | 总仓库存 | `reabam-mop-b2b/reabam-service/reabam-warehouse/src/main/java/com/reabam/stock/controller/ItemStockController.java:39` |

## 报表和导出

| 接口 | 方法 | 主要消费者 | 用途 | 证据 |
| --- | --- | --- | --- | --- |
| `/product/offline/report/customer/page` | POST | 后台 v2 商品报表客户视角 | 客户商品报表 | `semir-bmall-admin-v2/app/src/pages/productReportCustom/service/index.ts:8` |
| `/file/product/offline/report/export/report/customer` | POST/blob | 旧后台商品报表 | 客户视角导出 | `semir-reabam-admin/src/js/api.js:2492` |
| `/b2b/newStoreOrderSpu/report/distributor/page` | POST | 后台 v2 新店订单报表 | 客户维度 | `semir-bmall-admin-v2/app/src/pages/storeOrderReport/service/index.ts:96` |
| `/b2b/newStoreOrderSkc/report/item/skc/page` | POST | 后台 v2 新店订单报表 | SKC 维度 | `semir-bmall-admin-v2/app/src/pages/storeOrderReport/service/index.ts:169` |
| `/b2b/newStoreOrderSkc/report/item/listSku/bySkcCode` | POST | 后台 v2 新店订单报表 | SKU 展开 | `semir-bmall-admin-v2/app/src/pages/storeOrderReport/service/index.ts:189` |
| `/file/newStoreOrderSku/report/sku/export` | POST | 后台 v2 新店订单报表 | SKU 导出 | `semir-bmall-admin-v2/app/src/pages/storeOrderReport/service/index.ts:213` |
| `/track/event/user/record/page` | POST | v2 用户行为报表 | 用户行为列表 | `semir-bmall-admin-v2/app/src/pages/userRecordReport/service/index.ts:8` |

## 路由和页面入口

| 业务 | 小程序 | 旧后台 | 后台 v2 |
| --- | --- | --- | --- |
| 柔供 | `packageForPresale/pages/groupBuying`、`groupBuyingShopCar`、`groupBuyingOrderDetail` | `/flexibility_supply_order`、`/group_presale_list` | `/supplyPurchaseStock?iframe=1`、`/supplyShopCart?iframe=1` |
| 中短期 | `packageForPresale/pages/midtermPresaleHome`、`midtermPresaleConfirm`、`midtermPresaleList` | `/pre_sale_order_index`、`/pre_sale_order_model`、`/pre_sale_order_rules` | `/midPurchaseStock?iframe=1`、`/midShopCart?iframe=1` |
| 提货单 | `packageForPresale/pages/pickupOrderList`、`pickupOrderDetail`、`pickConfirmOrder` | `/b2b_pickup_list`、`/presale_bill_of_lading_detail` | 主要仍是旧后台页面，v2 首页保留快捷入口 |
| 订货订单 | `packageForOrder/pages/orderList`、`orderDetail`、`orderReview` | 部分历史页面 | `/supplyOrderBooking/list?iframe=1` |
| 新店订单 | `packageForNewShop/pages/newShopOrderList`、`newShopConfirmOrder` | 旧后台快捷入口 | `/newStoreOrders/list?iframe=1`、`/storeOrderReport` |

## 重要枚举和字段

| 字段 | 口径 | 证据 |
| --- | --- | --- |
| `activityType` | `1` 中短期预售，`2` 柔供预售 | `semir-bmall-admin-v2/app/src/pages/home/interfaces/index.ts:93` |
| `pickupOrderSourceType` | `1` 中短期，`2` 柔供，`3` 手动创建/预售提货；旧后台还有更多业务来源值 | `semir-reabam-front/packageForPresale/pages/pickConfirmOrder/index.js:168`、`semir-reabam-admin/src/components/pages/preSaleBillOfLading/data.js:104` |
| `pickupOrderStatus` | `1` 待提货、`2` 已提货、`3` 部分提货、`4` 已拒绝、`5` 已取消、`6` 已拆分 | `semir-reabam-admin/src/components/pages/preSaleBillOfLading/data.js:1` |
| `presaleOrderStatus` | 小程序中短期：`1` 待提交、`2` 待审核、`3` 已取消、`4` 已审核、`5` 可提货、`6` 部分可提、`7` 部分已提、`8` 已提货 | `semir-reabam-front/packageForPresale/services/midtermPresaleApis.js:28` |
| `relationType` | 小程序订单详情：`1` 待审批订货单、`2` 正常订货订单 | `semir-reabam-front/packageForOrder/services/orderApis.js:8` |
| 订单类型字符串 | `RoutineOrder`、`SupplyPresaleOrder`、`MediumShortPresaleOrder`、`BookOrder`、`NewStoreOrder` | `semir-bmall-admin-v2/app/src/pages/supplyOrderBooking/components/ApproveModal/index.tsx:62` |
| 来源类型字符串 | `mini`、`mgd`、`presaleOrder`、`supplyPresaleOrder`、`newStoreOrder`、`pickup` | `semir-bmall-admin-v2/app/src/pages/supplyOrderBooking/components/ApproveModal/index.tsx:89` |
| SKC/SKU 报表字段 | `skcCode`、`skuCode`、`specId`、`batchNo`、`canBePickCount`、`stockSatisfyRate` | `semir-bmall-admin-v2/app/src/pages/storeOrderReport/interfaces/index.ts:299` |

## 数据表和后端口径

| 口径 | 证据 |
| --- | --- |
| B2B 订单主表/明细：`db2border`、`db2bord1`，扩展表 `db2border_extend` 保存 `source`、`source_name` 等 | `reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/dao/impl/OrderDao.java` |
| 中短期订单：`presale_order`、`presale_order_detail` | `reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/service/presale/impl/PresaleOrderServiceIImpl.java` |
| 提货/预售视图：`presale_pickup_order_rel`、`presale_pickup_activity_item_view`、`presale_pickup_activity_company_view` | `reabam-mop-b2b/reabam-service/reabam-activity/src/main/java/com/reabam/manager/presale` |
| 提货单转 B2B 正式单按 `pickupOrderSourceType` 映射订单类型 | `reabam-mop-b2b/reabam-service/reabam-b2b/src/main/java/com/reabam/b2b/controller/B2bOrderSubstituteController.java` |
