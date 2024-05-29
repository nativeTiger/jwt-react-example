import { z } from "zod";

export const RefreshTokenAPIRequestSchema = z.void()

export const RefreshTokenAPIResponseSchema = z.object({
  status: z.boolean(),
  message: z.string(),
  payload: z.object({
    accessToken: z.string(),
  }),
});
