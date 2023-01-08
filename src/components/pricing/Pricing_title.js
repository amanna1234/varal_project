import React from 'react';
import pricing_title_css from "./Pricing_title.css";
import first_eclipse_image from "./pricing images/1.png"
import second_eclipse_image from "./pricing images/2.png"

export default function Pricing_title() {
  return (
    <div className="pricing_title_container">
        <div className="title" align = "center">
        Most <span>popular affordable pricing</span> per 
jurisdictions are brought to you to 
kick off your adventure.
        </div>
        <img src={first_eclipse_image} className="first_eclipse_image" alt="" />
        <img src={second_eclipse_image} className="second_eclipse_image" alt="" />
    </div>
  )
}
