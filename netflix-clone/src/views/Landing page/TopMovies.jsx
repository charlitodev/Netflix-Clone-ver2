import React from "react";
import { movieData } from "../../data/indexData";

const TopMovies = () => {
  return (
    <div className="tv__shows">
      <p className="new__release__title">Top 10 Movies in Australia Today</p>
      <div className="new__release__movie__container">
        {movieData.map((item, id) => {
          return (
            <div key={id} className="ranking__shows">
              <p className="ranking__number">{item.id}</p>
              <img
                key={id}
                src={item.poster}
                alt={item.poster}
                className="ranking__movie__poster"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopMovies;
