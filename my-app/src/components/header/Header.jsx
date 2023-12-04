import React from "react";
import "./Header.css"; 
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <div className="start">
          <div>
            <i>Reeco</i>
          </div>
          <div>Store</div>
          <div>Orders</div>
          <div>Analytics</div>
        </div>
        <div className="end">
          <div>
            <FaShoppingCart />
          </div>
          <div>
            Hello, <span id="user">AnuPriya</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
