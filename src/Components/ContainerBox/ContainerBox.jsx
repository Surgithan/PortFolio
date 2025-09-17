import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './ContainerBox.css';
import DetailBox from '../DetailBox/Details/DetailBox';
import About from '../Pages/AboutContent/AllAboutCon/About';
import Resume from '../Pages/Resume/AllResumeCon/Resume';
import Projects from '../Pages/Projects/Project/Projects';
import Achieves from '../Pages/Achievements/Achieves/Achieves';
import Contacts from '../Pages/Contact/Contacts/Contacts';
import Navbar from '../Navbar/Navbar';

const ContainerBox = () => {
    return (
        <div className="full-container">

            <div className="detail-container">
                <DetailBox />
            </div>


            <div className="content-container">
                <Navbar />

                <div className='mobile-view'>
                    <DetailBox/>
                </div>

                <div>
                    <Routes>

                        <Route path="/" element={<Navigate to="/about" replace />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/project" element={<Projects />} />
                        <Route path="/achievement" element={<Achieves />} />
                        <Route path="/contact" element={<Contacts />} />

                    </Routes>
                </div>
            </div>
        </div>
    )
};

export default ContainerBox;