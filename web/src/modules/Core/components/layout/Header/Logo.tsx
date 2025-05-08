import { Text } from "@mantine/core";
import { Link } from "@tanstack/react-router";

export interface LogoProps {
  moduleRoot?: string;
}

export function Logo({ moduleRoot }: LogoProps) {
  return (
    <Link style={{ textDecoration: "none" }} to={moduleRoot}>
      <Text
        size="xl"
        fw="bolder"
        variant="gradient"
        gradient={{
          from: "teal",
          to: "grape",
          deg: 145,
        }}
      >
        Oog
      </Text>
    </Link>
  );
}
