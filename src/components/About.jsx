import React from 'react';
import './About.css';
import { Type } from 'lucide-react';

const About = () => {
  return (
    <div className="about-container">
      <h2 id="abt">About Me</h2>
      <p> <h2>Education: </h2><br />
        D.G. Ruparel College of Arts, Science and Commerce | 2020-2022 <br />
        Higher secondary Certificate <br /> <br />
        Vidyalankar Institute of Technology | 2022-2026 <br />
        B.Tech in Computer Engineering , Honours in Advanced AI-ML <br />
      </p>
      <h2> <br />My Skillset:</h2>
      
      <div className="skills-category">
        <h3>Web Development</h3>
        <div className="skills">
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">JavaScript</div>
          <div className="skill">React</div>
          <div className="skill">Flask</div>
          <div className="skill">Streamlit</div>
        </div>
      </div>

      <div className="skills-category">
        <h3>Software</h3>
        <div className="skills">
          <div className="skill">Python</div>
          <div className="skill">C++</div>
          <div className="skill">Java</div>
        </div>
      </div>

      <div className="skills-category">
        <h3>Libraries</h3>
        <div className="skills">
          <div className="skill">Tensorflow</div>
          <div className="skill">Scikit-Learn</div>
          <div className="skill">jquery</div>
          <div className="skill">p5.js</div>
          <div className="skill">Mediapipe</div>
          <div className="skill">Pytorch</div>
          <div className="skill">pandas</div>
          <div className="skill">Numpy</div>
          <div className="skill">Matplotlib</div>
          <div className="skill">OpenCV</div>
          <div className="skill">pickle</div>
          <div className="skill">tkinter</div>
          <div className="skill">joblib</div>
          <div className="skill">SQLite3</div>
          <div className="skill">pyscopg2</div>
          
        </div>
      </div>

      <div className="skills-category">
        <h3>Data</h3>
        <div className="skills">
          <div className="skill">PostgreSQL</div>
          <div className="skill">pgAdmin</div>
          <div className="skill">MySQL</div>
          <div className="skill">XAMPP</div>
          <div className="skill">PowerBI</div>
        </div>
      </div>
      <h2>Know who i am</h2>
      <p>Apart from coding , some other activites i love to do:
        <ul id="aboutlist">
          <li>Trading</li>
          <li>Listen to music</li>
          <li>Playing Video Games</li>
          <li>Watching movies and web series</li>
        </ul>
      </p>
    </div>
  );
}

export default About;
