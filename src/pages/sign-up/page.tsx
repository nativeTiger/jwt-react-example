import { FC } from "react";
import { Link } from "react-router-dom";
import { SignUpForm } from "@/pages/sign-up/form";
import { Routes } from "@/utils/routes-constants";

export const SignUpPage: FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="shadow-base rounded-md flex flex-col p-4">
        <h2 className="form__title">Sign Up</h2>
        <SignUpForm />
        <hr />
        <p className="text-sm mt-4 text-center text-gray-500">
          Already have an account?{" "}
          <Link
            to={Routes.SIGNIN}
            className="ml-1 font-medium text-blue-500 hover:text-blue-600 duration-300"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};
