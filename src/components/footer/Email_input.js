import React from 'react';
import Email_input_css from "./Email_input.css";
import email_image from "./footer images/email.png"

export default function Email_input() {
  return (
    <div className='email_container'>
      <input type="text" placeholder='Enter email address'/>
      <img src={email_image} alt="" />
    </div>
  )
}
