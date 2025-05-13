import { DataTable } from "../../DataTable/DataTable";
import type { TabComponentProps } from "./types";

/**
 * Represents a tab button on the admin table toolbar
 */
export function BusinessesTab({ searchQuery }: TabComponentProps) {
  return (
    <div>
      <DataTable
        deleteRetypeField="name"
        entity="businesses"
        searchQuery={searchQuery}
      />
    </div>
  );
}
