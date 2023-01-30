import React, { useState } from 'react'
import Navlinks from '../../common/Navlinks/Navlinks';
import Gallery from '../../features/Gallery/Gallery';
import Header from '../../features/Header/Header';
import SearchBar from '../../features/SearchBar/SearchBar';
import './Homepage.scss';

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const onChangeTerm = (e) => {
    setSearchTerm(e.target.value);
  }
  return (
    <div>
      <Header/>
      <SearchBar onChangeTerm={onChangeTerm} searchTerm={searchTerm}/>
      <Gallery all={true} searchTerm={searchTerm}/>
      <Navlinks/>
    </div>
  )
}

export default Homepage