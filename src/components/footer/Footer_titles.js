import React from 'react';
import footer_title_css from "./Footer_titles.css"

export default function Footer_titles(props) {
  return (
    <div className="footer_title_container">
        <div className="side_blue_bar">

        </div>
        <div className="footer_title">
            {props.title}
        </div>
    </div>
  )
}
