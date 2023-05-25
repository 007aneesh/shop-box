import React from "react";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="w-full bottom-0 h-16 flex justify-center items-center  bg-black">
      <h1 className="flex flex-row text-white text-xl">Copyright @Aneesh</h1>
      <a href="https://github.com/007aneesh">
        <AiFillGithub className="mx-2 text-white" size={24} />
      </a>
      <a href="https://www.linkedin.com/in/aneeshaggarwal/">
        <AiOutlineLinkedin className=" text-white z-10" size={24} />
      </a>
    </div>
  );
};

export default Footer;
