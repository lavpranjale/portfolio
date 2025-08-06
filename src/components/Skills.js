import React from 'react';

const Skills = React.forwardRef(({ data }, ref) => {
  return (
    <section id="skills" ref={ref} className="section section-bg-light">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {Object.entries(data.skills).map(([category, skills]) => (
            <div key={category} className="skills-card">
              <h3 className="skills-category">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <div className="skills-tags">
                {skills.map((skill, idx) => (
                  <span key={idx} className="skills-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Skills;