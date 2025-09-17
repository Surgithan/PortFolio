import React from 'react';
import "./ConMap.css";

const ConMap = () => {
    return (
        <div>
            <div class="map-box">
                <figure>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7777.454830567994!2d80.10857358404905!3d12.925233175097183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1752863770991!5m2!1sen!2sin"
                        style={{ border: "0" }}
                        allowFullScreen 
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        title="google-map"
                        ></iframe>
                </figure>
            </div>
        </div>
    )
}

export default ConMap;

