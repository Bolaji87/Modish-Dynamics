import React from "react";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavModal from "./NavModal";
import ListCart from "./ListCart";
import HamburgerMenu from "./HamburgerMenu";
import ToggleDarkMode from "./ToggleDarkMode";

import { useToggleModal } from "../hooks/useToggleModal";
import { useSelector } from "react-redux";
import { selectCartCount } from "../features/cart/cartSlice";

function Header() {
  const totalItems = useSelector(selectCartCount);
  const { onToggleModal, toggleShowModalMenu } = useToggleModal();
  return (
    <header className="max-7xl sticky top-0 z-50 m-auto flex w-full items-center justify-between gap-5 bg-gray-50 px-8 py-3 text-sm font-medium text-stone-700 shadow-md dark:bg-gray-600 dark:text-gray-50 sm:font-semibold">
      <Logo />
      <nav className="relative flex items-center gap-2">
        <NavLinks />

        <ToggleDarkMode />
        <div
          onClick={onToggleModal}
          className="relative block px-1 py-1 text-4xl font-semibold sm:hidden"
        >
          <HamburgerMenu toggleMenu={toggleShowModalMenu} />
          {!!totalItems > 0 && (
            <div
              onClick={onToggleModal}
              className="absolute right-[-10px] top-1 text-xs"
            >
              <ListCart />
            </div>
          )}
        </div>

        <div className="absolute right-[-20px] top-[58px]">
          {toggleShowModalMenu && <NavModal closeModal={onToggleModal} />}
        </div>
      </nav>
    </header>
  );
}

export default Header;
