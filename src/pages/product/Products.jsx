import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import { BASE_URL } from "../../UI/utils";

import ProductCard from "../../components/productcard/ProductCard";
import Loader from "../../UI/Loader/Loder";
import Error from "../../UI/Error/Error";

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(function () {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        setError("");
        const response = await fetch(`${BASE_URL}/products`);
        if (!response.ok) throw new Error("Error fetching products");
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      {isLoading && <Loader message="Loading please wait..." />}
      {error && <Error errorMessage={error} />}
      <ul className={styles.products}>
        {!error &&
          !isLoading &&
          products.length > 0 &&
          products.map(
            (product) =>
              product.category !== "electronics" &&
              product.category !== "jewelery" && (
                <ProductCard product={product} key={product.id} />
              )
          )}
      </ul>
    </div>
  );
}

export default Products;
