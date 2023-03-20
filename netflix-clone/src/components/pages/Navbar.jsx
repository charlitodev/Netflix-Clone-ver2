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
            <li>Browse by Languaes</li>
          </ul>
        </div>
      </div>
      <div>
        <p>Search</p>
      </div>
    </div>
  );
};

export default Navbar;
