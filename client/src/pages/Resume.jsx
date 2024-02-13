import React from 'react';
import './Resume.css'; // Import Resume styles

function Resume() {
  return (
    <div className="resume">
      <h2>Resume</h2>
      <div className="proficiencies">
        <h3>Proficiencies:</h3>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          {}
        </ul>
      </div>
      <div className="download">
        <h3>Download Resume:</h3>
        <a href="/resume.pdf" download>Download PDF</a>
      </div>
    </div>
  );
}

export default Resume;
