import type { AreaHTMLAttributes, Dispatch, RefObject, SetStateAction } from "react";
import type { AdminTabName } from "../../../../pages/admin/AdminDashboardPage";
import type { Business } from "../../../../types/business.types";
import type { City, Country, Province } from "../../../../types/location.types";
import type { ColumnFiltersState } from "@tanstack/react-table";

export type DataTableEntityMap = {
  businesses: Business;
  countries: Country;
  states: Province;
  cities: City;
};

export type DataTableEntity<Name extends AdminTabName> = DataTableEntityMap[Name];
export type DataTableCreateEntity<Name extends AdminTabName> = Omit<DataTableEntity<Name>, 'id'>;

export type DataTableSearchQuery = {
  limit?: string;
  offset?: string;
  sort?: string;
  filter?: string;
};

export interface DataTableProps<Name extends AdminTabName> {
  entity: Name;
  searchQuery: DataTableSearchQuery;
  dependents?: Partial<Record<AdminTabName, { labelField: string; idField: string; }>>;
  deleteRetypeField: keyof DataTableEntity<Name>;
}

export interface DataTableRowProps extends AreaHTMLAttributes<HTMLDivElement> {
  gridProfile: string;
}

export interface DataTableColProps extends AreaHTMLAttributes<HTMLDivElement> {
  name?: string;
  innerProps?: Omit<DataTableColProps, 'innerProps'> & { ref?: RefObject<HTMLDivElement>; };
}

export interface DataTableColumnFilterProps {
  controller: readonly [ColumnFiltersState, Dispatch<SetStateAction<ColumnFiltersState>>];
}