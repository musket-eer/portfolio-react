import React from "react";
import "./_experience-timeline.scss";

interface ExperienceProps {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string | string[];
}

const ExperienceItem: React.FC<ExperienceProps> = ({
  role,
  company,
  duration,
  location,
  description,
}) => (
  <div className="experience-item">
    <h4>{role}</h4>
    <h5>
      {company} | {location}
    </h5>
    <p>
      <em>{duration}</em>
    </p>
    {Array.isArray(description) ? (
      <ul>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : (
      <p>{description}</p>
    )}
  </div>
);

const ExperienceTimeline: React.FC = () => (
  <section id="experience" className="my-4 experience-timeline">
    <h2>Technical Experience</h2>
    <ExperienceItem
      role="Geology Research Assistant"
      company="Pomona College"
      duration="Sep 2024 - Dec 2024"
      location="Claremont, CA"
      description={[
        "Developed interactive python scripts to visualize Pacific Ocean properties like temperature and salinity.",

        "Analyzed fluctuations across space and time to aid in ocean research.",

        "Collaborated in a team of three to acquire, clean, process, and visualize oceanography datasets.",
      ]}
    />
    <ExperienceItem
      role="Software Engineering Intern"
      company="Quantcast"
      duration="Sep 2023 - May 2024"
      location="San Francisco, CA"
      description={[
        "Orchestrated a high-performance live data pipeline that processes over 30 million web events per hour, delivering real-time insights with ultra-low latency via UI and API. ",
        "Implemented animated data visualizations that transformed the reporting interface and improved user engagement. ",
        "Developed and optimized ETL processes to cut query and data aggregation time by 30%, while increasing data accuracy by 25%. ",
        "Devised end-to-end data validation jobs achieving 99.9999% accuracy in data transformation across the entire pipeline, ensuring high data integrity and reliability."
      ]}
    />
    <ExperienceItem
      role="Advancement Analyst"
      company="Pomona College"
      duration="Auguest 2022 - May 2024"
      location="Claremont, CA"
      description={[
        "Executed on-demand CRUD operations on advancement databases, delivering streamlined, efficient data management and enabling flexible data retrieval, updates, and deletions as needed.",
      ]}
    />
    <ExperienceItem
      role="Blockchain Developer"
      company="Safariblocks Limited"
      duration="Jun 2023 - Aug 2023"
      location="Nairobi, KE"
      description={[
        "Designed an extensible blockchain-based order book leveraging a client-server protocol and employing best practices, enhancing agile adaptability.",

        "Engineered an optimized limit order book database using ORM, significantly simplifying data operations and eliminating complex SQL queries. ",

        "Integrated the order book with Algorand through APIs, enabling secure and rapid asset swaps with end-to-end transfer times of under one second for assets and tokens.",
      ]}
    />
    <ExperienceItem
      role="Software Engineering Intern"
      company="Ilara Health Limited"
      duration="Jun 2022 - Aug 2022"
      location="Nairobi, KE"
      description={[
        "Integrated payment automation within an off the shelf Laboratory Information Management System (LIMS), replacing cash transactions for lab fees and enhancing the efficiency of the billing process.",

        "Enabled SMS automation for the LIMS to deliver diagnoses directly to patients, reducing turnaround time and eliminating the need for paper-based reports.",
      ]}
    />
  </section>
);

export default ExperienceTimeline;
