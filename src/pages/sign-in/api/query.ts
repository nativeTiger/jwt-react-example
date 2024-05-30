import { z } from "zod";
import { AxiosError } from "axios";
import { useUserStore } from "@/store/user-store";
import { useMutation } from "@tanstack/react-query";
import { SignInAPI } from "@/pages/sign-in/api/query-slice";
import {
  SignInAPIResponseSchema,
  SignInFormType,
} from "@/pages/sign-in/schema";
import { toast } from "sonner";

interface ErrorResponse {
  message: string;
}

export function useSignIn() {
  const { setCredentials } = useUserStore();
  return useMutation<
    z.infer<typeof SignInAPIResponseSchema>,
    AxiosError<ErrorResponse>,
    SignInFormType
  >({
    mutationFn: (user) => SignInAPI.signIn(user),
    onSuccess: (data) => {
      const { payload, message } = data;

      setCredentials({
        accessToken: payload.accessToken,
      });

      toast.success(message);
    },
    onError: (error) => {
      const errorMessage = error.response?.data.message;

      toast.error(errorMessage);
    },
  });
}
