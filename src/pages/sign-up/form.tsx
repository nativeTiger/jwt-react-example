import { FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { SignUpFormSchema, SignUpFormType } from "./schema";
import { Input } from "@/components/input/input";
import { Button } from "@/components/button/button";
import { useSignUp } from "./api/query";

export const SignUpForm: FC = () => {
  const methods = useForm<SignUpFormType>({
    resolver: zodResolver(SignUpFormSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const signUp = useSignUp();

  const onSubmit: SubmitHandler<SignUpFormType> = ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    confirmPassword,
    ...rest
  }) => {
    signUp.mutate(rest);
  };

  return (
    <FormProvider {...methods}>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          label="Full Name"
          placeholder="Full Name"
          name="name"
          errors={errors}
        />
        <Input
          type="email"
          label="Email"
          name="email"
          placeholder="Email"
          errors={errors}
        />
        <Input
          type="password"
          label="Password"
          name="password"
          placeholder="Password"
          errors={errors}
        />
        <Input
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          placeholder="Confirm Password"
          errors={errors}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </FormProvider>
  );
};
