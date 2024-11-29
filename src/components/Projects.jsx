import React from 'react';
import './Projects.css';


const projects = [
  {
    title: "Indian Sign Language Translator",
    description: "The Indian Sign Language Translator is a real-time application that translates Indian Sign Language gestures into text, enabling seamless communication between the hearing-impaired and others. Built with OpenCV and Mediapipe, the system uses a custom-trained deep learning model to recognize hand gestures. The model is capable of interpreting multiple signs, offering an accessible and interactive interface for users. The project emphasizes inclusivity by helping bridge communication gaps through AI-driven sign language recognition.",
    media:"image",
    mediaSrc: "data/isl.png",
    link: "https://github.com/Shonky94/Indian-Sign-Language-Detection"
  },
  {
    title: "MediHelp",
    description: "MediHelp is an advanced web application designed to assist in medical diagnosis through AI-powered predictions. The platform allows users to input medical data and receive reliable predictions for health conditions such as diabetes, heart attack risks, and tumor detection. Built using Flask and machine learning models, MediHelp leverages pre-trained models to provide real-time medical insights. With its user-friendly interface and seamless experience, MediHelp aims to make healthcare more accessible by providing immediate, data-driven assistance to users seeking medical guidance.",
    media: "video",
    mediaSrc: "/data/medi.mp4",
    link: "https://github.com/Shonky94/Medical-Prediction-Website"
  },
  {
    title: "Crowd Resource Allocation",
    description: "Crowd Resource Allocation is an innovative web application designed to optimize resource management based on crowd density. Using computer vision and AI algorithms, the platform analyzes crowd images to estimate the number of people present in a given area. Based on this count, the system allocates resources such as personnel, security, and medical aid in real-time. Built with Flask and a CNN-based crowd counting model, this project offers a practical solution for events, public spaces, and emergency scenarios, ensuring effective resource distribution and better crowd management.",
    media:"video",
    mediaSrc: "/data/crowd.mp4",
    link: "https://github.com/Shonky94/Crowd-Management-System"
  },
  {
    title: "Zomato Front End Clone",
    description: "This Zomato Front-End Clone is a static replica of the popular food discovery and delivery platform, Zomato, developed using HTML, CSS, and JavaScript. The project focuses on replicating the user interface and functionality of the Zomato platform without any backend logic, creating an interactive and responsive web experience for users to browse restaurants, view menus, and explore offers.",
    media:"image",
    mediaSrc: "/data/zomato.png",
    link: "https://github.com/Shonky94/Zomato"
  }
];

const Projects = () => {
  // Function to prevent right-click on the media (image/video)
  const preventRightClick = (e) => {
    e.preventDefault(); // Prevent the default context menu
  };

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          {/* Conditional rendering based on media type */}
          {project.media === "image" ? (
            <img 
              src={project.mediaSrc} 
              alt={project.title} 
              onContextMenu={preventRightClick} // Prevent right-click on image
            />
          ) : (
            <video 
              src={project.mediaSrc} 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="project-video" 
              onContextMenu={preventRightClick} // Prevent right-click on video
            />
          )}
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">Github Repository</a>
        </div>
      ))}
      <h2>Apart from these i have many more projects you can check out on my Github Profile :) </h2>
    </div>
  );
};


export default Projects;