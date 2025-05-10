import { Button, Popover, type PopoverProps } from "@mantine/core";
import type { IconBaseProps, IconType } from "react-icons/lib";

export interface DataTableTabProps extends PopoverProps {
  targetIcon: IconType;
  activeIconProps?: IconBaseProps;
}

export function DataTableTab({
  targetIcon,
  activeIconProps,
  children,
  ...props
}: DataTableTabProps) {
  return (
    <Popover {...props}>
      <Popover.Target>
        <Button variant={"light"} color={"dark"} size="compact-sm" px={5}>
          {targetIcon({ ...activeIconProps })}
        </Button>
      </Popover.Target>
      <Popover.Dropdown>{children}</Popover.Dropdown>
    </Popover>
  );
}
