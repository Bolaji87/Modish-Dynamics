// import React from "react";
// import { useProducts } from "./useProducts";
// import ProductCard from "./ProductCard";
// import Loader from "../../UI/Loader";

// function ProductsData() {
//   const { isLoading, products } = useProducts();

//   if (isLoading)
//     return (
//       <div className="flex h-screen items-center justify-center">
//         <Loader />
//       </div>
//     );

//   return (
//     <>
//       <div className="flex justify-center gap-4">
//         {/* <div>All</div>
//         <div>Abaya</div>
//         <div>Jalab</div> */}

//         {/* <FilterCategories /> */}
//       </div>
//       <div className="flex min-h-screen items-center justify-center">
//         <ul className="grid w-full max-w-7xl grid-cols-1 justify-items-center gap-y-3 px-10 py-10 sm:grid-cols-2 sm:gap-x-0 sm:gap-y-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
//           {products?.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

// export default ProductsData;

import { useProducts } from "./useProducts";
import ProductCard from "./ProductCard";
import Loader from "../../UI/Loader";

function ProductsData() {
  const { isLoading, products } = useProducts();

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader />
      </div>
    );

  return (
    <div className="px-4 py-10">
      <ul className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}
export default ProductsData;
