import React from "react";
import Navbascss from "./Navbar.css";
import logos from "./Navbar images/Group 114.png";

export default function Navbar() {
  return (
    <div className="navbar_container">
      <img className="logo" src={logos} alt="" />
      <div className="nav_features_container">
        <ul className="nav_feature_list">
          <li>Home</li>
          <li>Services</li>
          <li>Pricing</li>
          <li>About us</li>
        </ul>
        <button className="start_company_btn">Start a company</button>
      </div>
      <div className="hamburger">
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>
    </div>
  );
}
