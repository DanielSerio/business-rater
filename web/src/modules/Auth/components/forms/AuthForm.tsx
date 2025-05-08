import { Flex } from "@mantine/core";
import type { Dispatch, FormHTMLAttributes, SetStateAction } from "react";
import { listToClassName } from "../../../Core/utilities/classname";

export interface AuthFormProps extends FormHTMLAttributes<HTMLFormElement> {
  name: "login" | "register" | "change-password";
}

export interface AuthFormInstanceProps {
  setType: Dispatch<SetStateAction<"login" | "register">>;
}

export function AuthForm({
  children,
  name,
  className,
  ...props
}: AuthFormProps) {
  const classNames = listToClassName(["auth-form", `${name}-form`, className]);
  return (
    <form className={classNames} {...props}>
      <Flex direction="column">{children}</Flex>
    </form>
  );
}
