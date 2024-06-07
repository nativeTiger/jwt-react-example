import { z } from "zod";
import { api } from "@/utils/api";
import { API_ENDPOINT } from "@/utils/endpoints-constant";

enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}

const SingleUserAPISchema = z.object({
  id: z.string(),
  name: z.string(),
  imageUrl: z.string(),
  phoneNumber: z.union([z.string(), z.null()]),
  email: z.string().email(),
  role: z.nativeEnum(Role),
});

const UserAPISchema = z.object({
  status: z.boolean(),
  message: z.string(),
  payload: z.object({
    users: z.array(SingleUserAPISchema),
  }),
});

const GetAllUserRequest = z.void();

const GetAllUserResponse = UserAPISchema;

const getAllUser = api<
  z.infer<typeof GetAllUserRequest>,
  z.infer<typeof GetAllUserResponse>
>({
  path: API_ENDPOINT.USERS,
  method: "GET",
  requestSchema: GetAllUserRequest,
  responseSchema: GetAllUserResponse,
});

export const UserAPI = {
  getAllUser,
};
