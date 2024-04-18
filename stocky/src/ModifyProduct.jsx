import React, { useState, useEffect } from 'react';
import { useHistory,useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ModifyProduct = () => {
    const catagory = ['All','Man', 'Women', 'Kid'];
    const defaultOption = catagory[0];
    const history = useHistory();
    const location = useLocation();
    const PID = location.state;
    console.log(PID);

    const [selectedCategory, setSelectedCategory] = useState(defaultOption);
    //const [showModal, setShowModal] = useState(false);
    //const [value, setValue] = useState('');


    const [product, setProduct] = useState({
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

    const handleChange = (newData) => {
        let name = newData.target.name;
        setProduct({...product,[name]: newData.target.value})
    }

      const handleSubmit = async (e) => {
        console.log("start change");
        console.log(product)
        e.preventDefault();

        try{
            const response = await fetch(`/ModifyProduct/${PID}`, {
                method: 'PUT',
                headers: {
                  //Accept: 'application/json',
                  'Content-Type': 'application/json'//,
                },
                body: JSON.stringify(product),
            })
            if (!response.ok) {
                throw new Error('Failed to update user');
              }
              console.log('User updated successfully');
        }catch(error){
            console.error('Error updating product:', error);
        }
      };


  return (
    <div className="">
        <div className="text-center">
            <h1 className="text-3xl font-bold">Modify Product</h1>
            <hr className="w-full my-4 border-gray-300"></hr>
            <br />
        </div> 

        <div className="p-72 sm:ml-64 pt-12 items-center"action="/form-useradd" method="GET"> 
   
        <label for="Product" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Product's name</label>
        <form className="flex" onSubmit={handleSubmit}> <input type="text" name="P_name" id="Product" onChange={handleChange}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"  required />
        <button  type="submit" value="Submit" className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded pl-4">
          change
          </button>
        </form>
      
        <label for="Product" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Stock</label>
        <form className="flex" onSubmit={handleSubmit}> <input type="text" name="quantity" id="Product" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"  required />
        <button  type="submit" value="Submit"
          className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded pl-4">
          change
          </button>
        </form>

        <label for="Product" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Size</label>
        <form className="flex" onSubmit={handleSubmit}> <input type="text" name="Size" id="Product" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"  required />
        <button  type="submit" value="Submit" className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded pl-4">
          change
          </button>
        </form>

        <label for="Product" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Price (THB)</label>
        <form className="flex" onSubmit={handleSubmit}> <input type="text" name="Price" id="Product"onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"  required />
        <button  type="submit" value="Submit" className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded pl-4">
          change
          </button>
        </form>

         <label for="Product" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">color</label>
         <form className="flex" onSubmit={handleSubmit}> <input type="text" name="color" id="Product" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"  required />
        <button  type="submit" value="Submit" className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded pl-4">
          change
          </button>
        </form>

        <label for="Product" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Category</label>
        <form className="flex" onSubmit={handleSubmit}> <select name="Catagory" id="Product" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"  required >
            {catagory.map((option) => (
                                <option key={option} value={option}>
                                {option}
                                </option>
            ))}
        </select>
        <button  type="submit" value="Submit" className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded pl-4">
          change
          </button>
        </form>

        <label for="Product" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Release date</label>
        <form className="flex" onSubmit={handleSubmit}> <input type="date" name="ReDate" id="Product" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"  required />
        <button  type="submit" value="Submit" className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded pl-4">
          change
          </button>
        </form>

        <label for="Product" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Description </label>
        <form className="flex" onSubmit={handleSubmit}> <input type="text" name="Description" id="Product" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"  required />
        <button  type="submit" value="Submit" className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded pl-4">
          change
          </button>
        </form>

        <label for="Product" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Picture's URL</label>
        <form className="flex" onSubmit={handleSubmit}> <input type="text" name="pic" id="Product" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"  required />
        <button  type="submit" value="Submit" className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded pl-4">
          change
          </button>
        </form>

        <div className="flex justify-end mt-4   pb-8">
        <Link to="/ProductManage"className="flex justify-end mt-4  pr-4 pb-8">
          <button className="bg-black hover:bg-brown text-white py-2 px-4 rounded">
            back
          </button>
        </Link>
        <Link to="/ProductManage"className="flex justify-end mt-4  pr-4 pb-8">
        <button className="bg-red-500 hover:bg-red-700 text-white  px-4 rounded">
          confirm
          </button>
        </Link>
      </div>
      </div>
      
    </div>
  )
};

export default ModifyProduct;
