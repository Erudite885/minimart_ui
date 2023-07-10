import React from "react";
import "./Featured.scss";
import { ReactIcon } from "../../assets";

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <i>freelance</i> services for your business.
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src={ReactIcon} alt="" />
              <input type="text" placeholder="Try 'building mobile app" />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular: </span>
            <button>Web Design</button>
            <button>Logo Design</button>
            <button>Wordpress</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src={ReactIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
