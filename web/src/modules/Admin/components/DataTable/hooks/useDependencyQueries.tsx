import type { AxiosInstance } from "axios";
import type { AdminTabName } from "../../../../../pages/admin/AdminDashboardPage";
import { useQueries } from "@tanstack/react-query";

export function useDependencyQueries(
  http: AxiosInstance,
  dependents?: Partial<
    Record<AdminTabName, { labelField: string; idField: string }>
  >
) {
  return useQueries({
    queries: [
      ...Object.entries(dependents ?? {}).map(([entityName, field]) => {
        return {
          queryKey: [entityName, "by", JSON.stringify(field)],
          staleTime: Infinity,
          async queryFn() {
            const response = await http.get(
              `/${entityName}?limit=${10_000}&offset=0`
            );

            return await response.data.records.map((ent: object) => ({
              context: entityName,
              ...ent,
            }));
          },
        };
      }),
    ],
  });
}
