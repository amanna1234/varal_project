import React from 'react';
import blog_image from "./footer images/blog.png";
import blog_css from "./Blogs.css"

export default function Blogs(props) {
  return (
    <div className="blog_container">
        <div className="image_container">
            <img src={blog_image} alt="" />
        </div>
        <div className="blog_title_time_container">
            <div className="blog_title">
                {props.title}
            </div>
            <div className="blog_time">
                {props.time}
            </div>
        </div>
    </div>
  )
}
