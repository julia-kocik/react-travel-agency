import React, { useState } from 'react'
import './NavBar.scss'

import Logo from './NavItems/Logo'
import Navigation from './NavItems/Navigation'
import Login from './NavItems/Login'

const NavBar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const toggleMobile = () => {
        setShowMobileMenu(() => !showMobileMenu)
    }
    return (
        <div className="navigation">
            <Logo />
            <Navigation showMobileMenu={showMobileMenu} />
            <Login toggleMobile={toggleMobile}/>
        </div>
    )
}

export default NavBar
