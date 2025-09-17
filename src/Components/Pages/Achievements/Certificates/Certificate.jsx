import React, { useState } from 'react';
import "./Certificate.css"
import Certificates from './Images/Certificates';

const Certificate = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    return (

        <div className='Certificate-grid' >
            {Certificates.map((certificate, index) => (

                <div key={index} className="Certificate-card">

                    <img
                        src={certificate.image}
                        alt={certificate.name}
                        className='Certificate-image'
                        onClick={() => setSelectedImage(certificate.image)}
                    />

                    {/* <div className='overlay-icon'> */}

                    {/* <Link to={project.link} target="_blank" rel="noopener noreferrer" >
                <i className="fa fa-eye fa-2x "></i>
              </Link> */}

                    {/* </div> */}

                    <h5 className='Certificate-name'>{certificate.name}</h5>

                    {selectedImage && (
                        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
                            <div className="modal-content">
                                <img src={selectedImage} alt="Certificate" />
                            </div>
                        </div>
                    )}

                </div>
            ))}
        </div>
    )
}

export default Certificate;
