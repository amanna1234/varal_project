import React from 'react';
import listitemcss from "./List_item.css"

export default function List_item(props) {
  return (
   <div className="list_item_container">
    <img src={props.image} alt="" />
    <div className="title">{props.title}</div>
    <p>{props.details}</p>
    <div className="get_started">Get started</div>
   </div>
  )
}
