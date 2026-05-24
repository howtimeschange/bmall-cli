import ExcelJS from "exceljs";
import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";

export type PresaleReportSource = "supply" | "mid";

export interface PresaleSummary {
  activityCount: number;
  customerCount: number;
  orderCount: number;
  orderQty: number;
  marketValue: number;
  pickupScopeQty: number;
  preAllocatedQty: number;
  allocatedQty: number;
  pendingAllocationQty: number;
  pickedQty: number;
  pickupScopeRate: number | null;
  fillRate: number | null;
  pickupRate: number | null;
}

export interface PresaleBusinessWorkbookData {
  source: PresaleReportSource;
  startDate: string;
  endDate: string;
  activities: Array<Record<string, unknown>>;
  orderRows: Array<Record<string, unknown>>;
  pickupActivityRows: Array<Record<string, unknown>>;
  customerRows: Array<Record<string, unknown>>;
  summary: PresaleSummary;
  amountBasis: Record<string, unknown>;
  endpoints: Record<string, string>;
}

export interface SupplyExportAmountData {
  marketValue: number;
  orderAmounts: Array<{ orderNo: string; totalPrice: number }>;
}

const fill = {
  title: "FF1F4E78",
  section: "FFD9E8F5",
  header: "FFE8F1F8",
  body: "FFFFFFFF",
  accent: "FFE2F0D9",
};
const darkText = "FF203040";
const borderColor = "FFD5DEE8";

function numeric(value: unknown): number {
  if (typeof value === "number") return Number.isFinite(value) ? value : 0;
  const parsed = Number(String(value ?? "").replaceAll(",", ""));
  return Number.isFinite(parsed) ? parsed : 0;
}

function cellValue(value: unknown): string | number | boolean | Date | null {
  if (value === undefined || value === null) return null;
  if (value instanceof Date) return value;
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") return value;
  return JSON.stringify(value);
}

function asText(value: unknown): string {
  return value === undefined || value === null ? "" : String(value);
}

function sheetTitle(sheet: ExcelJS.Worksheet, text: string, lastColumn: number): void {
  sheet.mergeCells(1, 1, 1, lastColumn);
  const cell = sheet.getCell(1, 1);
  cell.value = text;
  cell.font = { bold: true, size: 16, color: { argb: "FFFFFFFF" }, name: "Arial" };
  cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: fill.title } };
  cell.alignment = { vertical: "middle", horizontal: "left" };
  sheet.getRow(1).height = 30;
  sheet.views = [{ state: "frozen", ySplit: 1, showGridLines: false }];
}

function bordered(cell: ExcelJS.Cell): void {
  cell.border = {
    top: { style: "thin", color: { argb: borderColor } },
    left: { style: "thin", color: { argb: borderColor } },
    bottom: { style: "thin", color: { argb: borderColor } },
    right: { style: "thin", color: { argb: borderColor } },
  };
}

function styleTable(sheet: ExcelJS.Worksheet, headerRow: number, rowCount: number, columnCount: number): void {
  const header = sheet.getRow(headerRow);
  header.height = 22;
  header.eachCell((cell) => {
    cell.font = { bold: true, color: { argb: darkText }, name: "Arial" };
    cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: fill.header } };
    cell.alignment = { horizontal: "center", vertical: "middle", wrapText: true };
    bordered(cell);
  });
  for (let row = headerRow + 1; row <= headerRow + rowCount; row += 1) {
    sheet.getRow(row).eachCell((cell) => {
      cell.font = { size: 10, color: { argb: darkText }, name: "Arial" };
      cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: row % 2 === 0 ? "FFF7FAFC" : fill.body } };
      cell.alignment = { vertical: "middle", horizontal: typeof cell.value === "number" ? "right" : "left" };
      bordered(cell);
    });
  }
  if (columnCount > 0) sheet.autoFilter = { from: { row: headerRow, column: 1 }, to: { row: headerRow + rowCount, column: columnCount } };
  sheet.views = [{ state: "frozen", ySplit: headerRow, showGridLines: false }];
}

function keyColumns(rows: Array<Record<string, unknown>>, preferred: string[]): string[] {
  const columns = [...preferred];
  for (const row of rows) {
    for (const key of Object.keys(row)) {
      if (!columns.includes(key)) columns.push(key);
    }
  }
  return columns.filter((key) => rows.some((row) => row[key] !== undefined));
}

