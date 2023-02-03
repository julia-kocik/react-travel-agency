import React, { useState } from 'react'
import Footer from '../../common/Footer/Footer'
import NavBar from '../../features/NavBar/NavBar'
import './Contact.scss'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
    })
    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(formData)
        setFormData({
            name: '',
            surname: '',
            email: '',
        })
    }
    const { name, surname, email } = formData
    return (
        <div>
            <div className="contact_nav_container">
                <NavBar />
            </div>
            <div className="contact_content_container">
                <div className="contact_photo"></div>
                <div className="contact_form_container">
                    <form className="contact_form" onSubmit={onSubmitHandler}>
                        <div className="form_group">
                            <label htmlFor="name"></label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={onChangeHandler}
                                placeholder="Name"
                            />
                        </div>
                        <div className="form_group">
                            <label htmlFor="surname"></label>
                            <input
                                type="text"
                                name="surname"
                                value={surname}
                                onChange={onChangeHandler}
                                placeholder="Surname"
                            />
                        </div>
                        <div className="form_group">
                            <label htmlFor="email"></label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={onChangeHandler}
                                placeholder="Email"
                            />
                        </div>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
