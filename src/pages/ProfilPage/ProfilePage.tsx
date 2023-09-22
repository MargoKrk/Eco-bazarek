import { Content } from "../../components";
import { Tab } from "@headlessui/react";
import { TabsPages } from "./utils";

export const ProfilePage = () => {
  // const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <Content title="Profil">
      <h1 className="mb-[36px] uppercase">Profil</h1>
      <Tab.Group>
        <Tab.List>
          {TabsPages.map((page, indx) => (
            <Tab className="px-[20px] py-[12px] mb-[25px] uppercase" key={indx}>
              {page.label}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {TabsPages.map((page, indx) => (
            <Tab.Panel key={indx}>{page.element}</Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </Content>
  );
};
