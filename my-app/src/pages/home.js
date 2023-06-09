import React from "react";
import "./home.css";
import Data1 from "../components/data1";
import Data2 from "../components/data2";
import Data3 from "../components/data3";
import Footer from "../components/footer";
import b1 from "../assets/b-1.png";
const Home = ({
  navbar: Navbar,
  addToCart,
  removeFromCart,
  handleQuantityChange,
  cartItems
}) => {
  return (
    <div>
      <Navbar
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        handleQuantityChange={handleQuantityChange}
      />
      <div className="bg-1 shadow-inner mb-10 -z-10 h-[100vh]  bg-cover bg-no-repeat opacity-90 pt-[70vh]">
        <div className="flex flex-col justify-evenly md:justify-center mt-4 ">
          <div className="flex flex-row justify-center gap-8 md:gap-36 md:ml-[33rem] md:mt-[-4rem]">
            <button
              id="men_c"
              className="bg-[#f7bf4f] hover:text-white font-semibold w-20 px-4 py-2 md:py-3 flex justify-center items-center md:text-xl md:w-40 shadow-2xl transition ease-in delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              Men
            </button>
            <button
              id="women_c"
              className="bg-[#f7bf4f] hover:text-white font-semibold w-20 px-4 py-2 md:py-3 flex justify-center items-center md:text-xl md:w-40 shadow-2xl transition ease-in delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              Women
            </button>
          </div>
        </div>
      </div>
      <Data1 addToCart={addToCart} />
      <Data2 addToCart={addToCart} />
      <div className="w-full mb-14 md:mb-28">
        <img className="w-full" src={b1} alt="b-1" />
      </div>
      <Data3 addToCart={addToCart} />
      <Footer />
    </div>
  );
};

export default Home;
