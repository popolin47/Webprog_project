import React from 'react';

const SearchResultPage = ({ matchingProducts }) => {
  return (
    <div>
      <h2>Search Results</h2>
      {matchingProducts && matchingProducts.length > 0 ? (
        <ul>
          {matchingProducts.map((product) => (
            <li key={product.productID}>
              <h3>{product.pro_name}</h3>
              <p>Brand: {product.brand}</p>
              <p>Category: {product.catagory}</p>
              <p>Availability: {product.avaliable ? 'Available' : 'Not Available'}</p>
              <p>Size: {product.size}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No matching products found.</p>
      )}
    </div>
  );
};

export default SearchResultPage;
