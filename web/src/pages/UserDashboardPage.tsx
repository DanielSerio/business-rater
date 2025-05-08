import { AppShellMain } from "@mantine/core";
import { BusinessSearch } from "../modules/UserDashboard/BusinessSearch/BusinessSearch";

export function UserDashboard() {
  return (
    <AppShellMain>
      <BusinessSearch />
    </AppShellMain>
  );
}
