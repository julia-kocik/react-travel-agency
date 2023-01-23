import React, { useEffect, useState } from 'react'
import './Gallery.scss'
import GalleryItem from './GalleryItem'
import data from '../../data.json'

interface TripInterface {
    id: number
    name: string
    description: string
    destination: string
    price: number
    places: number
    status: string
}

interface GalleryPropsInterface {
    searchTerm: string
}

const Gallery = (props: GalleryPropsInterface) => {
    const trips: TripInterface[] = data
    const searchTerm = props.searchTerm
    const [filteredTrips, setFilteredTrips] = useState(trips);
    useEffect(() => {
        const filtered = trips.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setFilteredTrips(filtered)
    }, [searchTerm])
    
    return (
        <div className="gallery_container">
            {filteredTrips.map((item) => (
                <GalleryItem key={item.id} {...item} />
            ))}
        </div>
    )
}

export default Gallery
