import React, { useContext } from "react";
import { ContextProvider } from "../../context/contextConfig";

const Hero = () => {
  const { activeMedia } = useContext(ContextProvider);

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `linear-gradient(to top, rgb(20, 20, 20) 0%, transparent 100%), url(${activeMedia.poster})`,
        backgroundSize: "cover",
        backgroundBlendMode: "darken",
      }}
    >
      <div className="hero__right__panel">
        <h3 className="hero__title">{activeMedia.mediaName}</h3>
        <p className="hero__rank">No. {activeMedia.id} in Movies Today</p>
        <p className="hero__sub__title">{activeMedia.movieDescription}</p>
        <div className="button__container">
          <button className="hero__play__button">
            <i className="fa-solid fa-play"></i> Play
          </button>
          <button className="hero__moreInfo__button">
            <i className="fa-solid fa-circle-info"></i> More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
