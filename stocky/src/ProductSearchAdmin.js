import React , { useState } from 'react';
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
      releaseDate: new Date('2022-01-01'),
    },
    {
      productID: 'P002',
      pro_name: 'shoes2',
      catagory: 'Women',
      brand: 'Nike',
      price: 233,
      quantity: 0,
      size: 'US M 5',
      releaseDate: new Date('2022-02-01'),
    },
    {
      productID: 'P003',
      pro_name: 'shoes3',
      catagory: 'Kid',
      brand: 'Aria',
      price: 233,
      quantity: 1,
      size: 'US M 5',
      releaseDate: new Date('2022-03-01'),
    },
    {
      productID: 'P004',
      pro_name: 'shoes4',
      catagory: 'Kid',
      brand: 'Nike',
      price: 233,
      quantity: 1,
      size: 'US M 6',
      releaseDate: new Date('2022-04-01'),
    },
    {
      productID: 'P005',
      pro_name: 'shoes5',
      catagory: 'Man',
      brand: 'Nike',
      price: 233,
      quantity: 1,
      size: 'US M 4.5',
      releaseDate: new Date('2022-05-01'),
    },
    {
      productID: 'P006',
      pro_name: 'shoes6',
      catagory: 'Man',
      brand: 'Nike',
      price: 233,
      quantity: 1,
      size: 'US M 5.5',
      releaseDate: new Date('2022-06-01'),
    },
    {
      productID: 'P007',
      pro_name: 'shoes7',
      catagory: 'Women',
      brand: 'Nike',
      price: 233,
      quantity: 1,
      size: 'US M 5.5',
      releaseDate: new Date('2022-07-01'),
    },
    {
      productID: 'P008',
      pro_name: 'shoes8',
      catagory: 'Kid',
      brand: 'Nike',
      price: 233,
      quantity: 1,
      size: 'US M 4.5',
      releaseDate: new Date('2022-08-01'),
    },
    {
      productID: 'P009',
      pro_name: 'shoes9',
      catagory: 'Women',
      brand: 'Nike',
      price: 233,
      quantity: 1,
      size: 'US M 4',
      releaseDate: new Date('2022-09-01'),
    },
  ];
  
  const catagory = ['All','Man', 'Women', 'Kid'];
  const defaultOption = catagory[0];
  
  const size = ['All','US M 4','US M 4.5','US M 5','US M 5.5','US M 6'];
  const defaultsize2 = size[0];

  const months = [
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' }
  ];

  const years = [
    { value: '2022', label: '2022' },
    { value: '2023', label: '2023' },
    { value: '2024', label: '2024' },
    { value: '2025', label: '2025' }
  ];

