import { Button, Flex } from "@mantine/core";
import type { DataTableCreateFormBaseProps } from "./types";

export function CreateStateForm({ closeModal }: DataTableCreateFormBaseProps) {
  return (
    <Flex direction="column">
      <div>Create State Form</div>
      <div>
        <Button onClick={closeModal}>Cancel</Button>
      </div>
    </Flex>
  );
}
