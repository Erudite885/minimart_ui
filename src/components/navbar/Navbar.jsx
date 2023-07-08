import React, { useState } from "react";
// import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);
  
  return (
    <div className="navbar flex flex-col justify-center bg-lime-500 text-lime-100">
      <div className="container w-[1400px] flex justify-between py-[20px]">
        <div className="logo font-bold text-[34px]">
          {/* <Link to="/"> */}
          <span className="text">minimart</span>
          {/* </Link> */}
          <span className="dot text-green-700 ml-1">.</span>
        </div>
        <div className="links flex gap-[24px] items-center font-medium">
          <span className="cursor-pointer">Business</span>
          <span className="cursor-pointer">Explore</span>
          <span className="cursor-pointer">English</span>
          <span className="cursor-pointer">Become a Seller</span>
          <span className="cursor-pointer">Sign In</span>
          <button className="button text-white py-[10px] px-[20px] rounded-[5px] border-2 border-white border-opacity-60 cursor-pointer bg-transparent hover:bg-lime-800 hover:border-lime-800 shadow-md">
            Sign Up
          </button>
        </div>
      </div>
      <hr />
      <div className="menu w-[1400px] py-[10px] flex justify-between font-thin text-gray-200">
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
