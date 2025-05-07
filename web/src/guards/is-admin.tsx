import { redirect, type BeforeLoadFn } from "@tanstack/react-router";
import { jwtDecode } from "jwt-decode";

export const isAdminGuard: BeforeLoadFn<any, any, any, any, any> = ({}) => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("uat");

    if (!stored) {
      throw redirect({
        to: "/auth/login",
      });
    }

    const decoded = jwtDecode(stored) as
      | { rol?: "ADMIN" | "USER"; sub?: string; eml?: string }
      | undefined;

    if (!decoded || !decoded.eml || !decoded.sub || decoded.rol !== "ADMIN") {
      throw redirect({
        to: "/auth/login",
      });
    }
  }
};
