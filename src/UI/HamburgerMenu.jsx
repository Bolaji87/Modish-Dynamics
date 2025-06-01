import React from "react";
import { HiMiniXMark, HiOutlineBars4 } from "react-icons/hi2";

function HamburgerMenu({ toggleMenu }) {
  return (
    <>
      {/* <div className="absolute right-[-15px] top-0 text-xs">{children}</div> */}
      {toggleMenu ? (
        <HiMiniXMark className="h-full text-indigo-600 dark:text-indigo-400" />
      ) : (
        <HiOutlineBars4 className="h-full text-indigo-600 dark:text-indigo-400" />
      )}
    </>
  );
}

export default HamburgerMenu;
