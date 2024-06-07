import { useQuery } from "@tanstack/react-query";
import { UserAPI } from "@/pages/customer/query-slice";

export function useGetUsers() {
  return useQuery({
    queryKey: ["customer"],
    queryFn: () => {
      return UserAPI.getAllUser();
    },
  });
}
