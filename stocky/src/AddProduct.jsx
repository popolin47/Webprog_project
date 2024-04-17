import React , { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

    const collection = ['None', 'Men', 'Women', 'Kids'];
    const colorOptions = ['None','Red','Green','Blue']

const AddProduct = () => {

    //const [selectedColor, setSelectedColor] = useState(color[0]);
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);
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

  const handleInsery = (newData) => {
    let name = newData.target.name;
    setProduct({...product,[name]: newData.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("start submit");
    console.log(product);
    fetch('/AddProduct', {
      method: 'POST',
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


    return(
        <div class="p-4 sm:ml-64">
            <div>
                <h1 class='text-3xl'>Add Product</h1>
            </div>

            <div className='infoadd'>

                <p id='ProName'>Product name</p>
                <input type="text" onChange={handleInsery} name='P_name' class='w-4/5 bg-gray-200 border-none rounded'/>  

                <p id='quantity'>Quantity</p>
                <input type="number" onChange={handleInsery} name='quantity' class='w-4/5 bg-gray-200 border-none rounded'/>

                <p id='Size'>Size</p>
                <input type="text" onChange={handleInsery} name='Size' class='w-4/5 bg-gray-200 border-none rounded'/>

                <p id='price'>Price</p>
                <input type="text" onChange={handleInsery} name='Price' class='w-4/5 bg-gray-200 border-none rounded'/>

                <p id='coll'>Catagory</p>
                <select
                name='Catagory'
                onChange={handleInsery}
                class='border-none rounded bg-gray-200'
                >
                    {collection.map((ColOption) => (
                        <option key={ColOption} value={ColOption}>
                            {ColOption}
                        </option>
                    ))}
                </select>

                <p>Color</p>
                <label className='flex flex-nowrap gap-0.5'>
                    <select
                        name="color"
                        value={product.productColor}
                        onChange={handleInsery}
                        className='border-none rounded bg-gray-200'>
                        {colorOptions.map((color) => (
                            <option key={color} value={color}>
                                {color}
                            </option>
                        ))}
                    </select>
                </label> 

                <h3 class='text-xl'>Product Detail</h3>

                <p id='Release Date'>Release Date</p>
                <input type="date" onChange={handleInsery} name='ReDate' class='w-4/5 bg-gray-200 border-none rounded' placeholder="Select date"/>  

                <p id='Des'>Description</p>
                <input type="text" onChange={handleInsery} name='Description' class='w-4/5 bg-gray-200 border-none rounded'/>

                <p id='PicUrl'>Picture Url</p>
                <input type="number" onChange={handleInsery} name='Pic' class='w-4/5 bg-gray-200 border-none rounded'/>

            </div>

            <div className='flex ml-100 w-4/5 justify-end'>
                <button className='flex-1 m-2 border-none rounded bg-black text-white' onClick={() => history.push('/productmanage')}>Back</button>
                <form onSubmit={handleSubmit}>
                    <button type='submit' value="Submit" className='flex-1 m-2 border-none rounded bg-red-600 text-white'>
                      Confirm
                    </button>
                </form>
            </div>
        </div>
    )

}

export default AddProduct;