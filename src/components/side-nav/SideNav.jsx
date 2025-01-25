import React from "react";
import { FaToggleOff } from "react-icons/fa";

import Button from "../Button";
import "./sidenav.css";
import { useNavigate } from "react-router-dom";

const SideNav = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="side-nav">
      <Button onClick={() => navigate("/login")}> Login</Button>
      <FaToggleOff className="toggle-dark-mode" />
    </div>
  );
};

export default SideNav;
