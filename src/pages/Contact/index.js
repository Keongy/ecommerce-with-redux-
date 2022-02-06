import React, { useState } from 'react';
import './contact.css'

const Contact = () => {
    const [textArea, setTextArea] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Message envoyé !")
    }

    const handleTextArea = (e) => {
        setTextArea(e.target.value)
    }

    return (
        <div className='contact'>
            <h1>Nous contacter</h1>
            <form onSubmit={handleSubmit}>
                <div className="contact-email">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="" id="" />
                </div>
                <div className="contact-message">
                    <label htmlFor="message">Votre message</label>
                    <textarea id="story" name="story" value={textArea} onChange={handleTextArea} placeholder={'Votre message...'}
                        rows="5" cols="33">
                    </textarea>
                </div>
                <div className="contact-send">
                    <button>Envoyer</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;