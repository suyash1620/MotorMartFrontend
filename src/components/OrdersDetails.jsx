import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";
// import { useNavigate } from "react-router-dom";
import RazorpayButton from "./RazorpayButton";


const OrdersDetails = () => {
 
  const [cartItems, setCartItems] = useState([]);
  const [path, setPath] = useState("");
  // const navigatetopayment = useNavigate();

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

//   const handleUpdateQuantity = async (itemId, type) => {
//     try {
//       await axios.put(
//         `http://localhost:5000/update-quantity/${itemId}?type=${type}`
//       );

//       const user = JSON.parse(localStorage.getItem("user"));
//       const response = await axios.get(
//         `http://localhost:5000/get-cart/${user.id}`
//       );
//       setCartItems(response.data.data);
//     } catch (error) {
//       console.error("Error updating quantity:", error);
//     }
//   };

  // const gotopaymentpage = () => {
  //   navigatetopayment("/PaymentPage");
  // };

  return (
    <div  >
      <div className="cart">
        <h1>MY ORDERS</h1>
      </div>
<br />
<div style={{backgroundColor:"black", marginTop:"-25px", color:"white"}}>
  <br />
      <div>
        {cartItems &&
          cartItems.map((cart, ind) => (
            <div
              key={ind}
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                border: "1px solid lightgray",
           
                width: "80%",
                padding: "10px",
                margin: "5px auto",
                borderRadius:"5px",
                boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px'
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

    
            </div>
          ))}
      </div>
      <br />
      <div
        style={{
          padding: "10px",
          border: "1px solid lightgray",
          borderRadius:"5px",
          marginTop: "10px",
          width: "20%",
          margin: "0 auto",
             boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
        }}
      >
        <h6>Total Price: <b style={{color:"orange"}}>${totalPrice} </b></h6>
       
        <h6>Total Products: <b style={{color:"orange"}}>{totalProducts}</b></h6>

        {/* <button onClick={gotopaymentpage} style={{borderRadius:"5px", height:"30px", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto", fontFamily:"cursive" ,boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"}}>
           CHECKOUT
        </button> */}
        <RazorpayButton/>
        <br />
      </div>

      <br />

    
    </div>
    </div>
  );
};

export default OrdersDetails;

