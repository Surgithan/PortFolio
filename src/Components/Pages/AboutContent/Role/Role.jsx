import React from 'react';
import "./Role.css"

const Role = () => {
  return (
    <div>

                <div>
                    <h2>What I'm Doing</h2>
                </div>

                <div className="container-box">

                    <div className="box">
                        <div>
                            <i className="fa-solid fa-clapperboard"></i>
                        </div>
                        <div>
                            <h5>Web Design</h5>
                            <p>I design and develop modern, responsive, and visually attractive
                                websites tailored to your needs.</p>
                        </div>
                    </div>

                    <div className="box">
                        <div>
                            <i className="fa-solid fa-desktop"></i>
                        </div>
                        <div>
                            <h5>Frontend Development</h5>
                            <p>I build user interfaces using HTML, CSS, Bootstrap, JavaScript, and
                                React.js to make your website interactive and fast.</p>
                        </div>
                    </div>
                </div>

                <div className="container-box">

                    <div className="box">
                        <div>
                            <i className="fa-solid fa-wrench"></i>
                        </div>
                        <div>
                            <h5> Backend Development</h5>
                            <p>I develop backend functionality using Node.js and Express.js,
                                handling all server-side logic and API routes.</p>
                        </div>
                    </div>

                    <div className="box">
                        <div>
                            <i className="fa-solid fa-database"></i>
                        </div>
                        <div>
                            <h5>Database Management</h5>
                            <p>I use MongoDB and Mongoose to store, manage, and connect your
                                website’s data securely and efficiently.</p>
                        </div>
                    </div>

                </div>
            </div>
  )
}

export default Role;
