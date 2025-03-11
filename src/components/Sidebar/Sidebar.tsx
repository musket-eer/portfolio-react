import React from "react";
import { Card } from "react-bootstrap";

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = "" }) => (
  <div className={`sidebar ${className}`}>
    <Card className="sidebar-card">
      <h5>
        Current Mood 🎧  
        <a href="https://github.com/kittinan/spotify-github-profile">
          <i>
            <img 
              src="https://spotify-github-profile.kittinanx.com/api/view?uid=31ujtrfgwgrfuvm4hvf3l5oygbpe&cover_image=true&theme=default&show_offline=false&background_color=121212&interchange=false"
              alt="Spotify Profile"
            />
          </i>
        </a>
      </h5>

      <Card.Body>
        {/* 🔹 Theoretical Knowledge */}
        <Card.Title className="fs-6">Theoretical Knowledge</Card.Title>
        <ul className="skills-list small"> {/* Apply Bootstrap small text */}
          <li><strong>Computer Science Fundamentals:</strong> Data Structures, Algorithms, OOP</li>
          <li><strong>Systems Programming:</strong> Concurrency, Memory Management, Caching</li>
          <li><strong>Operating Systems:</strong> Processes, Scheduling, File Systems, Networking</li>
          <li><strong>Machine Learning Theory:</strong> Supervised & Unsupervised Learning, Neural Networks</li>
          <li><strong>Blockchain & Cryptography:</strong> Hashing, Smart Contracts, Consensus</li>
          <li><strong>Robotics:</strong> PID Control, State Estimation, Computer Vision, Differential Drive</li>
        </ul>

        {/* 🔹 Technical Skills */}
        <Card.Title className="fs-6">Technical Skills</Card.Title>
        <ul className="skills-list small">
          {/* 🔹 Programming Languages */}
          <li><strong>Languages:</strong> Python, JavaScript, TypeScript, C++, C, Java</li>

          {/* 🔹 Software Development & Frameworks */}
          <li><strong>Frontend Development:</strong> React, Vue.js, Next.js</li>
          <li><strong>Backend Development:</strong> Node.js, Flask, Django, Spring Boot, RESTful APIs, GraphQL, WebSockets, Postman</li>

          {/* 🔹 Data Engineering & Databases */}
          <li><strong>Databases:</strong> PostgreSQL, MySQL, MSSQL, MariaDB</li>
          <li><strong>Big Data & Pipelines:</strong> Kafka, Spark, Hadoop, Snowflake, Druid, Pandas, AWS (boto3)</li>

          {/* 🔹 Cloud & DevOps */}
          <li><strong>Cloud & DevOps:</strong> AWS (EC2, Lambda, S3, RDS), GCP, Docker, Kubernetes, GitHub Actions</li>

          {/* 🔹 System Design & Performance Optimization */}
          <li><strong>System Architecture:</strong> Microservices, Event-Driven Architecture, Serverless</li>
          <li><strong>Performance & Caching:</strong> Redis, Memcached</li>

          {/* 🔹 Monitoring, Logging & Alerting */}
          <li><strong>Monitoring, Logging & Alerting:</strong> Grafana, Datadog, New Relic, Prometheus, PagerDuty</li>

          {/* 🔹 Business Domain Expertise */}
          <li><strong>Business Areas:</strong> AdTech, Blockchain, HealthTech, Advancement Software, Academic Research, SaaS</li>
        </ul>
      </Card.Body>
    </Card>
  </div>
);

export default Sidebar;
