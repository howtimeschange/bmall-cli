export type BmallErrorCode =
  | 'AUTH_EXPIRED'
  | 'AUTH_REQUIRED'
  | 'CONFIG_ERROR'
  | 'HTTP_ERROR'
  | 'INPUT_ERROR'
  | 'PROFILE_NOT_FOUND'
  | 'SERVER_ERROR'
  | 'STORAGE_ERROR';

export class BmallCliError extends Error {
  readonly code: BmallErrorCode;
  readonly recover?: string;
  readonly status?: number;
  readonly details?: unknown;

  constructor(code: BmallErrorCode, message: string, opts: { recover?: string; status?: number; details?: unknown } = {}) {
    super(message);
    this.name = 'BmallCliError';
    this.code = code;
    this.recover = opts.recover;
    this.status = opts.status;
    this.details = opts.details;
  }
}

export function toBmallError(error: unknown): BmallCliError {
  if (error instanceof BmallCliError) return error;
  if (error instanceof Error) return new BmallCliError('SERVER_ERROR', error.message);
  return new BmallCliError('SERVER_ERROR', String(error));
}
