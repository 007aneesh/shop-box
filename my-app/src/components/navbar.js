import React, { useRef, useState } from "react";
import { FaBars, FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IoMdArrowForward, IoTrashBin } from "react-icons/io";
import "./navbar.css";
const Navbar = ({ cartItems = [] }) => {
  const navRef = useRef();
  const showNav = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const [showCart, setShowCart] = useState(false);
  const toggleCart = () => {
    setShowCart(!showCart);
    console.log("toggle");
  };
  return (
    <>
      <header className="lg:pl-20 fixed w-full lg:pr-20 bg-[#f7bf4f]">
        <div className="flex justify-between items-center w-[65%]">
          <div className="mr-5">
            <Link to="/">
              <h1 className="name text-2xl md:text-3xl">Shop Box</h1>
            </Link>
          </div>
          <div>
            <nav ref={navRef} className="flex justify-center items-center">
              <Link to="/">Home</Link>
              <Link to="/trending">Trending</Link>
              <Link to="/categories">Categories</Link>
              <Link to="/accounts" className="acc hidden">
                Account
              </Link>
              <button className="nav-btn nav-close" onClick={showNav}>
                <AiOutlineClose />
              </button>
            </nav>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="mr-2 md:mr-7 hover:text-white"
            onClick={toggleCart}
          >
            <FaShoppingCart size={23} />
          </button>

          <button className="hidden md:flex mr-2 hover:text-white">
            <Link to="/accounts">
              <FaUserCircle size={24} />
            </Link>
          </button>
          <button className="nav-btn" onClick={showNav}>
            <FaBars />
          </button>
        </div>
        {showCart && (
          <div className="right-0 top-[60px] absolute w-full overflow-y-scroll md:w-1/2 py-10 px-8 h-screen bg-white ">
            <div>
              {cartItems.map((item, index) => (
                <div key={index} className="border border-gray-300 p-4 mb-4">
                  <h2 className="text-lg font-medium">{item.title}</h2>
                  <p className="text-gray-700">Price: ${item.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
