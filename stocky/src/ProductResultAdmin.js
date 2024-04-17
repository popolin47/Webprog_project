import React, { useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from './Sidebar';
import ModifyIcon from './asset/img/modify_icon_Ngb.png';
import RemoveIcon from './asset/img/remove_icon-Nbg.png';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';


const spaces = '      '.repeat(30);


const ProductResultAdmin = () => {
    const location = useLocation();
    const matchingProducts = location.state?.matchingProducts || [];
    console.log(matchingProducts)

    const [value, setValue] = useState('');
  
    //Defie function to handle change to input value
    const handleChange = (event) => {
      setValue(event.target.value);
    };

    const handleDelete = (productId) => {
        console.log("deleting start front"); 
        console.log(productId);
        // fetch(`/delete1/${productId}`, {
        //   method: 'DELETE'
        //   })
        //   .then(response => {
        //       if (!response.ok) {
        //           throw new Error('Failed to delete data');
        //       }
        //       return response.text();
        //   })
        //   .then(data => {
        //     console.log("datasent")
        //       console.log(productId); 
        //   })
        //   .catch(error => {
        //       console.error('Error:', error); 
        //   });
        
        fetch(`/delete1/${productId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                alert('User deleted successfully');
                //history.push('/productManage'); 
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
              {matchingProducts.map((product) => (
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
                  <img src={RemoveIcon} onClick={() => handleDelete(product.PID)} alt='Remove icon' className='w-7 h-auto'/>
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

export default ProductResultAdmin;
