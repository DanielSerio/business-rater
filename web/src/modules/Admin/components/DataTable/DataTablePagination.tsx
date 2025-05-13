import {
  TbBook2,
  TbChevronLeft,
  TbChevronRight,
  TbChevronsLeft,
  TbChevronsRight,
} from "react-icons/tb";
import { DataTableTab } from "./DataTableTab";
import { Button, Group, Text } from "@mantine/core";
import type { ButtonHTMLAttributes } from "react";

function TabButton({
  children,
  onClick,
  disabled,
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button
      color="dark"
      variant="light"
      size="compact-sm"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export interface DataTablePaginationProps {
  limit: number;
  offset: number;
  totalPages: number;
  goToFirstPage: () => void;
  goToPrevPage: () => void;
  goToNextPage: () => void;
  goToLastPage: () => void;
}

export function DataTablePagination({
  limit,
  offset,
  totalPages,
  goToFirstPage,
  goToPrevPage,
  goToNextPage,
  goToLastPage,
}: DataTablePaginationProps) {
  const currentPage = offset / limit + 1;

  return (
    <DataTableTab title="Pagination" targetIcon={TbBook2}>
      <Group gap="xs">
        <TabButton onClick={goToFirstPage} disabled={currentPage === 1}>
          <TbChevronsLeft />
        </TabButton>
        <TabButton onClick={goToPrevPage} disabled={currentPage === 1}>
          <TbChevronLeft />
        </TabButton>
        <Text>
          {currentPage} / {totalPages}
        </Text>
        <TabButton onClick={goToNextPage} disabled={currentPage === totalPages}>
          <TbChevronRight />
        </TabButton>
        <TabButton onClick={goToLastPage} disabled={currentPage === totalPages}>
          <TbChevronsRight />
        </TabButton>
      </Group>
    </DataTableTab>
  );
}
