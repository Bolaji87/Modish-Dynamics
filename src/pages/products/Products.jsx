import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../utils";

import "./products.css";
import ProductCard from "../../components/product-card/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function getProducts() {
      setIsLoading(true);
      const response = await fetchProducts();
      setProducts(response);
      console.log(response);
      setIsLoading(false);
    }
    getProducts();
  }, []);

  return (
    <div className="products">
      <ul>
        {products.length > 0 ? (
          products.map(
            (product) =>
              product.category !== "electronics" &&
              product.category !== "jewelery" && (
                <ProductCard key={product.id} product={product} />
              )
          )
        ) : (
          <div className="error">
            <h2>{isLoading ? "please wait loading products..." : ""}</h2>
          </div>
        )}
      </ul>
    </div>
  );
}

export default Products;
