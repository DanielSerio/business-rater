import type { Business } from "./business.types";

export type Province = {
  id: number;
  code: string;
  name: string;
  countryId: number;

  Country?: Country;
  Cities?: City[];
};

export type Country = {
  id: number;
  code: string;
  name: string;

  Provices?: Province[];
};

export type City = {
  id: number;
  code: string;
  name: string;
  provinceId: number;

  Province?: Province;
  Businesses?: Business[];
};