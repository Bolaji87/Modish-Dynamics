import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";

import {
  selectCart,
  selectCartCount,
  selectCartTotal,
  clearCart,
} from "./cartSlice";
import { useNavigate } from "react-router-dom";

export default function CartData() {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const totalItems = useSelector(selectCartCount);
  const totalAmount = useSelector(selectCartTotal);

  const navigate = useNavigate();

  return (
    <section className="mx-auto min-h-screen w-full max-w-7xl rounded bg-gray-50 px-6 py-10 dark:rounded dark:bg-gray-700">
      {!cart?.length ? (
        <div className="flex h-96 items-center justify-center">
          <h1 className="text-2xl font-semibold text-gray-600 dark:text-gray-50">
            Your cart is empty
          </h1>
        </div>
      ) : (
        <div className="flex flex-col gap-8 lg:flex-row">
          <ul className="flex flex-1 flex-col gap-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>

          {/* Cart Summary */}
          <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-100 p-6 shadow-lg lg:w-1/3 dark:bg-gray-300">
            <section className="space-y-4">
              <h2 className="border-b pb-2 text-2xl font-semibold text-gray-800">
                Cart Summary
              </h2>
              <p className="text-lg text-gray-700">
                🛒 Total Items: <span className="font-bold">{totalItems}</span>
              </p>
              <p className="text-lg text-gray-700">
                💰 Total Amount:{" "}
                <span className="font-bold">${totalAmount.toFixed(2)}</span>
              </p>
            </section>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => dispatch(clearCart())}
                className="flex-1 rounded-md bg-red-500 px-4 py-3 text-lg font-semibold text-white transition hover:bg-red-600"
              >
                Clear Cart
              </button>
              <button
                onClick={() => navigate("/checkout")}
                className="flex-1 rounded-md bg-green-600 px-4 py-3 text-lg font-semibold text-white transition hover:bg-green-700"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
