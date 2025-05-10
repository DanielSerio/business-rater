import { Box, Button, TextInput, type TextInputProps } from "@mantine/core";
import { forwardRef, type ForwardedRef } from "react";

function DataTableSearchComponent(
  { ...props }: Omit<TextInputProps, "type" | "size">,
  ref?: ForwardedRef<HTMLInputElement>
) {
  return (
    <Box className="data-table-search">
      <TextInput
        type="search"
        styles={{ input: { paddingInline: "0.5ch" } }}
        size="compact-md"
        ref={ref}
        {...props}
      />
      {(!!props.value || !!props.defaultValue) && (
        <Button size="compact-xs" pos="absolute" top={0} right={0}>
          x
        </Button>
      )}
    </Box>
  );
}

export const DataTableSearch = forwardRef(DataTableSearchComponent);
