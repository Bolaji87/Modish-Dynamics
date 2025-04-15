import React from "react";
import { Link } from "react-router-dom";

function CategoriesBar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-sm border border-slate-400 px-7 py-4 text-xs font-medium capitalize sm:flex-nowrap sm:text-sm sm:font-semibold">
      <Link className="px-4 py-3 hover:rounded-md hover:bg-slate-100 hover:px-4 hover:py-3">
        All
      </Link>
      <Link className="px-4 py-3 hover:rounded-md hover:bg-slate-100 hover:px-4 hover:py-3">
        Men's clothing
      </Link>
      <Link className="px-4 py-3 hover:rounded-md hover:bg-slate-100 hover:px-4 hover:py-3">
        Women's clothing
      </Link>
      <Link className="px-4 py-3 hover:rounded-md hover:bg-slate-100 hover:px-4 hover:py-3">
        Jewelery
      </Link>
      <Link className="px-4 py-3 hover:rounded-md hover:bg-slate-100 hover:px-4 hover:py-3">
        electronics
      </Link>
    </div>
  );
}

export default CategoriesBar;
