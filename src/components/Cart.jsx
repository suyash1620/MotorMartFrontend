// Cart.js

import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Appbar from './Appbar'


const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [path, setPath] = useState("");

  const calculateTotalPrice = (price, quantity) => {
    return (price * quantity).toFixed(2);
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + parseFloat(calculateTotalPrice(item.price, item.quantity)),
    0
  ).toFixed(2); // Ensuring the total price is a fixed number with two decimal places

  const totalProducts = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    axios
      .get(`http://localhost:5000/get-cart/${user.id}`)
      .then((res) => {
        setCartItems(res.data.data);
        setPath(res.data.filepath);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, []);

  const handleUpdateQuantity = async (itemId, type) => {
    try {
      await axios.put(
        `http://localhost:5000/update-quantity/${itemId}?type=${type}`
      );

      const user = JSON.parse(localStorage.getItem("user"));
      const response = await axios.get(
        `http://localhost:5000/get-cart/${user.id}`
      );
      setCartItems(response.data.data);
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const goToPaymentPage = () => {
    navigate("/OrdersDetails");
  };

  return (
    <div>
      <Appbar totalProducts={totalProducts}/>
      <div className="cart">
        <h1>CART</h1>
      </div>
      <br />
      <div>
        {cartItems &&
          cartItems.map((cart, ind) => (
            <div
              key={ind}
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                border: "1px solid rgb(238, 235, 235)",
                width: "80%",
                padding: "10px",
                margin: "5px auto",
                borderRadius: "5px"
              }}
            >
              <div>
                <img src={`${path}${cart.image}`} alt="" className="cartimg" />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "40%",
                }}
              >
                <div style={{ paddingRight: "0px", fontWeight: "bold" }}>
                  <p> Name: </p><span>{cart.title}</span>
                </div>
                <div style={{ paddingLeft: "60px", fontWeight: "bold" }}>
                  <p> Price: {cart.price}</p>
                </div>
                <div style={{ paddingLeft: "60px", fontWeight: "bold" }}>
                  <p> Quantity: {cart.quantity}</p>
                </div>
                <div style={{ paddingLeft: "60px", fontWeight: "bold" }}>
                  <p>
                    Total Price:{" "}
                    {calculateTotalPrice(cart.price, cart.quantity)}
                  </p>
                </div>
              </div>

              <div
                style={{
                  width: "200px",
                  height: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <button
                  onClick={() => handleUpdateQuantity(cart._id, "inc")}
                  style={{
                    borderRadius: "50%",
                    border: "none",
                    backgroundColor: "orange",
                    height: "40px",
                    width: "40px",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center"
                  }}
                >
                  <span>+</span>
                </button>
                <button
                  onClick={() => handleUpdateQuantity(cart._id, "desc")}
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "skyblue",
                    border: "none",
                    height: "40px",
                    width: "40px",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center"
                    
                  }}
                >
                  <span>-</span>
                </button>
              </div>
            </div>
          ))}
      </div>
      <br />
      <div
        style={{
          padding: "10px",
          border: "2px solid #abb8c3",
          marginTop: "10px",
          width: "20%",
          margin: "0 auto",
        }}
      >
        <h6>Total Price: <b style={{color:"orange"}}>${totalPrice} </b></h6>
       
        <h6>Total Products: <b style={{color:"orange"}}>{totalProducts}</b></h6>

        <button className="totalcartbtn" onClick={goToPaymentPage}>
          PROCEED TO ORDER
        </button>
        <br />
      </div>

      <br />

      <Button
        onClick={() => {
          navigate("/products");
        }}
      >
        Add More Products
      </Button>
    </div>
  );
};

export default Cart;
