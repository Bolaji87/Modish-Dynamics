/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../cart/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  console.log(product);
  const { name, image, price, category, id, description } = product;

  function handleAddToCart() {
    const newItem = {
      title: name,
      image,
      price,
      id,
      category,
    };

    dispatch(addCartItem(newItem));
    console.log(newItem);
  }

  return (
    <li className="relative flex h-[390px] w-64 flex-col justify-between gap-6 rounded-md bg-gray-50 px-0 py-0 pt-1 shadow-md transition duration-300 ease-in-out">
      <div className="flex h-[80%] w-64 justify-center bg-gray-50 pt-0.5">
        <img
          src={image}
          alt={name}
          className="h-full w-full rounded-sm bg-gray-50 object-cover object-center shadow-lg"
        />
      </div>
      <div className="flex items-center justify-between gap-10 bg-gray-200 p-1.5">
        <p className="font-bold">#{price}</p>
        <button className="rounded-md bg-yellow-600 px-3 py-1.5 text-sm font-bold text-gray-50">
          Add to cart
        </button>
      </div>
      <p className="absolute bottom-12 left-[63px] text-center text-base font-semibold">
        {name}
      </p>
    </li>
  );
}

export default ProductCard;
