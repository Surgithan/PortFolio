import React from 'react';
import "./About.css";
import Role from '../Role/Role';
import Myself from '../Myself/Myself';

const About = () => {
    return (
        <div className="about-section">

            <div>
                <h2 style={{fontWeight: 800,fontSize: "35px"}}>About Me</h2>
                <div style={{width: "60px",height: "6px",borderRadius: "5px", backgroundColor:"#ffe81c"}}></div>
            </div>
            <Myself/>
            <Role/>
        </div>
    )
}

export default About;
