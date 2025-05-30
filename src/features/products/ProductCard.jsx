/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../cart/cartSlice";
import Button from "../../UI/Button";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const { name, image, price, category, id, description } = product;

  function handleAddToCart() {
    const newItem = {
      title: name,
      image,
      price,
      id,
      category,
      description,
    };

    dispatch(addCartItem(newItem));
    console.log(newItem);
  }

  return (
    <li className="flex h-[400px] flex-col rounded bg-gray-100 py-2 pt-0">
      <div className="h-[80%] w-64 flex-1">
        <img
          className="h-full w-full object-cover object-center"
          src={image}
          alt={name}
        />
      </div>
      <div className="flex flex-col p-3 pb-0.5">
        <p className="mb-2 text-sm font-bold text-gray-500">{name}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-stone-900"> #{price}</span>
          <Button
            onclick={handleAddToCart}
            className="rounded-md bg-indigo-500 px-2 py-[3px] font-semibold text-gray-50 transition duration-300 ease-in-out hover:bg-indigo-700 hover:text-gray-50"
          >
            Add to cart
          </Button>
        </div>
      </div>
    </li>
  );
}

export default ProductCard;
