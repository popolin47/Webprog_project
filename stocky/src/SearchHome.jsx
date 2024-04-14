import React, { useState } from 'react';


const catagory = ['All','Man', 'Women', 'Kid'];
const defaultOption = catagory[0];

const size = ['All','4','4.5','5','5.5','6'];
const defaultsize2 = size[0];

const SearchHome = () => {
  const [searchName, setSearchName] = useState('');
  const [searchBrand, setSearchBrand] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(defaultOption);
  const [isAvailable, setIsAvailable] = useState(true);
  const [selectedSize, setSelectedSize] = useState(defaultsize2);
  

  const handleNameChange = (event) => {
    setSearchName(event.target.value);
  };

  const handleBrandChange = (event) => {
    setSearchBrand(event.target.value);
  };

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue === 'All' ? '' : selectedValue);
  };

  const handleAvailableChange = (event) => {
    setIsAvailable(event.target.checked);
  };

  const handleClear = () => {
    setSearchName('');
    setSearchBrand('');
    setSelectedCategory(defaultOption);
    setIsAvailable(false);
    setSelectedSize(defaultsize2);
  };

  const handleSizeChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedSize(selectedValue === 'All' ? '' : selectedValue);
  };

  

  return (
    <div>
      <div>
        <form action="searchHome" method="post">
          <div className='my-12 mx-36'>
            <div className="flex flex-col w-full h-1/2 items-center justify-between ">
              <div className="bg-[#880501] text-white w-full py-4 text-center ">
                <h1 className='text-3xl text-white'>Search</h1>
              </div>

            
              {/* Name */}
              <div className='text-lg section flex flex-row w-full gap-4 h-1/2 justify-between my-4'>
                <label className='text-black text-xl text-left ml-12' htmlFor="searchName">
                  Name:
                </label>
                <input
                  className='justify-items-end ml-4'
                  id="searchName"
                  name="searchName"
                  type="text"
                  value={searchName}
                  onChange={handleNameChange}
                  placeholder="| Enter product name"
                />
              </div>

              {/* category choices */}
              <div className='text-lg section flex flex-row w-full gap-4 h-1/2 justify-between my-4'>
                <label className='ml-12' htmlFor="category">
                  Category:
                </label>
                <select
                  className='w-1/4'
                  id="category"
                  name="category"
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

              {/* Brand */}
              <div className='text-lg section  flex flex-row w-full gap-4 h-full justify-between my-4'>
                <label className='ml-12' htmlFor="searchBrand">
                  Brand:
                </label>
                <input
                  id="searchBrand"
                  name="searchBrand"
                  type="text"
                  placeholder="| Enter Brand name"
                  value={searchBrand}
                  onChange={handleBrandChange}
                />
              </div>

              {/* Size */}
              <div className='text-lg section flex flex-row w-full gap-4 h-1/2 justify-between my-4'>
                <label className='ml-12' htmlFor="size">
                  Size:
                </label>
                <select
                  className='w-1/4'
                  id="size"
                  name="size"
                  value={selectedSize}
                  onChange={handleSizeChange}
                >
                  {size.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Available */}
              <div className='text-lg section flex flex-row w-full gap-4 h-full justify-between my-4'>
                <label className='ml-12' htmlFor="searchAvailable">
                  Available:
                </label>
                <div className="flex mr-28">
                  <input
                    className='mr-2 size-5'
                    type="checkbox"
                    id="searchAvailable"
                    name='searchAvailable'
                    checked={isAvailable}
                    onChange={handleAvailableChange}
                  />
                </div>
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
                Clear
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchHome;