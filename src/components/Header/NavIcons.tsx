import {
  UserIcon,
  SparklesIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { NavItem } from ".";

export const NavIcons = () => {
  return (
    <ul className="flex">
      <li className="p-5">
        <MagnifyingGlassIcon className="w-6 h-6 " />
      </li>
      <li className="p-5">
        <SparklesIcon className="w-6 h-6 " />
      </li>

      <NavItem to="/profile-sign-in"><UserIcon className="w-6 h-6 " /></NavItem>

    </ul>
  );
};
