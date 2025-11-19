// import React from 'react';
// import './Projects.css';  // Don't forget to import the CSS file

// function Projects() {
//   return (
//     <section id="projects" className="projects">
//       <h2>Projects</h2>
//       <div className="project-cards">
//         <div className="project-card">
//           <h3>Fitness App</h3>
//           <p><strong>Tech Stack:</strong> Spring Boot, React JS, MongoDB, Postgres, Docker, Maven</p>
//           <p>
//             Designed a fitness-tracking platform with Spring Boot microservices:
//             <br />
//             <strong>user-service</strong> (PostgreSQL) manages user data and fetches activity history;
//             <strong>activity-service</strong> (MongoDB) records user activities and sends them to <strong>ai-service</strong> via RabbitMQ.
//             <br />
//             Developed <strong>ai-service</strong> to consume activity messages, invoke the Gemini AI API using an API key, 
//             and store personalized recommendations in MongoDB.
//             <br />
//             Configured centralized service settings with <strong>Spring Cloud Config Server</strong> and enabled inter-service 
//             communication via <strong>Eureka</strong>.
//             <br />
//             Secured API Gateway, built frontend with <strong>React + Vite</strong>, and containerized using <strong>Docker Compose</strong> for scalable deployment.
//           </p>
//           <a href="https://github.com/Likhith-Lochan/fitness-app" target="_blank" rel="noopener noreferrer">GitHub Link</a>
//         </div>
//         <div className="project-card">
//           <h3>Kafka-Based Microservices</h3>
//           <p><strong>Tech Stack:</strong> Spring Boot, Spring Kafka, Docker, Maven</p>
//           <p>
//             Developed and deployed two Spring Boot microservices (Producer and Consumer) demonstrating event-driven 
//             architecture using Apache Kafka.
//             <br />
//             Integrated Kafka with Spring Boot using <strong>Spring Kafka</strong> to publish and consume messages in real time, 
//             showcasing understanding of topics, partitions, and message flow.
//             <br />
//             Containerized both services with Docker and orchestrated them along with Kafka and Zookeeper using <strong>Docker Compose</strong> 
//             for streamlined multi-container deployment.
//             <br />
//             Structured the project with modular directories for scalable, maintainable code.
//           </p>
//           <a href="https://github.com/Likhith-Lochan/kafka-topic-streaming-services" target="_blank" rel="noopener noreferrer">GitHub Link</a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;

import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-cards">
        <div className="project-card">
          <div className="card-image" style={{ backgroundImage: "url('/fitness.jpg')" }}>
            {/* You can add a background image for the card here */}
          </div>
          <div className="card-content">
            <h3>Fitness App</h3>
            <p><strong>Tech Stack:</strong> Spring Boot, React JS, MongoDB, Postgres, Docker, Maven</p>
            <p>
              Designed a fitness-tracking platform with Spring Boot microservices:
              <br />
              <strong>user-service</strong> (PostgreSQL) manages user data and fetches activity history;
              <strong>activity-service</strong> (MongoDB) records user activities and sends them to <strong>ai-service</strong> via RabbitMQ.
              <br />
              Developed <strong>ai-service</strong> to consume activity messages, invoke the Gemini AI API using an API key, 
              and store personalized recommendations in MongoDB.
              <br />
              Configured centralized service settings with <strong>Spring Cloud Config Server</strong> and enabled inter-service 
              communication via <strong>Eureka</strong>.
              <br />
              Secured API Gateway, built frontend with <strong>React + Vite</strong>, and containerized using <strong>Docker Compose</strong> for scalable deployment.
            </p>
            <a href="https://github.com/Likhith-Lochan/fitness-app" target="_blank" rel="noopener noreferrer">GitHub Link</a>
          </div>
        </div>

        <div className="project-card">
          <div className="card-image" style={{ backgroundImage: "url('/kafka.png')" }}>
            {/* You can add a background image for the card here */}
          </div>
          <div className="card-content">
            <h3>Kafka-Based Microservices</h3>
            <p><strong>Tech Stack:</strong> Spring Boot, Spring Kafka, Docker, Maven</p>
            <p>
              Developed and deployed two Spring Boot microservices (Producer and Consumer) demonstrating event-driven 
              architecture using Apache Kafka.
              <br />
              Integrated Kafka with Spring Boot using <strong>Spring Kafka</strong> to publish and consume messages in real time, 
              showcasing understanding of topics, partitions, and message flow.
              <br />
              Containerized both services with Docker and orchestrated them along with Kafka and Zookeeper using <strong>Docker Compose</strong> 
              for streamlined multi-container deployment.
              <br />
              Structured the project with modular directories for scalable, maintainable code.
            </p>
            <a href="https://github.com/Likhith-Lochan/kafka-topic-streaming-services" target="_blank" rel="noopener noreferrer">GitHub Link</a>
          </div>
        </div>

        <div className="project-card">
  <div
    className="card-image"
    style={{ backgroundImage: "url('/bigram.jpg')" }}
  >
    {/* Add a background image for the card here */}
  </div>

  <div className="card-content">
    <h3>Bigram Transformer-based Language Model</h3>
    <p><strong>Tech Stack:</strong> PyTorch, Transformers, Gradio, Hugging Face</p>

    <p>
      Developed a Bigram Transformer-based language model from scratch using 
      <strong> PyTorch</strong>, implementing multi-head self-attention, feed-forward layers, 
      and positional embeddings.
      <br />
      Built custom tokenizer and encoding/decoding pipelines to support efficient 
      text generation with a block-wise attention mechanism.
      <br />
      Implemented an interactive text-generation interface using 
      <strong> Gradio</strong>, allowing prompt-based generation with adjustable token limits.
      <br />
      Gained hands-on experience with transformer architecture, sequence modeling, 
      and modern NLP workflows through training and deploying the model.
    </p>

    <a
      href="https://huggingface.co/spaces/LikhithLR/BigramLanguageModel"
      target="_blank"
      rel="noopener noreferrer"
    >
      Model Link
    </a>
    <br />
    <a
      href="https://github.com/Likhith-Lochan/bigram-language-model"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub Link
    </a>
  </div>
</div>


        <div className="project-card">
          <div className="card-image" style={{ backgroundImage: "url('/blog.avif')" }}>
            {/* Optionally add an image here */}
          </div>
          <div className="card-content">
            <h3>Blog Posting Website</h3>
            <p><strong>Tech Stack:</strong> Spring Boot, Spring Security, JWT, MySQL, Redis, Maven</p>
            <p>
              Built a secure blog platform using Spring Boot with JWT-based authentication, Spring Security, and role-based access control.
              <br />
              Designed RESTful APIs for user login/registration, blog CRUD operations, and comments, following a layered 
              (Controller-Service-Repository) architecture.
              <br />
              Implemented JPA/Hibernate with proper entity mappings (User, Post, Comment, Role) and integrated Redis caching 
              to boost performance and reduce database load.
              <br />
              Secured user credentials with BCrypt, enforced input validation, handled exceptions cleanly, and tested APIs using Postman.
            </p>
            <a href="https://github.com/Likhith-Lochan/interview-experience-sharing-app" target="_blank" rel="noopener noreferrer">GitHub Link</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

