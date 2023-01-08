import React from "react";
import getstartedcss from "./Getstarted.css";
import illustration from "./getstartedimages/ILLUSTRATION.png";

export default function Getstarted() {
  return (
    <div className="getstarted_container">
      <div className="getstarted_details">
        <div className="bluetext">Claim a Free Quote</div>
        <div className="title">
          <span>Get started</span> on fulfilling your Dubai or UAE dream.
        </div>

        <img src={illustration} alt="" />

        <div className="bluetext">UAE & Offshore Company</div>
        <p>
          We provide you with information about UAE or Offshore Company
          Registration & help you setup your company with a bank account and
          visas.
        </p>
        <div className="btn_container">
          <div className="start_company">Start a Company</div>
          <div className="renew_company">Renew a Company</div>
        </div>
      </div>
      <div className="getstarted_image">
        <img src={illustration} alt="" />
      </div>
    </div>
  );
}
