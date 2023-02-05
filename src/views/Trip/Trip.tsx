import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Trip.scss'
import data from '../../data.json'
import { Link } from 'react-router-dom'
import Footer from '../../common/Footer/Footer'
import NavBar from '../../features/NavBar/NavBar'
import Button from '../../common/Button/Button'

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

    const { destination, name, description, price, places, status } = trip

    useEffect(() => {
        const selected = trips.find((item) => item.id === +id)
        setTrip(selected)
    }, [])

    return (
        <div>
            <div className="trip_nav_container">
                <NavBar />
            </div>
            <div className="trip_content_container">
                <div
                    className="trip_photo"
                    style={{
                        backgroundImage: `url("/images/${destination}.jpg")`,
                    }}
                ></div>
                <div className="trip_content">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <div className="trip_details">
                        <span>
                            <b>Price:</b> {price}$
                        </span>
                        <span>
                            <b>Places:</b> {places}
                        </span>
                        <span>
                            <b>Status:</b> {status}
                        </span>
                    </div>
                    <div className="trip_btn_container">
                        <Link className="nav_links header_btn" to="/contact">
                            <Button title="Order" color="dark" />
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Trip
