/* eslint-disable react/prop-types */
import React from "react";

export default function CartItem({ item }) {
  const { image, description, title: name, price, quantity } = item;

  return (
    <li className="flex flex-col overflow-hidden rounded-lg bg-white shadow-md md:flex-row dark:bg-gray-300">
      <div className="w-full md:w-1/2">
        <img
          className="h-48 w-full object-cover object-top md:h-full dark:brightness-75"
          src={image}
          alt={name}
        />
      </div>
      <div className="flex w-full flex-col justify-between bg-gray-50 p-4 md:w-1/2 dark:bg-gray-300">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{description}</p>
          <p className="text-md font-bold text-gray-800">${price}</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button className="h-8 w-8 rounded bg-gray-200 font-bold hover:bg-gray-300">
              -
            </button>
            <span className="text-md font-medium">{quantity}</span>
            <button className="h-8 w-8 rounded bg-gray-200 font-bold hover:bg-gray-300">
              +
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
