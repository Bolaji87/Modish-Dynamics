import React from "react";
import "./productCard.css";

function ProductCard({ product }) {
  const { image, description, id, title, price, category } = product;
  console.log(title);
  return (
    <div className="product-card-cont">
      <li className="product-card-list">
        <p className="product-title">{title}</p>
        <img className="product-card-image" src={image} alt={title} />
        <span className="product-price"> ${price}</span>
        <button className="btn-add-to-cart">Add to cart</button>
      </li>
    </div>
  );
}

export default ProductCard;
