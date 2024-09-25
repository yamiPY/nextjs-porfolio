import React from "react";
import NavLink from "./NavLink";

// تعريف روابط التنقل
const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const MenuIcons = () => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {navLinks.map((link, index) => (
        <li key={index} className="mb-2">
          <NavLink title={link.title} href={link.path} />
        </li>
      ))}
    </ul>
  );
};

export default MenuIcons;
