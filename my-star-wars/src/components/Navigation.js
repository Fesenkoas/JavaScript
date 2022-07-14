import React from "react";
import { navItems } from "../utils/constants";
import NavItem from "./NavItem";

const Navigation = ({ page }) => {
  return (
    <nav className="fixed-top mt-2 ms-4">
      <ul className="nav">
        {navItems.map((item) => (
          <NavItem key={item} itemTitle={item} page={page} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
