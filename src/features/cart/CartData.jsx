import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

import { selectCart, selectCartCount, selectCartTotal } from "./cartSlice";

import CartSummary from "./CartSummary";
import Button from "../../UI/Button";

export default function CartData() {
  const cart = useSelector(selectCart);
  const totalItems = useSelector(selectCartCount);
  const totalAmount = useSelector(selectCartTotal);

  return (
    <section className="mx-auto min-h-screen w-full max-w-7xl rounded bg-gray-50 px-6 py-10 dark:rounded dark:bg-gray-700">
      {!cart?.length ? (
        <div className="f flex h-96 flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-semibold text-gray-600 dark:text-gray-50">
            Your cart 🛒 is empty
          </h1>
          <Button
            to="/products"
            className="rounded-md bg-indigo-600 px-5 py-3 text-xl font-semibold capitalize shadow-md"
          >
            continue shopping
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-8 lg:flex-row">
          <ul className="flex flex-1 flex-col gap-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>

          <CartSummary totalAmount={totalAmount} totalItems={totalItems} />
        </div>
      )}
    </section>
  );
}
