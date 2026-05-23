import { describe, expect, it } from "vitest";
import { Command } from "commander";
import { diagnoseOrderFromApi, blockingReasonsFromDraft, normalizeOrderDiagnosis, registerOpsOrderCommands, splitCheck, syncCheck } from "../../src/domains/ops/order.js";
import { addProductApplication, productWritePlan, registerOpsProductCommands } from "../../src/domains/ops/product.js";
import { diagnoseProductLaunch, setupProductLaunch } from "../../src/domains/ops/product-launch.js";

describe("ops order diagnosis", () => {
  it("returns the stable diagnosis shape", () => {
    const diagnosis = normalizeOrderDiagnosis(
      {
        data: {
          orderNo: "DH202605230001",
          orderType: "mid-presale",
          currentState: { status: "待审核" },
          items: [{ skuCode: "SKU001", quantity: 1 }],
        },
      },
      {},
    );

    expect(Object.keys(diagnosis)).toEqual([
      "orderType",
      "orderNo",
      "relation",
      "currentState",
      "ruleChain",
      "timeline",
      "amount",
      "items",
      "blockingIssues",
      "warnings",
      "nextActions",
    ]);
    expect(diagnosis.orderType).toBe("mid-presale");
    expect(diagnosis.orderNo).toBe("DH202605230001");
    expect(diagnosis.items).toHaveLength(1);
  });

  it("finds draft blocking reasons", () => {
    const result = blockingReasonsFromDraft({ items: [{ skuCode: "SKU001", quantity: 0 }] });
    expect(result.ok).toBe(false);
    expect(result.blockingIssues[0].code).toBe("INVALID_QUANTITY");
  });

  it("diagnoses pending-review address completeness through real endpoints", async () => {
    const calls: Array<{ method: string; path: string; body?: unknown }> = [];
    const client = {
      request: async (method: string, path: string, body?: unknown) => {
        calls.push({ method, path, body });
        return {
          data: {
            id: 10001,
            orderNo: "PD202605230001",
            orderTypeName: "待审核补货单",
            orderStatusName: "待审核",
            companyId: "C001",
            companyName: "森马湖南骏森-安江镇隆平广场店",
            addressId: "A1",
            provinceName: "湖南省",
            cityName: "怀化市",
            regionName: "区",
            conAddress: "安江镇新德利超市四楼森马店",
            consignee: "丁张梅",
            consiPhone: "15115220772",
            skcList: [{ skuCode: "SKU001", quantity: 1 }],
            totalAmount: 518,
          },
        };
      },
    };

    const result = await diagnoseOrderFromApi(client, { type: "pending-review", orderId: "10001" });

    expect(calls[0]).toEqual({ method: "POST", path: "b2b/pendingReviewOrder/order/detail", body: { orderId: "10001" } });
    expect(result.orderType).toBe("pending-review");
    expect(result.blockingIssues[0]).toMatchObject({ code: "ADDRESS_REGION_INCOMPLETE", phase: "fulfillment" });
    expect(result.nextActions[0]).toContain("ops address check");
  });

  it("checks split and sync status without executing writes", () => {
    expect(splitCheck({ status: "已成团" }).ok).toBe(true);
    expect(splitCheck({ status: "待审核" }).blockingIssues[0].code).toBe("SPLIT_STATE_NOT_READY");
    expect(syncCheck({ syncStatus: "unknown" }).warnings[0].code).toBe("SYNC_UNKNOWN");
  });

  it("does not synthesize API-backed order diagnosis when no client is wired", async () => {
    const program = new Command().exitOverride();
    registerOpsOrderCommands(program);

    await expect(program.parseAsync(["node", "bmall", "order", "diagnose", "--order-no", "DH1"])).rejects.toThrow(
      "ORDER_DIAGNOSE_REQUIRES_API_CLIENT",
    );
    await expect(program.parseAsync(["node", "bmall", "order", "timeline", "--order-id", "10001"])).rejects.toThrow(
      "ORDER_TIMELINE_REQUIRES_API_CLIENT",
    );
    await expect(program.parseAsync(["node", "bmall", "order", "export", "--order-no", "DH1"])).rejects.toThrow(
      "ORDER_EXPORT_REQUIRES_API_CLIENT",
    );
  });

  it("requires dry-run or confirm for product writes", async () => {
    await expect(productWritePlan("product/apply/update", { input: "apply.csv" })).rejects.toThrow();
    await expect(productWritePlan("product/apply/update", { input: "apply.csv", dryRun: true })).resolves.toMatchObject({ mode: "dry-run" });
  });

  it("dry-runs adding a product application to the configured default store", async () => {
    const calls: Array<{ method: string; path: string; body?: unknown }> = [];
    const client = {
      request: async (method: string, path: string, body?: unknown) => {
        calls.push({ method, path, body });
        if (path === "config/appcode/list") {
          return {
            data: {
              DataLine: [{
                defaultItemApplyCompanyId: "DEFAULT-COMPANY",
                defaultItemApplyCompanyName: "库存同步默认门店",
              }],
            },
          };
        }
        if (path === "hr/sysCompany/queryCompanyInfoById") {
          return { data: { companyId: "DEFAULT-COMPANY", companyCode: "DEFAULT", companyName: "库存同步默认门店" } };
        }
        if (path === "product/item/brandItems/page") {
          return { data: { content: [{ itemId: "ITEM-ID-001", itemCode: "101326127127", itemName: "测试商品" }] } };
        }
        if (path === "product/mitemcomp/list") {
          return { data: { content: [] } };
        }
        return {};
      },
      context: async () => ({
        profile: "unit",
        env: "prod",
        groupId: "GROUP-ID",
        groupName: "森马",
        userId: "USER-ID",
        userName: "测试用户",
      }),
    };

    const result = await addProductApplication(client, {
      itemCode: "101326127127",
      defaultStore: true,
      dryRun: true,
    });

    expect(calls).toEqual([
      { method: "POST", path: "config/appcode/list", body: { optionName: "DOrderSet", companyId: "GROUP-ID", pageIndex: 1, pageSize: 1 } },
      { method: "GET", path: "hr/sysCompany/queryCompanyInfoById", body: { companyId: "DEFAULT-COMPANY" } },
      { method: "POST", path: "product/item/brandItems/page", body: { pageType: "2", itemSearchType: 1, itemSearchCodeList: ["101326127127"], pageIndex: 1, pageSize: 20 } },
      { method: "POST", path: "product/mitemcomp/list", body: { taskType: "item", itemId: "ITEM-ID-001", sword: "DEFAULT", pageIndex: 1, pageSize: 20 } },
    ]);
    expect(result).toMatchObject({
      mode: "dry-run",
      affected: 1,
      item: { itemId: "ITEM-ID-001", itemCode: "101326127127" },
      company: { companyId: "DEFAULT-COMPANY", companyName: "库存同步默认门店" },
    });
    expect(result.apiCalls[0]).toEqual({
      method: "POST",
      endpoint: "product/mitemcomp/opt",
      body: { taskType: "add", companyIds: ["DEFAULT-COMPANY"], itemIds: ["ITEM-ID-001"] },
    });
  });

  it("refuses to add a product application when item search does not exactly match the requested item code", async () => {
    const client = {
      request: async (_method: string, path: string) => {
        if (path === "product/item/brandItems/page") {
          return { content: [{ itemId: "WRONG-ID", itemCode: "001130509", itemName: "宽搜索误命中" }] };
        }
        return {};
      },
    };

    await expect(addProductApplication(client, {
      itemCode: "101326127127",
      companyId: "DEFAULT-COMPANY",
      dryRun: true,
    })).rejects.toThrow("PRODUCT_APPLY_ADD_ITEM_NOT_FOUND");
  });

  it("falls back to the legacy item search when the brand item page fails", async () => {
    const calls: Array<{ method: string; path: string; body?: unknown }> = [];
    const client = {
      request: async (method: string, path: string, body?: unknown) => {
        calls.push({ method, path, body });
        if (path === "hr/sysCompany/queryCompanyInfoById") {
          return { data: { companyId: "DEFAULT-COMPANY", companyCode: "DEFAULT", companyName: "库存同步默认门店" } };
        }
        if (path === "product/item/brandItems/page") {
          throw new Error("BRAND_ITEMS_PAGE_FAILED");
        }
        if (path === "product/itemSearch/search") {
          return {
            data: {
              itemList: {
                content: [
                  { itemId: "ITEM-ID-001", itemCode: "101326127127", itemName: "男款宽松直筒休闲裤" },
                ],
              },
            },
          };
        }
        if (path === "product/mitemcomp/list") {
          return { data: { content: [] } };
        }
        return {};
      },
    };

    const result = await addProductApplication(client, {
      itemCode: "101326127127",
      companyId: "DEFAULT-COMPANY",
      dryRun: true,
    });

    expect(calls.map((call) => call.path)).toEqual([
      "hr/sysCompany/queryCompanyInfoById",
      "product/item/brandItems/page",
      "product/itemSearch/search",
      "product/mitemcomp/list",
    ]);
    expect(calls[2].body).toEqual({ sword: "101326127127", queryType: "2", pageIndex: 1, pageSize: 20 });
    expect(result).toMatchObject({
      mode: "dry-run",
      affected: 1,
      item: { itemId: "ITEM-ID-001", itemCode: "101326127127", itemName: "男款宽松直筒休闲裤" },
    });
  });

  it("diagnoses the full product launch chain for a store", async () => {
    const calls: Array<{ method: string; path: string; body?: unknown }> = [];
    const client = {
      request: async (method: string, path: string, body?: unknown) => {
        calls.push({ method, path, body });
        if (path === "product/itemSearch/search") {
          return { records: [{ itemId: "ITEM-ID-001", itemCode: "SM001", itemName: "26Q2 T恤", headImage: "https://img.example/SM001.jpg" }] };
        }
        if (path === "product/item/spec/getSpuDetailByItemId") {
          return { itemId: "ITEM-ID-001", itemCode: "SM001", itemName: "26Q2 T恤", headImage: "https://img.example/SM001.jpg" };
        }
        if (path === "hr/sysCompany/queryCompanyInfoById") {
          return { companyId: "C001", companyCode: "STORE001", companyName: "西湖店" };
        }
        if (path === "product/pag/comp/getItemPackageAndComp") {
          return {
            itemCount: 1,
            packageList: [{ packageId: "P001", packageCode: "PKG001", packageName: "26Q2订货包" }],
            companyList: [],
          };
        }
        if (path === "product/pag/comp/list") {
          return [{
            companyId: "C001",
            companyCode: "STORE001",
            companyName: "西湖店",
            packageVOList: [{ packageId: "P001", packageCode: "PKG001", packageName: "26Q2订货包" }],
          }];
        }
        return {};
      },
    };

    const result = await diagnoseProductLaunch(client, { itemCode: "SM001", companyId: "C001" });

    expect(calls.map((call) => call.path)).toEqual([
      "product/itemSearch/search",
      "product/item/spec/getSpuDetailByItemId",
      "hr/sysCompany/queryCompanyInfoById",
      "product/pag/comp/getItemPackageAndComp",
      "product/pag/comp/list",
      "product/itemSearch/search",
    ]);
    expect(calls[3].body).toEqual({ itemIds: ["ITEM-ID-001"] });
    expect(result.overallStatus).toBe("pass");
    expect(result.blockingIssues).toEqual([]);
    expect(result.checks.find((check) => check.phase === "store-package")?.status).toBe("pass");
    expect(result.evidence.matchedPackages).toEqual([{ packageId: "P001", packageCode: "PKG001", packageName: "26Q2订货包" }]);
  });

  it("surfaces the missing store package application as a launch blocker", async () => {
    const client = {
      request: async (_method: string, path: string) => {
        if (path === "product/itemSearch/search") {
          return { records: [{ itemId: "ITEM-ID-001", itemCode: "SM001", itemName: "26Q2 T恤" }] };
        }
        if (path === "product/item/spec/getSpuDetailByItemId") {
          return { itemId: "ITEM-ID-001", itemCode: "SM001", itemName: "26Q2 T恤" };
        }
        if (path === "hr/sysCompany/queryCompanyInfoById") {
          return { companyId: "C001", companyCode: "STORE001", companyName: "西湖店" };
        }
        if (path === "product/pag/comp/getItemPackageAndComp") {
          return { packageList: [{ packageId: "P001", packageCode: "PKG001", packageName: "26Q2订货包" }], companyList: [] };
        }
        if (path === "product/pag/comp/list") {
          return [{
            companyId: "C001",
            companyCode: "STORE001",
            companyName: "西湖店",
            packageVOList: [{ packageId: "P999", packageCode: "OTHER", packageName: "旧商品包" }],
          }];
        }
        return {};
      },
    };

    const result = await diagnoseProductLaunch(client, { itemCode: "SM001", companyId: "C001" });

    expect(result.overallStatus).toBe("blocked");
    expect(result.blockingIssues).toContainEqual({
      code: "STORE_PACKAGE_NOT_LINKED",
      phase: "store-package",
      message: "门店没有关联包含该商品的商品包，前端对应门店可能看不到该商品或不能下单。",
    });
    expect(result.nextActions).toContain("在“商品包关联”中把门店 STORE001 / 西湖店 关联到商品包 PKG001。");
    expect(result.checks.find((check) => check.phase === "image-sync")?.status).toBe("warning");
  });

  it("requires a store context for product launch diagnosis", async () => {
    const client = { request: async () => ({}) };

    await expect(diagnoseProductLaunch(client, { itemCode: "SM001" })).rejects.toThrow("PRODUCT_LAUNCH_CHECK_REQUIRES_STORE_CONTEXT");
  });

  it("does not synthesize product launch diagnosis when no client is wired", async () => {
    const program = new Command().exitOverride();
    registerOpsProductCommands(program);

    await expect(program.parseAsync(["node", "bmall", "product", "launch-check", "--item-code", "SM001", "--company-id", "C001"])).rejects.toThrow(
      "OPS_PRODUCT_LAUNCH_CHECK_REQUIRES_API_CLIENT",
    );
  });

  it("dry-runs the batch product launch setup without executing write endpoints", async () => {
    const calls: Array<{ method: string; path: string; body?: unknown }> = [];
    const client = {
      request: async (method: string, path: string, body?: unknown) => {
        calls.push({ method, path, body });
        if (path === "product/pag/list") return { data: { content: [] } };
        if (path === "product/findShAccount") return { data: [{ merchantId: 1162, dpPlaceName: "默认深绘账号" }] };
        return {};
      },
    };

    const result = await setupProductLaunch(client, {
      itemCodes: "101326127127",
      packageNames: "test001",
      companyCodes: "0000001",
      dryRun: true,
    });

    expect(calls).toEqual([
      {
        method: "POST",
        path: "product/pag/list",
        body: { productPagName: "test001", productPagNames: ["test001"], pageIndex: 1, pageSize: 20 },
      },
      {
        method: "POST",
        path: "product/findShAccount",
        body: {},
      },
    ]);
    expect(result).toMatchObject({
      ok: true,
      mode: "dry-run",
      affected: 4,
      itemCodes: ["101326127127"],
      packageNames: ["test001"],
      companyCodes: ["0000001"],
      imageSyncTarget: { source: "auto-sh-account", merchantIds: [1162], syncStockLogisticsPic: false },
    });
    expect(result.apiCalls).toEqual([
      {
        method: "POST",
        endpoint: "product/mdm/mdmItemSyncByArticleCodes",
        body: { articleCodeList: "101326127127" },
      },
      {
        method: "POST",
        endpoint: "product/itemPicAsyncByItemCode",
        body: { items: ["101326127127"], syncStockLogisticsPic: false, merchantIds: [1162] },
      },
      {
        method: "POST",
        endpoint: "product/pag/save",
        body: { packageId: "", pagName: "test001", status: 1, type: "add", itemCodes: ["101326127127"] },
      },
      {
        method: "POST",
        endpoint: "product/pag/comp/batchAddOrDelCompany",
        body: { companyCodes: ["0000001"], applyPackageIds: ["<product/pag/save.data:test001>"], optType: 1 },
      },
    ]);
  });

  it("dry-runs product launch setup with explicit image merchant ids", async () => {
    const calls: Array<{ method: string; path: string; body?: unknown }> = [];
    const client = {
      request: async (method: string, path: string, body?: unknown) => {
        calls.push({ method, path, body });
        if (path === "product/pag/list") return { data: { content: [] } };
        return {};
      },
    };

    const result = await setupProductLaunch(client, {
      itemCodes: "101326127127",
      packageNames: "test001",
      companyCodes: "0000001",
      merchantIds: "23391",
      dryRun: true,
    });

    expect(calls).toEqual([
      {
        method: "POST",
        path: "product/pag/list",
        body: { productPagName: "test001", productPagNames: ["test001"], pageIndex: 1, pageSize: 20 },
      },
    ]);
    expect(result).toMatchObject({
      ok: true,
      mode: "dry-run",
      affected: 4,
      itemCodes: ["101326127127"],
      packageNames: ["test001"],
      companyCodes: ["0000001"],
    });
    expect(result.apiCalls).toEqual([
      {
        method: "POST",
        endpoint: "product/mdm/mdmItemSyncByArticleCodes",
        body: { articleCodeList: "101326127127" },
      },
      {
        method: "POST",
        endpoint: "product/itemPicAsyncByItemCode",
        body: { items: ["101326127127"], syncStockLogisticsPic: false, merchantIds: [23391] },
      },
      {
        method: "POST",
        endpoint: "product/pag/save",
        body: { packageId: "", pagName: "test001", status: 1, type: "add", itemCodes: ["101326127127"] },
      },
      {
        method: "POST",
        endpoint: "product/pag/comp/batchAddOrDelCompany",
        body: { companyCodes: ["0000001"], applyPackageIds: ["<product/pag/save.data:test001>"], optType: 1 },
      },
    ]);
  });

  it("executes the product launch setup sequentially and links the created package id to stores", async () => {
    const calls: Array<{ method: string; path: string; body?: unknown }> = [];
    const client = {
      request: async (method: string, path: string, body?: unknown) => {
        calls.push({ method, path, body });
        if (path === "product/pag/list") return { data: { content: [] } };
        if (path === "product/findShAccount") return { data: [{ merchantId: 1162 }, { merchantId: 23391 }] };
        if (path === "product/pag/save") return { data: 12345 };
        return { data: { ok: true } };
      },
    };

    const result = await setupProductLaunch(client, {
      itemCodes: "101326127127,101326127128",
      packageNames: "test001,test002",
      companyCodes: "0000001,0000002",
      confirm: true,
      reason: "unit test approved launch setup",
    });

    expect(calls.map((call) => call.path)).toEqual([
      "product/pag/list",
      "product/pag/list",
      "product/findShAccount",
      "product/mdm/mdmItemSyncByArticleCodes",
      "product/itemPicAsyncByItemCode",
      "product/pag/save",
      "product/pag/save",
      "product/pag/comp/batchAddOrDelCompany",
    ]);
    expect(calls[3].body).toEqual({ articleCodeList: "101326127127,101326127128" });
    expect(calls[4].body).toEqual({ items: ["101326127127", "101326127128"], syncStockLogisticsPic: false, merchantIds: [1162, 23391] });
    expect(calls[5].body).toEqual({ packageId: "", pagName: "test001", status: 1, type: "add", itemCodes: ["101326127127", "101326127128"] });
    expect(calls[6].body).toEqual({ packageId: "", pagName: "test002", status: 1, type: "add", itemCodes: ["101326127127", "101326127128"] });
    expect(calls[7].body).toEqual({ companyCodes: ["0000001", "0000002"], applyPackageIds: [12345, 12345], optType: 1 });
    expect(result).toMatchObject({ ok: true, mode: "applied", affected: 5 });
  });

  it("reports the failing product launch setup step when an API call fails", async () => {
    const calls: Array<{ method: string; path: string; body?: unknown }> = [];
    const client = {
      request: async (method: string, path: string, body?: unknown) => {
        calls.push({ method, path, body });
        if (path === "product/pag/list") return { data: { content: [] } };
        if (path === "product/findShAccount") return { data: [{ merchantId: 1162 }] };
        if (path === "product/mdm/mdmItemSyncByArticleCodes") throw new Error("业务数据异常，请稍后再试。");
        return { data: { ok: true } };
      },
    };

    await expect(setupProductLaunch(client, {
      itemCodes: "101326127127",
      packageNames: "test001",
      companyCodes: "0000001",
      confirm: true,
      reason: "unit test approved launch setup",
    })).rejects.toThrow("PRODUCT_LAUNCH_SETUP_FAILED:mdm-sync:业务数据异常，请稍后再试。");
    expect(calls.map((call) => call.path)).toEqual([
      "product/pag/list",
      "product/findShAccount",
      "product/mdm/mdmItemSyncByArticleCodes",
    ]);
  });

  it("requires a dry-run or confirmed reason for product launch setup writes", async () => {
    const client = { request: async () => ({}) };

    await expect(setupProductLaunch(client, {
      itemCodes: "101326127127",
      packageNames: "test001",
      companyCodes: "0000001",
    })).rejects.toThrow("WRITE_REQUIRES_DRY_RUN_OR_CONFIRM");
    await expect(setupProductLaunch(client, {
      itemCodes: "101326127127",
      packageNames: "test001",
      companyCodes: "0000001",
      confirm: true,
    })).rejects.toThrow("WRITE_REQUIRES_REASON");
  });
});
