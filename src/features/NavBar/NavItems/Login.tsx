import React from 'react'
import '../NavBar.scss'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Login = () => {
    return (
        <div className="login_container">
            <span className='cart_icon'><AiOutlineShoppingCart/></span>
        </div>
    )
}

export default Login
