import { FC } from "react";
import { useGetUsers } from "./api";
import { toast } from "sonner";

export const CustomerPage: FC = () => {
  const { data, refetch, isError, isLoading, error } = useGetUsers();
  const handleClick =   async () => {
    toast.info("kiran palpali");
    refetch();
  };
  console.log(isLoading ? "loading" : isError ? error : data);
  return (
    <button type="button" onClick={handleClick}>
      click me
    </button>
  );
};
