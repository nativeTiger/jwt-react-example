import { z } from "zod";

export const SignInFormSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .trim()
    .email({ message: "Invalid Email" })
    .toLowerCase(),
  password: z
    .string()
    .trim()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export type SignInFormType = z.infer<typeof SignInFormSchema>;

export type SignInFieldName = keyof SignInFormType;

export const SignInAPIResponseSchema = z.object({
  status: z.boolean(),
  message: z.string(),
  payload: z.object({
    accessToken: z.string(),
  }),
});
