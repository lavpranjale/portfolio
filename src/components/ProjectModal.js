import React, { useEffect, useRef } from 'react';

function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div ref={modalRef} className="modal-box">
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">&times;</button>
        <h3 className="modal-title">{project.name}</h3>
        <p className="modal-role">{project.role}</p>
        <p className="modal-description">{project.description}</p>
        {project.details && <div className="modal-details">
          <h4 className="modal-details-title">Detailed Overview:</h4>
          <p>{project.details}</p>
        </div>}
        <div className="modal-tags">
          <span className="modal-tech-label">Tech Stack:</span>
          {project.techStack.map((tech, i) => (
            <span key={i} className="modal-tag">{tech}</span>
          ))}
        </div>
        {project.link && (
          <div className="modal-actions">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="cta-button cta-filled">
              View Project
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectModal;