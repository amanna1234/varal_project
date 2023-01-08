import React from 'react'
import Free_quote from './Free_quote';
import Services_card from './Services_card';
import servicescss from "./Services_offered.css";
import  bankaccount from "./service offered images/bank account setup.png";

export default function Services_offered() {
  return (
    <>
    <div className="services_offered_container">
        <div className="left_side">
        <Free_quote title = "Learn the ways in which you can benefit from a UAE/Offshore Company. Then get started on fulfilling your UAE dream"/>
        <Services_card image = {bankaccount} title = "Bank Account Setup" details = "There are many banks in the United Arab Emirates [UAE]. Both locally owned and branches of multinational ones. Foreign banks adjust according to their parent s strategies and have changed local requirements overnight in the past. But we are here to help you."/>
        <Services_card image = {bankaccount} title = "UAE Company Visas" details = "Your application for visas is critical especially if you intend to move to Dubai. This becomes even more urgent if your family will also move with you. All the paperwork is done on your behalf smoothly so that you may only focus on doing what matters most to you."/>
        </div>
        <div className="right_side">
        <Services_card image = {bankaccount} title = "Advice & Guidance" details = "All activities in the UAE are licensed. Whether manufacturing, finance, trading, marketing, consultancy or restaurants. In some countries only manufacturing is licensed. In others there is a threshold below which business are encouraged. Get our insightfull guidance today."/>
        <Services_card image = {bankaccount} title = "Registration Document Perparation" details = "Several documents must be prepared to start the process of registering a new company in the United Arab Emirates. Be it a Dubai local company, a free zone one or an offshore entity. Your registered agent is dedicated to get this done for you for a seamless process."/>
        <Free_quote title = "We have gathered a team of professionals to craft adequate services you can rely on for a friction free setup in UAE."/>
        </div>
    </div>
  
   
    </>
  )
}
