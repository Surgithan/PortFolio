import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <div className="education-container">

            <div className="education-heading">
                <i className="fa-solid fa-book-open education-icon"></i>
                <h3 className="education-title">Education</h3>
            </div>

            <div className="vertical-line short"></div>


            <div className="vertical">
                <div className="white-outline-dot">
                    <div className="yellow-inner-dot"></div>
                </div>
                <div className="vertical-line"></div>
                <div className="education-content">
                    <h5>Vivekananda Kendra Vidhalaya</h5>
                    <p className="education-year">2010-2015</p>
                    <p className="education-desc">
                        I had completed 1<sup>st</sup> standard to 5<sup>th</sup> standard in Vivekananda
                        Kendra Vidhalaya, Vivekanandapuram, Kanyakumari, TamilNadu.
                    </p>
                </div>
            </div>

            <div className="vertical">
                <div className="white-outline-dot">
                    <div className="yellow-inner-dot"></div>
                </div>
                <div className="vertical-line"></div>
                <div className="education-content">
                    <h5>Govt. Hr. Secondary School</h5>
                    <p className="education-year">2015-2020</p>
                    <p className="education-desc">
                        I had completed 6<sup>st</sup> standard to 10<sup>th</sup> standard in Vivekananda
                        Kendra Vidhalaya, Vivekanandapuram, Kanyakumari, TamilNadu.
                    </p>
                </div>
            </div>


            <div className="vertical">
                <div className="white-outline-dot">
                    <div className="yellow-inner-dot"></div>
                </div>
                <div className="vertical-line long"></div>
                <div className="education-content">
                    <h5>Govt. Hr. Secondary School</h5>
                    <p className="education-year">2020-2022</p>
                    <p className="education-desc">
                        I had completed 11<sup>th</sup> standard and 12<sup>th</sup> standard in Govt.Hr.Secondary
                        School, Ottayalvilai, Kanyakumari, TamilNadu.
                    </p>
                </div>
            </div>


            <div className="vertical">
                <div className="white-outline-dot">
                    <div className="yellow-inner-dot"></div>
                </div>
                <div className="vertical-line long"></div>
                <div className="education-content">
                    <h5>Vivekananda College of Arts & Science</h5>
                    <p className="education-year">2022-2025</p>
                    <p className="education-desc">
                        I had been studying <abbr title="Bachelor of Computer Application">B.C.A</abbr> in
                        Vivekananda College of Arts & Science, Agasteeswaram, Kanyakumari, TamilNadu.
                    </p>
                </div>
            </div>

            <div className="vertical">
                <div className="white-outline-dot">
                    <div className="yellow-inner-dot"></div>
                </div>
                <div className="education-content">
                    <h5>Lord Jeganath College Of Engineering</h5>
                    <p className="education-year">2025-2027</p>
                    <p className="education-desc">
                        I'm currently studying &nbsp;
                        <abbr title="Master of Computer Application" >M.C.A </abbr>
                        at Lord Jeganath College Of Engineering, Mylaudy, Kanyakumari, TamilNadu.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Education;
