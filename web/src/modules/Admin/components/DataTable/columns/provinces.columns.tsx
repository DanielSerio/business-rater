import type { ColumnDef } from "@tanstack/react-table";
import type { Province } from "../../../../../types/location.types";

export const PROVINCES_COLUMNS = [
  {
    accessorKey: "id",
    header: "ID",
    size: 20,
  },
  {
    meta: {
      dependent: "countries",
    },
    accessorKey: "countryId",
    header: "Country",
    size: 60,
  } as ColumnDef<Province>,
  {
    accessorKey: "code",
    header: "Code",
    size: 60,
  },
  {
    accessorKey: "name",
    header: "Name",
    size: 180,
  },
];
