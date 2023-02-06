import React, { useState } from 'react'
import '../NavBar.scss'
import { Link } from "react-router-dom";

const Navigation = ({showMobileMenu}) => {
  return (
    <ul className={`nav_container ${showMobileMenu && 'nav_container_show'}`}>
            <li className='nav_items'>
              <Link className='nav_links' to="/trips">Trips</Link>
            </li>
            <li className='nav_items'>
              <Link className='nav_links' to="/favourites">Favourites</Link>
            </li>
            <li className='nav_items'>
              <Link className='nav_links' to="/contact">Contact</Link>
            </li>
    </ul>
  )
}

export default Navigation