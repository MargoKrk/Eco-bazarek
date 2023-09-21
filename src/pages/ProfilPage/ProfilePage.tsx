import { useState } from "react";
import { Content } from "../../components";
import { Tab, TabProps } from "@headlessui/react";
import { Outlet } from "react-router-dom";
import { TabsPagesProps } from "./utils";

export const ProfilePage = ({ tabInfo, onTabChange }: TabProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <Content title="Profil">
      <h1>Profil</h1>
      <Tab.Group
        selectedIndex={selectedIndex}
        onChange={(selectedIndex: number) => {
          setSelectedIndex(selectedIndex);
          onTabChange(selectedIndex);
        }}
      >
        <Tab.List className="">
          {tabInfo.map((item: TabsPagesProps) => {
            <Tab key={item.path} aria-label={item.label} name={item.label}>
              {item.label}
            </Tab>;
          })}
        </Tab.List>
        <Tab.Panels>
          {tabInfo.map((item: TabsPagesProps) => {
          <Tab.Panel key={item.path} className="bg-pink p-4">
            <Outlet />
          </Tab.Panel>
          })}
        </Tab.Panels>
      </Tab.Group>
    </Content>
  );
};
