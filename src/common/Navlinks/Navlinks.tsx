import React from 'react'
import Navigation from '../../features/NavBar/NavItems/Navigation'
import './Navlinks.scss'

const Navlinks = () => {
  return (
    <div data-testid="navlinks-container" className='navlinks_container'>
      <Navigation showMobileMenu={false}/>
    </div>
  )
}

export default Navlinks