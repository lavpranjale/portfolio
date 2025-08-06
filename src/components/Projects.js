import React from 'react';

const Projects = React.forwardRef(({ projects, onProjectClick }, ref) => {
  return (
    <section id="projects" ref={ref} className="section section-bg-light">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="project-card"
              onClick={() => onProjectClick(project)}
            >
              <h3 className="project-title">{project.name}</h3>
              <p className="project-role">{project.role}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                <span className="project-tech-label">Tech Stack:</span>
                {project.techStack.slice(0, 3).map((tech, i) =>
                  <span key={i} className="project-tag">{tech}</span>
                )}
                {project.techStack.length > 3 && (
                  <span className="project-tag-more">
                    +{project.techStack.length - 3} more
                  </span>
                )}
              </div>
              <div className="project-overlay">
                <span>View Details</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Projects;