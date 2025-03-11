import React from "react";
import { Button } from "react-bootstrap";
import ReactGA from "react-ga4";
import "/src/components/ProfileDetails/_profile-details.scss";

const ProfileDetails: React.FC = () => {
  // Event handlers for Google Analytics
  
  const handleMessageMe = () => {
    ReactGA.event({
      category: "Contact",
      action: "Clicked Message Me",
      label: "Message Me Button",
    });
  };

  const handleGitHub = () => {
    ReactGA.event({
      category: "Contact",
      action: "Clicked GitHub",
      label: "GitHub Button",
    });
  };

  const handleLinkedIn = () => {
    ReactGA.event({
      category: "Contact",
      action: "Clicked LinkedIn",
      label: "LinkedIn Button",
    });
  };

  return (
    <div className="hero-content text-left">
      <div className="profile-info">
        <h1>Russel Otieno</h1>
        <h4>
          {" "}
          I'm a Computer Science Graduate from Pomona College{" "}
        </h4>
        <div className="hero-buttons mt-3">
        <Button
            variant="primary"
            href="https://www.thebaiji.com"
            target="_blank"
            onClick={handleGitHub}
          >
            The Baiji
          </Button>
          <Button
            variant="primary"
            href="https://mostlearned.xyz"
            target="_blank"
            onClick={handleGitHub}
          >
            Most Learned
          </Button>
          <Button
            variant="primary"
            href="https://github.com/musket-eer"
            target="_blank"
            onClick={handleGitHub}
          >
            GitHub
          </Button>
          <Button
            variant="primary"
            href="https://www.linkedin.com/in/russel-otieno-b6010018a/"
            target="_blank"
            onClick={handleLinkedIn}
          >
            LinkedIn
          </Button>
          <Button
            variant="primary"
            href="https://leetcode.com/u/musk_eteer/"
            target="_blank"
            onClick={handleLinkedIn}
          >
            Leetcode
          </Button>
          <Button
            variant="primary"
            href="mailto:russel.docs@gmail.com?subject=Hello Russel!&body=Hi, I visited your website and would like to get in touch!"
            target="_blank"
            onClick={handleMessageMe}
          >
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
