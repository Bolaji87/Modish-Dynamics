/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  totalAmount: 0,
  numItems: 0,
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "addItem": {
      const updatedCart = [...state.cart, action.payload];
      return {
        ...state,
        cart: updatedCart,
        numItems: updatedCart.length,
        totalAmount: updatedCart.reduce((acc, item) => acc + item.price, 0),
      };
    }
    case "deleteItem": {
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
        numItems: updatedCart.length,
        totalAmount: updatedCart.reduce((acc, item) => acc + item.price, 0),
      };
    }

    default:
      throw new Error("unkwown action type");
  }
}

function CartProvider({ children }) {
  const [{ totalAmount, cart, numItems }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function handleAddItemTocart({
    title,
    image,
    price,
    category,
    description,
    id,
  }) {
    dispatch({
      type: "addItem",
      payload: { title, image, price, category, description, id },
    });
  }

  function handleDeleteCartItem(id) {
    dispatch({ type: "deleteItem", payload: id });
  }
  return (
    <CartContext.Provider
      value={{
        totalAmount,
        numItems,
        cart,
        dispatch,
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
