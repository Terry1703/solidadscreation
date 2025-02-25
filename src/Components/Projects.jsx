import React from 'react';
import './Projects.css'; // Import styles for the project page

const projects = [
  {
    id: 1,
    name: 'Agroconnect',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1734514490566-b84341774897?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D',
    githubUrl: 'https://github.com/KhisaBethuel/AgroConnect-FrontEnd.git',
    languagesUsed: ['JavaScript', 'React', 'SQL']
  },
  {
    id: 2,
    name: 'Safari vendors app',
    imageUrl: 'https://images.unsplash.com/photo-1735257676933-828bfbdc03a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
    githubUrl: 'https://github.com/KhisaBethuel/Safari-Vendors-Frontend-Group8',
    languagesUsed: ['JavaScript', 'Node.js', 'MongoDB']
  },
  {
    id: 3,
    name: 'My Potfolio',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1682095664848-014a0a2bfd8a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwd29tYW58ZW58MHx8MHx8fDA%3D',
    githubUrl: 'https://github.com/Terry1703/solidadscreation',
    languagesUsed: ['JavaScript', 'Node.js', 'MongoDB']
  },
  {
    id: 4,
    name: 'Transacrion app',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1682079663886-534912cb40f5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFuayUyMHBpY3N8ZW58MHx8MHx8fDA%3D',
    githubUrl: 'https://github.com/Terry1703/transaction',
    languagesUsed: ['JavaScript', 'Node.js', 'MongoDB']
  },
  {
    id: 5,
    name: 'Transacrion app',
    imageUrl: 'https://images.unsplash.com/photo-1625314868143-20e93ce3ff33?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJvYm90c3xlbnwwfHwwfHx8MA%3D%3D',
    githubUrl: 'https://github.com/Terry1703/-Bot-Battlr',
    languagesUsed: ['JavaScript', 'Node.js', 'MongoDB']
  },
  {
    id: 6,
    name: 'Transacrion app',
    imageUrl: 'https://images.unsplash.com/photo-1516916759473-600c07bc12d4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG11c2ljJTIwdGhlcmFweXxlbnwwfHwwfHx8MA%3D%3D',
    githubUrl: 'https://github.com/nahashon-source/Trace',
    languagesUsed: ['JavaScript', 'Node.js', 'MongoDB']
  },
  
];

const Projects = () => {
  return (
    <div className="project-container">
      <h2 className="featured-title">My Featured Projects</h2>
      <div className="featured-blogs">
        <p>Check out my featured projects below. Each project highlights different technologies and challenges solved.</p>
        <h3>[CLICK PHOTO FOR MORE]</h3>
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
