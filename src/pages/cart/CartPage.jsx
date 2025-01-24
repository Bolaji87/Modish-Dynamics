import React from "react";
import "./cartpage.css";
import { useCart } from "../../contexts/CartContext";

const CartSummary = () => {
  const { cartItems, totalAmount, numberOfItems } = useCart();
  return <div>{cartItems.length > 0 && <h3>Total: ${totalAmount}</h3>}</div>;
};

const CartPage = () => {
  const { cartItems, setCartItems } = useCart();

  const handleDeleteItem = (id) => {
    setCartItems((cartItems) => cartItems.filter((cur) => cur.id !== id));
  };

  return (
    <div className="cart-page">
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div className="cart-page-wrapper" key={item.id}>
              <img
                className="cart-item-image"
                src={item.image}
                alt={item.title}
              />
              <div className="cart-text">
                <button>Free shipping</button>
                <h3>{item.name}</h3>
                <h2>${item.price}</h2>
                <button
                  style={{ width: "60px" }}
                  onClick={() => handleDeleteItem(item.id)}
                >
                  remove from cart
                </button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div>
          <p>Your Cart is empty start adding items to your cart...</p>{" "}
        </div>
      )}
      <CartSummary />
    </div>
  );
};

export default CartPage;
