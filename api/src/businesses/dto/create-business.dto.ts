import { Business } from "@prisma/client";

export class CreateBusinessDto implements Partial<Business> {
  cityId: number;
  name: string;
  description: string | null;
  profileImageId: number | null;
  websiteUrl: string | null;
}
