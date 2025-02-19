import React from "react";
import { CgDarkMode } from "react-icons/cg";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.header}>
      <h1>Modish D</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="cart">cart</Link>
          </li>
        </ul>
      </nav>
      <CgDarkMode />
    </header>
  );
}

export default Navbar;
