import Home from "../pages/Home/Home";
import Products from "../pages/product/Products";
import Cart from "../pages/cart/Cart";

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
