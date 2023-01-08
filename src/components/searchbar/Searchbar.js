import React from 'react';
import searchbarcss from "./Searchbar.css"

export default function Searchbar() {
  return (
    <div className='searchbar_container'>
      
      <input className='search_input' placeholder='Search a Term | Topic' type="text" />
      <i class="bi bi-search search_icon"></i>
    </div>
  )
}
