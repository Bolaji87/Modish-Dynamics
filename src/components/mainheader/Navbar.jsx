import React from "react";
import { CgDarkMode } from "react-icons/cg";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.header}>
      <h1>Modish D</h1>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">cart</a>
          </li>
        </ul>
      </nav>
      <CgDarkMode />
    </header>
  );
}

export default Navbar;