function detailSheet(
  workbook: ExcelJS.Workbook,
  name: string,
  title: string,
  rows: Array<Record<string, unknown>>,
  preferred: string[],
): void {
  const sheet = workbook.addWorksheet(name);
  const columns = keyColumns(rows, preferred);
  const visibleColumns = columns.length > 0 ? columns : ["说明"];
  sheetTitle(sheet, title, Math.max(visibleColumns.length, 4));
  sheet.addRow([]);
  sheet.addRow(visibleColumns);
  if (rows.length === 0) sheet.addRow(["本筛选范围内无数据"]);
  for (const row of rows) sheet.addRow(columns.map((column) => cellValue(row[column])));
  styleTable(sheet, 3, Math.max(rows.length, 1), visibleColumns.length);
  for (let index = 1; index <= visibleColumns.length; index += 1) {
    const key = visibleColumns[index - 1];
    const maxLength = Math.max(
      key.length,
      ...rows.slice(0, 100).map((row) => asText(row[key]).length),
    );
    sheet.getColumn(index).width = Math.min(Math.max(maxLength + 2, 12), 30);
  }
}

function buildSummarySheet(workbook: ExcelJS.Workbook, data: PresaleBusinessWorkbookData): void {
  const sheet = workbook.addWorksheet("总结");
  sheetTitle(sheet, `${data.source === "supply" ? "柔供" : "中短期"}预售业务统计报告`, 6);
  sheet.getCell("A3").value = "统计范围";
  sheet.getCell("B3").value = `${data.startDate} 至 ${data.endDate}`;
  sheet.getCell("D3").value = "金额口径";
  sheet.getCell("E3").value = data.source === "supply" ? "导出字段 totalPrice（市值总额）" : "订单字段 goodsTotalPrice（市值总额）";
  for (const address of ["A3", "D3"]) {
    const cell = sheet.getCell(address);
    cell.font = { bold: true, color: { argb: darkText } };
    cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: fill.section } };
    bordered(cell);
  }
  for (const address of ["B3", "E3"]) bordered(sheet.getCell(address));

  const metricRows: Array<[string, number | null, string]> = [
    ["活动数", data.summary.activityCount, "个"],
    ["参与客户数", data.summary.customerCount, "家"],
    ["订单数", data.summary.orderCount, "单"],
    ["征订件数", data.summary.orderQty, "件"],
    ["吊牌价/市值总额", data.summary.marketValue, "元"],
    ["提货范围件数", data.summary.pickupScopeQty, "件"],
    ["预分配件数", data.summary.preAllocatedQty, "件"],
    ["已分配件数", data.summary.allocatedQty, "件"],
    ["待分配件数", data.summary.pendingAllocationQty, "件"],
    ["已提货件数", data.summary.pickedQty, "件"],
    ["提货范围达成率", data.summary.pickupScopeRate, "%"],
    ["累计分配满足率", data.summary.fillRate, "%"],
    ["分配后提货率", data.summary.pickupRate, "%"],
  ];
  sheet.addRow([]);
  sheet.addRow(["核心指标", "数值", "单位"]);
  for (const [label, value, unit] of metricRows) sheet.addRow([label, value, unit]);
  styleTable(sheet, 5, metricRows.length, 3);
  sheet.getColumn(1).width = 22;
  sheet.getColumn(2).width = 18;
  sheet.getColumn(3).width = 12;
  sheet.getColumn(4).width = 16;
  sheet.getColumn(5).width = 42;
  sheet.getColumn(6).width = 4;
  sheet.getCell("B10").numFmt = "#,##0.00";
  sheet.getCell("B16").numFmt = "0.00%";
  sheet.getCell("B17").numFmt = "0.00%";
  sheet.getCell("B18").numFmt = "0.00%";
  sheet.getCell("B10").fill = { type: "pattern", pattern: "solid", fgColor: { argb: fill.accent } };
}

