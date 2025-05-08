import {
  Box,
  Button,
  Flex,
  Group,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import { AuthForm, type AuthFormInstanceProps } from "./AuthForm";
import { useLoginForm } from "../../hooks/useLoginForm";

export function LoginForm({ setType }: AuthFormInstanceProps) {
  const { form, isSubmitting, submit } = useLoginForm();
  return (
    <AuthForm name="login" onSubmit={submit}>
      <Flex direction="column">
        <TextInput
          type="email"
          required
          label="Email"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          required
          label="Password"
          {...form.getInputProps("password")}
        />
      </Flex>
      <Box>
        <Text>
          Don't have an account?{" "}
          <button type="button" onClick={() => setType("register")}>
            Create one here!
          </button>
        </Text>
      </Box>
      <Flex justify="flex-end">
        <Group>
          <Button type="submit" disabled={isSubmitting || !form.isValid()}>
            Log in
          </Button>
        </Group>
      </Flex>
    </AuthForm>
  );
}
