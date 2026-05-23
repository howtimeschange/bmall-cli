export interface DryRunResult<T = unknown> {
  dryRun: true;
  wouldCall: string;
  payload?: T;
}

export function dryRun<T>(wouldCall: string, payload?: T): DryRunResult<T> {
  return { dryRun: true, wouldCall, payload };
}
