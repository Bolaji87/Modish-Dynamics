import React from "react";
import { CgDarkMode } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Navbar.module.css";
import { useCart } from "../../contexts/CartContext";

function Navbar() {
  const { numItems } = useCart();
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <h1>Modish D</h1>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <a to="/about">about</a>
          </li>
          <li>
            <Link to="/products">products</Link>
          </li>
          <li role="button" onClick={() => navigate("/cart")}>
            <Link to="/cart">add to cart</Link>
            <div className={styles.cartLiChild}>
              <MdOutlineShoppingCart className={styles.cartIcon} />
              <span className={styles.numItems}> {numItems || ""}</span>
            </div>
          </li>
        </ul>
      </nav>

      <button className={styles.darkModeButton}>
        <CgDarkMode />
      </button>
    </header>
  );
}

export default Navbar;
