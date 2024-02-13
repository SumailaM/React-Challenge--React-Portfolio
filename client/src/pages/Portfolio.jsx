import React from 'react';
import Project from '../components/Project';
import './Portfolio.css'; // Import Portfolio styles

function Portfolio() {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        <Project title="Project 1" image="project1.jpg" link="#" github="#" />
        <Project title="Project 2" image="project2.jpg" link="#" github="#" />
        {}
      </div>
    </div>
  );
}

export default Portfolio;
