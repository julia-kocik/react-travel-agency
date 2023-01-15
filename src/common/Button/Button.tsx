import React from 'react'
import './Button.scss'

const Button = ({ title, color }) => {
    return (
        <button className={`btn ${color === 'light' && 'btn_light '} ${color === 'dark' && 'btn_dark '}`}>
            <span>{title}</span>
        </button>
    )
}

export default Button