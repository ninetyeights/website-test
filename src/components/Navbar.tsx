import NavLink from "@/components/NavLink";
import { NavItemType } from "@/interfaces";
import React from "react";

interface Props {
  nav: NavItemType[];
}

const isWide = true;

const Navbar: React.FC<Props> = ({ nav }) => {
  return (
    <nav className="flex relative">
      {nav.map((item, index) => (
        <NavLink key={index} href={item.link}>
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
