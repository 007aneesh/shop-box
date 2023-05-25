import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiTrashAlt } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import "./navbar.css";
const Navbar = ({ cartItems = [], removeFromCart, handleQuantityChange }) => {
  // console.log(cartItems);
  const navRef = useRef();
  const cartRef = useRef();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const totalPrice = cartItems.reduce(
      (initial, item) => initial + item.price * item.quantity,
      0
    );
    setTotal(totalPrice);
  }, [cartItems]);
  const ctRef = useRef();
  const showNav = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const showcrt = () => {
    // console.log("toggled");
    ctRef.current.classList.toggle("responsive_cart");
    cartRef.current.classList.toggle("responsive_cart");
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
              <button id="close" className="nav-btn nav-close" onClick={showNav}>
                <AiOutlineClose />
              </button>
            </nav>
          </div>
        </div>
        <div ref={cartRef} className="flex justify-center items-center">
          <button
            id="cart"
            className="mr-5 flex md:mr-7 hover:text-white"
            onClick={showcrt}
          >
            <FaShoppingCart size={23} />
            {
              cartItems.length ? (<span class="position-absolute top-[20px] ml-7  translate-middle badge rounded-pill bg-white text-black">
              {cartItems.length}
              <span class="visually-hidden">unread messages</span>
            </span>) : ""

            }
            
          </button>

          <button id="user" className="hidden md:flex mr-2 hover:text-white">
            <Link to="/accounts">
              <FaUserCircle size={24} />
            </Link>
          </button>
          <button className="nav-btn" onClick={showNav}>
            <FaBars />
          </button>
        </div>

        <div
          ref={ctRef}
          className="ani z-1000 right-0 top-[60px]  absolute w-full overflow-y-scroll md:w-1/4 py-9 px-8 h-screen bg-white "
        >
          <button id="right_arrow" onClick={showcrt}>
            <BsArrowRight size={25} />
          </button>
          <div className="my-4 flex flex-row justify-between items-center">
            <div>
              <h1 className="font-semibold text-xl">Shopping Bag</h1>
            </div>
            <div>
              <h1 className="text-base">
                Subtotal:{" "}
                <span className="font-semibold">${total.toFixed(2)}</span>
              </h1>
            </div>
          </div>
          <div className="mb-28">
            {cartItems.map((item, index) => (
              <div className="flex flex-col mb-4">
                <div
                  key={index}
                  className="border flex flex-row overflow-hidden  h-32 md:h-[7.5rem] border-gray-300 p-4"
                >
                  <div className="h-full w-1/3">
                    <img src={item.image} className="h-full" alt="imgi" />
                  </div>
                  <div className="flex flex-col w-2/3">
                    <h1 className="font-semibold mb-2 md:text-sm">
                      {item.title}
                    </h1>
                    <p>
                      <span className="font-semibold">
                        $
                        <span className="ml-1 text-green-500 font-semibold text-base">
                          {item.price}
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-row w-full">
                  <div
                    onClick={() => removeFromCart(index)}
                    className=" w-1/3 flex flex-row bg-red-500 p-2 justify-center items-center cursor-pointer"
                  >
                    <button id="trash" className="flex w-full h-full text-base md:text-sm justify-around items-center text-white">
                      <BiTrashAlt size={20} /> Remove
                    </button>
                  </div>
                  <div className="w-2/3 flex border-gray-500 border border-t-0 flex-row py-2 px-4 justify-center  items-center">
                    <div className="flex flex-row justify-evenly items-center w-full">
                      <div className="flex items-center">
                        <button
                        id="minus"
                          onClick={() =>
                            handleQuantityChange(index, item.quantity - 1)
                          }
                        >
                          <AiOutlineMinus size={20} />
                        </button>
                      </div>
                      <div>
                        <h1>{item.quantity}</h1>
                      </div>
                      <div className="flex items-center">
                        <button
                        id="plus"
                          onClick={() =>
                            handleQuantityChange(index, item.quantity + 1)
                          }
                        >
                          <AiOutlinePlus size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {total ? (
              <div className="flex justify-center items-center w-full p-4">
                <button id="checkout" className="w-full bg-[#f7bf4f] hover:text-white shadow-2xl transition ease-in delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-xl md:text-base font-semibold md:px-2 py-3 md:py-2 md:w-[80%]">
                  Proceed to checkout
                </button>
              </div>
            ) : (
              <div className="flex justify-center mt-16 text-xl">
                <h1>Your cart is empty</h1>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
