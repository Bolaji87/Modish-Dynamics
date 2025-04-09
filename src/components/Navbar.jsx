import React from "react";
import { CgDarkMode } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

import { useCart } from "../contexts/CartContext";

function Navbar() {
  const { numItems } = useCart();
  const navigate = useNavigate();

  return (
    <header>
      <h1>Modish D</h1>
      <nav>
        <ul>
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
            <div>
              <MdOutlineShoppingCart />
              <span> {numItems || ""}</span>
            </div>
          </li>
        </ul>
      </nav>

      <button>
        <CgDarkMode />
      </button>
    </header>
  );
}

export default Navbar;
