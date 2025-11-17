import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-list">
        <a href="mailto:lochanrangam@gmail.com" target="_blank" rel="noopener noreferrer" className="gmail">
          <i className="fas fa-envelope"></i> lochanrangam@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/likhith-lochan-rangam" target="_blank" rel="noopener noreferrer" className="linkedin">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://github.com/Likhith-Lochan" target="_blank" rel="noopener noreferrer" className="github">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="tel:+1234567890" className="phone">
          <i className="fas fa-phone"></i> +91 6309088704
        </a>
      </div>
    </section>
  );
}

export default Contact;
