import React , { useState } from 'react';

import { useHistory } from 'react-router-dom';
import Sidebar from './Sidebar';

const collection = ['None', 'Winter', 'Summer', 'Autuum'];
const size = ['None' ,11, 10.5, 10, 9.5, 9, 8, 8.5];
const spaces = '      '.repeat(30)

const Usermanage = () => {

  const history = useHistory();
  // declare state to hold input value
  const [value, setValue] = useState('');

  /*const [selectedCollection, setSelectedCollection] = useState(catagory[0]);
  const [selectedSize, setselectedSize] = useState(size[0])*/

  //Defie function to handle change to input value
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  /*const handleCollectionChange = (event) => {
    setSelectedCollection(event.target.value);
  };

  const handleSizeChange = (event) => {
    setselectedSize(event.target.value)
  };*/

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    history.push('/AddProduct');
  };

  return (
    <div class="p-4">
    <div class="sm:ml-64 shadow-md">
      <div class="px-8">
      <div>
        <h1 class=" text-lg">User</h1>
      </div>
      
      <div className='searchBar'>
        <input id="searchName" 
          type="text" 
          placeholder="Enter product name"
          class=''
          onChange={handleChange}
        />
        <button type='submit'>Search</button><br/>
      </div>
        </div>
      <div className='Tablebox'>
        <table>
          <thead>
            <tr>
              <th className='Pn'>{spaces}Product{spaces}</th>
              <th className='Sz'>{spaces}Size{spaces}</th>
              <th className='Cat'>{spaces}Collection{spaces}</th>
              <th className='Inst'>{spaces}In Stock{spaces}</th>
              <th className='Id'>{spaces}ID{spaces}</th>
              <th className='Modi'></th>
              <th className='Del'></th>
            </tr>
            <tr>
              <td colSpan="6"></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product 1</td>
              <td>
                <select
                  className='Dsize'
                >
                  {size.map((optionSize) => (
                    <option key={optionSize} value={optionSize}>
                        {optionSize}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <select 
                  className='SelCat'
                >
                  {collection.map((optionCat) => (
                    <option key={optionCat} value={optionCat}>
                      {optionCat}
                    </option>
                  ))}
                </select>
              </td>
              <td>999</td>
              <td>001</td>
            </tr>
            <tr>
              <td colSpan="6"></td>
            </tr>
            <tr>
              <td>Product 2</td>
              <td>
                <select
                  className='Dsize'
                >
                  {size.map((optionSize) => (
                    <option key={optionSize} value={optionSize}>
                        {optionSize}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <select 
                  className='SelCat'
                >
                  {collection.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </td>
              <td>999</td>
              <td>002</td>
            </tr>
            <tr>
              <td colSpan="6"></td>
            </tr>
            <tr>
              <td>Product 3</td>
              <td>
                <select
                  className='Dsize'
                >
                  {size.map((optionSize) => (
                    <option key={optionSize} value={optionSize}>
                        {optionSize}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <select 
                  className='SelCat'
                >
                  {collection.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </td>
              <td>999</td>
              <td>002</td>
              <td>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>

              </td>
            </tr>
            <tr>
              <td colSpan="6"></td>
            </tr>
           

          </tbody>
        </table>
      </div>

      <div class="justify-items-end" >
      <button class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
            Add
        </button>
      </div>   
    
    </div>
        </div>
  )
};

export default Usermanage;