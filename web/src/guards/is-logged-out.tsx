import { redirect, type BeforeLoadFn } from "@tanstack/react-router";
import { jwtDecode } from "jwt-decode";

export const isLoggedOutGuard: BeforeLoadFn<any, any, any, any, any> = ({}) => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("uat");

    if (stored) {
      const decoded = jwtDecode(stored) as
        | { sub?: string; eml?: string }
        | undefined;

      if (!decoded || !decoded.sub || !decoded.eml) {
        localStorage.removeItem("uat");
      } else {
        throw redirect({
          to: "/dashboard",
        });
      }
    }
  }
};
