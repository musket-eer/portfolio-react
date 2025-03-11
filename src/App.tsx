import React from "react";
import ReactGA from "react-ga4";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import CustomNavbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/HeroSection";
import AboutMe from "./components/AboutMe/AboutMe";
import ExperienceTimeline from "./components/ExperienceTimeline/ExperienceTimeline";
import ProjectsShowcase from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import "./styles/main.scss";

// Initialize Google analytics
const googleAnalyticsKey = import.meta.env.VITE_GOOGLE_ANALYTICS_KEY;
if (googleAnalyticsKey) {
  ReactGA.initialize(googleAnalyticsKey);
}

// Main portfolio component
const MainPortfolio: React.FC = () => (
  <div className="app-container">
    <CustomNavbar />
    <Hero />
    <div className="content-container">
      <Layout>
        <AboutMe />
        <ExperienceTimeline />
      </Layout>
    </div>
    <ProjectsShowcase />
    <Footer />
  </div>
);

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainPortfolio />} />
  </Routes>
);

export default App;
