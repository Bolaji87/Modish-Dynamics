/* eslint-disable react/prop-types */
import React from "react";
import styles from "./productcard.module.css";
import { useCart } from "../../contexts/CartContext";

function ProductCard({ product }) {
  const { category, title, image, price, description, id } = product;

  const { setCartItems } = useCart();

  function handleUpdateCart() {
    setCartItems((prevCart) => ({
      ...prevCart,
      cart: [
        ...prevCart.cart,
        {
          title,
          image,
          price,
          category,
          description,
          id,
        },
      ],
      totalAmount: prevCart.totalAmount + price,
      numItems: prevCart.cart.length,
    }));
  }

  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        <img className={styles.image} src={image} alt={title} />
        <p className={styles.price}>$ {price}</p>
        <button onClick={handleUpdateCart} className={styles.btn}>
          Add to cart
        </button>
      </div>
    </>
  );
}

export default ProductCard;
