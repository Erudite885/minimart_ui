import React from "react";
import "./Home.scss";
import { CatCard, Featured, Slide, TrustedBy } from "../../components/index";
import { cards } from "../../data";

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
    </div>
  );
};

export default Home;
