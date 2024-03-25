import React from 'react';
import { useHistory, Link , useLocation } from 'react-router-dom';
import shoepic from './asset/img/ShoeTest.png';
import yyy from './asset/img/ฺBG.jpg';
// Replace the following with the actual path to your background image
const backgroundImage = require('./asset/img/Mingtar.jpg');

const ProductList = () => {
  const location = useLocation();
  const matchingProducts = location.state?.matchingProducts || []; 
  const handleProductClick = (product) => {
    // Add product viewing functionality here
  };

  return (
    <div className="bg-slate-50 bg-cover bg-center min-h-screen font-roboto"  >
      <div className="flex justify-center bg-[#880501] w-full py-4 gap-16">
        <h1 className='text-3xl text-white'>Latest Release</h1>
        <h1 className='text-3xl text-white'>Man</h1>
        <h1 className='text-3xl text-white'>Woman</h1>
        <h1 className='text-3xl text-white'>Kid</h1>
      </div>

      <img src= {yyy}className="flex justify-center bg-[#880501] w-full h-80 gap-16 object-cover"/>
      

      <div className="container max-w-6xl mx-auto">
      <div className="text-4xl font-bold mb-8 text-start"><br/>Recommended For You</div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-3/5 md:pr-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Add product items here */}
              <div className="rounded-lg shadow-md p-5 ">
                <img src= {shoepic} alt="Product" className="bg-white max-w-full max-h-full object-cover" />
                <h3 className="text-gray-600 text-lg font-semibold mt-3">Product Name</h3>
                <div className="flex justify-between mt-1">
                  <div className="text-black">price</div>
                </div>
              </div>
              {/* Add more product items here */}
              <div className="rounded-lg shadow-md p-5 ">
                <img src= {shoepic} alt="Product" className="bg-white max-w-full max-h-full object-cover" />
                <h3 className="text-gray-600 text-lg font-semibold mt-3">Product Name</h3>
                <div className="flex justify-between mt-1">
                  <div className="text-black">price</div>
                </div>
              </div>

              <div className="rounded-lg shadow-md p-5 ">
                <img src= {shoepic} alt="Product" className="bg-white max-w-full max-h-full object-cover" />
                <h3 className="text-gray-600 text-lg font-semibold mt-3">Product Name</h3>
                <div className="flex justify-between mt-1">
                  <div className="text-black">price</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-4xl font-bold mb-8 text-start"><br/>Latest Release</div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-3/5 md:pr-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Add product items here */}
              <div className="rounded-lg shadow-md p-5 ">
                <img src= {shoepic} alt="Product" className="bg-white max-w-full max-h-full object-cover" />
                <h3 className="text-gray-600 text-lg font-semibold mt-3">Product Name</h3>
                <div className="flex justify-between mt-1">
                  <div className="text-black">price</div>
                </div>
              </div>
              {/* Add more product items here */}
              <div className="rounded-lg shadow-md p-5 ">
                <img src= {shoepic} alt="Product" className="bg-white max-w-full max-h-full object-cover" />
                <h3 className="text-gray-600 text-lg font-semibold mt-3">Product Name</h3>
                <div className="flex justify-between mt-1">
                  <div className="text-black">price</div>
                </div>
              </div>

              <div className="rounded-lg shadow-md p-5 ">
                <img src= {shoepic} alt="Product" className="bg-white max-w-full max-h-full object-cover" />
                <h3 className="text-gray-600 text-lg font-semibold mt-3">Product Name</h3>
                <div className="flex justify-between mt-1">
                  <div className="text-black">price</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
