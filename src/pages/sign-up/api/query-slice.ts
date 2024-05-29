import { z } from "zod";
import { api } from "@/utils/api";
import { BaseSignUpFormSchema, SignUpAPIResponseSchema } from "../schema";
import { API_ENDPOINT } from "@/utils/endpoints-constant";

const SignUpRequest = BaseSignUpFormSchema;

const SignUpResponse = SignUpAPIResponseSchema;

const signUp = api<
  z.infer<typeof SignUpRequest>,
  z.infer<typeof SignUpResponse>
>({
  method: "POST",
  path: API_ENDPOINT.SIGN_UP,
  requestSchema: SignUpRequest,
  responseSchema: SignUpResponse,
  type:"public"
});

export const SignUpAPI = {
  signUp,
};
