import React from "react";
import Blogs from "./Blogs";
import footer_css from "./Footer.css";
import Footer_services from "./Footer_services";
import Footer_titles from "./Footer_titles";
import Practice from "./practice";
import Review from "./Review";

export default function Footer() {
  return (
    <div className="footer_container">
      <div className="left_footer">
        <Footer_titles title="Read about our blogs for more information on our processes " />
        <Blogs
          title="How to start a company formation in Dubai"
          time="5 Minutes"
        />
        <Blogs
          title="How to start an Offshore company formation in Dubai"
          time="5 Minutes"
        />
        <Blogs title="SEO Dubai: Who benefits the most?" time="5 Minutes" />
        <Footer_titles title="Satisfied We are When Our Customers Are Happy" />
        <Review
          review="I am very happy with them. I’ll continue to use their services in future & highly recommend them to anyone,"
          user="Muhib Abrar"
        />
        <Review
          review="Rama has a high level of integrity, intellect, knowledge of his business, resourcefulness and humanity,"
          user="Colin Saldahna"
        />
        <Review
          review="Your advise was so complete that I actually realized how beneficialthis would be to my clients and my business."
          user="Mark Swann"
        />
      </div>
      <div className="right_footer">
      
        <div className="services_about_policies_container">
          <div className="get_to_know_services">
          <Footer_titles  title="Get to know the whole us and more of our services" />
          </div>
    
          <div className="services">
            <div className="title">Services</div>
            <div className="list">Products</div>
            <div className="list">Solutions</div>
            <div className="list">Assurance</div>
            <div className="list">FAQ</div>
            <div className="list">Working at Varal-Singhania</div>
          </div>
          <div className="policies">
            <div className="title">Policies</div>
            <div className="list">Privacy Policy</div>
            <div className="list">Terms & Conditions</div>
          </div>
          <div className="about">
            <div className="title">About</div>
            <div className="list">About Us</div>
            <div className="list">Contact Us</div>
          </div>
        </div>

        <div className="address_subscribe_icons_container">
          <div className="address">
            <div className="title">Address</div>
            <div className="list">608 One Lake Plaza, Cluster T,</div>
            <div className="list">Al Sarayat Street, Jumeirah</div>
            <div className="list">Lake Towers</div>
            <div className="list">Dubai</div>
            <div className="list">United Arab Emirates</div>

            <div className="office_hours">
            <div className="list">Office Hours: Sunday to </div>
            <div className="list">Thursday 8:30 AM to 6:30 PM </div>
            <div className="list">[GMT+4]</div>
            <div className="list">M: +971 55 794 2016</div>
            <div className="list">O: +971 4 447 2061</div>
            </div>
          </div>


          <div className="subscribe">
            <div className="title">
              Subscribe Now
            </div>
            <div className="list">Sunbscribe now to receive our </div>
            <div className="list">Newsletters about amazing</div>
            <div className="list">opportunities in Dubai</div>
          </div>
        </div>
      </div>
    </div>
  );
}
