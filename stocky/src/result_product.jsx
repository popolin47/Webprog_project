// copy from chatGPT but will edit later

import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResultPage = () => {
  const location = useLocation();
  const matchingProducts = location.state?.matchingProducts || [];

  return (
    <div>
      <h2>Search Results</h2>
      {matchingProducts.length > 0 ? (
        <ul>
          {matchingProducts.map((product, index) => (
            <li key={index}>{product.pro_name}</li>
          ))}
        </ul>
      ) : (
        <p>No matching products found.</p>
      )}
    </div>
  );
};

export default SearchResultPage;
