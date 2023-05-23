import React, { useRef } from "react";
// import { useEffect, useState } from "react";
import { FaBars, FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
// import {TbSunMoon} from "react-icons/tb";
import { Link } from "react-router-dom";
import "./navbar.css";
// import logo from "../assets/logo.png";
const Navbar = () => {
  const navRef = useRef();
  const showNav = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  // const [theme, setTheme] = useState("light");
  // useEffect(()=>{
  //   if(theme==="dark"){
  //       document.documentElement.classList.add("dark");
  //   }else{
  //       document.documentElement.classList.remove("dark");
  //   }
  // }, [theme]);
  // const handleTheme = () =>{
  //   setTheme(theme==="dark"? "light" : "dark");
  // }
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

              {/* <button onClick={handleTheme}>
            <TbSunMoon />
          </button> */}
            </nav>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="mr-2 md:mr-7 hover:text-white">
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
      </header>
    </>
  );
};

export default Navbar;
