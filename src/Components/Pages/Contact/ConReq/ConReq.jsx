import React from 'react';
import "./ConReq.css"

const ConReq = () => {
    return (
        <div className='contact-request'>

            <div className='contact-heading'>
                <h2>Contact Form</h2>
            </div>

            <div class="contact-input">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email address" />
            </div>

            <div class="message-box">
                <textarea placeholder="Your Message"></textarea>
            </div>

            <div class="form-btn-box">
                <button class="form-button" type="submit">
                    <i class="fa-solid fa-paper-plane"></i>&nbsp;&nbsp;
                    <span>Send Message</span>
                </button>
            </div>

        </div>
    )
}

export default ConReq;
