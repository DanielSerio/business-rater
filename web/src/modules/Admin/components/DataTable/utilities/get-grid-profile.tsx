import type { ColumnDef } from "@tanstack/react-table";

function totalSize<T>(columns: ColumnDef<T>[]) {
  return columns.reduce((sum, col) => {
    return sum + (col.size ?? 64);
  }, 0);
}

export function getGridProfile<T>(columns: ColumnDef<T>[]) {
  const total = totalSize(columns);
  return columns
    .map((col) => {
      const size = col.size ?? 64;

      return `${((size / total) * 100).toPrecision(3)}%`;
    })
    .join(" ");
}
