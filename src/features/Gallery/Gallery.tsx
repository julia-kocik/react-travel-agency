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
}

interface GalleryPropsInterface {
    searchTerm: string
}

const Gallery = (props: GalleryPropsInterface) => {
    const trips: TripInterface[] = data
    const searchTerm = props.searchTerm
    const [filteredTrips, setFilteredTrips] = useState(trips)
    const [currentPage, setCurrentPage] = useState(1)
    const [tripsPerPage] = useState(6)

    useEffect(() => {
        const filtered = trips.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredTrips(filtered)
    }, [searchTerm])

    // get current trips
    const indexOfLastTrip = currentPage * tripsPerPage
    const indexOfFirstTrip = indexOfLastTrip - tripsPerPage
    const currentTrips = filteredTrips.slice(indexOfFirstTrip, indexOfLastTrip)

    // change page
    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }

    return (
        <div>
            <div className="gallery_container">
                {currentTrips.map((item) => (
                    <GalleryItem key={item.id} {...item} />
                ))}
            </div>
            <div>
                <Pagination
                    postsPerPage={tripsPerPage}
                    totalPosts={filteredTrips.length}
                    paginate={paginate}
                />
            </div>
        </div>
    )
}

export default Gallery
