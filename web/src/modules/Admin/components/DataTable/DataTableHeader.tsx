import { flexRender, useReactTable } from "@tanstack/react-table";
import type { useDataTableQuery } from "./hooks/useDataTableQuery";
import type { AdminTabName } from "../../../../pages/admin/AdminDashboardPage";
import type { DataTableEntity } from "./types";
import { Flex } from "@mantine/core";
import { DataTableRow } from "./DataTableRow";
import { DataTableCol } from "./DataTableCol";

export function DataTableHeader<Name extends AdminTabName>({
  table,
  gridProfile,
}: {
  gridProfile: string;
  table: ReturnType<typeof useReactTable<DataTableEntity<Name>>>;
  controller: ReturnType<typeof useDataTableQuery<Name>>;
}) {
  return (
    <Flex direction="column">
      <Flex>
        <div>DataTableHeader Toolbar</div>
      </Flex>
      <DataTableRow gridProfile={gridProfile}>
        {table.getFlatHeaders().map((header) => {
          return (
            <DataTableCol key={header.id}>
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
            </DataTableCol>
          );
        })}
      </DataTableRow>
    </Flex>
  );
}
