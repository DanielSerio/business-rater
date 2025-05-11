import { flexRender, useReactTable } from "@tanstack/react-table";
import type { useDataTableQuery } from "./hooks/useDataTableQuery";
import type { AdminTabName } from "../../../../pages/admin/AdminDashboardPage";
import type { DataTableEntity } from "./types";
import { Box, Flex, Group } from "@mantine/core";
import { DataTableRow } from "./DataTableRow";
import { DataTableCol } from "./DataTableCol";
import { DataTableColumnFilters } from "./DataTableColumnFilters";
import { DataTablePagination } from "./DataTablePagination";
import { DataTableSearch } from "./DataTableSearch";
import { DataTablePerPage } from "./DataTablePerPage";

export function DataTableHeader<Name extends AdminTabName>({
  name,
  table,
  gridProfile,
  controller,
}: {
  name: Name;
  gridProfile: string;
  table: ReturnType<typeof useReactTable<DataTableEntity<Name>>>;
  controller: ReturnType<typeof useDataTableQuery<Name>>;
}) {
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
          <DataTablePagination />
          <DataTableColumnFilters controller={filterController} />
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
