import React from "react";
import { HiShoppingCart } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { selectCartCount } from "../features/cart/cartSlice";
import Button from "./Button";

export default function ListCart({ styles }) {
  const location = useLocation();
  const totalItems = useSelector(selectCartCount);
  function pathMatchRoute(path) {
    if (location.pathname === path) {
      return true;
    } else {
      return false;
    }
  }

  //   if (onclick)
  //     return (
  //       <Link
  //         onClick={onclick}
  //         className={`relative py-3 transition-all duration-300 ease-in-out hover:rounded hover:bg-gray-100 hover:px-28 hover:py-3 dark:hover:bg-gray-600`}
  //         to="/cart"
  //       >
  //         <span className="text-500-300 absolute left-[-1px] top-[-12px] rounded-full bg-pink-300 px-[3px] text-[14px] font-semibold">
  //           {totalItems || ""}
  //         </span>
  //         {totalItems ? <HiShoppingCart /> : "Cart"}
  //       </Link>
  //     );

  if (styles)
    return (
      <Link
        className={`relative border-b-2 py-2 transition-all duration-300 ease-in-out ${styles}`}
        to="/cart"
      >
        <div className="text-500-300 absolute left-[-1px] top-[-12px] rounded-full bg-pink-300 px-[3px] text-[14px] font-semibold">
          {totalItems || ""}
        </div>
        {totalItems ? <HiShoppingCart /> : "Cart"}
      </Link>
    );

  return (
    <Link
      className={`relative border-b-2 py-2 transition-all duration-300 ease-in-out sm:${pathMatchRoute("/cart") ? "border-b-indigo-600" : "border-b-transparent"}`}
      to="/cart"
    >
      <div className="text-500-300 absolute left-[-1px] top-[-12px] rounded-full bg-pink-300 px-[3px] text-[14px] font-semibold">
        {totalItems || ""}
      </div>
      {totalItems ? <HiShoppingCart /> : "Cart"}
    </Link>
  );
}
