import React from "react";
import { useSelector } from "react-redux";
import { selectCartCount, selectCartTotal } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Checkout() {
  const totalItems = useSelector(selectCartCount);
  const totalAmount = useSelector(selectCartTotal);
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-lg rounded-lg bg-white p-8 shadow-xl">
        <div className="mb-4 flex items-center justify-between border-b pb-4">
          <h2 className="text-2xl font-bold text-gray-800">Checkout</h2>
          <button className="text-xl text-gray-500 hover:text-gray-700">
            ×
          </button>
        </div>

        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            ✅ <strong>{totalItems}</strong> items in your cart
          </p>
          <p className="text-lg text-gray-700">
            💰 Total: <strong>${totalAmount.toFixed(2)}</strong>
          </p>

          <p className="text-gray-600">
            To complete your order, please proceed with payment or contact
            support.
          </p>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={() => navigate(-1)}
            className="rounded-md border px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700"
            onClick={() => alert("Order placed!")}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
