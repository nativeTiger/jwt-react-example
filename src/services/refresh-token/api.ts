import { z } from "zod";
import { api } from "@/utils/api";
import { API_ENDPOINT } from "@/utils/endpoints-constant";
import {
  RefreshTokenAPIRequestSchema,
  RefreshTokenAPIResponseSchema,
} from "@/services/refresh-token/schema";

const RefreshTokenRequest = RefreshTokenAPIRequestSchema;

const RefreshTokenResponse = RefreshTokenAPIResponseSchema;

export const getRefreshToken = api<
  z.infer<typeof RefreshTokenRequest>,
  z.infer<typeof RefreshTokenResponse>
>({
  method: "GET",
  path: API_ENDPOINT.REFRESH_TOKEN,
  requestSchema: RefreshTokenRequest,
  responseSchema: RefreshTokenResponse,
  type: "public",
});
