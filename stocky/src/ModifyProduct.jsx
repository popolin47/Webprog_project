import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ModifyProduct = () => {
    const catagory = ['All','Man', 'Women', 'Kid'];
    const defaultOption = catagory[0];
    const history = useHistory();

    const [selectedCategory, setSelectedCategory] = useState(defaultOption);
    const [showModal, setShowModal] = useState(false);
    const [value, setValue] = useState('');
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

    const handleChange2 = (id) => {
        console.log(id)
        setProduct(id)
      };

    const handleCategoryChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedCategory(selectedValue === 'All' ? '' : selectedValue);
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("start submit");
        console.log(product);
        fetch(`/ModifyProduct/${product}`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(product),
        })
          .then((response) => {
            console.log(response)
            if (response.status !== 200) {
              console.log("bad");
              throw new Error(response.statusText);
            }
            setShowModal(true);
            history.push('/productmanage');
            return response.json();
          })
          .then(() => {
            console.log('success');
            history.push('/productmanage');
          })
          .catch((err) => {
            console.log(err.toString());
            console.log('error front');
          });
      };


  return (
    <div className="">
        <div className="text-center">
            <h1 className="text-3xl font-bold">Modify Product</h1>
            <hr className="w-full my-4 border-gray-300"></hr>
            <br />
        </div> 
        <div className='flex justify-center'>
        <form class="relative overflow-x-auto shadow-md sm:rounded-lg p-4 sm:ml-64 " action="" method="">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase dark:text-gray-400 my-4">
                <h1>Product's ID: {product.PID} </h1>

            </thead>
            <tbody>

                {/* Name*/}
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Product's name
                    </th>
                    <td class="px-12 py-4">
                        <input id="p_name" rows="1" onChange={handleChange} class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Nike Dunk Low Retro"></input>
                    </td>
                </tr>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Stock
                    </th>
                    <td class="px-12 py-4">
                        <input id="quantity" type='number' rows="1" onChange={handleChange} class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="32"></input>
                    </td>
                </tr>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Size
                    </th>
                    <td class="px-12 py-4">
                        <input id="Size" type='text' rows="1" onChange={handleChange} class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="10.5"></input>
                    </td>
                </tr>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Price (THB)
                    </th>
                    <td class="px-12 py-4">
                        <input id="Price" type='text' rows="1" onChange={handleChange} class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="2300"></input>
                    </td>
                </tr>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        color
                    </th>
                    <td class="px-12 py-4">
                        <input id="color" type='text' rows="1" onChange={handleChange} class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
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
                        id="Category"
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
                            <input id='ReDate' type="date" onChange={handleChange} class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
                        </div>
                    </td>
                </tr>            
            
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Description 
                    </th>
                    <td class="px-12 py-4">
                        <input id="Description" type='text' rows="1" onChange={handleChange} class="block mx-4 p-2.5 py-11 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="description"></input>
                    </td>
                </tr>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Picture's URL
                    </th>
                    <td class="px-12 py-4">
                        <input id="pic" rows="1" onChange={handleChange} class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="httkhlkjollkhn"></input>
                    </td>
                </tr>   

            </tbody>
        
        
            </table>
            <div className="flex justify-center mt-4">
                <form onSubmit={handleSubmit}>
                    <button type="submit" value="Submit" className="justify-end mt-4 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded items-right">
                        Save
                    </button>
                </form>
            </div>
        </form>
        </div>
    </div>
  )
};

export default ModifyProduct;
