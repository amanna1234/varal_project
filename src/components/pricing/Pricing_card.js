import React from 'react';
import pricing_card_css from "./Pricing_card.css"


export default function Pricing_card(props) {
  return (
    <div className="pricing_card" style={{color: props.color, backgroundColor : props.bgcolor}}>
     <div className="place">
     {props.place}
     </div>
     <div className="Price_container">
        <div className="price">{props.price}</div>
        <div className="payment_term">One Time Payment</div>
     </div>
     <div className="features_title">{props.title}</div>
<ul style={{listStyleImage: `url(${props.url})`}}>
    <li>Attestation Charges</li>
    <li>Registered Agent</li>
    <li>Registered Office</li>
    <li>Varal Administrative</li>
    <li>Preparing Statutory File</li>
    <li>Liasing with Registration Authorities</li>
    <li>Due Diligence Appraisal</li>
    <li>Keeping The Register</li>
    <li>Seal Charges</li>
    <li>Certificate of Good Standing</li>
</ul>
<button className='continue_btn'>Continue</button>
    </div>
  )
}
