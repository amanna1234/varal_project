import React, { useState } from "react";
import Pricing_title from "./Pricing_title";
import Pricing_css from "./Pricing.css";
import Pricing_card from "./Pricing_card";
import bluetick from "./pricing images/tick.png";
import whitetick from "./pricing images/tick_white.png";

export default function Pricing() {
  const [card_position, set_card_position] = useState("center");

  const card_position_handler = (position) => {
    set_card_position(position);
  };
  return (
    <>
      <Pricing_title />
      <div
        className="pricing_card_container"
        style={{
          justifyContent:
            card_position == "left"
              ? "start"
              : card_position == "center"
              ? "center"
              : "end",
        }}
      >
        <Pricing_card
          title="Ajman Offshore New Company formation includes"
          price="$2,997"
          place="AJMAN OFFSHORE"
          color="#525DED"
          url={bluetick}
        />
        <Pricing_card
          title="Rak Icc New Company formation includes"
          price="$2,997"
          place="RAK ICC"
          color="white"
          bgcolor="#525DED"
          url={whitetick}
        />
        <Pricing_card
          title="Sharjah Media City New Company formation include"
          price="$4,124"
          place="SHARJAH MEDIA CITY"
          color="#525DED"
          url={bluetick}
        />
      </div>
      <div className="pricing_card_toggler_container">
        <div
          className="pricing_card_toggler_left"
          style={{ background: card_position == "left" ? "#525DED" : "none" }}
          onClick={() => card_position_handler("left")}
        ></div>
        <div
          className="pricing_card_toggler_center"
          style={{ background: card_position == "center" ? "#525DED" : "none" }}
          onClick={() => card_position_handler("center")}
        ></div>
        <div
          className="pricing_card_toggler_right"
          style={{ background: card_position == "right" ? "#525DED" : "none" }}
          onClick={() => card_position_handler("right")}
        ></div>
      </div>
    </>
  );
}
