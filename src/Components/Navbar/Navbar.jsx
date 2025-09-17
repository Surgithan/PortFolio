import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <div>

            <nav className="navbar-content-box">

                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <div className="hamburger-lines">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <ul className={`nav-header ${menuOpen ? "show" : ""}`}>
                    <li>
                        <NavLink to="/about"
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                            onClick={handleLinkClick}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/resume"
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                            onClick={handleLinkClick}
                        >
                            Resume
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/project"
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                            onClick={handleLinkClick}
                        >
                            Project
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/achievement"
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                            onClick={handleLinkClick}
                        >
                            Achievements
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact"
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                            onClick={handleLinkClick}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div >
    );
};

export default Navbar;


















// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//     return (
//         <div>
//             <nav className="navbar-content-box">
//                 <ul className="nav-header">
//                     <li>
//                         <NavLink
//                             to="/about"
//                             className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
//                         >
//                             About
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink
//                             to="/resume"
//                             className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
//                         >
//                             Resume
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink
//                             to="/portfolio"
//                             className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
//                         >
//                             Portfolio
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink
//                             to="/blog"
//                             className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
//                         >
//                             Blog
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink
//                             to="/contact"
//                             className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
//                         >
//                             Contact
//                         </NavLink>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//     );
// };

// export default Navbar;


