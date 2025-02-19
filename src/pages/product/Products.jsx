import React, { useState } from "react";
import styles from "./Products.module.css";
import { BASE_URL } from "../../UI/utils";

function Products() {
  const [products, setProducts] = useState([]);

  return (
    <div className={styles["products-cont"]}>
      <p>products</p>
    </div>
  );
}

export default Products;
