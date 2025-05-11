import { Button, Flex } from "@mantine/core";
import type { DataTableCreateFormBaseProps } from "./types";

export function CreateCountryForm({
  closeModal,
}: DataTableCreateFormBaseProps) {
  return (
    <Flex direction="column">
      <div>Create Country Form</div>
      <div>
        <Button onClick={closeModal}>Cancel</Button>
      </div>
    </Flex>
  );
}
