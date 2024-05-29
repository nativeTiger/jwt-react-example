import React, { FC } from "react";
import { cn } from "@/utils/tailwind-merge";
import { FieldErrors, useFormContext } from "react-hook-form";
import { InputErrorMessage } from "@/components/input/input-error-message";
import { SignUpFieldName, SignUpFormType } from "@/pages/sign-up/schema";

export interface InputErrorProps {
  name: SignUpFieldName;
  errors: FieldErrors<SignUpFormType>;
}

export interface InputProps
  extends InputErrorProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "name"> {
  label: string;
}

export const Input: FC<InputProps> = ({
  className,
  name,
  label,
  errors,
  ...props
}) => {
  const { register } = useFormContext();

  const hasError = Object.prototype.hasOwnProperty.call(errors, name);

  return (
    <div>
      <div>
        <label htmlFor={name} className="form__label">
          {label}
        </label>
        <input
          {...register(name)}
          {...props}
          className={cn(
            `form__input ${hasError && "border-red-500"}`,
            className
          )}
        />
      </div>
      <InputErrorMessage name={name} errors={errors} />
    </div>
  );
};
