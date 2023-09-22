import { FarmData } from "./components/FarmData";
import { PasswordChange } from "./components/PasswordChange";
import { YourProducts } from "./components/YourProducts";

// export interface TabProps extends TabsPagesProps {
//     tabInfo: TabsPagesProps[];
//     onTabChange: (selectedIndex: number) => void
// }

export const TabsPages = [
  {
    label: "Dane Gospodarstwa",
    element: <FarmData />,
  },
  {
    label: "Zmiana hasła",
    element: <PasswordChange />,
  },
  {
    label: "Twoje Produkty",
    element: <YourProducts />,
  },
];
