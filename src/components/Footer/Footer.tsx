import { NavItem } from "../Header";

export const Footer = () => {
  return (
    <>
      <footer className="h-[514px] bg-[#412F22] text-white">
    <div>obrazek</div>
    <h1 className="uppercase">subskrybuj</h1>
    <h3>Bądź pierwszym, który się dowie o naszych produktach</h3>
    <input></input>
    <button className="bg-[#46AA42]">subskrybuj</button>
    <div>
        <ul>
            <li>facebook</li>
            <li>instagram</li>
            <li>linkedin</li>
            <li>twitter</li>
            <li>youtube</li>
        </ul>
    </div>

    <div>
    <ul className="flex">
        <NavItem  to="/about-us">O nas</NavItem >
        <NavItem  to="/products">Produkty</NavItem >
        <NavItem  to="/contact">Kontakt</NavItem >
        <NavItem  to="/term-of-use">Warunki użytkowania</NavItem >
        <NavItem  to="/privacy policy">Polityka prywatności</NavItem >
      </ul>

    </div>

      </footer>
    </>
  );
};
