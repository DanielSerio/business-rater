import {
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
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

const initialValues: any[] = [];

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

  const gridProfile = getGridProfile(columns);

  useUrlReflectState(
    {
      tab: entity,
      limit: typeof limit === "number" ? `${limit}` : null,
      offset: typeof offset === "number" ? `${offset}` : null,
    },
    [entity, limit, offset]
  );

  return (
    <div className={`data-table ${entity}`}>
      <div className="inner">
        <DataTableHeader
          table={table}
          controller={tableQueryController}
          gridProfile={gridProfile}
        />
      </div>
    </div>
  );
}
