import { FC } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { InputErrorProps } from "@/components/input/input";

export const InputErrorMessage: FC<InputErrorProps> = ({ errors, name }) => {
  console.log("errors", errors);

  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => <p className="form__error">{message}</p>}
    />
  );
};
