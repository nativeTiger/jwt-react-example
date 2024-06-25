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
import { LocalStorage } from "@/utils/localstorage";
import { Storage } from "@/utils/storage-constants";

interface ErrorResponse {
  message: string;
}

export function useSignIn() {
  // const { setCredentials } = useUserStore();
  return useMutation<
    z.infer<typeof SignInAPIResponseSchema>,
    AxiosError<ErrorResponse>,
    SignInFormType
  >({
    mutationFn: (user) => SignInAPI.signIn(user),
    onSuccess: (data) => {
      const { payload, message } = data;
      LocalStorage.set(Storage.ACCESS_TOKEN, payload.accessToken);
      // setCredentials({
      //   accessToken: payload.accessToken,
      // });

      toast.success(message);
    },
    onError: (error) => {
      const errorMessage = error.response?.data.message;

      toast.error(errorMessage);
    },
  });
}
