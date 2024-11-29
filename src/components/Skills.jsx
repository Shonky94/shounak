import React from "react";
import './Skills.css';
import reactlogo from '../data/react-logo.png';
import pylogo from '../data/python-logo.png';
import html from '../data/h.png';
import css from '../data/css.png';
import jav from '../data/jav.png';
// import reactlogo from '../data/react-logo.png';
// import reactlogo from '../data/react-logo.png';
// import reactlogo from '../data/react-logo.png';
// import reactlogo from '../data/react-logo.png';
// import reactlogo from '../data/react-logo.png';

const Skills = () => {
  const skills = [
    { name: "React", logo: reactlogo },
    { name: "Python", logo: pylogo },
    { name: "HTML", logo: html },
    { name: "HTML", logo: "path/to/html-logo.png" },
    { name: "CSS", logo: "path/to/css-logo.png" },
    { name: "JavaScript", logo: "path/to/javascript-logo.png" },
    { name: "C++", logo: "path/to/cpp-logo.png" },
    { name: "jQuery", logo: "path/to/jquery-logo.png" },
    { name: "Streamlit", logo: "path/to/streamlit-logo.png" },
    { name: "Flask", logo: "path/to/flask-logo.png" },
    { name: "PostgreSQL", logo: "path/to/postgresql-logo.png" },
    { name: "MySQL", logo: "path/to/mysql-logo.png" },
    { name: "XAMPP", logo: "path/to/xampp-logo.png" },
  ];

  return (
    <section className="skills">
      <h2>My Skillset</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <img src={skill.logo} alt={`${skill.name} logo`} />
            {/* <p>{skill.name}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
