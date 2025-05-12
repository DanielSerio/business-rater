import type { ColumnDef } from "@tanstack/react-table";
import type { City } from "../../../../../types/location.types";

export const CITIES_COLUMNS: ColumnDef<City>[] = [
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
  } as ColumnDef<City>,
  {
    meta: {
      dependent: "states",
    },
    accessorKey: "provinceId",
    header: "State/Province",
    size: 120,
  } as ColumnDef<City>,
  {
    accessorKey: "name",
    header: "Name",
    size: 300,
  },
];
