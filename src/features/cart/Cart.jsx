import React from "react";
import CartItem from "./CartItem";

// const cart = [{ title, image, price, category, id }];
const cart = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
];

function Cart() {
  return (
    <div>
      <ul>
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

export default Cart;
