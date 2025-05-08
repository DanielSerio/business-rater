import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { z } from "zod";

export function useRegisterForm() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validate: zodResolver(
      z
        .object({
          email: z.string().trim().email(),
          username: z
            .string()
            .trim()
            .transform((v) => (v === "" ? null : v)),
          password: z.string().trim().min(6),
          confirmPassword: z.string().trim(),
        })
        .superRefine((record, ctx) => {
          if (record.password !== record.confirmPassword) {
            ctx.addIssue({
              code: "custom",
              message: "Passwords do not match",
              path: ["confirmPassword"],
            });
          }
        })
    ),
  });

  return {
    form,
    submit: form.onSubmit(async (values) => {}),
  };
}
