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
      I'm passionate about complex, high-performance systems with multiple moving parts. 
      My fascination with breaking ideas down to their fundamental first principles has driven 
      me to explore the synergy between independent components working together as a whole.
    </p>
    <p>
      My experience spans full-stack development, blockchain engineering, and big data processing. 
      I've worked extensively in programmatic advertising, fintech, and blockchain, designing and 
      optimizing high-performance data architectures. Recently, I have also developed an interest towards 
      recommendation systems, personalization models, and low-latency communication.
    </p>
    <p>
    I like complexity. Not just in computer systems, but in all manifestations around us. In society, emotions, history and geography around us.  </p>
    <h5>🔹 My Technical Interests:</h5>
    <p>
      <li>OLAP and OLTP</li>
      <li>Virtualization and Containerization</li>
      <li>Microservices Architecure</li>
      <li>Full-stack Development (Frontend & Backend)</li>
      <li>Decentralization</li>
      <li>Data Processing Pipelines</li>
      <li>Language Models</li>
      <li>Recommendation Systems</li>
      <li>Systems Security</li>
    </p>
    <p>
      Outside of tech, I play chess and soccer, applying strategic thinking both on and off the field.
    </p>
  </section>
);

export default AboutMe;
