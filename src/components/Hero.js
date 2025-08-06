import React from 'react';

const Hero = React.forwardRef(({ data }, ref) => {
  return (
    <section id="hero" ref={ref} className="hero-section">
      <div className="hero-bg-animation">
        <div className="hero-bg-circle hero-bg-1"></div>
        <div className="hero-bg-circle hero-bg-2"></div>
        <div className="hero-bg-circle hero-bg-3"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">{data.name}</h1>
        <p className="hero-subtitle">{data.title}</p>
        <div className="hero-actions">
          <a
            href={data.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button cta-filled"
          >
            LinkedIn
          </a>
          <a
            href={data.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
});

export default Hero;