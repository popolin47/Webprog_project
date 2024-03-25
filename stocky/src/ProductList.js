import React from 'react';
import { useHistory, Link , useLocation } from 'react-router-dom';
import shoepic from './asset/img/ShoeTest.png';
import yyy from './asset/img/bandner.png';
// Replace the following with the actual path to your background image
const backgroundImage = require('./asset/img/Mingtar.jpg');

const Product = [
  {
    productID: 'P001',
    pro_name: 'shoes1',
    catagory: 'Man',
    brand: 'Adibas',
    quantity: 3,
    price: 233,
    size: 'US M 4',
  },
  {
    productID: 'P002',
    pro_name: 'shoes2',
    catagory: 'Women',
    brand: 'Nike',
    price: 233,
    quantity: 0,
    size: 'US M 5',
  },
  {
    productID: 'P003',
    pro_name: 'shoes3',
    catagory: 'Kid',
    brand: 'Aria',
    price: 233,
    quantity: 1,
    size: 'US M 5',
  },
  {
    productID: 'P004',
    pro_name: 'shoes4',
    catagory: 'Kid',
    brand: 'Nike',
    price: 233,
    quantity: 1,
    size: 'US M 6',
  },
  {
    productID: 'P005',
    pro_name: 'shoes5',
    catagory: 'Man',
    brand: 'Nike',
    price: 233,
    quantity: 1,
    size: 'US M 4.5',
  },
  {
    productID: 'P006',
    pro_name: 'shoes6',
    catagory: 'Man',
    brand: 'Nike',
    price: 233,
    quantity: 1,
    size: 'US M 5.5',
  },
  {
    productID: 'P007',
    pro_name: 'shoes7',
    catagory: 'Women',
    brand: 'Nike',
    price: 233,
    quantity: 1,
    size: 'US M 5.5',
  },
  {
    productID: 'P008',
    pro_name: 'shoes8',
    catagory: 'Kid',
    brand: 'Nike',
    price: 233,
    quantity: 1,
    size: 'US M 4.5',
  },
  {
    productID: 'P009',
    pro_name: 'shoes9',
    catagory: 'Women',
    brand: 'Nike',
    price: 233,
    quantity: 1,
    size: 'US M 4',
  },
];


const ProductList = () => {
  const location = useLocation();
  const matchingProducts = location.state?.matchingProducts || [];
  const handleProductClick = (product) => {
    // Add product viewing functionality here
  };

  // Function to get three random products
  const getRandomProducts = () => {
    const randomProducts = [];
    const shuffledProducts = Product.sort(() => 0.5 - Math.random());
    for (let i = 0; i < 3; i++) {
      randomProducts.push(shuffledProducts[i]);
    }
    return randomProducts;
  };

  // Get three random products
  const recommendedProducts = getRandomProducts();

  return (
    <div className="bg-slate-50 bg-cover bg-center min-h-screen font-roboto">
      <div className="flex justify-center bg-[#880501] w-full py-4 gap-16">
        <h1 className="text-3xl text-white">Latest Release</h1>
        <h1 className="text-3xl text-white">Man</h1>
        <h1 className="text-3xl text-white">Woman</h1>
        <h1 className="text-3xl text-white">Kid</h1>
      </div>

      <img src={yyy} className="flex justify-center bg-[#880501] w-full h-80 gap-16 object-cover" />

      <div className="container max-w-6xl mx-auto">
        <div className="text-4xl font-bold mb-8 text-start">
          <br />
          Recommended For You
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-3/5 md:pr-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Mapping through recommendedProducts array and displaying products */}
              {recommendedProducts.map((product) => (
                <div key={product.productID} className="rounded-lg shadow-md p-5">
                  <img src={shoepic} alt="Product" className="bg-white max-w-full max-h-full object-cover" />
                  <h3 className="text-gray-600 text-lg font-semibold mt-3">{product.pro_name}</h3>
                  <div className="flex justify-between mt-1">
                    <div className="text-black">${product.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-4xl font-bold mb-8 text-start">
          <br />
          Product
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-3/5 md:pr-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Mapping through Product array and displaying products */}
              {Product.map((product) => (
                <div key={product.productID} className="rounded-lg shadow-md p-5">
                  <img src={shoepic} alt="Product" className="bg-white max-w-full max-h-full object-cover" />
                  <h3 className="text-gray-600 text-lg font-semibold mt-3">{product.pro_name}</h3>
                  <div className="flex justify-between mt-1">
                    <div className="text-black">${product.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
