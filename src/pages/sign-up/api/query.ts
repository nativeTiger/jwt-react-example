import { useMutation } from "@tanstack/react-query";
import { SignUpAPI } from "./query-slice";
import { z } from "zod";
import { SignUpAPIResponseSchema, SignUpFormType } from "../schema";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Routes } from "@/utils/routes-constants";

interface ErrorResponse {
  message: string;
}

export function useSignUp() {
  const navigate = useNavigate();
  return useMutation<
    z.infer<typeof SignUpAPIResponseSchema>,
    AxiosError<ErrorResponse>,
    Omit<SignUpFormType, "confirmPassword">
  >({
    mutationFn: (user) => SignUpAPI.signUp(user),
    onSuccess: (data) => {
      toast.success(data.message);

      navigate(Routes.SIGNIN);
    },
    onError: (error) => {
      const errorMessage = error.response?.data.message;

      toast.error(errorMessage);
    },
  });
}
