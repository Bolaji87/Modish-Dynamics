import React from "react";
import { HiMiniXMark, HiOutlineBars4 } from "react-icons/hi2";

function HamburgerMenu({ toggleMenu }) {
  return (
    <>
      {/* <div className="absolute right-[-15px] top-0 text-xs">{children}</div> */}
      {toggleMenu ? (
        <HiMiniXMark className="h-full text-indigo-600 dark:text-gray-50" />
      ) : (
        <HiOutlineBars4 className="h-full text-indigo-600 dark:text-gray-50" />
      )}
    </>
  );
}

export default HamburgerMenu;
