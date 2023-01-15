import React from 'react'
import './Gallery.scss'
import GalleryItem from './GalleryItem'
import data from '../../data.json'

interface TripInterface {
    name: string
    description: string
    destination: string
    price: number
    places: number
    status: string
}

const Gallery = () => {
    const trips = data
    return (
        <div className="gallery_container">
            {trips.map((item) => (
                <GalleryItem key={item.id} {...item} />
            ))}
        </div>
    )
}

export default Gallery
