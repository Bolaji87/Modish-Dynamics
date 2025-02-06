import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles["main-header"]}>
      <h2>Modish dynamic XX</h2>
      <nav className={styles["main-nav"]}>
        <ul>
          <li>
            <a href="">
              <FaHome />
            </a>
          </li>
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>
              <FaUser />
            </a>
          </li>
          <li>
            <a>
              <GiShoppingCart />
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles["side-nav"]}>
        <form action="" className={styles["header-search"]}>
          <input type="search" className={styles.input} />
        </form>
        <nav className={styles["last-nav"]}>
          <div className={styles["nav-login"]}>login</div>
          <MdOutlineDarkMode className={styles["toggle-dark-mode"]} />
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
