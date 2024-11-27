import React, { useState, useEffect } from 'react';
import ProductList from '../src/component/ProductList';
import './App.css';

const App = () => {
  const [products, setProducts] = useState(() => {
    // Retrieve products from local storage when the component mounts
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  // Effect to store products in local storage whenever products state changes
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProductHandler = () => {
    if (productId && productName && productPrice) {
      const newProduct = {
        id: productId,
        name: productName,
        price: parseInt(productPrice),
      };
      setProducts([...products, newProduct]);
      setProductId('');
      setProductName('');
      setProductPrice('');
    }
  };

  const deleteProductHandler = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const totalValue = products.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="app-container">
      <h2>Product Tracker</h2>
      <div className="input-container">
        <input
          type="number"
          placeholder="Product ID"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Selling Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <button onClick={addProductHandler}>Add Product</button>
      </div>
      <ProductList products={products} onDelete={deleteProductHandler} />
      <h3>Total Value Worth of Products: ₹{totalValue}</h3>
    </div>
  );
};

export default App;
