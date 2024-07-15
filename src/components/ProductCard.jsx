import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";

import { Link, useNavigate } from "react-router-dom";
import { truncate } from "../util";
import axios from 'axios';
import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import { FaRoad } from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";
 import { BsFillFuelPumpFill } from "react-icons/bs"; 

 
function ProductCard({ product, path }) {
  const navigate = useNavigate()
  const [hoveredImage, setHoveredImage] = useState(product.thumbnail); // Initial image

  const cart = (productid) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (localStorage.getItem("token")) {
      const data = { productID: productid, userID: user.id };
      axios.post('http://localhost:5000/add-to-cart', data)
        .then(res => {
          
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      navigate("/signup");
    }
  };

  const handleMouseEnter = (image) => {
    setHoveredImage(image);
   
  };

  const handleMouseLeave = () => {
    setHoveredImage(product.thumbnail);
  };

  return (
    <Container>
      <Card style={{ width: "100%", overflow:"hidden",  border:"none", borderRadius:"0"}}>
        <img
          style={{ width: "100%", height: "200px" }}
          src={path + hoveredImage}
          alt=""
          onMouseLeave={handleMouseLeave}
          className="hoverimg"
        />
        
        <Card.Body style={{ backgroundColor: "#54595f" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <div style={{ color: "white" }}>
             
              <Card.Title>{truncate(product.title, 20)}</Card.Title>
              
            </div>
            <div>
       
              <button className="pricebtn">
                <Link
                  className="text-light"
                  to={`/product/${product._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <span style={{ fontSize: "11px" }}>BUY ONLINE</span>
                  <span>
              
                    <b>${product.price}</b>
                   
                  </span>
                </Link>
              </button>
            </div>
          </div>
      
          <Row style={{ color: "white",  borderTop:'2px solid white', marginTop:"10px", paddingTop:"5px"}}>
        
          <Col md="2" style={{ width:"25px",}}><FaRoad/></Col>
       <Col md="3"  className="icnsize">
       
       <p>{product.mileage} mi</p>
            </Col>
            <Col md="2"  style={{ width:"25px"}} className="icnsize"><GiGearStickPattern/></Col>
            <Col md="5" style={{ paddingLeft:"8px", width:"100px"}} className="icnsize"><p>{product.transmission}</p></Col>

            {/* <Col md="2" style={{ width:"0px"}}></Col> */}
            <Col md="5" style={{ paddingLeft:"5px", width:"100px", gap:"5px"}} className="icnsize"><BsFillFuelPumpFill/><span style={{marginLeft:"10px"}}>{product.fuel}</span></Col>
          </Row>
         
          <Button className='ms-4' onClick={() => cart(product._id)}>Add to Cart</Button>
      
          
        </Card.Body>
        <div
          className="thumbnails"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          {product.images.map((image, index) => (
          
        <Row>
          <Col className="imghov">
          <img
              key={index}
              src={path + image}
              alt={`Thumbnail ${index}`}
              style={{  cursor: "pointer" }}
              onMouseEnter={() => handleMouseEnter(image)}
              className="imghover"
            /></Col>
        </Row>
          ))}
          
          <div className="onhoverdiv">
          <div className="product"></div>
          <div className="product"></div>
          <div className="product"></div>
          <div className="product"></div>
          </div>
        </div>
      </Card>
    </Container>
  );
}

export default ProductCard;
