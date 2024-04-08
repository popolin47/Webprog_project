import React from 'react';
import shoepic from './asset/img/ShoeTest.png';

const ProductDetail = () => {
  const Product = [
    {
      productID: 'P001',
      pro_name: 'shoes1',
      category: 'Man',
      brand: 'Adibas',
      quantity: 3,
      price: 233,
      size: 'US M 4',
      Date: '13/12/2024',
    },
  ];

  const product = Product[0]; // Assuming there is only one product in the array for now
  
  return (
    <div>
      <div className="bg-red-800 py-4">
        <div className="flex justify-center gap-3 text-white">
          <h1 className="text-3xl text-white">Latest Release</h1>
          <h1 className="text-3xl ml-6 text-white">Man</h1>
          <h1 className="text-3xl ml-6 text-white">Woman</h1>
          <h1 className="text-3xl ml-6 text-white">Kid</h1>
        </div>
      </div>

      <div className="m-12">
        <h1 className="text-5xl font-bold">{product.pro_name}</h1>
        <h1 className="text-xl text-gray-600">Product ID: {product.productID}</h1>
      </div>

      <div className='items-center'>
      <div className="flex gap-3 m-12 items-center p-12 max-w-fit rounded-lg overflow-hidden shadow-md">
        <div>
          <img className="w-full my-3 object-cover object-center" src={shoepic} alt="shoe" />
        </div>

        <div className="px-6 py-4 text-3xl">
          <h1 className="font-bold ">Product Details</h1>
          <h1 >Release Date: {product.Date}</h1>
          <h1>Category: {product.category}</h1>
          <h1>Price: {product.price}</h1>
          <h1>Available in stock: {product.quantity}</h1>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProductDetail;
