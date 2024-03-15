import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Product = [
  {
    productID: 'P001',
    pro_name: 'shoes1',
    catagory: 'Man',
    brand: 'Adibas',
    avaliable: 3,
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
  const [searchName, setSearchName] = useState('');
  const [searchBrand, setSearchBrand] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(defaultOption);
  const [isAvailable, setIsAvailable] = useState(false);
  const history = useHistory();

  const handleNameChange = (event) => {
    setSearchName(event.target.value);
  };

  const handleBrandChange = (event) => {
    setSearchBrand(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleAvailableChange = (event) => {
    setIsAvailable(event.target.checked);
  };

  const handleClear = () => {
    setSearchName('');
    setSearchBrand('');
    setSelectedCategory(defaultOption);
    setIsAvailable(false);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    const matchingProductIds = Product.filter((product) => {
      const nameMatches = !searchName || product.pro_name.toLowerCase().includes(searchName.toLowerCase());
      const brandMatches = !searchBrand || product.brand.toLowerCase().includes(searchBrand.toLowerCase());
      const categoryMatches = !selectedCategory || product.catagory.toLowerCase() === selectedCategory.toLowerCase();
      const availabilityMatches = !isAvailable || product.avaliable >= 1;

      return nameMatches && brandMatches && categoryMatches && availabilityMatches;
    }).map((matchedProduct) => matchedProduct.productID);

    history.push('/result_product', { matchingProductIds });
  };

  return (
    <div>
      <div className="bg-[#880501] text-white w-full py-4 text-center">
        <h1 className=' text-3xl text-white'>Search</h1>
      </div>

      <div>
        <form onSubmit={handleSearchSubmit}>
          <div className='mx-3'>
            <div className="flex flex-col w-full h-1/2 justify-between">
              {/* Name */}
              <div className='text-lg section flex flex-row w-full gap-4 h-1/2 justify-between my-4'>
                <label className='text-black text-xl text-left' htmlFor="searchName">
                  Name:
                </label>
                <input
                  className='justify-items-end ml-4'
                  id="searchName"
                  type="text"
                  placeholder="| Enter product name"
                  value={searchName}
                  onChange={handleNameChange}
                />
              </div>

              {/* Brand */}
              <div className='text-lg section flex flex-row w-full gap-4 h-full justify-between my-4'>
                <label htmlFor="searchBrand">
                  Brand:
                </label>
                <input
                  id="searchBrand"
                  type="text"
                  placeholder="| Enter Brand name"
                  value={searchBrand}
                  onChange={handleBrandChange}
                />
              </div>

              {/* Available */}
              <div className='text-lg section flex flex-row w-full gap-4 h-full justify-between my-4'>
                <label htmlFor="searchAvailable">
                  Available:
                </label>
                <div className="flex mr-28">
                  <input
                    className='mr-2 size-5'
                    type="checkbox"
                    id="searchAvailable"
                    checked={isAvailable}
                    onChange={handleAvailableChange}
                  />
                </div>
              </div>

              {/* category choices */}
              <div className='text-lg section flex flex-row w-full gap-4 h-1/2 justify-between my-4'>
                <label htmlFor="category">
                  Category:
                </label>
                <select
                  className='w-56'
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
            <div className="flex justify-center mt-8 gap-5">
              <button
                className="bg-[#880501] text-white items-center text-center px-5 py-2 rounded-md hover:scale-105 transition-transform "
                type="submit"
              >
                Search
              </button>

              <button
                className="bg-gray-800 text-white items-center text-center px-5 py-2 rounded-md hover:scale-105 transition-transform"
                type="button" 
                onClick={handleClear}
              >
                clear
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchHome;
