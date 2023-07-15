import React from "react";
import "./Home.scss";
import { CatCard, Featured, Slide, TrustedBy } from "../../components/index";
import { cards } from "../../data";
import { ReactIcon } from "../../assets";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard item={card} key={card.id} />
        ))}
      </Slide>
      {/* <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your finger tips</h1>
            <div className="title">
              <img src={ReactIcon} alt="" />
              The best for every budget
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="title">
              <img src={ReactIcon} alt="" />
              The best for every budget
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="title">
              <img src={ReactIcon} alt="" />
              The best for every budget
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="title">
              <img src={ReactIcon} alt="" />
              The best for every budget
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="title">
              <img src={ReactIcon} alt="" />
              The best for every budget
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="item">
            <video src={ReactIcon} controls></video>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
