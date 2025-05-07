import { QueryClient } from "@tanstack/react-query";

function initQueryClient() {
  const QUERY_CLIENT = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });

  return {
    QUERY_CLIENT,
  };
}

export const { QUERY_CLIENT } = initQueryClient();
