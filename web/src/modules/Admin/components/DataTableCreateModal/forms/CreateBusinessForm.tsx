import { Button, Flex } from "@mantine/core";
import type { DataTableCreateFormBaseProps } from "./types";

export function CreateBusinessForm({
  closeModal,
}: DataTableCreateFormBaseProps) {
  return (
    <Flex direction="column">
      <div>Create Business Form</div>
      <div>
        <Button onClick={closeModal}>Cancel</Button>
      </div>
    </Flex>
  );
}
