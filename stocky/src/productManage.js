import React , { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from './Sidebar';
import ModifyIcon from './asset/img/modify_icon_Ngb.png'
import RemoveIcon from './asset/img/remove_icon-Nbg.png'
import './productManage.css'

const collection = ['None', 'Winter', 'Summer', 'Autuum'];
const size = ['None' ,11, 10.5, 10, 9.5, 9, 8, 8.5];
const spaces = '      '.repeat(30)

const ProductManage = () => {
  const history = useHistory();
  // declare state to hold input value
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
        <h1 className='Title'>Product</h1>
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
              <td><img src={ModifyIcon} alt='Modify icon' class='w-8 h-auto'/></td>
              <td><img src={RemoveIcon} alt='Remove icon' class='w-7 h-auto'/></td>
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
              <td><img src={ModifyIcon} alt='Modify icon' class='w-8 h-auto'/></td>
              <td><img src={RemoveIcon} alt='Remove icon' class='w-7 h-auto'/></td>
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
              <td><img src={ModifyIcon} alt='Modify icon' class='w-8 h-auto'/></td>
              <td><img src={RemoveIcon} alt='Remove icon' class='w-7 h-auto'/></td>
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

export default ProductManage;
