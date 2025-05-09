import type { ColumnDef } from "@tanstack/react-table";
import type { City } from "../../../../types/location.types";

export const CITIES_COLUMNS: ColumnDef<City>[] = [
  {
    accessorKey: "id",
    header: "ID",
    size: 20,
  },
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
