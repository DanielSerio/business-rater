import { AppShellHeader } from "@mantine/core";
import { HeaderToolbar } from "./HeaderToolbar";
import { Link } from "@tanstack/react-router";

export function PublicHeader() {
  return (
    <AppShellHeader h={60}>
      <HeaderToolbar moduleRoot="/">
        <Link to="/auth/login">Login</Link>
      </HeaderToolbar>
    </AppShellHeader>
  );
}
