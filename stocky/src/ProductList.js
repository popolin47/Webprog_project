import React from 'react';
import { useHistory, Link } from 'react-router-dom';
// Replace the following with the actual path to your background image
const backgroundImage = require('./asset/img/Mingtar.jpg');

const ProductList = () => {
  const history = useHistory();

  const handleProductClick = (product) => {
    // Add product viewing functionality here
  };

  return (
    <div className="bg-cover bg-center min-h-screen font-roboto" style={{ backgroundImage: `url(${backgroundImage})` }}>

      <div className="container max-w-6xl mx-auto">
      <div className="text-4xl font-bold mb-8 text-start"><br/>Recommended For You</div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-3/5 md:pr-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Add product items here */}
              <div className="rounded-lg shadow-md p-5">
                <img src="path/to/product/image" alt="Product" className="bg-white w-full h-40 object-cover" />
                <h3 className="text-lg font-semibold mt-3">Product Name</h3>
                <div className="flex justify-between mt-1">
                  <div className="text-gray-500">Latest Release</div>
                  <button className="text-red-500 hover:text-black focus:text-black" onClick={() => handleProductClick({ name: 'Men' })}>View</button>
                </div>
              </div>
              {/* Add more product items here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
