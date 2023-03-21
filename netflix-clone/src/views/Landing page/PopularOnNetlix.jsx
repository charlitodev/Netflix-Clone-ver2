import React, { useContext } from "react";
import { ContextProvider } from "../../context/contextConfig";
import { MediaDetails } from "../../components";

const PopularOnNetflix = () => {
  const { handleHoverActive, handleHoverLeave, mapData } =
    useContext(ContextProvider);

  return (
    <div className="popular__on__netflix">
      <p className="new__release__title">Popular on Netflix</p>
      <div className="new__release__movie__container">
        {mapData.map((item) => {
          return (
            <div
              key={item.id}
              className="movie__poster__container"
              onMouseEnter={() => handleHoverActive(item)}
              onMouseLeave={() => handleHoverLeave(item)}
            >
              <img
                src={item.poster}
                alt={item.poster}
                className="movie__poster"
              />
              {item.isHovered && <MediaDetails />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularOnNetflix;
