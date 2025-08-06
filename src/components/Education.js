import React from 'react';

const Education = React.forwardRef(({ education }, ref) => {
  return (
    <section id="education" ref={ref} className="section section-bg-light">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {education.map((edu, idx) => (
            <div key={idx} className="box education-item">
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <p className="education-year">{edu.year} | {edu.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Education;