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
      <li>Fine-tuned a YOLO model on custom data by unfreezing the top three layers to improve task-specific detection performance.</li>
      <li>Developed a multithreaded WebSocket server using Boost.Beast to handle multiple clients asynchronously, ensuring thread-safe communication with mutex synchronization. Integrated the server with the ROS2 network for real-time pub/sub messaging.</li>
      <li>Implemented a custom ROS–JSON bridge using the Adapter design pattern, enabling seamless conversion between
ROS2 messages and JSON objects. Designed the bridge to dynamically iterate over ROS data structures and
map them to JSON formats, allowing frontend clients to create topics, publish, and subscribe directly through
WebSocket communication.</li>
      <li> Implemented a Python-based robotic control system utilizing multithreading to handle real-time communication
between user commands and server messages via WebSocket, integrating Tkinter message boxes for responsive
error, info, and warning notifications.</li>
    </ul>
  </div>

  <div class="experience-item">
    <h3>Software Developer</h3>
    <h4>Wipro</h4>
    <p><em>April 2022 – August 2023</em></p>
    <ul>
      <li> Designed, developed, and maintained Java-based microservices using Spring Boot and SQL, ensuring reliable and scalable backend functionality.</li>
      <li>Built high-performance RESTful APIs, leveraging Redis to cache frequent queries and reduce backend load—resulting in a 30% boost in response speed and smoother client interactions.</li>
      <li>Containerized Spring Boot microservices using Docker, creating lightweight, reproducible development and pro-
duction environments; designed custom Dockerfiles and optimized image layers to reduce build time and improve
deployment efficiency.</li>
      <li>Used tools like Postman, and JUnit for API testing , improving debugging speed and code quality.</li>
    </ul>
  </div>

    </section>
  );
}

export default Hero;
