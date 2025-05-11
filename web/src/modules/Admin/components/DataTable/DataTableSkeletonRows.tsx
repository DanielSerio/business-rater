import { Box, Skeleton } from "@mantine/core";
import type { ColumnDef } from "@tanstack/react-table";
import type { AdminTabName } from "../../../../pages/admin/AdminDashboardPage";
import { DataTableRow } from "./DataTableRow";
import { DataTableCol } from "./DataTableCol";
import type { DataTableEntity } from "./types";

export interface DataTableSkeletonRowsProps<Name extends AdminTabName> {
  gridProfile: string;
  limit: number;
  columns: ColumnDef<DataTableEntity<Name>>[];
}

export function DataTableSkeletonRows<Name extends AdminTabName>({
  gridProfile,
  limit,
  columns,
}: DataTableSkeletonRowsProps<Name>) {
  return (
    <>
      {[...new Array(limit)].map((_, rowIndex) => (
        <DataTableRow gridProfile={gridProfile} key={`r-${rowIndex}`}>
          {columns.map(({ id, header }, index) => (
            <DataTableCol
              key={id ?? `c-${index}`}
              name={header?.toString() ?? ""}
            >
              <Box p="xs">
                <Skeleton w="100%" h={12} />
              </Box>
            </DataTableCol>
          ))}
        </DataTableRow>
      ))}
    </>
  );
}
