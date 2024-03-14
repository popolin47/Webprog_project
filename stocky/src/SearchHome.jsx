import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Product = [
  {
    productID: 'P001',
    pro_name: 'shoes1',
    catagory: 'Man',
    brand: 'Adibas',
    avaliable: 1,
    size: 'UK35',
  },
  {
    productID: 'P002',
    pro_name: 'shoes2',
    catagory: 'Women',
    brand: 'Nike',
    avaliable: 0,
    size: 'UK36',
  },
  {
    productID: 'P003',
    pro_name: 'shoes3',
    catagory: 'Kid',
    brand: 'Aria',
    avaliable: 1,
    size: 'UK35',
  },
];

const catagory = ['Man', 'Women', 'Kid'];
const defaultOption = catagory[0];

const SearchHome = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(defaultOption);
  const history = useHistory();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    const matchingProductIds = Product.filter((product) => {
      const productNameMatches = !searchQuery || product.pro_name.toLowerCase().includes(searchQuery.toLowerCase());
      const brandMatches = !searchQuery || product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const categoryMatches = !selectedCategory || product.catagory.toLowerCase() === selectedCategory.toLowerCase();

      return productNameMatches && brandMatches && categoryMatches;
    }).map((matchedProduct) => matchedProduct.productID);

    history.push('/result_product', { matchingProductIds });
  };

  return (
    
    <div >
    <div className="bg-[#880501] text-white w-full py-4 text-center">
        <h1 className=' text-3xl text-white'>Search</h1>
      </div>

    <div >
      
      <form onSubmit={handleSearchSubmit} >
        <div className="flex flex-col w-full h-1/2 justify-between">
          {/* Name */}
          <div className='text-xs section flex flex-row w-full gap-4  h-1/2 justify-between'>
            <label className='text-[#D9D9D9] text-left' htmlFor="searchName">
              Product Name:
            </label>
            <input
              className='justify-items-end ml-4'
              id="searchName"
              type="text"
              placeholder="Enter product name"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          {/* Brand */}
          <div >
            <label  htmlFor="searchName">
              Product Name:
            </label>
            <input
              
              id="searchName"
              type="text"
              placeholder="Enter product name"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>

          {/* category choices */}
          <div >
            <label  htmlFor="category">
              Category:
            </label>
            <select
              
              id="category"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              {catagory.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>


        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default SearchHome;
