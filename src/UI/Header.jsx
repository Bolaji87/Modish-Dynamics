import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useSelector } from "react-redux";
import { selectCartCount } from "../features/cart/cartSlice";
import { HiShoppingCart } from "react-icons/hi2";

function Header() {
  const location = useLocation();
  const totalItems = useSelector(selectCartCount);

  function pathMatchRoute(path) {
    if (location.pathname === path) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <header className="max-7xl sticky top-0 z-50 flex w-full items-center justify-between gap-5 bg-gray-50 px-8 py-3 text-sm font-medium text-stone-700 shadow-md sm:font-semibold">
      <Link
        to="/"
        // className="p-0 text-sm capitalize text-indigo-600 sm:text-xl"
        className="max-w-[150px] truncate text-base capitalize text-indigo-600 sm:text-xl md:text-2xl"
      >
        Modish styles
      </Link>
      <nav className="flex items-center justify-between gap-2 sm:gap-3">
        <Link
          className={`border-b-2 py-2 transition-all duration-300 ease-in-out ${pathMatchRoute("/") ? "border-b-indigo-600" : "border-b-transparent"}`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`border-b-2 py-2 transition-all duration-300 ease-in-out ${pathMatchRoute("/products") ? "border-b-indigo-600" : "border-b-transparent"}`}
          to="/products"
        >
          Products
        </Link>
        <Link
          className={`border-b-2 py-2 transition-all duration-300 ease-in-out ${pathMatchRoute("/about") ? "border-b-indigo-600" : "border-b-transparent"}`}
          to="/about"
        >
          About
        </Link>
        <Link
          className={`relative border-b-2 py-2 transition-all duration-300 ease-in-out ${pathMatchRoute("/cart") ? "border-b-indigo-600" : "border-b-transparent"}`}
          to="/cart"
        >
          <span className="text-500-300 absolute left-[-1px] top-[-12px] rounded-full bg-pink-300 px-[3px] text-[14px] font-semibold">
            {totalItems || ""}
          </span>
          {totalItems ? <HiShoppingCart /> : "Cart"}
        </Link>

        <Button
          className="w-max rounded-md bg-indigo-600 px-4 py-2 text-sm text-white transition hover:bg-indigo-700 sm:px-6 sm:text-base"
          to="/sign-in"
        >
          Sign In
        </Button>
      </nav>
    </header>
  );
}

export default Header;
