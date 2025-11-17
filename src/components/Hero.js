import React from 'react';

function Hero() {
  return (
    <section className="hero">
  <h2>Experience</h2>

  <div class="experience-item">
    <h3>Software Developer</h3>
    <h4>Svaya Robotics</h4>
    <p><em>September 2023 – Present</em></p>
    <ul>
      <li>Developed a Spring Boot-based RESTful backend for a payroll management system with secure role-based access control (RBAC) using JWT authentication.</li>
      <li>Designed an admin-led employee onboarding workflow using secure email invitations and UUID-tokenized links for first-time password setup.</li>
      <li>Implemented secure REST APIs for employees to log in, view, and download payslips via AWS S3 pre-signed URLs, ensuring strict access control and data privacy.</li>
      <li>Integrated Amazon S3 for payslip storage, using AWS SDK v1 for multipart uploads, region-specific configurations, and object tagging.</li>
      <li>Built a dynamic PDF generation engine to auto-create salary slips from uploaded data, uploaded directly to S3 with metadata and naming conventions.</li>
      <li>Employed Spring Security with BCrypt hashing for secure authentication and implemented a custom <code>GlobalExceptionHandler</code> for clean API error responses.</li>
    </ul>
  </div>

  <div class="experience-item">
    <h3>Software Developer</h3>
    <h4>Wipro</h4>
    <p><em>April 2022 – August 2023</em></p>
    <ul>
      <li>Developed and maintained Java-based microservices using Spring Boot and SQL, ensuring scalable and high-performing backend systems.</li>
      <li>Built and optimized RESTful APIs, using Redis caching to reduce latency and improve response times for frequent queries.</li>
      <li>Utilized tools like Postman and JUnit for thorough API testing, improving code quality, debugging efficiency, and development speed.</li>
    </ul>
  </div>

    </section>
  );
}

export default Hero;
