export type EvidenceLevel = "source-reviewed" | "api-observed" | "heuristic";

export interface DiagnosticKnowledgePack {
  id: string;
  schemaVersion: number;
  version: string;
  lastReviewed: string;
  distribution: "bundled";
  sourceReposRequired: boolean;
  sourceSummary: string;
}

export interface DiagnosticPlaybook {
  id: string;
  title: string;
  summary: string;
  steps: string[];
  commands: string[];
}

export interface DiagnosticEntry {
  code: string;
  aliases?: string[];
  messageIncludes: string[];
  title: string;
  rootCause: string;
  canCliFixDirectly: boolean;
  evidence: {
    level: EvidenceLevel;
    reviewedAt: string;
    summary: string;
  };
  playbook: DiagnosticPlaybook;
  notes: string[];
  supportBundleHints: string[];
}

export interface DiagnosticExplanation extends DiagnosticEntry {
  knowledgePack: DiagnosticKnowledgePack;
  commands: string[];
}

export interface UnknownDiagnosticExplanation {
  code: string | null;
  title: string;
  rootCause: string;
  canCliFixDirectly: false;
  knowledgePack: DiagnosticKnowledgePack;
  evidence: {
    level: "heuristic";
    reviewedAt: string;
    summary: string;
  };
  playbook: DiagnosticPlaybook;
  commands: string[];
  supportBundleHints: string[];
  commands: string[];
}

export const diagnosticKnowledgePack: DiagnosticKnowledgePack = {
  id: "bmall-cli-diagnostics",
  schemaVersion: 1,
  version: "2026.05.24",
  lastReviewed: "2026-05-24",
  distribution: "bundled",
  sourceReposRequired: false,
  sourceSummary:
    "Bundled rules are distilled from internal Bmall CLI/API review and source-code investigation, then shipped with the CLI for external users.",
};

export const diagnosticEntries: DiagnosticEntry[] = [
  {
    code: "401700000",
    messageIncludes: ["收货地址不完整", "维护区"],
    title: "收货地址不完整",
    rootCause:
      "订单审核/下单链路会校验收货地址省、市、区和详细地址。该错误通常表示 regionName 为空、缺失，或仍是占位值“区”。",
    canCliFixDirectly: true,
    evidence: {
      level: "source-reviewed",
      reviewedAt: "2026-05-24",
      summary:
        "Internal review tied this error to pending-order approval address completeness checks, not to customer account balance.",
    },
    playbook: {
      id: "pending-review-address-region-missing",
      title: "待审核订单地址区县缺失",
      summary: "先确认品牌/门店上下文，再检查待审核单和门店收货地址的 regionName/regionCode。",
      steps: [
        "确认当前 token 所在品牌和门店是否是出错订单所属上下文。",
        "读取待审核单诊断，确认 blockingIssues 或原始错误是否指向地址完整性。",
        "读取门店收货地址列表，检查 provinceName、cityName、regionName 和详细地址。",
        "手工地址可先 dry-run patch，再带 confirm/reason 修复；MDM 来源地址回主数据修复并同步。",
      ],
      commands: [
        "bmall company groups --json",
        "bmall company switch-group --group-id <PUMA_GROUP_ID> --json",
        "bmall company list --sword <门店关键字> --json",
        "bmall company switch --company-id <COMPANY_ID> --json",
        "bmall ops order diagnose-pending --order-id <PENDING_ORDER_ID> --json",
        "bmall ops address check --company-id <COMPANY_ID> --json",
        "bmall ops address patch --company-id <COMPANY_ID> --address-id <ADDRESS_ID> --region-name <区县> --region-code <区县编码> --dry-run --json",
        'bmall ops address patch --company-id <COMPANY_ID> --address-id <ADDRESS_ID> --region-name <区县> --region-code <区县编码> --confirm --reason "补齐审核失败收货地址区县" --json',
      ],
    },
    notes: [
      "如果地址来源是 MDM，CLI 会阻止直接修改，请先修正主数据并同步。",
      "这类失败和客户账户余额不是同一条规则链路；账户有钱不能排除地址校验失败。",
    ],
    supportBundleHints: ["knowledgePack", "requestId", "profile", "groupId", "companyId", "pendingOrderId"],
  },
];

export function explainKnownDiagnostic(code: string, message?: string): DiagnosticExplanation | undefined {
  const normalizedCode = code.trim();
  const normalizedMessage = String(message ?? "");
  const entry = diagnosticEntries.find((item) => {
    if (normalizedCode && (item.code === normalizedCode || item.aliases?.includes(normalizedCode))) return true;
    return item.messageIncludes.some((needle) => normalizedMessage.includes(needle));
  });
  return entry ? { ...entry, knowledgePack: diagnosticKnowledgePack, commands: entry.playbook.commands } : undefined;
}

export function explainUnknownDiagnostic(code: string): UnknownDiagnosticExplanation {
  return {
    code: code.trim() || null,
    title: "未收录的错误",
    rootCause: "CLI 随包诊断知识暂未收录该错误。请先使用 ops 诊断命令读取订单详情，再把脱敏上下文发给内部支持补充知识包。",
    canCliFixDirectly: false,
    knowledgePack: diagnosticKnowledgePack,
    evidence: {
      level: "heuristic",
      reviewedAt: diagnosticKnowledgePack.lastReviewed,
      summary: "Fallback guidance only; no source-reviewed playbook is bundled for this error.",
    },
    playbook: {
      id: "unknown-order-error",
      title: "未收录订单错误排查",
      summary: "先收集只读诊断事实和 request id，再升级给内部支持。",
      steps: [
        "确认当前 profile/env、品牌、门店和订单标识。",
        "运行对应 ops 只读诊断命令，保留 requestId 和错误原文。",
        "导出脱敏上下文给内部支持，不要发送 token、cookie、手机号或身份证号。",
      ],
      commands: ["bmall ops order diagnose --order-no <ORDER_NO> --json"],
    },
    commands: ["bmall ops order diagnose --order-no <ORDER_NO> --json"],
    supportBundleHints: ["knowledgePack", "requestId", "profile", "env", "orderNo", "errorCode", "message"],
  };
}

export function getDiagnosticKnowledgeSummary() {
  return {
    ...diagnosticKnowledgePack,
    entries: diagnosticEntries.map((entry) => ({
      code: entry.code,
      title: entry.title,
      playbookId: entry.playbook.id,
      evidenceLevel: entry.evidence.level,
      canCliFixDirectly: entry.canCliFixDirectly,
      messageIncludes: entry.messageIncludes,
    })),
  };
}
