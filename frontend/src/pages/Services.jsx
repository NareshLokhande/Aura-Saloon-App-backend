import React, { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/css/Home.css";

export function Services() {
  const [cartItems, setCartItems] = useState([]);
  const [Services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/Services")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error fetching Services:", error));
  }, []);

  const handleAddToCart = (item) => {
    toast.success(`${item.name} added to cart!`);

    const existingItem = cartItems.find(
      (cartItem) => cartItem._id === item._id
    );
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const handleViewCart = () => {
    navigate("/cart", { state: { cartItems } });
  };

  return (
    <>
      <ToastContainer />
      <h1 className="Services">Our Services</h1>
      <div className="container" style={{ marginTop: "10px" }}>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {Services.map((product) => (
            <ItemCard
              key={product._id}
              imageURL={product.image}
              title={product.name}
              text={product.description}
              category={product.category}
              price={product.price}
              addToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>
      </div>
      <div className="view-cart-button">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleViewCart}
        >
          View Cart
        </button>
      </div>
    </>
  );
}
