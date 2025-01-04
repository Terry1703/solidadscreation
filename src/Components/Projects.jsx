import React from 'react';
import './Projects.css'; // Import styles for the project page

const projects = [
  {
    id: 1,
    name: 'Project 1',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1734514490566-b84341774897?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D',
    githubUrl: 'https://github.com/KhisaBethuel/AgroConnect-FrontEnd.git',
    description: 'This is a description for Project 1. It demonstrates how to manage project details and display them on a page.',
    languagesUsed: ['JavaScript', 'React', 'SQL']
  },
  {
    id: 2,
    name: 'Project 2',
    imageUrl: 'https://images.unsplash.com/photo-1735257676933-828bfbdc03a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
    githubUrl: 'https://github.com/Terry1703/solidadscreation',
    description: 'Project 2 is an advanced solution for managing complex data structures. It uses cutting-edge technologies.',
    languagesUsed: ['JavaScript', 'Node.js', 'MongoDB']
  },
  {
    id: 3,
    name: 'Project 3',
    imageUrl: 'https://images.unsplash.com/photo-1735490246994-ea609f82f249?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTZ8fHxlbnwwfHx8fHw%3D',
    githubUrl: 'https://github.com/Terry1703/solidadscreation',
    description: 'Project 3 is an advanced solution for managing complex data structures. It uses cutting-edge technologies.',
    languagesUsed: ['JavaScript', 'Node.js', 'MongoDB']
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="project-container">
      <h2 className="featured-title">My Featured Projects</h2>
      <div className="featured-blogs">
        <p>Check out my featured projects below. Each project highlights different technologies and challenges solved.</p>
      </div>

      <div className="project-gallery">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img
              className="project-image"
              src={project.imageUrl}
              alt={project.name}
              onClick={() => window.open(project.githubUrl, '_blank')}
            />
            <div className="github-icon-overlay">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i> {/* Font Awesome GitHub Icon */}
              </a>
            </div>

            {/* Description Section */}
            <div className="project-description">
              <p className="description-text">{project.description}</p>
              <div className="languages-used">
                <p><strong>Languages Used:</strong> {project.languagesUsed.join(', ')}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
