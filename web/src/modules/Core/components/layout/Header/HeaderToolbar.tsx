import { Flex } from "@mantine/core";
import { Logo } from "./Logo";

import { type PropsWithChildren } from "react";

export type HeaderToolbarProps = PropsWithChildren<{
  moduleRoot?: string;
}>;

export function HeaderToolbar({ moduleRoot, children }: HeaderToolbarProps) {
  return (
    <Flex align="center" justify="space-between" h="100%" px="md">
      <Logo moduleRoot={moduleRoot} />
      {children}
    </Flex>
  );
}
