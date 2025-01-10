import { lazy } from "react";
import React from "react";

import HomePage from "../src/pages/home/HomePage.jsx";
const Products = lazy(() => import("./pages/products/Products.jsx"));

export const routes = [
  {
    path: "/",
    element: HomePage,
  },
  {
    path: "/products",
    element: Products,
  },
];
