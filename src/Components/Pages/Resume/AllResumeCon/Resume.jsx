import React from 'react';
import './Resume.css';
import Education from '../Education/Education';
import InternShip from '../InternShip/InternShip';
import SkillBox from '../SkillBox/SkillBox';
import ResumeDoc from '../ResumeDoc/ResumeDoc';

const Resume = () => {
  return (
    <div className='resume-contents'>

      <div>
        <h2 style={{ fontWeight: 800, fontSize: "35px" }}>Resume</h2>
        <div style={{ width: "60px", height: "6px", borderRadius: "5px", backgroundColor: "#ffe81c" }}></div>
      </div>

      <div>
        <Education />
        <InternShip />

        <div className="seperate-two-box">
          <SkillBox />
          <ResumeDoc />
        </div>

      </div>

    </div>
  );
};

export default Resume;
