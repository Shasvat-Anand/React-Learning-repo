import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex flex-row gap-4 items-center place-content-evenly bg-black p-4 text-xl mb-3 text-orange-400">
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/paste">All Paste</NavLink>
    </div>
  );
};

export default NavBar;
