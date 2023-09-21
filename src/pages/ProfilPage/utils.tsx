import { FarmData, PasswordChange, YourProducts } from "../../components";

export interface TabsPagesProps {
    path: string;
    label: string;
    element: React.ReactElement;
}

export interface TabProps extends TabsPagesProps {
    tabInfo: TabsPagesProps[];
    onTabChange: (selectedIndex: number) => void
}

export const TabsPages = [
  {
    path: "../components/farmDataPage",
    label: "Tab1",
    element: <FarmData />,
  },
  {
    path: "../components/PasswordChange",
    label: "Tab2",
    element: <PasswordChange />,
  },
  {
    path: "../components/YourProducts",
    label: "Tab3",
    element: <YourProducts />,
  },
];
