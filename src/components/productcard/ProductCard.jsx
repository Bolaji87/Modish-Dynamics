/* eslint-disable react/prop-types */
import React from "react";
import styles from "./productcard.module.css";
import { useCart } from "../../contexts/CartContext";

function ProductCard({ product }) {
  const { onAddItemToCart } = useCart();

  const { category, title, image, price, description, id } = product;

  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        <img className={styles.image} src={image} alt={title} />
        <p className={styles.price}>$ {price}</p>
        <button
          onClick={() =>
            onAddItemToCart({ category, title, image, price, description, id })
          }
          className={styles.btn}
        >
          Add to cart
        </button>
      </div>
    </>
  );
}

export default ProductCard;
