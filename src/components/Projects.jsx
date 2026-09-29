import React, { useState } from "react";
import "./Projects.css";

import smartSketchImg from "../assets/projects/coolie.png";
import eHealthImg from "../assets/projects/rag.png";
import careerHubImg from "../assets/projects/deeptrace.png";
import zpschool from "../assets/projects/zpschool.png";
import zpadmin from "../assets/projects/zpadmin.png";

const projectsData = [
  {
    title: "RentEasy",
    date: "Jan 2026 – Present",
    categories: ["WEB"],
    img: smartSketchImg,
    desc:
      "A full-stack rental marketplace that enables users to list, browse, and rent tools, gadgets, and furniture with secure authentication, rental management, real-time communication, and automated notifications.",
    github: "https://github.com/KrushnaHarde/rentEasy.git",
  },

  {
    title: "StrideUp",
    date: "Jan 2025 – May 2025",
    categories: ["MACHINE", "LIVE"],
    img: eHealthImg,
    desc:
      "An AI-powered fitness platform that provides workout management, diet planning, fitness tracking, and personalized recommendations using a Scikit-learn based recommendation service with BMR/TDEE calorie calculations.",
    github: "https://strideup.onrender.com",
  },

  {
    title: "School Website ZP SATARA",
    date: "Jan 2026 – April 2026",
    categories: ["WEB", "LIVE"],
    img: zpschool,
    desc:
      "A responsive multilingual school website with dynamic content, secure API integration, and an interactive quiz platform for teachers and students.",
    github: "https://www.zpsajur.in/",
  },
  {
    title: "Admin Panel ZP SATARA",
    date: "Jan 2026 – April 2026",
    categories: ["WEB", "LIVE"],
    img: zpadmin,
    desc:
      "A role-based admin CMS for managing school content and creating, publishing, editing, and tracking quizzes in real time without requiring website redeployment.",
    github: "https://admin.zpsajur.in/",
  }
];

const Projects = () => {
  const [filter, setFilter] = useState("ALL");

  const filteredProjects =
    filter === "ALL"
      ? projectsData
      : projectsData.filter((project) =>
        project.categories.includes(filter)
      );

  return (
    <section className="projects-section" id="projects">
      <h1 className="projects-title">Projects</h1>

      <p className="projects-subtitle">
        I have worked on a wide range of projects. Here are some of my projects.
      </p>

      {/* Filter Tabs */}
      <div className="project-filters">
        {["ALL", "WEB", "MACHINE", "LIVE"].map((item) => (
          <button
            key={item}
            className={filter === item ? "active" : ""}
            onClick={() => setFilter(item)}
          >
            {item === "DS"
              ? "Data Science"
              : item === "MACHINE"
                ? "Machine Learning"
                : item === "LIVE"
                  ? "Live Projects"
                  : item}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.img} alt={project.title} />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <span>{project.date}</span>

              <p>{project.desc}</p>

              <a
                href={project.github}
                className="view-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code/ Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;