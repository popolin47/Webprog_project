import React , { useState,useEffect } from 'react';
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
  const history = useHistory();
  const [value, setValue] = useState('');
  const [search, setSearch] = useState('');
  const [valueDel,setValueDel] = useState({
        P_name: '',
        Description: '',
        quantity:'',
        Price: '',
        pic:'',
        Size: '',
        ReDate:'',
        Category:'',
        color:'',
  });

  const adminID = localStorage.getItem('AID');
  const adminUser = localStorage.getItem('username')

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(`/check_authen`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem("access_token")
                },
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

    fetchData(); // Call the function immediately after the component mounts

    // You can optionally add a cleanup function here if needed

    // If you remove the dependency array, the effect will run every time the component re-renders
  });
  //Defie function to handle change to input value

  const handleChange2 = (id) => {
    console.log(id)
    setValueDel(id)
  };

  const handleDelete = (event) => {
    console.log("deleting start front"); 
    console.log(valueDel);
    fetch(`/deleteProduct/${valueDel}?adminID=${adminID}&username=${adminUser}`, {
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
    }

  const handleSearchSubmit = async () => {
    try {
      const response = await fetch(`/searchproduct?query=${search}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setValue(data);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  const handlemodify  = (ProductId) =>{
    history.push({pathname:`/ModifyProduct/${ProductId}`,  state: ProductId});
  };

  useEffect(()=>{
    fetch('/ProductManage')
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
        <h1 class='text-xl mb-5'>Product</h1>
      </div>
      
      <div className='searchBar'>
        <input id="searchName" 
          type="text" 
          name='P_name'
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Enter product name"
          className="mr-5"
        />
        <button type='submit'className="mr-5" onClick={handleSearchSubmit}>Search</button>
        <button type='submit'className="mr-5">Advanced Search</button><br/>
      </div>

      <div className='Tablebox'>
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
            {value && value.map((product) => (
              <tr key={product.PID}>
                <td>{product.P_name}</td>
                <td>{product.Size}</td>
                <td>{product.Category}</td>
                <td>{product.quantity}</td>
                <td>{product.productID}</td>
                <td>
                  <a>
                    <button  onClick={() => handlemodify(product.PID)}>
                      <img src={ModifyIcon} alt='Modify icon' className='w-8 h-auto'/>
                    </button>
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