import {
  UserIcon,
  SparklesIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

export const NavIcon = () => {
  return (
    <ul className="flex">
      <li className="p-5 active:text-[#FCFE7F]">
        <MagnifyingGlassIcon className="w-6 h-6 " />
      </li>
      <li className="p-5 active:text-[#FCFE7F]">
        <SparklesIcon className="w-6 h-6 " />
      </li>
      <li className="p-5 active:text-[#FCFE7F]">
        <UserIcon className="w-6 h-6 " />
      </li>
    </ul>
  );
};
