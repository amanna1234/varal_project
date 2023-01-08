import React from 'react';
import facebook_img from "./footer images/facebook.png"
import instagram_img from "./footer images/instagram.png"
import linkedin_img from "./footer images/linkedin.png"
import youtube_img from "./footer images/youtube.png"
import social_css from "./Social_media_links.css"

export default function Social_media_links() {
  return (
    <div className='social_media_container'>
    <img src={facebook_img} alt="" />
    <img src={instagram_img} alt="" />
    <img src={linkedin_img} alt="" />
    <img src={youtube_img} alt="" />
    </div>
  )
}
