import React from 'react';
import './Home.css';
import profileImage from "../data/pfp.png";
import instaLogo from '../data/insta.png'; 
import gitLogo from '../data/git.png';      
import linkedLogo from '../data/linked.png';

const Home = () => {
  return (
    <div className="home-container">
      {/* Introduction Section */}
      <div className="intro-section">
        <div className="intro-left">
          <h2>Hi, I'm Shounak</h2>
          <p>Passionate Developer | AI & Machine Learning Enthusiast <br />Web Connoisseur | Aspiring Entrepreneur</p>
        </div>
        <div className="intro-right">
          <img src={profileImage} alt="Shoun" className="profile-image" />
        </div>
      </div>

      {/* Bigger Introduction Section */}
      <div className="about-me">
        <h2>A little bit about Me...</h2>
        <p>
        I fell in love with programming, and honestly, it’s been an exciting journey ever since. <br /><br /> Every project I work on teaches me something new, and I’m always eager to learn more.
        I’m comfortable working with languages like Python, C++, and JavaScript. <br /><br /> My main interests are building smart AI/ML solutions, designing user-friendly web applications, and exploring areas like Computer Vision and NLP.
         <br /> <br />When I can, I love working on projects that let me combine creativity and tech—using tools like Flask, React.js, and other modern frameworks to bring ideas to life.
        </p>
      </div>

      {/* Social Links Section */}
      <div className="social-links-section">
        <h3>Find me on</h3>
        <div className="social-links">
          <a href="https://www.instagram.com/shoun4k/" target="_blank" rel="noopener noreferrer">
            <img src={instaLogo} alt="Instagram" className="social-logo" />
          </a>
          <a href="https://github.com/Shonky94" target="_blank" rel="noopener noreferrer">
            <img src={gitLogo} alt="GitHub" className="social-logo" />
          </a>
          <a href="https://www.linkedin.com/in/shounakkhadilkar/" target="_blank" rel="noopener noreferrer">
            <img src={linkedLogo} alt="LinkedIn" className="social-logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
