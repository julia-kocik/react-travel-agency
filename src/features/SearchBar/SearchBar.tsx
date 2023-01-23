import React, { useState } from 'react'
import './SearchBar.scss'

const SearchBar = ({onChangeTerm, searchTerm}) => {
  return (
    <div className="searchbar_container">
      <input onChange={onChangeTerm} value={searchTerm} type="text" className="searchbar_input" placeholder="Type country name..." />
    </div>
  )
}

export default SearchBar