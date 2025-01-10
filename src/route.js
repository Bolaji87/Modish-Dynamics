import { lazy } from "react";
import React from "react";

import HomePage from "../src/pages/home/HomePage.jsx";
const Products = React.lazy(() => import("./pages/products/Products.jsx"));
const CartPage = React.lazy(() => import("./pages/cart/CartPage.jsx"));

export const routes = [
  {
    path: "/",
    element: HomePage,
  },
  {
    path: "/products",
    element: Products,
  },
  {
    path: "/cart",
    element: CartPage,
  },
];
