import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ProductCard from "./ProductCard";
import { Col, Row, Form, Container } from 'react-bootstrap';
import '../App.css';

import RangeSlider from './RangeSlider';
import Search from './Search';
import { VscDebugRestart } from "react-icons/vsc";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [path, setPath] = useState('');
  const [filters, setFilters] = useState({
    body: '',
    price: '',
    model: '',
    transmission: '',
    fuel: '',
  });
  const initialFilters = {
    body: '',
    price: '',
    model: '',
    transmission: '',
    fuel: '',
    year: '',
    drive: '',
    color: '',
  };
  const [hoveredImage, setHoveredImage] = useState(null);
  const ResetFilters = () => {
    setFilters(initialFilters);
  };
  useEffect(() => {
    axios.get('http://localhost:5000/get-products')
      .then((res) => {
        setProducts(res.data.data);
        setPath(res.data.filepath);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filteredProducts = products.filter((product) => {
    return (
      (filters.body ? product.body === filters.body : true) &&
      (filters.price ? product.price === Number(filters.price) : true) &&
      (filters.model ? product.model === filters.model : true) &&
      (filters.transmission ? product.transmission === filters.transmission : true) &&
      (filters.fuel ? product.fuel === filters.fuel : true)&&
      (filters.year ? product.year === Number(filters.year) : true)&&
      (filters.drive ? product.drive === filters.drive : true)
   
    
    );
  });

  return (
    // <div className="productmedia">

      <div className="proheader" style={{backgroundColor:"black"}}>
        <br /><br /><br /><br />
      <div  className='define'>
        <div className='names'>
        <h2>VEHICLE FOR SALR</h2>
        <h2>Search Options</h2>
        </div>
      
      </div>
  
  <div className='productsmain'>
    
    <div className='imgdiv'>

       <Container>
      <Row>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, ind) => (
            <Col md={4} key={ind} className="mb-4">
              <ProductCard
                product={product}
                path={path}
                onMouseEnter={() => setHoveredImage(product.image)} 
                onMouseLeave={() => setHoveredImage(null)}
              />
        
              {hoveredImage && (
                <div className="hovered-image">
                  <img src={hoveredImage} alt="Hovered Thumbnail" style={{ width: '100px', height: 'auto' }} />
                </div>
              )}
            </Col>
          ))
        ) : (
          <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        )}
      </Row>
      </Container>
      </div>
    <div className='searchdiv'>
      {/* <Row className="mb-3"> */}
    
        {/* <Col md={4}> */}
          <Form.Group controlId="filterBody">
            {/* <Form.Label>Body</Form.Label> */}
            <Form.Control
              as="select"
              name="body"
              value={filters.body}
              onChange={handleFilterChange}
              data-bs-theme="dark"
            >
              <option value="">Body</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Off-Road">Off-Road</option>
              <option value="Coupe">Coupe</option>
            </Form.Control>
          </Form.Group>
        {/* </Col> */}
        {/* <Col md={4}> */}
          <Form.Group controlId="filterPrice">
            <Form.Label></Form.Label>
            <Form.Control
              as="select"
              name="price"
              value={filters.price}
              onChange={handleFilterChange}
              data-bs-theme="dark"
            >
              <option value="">PRICE</option>
              <option value="147500000">147500000</option>
              <option value="16800000">16800000</option>
              <option value="7500000">7500000</option>
              <option value="874590000">874590000</option>
              <option value="85000000">85000000</option>
            </Form.Control>
          </Form.Group>
        {/* </Col> */}
        {/* <Col md={4}> */}
          <Form.Group controlId="filterModel">
            <Form.Label></Form.Label>
            <Form.Control
              as="select"
              name="model"
              value={filters.model}
              onChange={handleFilterChange}
              data-bs-theme="dark"
            >
              <option value="">MODEL</option>
              <option value="New">New</option>
              <option value="Newest">Newest</option>
              <option value="Hard">Hard</option>
            </Form.Control>
          </Form.Group>

    

          
        {/* </Col> */}

        {/* <Col md={3}> */}
        <br />
<div className='range'>
  <RangeSlider/>
</div>
          <Form.Group controlId="filterYear">
            <Form.Label></Form.Label>
            <Form.Control
              as="select"
              name="year"
              value={filters.year}
              onChange={handleFilterChange}
              data-bs-theme="dark"
            >
              <option value="">YEAR</option>
              <option value="2023">2023</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2015">2015</option>
              <option value="2018">2018</option>
              <option value="2021">2021</option>



            </Form.Control>
          </Form.Group>

          <Form.Group controlId="filterDrive">
            <Form.Label></Form.Label>
            <Form.Control
              as="select"
              name="drive"
              value={filters.drive}
              onChange={handleFilterChange}
              data-bs-theme="dark"
            >
              <option value="">DRIVE</option>
              <option value="FWD">FWD</option>
              <option value="4WD">4WD</option>

          
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="filterColor">
            <Form.Label></Form.Label>
            <Form.Control
              as="select"
              name="color"
              value={filters.drive}
              onChange={handleFilterChange}
              data-bs-theme="dark"
            >
              <option value="">EXTERIOR COLOR</option>
              <option value="green">Green</option>
              <option value="red">Red</option>

          
            </Form.Control>
          </Form.Group>
        {/* </Col> */}
        {/* <Col md={4}> */}
          <Form.Group controlId="filtertransmission">
            <Form.Label></Form.Label>
            <Form.Control
              as="select"
              name="transmission"
              value={filters.transmission}
              onChange={handleFilterChange}
              data-bs-theme="dark"
            >
              <option value="">TRANSMISSION</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
            </Form.Control>
          </Form.Group>
        {/* </Col> */}
        {/* <Col md={4}> */}
          <Form.Group controlId="filterfuel">
            <Form.Label></Form.Label>
            <Form.Control
              as="select"
              name="fuel"
              value={filters.fuel}
              onChange={handleFilterChange}
              data-bs-theme="dark"
              
            >
              <option value="">FUEL TYPE</option>
              <option value="Gasoline">Gasoline</option>
              <option value="Diesel">Diesel</option>
              <option value="Hybrid">Hybrid</option>
            </Form.Control>
          </Form.Group>
        {/* </Col> */}
      {/* </Row> */}
      <br />
      <p style={{fontSize:"15px", fontFamily:"cursive", fontWeight:"bold", color:"white"}}>Search By Keywords</p>
      
<Search/>
<br />
<button className='resetbtn' onClick={ResetFilters}> <VscDebugRestart /> <b>RESET ALL</b></button>
      </div>
  </div>
  </div>
 
    
    // </div>
  
  );
};

export default Products;
