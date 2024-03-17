import React , { useState } from 'react';
import './AddProduct.css';

    const collection = ['None', 'Winter', 'Summer', 'Autuum'];
    const color = [
        {name: 'Red', url: 'https://www.riolettcustomaerosols.co.uk/img/colours/bs-381c-bold-red-564.jpg'},
        {name: 'Green', url: 'https://spraytechnologiesaerosols.com/wp-content/uploads/2020/01/262-Bold-Green.jpg'},
        {name: 'Blue', url: 'https://www.bhphotovideo.com/images/images500x500/Rosco_110084014812_377_377_Iris_Purple_Fluorescent_594822.jpg'}
    ]

const AddProduct = () => {

    const [selectedColor, setSelectedColor] = useState(color[0]);

    return(
        <div>
            <div>
                <h1 className='Title'>Add Product</h1>
            </div>

            <div className='infoadd'>
                <p id='ProName'>Product name</p>
                <input type="text"/>

                <p id='Des'>Description</p>
                <input type="text"/>  

                <p id='PID'>Product ID</p>
                <input type="text"/>

                <p id='coll'>Collection</p>
                <select
                className='collectionDrop'
                >
                    {collection.map((ColOption) => (
                        <option key={ColOption} value={ColOption}>
                            {ColOption}
                        </option>
                    ))}
                </select>

                <p>Color</p>
                {color.map((color) => (
                    <img
                        className='Colorbox'
                        key={color.name}
                        src={color.url}
                        alt={color.name}
                        onClick={() => setSelectedColor(color)}
                    />
                ))}
            </div>

            <div className='ProDetail'>

                <h3>Product Detail</h3>

                <p id='style'>Style</p>
                <input type="text"/>

                <p id='Release Date'>Release Date</p>
                <input type="text"/>  
            </div>

        </div>
    )

}

export default AddProduct;