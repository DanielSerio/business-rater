import {
  AppShellHeader,
  Button,
  Group,
  Menu,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { HeaderToolbar } from "./HeaderToolbar";
import { useAuth } from "../../../hooks/useAuth";
import { useProfileImg } from "../../../hooks/useProfileImg";
import { AvatarImg } from "../../user/AvatarImg";
import {
  TbContrast,
  TbDashboard,
  TbLogout,
  TbMenu2,
  TbShield,
} from "react-icons/tb";
import { useNavigate } from "@tanstack/react-router";

export function ProtectedHeader() {
  const auth = useAuth()!;
  const img = useProfileImg(auth?.img);
  const navigate = useNavigate();
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <AppShellHeader h={60}>
      <HeaderToolbar moduleRoot="/dashboard">
        <Group>
          <AvatarImg
            img={img.data?.img}
            username={auth.unm ?? null}
            email={auth.eml}
          />
          <Menu>
            <Menu.Target>
              <Button px={0} fz="h1" variant="subtle" color="gray">
                <TbMenu2 />
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Divider></Menu.Divider>
              <Menu.Item
                rightSection={<TbDashboard />}
                onClick={() => navigate({ to: "/dashboard" })}
              >
                <Text>Dashboard</Text>
              </Menu.Item>
              {auth.rol === "ADMIN" && (
                <>
                  <Menu.Item
                    variant="subtle"
                    color="orange"
                    rightSection={<TbShield />}
                    onClick={() => navigate({ to: "/admin" })}
                  >
                    <Text>Admin Dashboard</Text>
                  </Menu.Item>
                  <Menu.Divider></Menu.Divider>
                </>
              )}
              <Menu.Item
                variant="subtle"
                rightSection={<TbContrast />}
                onClick={toggleColorScheme}
              >
                <Text>Theme Mode</Text>
              </Menu.Item>
              <Menu.Divider></Menu.Divider>
              <Menu.Item
                color="red"
                variant="subtle"
                rightSection={<TbLogout />}
              >
                <Text>Log out</Text>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </HeaderToolbar>
    </AppShellHeader>
  );
}
