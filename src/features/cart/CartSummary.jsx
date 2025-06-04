/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "./cartSlice";
import Button from "../../UI/Button";

function CartSummary({ totalAmount, totalItems }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-100 p-6 shadow-lg dark:bg-gray-300 lg:w-1/3">
      <section className="space-y-4">
        <h2 className="border-b pb-2 text-2xl font-semibold text-gray-800">
          Cart Summary
        </h2>
        <p className="text-lg text-gray-700">
          🛒 Total Items: <span className="font-bold">{totalItems}</span>
        </p>
        <p className="text-lg text-gray-700">
          💰 Total Amount:{" "}
          <span className="font-bold">#{totalAmount.toFixed(2)}</span>
        </p>
      </section>

      <div className="mt-6 flex gap-3">
        <Button
          onclick={() => dispatch(clearCart())}
          className="flex-1 rounded-md bg-red-500 px-4 py-3 text-lg font-semibold text-white transition hover:bg-red-600"
        >
          Clear Cart
        </Button>
        <Button
          onclick={() => navigate("/checkout")}
          className="flex-1 rounded-md bg-green-600 px-4 py-3 text-lg font-semibold text-white transition hover:bg-green-700"
        >
          Checkout
        </Button>
      </div>
    </div>
  );
}

export default CartSummary;
