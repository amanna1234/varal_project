import React from 'react';
import companieslistcss from "./CompaniesList.css"
import List_item from './List_item';
import uae_free_zone_img from "./companies list images/dungeon.png";
import dubai_local_image from "./companies list images/Vector-2.png";
import offshore_image from "./companies list images/Vector-1.png";


export default function CompanilesList() {
  return (
    <div className="company_list_container">
       <List_item image = {uae_free_zone_img} title = "UAE Free Zone Company" details = "Your registration agent, will answer all of your questions and help you to reach a conclusion that meets your objectives of investing in the UAE."/> 
       <List_item  image = {dubai_local_image} title = "Dubai Local Companies" details = "The Dubai LLC formation documents are actually articles of organization or a certificate of organization. You can get yours today."/> 
       <List_item  image = {offshore_image} title = "Offshore Compamies" details = "You can register an offshore company and open its bank account in Dubai. Your agent will help you along all the process"/> 
    </div>
  )
}
