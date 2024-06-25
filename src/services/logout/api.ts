import { z } from "zod";
import { api } from "@/utils/api";
import {
  LogoutAPIRequestSchema,
  LogoutAPIResponseSchema,
} from "@/services/logout/schema";
import { API_ENDPOINT } from "@/utils/endpoints-constant";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useUserStore } from "@/store/user-store";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Routes } from "@/utils/routes-constants";
import { LocalStorage } from "@/utils/localstorage";
import { Storage } from "@/utils/storage-constants";

const LogoutRequest = LogoutAPIRequestSchema;

const LogoutResponse = LogoutAPIResponseSchema;

interface ErrorResponse {
  message: string;
}

const logout = api<
  z.infer<typeof LogoutRequest>,
  z.infer<typeof LogoutResponse>
>({
  method: "POST",
  path: API_ENDPOINT.SIGN_OUT,
  requestSchema: LogoutRequest,
  responseSchema: LogoutResponse,
});

export function useLogOut() {
  const navigate = useNavigate();

  // const { removeCredentials } = useUserStore();
  return useMutation<
    z.infer<typeof LogoutAPIResponseSchema>,
    AxiosError<ErrorResponse>
  >({
    mutationFn: logout,
    onSuccess: (data) => {
      const { message } = data;
      // removeCredentials();
      LocalStorage.remove(Storage.ACCESS_TOKEN);
      toast.success(message);
      navigate(Routes.SIGNIN);
    },
    onError: (error) => {
      const errorMessage = error.response?.data.message;
      toast.error(errorMessage);
    },
  });
}
