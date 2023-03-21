import React from "react";

const MediaDetails = () => {
  return (
    <div className="movie__poster__details">
      <div className="movie__details__header">
        <div className="header_cta">
          <i className="fa-regular fa-circle-play"></i>
          <i className="fa-solid fa-caret-down"></i>
          <i className="fa-solid fa-thumbs-up"></i>
        </div>
        <div>
          <i className="fa-solid fa-caret-down"></i>
        </div>
      </div>
      <div className="movie__details__ratings">
        <small className="movie__age__rest">MA 15+</small>
        <small>16 episodes</small>
        <small className="movie__details__quality">hd</small>
      </div>
      <div className="movie__details__genre">
        <ul>
          <li>
            <small>Dark</small>
          </li>
          <li>
            <small>Drama</small>
          </li>
          <li>
            <small>Revenge</small>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MediaDetails;
