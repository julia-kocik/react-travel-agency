import React from 'react'
import '../NavBar.scss'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import  Button  from '../../../common/Button/Button'

const Login = () => {
    return (
        <div className="login_container">
            <span className='cart_icon'><AiOutlineShoppingCart/></span>
            <Link className="nav_links" to="/login">
                <Button color="light" title="Login" />
            </Link>
        </div>
    )
}

export default Login
