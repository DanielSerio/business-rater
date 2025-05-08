import { useQuery } from "@tanstack/react-query";
import { useApiClient } from "./useApiClient";

export function useProfileImg(id?: number | null) {
  const http = useApiClient();

  return useQuery({
    enabled: !!id,
    queryKey: ["user", "profile", "img", id],
    async queryFn() {
      const response = await http.get("/avatar");
      const data = await response.data;

      if (!data) {
        return {
          success: true,
          img: null,
        };
      }

      return {
        success: true,
        img: data,
      };
    },
  });
}
