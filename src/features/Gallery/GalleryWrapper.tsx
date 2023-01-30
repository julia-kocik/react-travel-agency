import React from 'react'
import Footer from '../../common/Footer/Footer'
import Navlinks from '../../common/Navlinks/Navlinks'
import Gallery from './Gallery'

const GalleryWrapper = () => {
  return (
    <div className='gallery_wrapper'>
        <Navlinks/>
        <Gallery all={true} searchTerm=''/>
        <Footer/>
    </div>
  )
}

export default GalleryWrapper