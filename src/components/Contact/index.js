import React from 'react'
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
        <div className="card">
            <div className="card-header">
                <h2>Contact Me!</h2>
            </div>
            <div className="form-body">
                <form id="contact-form" onSubmit={handleSubmit} >
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="text" defaultValue={name} onBlur={handleChange} name="email" />
                    </div>
                    <div>
                        <label htmlFor="name">Message:</label>
                        <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text"> {errorMessage}</p>
                        </div>
                    )}
                    <button type="submit">Submit!</button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
