import React from 'react';
import shoepic from './asset/img/ShoeTest.png';

const ProductDetail = () => {
  const Product = [
    {
      productID: 'P001',
      pro_name: 'shoes1',
      catagory: 'Man',
      brand: 'Adibas',
      quantity: 3,
      price: 233,
      size: 'US M 4',
      Date: '13/12/2024',
    },
  ];

  const product = Product[0]; // Assuming there is only one product in the array for now
  
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

      <div className='m-12'>
        <h1 className='text-3xl font-bold'>{product.pro_name}</h1>
        <h1 className='text-xl'>Product ID: {product.productID}</h1>
      </div>

      <div className='flex flex-row w-fit h-1/2 gap-5 justify-between mx-12'>
        <div>
          <img className="w-1/2 object-cover object-center" src={shoepic} alt="shoe" />

        </div>

        <div className='text-xl'>
          <h1>Catagory: {product.catagory}</h1>
          <h1>Price: {product.price}</h1>
          <h1>Available in stock: {product.quantity}</h1>
        </div>
      </div>

      <div className='m-12'>
        <h1 className='font-bold text-xl'>Product Details</h1>
        <h1 className='text-xl'>Release Date: {product.Date} </h1>
      </div>
    </div>
    );
  };

export default ProductDetail;
