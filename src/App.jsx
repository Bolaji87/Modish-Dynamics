import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./UI/AppLayout";
import Home from "./features/main/Home";
import Error from "./UI/Error";
import Products, {
  loader as productsLoader,
} from "./features/products/Products";
import Cart from "./features/cart/Cart";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        element: <Home />,
        path: "/",
        errorElement: <Error />,
      },
      {
        element: <Products />,
        path: "/products",
        loader: productsLoader,
        errorElement: <Error />,
      },
      {
        element: <Cart />,
        path: "/cart",
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
