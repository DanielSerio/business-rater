import { AppShellMain, Flex } from "@mantine/core";
import { LoginForm } from "../../modules/Auth/components/forms/LoginForm";
import { useLoginFormType } from "../../modules/Auth/hooks/useLoginFormType";
import { RegisterForm } from "../../modules/Auth/components/forms/RegisterForm";
import { useUrlReflectState } from "../../modules/Core/hooks/useURLReflectState";
import { useSearch } from "@tanstack/react-router";

export function LoginPage() {
  const params = useSearch({
    from: "/auth/login",
  });
  const [type, { setType }] = useLoginFormType(params.type);
  useUrlReflectState({ type });

  return (
    <AppShellMain h="100%" w="100%" pos="absolute">
      <Flex
        component="section"
        align="center"
        justify="center"
        h="100%"
        pos="relative"
      >
        {type === "register" ? (
          <RegisterForm setType={setType} />
        ) : (
          <LoginForm setType={setType} />
        )}
      </Flex>
    </AppShellMain>
  );
}
