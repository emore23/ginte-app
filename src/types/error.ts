export interface AppError extends Error {
  code: string;
  status?: number;
  details?: Record<string, unknown>;
}

export function isAppError(error: unknown): error is AppError {
  return error instanceof Error && 'code' in error;
}
