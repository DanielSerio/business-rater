import { DataTable } from "../../DataTable/DataTable";
import type { TabComponentProps } from "./types";

export function CitiesTab({ searchQuery }: TabComponentProps) {
  return (
    <div>
      <DataTable
        deleteRetypeField="name"
        entity="cities"
        searchQuery={searchQuery}
      />
    </div>
  );
}
