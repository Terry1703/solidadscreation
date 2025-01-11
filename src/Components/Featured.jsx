// src/Featured.jsx
import React from 'react';

const Featured = () => {
  return (
    <section className="featured-projects">
      <h2>Featured Projects</h2>
      <div className="projects-list">
        <div className="project-item">
          <h3>Project 1</h3>
          <p>A brief description of the project.</p>
        </div>
        <div className="project-item">
          <h3>Project 2</h3>
          <p>A brief description of the project.</p>
        </div>
      </div>
    </section>
  );
};

export default Featured;
