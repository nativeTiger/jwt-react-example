import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useUserStore } from "@/store/user-store";

type RouteProps = {
  children: React.ReactNode;
};

export const PrivateRoute: FC<RouteProps> = ({ children }) => {
  const { user } = useUserStore();
  return user ? children : <Navigate to="/sign-in" replace />;
};

export const PublicRoute: FC<RouteProps> = ({ children }) => {
  const { user } = useUserStore();
  return user ? <Navigate to="/" /> : children;
};
