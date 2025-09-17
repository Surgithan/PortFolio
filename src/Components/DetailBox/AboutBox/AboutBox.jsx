import React from 'react';
import './AboutBox.css';
import SocialIcons from '../SocialIcons/SocialIcons';

const AboutBox = () => {
    return (
        <>
        <div className="about-info">

            <div className="icon-content">

                <div className="icon">
                    <i className="fa-regular fa-envelope"></i>
                </div>

                <div className="about-details">
                    <p className="label">EMAIL</p>
                    <a href="mailto:surgithan4645@gmail.com" className="address">surgithan4645@gmail.com</a>
                </div>
            </div>



            <div className="icon-content">
                <div className="icon">
                    <i className="fa-solid fa-mobile"></i>
                </div>

                <div className="about-details">
                    <p className="label">PHONE</p>
                    <a href="tel:+919787305593" className="address">+91 97873 05593</a>
                </div>
            </div>


            <div className="icon-content">
                <div className="icon">
                    <i className="fa-regular fa-calendar-days"></i>
                </div>

                <div className="about-details">
                    <p className="label">CALENDAR</p>
                    <p>06-05-2004</p>
                </div>
            </div>


            <div className="icon-content2">
                <div className="icon">
                    <i className="fa-solid fa-location-dot"></i>
                </div>

                <div className="about-details">
                    <p className="label">LOCATION</p>
                    <p>Chennai,TamilNadu</p>
                </div>
            </div>
        </div>
        <div className='social-icons'>
            <SocialIcons/>
        </div>
        
        </>
    )
}

export default AboutBox;
