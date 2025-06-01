import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex w-max max-w-fit items-center gap-2 text-xs font-bold capitalize text-indigo-600 sm:text-xl dark:text-indigo-400"
    >
      <img
        className="h-6 w-6 rounded-full bg-indigo-600 object-cover object-center text-2xl font-bold text-indigo-600"
        src="./logo.png"
        alt="logo"
      />{" "}
      <span className="w-max">Modish styles</span>
    </Link>
  );
}
