import { z } from "zod";

export const LogoutAPIRequestSchema = z.void();

export const LogoutAPIResponseSchema = z.object({
  status: z.boolean(),
  message: z.string(),
  payload: z.object({}),
});
