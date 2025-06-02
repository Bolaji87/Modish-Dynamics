import React from "react";
import { HiShoppingCart } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { selectCartCount } from "../features/cart/cartSlice";
import Button from "./Button";
import { span } from "framer-motion/client";

export default function ListCart({ styles, onclick }) {
  const location = useLocation();
  const totalItems = useSelector(selectCartCount);
  function pathMatchRoute(path) {
    if (location.pathname === path) {
      return true;
    } else {
      return false;
    }
  }

  if (onclick)
    return (
      <Link
        className={`relative py-3 transition-all duration-300 ease-in-out ${styles} `}
        to="/cart"
        onClick={onclick}
      >
        <div className="text-500-300 absolute left-[-1px] top-[-12px] rounded-full bg-pink-300 px-[3px] text-[14px] font-semibold">
          {totalItems || ""}
        </div>

        <div className="flex items-center gap-2.5">
          <HiShoppingCart /> Cart
        </div>
      </Link>
    );
  if (styles)
    return (
      <Link
        className={`relative py-3 transition-all duration-300 ease-in-out ${styles && "hover:rounded hover:bg-gray-100 hover:px-20 hover:py-3 dark:hover:bg-gray-600"} `}
        to="/cart"
      >
        <div className="text-500-300 absolute left-[-1px] top-[-12px] rounded-full bg-pink-300 px-[3px] py-3 text-[14px] font-semibold hover:bg-gray-100 hover:px-20 hover:py-3">
          {totalItems || ""}

          <div className="flex items-center gap-2.5">
            <HiShoppingCart /> <span>Cart</span>
          </div>
        </div>
      </Link>
    );

  return (
    <Link
      className={`relative border-b-2 py-2 transition-all duration-300 ease-in-out ${pathMatchRoute("/cart") ? "border-b-indigo-600" : "border-b-transparent"} `}
      to="/cart"
    >
      <div className="text-500-300 absolute left-[-1px] top-[-12px] rounded-full bg-pink-300 px-[3px] text-[14px] font-semibold">
        {totalItems || ""}
      </div>
      {totalItems > 0 ? (
        <div className="mr-[0.9px] h-3 px-1">
          <HiShoppingCart />
        </div>
      ) : (
        <span>Cart</span>
      )}
    </Link>
  );
}
