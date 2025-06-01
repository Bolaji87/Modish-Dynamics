import React from "react";
import { BRAND_NAME } from "../utils/utils";

function Footer() {
  const today = new Date();

  return (
    <footer className="flex justify-center gap-2 bg-gray-200 px-4 py-3 text-xs font-bold text-stone-700 shadow-md sm:text-sm sm:font-semibold dark:bg-gray-600 dark:text-gray-50">
      <p>
        {BRAND_NAME} &copy;{today.getFullYear()}{" "}
      </p>
      <span> built by sakabolaji77@gmail.com</span>
    </footer>
  );
}

export default Footer;
