import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Appbar.css'; 
import img11 from '../img/logo-1.png';
import { PiShoppingCartFill } from "react-icons/pi";
import { FaUserAlt } from "react-icons/fa";

const Navbar = ({ totalProducts }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const navigate = useNavigate();

  const [logintoken] = useState(localStorage.getItem("token"));
  

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("token");
    // localStorage.removeItem("user");
    window.location.href = "/";
  };

  const loginav = useNavigate();
  const userdetails = useNavigate();

  return (
    <div style={{
      width:"100%",
      backgroundColor: "rgba(157, 154, 154, 0.4)",
      position:"fixed",
      top:"0",
      zIndex:"999",
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    }}>
      <div style={{
        width:"100%", 
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
      }}>
        <nav className="navbar">
          <div><img src={img11} alt="nav img"  width="100px" height="40px"/></div>
          <ul className="navbar-links">
            <li><NavLink to="/">HOME</NavLink></li>
            <li><NavLink to="/products">INVENTORY</NavLink></li>
            <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              <NavLink to="/listing" activeClassName="active-link">LISTING+</NavLink>
              {dropdownOpen && (
                <div className="dropdown-content">
                  <NavLink to="/mosaic">Mosaic</NavLink>
                </div>
              )}
            </li>
            <li><NavLink to="/Shopproduct">SHOP</NavLink></li>
            <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              <NavLink to="/pages" activeClassName="active-link">PAGES+</NavLink>
              {dropdownOpen && (
                <div className="dropdown-content">
                  <NavLink to="/about">About us</NavLink>
                  <NavLink to="/contact">Contact us</NavLink>
                </div>
              )}
            </li>
            <li style={{ color:"white", margin:"10px", position:"relative" }} className='appuserli'>
              <FaUserAlt onClick={()=>userdetails("/userdetails")}/>
            </li>
            <div className='appuser'>User</div>
            <div className='icndiv'>
              <PiShoppingCartFill onClick={()=>{navigate("/cart")}}/>
              <span style={{ fontSize:"13px", marginTop:"-20px" }}>{totalProducts}</span>
            </div>
            <div className='icndiv'>
              {!logintoken && (
                <span onClick={()=>loginav("/login")} style={{ fontSize:"18px", cursor:"pointer" }}>Login</span>
              )}
              {logintoken ? (
                <button onClick={logout} className="logoutbtn">Logout </button>
              ) : (
                ""
              )}
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

