import { LiHTMLAttributes } from "react";
import { NavLink, To } from "react-router-dom";

export interface NavItemProps extends LiHTMLAttributes<HTMLLIElement> {
  to: To;
}

export const NavItem = (props: NavItemProps) => {

const {children, to, ...other} = props;

  return (
    <li className="p-6" {...other}>
      <NavLink to={to} className={({isActive}) => isActive ? "text-[#FCFE7F]" : "text-white" }>{children}</NavLink>
    </li>
  );
};
