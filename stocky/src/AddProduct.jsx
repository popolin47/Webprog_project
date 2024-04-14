import React , { useState } from 'react';
import { useHistory } from 'react-router-dom';

    const collection = ['None', 'Winter', 'Summer', 'Autuum'];
    const color = ['None','Red','Green','Blue']

const AddProduct = () => {

    const [selectedColor, setSelectedColor] = useState(color[0]);
    const history = useHistory();

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        history.push('/productmanage');
      };

    return(
        <div class="p-4 sm:ml-64">
            <div>
                <h1 class='text-3xl'>Add Product</h1>
            </div>

            <div className='infoadd'>
                <p id='ProName'>Product name</p>
                <input type="text" class='w-4/5 bg-gray-200 border-none rounded'/>

                <p id='Des'>Description</p>
                <input type="text" class='w-4/5 bg-gray-200 border-none rounded'/>  

                <p id='PID'>Product ID</p>
                <input type="text" class='w-4/5 bg-gray-200 border-none rounded'/>

                <p id='coll'>Collection</p>
                <select
                class='border-none rounded bg-gray-200'
                >
                    {collection.map((ColOption) => (
                        <option key={ColOption} value={ColOption}>
                            {ColOption}
                        </option>
                    ))}
                </select>

                <p>Color</p>
                <label class='flex flex-nowrap gap-0.5'>
                    <select
                    class='border-none rounded bg-gray-200'>
                    {color.map((color) => (
                        <option key={color} value={color}>
                            {color}
                        </option>
                    ))}
                    </select>
                </label> 
            </div>

            <div className='ProDetail'>

                <h3 class='text-xl'>Product Detail</h3>

                <p id='style'>Style</p>
                <input type="text" class='w-4/5 bg-gray-200 border-none rounded'/>

                <p id='Release Date'>Release Date</p>
                <input type="text" class='w-4/5 bg-gray-200 border-none rounded'/>  

            </div>

            <div class='flex ml-100 w-4/5 justify-end'>
 
                <a href='/productmanage'>
                    <button class='flex-1 m-2 border-none rounded bg-black text-white' type='submit'>Back</button>
                </a>
                      
                <form onSubmit={handleSearchSubmit}>
                    <button type='submit' class='flex-1 m-2 border-none rounded bg-red-600 text-white'>Confirm</button>
                </form>
            
            </div>
        </div>
    )

}

export default AddProduct;