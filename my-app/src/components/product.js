import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./footer";
import { BiArrowBack } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
const ProductDetails = ({
  navbar: Navbar,
  addToCart,
  removeFromCart,
  handleQuantityChange,
  cartItems,
}) => {
  const { productId } = useParams();

  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [productId]);

  return (
    <div>
      <Navbar
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        handleQuantityChange={handleQuantityChange}
      />
      <div className="pt-24 px-10 pb-20 mb-16">
        <h1 className="text-xl flex flex-row items-center font-semibold">
          <Link to="/">
            <BiArrowBack className="mr-4" size={24} />
          </Link>
          Product Details
        </h1>
        {data && (
          <div className="mt-8 flex flex-col md:flex-row md:justify-between">
            <div className="w-full md:w-1/2 items-center justify-center flex">
              <div className="bg-white p-8 flex justify-center items-center">
                <img src={data.image} alt="prod" className="md:max-h-[44vh]" />
              </div>
            </div>
            <div className="mt-6 md:mt-0 md:w-1/2">
              <div className="flex flex-row mb-3 md:mb-10 items-center">
                <h2 className="text-xl mr-3">Rating: </h2>
                <div className=" w-16 flex items-center justify-center  h-8 text-lg font-semibold bg-green-500">
                  {data.rating.rate}
                  <span className="ml-1">
                    <AiFillStar size={20} color="white" />
                  </span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl mb-3 font-semibold md:max-w-xl">
                  {data.title}
                </h2>
                <h3 className="mb-4 text-xl font-medium">
                  Price: <span className="text-2xl">${data.price}</span>
                </h3>
                <p className="text-gray-500 leading-7 md:max-w-lg">
                  {data.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
