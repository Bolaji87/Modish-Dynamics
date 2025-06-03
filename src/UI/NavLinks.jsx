import React from "react";
import { HiShoppingCart } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { selectCartCount } from "../features/cart/cartSlice";
import ListCart from "./ListCart";
import Button from "./Button";

function NavLinks() {
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
    <div className="hidden items-center justify-between gap-2 sm:flex sm:gap-3">
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
      <ListCart />
      <Button
        className="w-max rounded-md bg-indigo-600 px-4 py-2 text-sm text-white transition hover:bg-indigo-700 sm:px-6 sm:text-base"
        to="/sign-in"
      >
        Sign In
      </Button>
    </div>
  );
}

export default NavLinks;
