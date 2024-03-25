import React , { useState } from 'react';
import { useHistory } from 'react-router-dom';

    const collection = ['None', 'Winter', 'Summer', 'Autuum'];
    const color = [
        {name: 'Red', url: 'https://www.riolettcustomaerosols.co.uk/img/colours/bs-381c-bold-red-564.jpg'},
        {name: 'Green', url: 'https://spraytechnologiesaerosols.com/wp-content/uploads/2020/01/262-Bold-Green.jpg'},
        {name: 'Blue', url: 'https://www.bhphotovideo.com/images/images500x500/Rosco_110084014812_377_377_Iris_Purple_Fluorescent_594822.jpg'}
    ]

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
                    {color.map((color) => (
                        <img
                            className='Colorbox'
                            key={color.name}
                            src={color.url}
                            alt={color.name}
                            class='w-12 h-12'
                            onClick={() => setSelectedColor(color)}
                        />
                    ))}
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