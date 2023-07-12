import React from "react";
// import { Link } from 'react-router-dom';
import "./Orders.scss";



const Orders = () => {
  const currentUser = {
    id: 1,
    username: 'John Doe',
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
                <img
                  src="https://fiverr-res.cloundinary.com/1_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
                  alt=""
                />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <img className="delete" src="/img/message.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://fiverr-res.cloundinary.com/1_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
                  alt=""
                />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <img className="delete" src="/img/message.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://fiverr-res.cloundinary.com/1_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
                  alt=""
                />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <img className="delete" src="/img/message.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://fiverr-res.cloundinary.com/1_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
                  alt=""
                />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <img className="delete" src="/img/delete.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://fiverr-res.cloundinary.com/1_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
                  alt=""
                />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <img className="delete" src="/img/delete.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://fiverr-res.cloundinary.com/1_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
                  alt=""
                />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <img className="delete" src="/img/delete.png" alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
