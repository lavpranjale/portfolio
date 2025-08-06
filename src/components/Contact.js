import React from 'react';

const Contact = React.forwardRef(({ contact }, ref) => {
  return (
    <section id="contact" ref={ref} className="section section-contact">
      <div className="section-container text-center">
        <h2 className="section-title section-title-light">Get In Touch</h2>
        <p className="contact-message">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="contact-actions">
          <a href={`mailto:${contact.email}`} className="contact-btn">
            <span className="contact-btn-icon">@</span>
            <span>{contact.email}</span>
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-btn">
            <span className="contact-btn-icon">in</span>
            <span>LinkedIn</span>
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="contact-btn">
            <span className="contact-btn-icon">GH</span>
            <span>GitHub</span>
          </a>
        </div>
        <p className="contact-location">
          {contact.location} | {contact.phone}
        </p>
      </div>
    </section>
  );
});

export default Contact;