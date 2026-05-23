import { Command } from "commander";

type OutputFn = (payload: unknown) => void;

const ERROR_EXPLANATIONS: Record<string, Record<string, unknown>> = {
  "401700000": {
    code: "401700000",
    title: "收货地址不完整",
    rootCause: "订单审核/下单链路会校验收货地址省、市、区和详细地址。该错误通常表示 regionName 为空或仍是占位值“区”。",
    canCliFixDirectly: true,
    commands: [
      "bmall ops order diagnose-pending --order-id <PENDING_ORDER_ID> --json",
      "bmall ops address check --company-id <COMPANY_ID> --json",
      "bmall ops address patch --company-id <COMPANY_ID> --address-id <ADDRESS_ID> --region-name <区县> --region-code <区县编码> --dry-run --json",
      "bmall ops address patch --company-id <COMPANY_ID> --address-id <ADDRESS_ID> --region-name <区县> --region-code <区县编码> --confirm --reason \"补齐审核失败收货地址区县\" --json",
    ],
    notes: [
      "如果地址来源是 MDM，CLI 会阻止直接修改，请先修正主数据并同步。",
      "这类失败和客户账户余额不是同一条规则链路。",
    ],
  },
};

export function explainError(code: string, message?: string) {
  const normalizedCode = code.trim();
  if (ERROR_EXPLANATIONS[normalizedCode]) return ERROR_EXPLANATIONS[normalizedCode];
  const text = String(message ?? "");
  if (text.includes("收货地址不完整") || text.includes("维护区")) return ERROR_EXPLANATIONS["401700000"];
  return {
    code: normalizedCode || null,
    title: "未收录的错误",
    rootCause: "CLI 没有本地规则解释。请使用 ops 诊断命令读取订单详情，或补充后端错误码映射。",
    canCliFixDirectly: false,
    commands: ["bmall ops order diagnose --order-no <ORDER_NO> --json"],
  };
}

export function registerAgentCommands(program: Command, output: OutputFn): void {
  const agent = program.command("agent").description("Deterministic helper commands for external AI agents");
  agent
    .command("explain-error")
    .description("Explain known Bmall error codes and map them to CLI remediation commands")
    .option("--error-code <errorCode>")
    .option("--message <message>")
    .option("--json")
    .action((options) => {
      output(explainError(String(options.errorCode ?? ""), typeof options.message === "string" ? options.message : undefined));
    });
}

export const agentErrorExplanations = ERROR_EXPLANATIONS;
