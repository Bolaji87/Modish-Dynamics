import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();

  function pathMatchRoute(path) {
    if (location.pathname === path) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-5 bg-gray-50 px-8 py-3 text-sm font-medium text-stone-700 shadow-md sm:font-semibold">
      <Link
        to="/"
        className="p-0 text-sm capitalize italic text-orange-600 sm:text-2xl"
      >
        D Modish
      </Link>
      <nav className="flex items-center gap-1 sm:gap-3">
        <Link
          className={`border-b-2 py-2 transition-all duration-300 ease-in-out ${pathMatchRoute("/") ? "border-b-yellow-600" : "border-b-transparent"}`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`border-b-2 py-2 transition-all duration-300 ease-in-out ${pathMatchRoute("/products") ? "border-b-yellow-600" : "border-b-transparent"}`}
          to="/products"
        >
          Products
        </Link>
        <Link
          className={`border-b-2 py-2 transition-all duration-300 ease-in-out ${pathMatchRoute("/about") ? "border-b-yellow-600" : "border-b-transparent"}`}
          to="/about"
        >
          About
        </Link>
        <Link
          className={`border-b-2 py-2 transition-all duration-300 ease-in-out ${pathMatchRoute("/cart") ? "border-b-yellow-600" : "border-b-transparent"}`}
          to="/cart"
        >
          Cart
        </Link>
        <Link
          className="rounded-md bg-yellow-600 px-3 py-2 text-gray-50 sm:px-5"
          to="/sign-in"
        >
          Sign In
        </Link>
      </nav>
    </header>
  );
}

export default Header;
