import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

import Button from "../Button";
import "./login.css";

const Login = ({ children }) => {
  return (
    <div className="login">
      <Button> Login</Button>
      <RxHamburgerMenu className="hamburger-menu" />
    </div>
  );
};

export default Login;
