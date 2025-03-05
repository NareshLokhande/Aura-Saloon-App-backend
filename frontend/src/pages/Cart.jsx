import React from "react";
import { useLocation } from "react-router-dom";
import "../assets/css/cart.css";

export function Cart() {
  const location = useLocation();
  const [cartItems, setCartItems] = React.useState(
    location.state?.cartItems || []
  );

  const handleQuantityChange = (index, delta) => {
    const newCartItems = cartItems
      .map((item, i) => {
        if (i === index) {
          return { ...item, quantity: item.quantity + delta };
        }
        return item;
      })
      .filter((item) => item.quantity > 0); // Remove items with quantity 0
    setCartItems(newCartItems);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className="container">
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <img
                  src={item.image}
                  className="cart-item-img"
                  alt={item.title}
                />
                <div className="cart-item-details">
                  <h5 className="cart-item-title">{item.name}</h5>
                  <p className="cart-item-text">{item.text}</p>
                  <p className="cart-item-price">₹{item.price}</p>
                  <div className="cart-item-quantity">
                    <button
                      onClick={() => handleQuantityChange(index, -1)}
                      className="btn btn-outline-dark btn-sm"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(index, 1)}
                      className="btn btn-outline-dark btn-sm"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <p>Total Items: {totalItems}</p>
            <p>Total Price: ₹{totalPrice}</p>
            <button className="btn btn-primary">Checkout</button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
}
