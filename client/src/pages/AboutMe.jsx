import React from 'react';
import './AboutMe.css'; // Import About Me styles

function AboutMe() {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      <div className="bio">
        <img src="avatar.jpg" alt="Developer Avatar" />
        <p>My developer bio would go here</p>
      </div>
    </div>
  );
}

export default AboutMe;
