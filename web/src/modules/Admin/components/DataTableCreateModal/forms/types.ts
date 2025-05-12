import type { QueryClient } from "@tanstack/react-query";
import type { AxiosInstance } from "axios";

export interface DataTableCreateFormBaseProps {
  http: AxiosInstance;
  queryClient: QueryClient;
  closeModal: () => void;
}