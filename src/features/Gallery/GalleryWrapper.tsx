import React from 'react'
import Footer from '../../common/Footer/Footer'
import Navlinks from '../../common/Navlinks/Navlinks'
import NavBar from '../NavBar/NavBar'
import Gallery from './Gallery'

const GalleryWrapper = () => {
    return (
        <div className="gallery_wrapper">
            <div className="gallery_nav_container">
                <NavBar />
            </div>
            <Gallery all={true} searchTerm="" />
            <Footer />
        </div>
    )
}

export default GalleryWrapper
