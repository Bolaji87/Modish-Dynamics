import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

const initialCartState = {
  totalAmount: 0,
  numberOfItems: 0,
  cartItems: [],
};

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Load from localStorage on initialization
    const savedCart = window.localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : initialCartState;
  });
  const cartItemsCount = cartItems.numberOfItems;

  useEffect(() => {
    window.localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems.cartItems,
        totalAmount: cartItems.totalAmount,
        numberOfItems: cartItems.numberOfItems,
        cartItemsCount,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("Cart context was used outside of cart provider");
  return context;
};

export { CartProvider, useCart };
