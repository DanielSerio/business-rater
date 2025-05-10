import {
  useCallback,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { AdminTabName } from "../../../../../pages/admin/AdminDashboardPage";
import { useDebouncedState } from "@mantine/hooks";
import type { AxiosInstance } from "axios";
import { useQuery } from "@tanstack/react-query";
import type { ColumnFiltersState, SortingState } from "@tanstack/react-table";

/**
 * Returns a number based on the input value or a fallback value if the input is not a valid number.
 */
function getDefaultNumber(value?: string | number, minValue = 1, fallback = 1) {
  if ((value || value === 0) && !!`${value}`.trim()) {
    const isNumber = !isNaN(Number(value));

    if (isNumber) {
      const floored = ~~Number(value);

      if (floored >= minValue) {
        return floored;
      }
    }
  }

  return fallback;
}

function getFilterFromString<T>(filterString?: string): T | null {
  if (filterString) {
    return JSON.parse(decodeURIComponent(filterString));
  }

  return null;
}

function getSortingFromString<T>(sortString?: string): T | null {
  if (sortString) {
    return JSON.parse(decodeURIComponent(sortString));
  }

  return null;
}

function getDefault(
  name: "limit" | "offset" | "sort" | "filter",
  query?: string
) {
  switch (name) {
    case "limit":
      return getDefaultNumber(query, 1, 25) as number;
    case "offset":
      return getDefaultNumber(query, 0, 0) as number;
    case "filter":
      return getFilterFromString(query);
    case "sort":
      return getSortingFromString(query);
    default:
      return null;
  }
}

export function useDataTableQuery<Name extends AdminTabName>({
  http,
  entity,
  searchQuery,
}: {
  http: AxiosInstance;
  entity: Name;
  searchQuery: {
    limit?: string;
    offset?: string;
    sort?: string;
    filter?: string;
  };
}) {
  const [filterText, _setFilterText] = useState("");
  const [filterQueryText, _setFilterQueryText] = useDebouncedState(
    filterText,
    500
  );

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const [total, setTotal] = useState(0);
  const [limit, _setLimit] = useState(
    getDefault("limit", searchQuery.limit) as number
  );
  const [offset, setOffset] = useState(
    getDefault("offset", searchQuery.offset) as number
  );

  const setLimit = useCallback(
    (value: number) => {
      setOffset(0);
      _setLimit(value);
    },
    [_setLimit, setOffset]
  );

  const goToFirstPage = () => {
    setOffset(0);
  };
  const goToLastPage = () => {
    const lastPageNumber = ~~(total / limit);
    setOffset(lastPageNumber * limit);
  };

  const goToPrevPage = () =>
    setOffset((current) => {
      if (current - limit >= 0) {
        return current - limit;
      }

      return current;
    });

  const goToNextPage = () =>
    setOffset((current) => {
      if (current + limit <= total) {
        return current + limit;
      }

      return current;
    });

  const setFilterText: Dispatch<SetStateAction<string>> = useCallback(
    (...params: Parameters<typeof _setFilterText>) => {
      _setFilterText(...params);
      _setFilterQueryText(...params);
    },
    [_setFilterText, _setFilterQueryText]
  );

  const query = useQuery({
    enabled: !!filterQueryText,
    queryKey: [
      entity,
      "list",
      `query=${filterQueryText}`,
      `limit=${limit}`,
      `offset=${offset}`,
      `sort=${encodeURIComponent(JSON.stringify(sorting))}`,
      `filter=${encodeURIComponent(JSON.stringify(columnFilters))}`,
    ],
    async queryFn() {
      function constructUrl() {
        const chunks = [`/${entity}?limit=${limit}&offset=${offset}`];

        if (sorting && sorting.length) {
          chunks.push(`sort=${encodeURIComponent(JSON.stringify(sorting))}`);
        }
        if (columnFilters && columnFilters.length) {
          chunks.push(
            `filter=${encodeURIComponent(JSON.stringify(columnFilters))}`
          );
        }
        if (filterQueryText && filterQueryText.length) {
          chunks.push(`query=${encodeURIComponent(filterQueryText)}`);
        }

        return chunks.join("&");
      }

      const response = await http.get(constructUrl());
      const body = await response.data;
      const totalRecords = body.total.records;

      setTotal(totalRecords);

      return body.records;
    },
  });

  return [
    {
      query,
      filterText,
      total,
      limit,
      offset,
      sorting,
      columnFilters,
    },
    {
      setFilterText,
      setLimit,
      goToFirstPage,
      goToLastPage,
      goToNextPage,
      goToPrevPage,
      setSorting,
      setColumnFilters,
    },
  ] as const;
}
