import React from "react";

import "./stylesComponents.css"; // Importing the styles
import Logo from "./Logo";
import Login from "./Login";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Logo className="logo" />
      <nav className="navbar">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/" className="navbar-link">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="/products" className="navbar-link">
              Products
            </a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-link">
              About us
            </a>
          </li>
          <li className="navbar-item">
            <a href="/cart" className="navbar-link">
              Cart
            </a>
          </li>
        </ul>
      </nav>

      <Login />
    </div>
  );
};

export default Navbar;
