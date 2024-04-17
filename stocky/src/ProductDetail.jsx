import React, { useState, useEffect, useLocation } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const location = useLocation();
  const id = location.results;
  console.log(id)
  useEffect(() => {
    
    fetch(`/productdetail/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data.data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);
    console.log(id)
    console.log(product)
  if (!product) {
    return <div>Loading...</div>;
  }
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
        <h1 className="text-5xl font-bold">{product.P_name}</h1>
        <h1 className="text-xl text-gray-600">Product ID: {product.PID}</h1>
      </div>

      <div className='items-center'>
      <div className="flex gap-3 m-12 items-center p-12 max-w-fit overflow-hidden">
        <div>
          <img className="w-full my-3 object-cover object-center" src={''} alt="shoe" />
        </div>

        <div className="px-6 py-4 text-2xl">
          <h1 className="font-bold ">Product Details</h1>
          <h1 className=' text-lg'>Release Date: {product.ReDate}</h1>
          <h1 className=' text-lg'>Category: {product.Category}</h1>
          <h1 className=' text-lg'>Price: {product.Price}</h1>
          <h1 className=' text-lg'>Available in stock: {product.quantity}</h1>
        </div>
      </div>

      <div className='text-wrap w-1/2 ml-12 mb-24'>
        <h1 className='font-bold text-2xl mb-4 '>Description</h1>
        <p>The Air Jordan 4 Retro Military Blue 2024 stands as a beacon of Jordan Brand's innovation and style. It features an off-white leather base contrasted with the striking military blue splashed on the eyelet wings, heel, and parts of the midsole, creating a look of disciplined yet daring design. The neutral grey touches on the forefoot and outsole balance the aesthetic, highlighting the sneaker's clean lines and geometric shapes.</p>
      </div>
      </div>
    </div>
  );
};

export default ProductDetail;
