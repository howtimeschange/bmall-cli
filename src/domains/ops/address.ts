import { readFileSync } from "node:fs";
import { assertWriteGate, auditOperation, dryRunPlan, type WriteGateOptions } from "./safety.js";

type ApiClient = { request: (method: string, path: string, body?: unknown) => Promise<unknown> };
type OutputFn = (payload: unknown) => void;
type CommandLike = {
  command(name: string): CommandLike;
  description(text: string): CommandLike;
  option(flags: string, description?: string, defaultValue?: unknown): CommandLike;
  requiredOption(flags: string, description?: string): CommandLike;
  action(fn: (options: Record<string, unknown>) => unknown): CommandLike;
};

export interface AddressRecord {
  fid?: string;
  addressId?: string;
  consignee?: string;
  consiPhone?: string;
  provinceName?: string;
  cityName?: string;
  regionName?: string;
  conAddress?: string;
  provinceCode?: string;
  cityCode?: string;
  regionCode?: string;
  isDefault?: number;
  sourceType?: number;
  sourceTypeName?: string;
  [key: string]: unknown;
}

type AddressSaveRecord = {
  fid?: string;
  consignee?: string;
  consiPhone?: string;
  provinceName?: string;
  cityName?: string;
  regionName?: string;
  conAddress?: string;
  provinceCode?: string;
  cityCode?: string;
  regionCode?: string;
  isDefault: number;
  sourceType?: number;
  sourceTypeName?: string;
};

const ADDRESS_LIST_ENDPOINT = "hr/mb2bcrd3/list";
const ADDRESS_SAVE_ENDPOINT = "hr/mb2bcrd3/saveOrUpdate";
const ADDRESS_GET_BY_ID_ENDPOINT = "hr/mb2bcrd3/getById";
const MDM_SOURCE_TYPE = 2;

function emit(output: OutputFn | undefined, payload: unknown): unknown {
  if (output) output(payload);
  return payload;
}

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" && !Array.isArray(value) ? value as Record<string, unknown> : {};
}

function isBlankOrPlaceholder(value: unknown, placeholder: string): boolean {
  const text = String(value ?? "").trim();
  return !text || text === placeholder;
}

function pickAddressId(address: AddressRecord): string | undefined {
  return typeof address.fid === "string" ? address.fid : typeof address.addressId === "string" ? address.addressId : undefined;
}

function isMdmAddress(address: AddressRecord): boolean {
  return address.sourceType === MDM_SOURCE_TYPE || String(address.sourceTypeName ?? "").toLowerCase() === "mdm";
}

export function normalizeAddressList(raw: unknown): AddressRecord[] {
  const source = asRecord(raw);
  const data = source.data ?? source.Data ?? source.DataLine ?? source.rows ?? source.records ?? raw;
  if (Array.isArray(data)) return data.map((item) => asRecord(item) as AddressRecord);
  if (data && typeof data === "object") {
    const nested = asRecord(data);
    for (const key of ["data", "Data", "DataLine", "rows", "records", "list"]) {
      if (Array.isArray(nested[key])) return (nested[key] as unknown[]).map((item) => asRecord(item) as AddressRecord);
    }
  }
  return [];
}

export function addressCompleteness(address: AddressRecord) {
  const blockingIssues: Array<{ field: string; code: string; message: string }> = [];
  if (isBlankOrPlaceholder(address.provinceName, "省")) {
    blockingIssues.push({ field: "provinceName", code: "ADDRESS_PROVINCE_INCOMPLETE", message: "收货地址不完整，请先维护省" });
  }
  if (isBlankOrPlaceholder(address.cityName, "市")) {
    blockingIssues.push({ field: "cityName", code: "ADDRESS_CITY_INCOMPLETE", message: "收货地址不完整，请先维护市" });
  }
  if (isBlankOrPlaceholder(address.regionName, "区")) {
    blockingIssues.push({ field: "regionName", code: "ADDRESS_REGION_INCOMPLETE", message: "收货地址不完整，请先维护区" });
  }
  if (isBlankOrPlaceholder(address.conAddress, "")) {
    blockingIssues.push({ field: "conAddress", code: "ADDRESS_DETAIL_INCOMPLETE", message: "收货地址不完整，请先维护详细地址" });
  }

  const mdm = address.sourceType === MDM_SOURCE_TYPE || String(address.sourceTypeName ?? "").toLowerCase() === "mdm";
  const complete = blockingIssues.length === 0;
  return {
    addressId: pickAddressId(address) ?? null,
    complete,
    canPatchDirectly: !complete && !mdm,
    sourceType: address.sourceType ?? null,
    sourceTypeName: address.sourceTypeName ?? null,
    address,
    blockingIssues,
    nextActions: complete
      ? ["该收货地址省/市/区/详细地址完整，可继续审核或下单。"]
      : mdm
        ? ["该地址来源为 MDM，CLI 不直接修改省/市/区字段；请先修正门店主数据并同步到 Bmall。"]
        : ["可用 `bmall ops address patch --company-id ... --address-id ...` 补齐缺失字段，建议先 dry-run。"],
  };
}

