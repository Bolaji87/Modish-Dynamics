/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../cart/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { title: name, image, price, category, id, description } = product;

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
    <li className="flex w-52 flex-col items-center justify-center bg-gray-50 px-5 py-10 shadow-md">
      <p className="py-3 text-sm font-medium">{name}</p>
      <div className="h-40 w-32 overflow-hidden">
        <img
          className="h-full w-full object-cover object-center"
          src={image}
          alt={name}
        />
      </div>
      <button>Add to cart</button>
    </li>
  );
}

export default ProductCard;
