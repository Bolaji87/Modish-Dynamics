/* eslint-disable react/prop-types */
import React from "react";

import UpdateCartQuantity from "./UpdateCartQuantity";

export default function CartItem({ item }) {
  const { image, description, title: name, id, price, quantity } = item;

  return (
    <li className="flex flex-col overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-300 md:flex-row">
      <div className="w-full md:w-1/2">
        <img
          className="h-48 w-full object-cover object-top dark:brightness-75 md:h-full"
          src={image}
          alt={name}
        />
      </div>
      <div className="flex w-full flex-col justify-between bg-gray-50 p-4 dark:bg-gray-400 md:w-1/2">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{description}</p>
          <p className="text-md font-bold text-gray-800">#{price}</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <UpdateCartQuantity id={id} quantity={quantity} />
        </div>
      </div>
    </li>
  );
}