export function summarizeAddressCompleteness(companyId: string, addresses: AddressRecord[]) {
  const checks = addresses.map(addressCompleteness);
  const incomplete = checks.filter((item) => !item.complete);
  return {
    companyId,
    complete: incomplete.length === 0,
    count: addresses.length,
    incompleteCount: incomplete.length,
    addresses: checks,
    blockingIssues: incomplete.flatMap((item) => item.blockingIssues.map((issue) => ({ addressId: item.addressId, ...issue }))),
    nextActions: incomplete.length
      ? ["先补齐 regionName/provinceName/cityName/conAddress，再重新执行审核。", "如果地址来源为 MDM，请从主数据侧修正后同步。"]
      : ["地址完整性检查通过。"],
  };
}

export function buildAddressPatchPayload(
  addresses: AddressRecord[],
  options: { companyId: string; addressId: string; patch: Partial<AddressRecord> },
) {
  const address = addresses.find((item) => pickAddressId(item) === options.addressId);
  if (!address) throw new Error("ADDRESS_NOT_FOUND");
  if (isMdmAddress(address)) throw new Error("ADDRESS_SOURCE_REQUIRES_MDM_SYNC");
  const patch = cleanPatch(options.patch);
  const addressListReqs = addresses.map((item) => {
    const itemPatch = pickAddressId(item) === options.addressId ? patch : {};
    if (patch.isDefault === 1 && pickAddressId(item) !== options.addressId) itemPatch.isDefault = 0;
    return toSaveAddress(item, itemPatch);
  });
  return { companyId: options.companyId, addressListReqs };
}

export function buildAddressCreatePayload(
  addresses: AddressRecord[],
  options: { companyId: string; address: Partial<AddressRecord> },
) {
  const nextAddress = { ...options.address, sourceType: 1 } as AddressRecord;
  const defaultValue = defaultNumber(nextAddress.isDefault);
  const existing = defaultValue === 1 ? addresses.map((item) => ({ ...item, isDefault: 0 })) : addresses;
  return { companyId: options.companyId, addressListReqs: [...existing.map((item) => toSaveAddress(item)), toSaveAddress(nextAddress)] };
}

export function buildAddressSetDefaultPayload(
  addresses: AddressRecord[],
  options: { companyId: string; addressId: string },
) {
  const address = addresses.find((item) => pickAddressId(item) === options.addressId);
  if (!address) throw new Error("ADDRESS_NOT_FOUND");
  const addressListReqs = addresses.map((item) => toSaveAddress(item, { isDefault: pickAddressId(item) === options.addressId ? 1 : 0 }));
  return { companyId: options.companyId, addressListReqs };
}

export function buildAddressDeletePayload(
  addresses: AddressRecord[],
  options: { companyId: string; addressId: string },
) {
  const address = addresses.find((item) => pickAddressId(item) === options.addressId);
  if (!address) throw new Error("ADDRESS_NOT_FOUND");
  if (isMdmAddress(address)) throw new Error("ADDRESS_SOURCE_REQUIRES_MDM_SYNC");
  return { companyId: options.companyId, addressListReqs: addresses.filter((item) => pickAddressId(item) !== options.addressId).map((item) => toSaveAddress(item)) };
}

function toSaveAddress(address: AddressRecord, patch: Partial<AddressRecord> = {}): AddressSaveRecord {
  const merged = { ...address, ...patch };
  const result: AddressSaveRecord = {
    fid: pickAddressId(merged),
    consignee: merged.consignee,
    consiPhone: merged.consiPhone,
    provinceName: merged.provinceName,
    cityName: merged.cityName,
    regionName: merged.regionName,
    conAddress: merged.conAddress,
    provinceCode: merged.provinceCode,
    cityCode: merged.cityCode,
    regionCode: merged.regionCode,
    isDefault: defaultNumber(merged.isDefault),
  };
  if (typeof merged.sourceType === "number") result.sourceType = merged.sourceType;
  if (typeof merged.sourceTypeName === "string") result.sourceTypeName = merged.sourceTypeName;
  return result;
}

function defaultNumber(value: unknown): number {
  if (value === true) return 1;
  if (typeof value === "number") return value;
  if (typeof value === "string" && value.trim()) return Number(value);
  return 0;
}

