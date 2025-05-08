import { useForm } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "mantine-form-zod-resolver";
import { z } from "zod";
import { useApiClient } from "../../Core/hooks/useApiClient";

export function useLoginForm() {
  const http = useApiClient();
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },
    validate: zodResolver(
      z.object({
        email: z.string().trim().email(),
        password: z.string().trim().min(6),
      })
    ),
  });
  const mutation = useMutation({
    mutationKey: ["auth", "login"],
    async mutationFn(values: (typeof form)["values"]) {
      const result = await http.post("/auth/login", values);
      const headers = await result.headers;
      const auth = headers["x-authorization"];

      if (auth) {
        return {
          success: true,
        };
      }

      return {
        success: false,
      };
    },
  });

  return {
    form,
    isSubmitting: mutation.isPending,
    error: mutation.error,
    submit: form.onSubmit(async (values) => {
      const { success } = await mutation.mutateAsync(values);

      if (success) {
        window.location.href = "/dashboard";
      }
    }),
  };
}
