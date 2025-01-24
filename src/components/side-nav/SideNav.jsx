import React from "react";
import { FaToggleOff } from "react-icons/fa";

import Button from "../Button";
import "./sidenav.css";

const SideNav = ({ children }) => {
  return (
    <div className="side-nav">
      <Button> Login</Button>
      <FaToggleOff className="toggle-dark-mode" />
    </div>
  );
};

export default SideNav;
