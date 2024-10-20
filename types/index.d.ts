import type { ErrorCode } from "~~/server/utils/errors";

export {};

declare global {
  type ErrorCode = typeof ErrorCode;
}