function readPatchFile(file?: unknown): Partial<AddressRecord> {
  if (typeof file !== "string") return {};
  return JSON.parse(readFileSync(file, "utf8")) as Partial<AddressRecord>;
}

function pickPatch(options: Record<string, unknown>): Partial<AddressRecord> {
  return cleanPatch({
    ...readPatchFile(options.file),
    provinceName: stringOption(options.provinceName),
    cityName: stringOption(options.cityName),
    regionName: stringOption(options.regionName),
    conAddress: stringOption(options.conAddress),
    provinceCode: stringOption(options.provinceCode),
    cityCode: stringOption(options.cityCode),
    regionCode: stringOption(options.regionCode),
    consignee: stringOption(options.consignee),
    consiPhone: stringOption(options.consiPhone),
    isDefault: defaultOption(options.default),
  });
}

function pickRequiredAddress(options: Record<string, unknown>): Partial<AddressRecord> {
  return {
    ...readPatchFile(options.file),
    provinceName: requiredString(options.provinceName, "ADDRESS_REQUIRES_PROVINCE_NAME"),
    cityName: requiredString(options.cityName, "ADDRESS_REQUIRES_CITY_NAME"),
    regionName: requiredString(options.regionName, "ADDRESS_REQUIRES_REGION_NAME"),
    conAddress: requiredString(options.conAddress, "ADDRESS_REQUIRES_CON_ADDRESS"),
    consignee: requiredString(options.consignee, "ADDRESS_REQUIRES_CONSIGNEE"),
    consiPhone: requiredString(options.consiPhone, "ADDRESS_REQUIRES_CONSI_PHONE"),
    provinceCode: stringOption(options.provinceCode),
    cityCode: stringOption(options.cityCode),
    regionCode: stringOption(options.regionCode),
    isDefault: defaultOption(options.default) ?? 0,
  };
}

function stringOption(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value : undefined;
}

function requiredString(value: unknown, error: string): string {
  const text = stringOption(value);
  if (!text) throw new Error(error);
  return text;
}

function defaultOption(value: unknown): number | undefined {
  return value === true ? 1 : undefined;
}

function cleanPatch(patch: Partial<AddressRecord>): Partial<AddressRecord> {
  return Object.fromEntries(Object.entries(patch).filter(([, value]) => value !== undefined)) as Partial<AddressRecord>;
}

async function fetchAddressList(client: ApiClient | undefined, companyId: string) {
  if (!client) throw new Error("ADDRESS_COMMAND_REQUIRES_API_CLIENT");
  return normalizeAddressList(await client.request("GET", ADDRESS_LIST_ENDPOINT, { companyId }));
}

async function runAddressSave(
  command: string,
  access: "write" | "destructive",
  options: WriteGateOptions & Record<string, unknown>,
  payload: { companyId: string; addressListReqs: AddressSaveRecord[] },
  client: ApiClient | undefined,
  output: OutputFn | undefined,
  configHome: string | (() => string | undefined) | undefined,
  affected = 1,
) {
  if (options.dryRun) {
    const result = dryRunPlan(command, affected, [{ method: "POST", endpoint: ADDRESS_SAVE_ENDPOINT, body: payload }]);
    await auditOperation({ command, access, args: payload, configHome: typeof configHome === "function" ? configHome() : configHome }, "dry-run");
    return emit(output, result);
  }
  if (!client) throw new Error("ADDRESS_COMMAND_REQUIRES_API_CLIENT");
  const result = await client.request("POST", ADDRESS_SAVE_ENDPOINT, payload);
  await auditOperation({ command, access, args: payload, configHome: typeof configHome === "function" ? configHome() : configHome }, "ok");
  return emit(output, result);
}

