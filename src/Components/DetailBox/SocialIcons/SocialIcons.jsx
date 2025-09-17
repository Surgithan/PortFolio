import React from 'react';
import "./SocialIcons.css"
import { Link } from 'react-router-dom';

const SocialIcons = () => {
    return (
        <div className="icon-social">
            <Link to="https://www.facebook.com/share/199UxD4hWT/?mibextid=wwXIfr" target='_blank'>
                <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link to="https://www.instagram.com/golden__spiker?igsh=MWkzZXZpM2t4YjRlNQ==&utm_source=ig_contact_invite " target='_blank'>
                <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link to="https://whatsapp.com/dl/" target='_blank'>
                <i className="fa-brands fa-snapchat"></i>
            </Link>
            <Link to="https://www.linkedin.com/in/surgithan-thanga-8303662a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target='_blank'>
                <i className="fa-brands fa-linkedin-in"></i>
            </Link>
        </div>
    )
}

export default SocialIcons;

