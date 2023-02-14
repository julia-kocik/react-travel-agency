import React, { useEffect, useState } from 'react'
import './Gallery.scss'
import GalleryItem from './GalleryItem'
import data from '../../data.json'
import Pagination from '../Pagination/Pagination'

interface TripInterface {
    id: number
    name: string
    description: string
    destination: string
    price: number
    places: number
    status: string
    favourite: boolean
}

interface GalleryPropsInterface {
    searchTerm: string
    fav?: boolean
    all?: boolean
}

const Gallery = (props: GalleryPropsInterface) => {
    const trips: TripInterface[] = data
    const { searchTerm, fav, all } = props
    const [filteredTrips, setFilteredTrips] = useState(trips)
    const [currentPage, setCurrentPage] = useState(1)
    const [tripsPerPage] = useState(6)
    const [favourites, setFavourites] = useState(
        JSON.parse(localStorage.getItem('favourites')) ?? []
    )

    const addToFavourites = (id: number) => {
        const found = trips.find((item) => item.id === id)
        const newFav = [...favourites, { ...found, favourite: true }]
        setFavourites(newFav)
    }

    const removeFromFavourites = (id: number) => {
        const filtered = favourites.filter((item) => item.id !== id)
        setFavourites(filtered)
    }

    //add to localstorage
    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites))
    }, [favourites])
    
    // pagination
    useEffect(() => {
        const filtered = trips.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        const indexOfLastTrip = currentPage * tripsPerPage
        const indexOfFirstTrip = indexOfLastTrip - tripsPerPage
        const currentTrips = filtered.slice(indexOfFirstTrip, indexOfLastTrip)
        
        setFilteredTrips(() => currentTrips)
    }, [currentPage, searchTerm])

    return (
        <div className='gallery_box'>
            <div className="gallery_container">
                {all &&
                    filteredTrips.map((item) => (
                        <GalleryItem
                            key={item.id}
                            {...item}
                            favourites={favourites}
                            addToFavourites={addToFavourites}
                            removeFromFavourites={removeFromFavourites}
                        />
                    ))}
                {fav &&
                    favourites.map((item) => (
                        <GalleryItem
                            key={item.id}
                            {...item}
                            favourites={favourites}
                            addToFavourites={addToFavourites}
                            removeFromFavourites={removeFromFavourites}
                        />
                    ))}
            </div>
            <div>
                {all && (
                    <Pagination
                        postsPerPage={tripsPerPage}
                        totalPosts={trips.length}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                )}
            </div>
        </div>
    )
}

export default Gallery
