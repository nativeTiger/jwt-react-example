import { FC } from "react";
import { useGetUsers } from "@/pages/customer/query";
import { Card, LoadingCardGrid } from "@/components/card/card";

export const CustomerPage: FC = () => {
  const { data, isError, isLoading } = useGetUsers();

  if (isLoading) {
    return <LoadingCardGrid />;
  }

  if (isError) {
    return <h1>Error Occured</h1>;
  }

  const users = data?.payload.users;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6">
      {users?.map((user) => <Card {...user} key={user.id} />)}
    </div>
  );
};
