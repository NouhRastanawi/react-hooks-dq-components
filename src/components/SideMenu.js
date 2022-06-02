import React from "react";
import Search from "./Search.js";
import Logo from "./Logo.js";
import MenuLinks from "./MenuLinks.js";

function SideMenu() {
  return (
    <aside className="side-bar open">
      <Logo/>
      <MenuLinks/>
      <Search/>
      </aside>
  );
}

export default SideMenu;
