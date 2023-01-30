import Footer from '../../common/Footer/Footer'
import Navlinks from '../../common/Navlinks/Navlinks'
import Gallery from '../../features/Gallery/Gallery'
import './Favourites.scss'

const Favourites = () => {
    return (
        <div>
            <Navlinks/>
            <Gallery fav={true} searchTerm={''} />
            <Footer/>
        </div>
    )
}

export default Favourites
