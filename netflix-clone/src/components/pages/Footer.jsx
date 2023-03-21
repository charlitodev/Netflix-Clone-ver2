import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="col ">
        <div className="socials">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-square-instagram"></i>
          <i class="fa-brands fa-youtube"></i>
        </div>
        <ul>
          <li>Audio Description</li>
          <li>Investor Relations</li>
          <li>Privacy</li>
          <li>Contact us</li>
        </ul>
        <button>Service code</button>
        <br></br>
        <small>C 1997-2023 Netflix, Inc.</small>
      </div>
      <div className="col">
        <ul>
          <li>Help Centre</li>
          <li>Jobs</li>
          <li>Legal notices</li>
        </ul>
      </div>
      <div className="col">
        <ul>
          <li>Gift cards</li>
          <li>Netflix Shop</li>
          <li>Cookie preferences</li>
        </ul>
      </div>
      <div className="col">
        <ul>
          <li>Media Centre</li>
          <li>Terms of Use</li>
          <li>Corporate information</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
