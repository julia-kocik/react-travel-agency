import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Trip.scss'
import data from '../../data.json'
import Navlinks from '../../common/Navlinks/Navlinks'
import Navigation from '../../features/NavBar/NavItems/Navigation'
import Footer from '../../common/Footer/Footer'
import NavBar from '../../features/NavBar/NavBar'

interface TripInterface {
    id: number
    name: string
    description: string
    destination: string
    price: number
    places: number
    status: string
}

const TripInitialObject: TripInterface = {
    id: 0,
    name: '',
    description: '',
    destination: '',
    price: 0,
    places: 0,
    status: '',
}

const Trip = () => {
    const { id } = useParams()
    const trips = data
    const [trip, setTrip] = useState(TripInitialObject)
    useEffect(() => {
        const selected = trips.find((item) => item.id === +id)
        setTrip(selected)
    }, [])
    return (
        <div>
             <div className="trip_nav_container">
                <NavBar />
            </div>
            <div>
                {trip?.id}
                {trip.name}
                {trip.description}
            </div>
            <Footer />
        </div>
    )
}

export default Trip
