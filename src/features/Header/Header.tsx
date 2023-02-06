import React from 'react'
import Button from '../../common/Button/Button'
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
    return (
        <div>
            <nav className="navbar_container tablet_navbar">
                <NavBar/>
            </nav>
            <div className="header_container">
                <nav className="navbar_container">
                    <NavBar />
                </nav>
                <main className="header_content">
                    <h2 className="header_title">Create beautiful memories</h2>
                    <Link className="nav_links header_btn" to="/trips">
                        <Button title="Explore" color="light" />
                    </Link>
                </main>
            </div>
        </div>
    )
}

export default Header
