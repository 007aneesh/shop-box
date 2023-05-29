import React, { useState, useEffect } from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Trending from "./pages/trending";
import Categories from "./pages/categories";
import Accounts from "./pages/account";
import ProductDetails from "./components/product";
import Checkout from "./components/checkout";
function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    console.log("Added to cart");
  };
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, 0);

    return () => clearTimeout(timeout);
  }, [cartItems]);

  // remove item
  const removeFromCart = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  // remove or add by qty
  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity < 1) {
      newQuantity = 1;
    }
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;
    setCartItems(updatedCartItems);
  };
  return (
    <>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                navbar={Navbar}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                handleQuantityChange={handleQuantityChange}
                cartItems={cartItems}
              />
            }
          />
          <Route
            path="/trending"
            element={
              <Trending
                navbar={Navbar}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                handleQuantityChange={handleQuantityChange}
                cartItems={cartItems}
              />
            }
          />
          <Route
            path="/categories"
            element={
              <Categories
                navbar={Navbar}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                handleQuantityChange={handleQuantityChange}
                cartItems={cartItems}
              />
            }
          />
          <Route
            path="/accounts"
            element={
              <Accounts
                navbar={Navbar}
                removeFromCart={removeFromCart}
                handleQuantityChange={handleQuantityChange}
                cartItems={cartItems}
              />
            }
          />
          <Route
            path="/products/:productId"
            element={
              <ProductDetails
                navbar={Navbar}
                removeFromCart={removeFromCart}
                handleQuantityChange={handleQuantityChange}
                cartItems={cartItems}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <Checkout
                navbar={Navbar}
                removeFromCart={removeFromCart}
                handleQuantityChange={handleQuantityChange}
                cartItems={cartItems}
              />
            }
          />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
