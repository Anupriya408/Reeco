import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="sub">
        <div>Orders</div>
        <div>
        
        </div>
        &nbsp;
        <div>Order 32457ABC</div>
      </div>
      <div className="detail">
        <div>
          <h1>Order 32457ABC</h1>
        </div>
        <div>
          <button className="first-button">Back!!!</button>
          <button className="second-button">Approved Order</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
