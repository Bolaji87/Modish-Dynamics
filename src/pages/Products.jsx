import React from "react";

import ProductCard from "../features/products/ProductCard";
import FilterCategories from "../UI/FilterCategories";
import { useSearchParams } from "react-router-dom";
import ProductsData from "../features/products/ProductsData";

function Products() {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("category") || "all";

  // let filteredProducts;

  // if (filterValue === "all") filteredProducts = products;
  // if (filterValue === "men's clothing")
  //   filteredProducts = products?.filter(
  //     (product) => product.category === "men's clothing",
  //   );
  // if (filterValue === "women's clothing")
  //   filteredProducts = products.filter(
  //     (product) => product.category === "women's clothing",
  //   );

  //   return (
  //     <div>
  //       <div>
  //         <FilterCategories />
  //       </div>
  //       <div className="flex justify-center">
  //         <ul className="grid gap-x-4 gap-y-5 px-8 py-6 sm:grid-cols-2 md:grid-cols-3 md:gap-x-14 md:px-20">
  //           {products?.map((product) => (
  //             <ProductCard product={product} key={product.id} />
  //           ))}
  //         </ul>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div>
      <ProductsData />
    </div>
  );
}

export default Products;
