import type { ErrorCode } from "~~/server/utils/errors";

export {};

declare global {
  interface Toast {
    message: string;
    success: boolean;
    id?: number;
  }
  type ErrorCode = typeof ErrorCode;
}
