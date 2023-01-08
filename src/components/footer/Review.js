import React from 'react';
import review_css from "./Review.css";
import user_image from "./footer images/user.png"

export default function Review(props) {
  return (
    <div className="review_main_container">
        <div className="image_bottombar_container">
            <div className="image_container">
            <img src={user_image} alt="" />
            </div>
            <div className="bottom_bar">
                
            </div>
    
        </div>
        <div className="review_container">
            <div className="review">
             "{props.review}"
            </div>
            <div className="user">
              {props.user}
            </div>
        </div>
    </div>
  )
}
