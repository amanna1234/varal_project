import React from 'react';
import cardcss from "./Services_card.css";

import arrowimg from "./service offered images/arrow.png"

export default function Services_card(props) {
  return (
    <div className="card_container">
      <div className="image_container">
       <img src={props.image} alt="" /> 
        </div>  
        <div className="title">{props.title}</div>
        <p className="details">
         {props.details}
        </p>
        <div className="learn_more_container">
            <div>Learn more</div>
            <img src={arrowimg} alt="" />
        </div>
    </div>
  )
}
