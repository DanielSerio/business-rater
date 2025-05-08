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
import { useRegisterForm } from "../../hooks/useRegisterForm";

export function RegisterForm({ setType }: AuthFormInstanceProps) {
  const { form, submit } = useRegisterForm();

  return (
    <AuthForm name="register" onSubmit={submit}>
      <Flex direction="column">
        <TextInput
          type="email"
          required
          label="Email"
          {...form.getInputProps("email")}
        />
        <TextInput label="Username" {...form.getInputProps("username")} />
        <PasswordInput
          required
          label="Password"
          {...form.getInputProps("password")}
        />
        <PasswordInput
          required
          label="Confirm Password"
          {...form.getInputProps("confirmPassword")}
        />
      </Flex>
      <Box>
        <Text>
          Already have an account?{" "}
          <button type="button" onClick={() => setType("login")}>
            Log in
          </button>
        </Text>
      </Box>
      <Flex justify="flex-end">
        <Group>
          <Button type="submit" disabled={!form.isValid()}>
            Register
          </Button>
        </Group>
      </Flex>
    </AuthForm>
  );
}
