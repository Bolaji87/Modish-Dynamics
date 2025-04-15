/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../cart/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { title, image, price, category, id, description } = product;

  function handleAddToCart() {
    const newItem = {
      title,
      image,
      price,
      id,
      category,
    };

    dispatch(addCartItem(newItem));
    console.log(newItem);
  }

  return (
    <li className="flex w-80 max-w-[800px] flex-col items-center gap-1 rounded-xl bg-white p-6 shadow-custom transition-shadow duration-300 hover:shadow-lg">
      <img src={image} alt={title} className="h-72 w-64 object-fill" />
      <div>
        <p>{title}</p>
        <div className="mt-3 flex items-center justify-center text-lg font-medium sm:gap-4">
          <p>{price}</p>
          <button
            onClick={handleAddToCart}
            className="rounded-xl bg-blue-600 px-5 py-2"
          >
            Add to cart
          </button>
        </div>
      </div>
    </li>
  );
}

export default ProductCard;
