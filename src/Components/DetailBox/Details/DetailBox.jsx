import React, { useState } from 'react';
import './DetailBox.css'
import logo from '../../DetailBox/images/logomyimage.jpg';
import AboutBox from '../AboutBox/AboutBox';

const DetailBox = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>

            <div className="image-toggle" onClick={toggleSidebar}>
                <img src={logo} alt="portfolio" className="portfolio-logo-myimage" />
            </div>

            {isOpen && <div className="backdrop" onClick={() => setIsOpen(false)}></div>}


            <div className={`detail-box ${isOpen ? "open" : ""}`}>

                <div className="image-box">
                    <img src={logo} alt="portfolio" className="portfolio-logo-myimage" />
                </div>



                <div className="name-box">
                    <h3 className="username">C.Thanga Surgithan</h3>
                </div>

                <div className="userwork-box">
                    <p className="userwork">MERN Stack Developer</p>
                </div>

                <AboutBox />
            </div>
        </div>
    )
}

export default DetailBox;
