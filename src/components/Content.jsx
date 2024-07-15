import React from "react";
import { FaCarRear } from "react-icons/fa6";
import Sliceproducts from "./Sliceproducts";
import Homesec6 from './Homsec6'
import HomeCounter from "./HomeCounter"
import HomeCounter2 from "./HomeCounter2"
import HomeCounter3 from "./HomeCounter 3"
import HomeCounter4 from "./HomeCounter 4"
import { MdOutlineMessage } from "react-icons/md";
import Search from "./Search";

const Content = () => {
  
  return (
    <>
      <div className="homesection2">
        <h5>
          {" "}
          <FaCarRear /> SEARCH INVENTORY
        </h5>
             <Search/>
  
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>
        RECENT <span style={{ color: "orange" }}>CARS</span>
      </h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

      <Sliceproducts />

      <br />

      <div className="homesec4">
        <div className="homesec4flex">
          <div className="innersec4">
            <span style={{ fontSize: "35px" }}>
              {" "}
              <FaCarRear />
            </span>
            <h3>LOOKING FOR A CAR?</h3>
            <p>
              Our cars are delivered fully-registered with all requirements
              completed. We’ll deliver your car.
            </p>
            <button className="homesec4btn">INVENTORY</button>
          </div>
          <div className="innersec4" style={{ backgroundColor: "orange" }}>
            <span style={{ fontSize: "35px" }}>
              
              <FaCarRear />
            </span>
            <h3>WANT TO SELL A CAR?</h3>
            <p style={{ color: "white" }}>
              Receive the absolute best value for your trade-in vehicle. We even
              handle all paperwork. Schedule appointment!
            </p>
            <button className="homesec4btn">INVENTORY</button>
          </div>
        </div>
      </div>
      <br />
      <div className="homesec5">
        <div className="homesec4flex">
          <div className="minihomesec5">
<span style={{fontSize:"30px"}}> <FaCarRear /></span> <span style={{fontWeight:"bold"}}>WIDE RANGE OF BRANDS</span>
<p>With a robust selection of popular vehicles on hand, as well as leading vehicles from BMW and Ford.</p>


          </div>
          <div className="minihomesec5"><span style={{fontSize:"30px"}}> <FaCarRear /></span> <span style={{fontWeight:"bold"}}>
          TRUSTED BY THOUSANDS</span>
          <p>10 new offers every day. 350 offers on site, trusted by a community of thousands of users.</p></div>
          <div className="minihomesec5"><span style={{fontSize:"30px"}}> <FaCarRear /></span> <span style={{fontWeight:"bold"}}>SERVICE & MAINTENANCE</span>
          <p>Our stress-free finance department that can find financial solutions to save you money.</p></div>
        </div>
      </div>

      <div className="homesec6">
        <Homesec6/>
      </div>
      <br />
      
      <div className="Homecounter">
        <div className="minhomecountersec6">
          <div className="sec6minicounup"><HomeCounter/></div>
          <div className="sec6minicounup"><HomeCounter2/></div>
        </div>
        <div className="minhomecountersec6">
        <div className="sec6minicounup"><HomeCounter3/></div>
        <div className="sec6minicounup"><HomeCounter4/></div>
        </div>
      </div>
      <br />

      <div style={{width:"100%", backgroundColor:"#ffb129", height:"100px", display:"flex", alignItems:"center",
        justifyContent:"space-evenly"
      }}>
        <h1>HAVE A QUESTIONS? FEEL FREE TO ASK...</h1>
        <h1>        <FaCarRear /> 
        +1 878-9674-4455</h1>
        <button  style={{border:"2px solid white", fontWeight:"bold",  
         fontFamily:"sans-serif"}} className="lastsec"><MdOutlineMessage />  FEEDBACK</button>
      </div>
    </>
  );
};

export default Content;
