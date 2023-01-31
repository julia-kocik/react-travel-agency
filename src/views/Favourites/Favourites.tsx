import Footer from '../../common/Footer/Footer'
import Navlinks from '../../common/Navlinks/Navlinks'
import Gallery from '../../features/Gallery/Gallery'
import NavBar from '../../features/NavBar/NavBar'
import './Favourites.scss'

const Favourites = () => {
    return (
        <div>
            <div className="fav_container">
                <NavBar />
            </div>
            <Gallery fav={true} searchTerm={''} />
            <Footer />
        </div>
    )
}

export default Favourites
