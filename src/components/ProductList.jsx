import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './styles.css';
import '../App.css'
import { useNavigate } from 'react-router-dom';


const ProductList = ({ editProduct }) => {
  const adminnav=useNavigate();
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:5000/get-products');
    setProducts(response.data.data);
  };

  const deleteProduct = async (id) =>{ 
    await axios.delete(`http://localhost:5000/delete-product/${id}`);
    fetchProducts();
  };
  
  
 

  return (
    <div className="product-list-container">
      <h2 className="product-list-heading">Products Listing</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product._id} className="product-item">
            <span className="product-title">{product.title}</span> - <span className="product-price">{product.price}</span>
            <button className="edit-button" onClick={() => editProduct(product)}>Edit</button>
            <button className="delete-button" onClick={() => deleteProduct(product._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={()=>adminnav("/Adminpanel")}>Back</button>
    </div>
  );
};

export default ProductList;