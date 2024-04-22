import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ModifyIcon from './asset/img/modify_icon_Ngb.png';
import RemoveIcon from './asset/img/remove_icon-Nbg.png';

  const spaces = '      '.repeat(30);
  
  const catagory = ['All','Man', 'Woman', 'Kid'];
  const defaultOption = catagory[0];
  
  const size = ['All','4','4.5','5','5.5','6'];
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
    const [value, setValue] = useState('');
    const [Product, setProduct] = useState([]);
    const adminID = localStorage.getItem('AID');
    const adminUser = localStorage.getItem('username')
    useEffect(()=>{
      const fetchData = async () => {
        try {
            const response = await fetch(`/check_authen`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem("access_token")
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            if (data != false) {
                console.log(data);
            } else {
                window.location.href = '/login';
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };
    fetchData();
      fetch('/ProductSearchAdmin',)
     .then((res)=> res.json())
     .then((data)=>{
     if (Array.isArray(data)) {
      setProduct(data); 
       console.log("match");
     } else {
       console.error("Data received from server is not an array:", data);
     }})
     .catch((err) => console.log(err));
    },[]);
    const [searchName, setSearchName] = useState('');
    const [searchID, setSearchID] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(defaultOption);
    const [selectedSize, setSelectedSize] = useState(defaultsize2);
    const [startMonth, setStartMonth] = useState('');
    const [startYear, setStartYear] = useState('');
    const [endMonth, setEndMonth] = useState('');
    const [endYear, setEndYear] = useState('');
    const [matchingProducts, setmatchingProducts] = useState('');
    const history = useHistory();

    const handleDelete = (productId) => {
      console.log("deleting start front"); 
      console.log(productId);

      fetch(`/deleteProduct/${productId}?adminID=${adminID}&username=${adminUser}`, {
          method: 'DELETE',
      })
      .then(response => {
          if (response.ok) {
              alert('User deleted successfully');
              history.push('/productManage'); 
              // Optionally, you can remove the deleted user row from the table
          } else {
              alert('Error deleting user');
          }
      })
      .catch(error => {
          console.error('Error:', error);
          alert('Error deleting user');
      });  
    };
  
    const handleNameChange = (event) => {
      setSearchName(event.target.value);
    };
  
  
    const handleCategoryChange = (event) => {
      const selectedValue = event.target.value;
      setSelectedCategory(selectedValue === 'All' ? '' : selectedValue);
    };
  
  
    const handleClear = () => {
      setSearchName('');
      setSelectedCategory(defaultOption);
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

    const handlemodify  = (ProductId) =>{
      history.push({pathname:`/ModifyProduct/${ProductId}`,  state: ProductId});
    };
  
  
    const handleSearchSubmit = async (event) => {
      event.preventDefault();
      let startDateValue = null;
      let endDateValue = null;

      // Check if both startMonth, startYear, endMonth, and endYear are selected
      if (startYear !== '' && startMonth !== '' && endYear !== '' && endMonth !== '') {
        // If all are selected, set the startDateValue and endDateValue accordingly
        startDateValue = new Date(Date.UTC(startYear, startMonth - 1, 1));
        endDateValue = new Date(Date.UTC(endYear, endMonth - 1, 1));
      }

      console.log(startMonth);
      console.log(startYear);
      const searchData = {
        searchName: searchName || null,
        searchID: searchID || null,
        minPrice: minPrice || null,
        maxPrice: maxPrice || null,
        startDateValue: startDateValue || null,
        endDateValue: endDateValue || null,
        category: selectedCategory,
        size: selectedSize,
      };
      console.log(searchData);

      try {
        const response = await fetch('/ProductSearchAdmin', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(searchData),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const matchingProducts = await response.json();
        console.log('Search Results:', matchingProducts);

        setmatchingProducts(matchingProducts);
      } 
      catch (error) {
        console.error('Error:', error);
      }
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
          <div className="Tablebox ">
          <table>
            <thead>
              <tr>
              <th className='Pn'>{spaces}Product{spaces}</th>
              <th className='Sz'>{spaces}Size{spaces}</th>
              <th className='Cat'>{spaces}Category{spaces}</th>
              <th className='Inst'>{spaces}In Stock{spaces}</th>
              <th className='Id'>{spaces}ID{spaces}</th>
              <th className='Modi'></th>
              <th className='Del'></th>
              </tr>
            </thead>
            <tbody>
              {matchingProducts && matchingProducts.map((product) => (
                  <tr key={product.PID}>
                    <td>{product.P_name}</td>
                    <td>{product.Size}</td>
                    <td>{product.Category}</td>
                    <td>{product.quantity}</td>
                    <td>{product.PID}</td>
                  <td className="flex">
                    <div className="pl-5" >
                      <a>
                        <button  onClick={() => handlemodify(product.PID)}>
                          <img src={ModifyIcon} alt='Modify icon' className='w-8 h-auto'/>
                        </button>
                      </a> 
                    </div>
                    <div className="pl-5" >
                    <button>
                       <img src={RemoveIcon} onClick={() => handleDelete(product.PID)} alt='Remove icon' className='w-7 h-auto'/>
                    </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    );
  }; 
  
  export default ProductSearchAdmin ;