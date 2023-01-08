import React from 'react';
import servicescss from "./Services.css";
import image from "./services images/Group 117.png";
import bgeclipse from "./services images/Group 100.png"

export default function Services() {
  return (
   <div className="services_container">
    <div className="video_uae_container">
    <div className="video_uae_text">
    Watch the video about UAE or Offshore Company Registration
    </div>
    <img src={image} alt="" />
    </div>
    <div className="dedicated_to_mission_container">
    <div className="line_1">Dedicated</div>
    <div className="line_2">to our mission we are</div>
    </div>
    <p>
    Our services include Company Formation & Renewals, 
Trust & Fiduciary, Tax Residency Setup With Family, Bank 
Accounts, Remote Management, Stock Trading 
Platforms, Ownership Solutions.
    </p>
  <img className='background_eclipse' src={bgeclipse} alt="" />
   </div>
  )
}
