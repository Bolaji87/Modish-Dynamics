import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";

export const appRoute = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/cart",
    component: Cart,
  },
];
