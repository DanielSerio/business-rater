import type { City } from "./location.types";

export type Business = {
  id: number;
  name: string;
  description: string | null;
  profileImageId: number | null;
  websiteUrl: string | null;
  cityId: number;

  City?: City;
};