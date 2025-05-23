import { Button, Flex, TextInput } from "@mantine/core";
import type { DataTableCreateFormBaseProps } from "./types";
import { useForm } from "@mantine/form";
import { getValidator } from "../utilities/get-validator";
import { zodResolver } from "mantine-form-zod-resolver";
import { useMutation } from "@tanstack/react-query";

const validator = getValidator("countries");

export function CreateCountryForm({
  http,
  queryClient,
  closeModal,
}: DataTableCreateFormBaseProps) {
  const mutation = useMutation({
    mutationKey: ["countries", "create"],
    async mutationFn(values: { code: string; name: string }) {
      const result = await http.post("/countries", values);

      return await result.data;
    },
  });
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      code: "",
      name: "",
    },
    validate: zodResolver(validator),
  });

  const handleSubmit = form.onSubmit(async (values) => {
    try {
      await mutation.mutateAsync(values);
      await queryClient.invalidateQueries({
        queryKey: ["countries"],
      });

      closeModal();
    } catch (err) {
      console.error(err);
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column">
        <Flex direction="column" gap="sm" mb="lg">
          <TextInput
            label="Code"
            required
            error={form.errors.code}
            key={form.key("code")}
            {...form.getInputProps("code")}
            onBlur={() => form.validateField("code")}
          />
          <TextInput
            label="Name"
            required
            error={form.errors.name}
            key={form.key("name")}
            {...form.getInputProps("name")}
            onBlur={() => form.validateField("name")}
          />
        </Flex>
        <Flex justify="flex-end" gap="sm" mt="sm">
          <Button onClick={closeModal} color="gray">
            Cancel
          </Button>
          <Button type="submit" disabled={!form.isValid()}>
            Submit
          </Button>
        </Flex>
      </Flex>
    </form>
  );
}
