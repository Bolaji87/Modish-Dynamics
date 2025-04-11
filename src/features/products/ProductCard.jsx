import React from "react";

function ProductCard({ product }) {
  const { title, image, price, category, id } = product;

  return (
    <li className="shadow-custom flex w-80 max-w-[800px] flex-col items-center gap-1 rounded-xl bg-white p-6 transition-shadow duration-300 hover:shadow-lg">
      <img src={image} alt={title} className="h-72 w-64 object-fill" />
      <div>
        <p>{title}</p>
        <div className="flex">
          <p>{price}</p>
          <button>Add to cart</button>
        </div>
      </div>
    </li>
  );
}

export default ProductCard;
