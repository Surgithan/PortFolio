import React from 'react';
import "./Achieves.css";
import Certificate from '../Certificates/Certificate';

const Achieves = () => {
    return (
        <div className='achievement-section'>

            <div>
                <h2 style={{ fontWeight: 800, fontSize: "35px" }}>Achievements</h2>
                <div style={{ width: "80px", height: "6px", borderRadius: "5px", backgroundColor: "#ffe81c" }}></div>
            </div>

            <div className='Certificate-section-down' >
                <Certificate/>
            </div>
        </div>
    )
}

export default Achieves;
