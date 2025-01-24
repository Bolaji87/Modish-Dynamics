import React from "react";
import "./productCard.css";
import Button from "../Button";
import { useCart } from "../../contexts/CartContext";

const ProductCard = ({ data, onClick }) => {
  const { description, image, price, title: name, id } = data;

  const { setCartItems, numberOfItems } = useCart();

  const handleCartItems = () => {
    setCartItems((cur) => {
      return {
        ...cur,

        totalAmount: cur.totalAmount + price,
        numberOfItems: numberOfItems + 1,
        cartItems: [
          ...cur.cartItems,
          {
            image,
            price,
            name,
            id,
            description,
          },
        ],
      };
    });
  };

  return (
    <div className="product-card-wrapper">
      <h3>{name}</h3>
      <img className="product-img" src={image} alt={name} />

      <div className="product-card-section">
        <p>${price}</p>
        <button className="product-card-btn" onClick={handleCartItems}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
