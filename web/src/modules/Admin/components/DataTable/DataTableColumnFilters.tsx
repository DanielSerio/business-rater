import type { DataTableColumnFilterProps } from "./types";
import { TbFilter } from "react-icons/tb";
import { DataTableTab } from "./DataTableTab";

export function DataTableColumnFilters(
  {
    // controller: [filters, setFilters],
  }: DataTableColumnFilterProps
) {
  return <DataTableTab targetIcon={TbFilter}>POPOVER</DataTableTab>;
}
