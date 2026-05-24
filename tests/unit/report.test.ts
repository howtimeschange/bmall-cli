import { afterEach, describe, expect, it, vi } from "vitest";
import { Command } from "commander";
import ExcelJS from "exceljs";
import { createServer } from "node:http";
import { mkdtemp, readFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
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

  it("generates a middle-short-term presale business workbook and keeps ordering participants when pickup data is partial", async () => {
    const calls: Array<{ method: string; path: string; body?: unknown }> = [];
    const outputs: unknown[] = [];
    const outputDir = await mkdtemp(join(tmpdir(), "bmall-mid-presale-report-"));
    const outputPath = join(outputDir, "middle-short-term.xlsx");
    const client = {
      request: async (method: string, path: string, body?: unknown) => {
        calls.push({ method, path, body });
        if (path === "activity/presaleActivities/findActivity") {
          return {
            content: [
              { presaleId: "M0", presaleCode: "202512", presaleName: "25冬中短期", beginTime: "2025-12-15 00:00:00" },
              { presaleId: "M1", presaleCode: "202603", presaleName: "26春中短期", beginTime: "2026-03-05 00:00:00" },
            ],
          };
        }
        if (path === "activity/presaleOrder/page") {
          return {
            content: [
              { id: "MO1", presaleId: "M1", presaleCode: "202603", presaleName: "26春中短期", companyCode: "C001", companyName: "西湖店", distrCode: "D001", distrName: "杭州经销商", goodsTotal: 120, goodsTotalPrice: 9600 },
              { id: "MO2", presaleId: "M1", presaleCode: "202603", presaleName: "26春中短期", companyCode: "C002", companyName: "滨江店", distrCode: "D001", distrName: "杭州经销商", goodsTotal: 80, goodsTotalPrice: 7200 },
            ],
          };
        }
        if (path === "activity/presaleOrder/orderStatistics") {
          return { orderQtyTotalCount: 2, goodsQtyTotalCount: 200, allocatedQtyTotalCount: 120, pickedQtyTotalCount: 80, skcQtyTotalCount: 9 };
        }
        if (path === "activity/presale/pickup/manage/activityView/page") {
          return { content: [{ activityId: "M1", activityName: "26春中短期", orderQty: 180, pickedQty: 80 }] };
        }
        if (path === "activity/presale/pickup/manage/activityView/pageGather") {
          return { orderQtySum: 180, allocatedQtySum: 20, preAllocatedQtySum: 100, pendingAllocationQtySum: 60, pickedQtySum: 80, cumulativeFillRateSumStr: "66.67%", pickingRateSumStr: "66.67%" };
        }
        if (path === "activity/presale/pickup/manage/companyView/dealerPage") {
          return {
            content: [
              { distributorCode: "D001", distributorName: "杭州经销商", companyViewList: [
                { companyCode: "C001", companyName: "西湖店", orderQty: 100, pickedQty: 60 },
              ] },
            ],
          };
        }
        if (path === "activity/presale/pickup/manage/companyView/pageGather") {
          return { orderQtySum: 180, pickedQtySum: 80 };
        }
        return {};
      },
    };
    const program = new Command().exitOverride();
    registerReportCommands(program, client, (payload) => outputs.push(payload));

    await program.parseAsync([
      "node", "bmall", "report", "presale-business",
      "--source", "mid",
      "--start-date", "2026-01-01",
      "--end-date", "2026-05-24",
      "--output", outputPath,
      "--json",
    ]);

    expect(calls.map((call) => call.path)).toEqual([
      "activity/presaleActivities/findActivity",
      "activity/presaleOrder/page",
      "activity/presaleOrder/orderStatistics",
      "activity/presale/pickup/manage/activityView/page",
      "activity/presale/pickup/manage/activityView/pageGather",
      "activity/presale/pickup/manage/companyView/dealerPage",
      "activity/presale/pickup/manage/companyView/pageGather",
    ]);
    expect(calls[1].body).toMatchObject({ activityIds: ["M1"] });
    expect(calls[3].body).toMatchObject({ activityIdList: ["M1"], onlyUnfulfilled: false });
    expect(outputs[0]).toMatchObject({
      report: "presale-business",
      source: "mid",
      activities: [{ activityId: "M1", activityNo: "202603", activityName: "26春中短期" }],
      summary: {
        activityCount: 1,
        customerCount: 2,
        orderCount: 2,
        orderQty: 200,
        marketValue: 16800,
        pickupScopeQty: 180,
        preAllocatedQty: 100,
        allocatedQty: 20,
        pickedQty: 80,
      },
      amountBasis: { method: "order-rows", field: "goodsTotalPrice" },
      output: outputPath,
    });
    expect((outputs[0] as { summary: { fillRate: number; pickupRate: number } }).summary.fillRate).toBeCloseTo(0.6667, 4);
    expect((outputs[0] as { summary: { fillRate: number; pickupRate: number } }).summary.pickupRate).toBeCloseTo(0.6667, 4);
    expect((outputs[0] as { summary: { pickupScopeRate: number } }).summary.pickupScopeRate).toBeCloseTo(0.4444, 4);
    const workbookBytes = await readFile(outputPath);
    expect(workbookBytes.subarray(0, 2).toString()).toBe("PK");
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(outputPath);
    expect(workbook.worksheets.map((sheet) => sheet.name)).toEqual(["总结", "活动明细", "客户提货", "订单明细", "口径说明"]);
    expect(workbook.getWorksheet("总结")?.getCell("B10").value).toBe(16800);
    expect(workbook.getWorksheet("总结")?.getCell("A16").value).toBe("提货范围达成率");
    expect(workbook.getWorksheet("总结")?.getCell("A17").value).toBe("累计分配满足率");
    expect(workbook.getWorksheet("总结")?.getCell("A18").value).toBe("分配后提货率");
    expect(workbook.getWorksheet("口径说明")?.getCell("B6").value).toBe("订单明细去重门店编码数；无订单明细时以客户提货视角回退");
  });

  it("resolves flexible-supply market value from the existing asynchronous order export workbook", async () => {
    const exportedWorkbook = new ExcelJS.Workbook();
    const exportedSheet = exportedWorkbook.addWorksheet("柔供预售单明细");
    exportedSheet.addRow(["订单编号", "市值总额"]);
    exportedSheet.addRow(["orderNo", "totalPrice"]);
    exportedSheet.addRow(["SO1", 10000]);
    exportedSheet.addRow(["SO2", 2500]);
    const exportedBytes = Buffer.from(await exportedWorkbook.xlsx.writeBuffer());
    const server = createServer((_request, response) => {
      response.writeHead(200, { "content-type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
      response.end(exportedBytes);
    });
    await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
    const address = server.address();
    if (!address || typeof address === "string") throw new Error("SUPPLY_EXPORT_TEST_SERVER_FAILED");
    const downloadUrl = `http://127.0.0.1:${address.port}/supply-export.xlsx`;
    const calls: Array<{ method: string; path: string; body?: unknown }> = [];
    const outputs: unknown[] = [];
    const outputDir = await mkdtemp(join(tmpdir(), "bmall-supply-presale-report-"));
    const outputPath = join(outputDir, "flexible-supply.xlsx");
    const client = {
      request: async (method: string, path: string, body?: unknown) => {
        calls.push({ method, path, body });
        if (path === "activity/supply/presale/activity/page") {
          return { content: [{ id: "S1", activityNo: "20260417", activityName: "26Q2柔供集单" }] };
        }
        if (path === "activity/supply/presale/order/page") {
          return { content: [
            { orderNo: "SO1", activityNo: "20260417", companyCode: "C001", companyName: "西湖店", totalQty: 80 },
            { orderNo: "SO2", activityNo: "20260417", companyCode: "C002", companyName: "滨江店", totalQty: 20 },
          ] };
        }
        if (path === "activity/supply/presale/order/pageGather") {
          return { orderQtyTotalCount: 2, goodsQtyTotalCount: 100 };
        }
        if (path === "activity/supplyPresale/pickup/manage/activityView/page") {
          return { content: [{ activityId: "S1", activityName: "26Q2柔供集单", orderQty: 90, pickedQty: 45 }] };
        }
        if (path === "activity/supplyPresale/pickup/manage/activityView/pageGather") {
          return { orderQtySum: 90, preAllocatedQtySum: 60, allocatedQtySum: 10, pendingAllocationQtySum: 20, pickedQtySum: 45 };
        }
        if (path === "activity/supplyPresale/pickup/manage/companyView/dealerPage") {
          return { content: [{ distributorCode: "D001", companyViewList: [
            { companyCode: "C001", companyName: "西湖店", orderQty: 70, pickedQty: 40 },
            { companyCode: "C002", companyName: "滨江店", orderQty: 20, pickedQty: 5 },
          ] }] };
        }
        if (path === "activity/supplyPresale/pickup/manage/companyView/pageGather") {
          return { orderQtySum: 90, pickedQtySum: 45 };
        }
        if (path === "file/supply/presale/order/export") return { isAsyn: true };
        if (path === "file/asyn/export/b2b/page") {
          return { records: [
            { status: "3", fileName: "柔供预售单明细-整单汇总(历史失败).xlsx", taskUrl: "", createDate: "2026-01-02T00:00:00.000Z" },
            { status: "3", fileName: "商品明细-并行导出失败.xlsx", taskUrl: "", createDate: new Date(Date.now() + 500).toISOString() },
            { status: "2", fileName: "柔供预售单明细-整单汇总.xlsx", taskUrl: downloadUrl, createDate: new Date(Date.now() + 1000).toISOString() },
            { status: "3", fileName: "柔供预售单明细-整单汇总(并行失败).xlsx", taskUrl: "", createDate: new Date(Date.now() + 1500).toISOString() },
          ] };
        }
        return {};
      },
    };

    try {
      const program = new Command().exitOverride();
      registerReportCommands(program, client, (payload) => outputs.push(payload));

      await program.parseAsync([
        "node", "bmall", "report", "presale-business",
        "--source", "supply",
        "--start-date", "2026-01-01",
        "--end-date", "2026-05-24",
        "--output", outputPath,
        "--export-poll-interval-ms", "0",
        "--export-timeout-ms", "100",
        "--json",
      ]);

      expect(calls).toContainEqual({
        method: "POST",
        path: "file/supply/presale/order/export",
        body: { exportType: "allActAllOrder", activityNos: ["20260417"] },
      });
      expect(calls.map((call) => call.path)).toContain("file/asyn/export/b2b/page");
      expect(outputs[0]).toMatchObject({
        report: "presale-business",
        source: "supply",
        orderRows: [
          { orderNo: "SO1", totalPrice: 10000 },
          { orderNo: "SO2", totalPrice: 2500 },
        ],
        summary: { orderCount: 2, orderQty: 100, marketValue: 12500, pickedQty: 45 },
        amountBasis: { method: "export-workbook", field: "totalPrice", exportType: "allActAllOrder" },
        output: outputPath,
      });
      expect((await readFile(outputPath)).subarray(0, 2).toString()).toBe("PK");
    } finally {
      await new Promise<void>((resolve, reject) => server.close((error) => (error ? reject(error) : resolve())));
    }
  });

  it("does not expand an empty date-window selection into unscoped downstream report queries", async () => {
    const calls: string[] = [];
    const outputs: unknown[] = [];
    const outputDir = await mkdtemp(join(tmpdir(), "bmall-empty-presale-report-"));
    const outputPath = join(outputDir, "empty.xlsx");
    const client = {
      request: async (_method: string, path: string) => {
        calls.push(path);
        if (path === "activity/presaleActivities/findActivity") {
          return { content: [{ presaleId: "M0", presaleName: "25冬中短期", beginTime: "2025-12-15 00:00:00" }] };
        }
        throw new Error(`UNSCOPED_QUERY_${path}`);
      },
    };
    const program = new Command().exitOverride();
    registerReportCommands(program, client, (payload) => outputs.push(payload));

    await program.parseAsync([
      "node", "bmall", "report", "presale-business",
      "--source", "mid",
      "--start-date", "2026-01-01",
      "--end-date", "2026-05-24",
      "--output", outputPath,
      "--json",
    ]);

    expect(calls).toEqual(["activity/presaleActivities/findActivity"]);
    expect(outputs[0]).toMatchObject({ activities: [], orderRows: [], customerRows: [], summary: { activityCount: 0, orderCount: 0, orderQty: 0, marketValue: 0 } });
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

    await expect(
      program.parseAsync(["node", "bmall", "report", "presale-business", "--source", "mid", "--start-date", "2026-01-01", "--end-date", "2026-05-24", "--output", "presale-report.xlsx", "--json"]),
    ).rejects.toThrow("REPORT_PRESALE_BUSINESS_REQUIRES_API_CLIENT");
  });
});
