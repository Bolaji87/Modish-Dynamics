import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useCart } from "../contexts/CartContext";

function Navbar() {
  const { numItems } = useCart();
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between bg-gray-100 px-8 py-3 text-sm font-medium uppercase text-stone-900 sm:font-semibold">
      <Link to="/" className="capitalize italic sm:text-xl">
        Modish D
      </Link>
      <nav className="flex items-center gap-1 sm:gap-3">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
}

export default Navbar;
