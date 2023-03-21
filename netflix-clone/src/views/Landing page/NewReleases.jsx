import React, { useContext } from "react";
import { ContextProvider } from "../../context/contextConfig";
import { MediaDetails } from "../../components";

const NewReleases = () => {
  const { handleHoverActive, handleHoverLeave, mapData } =
    useContext(ContextProvider);

  return (
    <div className="new__release">
      <p className="new__release__title">New releases</p>
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

export default NewReleases;
