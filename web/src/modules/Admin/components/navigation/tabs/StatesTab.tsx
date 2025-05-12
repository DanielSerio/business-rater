import { DataTable } from "../../DataTable/DataTable";
import type { TabComponentProps } from "./types";

export function StatesTab({ searchQuery }: TabComponentProps) {
  return (
    <div>
      <DataTable
        entity="states"
        searchQuery={searchQuery}
        dependents={{
          countries: { labelField: "code", idField: "countryId" },
        }}
      />
    </div>
  );
}
