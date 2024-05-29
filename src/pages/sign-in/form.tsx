import { FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/input/input";
import { Button } from "@/components/button/button";
import { useSignIn } from "@/pages/sign-in/api/query";
import { SignInFormSchema, SignInFormType } from "@/pages/sign-in/schema";

export const SignInForm: FC = () => {
  const methods = useForm<SignInFormType>({
    resolver: zodResolver(SignInFormSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const signIn = useSignIn();

  const onSubmit: SubmitHandler<SignInFormType> = (data) => {
    signIn.mutate(data);
  };

  return (
    <FormProvider {...methods}>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
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

        <Button type="submit">Sign In</Button>
      </form>
    </FormProvider>
  );
};
