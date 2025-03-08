import React from "react";
import { Row, Col, Button } from "react-bootstrap";

interface ProjectCardProps {
  name: string;
  technologies: string;
  date: string;
  description: string;
  links: {
    live?: string; // Optional live site link
    github?: string; // Optional GitHub link
  };
  isFeatured?: boolean; // Optional boolean to indicate if the project is featured
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  technologies,
  date,
  description,
  links,
  isFeatured,
}) => (
  <div className="project-card">
    {/* Render custom live button for site */}
    <h3>{name}</h3>
    <p>
      <strong>Technologies:</strong> {technologies}
    </p>
    <p>
      <strong>Date:</strong> {date}
    </p>
    <p>{description}</p>
    <div className={`links ${isFeatured ? "featured-links" : ""}`}>
      {isFeatured && links.live && (
        <Button
          className="live-button"
          href={links.live}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Live Site
        </Button>
      )}
      {/* Use default Button for GitHub link or regular projects */}
      {links.github && (
        <Button
          className="github-button"
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </Button>
      )}
    </div>
  </div>
);

const projects = [
  {
    name: "The Baiji",
    technologies:
      "React (HTML/CSS, JavaScript), Spring Boot(Java), MariaDB, Docker, Nginx",
    date: "Jan. 2025 - Present",
    description:
      "Developed a full-stack AI coding assistant with a React frontend and FastAPI backend. Integrated Deepseek‑r1, OpenAI, and Gemini models for intelligent responses, featuring autosave, chat renaming, shareable links, and a modern UI with a collapsible sidebar.",
    links: {
      Site: "https://www.thebaiji.com",
    },
  },
  {
    name: "Mansplain",
    technologies:
      "Python, Shell, OpenAI",
    date: "Dec. 2024 - Dec. 2024",
    description:
      "CLI-based to help understand the folder structure of any modular open source project locally",
    links: {
      github: "https://github.com/musket-eer/mansplain",
    },
  },
  {
    name: "Suicide Risk Predictor",
    technologies: "Python, Java, NLP, Parallelism",
    date: "Dec. 2023 - Dec 2023",
    description:
      "Implemented a perceptron classifier and trained in on a large corpus of raw reddit texts. Run training in parallel, and used sentimental analysis to further enhance accuracy",
    links: {
      github: "https://github.com/musket-eer/suicide-risk-predictor",
    },
  },
  {
    name: "Trading Agent",
    technologies: "Python, Tesseract, Pillow, OpenCV",
    date: "Oct. 2021 - Oct 2021",
    description:
      "Human mimicking trading agent that utilized computer vision, image libraries and GUI automation to execute trades autonomously",
    links: {
      github: "https://github.com/musket-eer/binarytradingautomation",
      youtube: "https://www.youtube.com/watch?v=vomBFR9Q3bo"
    },
  },
];

const ProjectsShowcase: React.FC = () => (
  <section id="custom-projects" className="projects-section my-4">
    <h2>Projects</h2>
    <Row className="g-4 justify-content-left project grid">
      {projects.map((project, index) => (
        <Col key={index} xs={12} sm={6} md={6} lg={4} xl={3}>
          <ProjectCard key={index} {...project} isFeatured={index === 0} />
        </Col>
      ))}
    </Row>
  </section>
);

export default ProjectsShowcase;