export function registerOpsAddressCommands(program: CommandLike, client?: ApiClient, output?: OutputFn, configHome?: string | (() => string | undefined)) {
  const address = program.command("address").description("Store receiving address diagnosis and maintenance");

  address.command("list").requiredOption("--company-id <companyId>").option("--json").action(async (options) => {
    const addresses = await fetchAddressList(client, String(options.companyId));
    return emit(output, { companyId: options.companyId, count: addresses.length, addresses });
  });

  address.command("get").requiredOption("--address-id <addressId>").option("--json").action(async (options) => {
    if (!client) throw new Error("ADDRESS_COMMAND_REQUIRES_API_CLIENT");
    return emit(output, await client.request("GET", ADDRESS_GET_BY_ID_ENDPOINT, { id: options.addressId }));
  });

  address.command("check").requiredOption("--company-id <companyId>").option("--json").action(async (options) => {
    const addresses = await fetchAddressList(client, String(options.companyId));
    return emit(output, summarizeAddressCompleteness(String(options.companyId), addresses));
  });

  address
    .command("patch")
    .requiredOption("--company-id <companyId>")
    .requiredOption("--address-id <addressId>")
    .option("--province-name <provinceName>")
    .option("--city-name <cityName>")
    .option("--region-name <regionName>")
    .option("--con-address <conAddress>")
    .option("--province-code <provinceCode>")
    .option("--city-code <cityCode>")
    .option("--region-code <regionCode>")
    .option("--consignee <consignee>")
    .option("--consi-phone <consiPhone>")
    .option("--file <file>", "JSON patch fields")
    .option("--dry-run")
    .option("--confirm")
    .option("--reason <reason>")
    .option("--json")
    .action(async (options: WriteGateOptions & Record<string, unknown>) => {
      assertWriteGate(options, "write");
      const companyId = String(options.companyId);
      const addressId = String(options.addressId);
      const addresses = await fetchAddressList(client, companyId);
      const payload = buildAddressPatchPayload(addresses, { companyId, addressId, patch: pickPatch(options) });
      return runAddressSave("ops.address.patch", "write", options, payload, client, output, configHome);
    });

  address
    .command("create")
    .requiredOption("--company-id <companyId>")
    .requiredOption("--province-name <provinceName>")
    .requiredOption("--city-name <cityName>")
    .requiredOption("--region-name <regionName>")
    .requiredOption("--con-address <conAddress>")
    .requiredOption("--consignee <consignee>")
    .requiredOption("--consi-phone <consiPhone>")
    .option("--province-code <provinceCode>")
    .option("--city-code <cityCode>")
    .option("--region-code <regionCode>")
    .option("--default")
    .option("--file <file>", "JSON address fields")
    .option("--dry-run")
    .option("--confirm")
    .option("--reason <reason>")
    .option("--json")
    .action(async (options: WriteGateOptions & Record<string, unknown>) => {
      assertWriteGate(options, "write");
      const companyId = String(options.companyId);
      const addresses = await fetchAddressList(client, companyId);
      const payload = buildAddressCreatePayload(addresses, { companyId, address: pickRequiredAddress(options) });
      return runAddressSave("ops.address.create", "write", options, payload, client, output, configHome);
    });

  address
    .command("update")
    .requiredOption("--company-id <companyId>")
    .requiredOption("--address-id <addressId>")
    .option("--province-name <provinceName>")
    .option("--city-name <cityName>")
    .option("--region-name <regionName>")
    .option("--con-address <conAddress>")
    .option("--province-code <provinceCode>")
    .option("--city-code <cityCode>")
    .option("--region-code <regionCode>")
    .option("--consignee <consignee>")
    .option("--consi-phone <consiPhone>")
    .option("--default")
    .option("--file <file>", "JSON patch fields")
    .option("--dry-run")
    .option("--confirm")
    .option("--reason <reason>")
    .option("--json")
    .action(async (options: WriteGateOptions & Record<string, unknown>) => {
      assertWriteGate(options, "write");
      const companyId = String(options.companyId);
      const addressId = String(options.addressId);
      const addresses = await fetchAddressList(client, companyId);
      const payload = buildAddressPatchPayload(addresses, { companyId, addressId, patch: pickPatch(options) });
      return runAddressSave("ops.address.update", "write", options, payload, client, output, configHome);
    });

  address
    .command("set-default")
    .requiredOption("--company-id <companyId>")
    .requiredOption("--address-id <addressId>")
    .option("--dry-run")
    .option("--confirm")
    .option("--reason <reason>")
    .option("--json")
    .action(async (options: WriteGateOptions & Record<string, unknown>) => {
      assertWriteGate(options, "write");
      const companyId = String(options.companyId);
      const addressId = String(options.addressId);
      const addresses = await fetchAddressList(client, companyId);
      const payload = buildAddressSetDefaultPayload(addresses, { companyId, addressId });
      return runAddressSave("ops.address.set-default", "write", options, payload, client, output, configHome);
    });

  address
    .command("delete")
    .requiredOption("--company-id <companyId>")
    .requiredOption("--address-id <addressId>")
    .option("--dry-run")
    .option("--confirm")
    .option("--reason <reason>")
    .option("--json")
    .action(async (options: WriteGateOptions & Record<string, unknown>) => {
      assertWriteGate(options, "destructive");
      const companyId = String(options.companyId);
      const addressId = String(options.addressId);
      const addresses = await fetchAddressList(client, companyId);
      const payload = buildAddressDeletePayload(addresses, { companyId, addressId });
      return runAddressSave("ops.address.delete", "destructive", options, payload, client, output, configHome);
    });

  return address;
}
