import { NavItem } from "./NavItem";
import { NavIcons } from "./NavIcons";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <header className="sticky top-0 p-4 flex justify-between items-center h-[64px] bg-[#46AA42] text-white">
      <Logo />

      <ul className="flex">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about-us">O nas</NavItem>
        <NavItem to="/products">Produkty</NavItem>
        <NavItem to="/contact">Kontakt</NavItem>
      </ul>

      <NavIcons />
    </header>
  );
};
