import { createContext, useContext, type PropsWithChildren } from "react";
import type { SessionPayload } from "../types/jwt.types";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext<SessionPayload | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const stored = localStorage.getItem("uat");
  const user = !stored ? null : (jwtDecode(stored) as SessionPayload);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  return useContext(AuthContext);
}
