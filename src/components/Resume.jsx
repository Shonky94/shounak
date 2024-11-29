import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <h2>My Resume</h2>
      
      {/* Display Resume Image */}
      <div className="resume-image">
        <img
          src="/data/resume.jpg" // Make sure the image is placed in the public/data folder
          alt="Resume"
          className="resume-img"
        />
      </div>
      
      {/* Download PDF */}
      <a
        href="/data/Shounak_Resume.pdf" // Make sure the PDF is in the public/data folder
        download="Shounak_Resume.pdf"
        className="download-link"
      >
        Download Resume (PDF)
      </a>
    </div>
  );
};

export default Resume;
