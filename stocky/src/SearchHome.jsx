import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

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

const catagory = ['All','Man', 'Women', 'Kid'];
const defaultOption = catagory[0];

const size = ['All','US M 4','US M 4.5','US M 5','US M 5.5','US M 6'];
const defaultsize2 = size[0];

const SearchHome = () => {
  const [searchName, setSearchName] = useState('');
  const [searchBrand, setSearchBrand] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(defaultOption);
  const [isAvailable, setIsAvailable] = useState(true);
  const [selectedSize, setSelectedSize] = useState(defaultsize2);
  const history = useHistory();

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
  };

  const handleSizeChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedSize(selectedValue === 'All' ? '' : selectedValue);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    const matchingProducts = Product.filter((product) => {
      const nameMatches = !searchName || product.pro_name.toLowerCase().includes(searchName.toLowerCase());
      const brandMatches = !searchBrand || product.brand.toLowerCase().includes(searchBrand.toLowerCase());
      const categoryMatches = selectedCategory === 'All' || product.catagory.toLowerCase() === selectedCategory.toLowerCase();
      const availabilityMatches = isAvailable ? product.quantity > 0 : product.quantity === 0;
      const sizeMatches = selectedCategory === 'All'  || product.size === selectedSize;
  
      return nameMatches && brandMatches && categoryMatches && availabilityMatches && sizeMatches;
    });
  
    history.push('/result_product', { matchingProducts });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSearchSubmit}>
          <div className='my-12 mx-36'>
            <div className="flex flex-col w-full h-1/2 items-center justify-between ">
              <div className="bg-[#880501] text-white w-full py-4 text-center ">
                <h1 className='text-3xl text-white'>Search</h1>
              </div>

            <div className="bg-[#000000] text-white w-full py-4 text-center ">
              <h1 className=' text-3xl text-white'>Search</h1>
            </div>

            
              {/* Name */}
              <div className='text-lg section flex flex-row w-full gap-4 h-1/2 justify-between my-4'>
                <label className='text-black text-xl text-left ml-12' htmlFor="searchName">
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

              {/* category choices */}
              <div className='text-lg section flex flex-row w-full gap-4 h-1/2 justify-between my-4'>
                <label className='ml-12' htmlFor="category">
                  Category:
                </label>
                <select
                  className='w-1/4'
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

              {/* Brand */}
              <div className='text-lg section  flex flex-row w-full gap-4 h-full justify-between my-4'>
                <label className='ml-12' htmlFor="searchBrand">
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

              {/* Size */}
              <div className='text-lg section flex flex-row w-full gap-4 h-1/2 justify-between my-4'>
                <label className='ml-12' htmlFor="size">
                  Size:
                </label>
                <select
                  className='w-1/4'
                  id="size"
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