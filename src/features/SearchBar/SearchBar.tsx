import React from 'react'
import './SearchBar.scss'

const SearchBar = () => {
  return (
    <div className="searchbar_container">
        <input type="text" className="searchbar_input" placeholder="Type country name..." />
    </div>
  )
}

export default SearchBar