import React from "react";
import "./Details.css";
import { IoIosAdd, IoIosStar } from "react-icons/io";
import { IoRemoveCircle } from "react-icons/io5";

const Details = () => {
  return (
    <div className="Details-here">
      <table>
        <thead>
          <tr>
            <th>
              <p>Supplier</p>
              <h1>East coast fruits & vegetables</h1>
            </th>
            <th>
              <p>Shipping date</p>
              <h1>Thu, Feb 10</h1>
            </th>
            <th>
              <p>Total</p>
              <h1>$15,028.3</h1>
            </th>
            <th>
              <p>Category</p>
              <div>
                <IoIosStar />
                <IoIosAdd />
                <IoRemoveCircle />

              
              </div>
            </th>
            <th>
              <p>Department</p>
              <h1>300-444-678</h1>
            </th>
            <th>
              <p>Status</p>
              <h1>Wait For approvel</h1>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Details;
