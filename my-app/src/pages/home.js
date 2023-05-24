import React, { useState, useEffect } from "react";
import "./home.css";
import Data1 from "../components/data1";
import Data2 from "../components/data2";
const Home = ({ navbar: Navbar }) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    console.log("Added to cart");
  };
  useEffect(() => {
    // This code will be executed whenever cartItems changes
    console.log("Cart items updated:", cartItems);
  }, [cartItems]);
  return (
    <div>
      <Navbar cartItems={cartItems} />
      <div className="bg-1 drop-shadow-2xl mb-10 -z-10 h-[100vh]  bg-cover bg-no-repeat opacity-80 pt-[70vh]">
        <div className="flex flex-col justify-evenly md:justify-center ">
          <div className="flex justify-center">
            <a
              href="/"
              className="text-white font-serif text-xl underline md:text-black md:text-3xl"
            >
              Discover more
            </a>
          </div>
          <div className="flex flex-row justify-evenly md:gap-4 mt-10">
            <button className="bg-[#f7bf4f] hover:text-white font-semibold w-20 px-4 py-2 flex justify-center items-center md:text-2xl md:w-28 shadow-2xl transition ease-in delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Men
            </button>
            <button className="bg-[#f7bf4f] hover:text-white font-semibold w-20 px-4 py-2 flex justify-center items-center md:text-2xl md:w-28 shadow-2xl transition ease-in delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Women
            </button>
          </div>
        </div>
      </div>
      <Data1 addToCart={addToCart} />
      <Data2 addToCart={addToCart} />
    </div>
  );
};

export default Home;