const ProductSearchAdmin = () => {
    const [searchName, setSearchName] = useState('');
    const [searchBrand, setSearchBrand] = useState('');
    const [searchID, setSearchID] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(defaultOption);
    const [isAvailable, setIsAvailable] = useState(true);
    const [selectedSize, setSelectedSize] = useState(defaultsize2);
    const [startMonth, setStartMonth] = useState('');
    const [startYear, setStartYear] = useState('');
    const [endMonth, setEndMonth] = useState('');
    const [endYear, setEndYear] = useState('');
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
      setStartMonth('');
      setStartYear('');
      setEndMonth('');
      setEndYear('');
      setSelectedSize(defaultsize2);
      setMinPrice('');
      setMaxPrice('');
      setSearchID('');
    };

    const handleStartMonthChange = (event) => {
      setStartMonth(event.target.value);
    };
  
    const handleStartYearChange = (event) => {
      setStartYear(event.target.value);
    };
  
    const handleEndMonthChange = (event) => {
      setEndMonth(event.target.value);
    };
  
    const handleEndYearChange = (event) => {
      setEndYear(event.target.value);
    };
  
    const handleSizeChange = (event) => {
      const selectedValue = event.target.value;
      setSelectedSize(selectedValue === 'All' ? '' : selectedValue);
    };

    const handleIDChange = (event) => {
      setSearchID(event.target.value);
    };

    const handleMinPriceChange = (event) => {
      setMinPrice(event.target.value);
    };
    
    const handleMaxPriceChange = (event) => {
      setMaxPrice(event.target.value);
    };

    
  
    const handleSearchSubmit = (event) => {
      event.preventDefault();
      const matchingProducts = Product.filter((product) => {
        const idMatches = !searchID || product.productID.toLowerCase().includes(searchID.toLowerCase());
        const nameMatches = !searchName || product.pro_name.toLowerCase().includes(searchName.toLowerCase());
        const brandMatches = !searchBrand || product.brand.toLowerCase().includes(searchBrand.toLowerCase());
        const categoryMatches = selectedCategory === 'All' || product.catagory.toLowerCase() === selectedCategory.toLowerCase();
        const availabilityMatches = isAvailable ? product.quantity > 0 : product.quantity === 0;
        const sizeMatches = selectedCategory === 'All'  || product.size === selectedSize;
        // const sizeMatches = selectedCategory === 'All' || product.catagory === selectedCategory && product.size === selectedSize;
        const minPriceMatches = !minPrice || (product.price >= parseFloat(minPrice));
        const maxPriceMatches = !maxPrice || (product.price <= parseFloat(maxPrice));
        const startDate = new Date(`${startYear}-${startMonth}-01`);
        const endDate = new Date(`${endYear}-${endMonth}-01`);
        const releaseDateMatches = (!startYear || !startMonth || !endYear || !endMonth) ||
          (product.releaseDate >= startDate && product.releaseDate <= endDate);
  
        return idMatches && nameMatches && brandMatches && categoryMatches &&
               availabilityMatches && sizeMatches && minPriceMatches &&
               maxPriceMatches && releaseDateMatches;
      });
    
      history.push('/result_product', { matchingProducts });
    };
  
    return (
      <div className='p-8 sm:ml-64 overflow-x-auto shadow-md'>
        <div>
          <form onSubmit={handleSearchSubmit}>
            <div className='my-12 mx-36'>
              <div className="flex flex-col w-full h-1/2 items-center justify-between ">
                <div className="bg-[#880501] text-white w-full py-4 text-center ">
                  <h1 className='text-3xl text-white'>Search</h1>
                </div>

                
                {/* product ID */}
                <div className='text-lg section flex flex-row w-full gap-4 h-1/2 justify-between my-4'>
                  <label className='flex justify-center items-center w-40 h-12 text-black text-center text-xl text-left ml-0 bg-gray-100' htmlFor="searchName">
                  Product ID
                  </label>
                  <input
                    className='w-full justify-items-end ml-4'
                    id="searchName"
                    type="text"
                    placeholder="| Enter product ID"
                    value={searchID}
                    onChange={handleIDChange}

                  />
                </div>



                {/* Name */}
                <div className='text-lg section flex flex-row w-full gap-4 h-1/2 justify-between my-4'>
                  <label className='flex justify-center items-center w-40 h-12 text-black text-center text-xl text-left ml-0 bg-gray-100' htmlFor="searchName">
                    Name:
                  </label>
                  <input
                    className='w-full justify-items-end ml-4'
                    id="searchName"
                    type="text"
                    placeholder="| Enter product name"
                    value={searchName}
                    onChange={handleNameChange}
                  />
                </div>

                {/* Price */}
                <div className='text-lg section flex flex-row w-full gap-4 h-1/2 justify-between my-4'>
                    <label className='flex justify-center items-center w-40 h-12 text-black text-center text-xl text-left ml-0 bg-gray-100' htmlFor="searchName">
                      Price:
                    </label>
                    <input
                      className='w-1/5 justify-items-end ml-4'
                      id="searchName"
                      type="text"
                      placeholder="| Enter Min Price"
                      value={minPrice}
                      onChange={handleMinPriceChange}
                    />
                    <div className="h-0.5 bg-black flex-grow my-4"></div>
                    <input
                      className='w-1/5 justify-items-end ml-4'
                      id="searchName"
                      type="text"
                      placeholder="| Enter Max Price"
                      value={maxPrice}
                       onChange={handleMaxPriceChange}
                    />
                </div>


                {/* category choices */}
                <div className='text-lg section flex flex-row w-full gap-4 h-1/2 justify-between my-4'>
                  <label className='flex justify-center items-center w-40 text-xl h-12 bg-gray-100 ml-0' htmlFor="category">
                    Category:
                  </label>
                  <select
                    className='w-full justify-items-end ml-4'
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
                  <label className='flex justify-center items-center text-xl w-40 h-12 bg-gray-100 ml-0' htmlFor="searchBrand">
                    Brand:
                  </label>
                  <input
                    className='w-full justify-items-end ml-4'
                    id="searchBrand"
                    type="text"
                    placeholder="| Enter Brand name"
                    value={searchBrand}
                    onChange={handleBrandChange}
                  />
                </div>
  
                {/* Size */}
                <div className='text-lg section flex flex-row w-full gap-4 h-1/2 justify-between my-4'>
                  <label className='flex justify-center items-center text-xl w-40 h-12 bg-gray-100 ml-0' htmlFor="size">
                    Size:
                  </label>
                  <select
                    className='w-full justify-items-end ml-4'
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
                

                {/* DATE*/}
                <div className='text-lg section flex flex-row w-full gap-4 h-1/2 justify-between my-4'>
                  <label className='flex justify-center items-center text-xl w-40 h-12 bg-gray-100 ml-0' htmlFor="size">
                  Release Date:
                  </label>
                    <select className='justify-items-end ml-4' value={startMonth} onChange={handleStartMonthChange}>
                      <option value="">-- Select start month --</option>
                      {months.map(month => (
                        <option key={month.value} value={month.value}>{month.label}</option>
                      ))}
                    </select>
                    <select className='justify-items-end ml-4' value={startYear} onChange={handleStartYearChange}>
                      <option value="">-- Select start year --</option>
                      {years.map(year => (
                        <option key={year.value} value={year.value}>{year.label}</option>
                      ))}
                    </select>
                    <div className="h-0.5 bg-black flex-grow my-4"></div>
                    <select className='justify-items-end ml-4' value={endMonth} onChange={handleEndMonthChange}>
                      <option value="">-- Select end month --</option>
                      {months.map(month => (
                        <option key={month.value} value={month.value}>{month.label}</option>
                      ))}
                    </select>
                    <select className='justify-items-end ml-4' value={endYear} onChange={handleEndYearChange}>
                      <option value="">-- Select end year --</option>
                      {years.map(year => (
                        <option key={year.value} value={year.value}>{year.label}</option>
                      ))}
                    </select>
                </div>


                {/* Available */}
                <div className='text-lg section flex flex-row w-full gap-4 h-full justify-between my-4'>
                  <label className='flex justify-center items-center text-xl w-40 h-12 bg-gray-100 ml-0' htmlFor="searchAvailable">
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
  
  export default ProductSearchAdmin ;