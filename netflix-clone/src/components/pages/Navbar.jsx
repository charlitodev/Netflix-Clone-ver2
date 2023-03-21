import React from "react";
import { companyData } from "../../data/indexData";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav__right__panel">
        <img src={companyData.navLogo} />
        <div className="nav__links_container">
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>News & Popular</li>
            <li>My List</li>
            <li>Browse by Language</li>
          </ul>
        </div>
      </div>
      <div className="nav__left__panel">
        <i className="fa-solid fa-magnifying-glass nav__icon "> </i>
        <p style={{ margin: "0 10px" }}>Kids</p>
        <i className="fa-regular fa-bell nav__icon notification__bar">
          <p className="nav__badge">0</p>
        </i>

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          style={{ margin: "0 10px" }}
          className="netflix__avatar"
        />
        <i className="fa-solid fa-caret-down nav__icon"></i>
      </div>
    </div>
  );
};

export default Navbar;
