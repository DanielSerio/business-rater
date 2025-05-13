import { forwardRef, type ForwardedRef } from "react";
import type { DataTableColProps } from "./types";
import { Box, noop } from "@mantine/core";

function DataTableColComponent(
  {
    innerProps,
    className,
    name,
    children,
    isLink,
    openRecord,
    ...props
  }: DataTableColProps,
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
        <Box
          px="xs"
          className={isLink ? "pseudo-link" : undefined}
          onClick={isLink ? openRecord : noop}
        >
          {children}
        </Box>
      </div>
    </div>
  );
}

export const DataTableCol = forwardRef(DataTableColComponent);
