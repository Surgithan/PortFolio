import React from 'react';
import './SkillBox.css';


const courses = [
  { name: 'Front-End', totalModules: 10, completedModules: 10 },
  { name: 'Back-End', totalModules: 8, completedModules: 0 },
  { name: 'Database', totalModules: 5, completedModules: 1 },
];

const SkillBox = () => {

  const skills = courses.map(course => ({
    name: course.name,
    level: Math.round((course.completedModules / course.totalModules) * 100),
  }));

  const getColor = (level) => {
    if (level <= 0) return "red";
    if (level <= 10) return "#850505";
    if (level <= 20) return "#fc7d05";
    if (level <= 30) return "#05fcf4";
    if (level <= 40) return "#ffb338";
    if (level <= 50) return "#009107";
    if (level <= 60) return "#00cfbe";
    if (level <= 70) return "#0707ed";
    if (level <= 80) return "#c700bd";
    if (level <= 90) return "#ff0090";
    return "yellow";
  };

  return (
    <div className="skill-box">
      {skills.map((skill, index) => (
        <div key={index} className="skill">
          <h2>{skill.name}</h2>
          <div className="progress">
            <div
              className="progress-bar"
              style={{ width: `${skill.level}%`, backgroundColor: getColor(skill.level) }}
            >
            </div>
          </div>
          <span className="skill-percentage" style={{ color: getColor(skill.level) }}>{skill.level}%</span>
        </div>
      ))}
    </div>
  );
};

export default SkillBox;


