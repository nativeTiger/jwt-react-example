import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import ErrorPage from "@/routes/error-page";
import { Routes } from "@/utils/routes-constants";
import { SignUpPage } from "@/pages/sign-up/page";
import { SignInPage } from "@/pages/sign-in/page";
import { CustomerPage } from "@/pages/customer/page";
import { PrivateRoute, PublicRoute } from "@/routes/route-guard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <h1>Home Page</h1>,
      },
      {
        path: "customers",
        element: <CustomerPage />,
      },
    ],
  },
  {
    path: Routes.SIGNUP,
    element: (
      <PublicRoute>
        <SignUpPage />
      </PublicRoute>
    ),
  },
  {
    path: Routes.SIGNIN,

    element: (
      <PublicRoute>
        <SignInPage />
      </PublicRoute>
    ),
  },
]);
