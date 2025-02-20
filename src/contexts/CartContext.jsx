import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const cartItems = {
  totalAmount: 0,
  cart: [],
};

function CartProvider({ children }) {
  const [{ totalAmount, cart }, setCartItems] = useState(cartItems);
  const numItems = cart.length;

  return (
    <CartContext.Provider value={{ totalAmount, numItems, cart, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("CartContext was used outside of CartProvider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { CartProvider, useCart };
