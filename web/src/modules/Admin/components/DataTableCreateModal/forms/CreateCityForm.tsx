import { Button, Flex } from "@mantine/core";
import type { DataTableCreateFormBaseProps } from "./types";

export function CreateCityForm({ closeModal }: DataTableCreateFormBaseProps) {
  return (
    <Flex direction="column">
      <div>Create City Form</div>
      <div>
        <Button onClick={closeModal}>Cancel</Button>
      </div>
    </Flex>
  );
}
