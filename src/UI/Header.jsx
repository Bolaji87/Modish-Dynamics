import React, { useState } from "react";
import { Link } from "react-router-dom";

import NavLinks from "./NavLinks";
import Button from "./Button";
import { HiMiniXMark, HiOutlineBars4 } from "react-icons/hi2";
import { useToggleHamburger } from "../hooks/useToggleHamburger";
import NavModal from "./NavModal";
import ToggleDarkMode from "./ToggleDarkMode";

function Header() {
  const { onToggleShow, toggleShowMenu } = useToggleHamburger();
  return (
    <header className="max-7xl sticky top-0 z-50 m-auto flex w-full items-center justify-between gap-5 bg-gray-50 px-8 py-3 text-sm font-medium text-stone-700 shadow-md sm:font-semibold dark:bg-gray-600 dark:text-gray-50">
      <Link
        to="/"
        // className="p-0 text-sm capitalize text-indigo-600 sm:text-xl"
        className="w-max max-w-[150px] text-base capitalize text-indigo-600 sm:text-xl"
      >
        Modish styles
      </Link>
      <nav className="relative flex items-center gap-2">
        <NavLinks />
        <Button
          className="w-max rounded-md bg-indigo-600 px-4 py-2 text-sm text-white transition hover:bg-indigo-700 sm:px-6 sm:text-base"
          to="/sign-in"
        >
          Sign In
        </Button>
        <div
          onClick={onToggleShow}
          className="block px-1 py-1 text-4xl font-semibold sm:hidden"
        >
          {toggleShowMenu ? (
            <HiMiniXMark className="h-full text-indigo-600" />
          ) : (
            <HiOutlineBars4 className="h-full text-indigo-600" />
          )}
        </div>

        <ToggleDarkMode />

        <div className="absolute right-[-20px] top-[58px]">
          {toggleShowMenu && <NavModal closeModal={onToggleShow} />}
        </div>
      </nav>
    </header>
  );
}

export default Header;
