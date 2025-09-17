import React from 'react';
import "./InternShip.css";

const InternShip = () => {
    return (
        <div className="internship-container">

            <div className="internship-heading">
                <i className="fa-solid fa-book-open internship-icon"></i>
                <h3 className="internship-title">InternShip</h3>
            </div>

            <div className="vertical-line short"></div>

            <div className="vertical">
                <div className="white-outline-dot">
                    <div className="yellow-inner-dot"></div>
                </div>
                <div className="vertical-line"></div>
                <div className="internship-content">
                    <h5>Front-End</h5>
                    <p className="internship-desc">
                        In the frontend, I use HTML and CSS to structure and style pages. I integrate Bootstrap for mobile
                        responsiveness and faster UI development. With JavaScript, I add dynamic behavior to elements...
                    </p>
                </div>
            </div>


            <div className="vertical">
                <div className="white-outline-dot">
                    <div className="yellow-inner-dot"></div>
                </div>
                <div className="vertical-line medium"></div>
                <div className="internship-content">
                    <h5>Back-End</h5>
                    <p className="internship-desc">
                        I use Node.js and Express.js to build RESTful APIs that handle client requests...
                    </p>
                </div>
            </div>

            <div className="vertical">
                <div className="white-outline-dot">
                    <div className="yellow-inner-dot"></div>
                </div>
                <div className="internship-content">
                    <h5>DataBase</h5>
                    <p className="internship-desc">
                        I use MongoDB to store application data such as user profiles, posts, or product information...
                    </p>
                </div>
            </div>

        </div>
    );
}

export default InternShip;
