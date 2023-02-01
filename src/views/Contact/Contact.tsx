import React from 'react'
import Footer from '../../common/Footer/Footer'
import Navlinks from '../../common/Navlinks/Navlinks'
import NavBar from '../../features/NavBar/NavBar'
import './Contact.scss'

const Contact = () => {
    return (
        <div>
            <div className="contact_nav_container">
                <NavBar />
            </div>
            <div className="contact_content_container">
                <div className="contact_photo"></div>
                <div className="contact_form"></div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
