import { forwardRef, type ForwardedRef } from "react";
import type { DataTableRowProps } from "./types";

function DataTableRowComponent(
  { gridProfile, children, className, style, ...props }: DataTableRowProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const classNames = `data-table-row${className ? ` ${className}` : ""}`;

  return (
    <div
      ref={ref}
      className={classNames}
      style={{ ...style, gridTemplateColumns: gridProfile }}
      {...props}
    >
      {children}
    </div>
  );
}

export const DataTableRow = forwardRef(DataTableRowComponent);
