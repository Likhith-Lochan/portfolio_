// src/components/Home.js
import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id="home" className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Scroll down to learn more about me and my work!</p>
      <a href="/resume_mr.pdf" download className="resume-button">Download My Resume</a>
    </section>
  );
}

export default Home;
