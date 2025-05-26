import React from "react";
import { useSearchParams } from "react-router-dom";

function FilterCategories() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleFilterCategory(value) {
    searchParams.set("category", value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex justify-center gap-3 bg-yellow-600 py-3 text-lg font-semibold text-gray-100">
      <button
        onClick={() => handleFilterCategory("all")}
        className="cursor-pointer rounded-md px-3 py-2 hover:bg-gray-100 hover:text-stone-700"
      >
        All
      </button>
      <button
        onClick={() => handleFilterCategory("men's clothing")}
        className="cursor-pointer rounded-md px-3 py-2 hover:bg-gray-100 hover:text-stone-700"
      >
        Men's clothing
      </button>
      <button
        onClick={() => handleFilterCategory("women's clothing")}
        className="cursor-pointer rounded-md px-3 py-2 hover:bg-gray-100 hover:text-stone-700"
      >
        Women's clothing
      </button>
    </div>
  );
}

export default FilterCategories;
