import React , { useState } from 'react';
import './productManage.css'
import { useHistory } from 'react-router-dom';

import trash from './asset/img/Trash.svg';
const collection = ['None', 'Winter', 'Summer', 'Autuum'];
const size = ['None' ,11, 10.5, 10, 9.5, 9, 8, 8.5];
const spaces = '      '.repeat(30)

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
  
];
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

    <div>

      <div>
        <h1 className='Title'>Product</h1>
      </div>
      
      <div className='searchBar'>
        <input id="searchName" 
          type="text" 
<<<<<<< Updated upstream:stocky/src/usermanage.js
          placeholder="Enter product name"
=======
          placeholder="Enter Admin name"
          class=''
>>>>>>> Stashed changes:stocky/src/Usermanage.js
          onChange={handleChange}
        />
        <button type='submit'>Search</button><br/>
      </div>
<<<<<<< Updated upstream:stocky/src/usermanage.js

      <div className='Tablebox'>
=======
        </div>
      <div className='Tablebox' >
>>>>>>> Stashed changes:stocky/src/Usermanage.js
        <table>
          <thead>
            <tr>
              <th className='Pn'>{spaces}User{spaces}</th>
              <th className='Sz'>{spaces}Email{spaces}</th>
              <th className='Cat'>{spaces}Password{spaces}</th>
              <th className='Inst'>{spaces}ID{spaces}</th>
              
            </tr>
            <tr>
              <td colSpan="6"></td>
            </tr>
          </thead>
          <tbody>
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
<<<<<<< Updated upstream:stocky/src/usermanage.js
              </td>
              <td>999</td>
              <td>002</td>
=======
              </td><td>
              <div class="" className="ID"> 999</div></td>
             
              
              <td>
                <div class=" flex flex-row">
                  <div class="pr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
            </div>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg></div>

              </td>
>>>>>>> Stashed changes:stocky/src/Usermanage.js
            </tr>
            <tr>
              <td colSpan="6"></td>
            </tr>
          </tbody>
        </table>
<<<<<<< Updated upstream:stocky/src/usermanage.js
      </div>

      <div className='AddButton'>
        <form onSubmit={handleSearchSubmit}>
          <button type='submit'>Add</button>
        </form>
      </div>   
=======
        <div class="pl-80 flex justify-center items-center" >
      <button class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
            Add
        </button>
        
      </div> 
      </div>

        
>>>>>>> Stashed changes:stocky/src/Usermanage.js
    
    </div>

  )
};

export default Usermanage;