import React from "react";
import { getProducts } from "../services/productsApi";
import ProductCard from "../features/products/ProductCard";
import { useQuery } from "@tanstack/react-query";
import Loader from "../UI/Loader";

function Products() {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader />
      </div>
    );
  return (
    <div>
      <div className="text-md flex justify-center gap-3 bg-gray-300 py-3 font-semibold">
        <p>All</p>
        <p>Men's clothing</p>
        <p>Women's clothing</p>
        <p>Jewelery</p>
        <p>electronics</p>
      </div>
      <div className="flex justify-center">
        <ul className="grid grid-cols-3 gap-3 px-8 py-6">
          {products?.map(
            (product) =>
              product.category !== "jewelery" &&
              product.category !== "electronics" && (
                <ProductCard product={product} key={product.id} />
              ),
          )}
        </ul>
      </div>
    </div>
  );
}

export default Products;