function buildBasisSheet(workbook: ExcelJS.Workbook, data: PresaleBusinessWorkbookData): void {
  const sheet = workbook.addWorksheet("口径说明");
  sheetTitle(sheet, "统计口径与数据来源", 3);
  const rows: Array<[string, string, string]> = [
    ["统计对象", data.source === "supply" ? "柔供预售" : "中短期预售", "命令参数 --source"],
    ["时间范围", `${data.startDate} 至 ${data.endDate}`, "按活动开始日期/批次日期筛选，含首尾日期"],
    ["客户参与度", "订单明细去重门店编码数；无订单明细时以客户提货视角回退", `${data.endpoints.orderPage} / ${data.endpoints.customerPickupPage}`],
    ["订单与征订件数", "订单汇总接口优先，明细行回退", data.endpoints.orderTotals],
    ["金额", data.source === "supply" ? "柔供整单汇总导出 totalPrice 求和" : "订单行 goodsTotalPrice 求和", data.source === "supply" ? data.endpoints.amountExport : data.endpoints.orderPage],
    ["提货情况", "提货活动视角汇总中的分配及已提货数量；提货范围达成率=已提货/提货范围，分配后提货率沿用后端 pickingRateSum", data.endpoints.pickupActivityTotals],
    ["客户 + SKC", "另有正式命令 report pickup-customer-skc 可继续下钻", "支持 supply、mid、all"],
  ];
  sheet.addRow([]);
  sheet.addRow(["项目", "口径", "接口/说明"]);
  for (const row of rows) sheet.addRow(row);
  styleTable(sheet, 3, rows.length, 3);
  sheet.getColumn(1).width = 20;
  sheet.getColumn(2).width = 42;
  sheet.getColumn(3).width = 64;
}

export async function writePresaleBusinessWorkbook(data: PresaleBusinessWorkbookData, output: string): Promise<string> {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "bmall-cli";
  workbook.created = new Date();
  buildSummarySheet(workbook, data);
  detailSheet(workbook, "活动明细", "活动维度提货明细", data.pickupActivityRows.length > 0 ? data.pickupActivityRows : data.activities, [
    "activityNo", "activityName", "activityId", "orderQty", "preAllocatedQty", "allocatedQty", "pendingAllocationQty", "pickedQty",
  ]);
  detailSheet(workbook, "客户提货", "客户维度提货明细", data.customerRows, [
    "distributorCode", "distributorName", "companyCode", "companyName", "orderQty", "preAllocatedQty", "allocatedQty", "pendingAllocationQty", "pickedQty",
  ]);
  detailSheet(workbook, "订单明细", "预售订单明细", data.orderRows, [
    "orderNo", "id", "activityNo", "activityName", "companyCode", "companyName", "distrCode", "distrName", "totalQty", "goodsTotal", "goodsTotalPrice",
  ]);
  buildBasisSheet(workbook, data);
  const outputPath = resolve(output);
  await mkdir(dirname(outputPath), { recursive: true });
  await workbook.xlsx.writeFile(outputPath);
  return outputPath;
}

export async function readSupplyExportAmounts(bytes: Uint8Array): Promise<SupplyExportAmountData> {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(Buffer.from(bytes) as never);
  const sheet = workbook.worksheets[0];
  if (!sheet) throw new Error("REPORT_SUPPLY_EXPORT_WORKBOOK_EMPTY");
  let amountColumn: number | undefined;
  let orderNoColumn: number | undefined;
  let headerRow: number | undefined;
  for (let rowNumber = 1; rowNumber <= Math.min(sheet.rowCount, 5); rowNumber += 1) {
    const row = sheet.getRow(rowNumber);
    row.eachCell((cell, columnNumber) => {
      const value = asText(cell.value).trim();
      if (value === "totalPrice" || value === "市值总额") {
        amountColumn ??= columnNumber;
        headerRow = Math.max(headerRow ?? 0, rowNumber);
      }
      if (value === "orderNo" || value === "订单编号") {
        orderNoColumn ??= columnNumber;
        headerRow = Math.max(headerRow ?? 0, rowNumber);
      }
    });
  }
  if (!amountColumn || !headerRow) throw new Error("REPORT_SUPPLY_MARKET_VALUE_COLUMN_NOT_FOUND");
  let total = 0;
  const orderAmounts: Array<{ orderNo: string; totalPrice: number }> = [];
  for (let rowNumber = headerRow + 1; rowNumber <= sheet.rowCount; rowNumber += 1) {
    const totalPrice = numeric(sheet.getCell(rowNumber, amountColumn).value);
    total += totalPrice;
    const orderNo = orderNoColumn ? asText(sheet.getCell(rowNumber, orderNoColumn).value).trim() : "";
    if (orderNo) orderAmounts.push({ orderNo, totalPrice });
  }
  return { marketValue: total, orderAmounts };
}
