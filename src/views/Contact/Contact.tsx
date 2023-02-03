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
    const [success, setSuccess] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [hint,setHint] = useState('')
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleHint = (targetInput) => {
        if(!targetInput.value) {
            setHint(`You ${targetInput.name} field must not be empty`)
        }
        if(targetInput.name==="email" && !regex.test(targetInput.value)) {
            setHint(`Your email is not valid`)
        }
        if(regex.test(targetInput.value)) {
            setHint('')
        }
    }

    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        handleHint(e.target)
        if(name && surname && email && regex.test(email)) {
            setDisabled(false)
        }
    }
    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(formData)
        setSuccess(true);
        setFormData({
            name: '',
            surname: '',
            email: '',
        })
        setTimeout(() => {
            setSuccess(false)
            setDisabled(true)
        }, 3000);
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
                        <input className={disabled && "disabled"} type="submit" value="Submit" disabled={disabled} />
                        {success && <h5 className='form_message'>Your message has been successfully sent!</h5>}
                        <h5 className='form_message'>{hint}</h5>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
