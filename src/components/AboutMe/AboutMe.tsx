import React from "react";
import "./_about-me.scss";

const AboutMe: React.FC = () => (
  <section id="about" className="my-4 about-me">
    <h2>Hi there!</h2>
    <p>
      🔭 I'm currently working on{" "}
      <a href="https://thebaiji.com" target="_blank" rel="noopener noreferrer">
        The Baiji
      </a>{" "}
      and{" "}
      <a href="https://mostlearned.xyz" target="_blank" rel="noopener noreferrer">
        Most Learned
      </a>, exploring the intersection of AI, distributed systems, and large-scale system design.
    </p>
    <p>
      🌱 I'm deeply interested in stateful agents, full-stack development, and building
      scalable big data pipelines. My experience spans programmatic advertising, fintech,
      and blockchain, where I've designed and optimized high-performance data architectures.
    </p>
    <p>
      👯 I thrive on solving complex problems involving memory models, societal models, and 
      system integration. Whether it's designing resilient distributed systems or pushing 
      the boundaries of AI, I'm always eager to learn and collaborate.
    </p>
    <h5>My technical interests include:</h5>
    <ul>
      <li>Distributed Systems & Large-Scale Architecture</li>
      <li>Stateful Agents & AI-driven Systems</li>
      <li>Big Data Pipelines & Real-time Processing</li>
      <li>Full-stack Development (Frontend & Backend)</li>
      <li>Blockchain, Fintech, and AI</li>
    </ul>
    <p>
      🏆 Outside of tech, I enjoy playing chess and soccer, applying strategic thinking both 
      on and off the field.
    </p>
  </section>
);

export default AboutMe;
