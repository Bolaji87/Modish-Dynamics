/* eslint-disable react/prop-types */
import React from "react";

function ProductCard({ product }) {
  const { title, image, price, category, id } = product;

  function handleAddToCart() {
    const newItem = {
      title,
      image,
      price,
      id,
      category,
    };
  }

  return (
    <li className="flex w-80 max-w-[800px] flex-col items-center gap-1 rounded-xl bg-white p-6 shadow-custom transition-shadow duration-300 hover:shadow-lg">
      <img src={image} alt={title} className="h-72 w-64 object-fill" />
      <div>
        <p>{title}</p>
        <div className="mt-3 flex items-center justify-center text-lg font-medium sm:gap-4">
          <p>{price}</p>
          <button className="rounded-xl bg-blue-600 px-5 py-2">
            Add to cart
          </button>
        </div>
      </div>
    </li>
  );
}

export default ProductCard;
