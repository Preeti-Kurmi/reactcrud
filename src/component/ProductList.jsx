import React from 'react';

const ProductList = ({ products, onDelete }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.price} - {product.name}{' '}
          <button onClick={() => onDelete(product.id)}>Delete Product</button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
