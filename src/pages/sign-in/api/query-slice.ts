import { z } from "zod";
import { api } from "@/utils/api";
import { API_ENDPOINT } from "@/utils/endpoints-constant";
import {
  SignInAPIResponseSchema,
  SignInFormSchema,
} from "@/pages/sign-in/schema";

const SignInRequest = SignInFormSchema;

const SignInResponse = SignInAPIResponseSchema;

const signIn = api<
  z.infer<typeof SignInRequest>,
  z.infer<typeof SignInResponse>
>({
  method: "POST",
  path: API_ENDPOINT.SIGN_IN,
  requestSchema: SignInRequest,
  responseSchema: SignInResponse,
  type: "public"
});

export const SignInAPI = {
  signIn,
};
