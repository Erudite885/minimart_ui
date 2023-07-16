import React from "react";
import { Link } from "react-router-dom";
import { ReactIcon } from "../../assets";
import "./Message.scss";

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages"> MESSAGES </Link> > JoHN DOE >
        </span>
        <div className="messages">
          <div className="item">
            <img
              src={ReactIcon}
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
              src={ReactIcon}
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
              src={ReactIcon}
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
              src={ReactIcon}
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
              src={ReactIcon}
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
              src={ReactIcon}
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
