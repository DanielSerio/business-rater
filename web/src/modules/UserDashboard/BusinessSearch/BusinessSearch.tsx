import { Autocomplete, Box } from "@mantine/core";
import { useDebouncedState } from "@mantine/hooks";
import { useQuery } from "@tanstack/react-query";
import { forwardRef, useCallback, useState, type ForwardedRef } from "react";
import { useApiClient } from "../../Core/hooks/useApiClient";

export interface BusinessSearchComponentProps {
  defaultTextFilter?: string;
}

function BusinessSearchComponent(
  { defaultTextFilter }: BusinessSearchComponentProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const http = useApiClient();
  const [textFilter, setTextFilter] = useState(defaultTextFilter ?? "");
  const [searchQuery, setSearchQuery] = useDebouncedState(textFilter, 500);

  const handleChange = useCallback(
    (newValue: string) => {
      setTextFilter(newValue);
      setSearchQuery(newValue);
    },
    [setTextFilter, setSearchQuery]
  );

  const queryResults = useQuery({
    enabled: !!searchQuery,
    queryKey: ["search", "business", searchQuery],
    retry: false,
    async queryFn() {
      const response = await http.get(
        `/business?search=${encodeURIComponent(searchQuery)}`
      );

      const items = await response.data;

      return items.map(({ id, name }: any) => ({ label: name, value: id }));
    },
  });

  return (
    <Box p="xl" maw="480" mx="auto" ref={ref}>
      <Autocomplete
        label="Search Businesses"
        placeholder="Acme, Inc"
        value={textFilter}
        onChange={handleChange}
        data={queryResults?.data}
        clearable
      />
    </Box>
  );
}

export const BusinessSearch = forwardRef(BusinessSearchComponent);
