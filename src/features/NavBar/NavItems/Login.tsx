import React from 'react'
import '../NavBar.scss'
import { AiOutlineMenu } from 'react-icons/ai'

const Login = ({toggleMobile}) => {
    return (
        <div className="login_container" onClick={toggleMobile}>
            <span className='cart_icon'><AiOutlineMenu/></span>
        </div>
    )
}

export default Login
