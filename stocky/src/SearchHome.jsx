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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSearchSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="searchName">
            Product Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="searchName"
            type="text"
            placeholder="Enter product name"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Category:
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchHome;
