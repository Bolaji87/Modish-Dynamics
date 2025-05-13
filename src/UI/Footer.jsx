import React from "react";

function Footer() {
  const today = new Date();

  return (
    <footer className="flex justify-center gap-2 bg-gray-50 px-4 py-3 text-sm font-medium text-stone-700 sm:text-xl sm:font-semibold">
      <p>Modish D &copy;{today.getFullYear()} </p>
      <span> built by sakabolaji77@gmail.com</span>
    </footer>
  );
}

export default Footer;
