import {
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import { ScrollArea, Text } from "@mantine/core";
import type { AdminTabName } from "../../../../pages/admin/AdminDashboardPage";
import { useUrlReflectState } from "../../../Core/hooks/useURLReflectState";
import {
  BUSINESSES_COLUMNS,
  CITIES_COLUMNS,
  COUNTRIES_COLUMNS,
  PROVINCES_COLUMNS,
} from "./columns";
import type { DataTableEntity, DataTableProps } from "./types";
import { useApiClient } from "../../../Core/hooks/useApiClient";
import { DataTableHeader } from "./DataTableHeader";
import { useDataTableQuery } from "./hooks/useDataTableQuery";
import { getGridProfile } from "./utilities/get-grid-profile";
import { DataTableSkeletonRows } from "./DataTableSkeletonRows";
import { useEntityCreate } from "../DataTableCreateModal/hooks/useEntityCreate";
import { DataTableCreateModal } from "../DataTableCreateModal/DataTableCreateModal";
import { DataTableRow } from "./DataTableRow";
import { DataTableCol } from "./DataTableCol";
import type { ReactNode } from "react";

/**
 * Convenience function to get the column list. Without this,
 * this file would likely become gigantic.
 */
function getDataTableColumns<Name extends AdminTabName>(
  name: Name
): ColumnDef<DataTableEntity<Name>>[] {
  switch (name) {
    case "businesses":
      return BUSINESSES_COLUMNS as ColumnDef<DataTableEntity<Name>>[];
    case "cities":
      return CITIES_COLUMNS as ColumnDef<DataTableEntity<Name>>[];
    case "countries":
      return COUNTRIES_COLUMNS as ColumnDef<DataTableEntity<Name>>[];
    case "states":
      return PROVINCES_COLUMNS as ColumnDef<DataTableEntity<Name>>[];
    default:
      throw new Error(`${name} is not a valid tab`);
  }
}

// Tanstack table suggests creating an empty initial value outside of
// component scope
const initialValues: unknown[] = [];

export function DataTable<Name extends AdminTabName>({
  entity,
  searchQuery,
}: DataTableProps<Name>) {
  type EntityRecord = DataTableEntity<Name>;
  const http = useApiClient();
  const columns: ColumnDef<EntityRecord>[] = getDataTableColumns<Name>(entity);
  const tableQueryController = useDataTableQuery<Name>({
    http,
    entity,
    searchQuery,
  });

  const [
    { query, total, sorting, columnFilters, limit, offset },
    { setSorting, setColumnFilters },
  ] = tableQueryController;

  const table = useReactTable({
    columns,
    data: query.data ?? (initialValues as EntityRecord[]),
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    manualFiltering: true,
    manualSorting: true,
    rowCount: total,
    state: {
      sorting,
      columnFilters,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
  });

  // percent-based grid-template-columns to be used on table rows
  const gridProfile = getGridProfile(columns);

  /**
   * Reflect the current state of the page in the url. This allows for
   * bookmarking/sharing of sorted & filtered views
   */
  useUrlReflectState(
    {
      tab: entity,
      limit: typeof limit === "number" ? `${limit}` : null,
      offset: typeof offset === "number" ? `${offset}` : null,
    },
    [entity, limit, offset]
  );

  const [{ contextName }, { openModal, closeModal }] = useEntityCreate<Name>();

  return (
    <>
      <DataTableCreateModal contextName={contextName} closeModal={closeModal} />
      <div className={`data-table ${entity}`}>
        <div className="inner">
          <DataTableHeader
            name={entity}
            table={table}
            controller={tableQueryController}
            gridProfile={gridProfile}
            onCreateClick={() => openModal(entity)}
          />
          <ScrollArea h="100%">
            {query.isLoading && (
              <DataTableSkeletonRows
                limit={limit}
                columns={columns}
                gridProfile={gridProfile}
              />
            )}
            {!query.isLoading && !query.data?.length && <Text>No Records</Text>}
            {!query.isLoading &&
              (query.data?.length ?? 0) > 0 &&
              table.getCoreRowModel().flatRows.map((row) => {
                return (
                  <DataTableRow gridProfile={gridProfile} key={row.id}>
                    {row.getVisibleCells().map((col) => {
                      return (
                        <DataTableCol
                          name={col.column.columnDef.header?.toString()}
                          key={col.id}
                        >
                          {col.renderValue() as ReactNode}
                        </DataTableCol>
                      );
                    })}
                  </DataTableRow>
                );
              })}
          </ScrollArea>
        </div>
      </div>
    </>
  );
}
