import { describe, expect, it } from "vitest";
import { listJobs, selectRunnableJob, type JobAllowlistEntry } from "../../src/domains/job/commands.js";

const jobs: JobAllowlistEntry[] = [
  {
    jobId: "orderDailyStatJob",
    module: "order",
    description: "pending candidate",
    enabled: false,
    status: "pendingApproval",
    requiresApproval: true,
  },
  {
    jobId: "safeEnabledJob",
    module: "product",
    description: "safe enabled job",
    enabled: true,
    status: "enabled",
    requiresApproval: false,
    targetObject: "safeEnabledJob",
    targetMethod: "execute",
    fixedParams: { scope: "fixed" },
  },
];

describe("job allowlist", () => {
  it("lists only allowlist entries and filters by module", () => {
    expect(listJobs(jobs)).toHaveLength(2);
    expect(listJobs(jobs, "order").map((job) => job.jobId)).toEqual(["orderDailyStatJob"]);
  });

  it("forbids generic schedule/dowork", () => {
    expect(() => selectRunnableJob(jobs, "schedule/dowork")).toThrow("GENERIC_SCHEDULE_DOWORK_IS_FORBIDDEN");
    expect(() => selectRunnableJob(jobs, "custom/schedule/dowork")).toThrow("GENERIC_SCHEDULE_DOWORK_IS_FORBIDDEN");
  });

  it("does not run disabled or pending approval jobs", () => {
    expect(() => selectRunnableJob(jobs, "orderDailyStatJob")).toThrow("JOB_NOT_ENABLED");
  });

  it("selects enabled allowlisted jobs", () => {
    expect(selectRunnableJob(jobs, "safeEnabledJob").fixedParams).toEqual({ scope: "fixed" });
  });
});
