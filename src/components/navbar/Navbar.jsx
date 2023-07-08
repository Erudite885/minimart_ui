import React, { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          {/* <Link to="/"> */}
          <span className="text">minimart</span>
          {/* </Link> */}
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span className="">Business</span>
          <span className="">Explore</span>
          <span className="">English</span>
          <span className="">Become a Seller</span>
          <span className="">Sign In</span>
          <button className="button">Sign Up</button>
        </div>
      </div>
      <hr />
      <div className="menu">
        <span>1</span>
        <span>2</span>
        <span>1</span>
        <span>2</span>
        <span>1</span>
        <span>2</span>
      </div>
    </div>
  );
};

export default Navbar;
