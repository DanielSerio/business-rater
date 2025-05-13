import { flexRender, useReactTable } from "@tanstack/react-table";
import type { useDataTableQuery } from "./hooks/useDataTableQuery";
import type { AdminTabName } from "../../../../pages/admin/AdminDashboardPage";
import type { DataTableEntity } from "./types";
import { Box, Button, Flex, Group } from "@mantine/core";
import { DataTableRow } from "./DataTableRow";
import { DataTableCol } from "./DataTableCol";
import { DataTableColumnFilters } from "./DataTableColumnFilters";
import { DataTablePagination } from "./DataTablePagination";
import { DataTableSearch } from "./DataTableSearch";
import { DataTablePerPage } from "./DataTablePerPage";
import { TbPlus } from "react-icons/tb";

export interface DataTableHeaderProps<Name extends AdminTabName> {
  name: Name;
  gridProfile: string;
  table: ReturnType<typeof useReactTable<DataTableEntity<Name>>>;
  controller: ReturnType<typeof useDataTableQuery<Name>>;
  onCreateClick: () => void;
}

export function DataTableHeader<Name extends AdminTabName>({
  name,
  table,
  gridProfile,
  controller,
  onCreateClick,
}: DataTableHeaderProps<Name>) {
  const [state, methods] = controller;
  const filterController = [
    state.columnFilters,
    methods.setColumnFilters,
  ] as const;

  return (
    <Flex className="data-table-header" direction="column">
      <Flex justify="space-between" p="sm" gap="md">
        <DataTableSearch
          placeholder={`Search ${name}`}
          value={state.filterText}
          onChange={(ev) => methods.setFilterText(ev.target.value)}
        />
        <Group gap="xs">
          <DataTablePerPage
            value={`${state.limit}`}
            onChange={(value) => {
              if (value) {
                methods.setLimit(+value);
              }
            }}
          />
          <DataTablePagination
            limit={state.limit}
            offset={state.offset}
            totalPages={Math.ceil(state.total / state.limit)}
            goToFirstPage={methods.goToFirstPage}
            goToPrevPage={methods.goToPrevPage}
            goToNextPage={methods.goToNextPage}
            goToLastPage={methods.goToLastPage}
          />
          <DataTableColumnFilters controller={filterController} />
          <Button
            title="Create"
            size="compact-sm"
            variant="light"
            px={6}
            onClick={onCreateClick}
          >
            <TbPlus />
          </Button>
        </Group>
      </Flex>
      <DataTableRow gridProfile={gridProfile}>
        {table.getFlatHeaders().map((header) => {
          return (
            <DataTableCol key={header.id}>
              <Box>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </Box>
            </DataTableCol>
          );
        })}
      </DataTableRow>
    </Flex>
  );
}
