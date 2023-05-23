import React, {useState, useEffect} from "react";
import axios from "axios";
const Data1 = () => {
    const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/category/men's%20clothing?sort=desc"
        );
        // Handle the response data
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        // Handle the error
        console.error(error);
      }
    };

    fetchData(); // Call the fetchData function when the component is rendered
  }, []); // Empty dependency array to run the effect only once
  return (
    <div id="mens" className="mb-20">
      {data && (
        <div class="pt-8">
          <div class="mx-auto mt-11 w-72 transform overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              className="h-48 w-full object-contain object-center"
              src={data[1].image}
              alt="Product"
            />
            <div class="p-4">
              <h2 class="mb-2 text-lg font-medium text-gray-900">
                {data[0].title}
              </h2>
              <p class="mb-2 text-base text-gray-700 truncate">
                {data[1].description}
              </p>
              <div class="flex items-center">
                <p class="mr-2 text-lg font-semibold text-gray-900">
                  ${data[1].price}
                </p>
                <p class="text-base  font-medium text-gray-500 line-through ">
                  $90
                </p>
                <p class="ml-auto text-base font-medium text-green-500">
                  20% off
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Data1;
