import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useCart } from "../contexts/CartContext";

function Navbar() {
  const { numItems } = useCart();
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between bg-sky-600 px-4 py-3 text-sm font-medium uppercase text-stone-900 sm:px-6 sm:font-semibold">
      <Link to="/" className="capitalize italic sm:text-xl">
        Modish D
      </Link>
      <nav className="flex items-center gap-1 sm:gap-3">
        <Link>Home</Link>
        <Link>Products</Link>
        <Link>About</Link>
        <Link>Cart</Link>
      </nav>
    </header>
  );
}

export default Navbar;
