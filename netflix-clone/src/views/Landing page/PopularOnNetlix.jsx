import React from "react";
import { movieData } from "../../data/indexData";

const PopularMovies = () => {
  return (
    <div className="new__release">
      <p className="new__release__title">Popular on Netlix</p>
      <div className="new__release__movie__container">
        {movieData.map((item, id) => {
          return (
            <img
              key={id}
              src={item.poster}
              alt={item.poster}
              className="movie__poster"
            />
          );
        })}
      </div>
    </div>
  );
};

export default PopularMovies;
