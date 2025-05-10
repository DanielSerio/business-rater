import {
  TbBook2,
  TbChevronLeft,
  TbChevronRight,
  TbChevronsLeft,
  TbChevronsRight,
} from "react-icons/tb";
import { DataTableTab } from "./DataTableTab";
import { Button, Group, Text, type ButtonProps } from "@mantine/core";

function TabButton({
  children,
  ...props
}: Omit<ButtonProps, "variant" | "size" | "color">) {
  return (
    <Button color="dark" variant="light" size="compact-sm">
      {children}
    </Button>
  );
}

export function DataTablePagination() {
  return (
    <DataTableTab targetIcon={TbBook2}>
      <Group gap="xs">
        <TabButton>
          <TbChevronsLeft />
        </TabButton>
        <TabButton>
          <TbChevronLeft />
        </TabButton>
        <Text>1 / 1</Text>
        <TabButton>
          <TbChevronRight />
        </TabButton>
        <TabButton>
          <TbChevronsRight />
        </TabButton>
      </Group>
    </DataTableTab>
  );
}
