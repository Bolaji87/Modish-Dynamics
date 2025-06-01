import React from "react";
import { HiMoon, HiShoppingCart, HiSun } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartCount } from "../features/cart/cartSlice";

import { useDarkMode } from "../contexts/DarkModeContext";

function NavModal({ closeModal }) {
  const totalItems = useSelector(selectCartCount);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex h-full w-72 flex-col items-center gap-4 rounded-md bg-gray-50 px-6 py-3 pt-8 uppercase dark:bg-gray-700 dark:text-gray-50">
      <Link
        className={`py-3 transition-all duration-300 ease-in-out hover:rounded hover:bg-gray-100 hover:px-28 hover:py-3 dark:hover:bg-gray-600`}
        to="/"
        onClick={closeModal}
      >
        Home
      </Link>
      <Link
        onClick={closeModal}
        className={`py-3 transition-all duration-300 ease-in-out hover:rounded hover:bg-gray-100 hover:px-[100px] hover:py-3 dark:hover:bg-gray-600`}
        to="/products"
      >
        Products
      </Link>
      <Link
        onClick={closeModal}
        className={`py-3 transition-all duration-300 ease-in-out hover:rounded hover:bg-gray-100 hover:px-28 hover:py-3 dark:hover:bg-gray-600`}
        to="/about"
      >
        About
      </Link>
      <Link
        onClick={closeModal}
        className={`relative py-3 transition-all duration-300 ease-in-out hover:rounded hover:bg-gray-100 hover:px-28 hover:py-3 dark:hover:bg-gray-600`}
        to="/cart"
      >
        <span className="text-500-300 absolute left-[-1px] top-[-12px] rounded-full bg-pink-300 px-[3px] text-[14px] font-semibold">
          {totalItems || ""}
        </span>
        {totalItems ? <HiShoppingCart /> : "Cart"}
      </Link>

      {isDarkMode ? (
        <HiSun className="text-lg" onClick={toggleDarkMode} />
      ) : (
        <HiMoon className="text-lg" onClick={toggleDarkMode} />
      )}
    </div>
  );
}

export default NavModal;
