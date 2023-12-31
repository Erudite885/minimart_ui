import React from "react";
import { Link } from "react-router-dom";
import { ReactIcon } from "../../assets";

import "./MyGigs.scss";

const MyGigs = () => {
  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add">
            <button>Add New Gig</button>
          </Link>
        </div>
        <table>
          <tbody>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Sales</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>
                <img src={ReactIcon} alt="" className="img" />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <img src={ReactIcon} alt="" className="delete" />
              </td>
            </tr>
            <tr>
              <td>
                <img src={ReactIcon} alt="" className="img" />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <img src={ReactIcon} alt="" className="delete" />
              </td>
            </tr>
            <tr>
              <td>
                <img src={ReactIcon} alt="" className="img" />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <img src={ReactIcon} alt="" className="delete" />
              </td>
            </tr>
            <tr>
              <td>
                <img src={ReactIcon} alt="" className="img" />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <img src={ReactIcon} alt="" className="delete" />
              </td>
            </tr>
            <tr>
              <td>
                <img src={ReactIcon} alt="" className="img" />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <img src={ReactIcon} alt="" className="delete" />
              </td>
            </tr>
            <tr>
              <td>
                <img src={ReactIcon} alt="" className="img" />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <img src={ReactIcon} alt="" className="delete" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyGigs;
