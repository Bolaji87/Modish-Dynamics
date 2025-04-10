import React, { useEffect, useState } from "react";

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
  return <div>Products</div>;
}

export default Products;
