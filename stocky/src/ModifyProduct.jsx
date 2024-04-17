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

    /*useEffect(() => {
        if (location.state) {
            setProduct(location.state.product);
        }
    }, [location.state]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };*/

    const handleCategoryChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedCategory(selectedValue === 'All' ? '' : selectedValue);
      };

      const handleSubmit = async (e) => {
        console.log("start change");
        e.preventDefault();

        try{
            const response = await fetch(`/ModifyProduct/${PID}`, {
                method: 'PUT',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(PID),
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

        <div className='flex justify-center'>
        <form onSubmit={handleSubmit} class="relative overflow-x-auto shadow-md sm:rounded-lg p-4 sm:ml-64 " action="" method="">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase dark:text-gray-400 my-4">
                <h1>Product's ID: {product.PID} </h1>

            </thead>
            <tbody>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Product's name
                    </th>
                    <td class="px-12 py-4">
                        <input name="p_name" rows="1" onChange={handleChange} class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Nike Dunk Low Retro"></input>
                    </td>
                </tr>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Stock
                    </th>
                    <td class="px-12 py-4">
                        <input name="quantity" type='number' rows="1" onChange={handleChange} class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="32"></input>
                    </td>
                </tr>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Size
                    </th>
                    <td class="px-12 py-4">
                        <input name="Size" type='text' rows="1" onChange={handleChange} class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="10.5"></input>
                    </td>
                </tr>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Price (THB)
                    </th>
                    <td class="px-12 py-4">
                        <input name="Price" type='text' rows="1" onChange={handleChange} class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="2300"></input>
                    </td>
                </tr>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        color
                    </th>
                    <td class="px-12 py-4">
                        <input name="color" type='text' rows="1" onChange={handleChange} class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Black"></input>
                    </td>
                </tr>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Category
                    </th>
                    <td class="px-12 py-4">
                        <select
                        className='block mx-4 p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        name="Category"
                        value={selectedCategory}
                        onChange={handleCategoryChange}>
                            {catagory.map((option) => (
                                <option key={option} value={option}>
                                {option}
                                </option>
                            ))}
                        </select>
                    </td>
                </tr>
            
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Release date
                    </th>
                    <td class="px-12 py-4">
                        <div class="relative max-w-sm">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            </div>
                            <input name='ReDate' type="date" onChange={handleChange} class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
                        </div>
                    </td>
                </tr>            
            
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Description 
                    </th>
                    <td class="px-12 py-4">
                        <input name="Description" type='text' rows="1" onChange={handleChange} class="block mx-4 p-2.5 py-11 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="description"></input>
                    </td>
                </tr>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Picture's URL
                    </th>
                    <td class="px-12 py-4">
                        <input name="pic" rows="1" onChange={handleChange} class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="https://"></input>
                    </td>
                </tr>   

            </tbody>
        
        
            </table>

            <div className="flex justify-center mt-4">
                <Link to="/ProductManage">
                    <button type="submit" value="Submit" className="justify-end mt-4 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded items-right">
                        Save
                    </button>
                </Link>
            </div>
        </form>
        </div>

        {/*}<div className="p-72 sm:ml-64 pt-12 items-center"action="/form-useradd" method="GET"> 
   
        <label for="Product" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Product's name</label>
        <form className="flex" onSubmit={handleSubmit}> <input type="text" name="P_name" id="Product" onChange={handleChange}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"  required />
        <button  type="submit" value="Submit" className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded pl-4">
          change
          </button>
        </form>
      
        <label for="Product" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Stock</label>
        <form className="flex"> <input type="text" name="quantity" id="Product" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"  required />
        <button  type="submit" value="Submit" onClick={handleSubmit}
          className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded pl-4">
          change
          </button>
        </form>

        <label for="Product" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Size</label>
        <form className="flex"> <input type="text" name="Size" id="Product" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"  required />
        <button  type="submit" value="Submit" className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded pl-4">
          change
          </button>
        </form>

        <label for="Product" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Price (THB)</label>
        <form className="flex"> <input type="text" name="Price" id="Product"onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"  required />
        <button  type="submit" value="Submit" className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded pl-4">
          change
          </button>
        </form>

         <label for="Product" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">color</label>
         <form className="flex"> <input type="text" name="color" id="Product" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"  required />
        <button  type="submit" value="Submit" className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded pl-4">
          change
          </button>
        </form>

        <label for="Product" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Category</label>
        <form className="flex"> <input type="text" name="Catagory" id="Product" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"  required />
        <button  type="submit" value="Submit" className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded pl-4">
          change
          </button>
        </form>

        <label for="Product" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Release date</label>
        <form className="flex"> <input type="text" name="ReDate" id="Product" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"  required />
        <button  type="submit" value="Submit" className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded pl-4">
          change
          </button>
        </form>

        <label for="Product" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Description </label>
        <form className="flex"> <input type="text" name="Description" id="Product" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"  required />
        <button  type="submit" value="Submit" className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded pl-4">
          change
          </button>
        </form>

        <label for="Product" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Picture's URL</label>
        <form className="flex"> <input type="text" name="pic" id="Product" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
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
      </div>{*/}
      
    </div>
  )
};

export default ModifyProduct;
