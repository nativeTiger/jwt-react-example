import { FC } from "react";
import { Link } from "react-router-dom";
import { SignInForm } from "@/pages/sign-in/form";
import { Routes } from "@/utils/routes-constants";

export const SignInPage: FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="shadow-base rounded-md flex flex-col p-4 bg-white">
        <h2 className="form__title">Sign In</h2>
        <SignInForm />
        <hr />
        <p className="text-sm mt-4 text-center text-gray-500">
          Don't you have an account?{" "}
          <Link
            to={Routes.SIGNUP}
            className="ml-1 font-medium text-blue-500 hover:text-blue-600 duration-300"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};
