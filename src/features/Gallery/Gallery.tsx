import React, { useEffect, useState } from 'react'
import './Gallery.scss'
import GalleryItem from './GalleryItem'
import data from '../../data.json'
import Pagination from '../Pagination/Pagination'
import Navlinks from '../../common/Navlinks/Navlinks'
import Footer from '../../common/Footer/Footer'

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
        const indexOfLastTrip = currentPage * tripsPerPage
        const indexOfFirstTrip = indexOfLastTrip - tripsPerPage
        const currentTrips = trips.slice(indexOfFirstTrip, indexOfLastTrip)
        const filtered = currentTrips.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredTrips(() => filtered)
    }, [currentPage, searchTerm])

    return (
        <div>
            <Navlinks/>
            <div className="gallery_container">
                {filteredTrips.map((item) => (
                    <GalleryItem key={item.id} {...item} />
                ))}
            </div>
            <div>
                <Pagination
                    postsPerPage={tripsPerPage}
                    totalPosts={trips.length}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </div>
            <Footer/>
        </div>
    )
}

export default Gallery
