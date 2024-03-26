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
          placeholder="Enter product name"
          onChange={handleChange}
        />
        <button type='submit'>Search</button><br/>
      </div>

      <div className='Tablebox'>
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
              </td>
              <td>999</td>
              <td>002</td>
            </tr>
            <tr>
              <td colSpan="6"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='AddButton'>
        <form onSubmit={handleSearchSubmit}>
          <button type='submit'>Add</button>
        </form>
      </div>   
    
    </div>

  )
};

export default Usermanage;