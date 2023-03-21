import React, { useContext } from "react";
import { ContextProvider } from "../../context/contextConfig";
import { MediaDetails } from "../../components";

const TopMovies = () => {
  const { handleHoverActive, handleHoverLeave, mapData } =
    useContext(ContextProvider);

  return (
    <div className="tv__shows" style={{ marginTop: "8em" }}>
      <p className="new__release__title">Top 10 Movies in Australia Today</p>
      <div className="new__release__movie__container">
        {mapData.map((item) => {
          return (
            <div
              key={item.id}
              className="ranking__shows"
              onMouseEnter={() => handleHoverActive(item)}
              onMouseLeave={() => handleHoverLeave(item)}
            >
              <p className="ranking__number">{item.id}</p>
              <div className="parent__ranking__container">
                <img
                  src={item.poster}
                  alt={item.poster}
                  className="ranking__movie__poster"
                />
                {item.isHovered && <MediaDetails />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopMovies;
