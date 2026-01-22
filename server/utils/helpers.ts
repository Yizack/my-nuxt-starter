import { subtle } from "node:crypto";
import { digest } from "ohash";
import type { H3Event } from "h3";

export { z } from "zod";

export const hash = (message: string, salt: string) => {
  return digest(message + salt);
};

const HMAC_SHA256 = { name: "HMAC", hash: "SHA-256" };
const encoder = new TextEncoder();

export const toBase64URL = (data: string | ArrayBuffer) => {
  return Buffer.from(data as string | Uint8Array).toString("base64url");
};

export const generateToken = async (event: H3Event, fields: (unknown)[]) => {
  const config = useRuntimeConfig(event);
  const signature = await subtle.importKey("raw", encoder.encode(config.secure.secret), HMAC_SHA256, false, ["sign"]);
  const hmac = await subtle.sign(HMAC_SHA256.name, signature, encoder.encode(fields.join()));
  return toBase64URL(hmac);
};
