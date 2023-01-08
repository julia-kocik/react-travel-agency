import React from 'react'
import './NavBar.scss'

import Logo from './NavItems/Logo'
import Navigation from './NavItems/Navigation'
import Login from './NavItems/Login'

const NavBar = () => {
  return (
    <div className='navigation'>
        <Logo/>
        <Navigation/>
        <Login/>
    </div>
  )
}

export default NavBar