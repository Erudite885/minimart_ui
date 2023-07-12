import React from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };

  const message =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad expedita quos incidunt modi repellat, fugit possimus sit ipsam exercitationem rem autem? Enim animi suscipit perferendis ab blanditiis, ad in earum?/";

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tbody>
            <tr>
              <th>Buyer</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
            <tr className="active">
              <td>john Doe</td>
              <td>
                {/* <Link to="/message/123"> className='link */}
                {message.substring(0, 100)}...
                {/* </Link> */}
              </td>
              <td>1 day ago</td>
              <td>
                <button>Mark as read</button>
              </td>
            </tr>
            <tr className="active">
              <td>john Doe</td>
              <td>
                {/* <Link to="/message/123"> className='link */}
                {message.substring(0, 100)}...
                {/* </Link> */}
              </td>
              <td>1 day ago</td>
              <td>
                <button>Mark as read</button>
              </td>
            </tr>
            <tr>
              <td>john Doe</td>
              <td>
                {/* <Link to="/message/123"> className='link */}
                {message.substring(0, 100)}...
                {/* </Link> */}
              </td>
              <td>1 day ago</td>
            </tr>
            <tr>
              <td>john Doe</td>
              <td>
                {/* <Link to="/message/123"> className='link */}
                {message.substring(0, 100)}...
                {/* </Link> */}
              </td>
              <td>1 day ago</td>
            </tr>
            <tr>
              <td>john Doe</td>
              <td>
                {/* <Link to="/message/123"> className='link */}
                {message.substring(0, 100)}...
                {/* </Link> */}
              </td>
              <td>1 day ago</td>
            </tr>
            <tr>
              <td>john Doe</td>
              <td>
                {/* <Link to="/message/123"> className='link */}
                {message.substring(0, 100)}...
                {/* </Link> */}
              </td>
              <td>1 day ago</td>
            </tr>
            <tr>
              <td>john Doe</td>
              <td>
                {/* <Link to="/message/123"> className='link */}
                {message.substring(0, 100)}...
                {/* </Link> */}
              </td>
              <td>1 day ago</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Messages;
