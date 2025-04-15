import React from "react";
import { getProducts } from "../../services/storeApi";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

function Products() {
  const products = useLoaderData();
  console.log(products);

  return (
    <div>
      <div className="text-md flex justify-center gap-3 bg-gray-400 py-3 font-semibold">
        <p>All</p>
        <p>Men's clothing</p>
        <p>Women's clothing</p>
        <p>Jewelery</p>
        <p>electronics</p>
      </div>
      <div className="flex justify-center">
        <ul className="grid grid-cols-3 gap-3 px-8 py-6">
          {products?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export async function loader() {
  const products = await getProducts();
  return products;
}
export default Products;
