import React , { useState } from 'react';
import './productManage.css'
import { useHistory } from 'react-router-dom';
import Sidebar from './Sidebar';
import ModifyIcon from './asset/img/modify_icon_Ngb.png';
import RemoveIcon from './asset/img/remove_icon-Nbg.png';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';


const spaces = '      '.repeat(30)
const Product = [
  {
    productID: 'P001',
    pro_name: 'shoes1',
    catagory: 'Man',
    brand: 'Adibas',
    collection: 'summer',
    price: 233,
    quantity: 3,
    size: 'US M 4',
  },
  {
    productID: 'P002',
    pro_name: 'shoes2',
    catagory: 'Women',
    brand: 'Nike',
    collection: 'summer',
    price: 233,
    quantity: 0,
    size: 'US M 5',
  },
  {
    productID: 'P003',
    pro_name: 'shoes3',
    catagory: 'Kid',
    brand: 'Aria',
    collection: 'winter',
    price: 233,
    quantity: 1,
    size: 'US M 5',
  },
  {
    productID: 'P004',
    pro_name: 'shoes4',
    catagory: 'Kid',
    brand: 'Nike',
    collection: 'summer',
    price: 233,
    quantity: 1,
    size: 'US M 6',
  },
  {
    productID: 'P005',
    pro_name: 'shoes5',
    catagory: 'Man',
    brand: 'Nike',
    collection: 'winter',
    price: 233,
    quantity: 1,
    size: 'US M 4.5',
  },
  {
    productID: 'P006',
    pro_name: 'shoes6',
    catagory: 'Man',
    brand: 'Nike',
    collection: 'winter',
    price: 233,
    quantity: 1,
    size: 'US M 5.5',
  },
  {
    productID: 'P007',
    pro_name: 'shoes7',
    catagory: 'Women',
    brand: 'Nike',
    collection: 'autuum',
    price: 233,
    quantity: 1,
    size: 'US M 5.5',
  },
  {
    productID: 'P008',
    pro_name: 'shoes8',
    catagory: 'Kid',
    brand: 'Nike',
    collection: 'autuum',
    price: 233,
    quantity: 1,
    size: 'US M 4.5',
  },
  {
    productID: 'P009',
    pro_name: 'shoes9',
    catagory: 'Women',
    brand: 'Nike',
    collection: 'winter',
    price: 233,
    quantity: 1,
    size: 'US M 4',
  },
];


const ProductMange = (props) => {

  // declare state to hold input value
  const {location} = props
  console.log(location.state)
  const [value, setValue] = useState('');

  //Defie function to handle change to input value
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (

    <div class="p-8 sm:ml-64 overflow-x-auto shadow-md">

      <div>
        <h1 class='text-xl'>Product</h1>
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
          </thead>
          <tbody>
            {Product.map((product) => (
              <tr key={product.productID}>
                <td>{product.pro_name}</td>
                <td>{product.size}</td>
                <td>{product.collection}</td>
                <td>{product.quantity}</td>
                <td>{product.productID}</td>
                <td>
                  <a href='/ModifyProduct'>
                    <img src={ModifyIcon} alt='Modify icon' className='w-8 h-auto'/>
                  </a>
                </td>
                <td>
                  <img src={RemoveIcon} alt='Remove icon' className='w-7 h-auto'/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='AddButton'>
        <a href='/AddProduct'>
          <button type='submit'>Add</button>
        </a>
      </div>   
    </div>

  )
};

export default ProductMange;