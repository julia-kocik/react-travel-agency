import React from 'react'
import '../NavBar.scss'
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className='logo_container'>
      <span className='logo'> <Link className='nav_links' to="/">My<br />Journey</Link></span>
    </div>
  )
}

export default Logo