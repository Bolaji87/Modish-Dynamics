import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../utils";
import ProductCard from "../../components/product-card/ProductCard";
import "./products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    const getProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetchProducts();
        setProducts(response);
      } catch (e) {
        console.error("There was an error fetching products", e);
      } finally {
        setIsLoading(false);
      }
    };
    getProducts();
  }, []);

  return (
    <React.Fragment>
      <div>
        <span> All</span>
        <span> Men's</span>
        <span> Women's</span>
      </div>
      <div className="products-cont">
        {products.length > 0 ? (
          products.map(
            (product) =>
              product.category !== "jewelery" &&
              product.category !== "electronics" && (
                <ProductCard key={product.id} data={product} />
              )
          )
        ) : isLoading ? (
          <p>Please wait loading...</p>
        ) : (
          ""
        )}
      </div>
    </React.Fragment>
  );
};

export default Products;
