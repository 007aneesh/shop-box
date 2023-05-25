import React, { useState, useEffect } from "react";
import "./home.css";
import Data1 from "../components/data1";
import Data2 from "../components/data2";
import Footer from "../components/footer";
const Home = ({ navbar: Navbar }) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex((cartItem)=> cartItem.id === item.id);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    }
    else{
      setCartItems([...cartItems, {...item, quantity: 1}]);
    }
    console.log("Added to cart");
  };
  useEffect(() => {
    // This code will be executed whenever cartItems changes
    console.log("Cart items updated:", cartItems);
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
    <div>
      <Navbar cartItems={cartItems} removeFromCart={removeFromCart} handleQuantityChange={handleQuantityChange} />
      <div className="bg-1 shadow-inner mb-10 -z-10 h-[100vh]  bg-cover bg-no-repeat opacity-90 pt-[70vh]">
        <div className="flex flex-col justify-evenly md:justify-center mt-4 ">
          <div className="flex flex-row justify-center gap-8 md:gap-36 md:ml-[33rem] md:mt-[-4rem]">
            <button id="men_c" className="bg-[#f7bf4f] hover:text-white font-semibold w-20 px-4 py-2 md:py-3 flex justify-center items-center md:text-xl md:w-40 shadow-2xl transition ease-in delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Men
            </button>
            <button id="women_c" className="bg-[#f7bf4f] hover:text-white font-semibold w-20 px-4 py-2 md:py-3 flex justify-center items-center md:text-xl md:w-40 shadow-2xl transition ease-in delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Women
            </button>
          </div>
        </div>
      </div>
      <Data1 addToCart={addToCart} />
      <Data2 addToCart={addToCart} />
      <Footer />
    </div>
  );
};

export default Home;
