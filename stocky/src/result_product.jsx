import React from 'react';
import { useLocation } from 'react-router-dom';
import shoepic from './asset/img/ShoeTest.png';

const SearchResultPage = () => {
  const location = useLocation();
  const matchingProducts = location.state?.matchingProducts || [];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-[#880501] py-4">
        <div className="flex justify-center gap-3">
          <h1 className="text-3xl text-white">Latest Release</h1>
          <h1 className="text-3xl text-white ml-6">Man</h1>
          <h1 className="text-3xl text-white ml-6">Woman</h1>
          <h1 className="text-3xl text-white ml-6">Kid</h1>
        </div>
      </div>

      <div className="container mx-auto py-8">
        {matchingProducts.length === 0 ? (
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Browse 0 result</h1>
            <p className="text-xl text-gray-600">No products found matching your search criteria.</p>
          </div>
        ) : (
          <>
            <div className="text-left text-gray-800 my-12">
              <h1 className="text-3xl font-bold mb-4">Browse {matchingProducts.length} results</h1>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {matchingProducts.map((product) => (
                <div key={product.productID} className="bg-white max-w-m rounded-lg overflow-hidden shadow-md">
                  <img className="w-full  object-cover object-center" src={shoepic} alt="shoe" />
                  <div className="p-4">
                    <h5 className="text-xl font-semibold mb-2">{product.pro_name}</h5>
                    <p className="text-lg text-gray-700 mb-4">Price: ${product.price}</p>
                    <button className="bg-[#880501] text-white px-4 py-2 rounded-md hover:bg-opacity-75 transition-colors">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchResultPage;
