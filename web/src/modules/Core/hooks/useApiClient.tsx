import { createContext, useContext, type PropsWithChildren } from "react";
import { http } from "../../../const";

const ApiClientContext = createContext(http);

export const ApiClientProvider = ({ children }: PropsWithChildren) => {
  return (
    <ApiClientContext.Provider value={http}>
      {children}
    </ApiClientContext.Provider>
  );
};

export function useApiClient() {
  return useContext(ApiClientContext);
}
