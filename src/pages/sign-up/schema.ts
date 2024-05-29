import { z } from "zod";
import { Role } from "@/utils/role-enum";

export const BaseSignUpFormSchema = z.object({
  name: z.string().trim().min(1, { message: "Full Name is required" }),
  email: z
    .string()
    .min(1, "Email is required")
    .trim()
    .email({ message: "Invalid Email" })
    .toLowerCase(),
  password: z.string().trim().min(1, { message: "Password is required" }),
});

export const SignUpFormSchema = BaseSignUpFormSchema.extend({
  confirmPassword: z
    .string()
    .trim()
    .min(1, { message: "Confirm password is required" }),
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
  path: ["confirmPassword"],
  message: "Password don't match",
});

export type SignUpFormType = z.infer<typeof SignUpFormSchema>;

export type SignUpFieldName = keyof SignUpFormType;

export const SignUpAPIResponseSchema = z.object({
  status: z.boolean(),
  message: z.string(),
  payload: z.object({
    user: z.object({
      id: z.string(),
      name: z.string(),
      email: z.string().email(),
      phoneNumber: z.union([z.string(), z.null()]),
      imageUrl: z.string(),
      role: z.nativeEnum(Role),
    }),
  }),
});
