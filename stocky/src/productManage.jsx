import React , { useEffect,useState } from 'react';
import './productManage.css'
import { useHistory } from 'react-router-dom';
import Sidebar from './Sidebar';
import ModifyIcon from './asset/img/modify_icon_Ngb.png';
import RemoveIcon from './asset/img/remove_icon-Nbg.png';

const spaces = '      '.repeat(30)

const ProductMange = () => {

  // declare state to hold input value
  const [value, setValue] = useState('');

  const [valueDel, setValueDel] = useState({
        P_name: '',
        Description: '',
        quantity:'',
        Price: '',
        pic:'',
        Size: '',
        ReDate:'',
        Catagory:'',
        color:'',
  });

  //Defie function to handle change to input value
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleChange2 = (id) => {
    console.log(id)
    setValueDel(id)
  };

  const handleDelete = (event) => {
    console.log("deleting start front"); 
    console.log(valueDel);
    fetch(`/deleteProduct/${valueDel}`, {
      method: 'DELETE'
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Failed to delete data');
          }
          return response.text();
      })
      .then(data => {
        console.log("datasent")
          console.log(valueDel); 
      })
      .catch(error => {
          console.error('Error:', error); 
      });
  };

  useEffect(()=>{
    fetch('/productManage')
    .then((res)=> res.json())
    .then((data)=>{
    if (Array.isArray(data)) {
      setValue(data);
      console.log("match");
    } else {
      console.error("Data received from server is not an array:", data);
    }})
    .catch((err) => console.log(err));
  },[]);

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
              <th className='Cat'>{spaces}Catagory{spaces}</th>
              <th className='Inst'>{spaces}In Stock{spaces}</th>
              <th className='Id'>{spaces}ID{spaces}</th>
              <th className='Modi'></th>
              <th className='Del'></th>
            </tr>
          </thead>
          <tbody>
            {value && value.map((product) => (
              <tr key={product.PID}>
                <td>{product.P_name}</td>
                <td>{product.Size}</td>
                <td>{product.Catagory}</td>
                <td>{product.quantity}</td>
                <td>{product.PID}</td>
                <td>
                  <a href='/ModifyProduct'>
                    <img src={ModifyIcon} alt='Modify icon' className='w-8 h-auto'/>
                  </a>
                </td>
                <td>
                  <form onSubmit={handleDelete}>
                    <button onClick={() => handleChange2(product.PID)}>
                    <img src={RemoveIcon} alt='Remove icon' className='w-7 h-auto'/>
                    </button>
                  </form>
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