import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './styles.css';
import '../App.css';
// import { useNavigate } from 'react-router-dom';

const ProductForm = ({ currentProduct, clearCurrentProduct }) => {
  // const adminnav=useNavigate();
  const [product, setProduct] = useState({
    title: '',
    price: '',
    body: '',
    description: '',
    fuel: '',
    transmission: '',
    mileage: '',
    model: '',
    year: '',
    thumbnail: null,
    images: [],
  });

  useEffect(() => {
    if (currentProduct) {
      setProduct({
        ...currentProduct,
        thumbnail: null,
        images: [],
      });
    } else {
      clearForm();
    }
  }, [currentProduct]);

  const clearForm = () => {
    setProduct({
      title: '',
      price: '',
      body: '',
      description: '',
      fuel: '',
      transmission: '',
      mileage: '',
      model: '',
      year: '',
      thumbnail: null,
      images: [],
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setProduct({ ...product, [name]: files[0] });
  };

  const handleMultipleFileChange = (e) => {
    const { name, files } = e.target;
    setProduct({ ...product, [name]: files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in product) {
      if (key === 'images') {
        for (let i = 0; i < product.images.length; i++) {
          formData.append('images', product.images[i]);
        }
      } else {
        formData.append(key, product[key]);
      }
    }

    if (currentProduct) {
      await axios.put(`http://localhost:5000/update-product/${currentProduct._id}`, formData);
      clearCurrentProduct();
    } else {
      await axios.post('http://localhost:5000/add-product', formData);
    }

    clearForm();
  };

  return (
    <div className="product-form-container">
      <h2 className="product-form-heading">{currentProduct ? 'Edit Product' : 'Add Product'}</h2>
      <form className="product-form" onSubmit={handleSubmit}>
        <input type="text" name="title" value={product.title} onChange={handleChange} placeholder="Title" required className="form-input"/>
        <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" required className="form-input"/>
        <input type="text" name="body" value={product.body} onChange={handleChange} placeholder="Body" className="form-input"/>
        <input type="text" name="description" value={product.description} onChange={handleChange} placeholder="Description" className="form-input"/>
        <input type="text" name="fuel" value={product.fuel} onChange={handleChange} placeholder="Fuel" className="form-input"/>
        <input type="text" name="transmission" value={product.transmission} onChange={handleChange} placeholder="Transmission" className="form-input"/>
        <input type="number" name="mileage" value={product.mileage} onChange={handleChange} placeholder="Mileage" className="form-input"/>
        <input type="text" name="model" value={product.model} onChange={handleChange} placeholder="Model" className="form-input"/>
        <input type="number" name="year" value={product.year} onChange={handleChange} placeholder="Year" className="form-input"/>
        <input type="file" name="thumbnail" onChange={handleFileChange} className="form-input"/>
        <input type="file" name="images" onChange={handleMultipleFileChange} multiple className="form-input"/>
        <button type="submit" className="submit-button">{currentProduct ? 'Update' : 'Add'} Product</button>
      </form>
      <button onClick={()=>window.location.href=('Adminpanel')}>Back</button>
    </div>
  );
};

export default ProductForm;