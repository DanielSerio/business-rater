import { Avatar } from "@mantine/core";

export interface AvatarImage {
  id: number;
  uploadedById: string;
  aspect: number;
  path: string;
  filename: string;
  extension: string;
}

export interface AvatarImgProps {
  img: null | AvatarImage;
  username: string | null;
  email: string;
}

function constructImageSource(img?: AvatarImage | null): string | undefined {
  if (!img) {
    return undefined;
  }

  return `${img.path}/${img.filename}.preview.${img.extension}`;
}

export function AvatarImg({ img, username, email }: AvatarImgProps) {
  const alt = `Profile image`;

  if (img) {
    return <Avatar radius="xl" src={constructImageSource(img)} alt={alt} />;
  }

  if (username) {
    return <Avatar radius="xl" name={username} color="initials" />;
  }

  return <Avatar radius="xl" name={email} color="initials" />;
}
