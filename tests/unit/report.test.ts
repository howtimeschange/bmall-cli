import { afterEach, describe, expect, it, vi } from "vitest";
import { Command } from "commander";
import { registerReportCommands } from "../../src/domains/report/commands.js";

describe("report commands", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("calls supply activity and pickup activity endpoints for activity probe", async () => {
    const calls: Array<{ method: string; path: string; body?: unknown }> = [];
    const outputs: unknown[] = [];
    const client = {
      request: async (method: string, path: string, body?: unknown) => {
        calls.push({ method, path, body });
        if (path === "activity/supply/presale/activity/page") {
          return {
            content: [
              { id: "A1", activityNo: "20260515", activityName: "26Q2柔供集单" },
              { id: "A2", activityNo: "20260508", activityName: "26Q2柔供集单" },
            ],
            totalCount: 2,
          };
        }
        if (path === "activity/supplyPresale/pickup/manage/activityView/page") {
          return {
            content: [
              { activityId: "A1", activityNo: "20260515", orderQty: 100, pickedQty: 20, pickingRateStr: "20%" },
              { activityId: "A2", activityNo: "20260508", orderQty: 200, pickedQty: 80, pickingRateStr: "40%" },
            ],
            totalCount: 2,
          };
        }
        if (path === "activity/supplyPresale/pickup/manage/activityView/pageGather") {
          return {
            orderQtySum: 300,
            pickedQtySum: 100,
            pickingRateSumStr: "33.33%",
          };
        }
        return {};
      },
    };
    const program = new Command().exitOverride();
    registerReportCommands(program, client, (payload) => outputs.push(payload));

    await program.parseAsync([
      "node",
      "bmall",
      "report",
      "supply-pickup-activity",
      "--activity-query",
      "26Q2",
      "--page-size",
      "100",
      "--json",
    ]);

    expect(calls).toEqual([
      {
        method: "POST",
        path: "activity/supply/presale/activity/page",
        body: { sword: "26Q2", pageIndex: 1, pageSize: 100 },
      },
      {
        method: "POST",
        path: "activity/supplyPresale/pickup/manage/activityView/page",
        body: { pageIndex: 1, pageSize: 100, onlyUnfulfilled: false, activityStatus: 1, activityIdList: ["A1", "A2"] },
      },
      {
        method: "POST",
        path: "activity/supplyPresale/pickup/manage/activityView/pageGather",
        body: { pageIndex: 1, pageSize: 100, onlyUnfulfilled: false, activityStatus: 1, activityIdList: ["A1", "A2"] },
      },
    ]);
    expect(outputs[0]).toMatchObject({
      activityQuery: "26Q2",
      activities: [
        { id: "A1", activityNo: "20260515", activityName: "26Q2柔供集单" },
        { id: "A2", activityNo: "20260508", activityName: "26Q2柔供集单" },
      ],
      pickupActivityRows: [
        { activityId: "A1", activityNo: "20260515", orderQty: 100, pickedQty: 20, pickingRateStr: "20%" },
        { activityId: "A2", activityNo: "20260508", orderQty: 200, pickedQty: 80, pickingRateStr: "40%" },
      ],
      pickupActivityTotals: {
        orderQtySum: 300,
        pickedQtySum: 100,
        pickingRateSumStr: "33.33%",
      },
    });
  });

  it("uses existing company-view pickup endpoints for customer pickup-rate probe", async () => {
    const calls: Array<{ method: string; path: string; body?: unknown }> = [];
    const outputs: unknown[] = [];
    const client = {
      request: async (method: string, path: string, body?: unknown) => {
        calls.push({ method, path, body });
        if (path === "activity/supply/presale/activity/page") {
          return {
            content: [{ id: "A1", activityNo: "20260515", activityName: "26Q2柔供集单" }],
            totalCount: 1,
          };
        }
        if (path === "activity/supplyPresale/pickup/manage/companyView/dealerPage") {
          return {
            content: [
              {
                distributorName: "杭州零售商",
                distributorCode: "D001",
                companyName: "西湖店",
                companyCode: "C001",
                orderQty: 100,
                allocatedQty: 80,
                pickedQty: 60,
                cumulativePickupRateStr: "75%",
              },
            ],
            totalCount: 1,
          };
        }
        if (path === "activity/supplyPresale/pickup/manage/companyView/pageGather") {
          return {
            orderQtySum: 100,
            allocatedQtySum: 80,
            pickedQtySum: 60,
            cumulativePickupRateSumStr: "75%",
          };
        }
        return {};
      },
    };
    const program = new Command().exitOverride();
    registerReportCommands(program, client, (payload) => outputs.push(payload));

    await program.parseAsync([
      "node",
      "bmall",
      "report",
      "supply-pickup-customer",
      "--activity-query",
      "26Q2",
      "--page-size",
      "100",
      "--json",
    ]);

    expect(calls).toEqual([
      {
        method: "POST",
        path: "activity/supply/presale/activity/page",
        body: { sword: "26Q2", pageIndex: 1, pageSize: 100 },
      },
      {
        method: "POST",
        path: "activity/supplyPresale/pickup/manage/companyView/dealerPage",
        body: { pageIndex: 1, pageSize: 100, activityIdList: ["A1"] },
      },
      {
        method: "POST",
        path: "activity/supplyPresale/pickup/manage/companyView/pageGather",
        body: { pageIndex: 1, pageSize: 100, activityIdList: ["A1"] },
      },
    ]);
    expect(outputs[0]).toMatchObject({
      activityQuery: "26Q2",
      activities: [{ id: "A1", activityNo: "20260515", activityName: "26Q2柔供集单" }],
      customerRows: [
        {
          distributorName: "杭州零售商",
          distributorCode: "D001",
          companyName: "西湖店",
          companyCode: "C001",
          orderQty: 100,
          allocatedQty: 80,
          pickedQty: 60,
          cumulativePickupRateStr: "75%",
        },
      ],
      customerTotals: {
        orderQtySum: 100,
        allocatedQtySum: 80,
        pickedQtySum: 60,
        cumulativePickupRateSumStr: "75%",
      },
    });
  });

  it("flattens nested company-view lists into customer rows", async () => {
    const outputs: unknown[] = [];
    const client = {
      request: async (_method: string, path: string) => {
        if (path === "activity/supplyPresale/pickup/manage/companyView/dealerPage") {
          return {
            content: [
              {
                distributorName: "杭州经销商",
                distributorCode: "D001",
                orderQty: 300,
                pickedQty: 150,
                cumulativePickupRateStr: "50%",
                companyViewList: [
                  {
                    companyName: "西湖店",
                    companyCode: "C001",
                    orderQty: 100,
                    pickedQty: 80,
                    cumulativePickupRateStr: "80%",
                  },
                  {
                    companyName: "滨江店",
                    companyCode: "C002",
                    orderQty: 200,
                    pickedQty: 70,
                    cumulativePickupRateStr: "35%",
                  },
                ],
              },
            ],
          };
        }
        return path.endsWith("pageGather") ? {} : { content: [] };
      },
    };
    const program = new Command().exitOverride();
    registerReportCommands(program, client, (payload) => outputs.push(payload));

    await program.parseAsync([
      "node",
      "bmall",
      "report",
      "supply-pickup-customer",
      "--activity-ids",
      "A1",
      "--json",
    ]);

    expect(outputs[0]).toMatchObject({
      customerGroupRows: [
        {
          distributorName: "杭州经销商",
          distributorCode: "D001",
          orderQty: 300,
          pickedQty: 150,
          cumulativePickupRateStr: "50%",
        },
      ],
      customerRows: [
        {
          distributorName: "杭州经销商",
          distributorCode: "D001",
          companyName: "西湖店",
          companyCode: "C001",
          orderQty: 100,
          pickedQty: 80,
          cumulativePickupRateStr: "80%",
        },
        {
          distributorName: "杭州经销商",
          distributorCode: "D001",
          companyName: "滨江店",
          companyCode: "C002",
          orderQty: 200,
          pickedQty: 70,
          cumulativePickupRateStr: "35%",
        },
      ],
    });
    expect((outputs[0] as { customerRows: unknown[] }).customerRows).toHaveLength(2);
  });

  it("accepts explicit activity ids and activity-view filters", async () => {
    const calls: Array<{ method: string; path: string; body?: unknown }> = [];
    const client = {
      request: async (method: string, path: string, body?: unknown) => {
        calls.push({ method, path, body });
        return path.endsWith("pageGather") ? {} : { content: [] };
      },
    };
    const program = new Command().exitOverride();
    registerReportCommands(program, client);

    await program.parseAsync([
      "node",
      "bmall",
      "report",
      "supply-pickup-activity",
      "--activity-ids",
      "A1,A2",
      "--only-unfulfilled",
      "--pickup-activity-status",
      "all",
      "--json",
    ]);

    expect(calls).toEqual([
      {
        method: "POST",
        path: "activity/supplyPresale/pickup/manage/activityView/page",
        body: { pageIndex: 1, pageSize: 100, onlyUnfulfilled: true, activityIdList: ["A1", "A2"] },
      },
      {
        method: "POST",
        path: "activity/supplyPresale/pickup/manage/activityView/pageGather",
        body: { pageIndex: 1, pageSize: 100, onlyUnfulfilled: true, activityIdList: ["A1", "A2"] },
      },
    ]);
  });

  it("passes customer filters to the customer-view endpoint", async () => {
    const calls: Array<{ method: string; path: string; body?: unknown }> = [];
    const client = {
      request: async (method: string, path: string, body?: unknown) => {
        calls.push({ method, path, body });
        return path.endsWith("pageGather") ? {} : { content: [] };
      },
    };
    const program = new Command().exitOverride();
    registerReportCommands(program, client);

    await program.parseAsync([
      "node",
      "bmall",
      "report",
      "supply-pickup-customer",
      "--activity-ids",
      "A1,A2",
      "--company-code",
      "C001,C002",
      "--distributor-code",
      "D001",
      "--page-index",
      "2",
      "--page-size",
      "50",
      "--json",
    ]);

    expect(calls).toEqual([
      {
        method: "POST",
        path: "activity/supplyPresale/pickup/manage/companyView/dealerPage",
        body: {
          pageIndex: 2,
          pageSize: 50,
          activityIdList: ["A1", "A2"],
          companyCodeList: ["C001", "C002"],
          distributorCodeList: ["D001"],
        },
      },
      {
        method: "POST",
        path: "activity/supplyPresale/pickup/manage/companyView/pageGather",
        body: {
          pageIndex: 2,
          pageSize: 50,
          activityIdList: ["A1", "A2"],
          companyCodeList: ["C001", "C002"],
          distributorCodeList: ["D001"],
        },
      },
    ]);
  });

  it("aggregates pickup and source-order scopes by customer and SKC", async () => {
    const calls: Array<{ method: string; path: string; body?: unknown }> = [];
    const outputs: unknown[] = [];
    const client = {
      request: async (method: string, path: string, body?: unknown) => {
        calls.push({ method, path, body });
        if (path === "activity/pickup/order/mgd/page") {
          return {
            content: [
              {
                id: "PK1",
                pickupOrderNo: "TH001",
                pickupOrderSourceType: 2,
                companyCode: "C001",
                companyName: "西湖店",
                dealerCode: "D001",
                dealerName: "杭州经销商",
                presalesOrderList: [{ presalesOrderId: "SO1", presalesOrderNo: "YS001" }],
                presalesActivityList: [{ activityName: "26Q2柔供集单", activityNo: "20260417" }],
              },
            ],
            totalCount: 1,
          };
        }
        if (path === "activity/pickup/order/mgd/selectPickupOrderSkus") {
          return {
            content: [
              { skcCode: "SKC1", itemName: "短袖T恤", allocatedQuantity: 10, pickedQuantity: 4, pendingPickedQuantity: 6 },
              { skcCode: "SKC2", itemName: "休闲裤", allocatedQuantity: 5, pickedQuantity: 5, pendingPickedQuantity: 0 },
            ],
          };
        }
        if (path === "activity/pickup/orderRel/selectPresaleOrders") {
          return [{ presaleOrderId: "SO1", presaleOrderNo: "YS001" }];
        }
        if (path === "activity/mini/supply/presale/order/query/order/detail/item") {
          return {
            content: [
              {
                skcCode: "SKC1",
                itemName: "短袖T恤",
                waitOrderItemDetailMiniVos: [
                  { skuCode: "SKU1", orderQty: 7 },
                  { skuCode: "SKU2", orderQty: 5 },
                ],
              },
              { skcCode: "SKC2", itemName: "休闲裤", orderQty: 5 },
            ],
          };
        }
        return {};
      },
    };
    const program = new Command().exitOverride();
    registerReportCommands(program, client, (payload) => outputs.push(payload));

    await program.parseAsync([
      "node",
      "bmall",
      "report",
      "pickup-customer-skc",
      "--activity-query",
      "26Q2",
      "--source",
      "supply",
      "--page-size",
      "10",
      "--json",
    ]);

    expect(calls.map((call) => call.path)).toEqual([
      "activity/pickup/order/mgd/page",
      "activity/pickup/order/mgd/selectPickupOrderSkus",
      "activity/pickup/orderRel/selectPresaleOrders",
      "activity/mini/supply/presale/order/query/order/detail/item",
    ]);
    expect(calls[0].body).toMatchObject({ activityKeyWord: "26Q2", activityType: 2, pageSize: 10 });
    expect(outputs[0]).toMatchObject({
      report: "pickup-customer-skc",
      pickupScopeRows: [
        {
          scope: "pickup-order",
          source: "supply",
          customerCode: "C001",
          skcCode: "SKC1",
          orderQty: 10,
          pickedQty: 4,
          waitPickedQty: 6,
          pickupRate: "40.00%",
          pickupOrderNos: ["TH001"],
          sourceOrderNos: ["YS001"],
        },
        {
          scope: "pickup-order",
          source: "supply",
          customerCode: "C001",
          skcCode: "SKC2",
          orderQty: 5,
          pickedQty: 5,
          pickupRate: "100.00%",
        },
      ],
      sourceOrderScopeRows: [
        {
          scope: "source-order",
          source: "supply",
          customerCode: "C001",
          skcCode: "SKC1",
          orderQty: 12,
          pickedQty: 4,
          waitPickedQty: 8,
          pickupRate: "33.33%",
          joinStatus: "detail",
        },
        {
          scope: "source-order",
          source: "supply",
          customerCode: "C001",
          skcCode: "SKC2",
          orderQty: 5,
          pickedQty: 5,
          pickupRate: "100.00%",
          joinStatus: "detail",
        },
      ],
      meta: {
        pickupOrderCount: 1,
        pickupSkuRowCount: 2,
        sourceOrderDetailRowCount: 2,
        sourceOrderJoin: { status: "detail" },
      },
    });
  });

  it("supports source=all by querying supply and mid pickup sources", async () => {
    const calls: Array<{ method: string; path: string; body?: unknown }> = [];
    const client = {
      request: async (method: string, path: string, body?: unknown) => {
        calls.push({ method, path, body });
        if (path === "activity/pickup/order/mgd/page") return { content: [] };
        return {};
      },
    };
    const program = new Command().exitOverride();
    registerReportCommands(program, client);

    await program.parseAsync(["node", "bmall", "report", "pickup-customer-skc", "--activity-query", "26Q2", "--source", "all", "--json"]);

    expect(calls).toEqual([
      {
        method: "POST",
        path: "activity/pickup/order/mgd/page",
        body: { pageIndex: 1, pageSize: 100, activityKeyWord: "26Q2", activityType: 2, needRole: 0, includeSub: true },
      },
      {
        method: "POST",
        path: "activity/pickup/order/mgd/page",
        body: { pageIndex: 1, pageSize: 100, activityKeyWord: "26Q2", activityType: 1, needRole: 0, includeSub: true },
      },
    ]);
  });

  it("prints pickup customer SKC report as CSV when requested", async () => {
    const write = vi.spyOn(process.stdout, "write").mockImplementation(() => true);
    const client = {
      request: async (_method: string, path: string) => {
        if (path === "activity/pickup/order/mgd/page") {
          return {
            content: [
              {
                id: "PK1",
                pickupOrderNo: "TH001",
                pickupOrderSourceType: 2,
                companyCode: "C001",
                companyName: "西湖店",
                dealerCode: "D001",
                dealerName: "杭州经销商",
                presalesOrderList: [{ presalesOrderId: "SO1", presalesOrderNo: "YS001" }],
              },
            ],
          };
        }
        if (path === "activity/pickup/order/mgd/selectPickupOrderSkus") {
          return { content: [{ skcCode: "SKC1", itemName: "短袖T恤", allocatedQuantity: 10, pickedQuantity: 4, pendingPickedQuantity: 6 }] };
        }
        if (path === "activity/pickup/orderRel/selectPresaleOrders") return [];
        if (path === "activity/mini/supply/presale/order/query/order/detail/item") return { content: [] };
        return {};
      },
    };
    const program = new Command().exitOverride();
    registerReportCommands(program, client);

    await program.parseAsync(["node", "bmall", "report", "pickup-customer-skc", "--format", "csv"]);

    const csv = write.mock.calls.map((call) => String(call[0])).join("");
    expect(csv).toContain("scope,source,customerCode,customerName");
    expect(csv).toContain("pickup-order,supply,C001,西湖店,D001,杭州经销商,SKC1,短袖T恤,10,4,6,10,40.00%,1,TH001,YS001,SO1,,");
    expect(csv).toContain("source-order,supply,C001,西湖店,D001,杭州经销商,SKC1,短袖T恤,10,4,6,10,40.00%,1,TH001,YS001,SO1,,,pickup-derived");
  });

  it("fails clearly when report commands have no API client", async () => {
    const program = new Command().exitOverride();
    registerReportCommands(program);

    await expect(
      program.parseAsync(["node", "bmall", "report", "supply-pickup-activity", "--activity-query", "26Q2", "--json"]),
    ).rejects.toThrow("REPORT_SUPPLY_PICKUP_ACTIVITY_REQUIRES_API_CLIENT");

    await expect(
      program.parseAsync(["node", "bmall", "report", "supply-pickup-customer", "--activity-query", "26Q2", "--json"]),
    ).rejects.toThrow("REPORT_SUPPLY_PICKUP_CUSTOMER_REQUIRES_API_CLIENT");

    await expect(
      program.parseAsync(["node", "bmall", "report", "pickup-customer-skc", "--activity-query", "26Q2", "--json"]),
    ).rejects.toThrow("REPORT_PICKUP_CUSTOMER_SKC_REQUIRES_API_CLIENT");
  });
});
