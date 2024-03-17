import React from 'react';
import { useLocation } from 'react-router-dom';
import shoepic from './asset/img/ShoeTest.png';

const SearchResultPage = () => {
  const location = useLocation();
  const matchingProducts = location.state?.matchingProducts || []; // Access the filtered products passed from SearchHome

  return (
    <div>
      <div className="flex justify-center bg-[#880501] w-full py-4 gap-16">
        <h1 className='text-3xl text-white'>Latest Release</h1>
        <h1 className='text-3xl text-white'>Man</h1>
        <h1 className='text-3xl text-white'>Woman</h1>
        <h1 className='text-3xl text-white'>Kid</h1>
      </div>

      

      {matchingProducts.length === 0 ? ( // Check if no matching products
      <div>

          <div className='my-6 mx-14 font-extrabold text-left'>
            <h1 className='text-3xl'>Browse {matchingProducts.length} results</h1>
          </div>
          
          <div className="flex justify-center items-center mt-9">
            <p className=" text-5xl font-semibold text-gray-600">No products found matching your search criteria.</p>
          </div>

        </div>
      ) : (
        <>
        <div className='my-6 mx-14 font-extrabold text-left'>
          <h1 className='text-3xl'>Browse {matchingProducts.length} results</h1>
        </div>

        <div className='flex flex-wrap justify-center mt-12 mx-9 font-bold'>
          {matchingProducts.map((product) => (
            <div key={product.productID} className="max-w-sm bg-white border mr-9 mt-9 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg" src={shoepic} alt="shoe" />
              <div className="p-5 text-left">
                <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{product.pro_name}</h5>
                <p className="mb-3 text-xl font-normal text-gray-700 dark:text-gray-400">Price: {product.price}</p>
              </div>
            </div>
            
          ))}
        </div>
        </>
      )}
    </div>
  );
};

export default SearchResultPage;
