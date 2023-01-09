import React from 'react'
import Gallery from '../../features/Gallery/Gallery';
import Header from '../../features/Header/Header';
import SearchBar from '../../features/SearchBar/SearchBar';
import './Homepage.scss';

const Homepage = () => {
  return (
    <div>
      <Header/>
      <SearchBar/>
      <Gallery/>
    </div>
  )
}

export default Homepage