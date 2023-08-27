import { LiHTMLAttributes } from "react";
import { NavLink, To } from "react-router-dom";

export interface MediaItemProps extends LiHTMLAttributes<HTMLLIElement> {
  to: To;
}

export const MediaItem = (props: MediaItemProps) => {

const {children, to, ...other} = props;

  return (
    <li className="p-4" {...other}>
      <NavLink to={to}>{children}</NavLink>
    </li>
  );
};
