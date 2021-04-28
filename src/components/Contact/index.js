// CONTACT

import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    // set formState to empty strings
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // set errorMessage to empty string
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
    }

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Email is invalid!');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required!`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }


    return (
        <div className="container">
            <div className="card bg-dark">
                <div className="card-header" >
                    <span id="contact">Contact Me</span>
            </div>
                <div className="card-body ">
                    <form id="contact-form" onSubmit={handleSubmit} >
                        <div>
                            <label htmlFor="name">Name: </label>
                          </div>
                            <input type="text" defaultValue={name} onBlur={handleChange} name="name" style={{width: "100%"}}/>
                        
                        <div>
                            <label htmlFor="email">Email: </label>
                            </div>
                            <input type="text" defaultValue={email} onBlur={handleChange} name="email" style={{width: "100%"}}/>
                        
                        <div>
                            <label htmlFor="name">Message: </label>
                            </div>
                            <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" style={{width: "100%"}}/>
                       
                        {errorMessage && (
                            <div>
                                <p className="error-text"> {errorMessage}</p>
                            </div>
                        )}
                        <button className="bg-dark"type="submit">Submit!</button>
                    </form>
                </div>
            </div >
        </div>
    );
}

export default ContactForm;
