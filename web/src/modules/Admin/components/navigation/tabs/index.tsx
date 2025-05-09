import { TbBuildingSkyscraper, TbFlag } from "react-icons/tb";
import { MdLocationCity } from "react-icons/md";
import { PiMapPinAreaBold } from "react-icons/pi";

import { BusinessesTab } from "./BusinessesTab";
import { CountriesTab } from "./CountriesTab";
import { CitiesTab } from "./CitiesTab";
import { StatesTab } from "./StatesTab";

export const ADMIN_TABS = [
  {
    name: "businesses",
    label: "Businesses",
    icon: TbBuildingSkyscraper,
    component: BusinessesTab,
  },
  {
    name: "countries",
    label: "Countries",
    icon: TbFlag,
    component: CountriesTab,
  },
  {
    name: "states",
    label: "States/Provinces",
    icon: PiMapPinAreaBold,
    component: StatesTab,
  },
  {
    name: "cities",
    label: "Cities",
    icon: MdLocationCity,
    component: CitiesTab,
  },
] as const;
