import React from "react";
import { Link } from "react-router-dom";
import { PiShoppingCartThin } from "react-icons/pi";
import { FaHome } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import "./navbar.css"; // Importing the styles
import Logo from "../logo/Logo";
import { useCart } from "../../contexts/CartContext";
import SideNav from "../side-nav/SideNav";

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
                <FaHome />
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/products" className="navbar-link">
                <FaShoppingBag />
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/about" className="navbar-link">
                <FaUser />
              </Link>
            </li>
            <li className="navbar-item">
              <a href="/cart" className="navbar-link">
                <span className="num-item">{numberOfItems}</span>
                <BsCart className="shop-cart" />
              </a>
            </li>
          </ul>
        </nav>
        <SideNav />
      </div>
    </div>
  );
};

export default Navbar;
