import { describe, expect, it } from "vitest";
import { Command } from "commander";
import {
  addressCompleteness,
  buildAddressCreatePayload,
  buildAddressDeletePayload,
  buildAddressPatchPayload,
  buildAddressSetDefaultPayload,
  normalizeAddressList,
  registerOpsAddressCommands,
} from "../../src/domains/ops/address.js";

describe("ops address commands", () => {
  it("detects incomplete region fields that block order approval", () => {
    const result = addressCompleteness({
      fid: "A1",
      provinceName: "湖南省",
      cityName: "怀化市",
      regionName: "区",
      conAddress: "安江镇新德利超市四楼森马店",
      consignee: "丁张梅",
      consiPhone: "15115220772",
      sourceType: 1,
    });

    expect(result.complete).toBe(false);
    expect(result.blockingIssues).toContainEqual({
      field: "regionName",
      code: "ADDRESS_REGION_INCOMPLETE",
      message: "收货地址不完整，请先维护区",
    });
    expect(result.canPatchDirectly).toBe(true);
  });

  it("blocks direct patching for MDM source addresses", () => {
    const result = addressCompleteness({
      fid: "A1",
      provinceName: "湖南省",
      cityName: "怀化市",
      regionName: "",
      conAddress: "安江镇新德利超市四楼森马店",
      consignee: "丁张梅",
      consiPhone: "15115220772",
      sourceType: 2,
    });

    expect(result.complete).toBe(false);
    expect(result.canPatchDirectly).toBe(false);
    expect(result.nextActions[0]).toContain("MDM");
  });

  it("builds saveOrUpdate payload by preserving the whole address list", () => {
    const addresses = normalizeAddressList({
      data: [
        { fid: "A1", provinceName: "湖南省", cityName: "怀化市", regionName: "区", conAddress: "旧地址", consignee: "张三", consiPhone: "13800000000", isDefault: 1, sourceType: 1 },
        { fid: "A2", provinceName: "浙江省", cityName: "杭州市", regionName: "西湖区", conAddress: "文三路", consignee: "李四", consiPhone: "13900000000", isDefault: 0, sourceType: 1 },
      ],
    });

    const payload = buildAddressPatchPayload(addresses, {
      companyId: "C001",
      addressId: "A1",
      patch: { regionName: "洪江市", regionCode: "431281", conAddress: "安江镇新德利超市四楼森马店" },
    });
    const defaultPayload = buildAddressPatchPayload(addresses, {
      companyId: "C001",
      addressId: "A2",
      patch: { conAddress: "文四路", isDefault: 1 },
    });

    expect(payload.addressListReqs).toHaveLength(2);
    expect(payload.addressListReqs[0]).toMatchObject({ fid: "A1", regionName: "洪江市", regionCode: "431281" });
    expect(payload.addressListReqs[1]).toMatchObject({ fid: "A2", regionName: "西湖区" });
    expect(defaultPayload.addressListReqs).toEqual([
      expect.objectContaining({ fid: "A1", isDefault: 0 }),
      expect.objectContaining({ fid: "A2", conAddress: "文四路", isDefault: 1 }),
    ]);
  });

  it("builds create, update, default, and delete payloads without mutating MDM fields", () => {
    const addresses = normalizeAddressList({
      data: [
        { fid: "A1", provinceName: "湖南省", cityName: "怀化市", regionName: "洪江市", conAddress: "旧地址", consignee: "张三", consiPhone: "13800000000", isDefault: 1, sourceType: 1 },
        { fid: "A2", provinceName: "浙江省", cityName: "杭州市", regionName: "西湖区", conAddress: "文三路", consignee: "李四", consiPhone: "13900000000", isDefault: 0, sourceType: 2 },
      ],
    });

    const createPayload = buildAddressCreatePayload(addresses, {
      companyId: "C001",
      address: { provinceName: "江苏省", cityName: "南京市", regionName: "玄武区", conAddress: "中山东路", consignee: "王五", consiPhone: "13700000000", isDefault: 1 },
    });
    expect(createPayload.addressListReqs).toHaveLength(3);
    expect(createPayload.addressListReqs.map((item) => item.isDefault)).toEqual([0, 0, 1]);
    expect(createPayload.addressListReqs[2]).toMatchObject({ provinceName: "江苏省", sourceType: 1 });

    const defaultPayload = buildAddressSetDefaultPayload(addresses, { companyId: "C001", addressId: "A2" });
    expect(defaultPayload.addressListReqs).toEqual([
      expect.objectContaining({ fid: "A1", isDefault: 0 }),
      expect.objectContaining({ fid: "A2", isDefault: 1, sourceType: 2 }),
    ]);

    const deletePayload = buildAddressDeletePayload(addresses, { companyId: "C001", addressId: "A1" });
    expect(deletePayload.addressListReqs).toEqual([expect.objectContaining({ fid: "A2", sourceType: 2 })]);
    expect(() => buildAddressDeletePayload(addresses, { companyId: "C001", addressId: "A2" })).toThrow("ADDRESS_SOURCE_REQUIRES_MDM_SYNC");
  });

  it("wires check and patch commands to real mb2bcrd3 endpoints", async () => {
    const calls: Array<{ method: string; path: string; body?: unknown }> = [];
    const outputs: unknown[] = [];
    const client = {
      request: async (method: string, path: string, body?: unknown) => {
        calls.push({ method, path, body });
        return {
          data: [
            { fid: "A1", provinceName: "湖南省", cityName: "怀化市", regionName: "区", conAddress: "旧地址", consignee: "张三", consiPhone: "13800000000", isDefault: 1, sourceType: 1 },
          ],
        };
      },
    };
    const program = new Command().exitOverride();
    const ops = program.command("ops");
    registerOpsAddressCommands(ops, client, (payload) => outputs.push(payload));

    await program.parseAsync(["node", "bmall", "ops", "address", "check", "--company-id", "C001", "--json"]);
    await program.parseAsync([
      "node",
      "bmall",
      "ops",
      "address",
      "patch",
      "--company-id",
      "C001",
      "--address-id",
      "A1",
      "--region-name",
      "洪江市",
      "--dry-run",
      "--json",
    ]);

    expect(calls[0]).toMatchObject({ method: "GET", path: "hr/mb2bcrd3/list", body: { companyId: "C001" } });
    expect(outputs[0]).toMatchObject({ companyId: "C001", complete: false });
    expect(outputs[1]).toMatchObject({
      ok: true,
      mode: "dry-run",
      command: "ops.address.patch",
      apiCalls: [{ method: "POST", endpoint: "hr/mb2bcrd3/saveOrUpdate" }],
    });
  });

  it("wires address create, update, set-default, and delete through saveOrUpdate with gates", async () => {
    const calls: Array<{ method: string; path: string; body?: unknown }> = [];
    const outputs: unknown[] = [];
    const client = {
      request: async (method: string, path: string, body?: unknown) => {
        calls.push({ method, path, body });
        if (path === "hr/mb2bcrd3/list") {
          return {
            data: [
              { fid: "A1", provinceName: "湖南省", cityName: "怀化市", regionName: "洪江市", conAddress: "旧地址", consignee: "张三", consiPhone: "13800000000", isDefault: 1, sourceType: 1 },
              { fid: "A2", provinceName: "浙江省", cityName: "杭州市", regionName: "西湖区", conAddress: "文三路", consignee: "李四", consiPhone: "13900000000", isDefault: 0, sourceType: 2 },
            ],
          };
        }
        return { ok: true };
      },
    };
    const program = new Command().exitOverride();
    const ops = program.command("ops");
    registerOpsAddressCommands(ops, client, (payload) => outputs.push(payload));

    await program.parseAsync([
      "node", "bmall", "ops", "address", "create",
      "--company-id", "C001",
      "--province-name", "江苏省",
      "--city-name", "南京市",
      "--region-name", "玄武区",
      "--con-address", "中山东路",
      "--consignee", "王五",
      "--consi-phone", "13700000000",
      "--default",
      "--dry-run",
      "--json",
    ]);
    await program.parseAsync(["node", "bmall", "ops", "address", "set-default", "--company-id", "C001", "--address-id", "A2", "--dry-run", "--json"]);
    await expect(program.parseAsync(["node", "bmall", "ops", "address", "delete", "--company-id", "C001", "--address-id", "A1", "--confirm"])).rejects.toThrow("WRITE_REQUIRES_REASON");
    await program.parseAsync(["node", "bmall", "ops", "address", "delete", "--company-id", "C001", "--address-id", "A1", "--dry-run", "--json"]);
    await program.parseAsync([
      "node", "bmall", "ops", "address", "update",
      "--company-id", "C001",
      "--address-id", "A1",
      "--con-address", "新地址",
      "--confirm",
      "--reason", "门店档案地址维护",
      "--json",
    ]);

    expect(outputs[0]).toMatchObject({ mode: "dry-run", command: "ops.address.create" });
    expect(outputs[1]).toMatchObject({ mode: "dry-run", command: "ops.address.set-default" });
    expect(outputs[2]).toMatchObject({ mode: "dry-run", command: "ops.address.delete", affected: 1 });
    expect(calls.at(-1)).toMatchObject({ method: "POST", path: "hr/mb2bcrd3/saveOrUpdate" });
    expect(calls.at(-1)?.body).toMatchObject({
      companyId: "C001",
    });
    expect((calls.at(-1)?.body as { addressListReqs: unknown[] }).addressListReqs).toEqual(
      expect.arrayContaining([expect.objectContaining({ fid: "A1", conAddress: "新地址" })]),
    );
  });
});
