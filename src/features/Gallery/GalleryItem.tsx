import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import './Gallery.scss'

const GalleryItem = ({name, destination, id}) => {
    const url = `images/${destination}.jpg`;
    console.log(url)
  return (
    <div className='gallery_item_container'>
        <img className='gallery_item_img' src={url} alt={name} />
        <div className='gallery_item_title_container'>
            <div className='gallery_item_title'><h3>{name}</h3></div>
            <Link to={`/trips/${id}`}>
              <Button title='Explore' color='dark'/>
            </Link>
        </div>
    </div>
  )
}

export default GalleryItem