import React from "react";
import { BRAND_NAME } from "../utils/utils";

function Footer() {
  const today = new Date();

  return (
    <footer className="flex justify-center gap-2 bg-gray-200 px-4 py-3 text-sm font-medium text-stone-700 shadow-md sm:text-lg sm:font-semibold">
      <p>
        {BRAND_NAME} &copy;{today.getFullYear()}{" "}
      </p>
      <span> built by sakabolaji77@gmail.com</span>
    </footer>
  );
}

export default Footer;
