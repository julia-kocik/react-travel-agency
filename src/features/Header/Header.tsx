import React from 'react'
import NavBar from '../NavBar/NavBar';
import './Header.scss';

const Header = () => {
  return (
    <div className='header_container'>
      <nav className='navbar_container'>
        <NavBar/>
      </nav>
      <main className='header_content'>

      </main>
    </div>
  )
}

export default Header