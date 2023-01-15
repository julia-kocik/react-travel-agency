import React from 'react'
import Button from '../../common/Button/Button';
import './Gallery.scss'

const GalleryItem = ({name, destination}) => {
    const url = `images/${destination}.jpg`;
    console.log(url)
  return (
    <div className='gallery_item_container'>
        <img className='gallery_item_img' src={url} alt={name} />
        <div className='gallery_item_title_container'>
            <div className='gallery_item_title'><h3>{name}</h3></div>
            <Button title='Explore' color='dark'/>
        </div>
    </div>
  )
}

export default GalleryItem