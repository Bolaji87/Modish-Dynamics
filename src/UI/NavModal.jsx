import React from "react";
import {
  HiHome,
  HiInformationCircle,
  HiMoon,
  HiShoppingBag,
  HiShoppingCart,
  HiSun,
} from "react-icons/hi2";

import { Link } from "react-router-dom";
import { useDarkMode } from "../contexts/DarkModeContext";
import ListCart from "./ListCart";

function NavModal({ closeModal }) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex h-[370px] w-72 flex-col items-center gap-4 rounded-md bg-gray-50 px-6 py-8 pt-6 capitalize shadow-lg dark:bg-gray-700 dark:text-gray-50">
      <Link
        className={`flex items-center gap-1.5 py-3 transition-all duration-300 ease-in-out hover:rounded hover:bg-gray-100 hover:px-20 hover:py-3 dark:hover:bg-gray-600`}
        to="/"
        onClick={closeModal}
      >
        <HiHome /> Home
      </Link>
      <Link
        onClick={closeModal}
        className={`flex items-center gap-1.5 py-3 transition-all duration-300 ease-in-out hover:rounded hover:bg-gray-100 hover:px-20 hover:py-3 dark:hover:bg-gray-600`}
        to="/products"
      >
        <HiShoppingBag /> Products
      </Link>
      <Link
        onClick={closeModal}
        className={`flex items-center gap-1.5 py-3 transition-all duration-300 ease-in-out hover:rounded hover:bg-gray-100 hover:px-20 hover:py-3 dark:hover:bg-gray-600`}
        to="/about"
      >
        <HiInformationCircle /> About
      </Link>

      <ListCart
        // styles="hover:rounded hover:bg-gray-100  hover:px-20 hover:py-3 dark:hover:bg-gray-600"
        styles=""
        onclick={closeModal}
      />

      <Link className="flex w-max gap-1 py-3 text-sm capitalize hover:rounded hover:bg-gray-100 hover:px-16 hover:py-3 dark:hover:bg-gray-600">
        {isDarkMode ? (
          <>
            <HiSun className="text-lg" onClick={toggleDarkMode} />
            <span onClick={toggleDarkMode}>light mode</span>
          </>
        ) : (
          <>
            <HiMoon className="text-lg" onClick={toggleDarkMode} />
            <span onClick={toggleDarkMode}>dark mode</span>
          </>
        )}
      </Link>
    </div>
  );
}

export default NavModal;
