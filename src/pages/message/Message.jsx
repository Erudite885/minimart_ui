import React from "react";
import "./Message.scss";
import { Link } from "react-router-dom";

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          {/* <Link to="/messages"> */}
            MESSAGES
          {/* </Link> */}
           > JoHN DOE >
        </span>
        <div className="messages">
          <div className="item">
            <img
              // src="https://fiverr-res.cloundinary.com/1_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              neque corrupti cupiditate molestiae aliquam vel quam iste modi
              nemo eum necessitatibus, placeat nisi eveniet autem obcaecati fuga
              blanditiis saepe. Labore.
            </p>
          </div>
          <div className="item owner">
            <img
              // src="https://fiverr-res.cloundinary.com/1_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              neque corrupti cupiditate molestiae aliquam vel quam iste modi
              nemo eum necessitatibus, placeat nisi eveniet autem obcaecati fuga
              blanditiis saepe. Labore.
            </p>
          </div>
          <div className="item">
            <img
              // src="https://fiverr-res.cloundinary.com/1_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              neque corrupti cupiditate molestiae aliquam vel quam iste modi
              nemo eum necessitatibus, placeat nisi eveniet autem obcaecati fuga
              blanditiis saepe. Labore.
            </p>
          </div>
          <div className="item owner">
            <img
              // src="https://fiverr-res.cloundinary.com/1_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              neque corrupti cupiditate molestiae aliquam vel quam iste modi
              nemo eum necessitatibus, placeat nisi eveniet autem obcaecati fuga
              blanditiis saepe. Labore.
            </p>
          </div>
          <div className="item">
            <img
              // src="https://fiverr-res.cloundinary.com/1_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              neque corrupti cupiditate molestiae aliquam vel quam iste modi
              nemo eum necessitatibus, placeat nisi eveniet autem obcaecati fuga
              blanditiis saepe. Labore.
            </p>
          </div>
          <div className="item owner">
            <img
              // src="https://fiverr-res.cloundinary.com/1_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              neque corrupti cupiditate molestiae aliquam vel quam iste modi
              nemo eum necessitatibus, placeat nisi eveniet autem obcaecati fuga
              blanditiis saepe. Labore.
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea
            name=""
            placeholder="write a message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
