import { forwardRef, type ForwardedRef } from "react";
import type { DataTableColProps } from "./types";
import { Box } from "@mantine/core";

function DataTableColComponent(
  { innerProps, className, name, children, ...props }: DataTableColProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const classNames = `data-table-col${className ? ` ${className}` : ""}`;
  const { className: innerClassName, ...rest } = innerProps ?? {
    className: null,
  };
  const innerClassNames = `inner${innerClassName ? ` ${innerClassName}` : ""}`;
  return (
    <div className={classNames} {...props} ref={ref}>
      <div className={innerClassNames} ref={innerProps?.ref} {...rest}>
        <Box className="colname">{name}</Box>
        {children}
      </div>
    </div>
  );
}

export const DataTableCol = forwardRef(DataTableColComponent);
