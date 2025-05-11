import type { ColumnFilter, SortingState } from "@tanstack/react-table";

export interface EntityListResponse<Entity> {
  records: Entity[];
  paging: Paging;
  sorting: null | {
    sort: SortingState | null;
  };
  filtering: null | {
    search: string | null;
    filter: ColumnFilter[] | null;
  };
}

interface Paging {
  limit: number;
  offset: number;
  totals: Totals;
}

interface Totals {
  records: number;
  pages: number;
}