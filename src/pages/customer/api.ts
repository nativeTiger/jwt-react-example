import { useQuery } from "@tanstack/react-query";
import { UserAPI } from "./api-slice";

export function useGetUsers() {
  return useQuery({
    queryKey: ["customer"],
    queryFn: () => {
      return UserAPI.getAllUser();
    },
    enabled: false,
  });
}
