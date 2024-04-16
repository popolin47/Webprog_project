import React, { useEffect, useState } from 'react';
import { useHistory, Link , useLocation } from 'react-router-dom';
import shoepic from './asset/img/ShoeTest.png';
import yyy from './asset/img/bandner.png';
// Replace the following with the actual path to your background image
const backgroundImage = require('./asset/img/Mingtar.jpg');


const ProductList = () => {
  const location = useLocation();
  const [Product, setProduct] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  
  React.useEffect(()=>{
    fetch('/ProductSearchAdmin')
      .then((res)=> res.json())
      .then((data)=>{
      if (Array.isArray(data)) {
        setProduct(data); 
        console.log("match");
      } else {
        console.error("Data received from server is not an array:", data);
      }})
      .catch((err) => console.log(err));
    
      fetch('/ProductList')
      .then((res)=> res.json())
      .then((data)=>{
      if (Array.isArray(data)) {
        setRecommendedProducts(data)
        console.log("match");
      } else {
        console.error("Data received from server is not an array:", data);
      }})
      .catch((err) => console.log(err));
    
  },[]);
  const handleProductClick = (product) => {
    // Add product viewing functionality here
  };

  // Function to get three random products
  const getRandomProducts = (p) => {
    const randomProducts = [];
    const shuffledProducts = p.sort(() => 0.5 - Math.random());
    for (let i = 0; i < 3; i++) {
      randomProducts.push(shuffledProducts[i]);
    }
    return randomProducts;
  };

  // Get three random products
  // const recommendedProducts = getRandomProducts();

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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-full">
              {/* Mapping through recommendedProducts array and displaying products */}
              {recommendedProducts.map((product) => (
                <div key={product?.PID ? product.PID : null} className="w-200 h-200px rounded-lg shadow-md p-5">
                  <img src={shoepic} alt="ProductList" className="bg-white max-w-full max-h-full object-cover" />
                  <h3 className="text-gray-600 text-lg font-semibold mt-3">{product?.P_name ? product.P_name : '-'}</h3>
                  <div className="flex justify-between mt-1">
                    <div className="text-black">${product?.Price ? product.Price : '-'}</div>
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
                <div key={product.PID} className="rounded-lg shadow-md p-5">
                  <img src={shoepic} alt="Product" className="bg-white max-w-full max-h-full object-cover" />
                  <h3 className="text-gray-600 text-lg font-semibold mt-3">{product.P_name}</h3>
                  <div className="flex justify-between mt-1">
                    <div className="text-black">${product.Price}</div>
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
