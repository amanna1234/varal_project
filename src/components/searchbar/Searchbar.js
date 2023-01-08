import React from 'react';
import searchbarcss from "./Searchbar.css";
import first_eclipse from "./searchbar images/1.png"
import second_eclipse from "./searchbar images/2.png"
import third_eclipse from "./searchbar images/3.png"
import fourth_eclipse from "./searchbar images/4.png"

export default function Searchbar() {
  return (
    <div className='searchbar_container'>
      <img src={first_eclipse} className="first_eclipse" alt="" />
      <img src={second_eclipse} className="second_eclipse" alt="" />
      <img src={third_eclipse} className="third_eclipse" alt="" />
      <img src={fourth_eclipse} className="fourth_eclipse" alt="" />
      <input className='search_input' placeholder='Search a Term | Topic' type="text" />
      <i class="bi bi-search search_icon"></i>
    </div>
  )
}
