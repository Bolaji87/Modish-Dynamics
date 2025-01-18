import React from "react";
import { Link } from "react-router-dom";
import { PiShoppingCartThin } from "react-icons/pi";

import "./navbar.css"; // Importing the styles
import Logo from "../logo/Logo";
import Login from "../login/Login";
import { useCart } from "../../contexts/CartContext";

const Navbar = () => {
  const { numberOfItems } = useCart();

  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <Logo className="logo" />
        <nav className="navbar">
          <ul className="navbar-menu">
            <li className="navbar-item">
              <Link to={"/"} className="navbar-link">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/products" className="navbar-link">
                Products
              </Link>
            </li>
            <li className="navbar-item">
              <a href="/about" className="navbar-link">
                About us
              </a>
            </li>
            <li className="navbar-item">
              <a href="/cart" className="navbar-link">
                <span>{numberOfItems}</span>
                <PiShoppingCartThin className="shop-cart" />
              </a>
            </li>
          </ul>
        </nav>

        <Login />
      </div>
    </div>
  );
};

export default Navbar;
