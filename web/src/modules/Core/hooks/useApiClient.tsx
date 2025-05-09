import { createContext, useContext, type PropsWithChildren } from "react";
import { getHttp } from "../../../const";
import type { AxiosInstance } from "axios";

const ApiClientContext = createContext<AxiosInstance>(getHttp());

export const ApiClientProvider = ({ children }: PropsWithChildren) => {
  const http = getHttp();
  return (
    <ApiClientContext.Provider value={http}>
      {children}
    </ApiClientContext.Provider>
  );
};

export function useApiClient() {
  return useContext(ApiClientContext);
}
