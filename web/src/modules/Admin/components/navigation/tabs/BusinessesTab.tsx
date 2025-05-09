import { DataTable } from "../../DataTable/DataTable";
import type { TabComponentProps } from "./types";

export function BusinessesTab({ searchQuery }: TabComponentProps) {
  return (
    <div>
      <h1>Businesses</h1>
      <DataTable entity="businesses" searchQuery={searchQuery} />
    </div>
  );
}
