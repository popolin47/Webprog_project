// SearchHome.jsx

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
const Product = [
  {
      productID: 'P001',
      pro_name: 'shoes1',
      catagory: 'Man',
      brand: 'Adibas',
      avaliable: 1,
      size: 'UK35',
  },
  {   
      productID: 'P002',
      pro_name: 'shoes2',
      catagory: 'Women',
      brand: 'Nike',
      avaliable: 0,
      size: 'UK36',
  },
  {
      productID: 'P003',
      pro_name: 'shoes3',
      catagory: 'Kid',
      brand: 'Aria',
      avaliable: 1,
      size: 'UK35',
  },
  
];

const SearchHome = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    
    const matchingProductIds = Product
    .filter((product) => {
      const productNameMatches = product.pro_name.toLowerCase().includes(searchQuery.toLowerCase());
      
      const brandMatches = product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      
      const sizeMatches = product.size.toLowerCase().includes(searchQuery.toLowerCase());

      return productNameMatches || brandMatches || sizeMatches;
    })
    .map((matchedProduct) => matchedProduct.id);

  // set the state with the matching to navigate to resulat page
  history.push('/search-results', { matchingProductIds });
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <label htmlFor="searchName">Product Name:</label>
        <input
          type="text"
          id="searchName"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <label htmlFor="searchBrand">Brand:</label>
        <input
          type="text"
          id="searchBrand"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchHome;
