import React from "react";
import Loader from "../../UI/Loader/Loder";
import styles from "./Cart.module.css";
import { useCart } from "../../contexts/CartContext";

function Cart() {
  const { cart, totalAmount, onDeleteItem } = useCart();

  return (
    <div className={styles.cont}>
      <ul className={styles.cartList}>
        {cart.length > 0 ? (
          cart.map((item) => (
            <li className={styles.cartItem} key={item.id}>
              <p className={styles.title}>{item.title}</p>
              <img className={styles.image} src={item.image} alt={item.title} />
              <p>$ {item.price}</p>
              <button onClick={() => onDeleteItem(item.id)}>Remove ❌</button>
            </li>
          ))
        ) : (
          <Loader message="Your Cart is empty, start adding items to your cart" />
        )}
      </ul>

      <p>$ {Math.round(totalAmount) || ""}</p>
    </div>
  );
}

export default Cart;
