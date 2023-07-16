import React from "react";

import "./Orders.scss";
import { ReactIcon } from "../../assets";

const Orders = () => {
  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tbody>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
              <th>Contact</th>
            </tr>
            <tr>
              <td>
                <img src={ReactIcon} alt="" />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <img className="delete" src={ReactIcon} alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img src={ReactIcon} alt="" />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <img className="delete" src={ReactIcon} alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img src={ReactIcon} alt="" />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <img className="delete" src={ReactIcon} alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img src={ReactIcon} alt="" />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <img className="delete" src={ReactIcon}alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img src={ReactIcon} alt="" />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <img className="delete" src={ReactIcon}alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img src={ReactIcon} alt="" />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <img className="delete" src={ReactIcon}alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
