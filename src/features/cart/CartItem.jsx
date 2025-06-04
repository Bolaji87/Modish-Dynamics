/* eslint-disable react/prop-types */
import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import {
  decreaseCartQuantity,
  deleteCartItem,
  increaseCartQuantity,
} from "./cartSlice";
import { HiTrash } from "react-icons/hi2";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

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
          <div className="flex items-center gap-2">
            <Button
              onclick={() => dispatch(decreaseCartQuantity(id))}
              className="h-8 w-8 rounded bg-gray-200 font-bold hover:bg-gray-300 dark:bg-gray-600"
            >
              -
            </Button>
            <span className="text-md font-bold">{quantity}</span>
            <Button
              onclick={() => dispatch(increaseCartQuantity(id))}
              className="h-8 w-8 rounded bg-gray-200 font-bold hover:bg-gray-300 dark:bg-gray-600"
            >
              +
            </Button>

            <Button
              onclick={() => dispatch(deleteCartItem(id))}
              className="ml-28 inline-flex items-center justify-center rounded-md bg-red-50 p-2 text-red-600 transition hover:bg-red-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
            >
              <HiTrash className="text-2xl" />
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
}
