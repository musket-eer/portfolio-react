import React from "react";
import "./_about-me.scss";

const AboutMe: React.FC = () => (
  <section id="about" className="my-4 about-me">
    <h2>Hey!</h2>
    <p>
      I'm currently working on{" "}
      <a href="https://thebaiji.com" target="_blank" rel="noopener noreferrer">
        The Baiji
      </a>{" "}
      and{" "}
      <a href="https://mostlearned.xyz" target="_blank" rel="noopener noreferrer">
        Most Learned
      </a>, exploring the intersection of AI, distributed systems, large-scale system design, and recommendation systems
    </p>
    <p>
      I'm passionate about building complex, high-performance systems with multiple moving parts. 
      My fascination with breaking ideas down to their fundamental first principles has driven 
      me to explore the synergy between independent components working together as a whole.
    </p>
    <p>
      My experience spans full-stack development, blockchain engineering, and big data processing. 
      I've worked extensively in programmatic advertising, fintech, and blockchain, designing and 
      optimizing high-performance data architectures. Recently, my focus has shifted toward 
      recommendation systems, personalization models, and low-latency communication—technologies 
      that power intelligent, adaptive experiences.
    </p>
    <p>
      Beyond software, my curiosity extends to human anatomy, cognition, emotions, and social interactions. Whether it's optimizing distributed networks or understanding 
      the complexities of human behavior, I'm fascinated by how systems evolve and function at scale. I am driven to understand these large scale system interaction down to their fundamental first principles.
    </p>
    <h5>🔹 My Technical Interests:</h5>
    <ul>
      <li>Distributed Systems & Large-Scale Architecture</li>
      <li>Stateful Agents & AI-driven Systems</li>
      <li>Big Data Pipelines & Real-time Processing</li>
      <li>Full-stack Development (Frontend & Backend)</li>
      <li>Blockchain, Fintech, and AI</li>
    </ul>
    <p>
      Outside of tech, I play chess and soccer, applying strategic thinking both on and off the field.
    </p>
  </section>
);

export default AboutMe;
