import React from 'react';
import "./Contacts.css"
import ConMap from '../ConMap/ConMap';
import ConReq from '../ConReq/ConReq';

const Contacts = () => {
    return (
        <div className='contact-section'>
            <div>
                <h2 style={{ fontWeight: 800, fontSize: "35px" }}>Contact</h2>
                <div style={{ width: "60px", height: "6px", borderRadius: "5px", backgroundColor: "#ffe81c" }}></div>
            </div>
            
            <ConMap/>
            <ConReq/>

        </div>
    )
}

export default Contacts;
