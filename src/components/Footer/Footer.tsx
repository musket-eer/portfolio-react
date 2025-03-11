import React from "react";
import "/src/components/Footer/_footer.scss";

const Footer: React.FC = () => (
  <footer className="footer">
    <p>
      &copy; {new Date().getFullYear()} Russel Otieno | Connect on{" "}
      <a href="https://www.linkedin.com/in/russel-otieno-b6010018a/">LinkedIn</a> or{" "}
      <a href="https://github.com/musket-eer">GitHub</a>.
    </p>
  </footer>
);

export default Footer;
