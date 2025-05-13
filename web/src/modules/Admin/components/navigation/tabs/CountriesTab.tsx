import { DataTable } from "../../DataTable/DataTable";
import type { TabComponentProps } from "./types";

export function CountriesTab({ searchQuery }: TabComponentProps) {
  return (
    <div>
      <DataTable
        deleteRetypeField="code"
        entity="countries"
        searchQuery={searchQuery}
      />
    </div>
  );
}
