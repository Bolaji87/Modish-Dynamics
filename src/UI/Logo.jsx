import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex w-max max-w-fit items-center gap-2 text-xs font-bold capitalize text-indigo-600 dark:text-indigo-800 sm:text-xl"
    >
      <img
        className="text-indigo-6800 h-7 w-7 rounded-full bg-indigo-800 object-cover object-center text-2xl font-bold"
        src="./logo.png"
        alt="logo"
      />{" "}
      <span className="hidden w-max sm:inline-block">Modish styles</span>
    </Link>
  );
}
