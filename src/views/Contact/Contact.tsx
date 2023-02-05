import React, { useEffect, useState } from 'react'
import Footer from '../../common/Footer/Footer'
import NavBar from '../../features/NavBar/NavBar'
import './Contact.scss'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        message: '',
    })
    const [success, setSuccess] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const [hint, setHint] = useState('')
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const { name, surname, email, message } = formData

    useEffect(() => {
        if (!message || !surname || !email || !regex.test(email)) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    }, [name, surname, email, message])

    const handleHint = (targetInput) => {
        const targetInputValue = targetInput.value
        if (!targetInputValue) {
            setHint(`You ${targetInput.name} field must not be empty`)
        } else {
            setHint('')
        }

        if (targetInput.name === 'email') {
            const testEmail = regex.test(targetInputValue)
            if (!testEmail) {
                setHint(`Your email is not valid`)
            }
            if (testEmail) {
                setHint('')
            }
        }
    }

    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        handleHint(e.target)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(formData)
        setSuccess(true)
        setFormData({
            name: '',
            surname: '',
            email: '',
            message: '',
        })
        setTimeout(() => {
            setSuccess(false)
            setDisabled(true)
            setHint('')
        }, 3000)
    }
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
                                placeholder="Name*"
                            />
                        </div>
                        <div className="form_group">
                            <label htmlFor="surname"></label>
                            <input
                                type="text"
                                name="surname"
                                value={surname}
                                onChange={onChangeHandler}
                                placeholder="Surname*"
                            />
                        </div>
                        <div className="form_group">
                            <label htmlFor="email"></label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={onChangeHandler}
                                placeholder="Email*"
                            />
                        </div>
                        <div className="form_group">
                            <label htmlFor="message"></label>
                            <textarea
                                name="message"
                                placeholder="Please type your message*"
                                value={message}
                                onChange={onChangeHandler}
                                rows={4}
                                cols={50}
                            ></textarea>
                        </div>
                        <input
                            className={disabled ? 'disabled' : ''}
                            type="submit"
                            value="Submit"
                            disabled={disabled}
                        />
                        {success && (
                            <h5 className="form_message">
                                Your message has been successfully sent!
                            </h5>
                        )}
                        <h5 className="form_message">{hint}</h5>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
