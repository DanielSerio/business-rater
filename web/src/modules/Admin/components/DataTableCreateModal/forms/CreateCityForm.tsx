import { Button, Flex, TextInput } from "@mantine/core";
import type { DataTableCreateFormBaseProps } from "./types";
import { useForm } from "@mantine/form";
import { getValidator } from "../utilities/get-validator";
import { zodResolver } from "mantine-form-zod-resolver";
import { useMutation } from "@tanstack/react-query";
import { CountrySelect } from "../../../../Core/components/controls/CountrySelect";

const validator = getValidator("cities");

export function CreateCityForm({
  http,
  queryClient,
  closeModal,
}: DataTableCreateFormBaseProps) {
  const mutation = useMutation({
    mutationKey: ["cities", "create"],
    async mutationFn(values: {
      countryId: number;
      provinceId: number;
      name: string;
    }) {
      const result = await http.post("/cities", values);

      return await result.data;
    },
  });
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      countryId: -1,
      provinceId: -1,
      name: "",
    },
    validate: zodResolver(validator),
  });

  const handleSubmit = form.onSubmit(async (values) => {
    try {
      await mutation.mutateAsync(values);
      await queryClient.invalidateQueries({
        queryKey: ["cities"],
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
          <CountrySelect
            error={form.errors.countryId}
            defaultValue={form.getInitialValues().countryId}
            onValueChange={(newValue) => {
              form.setFieldValue("countryId", newValue ? newValue.id : -1);
              form.validateField("countryId");
            }}
            onBlur={() => form.validateField("countryId")}
          />
          {/* TODO: <StateSelect /> */}
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
