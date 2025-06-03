import React from "react";
import { HiShoppingCart } from "react-icons/hi2";

import { Link } from "react-router-dom";

import { HomeIcon, ShoppingBagIcon, UserIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { selectCartCount } from "../features/cart/cartSlice";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
// import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

function NavModal({ closeModal }) {
  const totalItems = useSelector(selectCartCount);

  const navLinks = [
    {
      name: "Home",
      to: "/",
      icon: <HomeIcon className="text-primary-600 h-5 w-5" />,
    },
    {
      name: "Products",
      to: "/products",
      icon: <ShoppingBagIcon className="text-primary-600 h-5 w-5" />,
    },
    {
      name: "About",
      to: "/about",
      icon: <UserIcon className="text-primary-600 h-5 w-5" />,
    },
    {
      name: "Cart",
      to: "/cart",

      icon: (
        <div className="relative">
          <HiShoppingCart className="text-primary-600 h-5 w-5" />
          {totalItems > 0 && (
            <span className="absolute -right-0.5 -top-3.5 flex h-4 w-4 items-center justify-center rounded-full bg-pink-500 text-[10px] font-bold text-white">
              {totalItems}
            </span>
          )}
        </div>
      ),
    },
    {
      name: "Sign in",
      to: "/sign-in",
      icon: <ArrowRightOnRectangleIcon className="text-primary-600 h-5 w-5" />,
    },
  ];

  return (
    <div className="flex h-[470px] w-72 flex-col items-center gap-4 rounded-md bg-gray-50 px-6 py-8 pt-6 capitalize shadow-lg dark:bg-gray-700 dark:text-gray-50">
      <ul className="mt-5 flex flex-col gap-8 text-xl">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.to}
              onClick={closeModal}
              className="flex items-center justify-start gap-3 rounded px-12 py-3 transition-all duration-300 ease-in-out hover:rounded hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              {link.icon}

              <span>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavModal;
