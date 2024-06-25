import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useUserStore } from "@/store/user-store";
import { LocalStorage } from "@/utils/localstorage";
import { Storage } from "@/utils/storage-constants";

type RouteProps = {
  children: React.ReactNode;
};

export const PrivateRoute: FC<RouteProps> = ({ children }) => {
  // const { user } = useUserStore();
  const accessToken = LocalStorage.get(Storage.ACCESS_TOKEN);
  return accessToken ? children : <Navigate to="/sign-in" replace />;
};

export const PublicRoute: FC<RouteProps> = ({ children }) => {
  // const { user } = useUserStore();
  const accessToken = LocalStorage.get(Storage.ACCESS_TOKEN);
  return accessToken ? <Navigate to="/" /> : children;
};
