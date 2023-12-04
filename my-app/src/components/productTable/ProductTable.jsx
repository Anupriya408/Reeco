import React, { useState } from "react";
import "./ProductTable.css";
import { FaReceipt, FaSearch, FaCheck, FaTimes, FaEdit } from "react-icons/fa";

// MissedPopup component
const MissingPopup = ({ onMarkMissing }) => {
  return (
    <div className="missed-popup">
      <p>Mark as Missing --?</p>
      <button onClick={() => onMarkMissing(true)}>Right</button>
      <button onClick={() => onMarkMissing(false)}>Wrong</button>
    </div>
  );
};

const ProductTable = () => {
  const [products, setProducts] = useState([
   
    {
      productName: "Product 1", 
      brand: "Brand A",
      price: 60,
      quantity: 2,
      total: 80,
      status: "Pending",
      imageUrl:
        
        "https://tse2.mm.bing.net/th?id=OIP.75LtdStl8lDjAL9U9BB2FgHaE7&pid=Api&P=0&h=180",
    },
    {
      productName: "Product 2",
      brand: "Brand B",
      price: 60,
      quantity: 2,
      total: 900,
      status: "Pending",
      imageUrl:
      "https://tse2.mm.bing.net/th?id=OIP.75LtdStl8lDjAL9U9BB2FgHaE7&pid=Api&P=0&h=180",
    },
    {
      productName: "Product 3",
      brand: "Brand C",
      price: 60,
      quantity: 2,
      total: 78990,
      status: "Pending",
      imageUrl:"https://tse2.mm.bing.net/th?id=OIP.zJRSr9beQR72AjkA45aZjAAAAA&pid=Api&P=0&h=180"
        
    },
    {
      productName: "Product 4",
      brand: "Brand A",
      price: 60,
      quantity: 2,
      total: 90,
      status: "Pending",
      imageUrl:
      "https://tse2.mm.bing.net/th?id=OIP.zJRSr9beQR72AjkA45aZjAAAAA&pid=Api&P=0&h=180"
    },
    {
      productName: "Product 5",
      brand: "Brand B",
      price: 60,
      quantity: 2,
      total: 340,
      status: "Pending",
      imageUrl:
      "https://tse2.mm.bing.net/th?id=OIP.75LtdStl8lDjAL9U9BB2FgHaE7&pid=Api&P=0&h=180",
    },
  ]);
  const [showMissingPopup, setShowMissingPopup] = useState(false);
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);

  const handleApprove = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].status = "Approved";
    setProducts(updatedProducts);
  };

  const handleMarkMissing = (index, urgent = false) => {
    setSelectedProductIndex(index);
    setShowMissingPopup(true);
  };

  const handleEdit = (index) => {
    console.log(`Edit product at index ${index}`);
   
  };

  const onMarkMissing = (urgent) => {
    const updatedProducts = [...products];
    updatedProducts[selectedProductIndex].status = urgent
      ? "Missing - fast"
      : "Missing";
    setProducts(updatedProducts);
  };

  const toggleMissingPopup = (index) => {
    setSelectedProductIndex(index);
    setShowMissingPopup(!showMissingPopup);
  };

  return (
    <div className="main">
      <div className="nav">
        <div className="start">
          <div>
            <input type="text" placeholder="Search here..." />
            <span>
              <FaSearch />
            </span>
          </div>
        </div>
        <div className="end">
          <button className="first-button">Add Item...</button>
          <button>
            <FaReceipt />
            
          </button>
        </div>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Status</th>
       
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={product.imageUrl}
                    alt={`Product ${index + 1}`}
                    style={{ width: "40px", height: "40px" }}
                  />
                </td>
                <td>{product.productName}</td>
                <td>{product.brand}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.total}</td>
                <td data-status={product.status}>{product.status}</td>
                <td>
                  <button onClick={() => handleApprove(index)}>
                    <FaCheck />
                  </button>
                  <button onClick={() => handleMarkMissing(index, false)}>
                    <FaTimes />
                  </button>

                  <button onClick={() => handleEdit(index)}>
                    <FaEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showMissingPopup && (
        <div className="overlap">
          <MissingPopup
            onMarkMissing={(urgent) => {
              onMarkMissing(urgent);
              toggleMissingPopup(null);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ProductTable;
