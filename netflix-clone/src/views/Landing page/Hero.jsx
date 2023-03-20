import React from "react";
import { movieData, heroBackground } from "../../data/indexData";

const Hero = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `linear-gradient(to top, rgb(20, 20, 20) 0%, transparent 100%), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundBlendMode: "darken",
      }}
    >
      <div className="hero__right__panel">
        <h3 className="hero__title">The Magician's Elephant</h3>
        <p className="hero__rank">No. 5 in Movies Today</p>
        <p className="hero__sub__title">
          A determined boy accepts a king's challenge to perform three
          impossible tasks in exchange for a magical elephant -- and the chance
          to chase his destiny.
        </p>
        <div className="button__container">
          <button className="hero__play__button">Play</button>
          <button className="hero__moreInfo__button">More info</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
