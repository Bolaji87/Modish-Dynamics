import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const cartItems = {
  totalAmount: 0,
  numItems: 0,
  cart: [],
};

function CartProvider({ children }) {
  const [{ totalAmount, cart, numItems }, setCartItems] = useState(cartItems);

  function handleAddItemTocart({
    title,
    image,
    price,
    category,
    description,
    id,
  }) {
    setCartItems((prev) => {
      const updatedCart = [
        ...prev.cart,
        { title, image, price, category, description, id },
      ];
      return {
        ...prev,
        cart: updatedCart,
        numItems: updatedCart.length,
        totalAmount: updatedCart.reduce((sum, item) => sum + item.price, 0),
      };
    });
  }

  function handleDeleteCartItem(id) {
    setCartItems((prev) => {
      const updatedCart = prev.cart.filter((item) => item.id !== id);
      return {
        ...prev,
        cart: updatedCart,
        numItems: updatedCart.length,
        totalAmount: updatedCart.reduce((sum, item) => sum + item.price, 0),
      };
    });
  }
  return (
    <CartContext.Provider
      value={{
        totalAmount,
        numItems,
        cart,
        setCartItems,
        onDeleteItem: handleDeleteCartItem,
        onAddItemToCart: handleAddItemTocart,
      }}
    >
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
