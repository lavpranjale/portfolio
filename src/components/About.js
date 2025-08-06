import React from 'react';

const About = React.forwardRef(({ data }, ref) => {
  return (
    <section id="about" ref={ref} className="section section-bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="box about-box">
          <p className="box-content">{data.summary}</p>
        </div>
      </div>
    </section>
  );
});

export default About;