import React from 'react';

const Experience = React.forwardRef(({ data }, ref) => {
  return (
    <section id="experience" ref={ref} className="section section-bg-white">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          {data.experience.map((job, idx) => (
            <div key={idx} className="box experience-item">
              <h3 className="experience-jobtitle">{job.title}</h3>
              <p className="experience-company">{job.company} - {job.location}</p>
              <p className="experience-dates">{job.dates}</p>
              <ul className="experience-desc-list">
                {job.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="experience-tags">
                <span className="experience-tech-label">Tech Stack:</span>
                {job.techStack.map((tech, i) => (
                  <span key={i} className="experience-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Experience;