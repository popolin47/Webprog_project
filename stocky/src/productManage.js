import React , { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from './Sidebar';
import ModifyIcon from './modify_icon_Ngb.png'
import RemoveIcon from './remove_icon-Nbg.png'
import './productManage.css'

const collection = ['None', 'Winter', 'Summer', 'Autuum'];
const size = ['None' ,11, 10.5, 10, 9.5, 9, 8, 8.5];
const spaces = '      '.repeat(30)

const ProductManage = () => {
  const history = useHistory();
  const [value, setValue] = useState('');

  //Defie function to handle change to input value
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    history.push('/AddProduct');
  };

  return (

    <div class="p-8 sm:ml-64 overflow-x-auto shadow-md">

    <div>
<Sidebar/>
      <div>
        <h1 className='text-3xl font-bold'>Product</h1>
      </div>
      
      <div className='flex justify-center items-center mt-4'>
        <input 
          id="searchName" 
          type="text" 
          placeholder="Enter product name"
        
          className="border border-gray-300 rounded-md px-3 py-2 mr-2"
          onChange={handleChange}
        />
        <button 
          type='submit'
          className="bg-red-600 text-white rounded-md px-4 py-2"
          onClick={handleSearchSubmit}
        >
          Search
        </button>
      </div>

      <div className='mt-8'>
        <table className='w-full'>
          <thead>
            <tr>
              <th className='p-4'>Product</th>
              <th className='p-4'>Size</th>
              <th className='p-4'>Collection</th>
              <th className='p-4'>In Stock</th>
              <th className='p-4'>ID</th>
              <th className='p-4'></th>
              <th className='p-4'></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='p-4'>Product 1</td>
              <td className='p-4'>
                <select className='border border-gray-300 rounded-md p-2'>
                  {size.map((optionSize) => (
                    <option key={optionSize} value={optionSize}>
                      {optionSize}
                    </option>
                  ))}
                </select>
              </td>
              <td className='p-4'>
                <select className='border border-gray-300 rounded-md p-2'>
                  {collection.map((optionCat) => (
                    <option key={optionCat} value={optionCat}>
                      {optionCat}
                    </option>
                  ))}
                </select>
              </td>
              <td className='p-4'>999</td>
              <td className='p-4'>001</td>
            </tr>
            {/* Additional rows go here */}
          </tbody>
        </table>
      </div>

      <div className='flex justify-center mt-8'>
        <form onSubmit={handleSearchSubmit}>
          <button type='submit' className="bg-red-600 text-white rounded-md px-4 py-2">Add</button>
        </form>
      </div>   
    </div>
  )
};

export default ProductManage;
