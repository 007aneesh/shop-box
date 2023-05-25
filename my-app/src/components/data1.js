import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsEyeFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
const Data1 = ({ addToCart }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/category/men's%20clothing?sort=desc"
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      id="mens"
      className="mt-20 md:mt-28 flex flex-col justify-center items-center mb-0"
    >
      <div>
        <h1 className="font-semibold text-4xl">Trending now</h1>
      </div>
      {data && (
        <div className="pt-8 flex flex-col flex-wrap justify-center lg:flex-row">
          {data.map((item, index) => (
            <div
              key={index}
              className="mx-4 my-4 pt-4 flex flex-col mt-11 w-72 transform overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                className="h-48 w-full object-contain object-center"
                src={item.image}
                alt="Product"
              />
              <div className="flex flex-col right-0 p-4 absolute group-hover:right-5 transition-all duration-100 items-center justify-center gap-y-2 top-0">
                <button
                  id="add_p_to_cart"
                  onClick={() => addToCart(item)}
                  className="flex justify-center items-center text-red w-8 h-8 bg-red-500"
                >
                  <AiOutlinePlus className="text-xl text-white rounded-none outline-none border-none" />
                </button>
                <button
                  id="view"
                  className="flex justify-center items-center bg-white w-8 h-8"
                >
                  <BsEyeFill className="text-xl" />
                </button>
              </div>
              <div className="p-4">
                <h2 className="mb-2 text-lg font-medium text-gray-900">
                  {item.title}
                </h2>
                <p className="mb-2 text-base text-gray-700 truncate">
                  {item.description}
                </p>
                <div className="flex items-center">
                  <p className="mr-2 text-lg font-semibold text-gray-900">
                    ${item.price}
                  </p>
                  <p className="text-base  font-medium text-gray-500 line-through ">
                    ${(item.price + 30).toFixed(2)}
                  </p>
                  <p className="ml-auto text-base font-medium text-green-500">
                    20% off
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Data1;
