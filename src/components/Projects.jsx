import React, { useState } from "react";
import "./Projects.css";

import smartSketchImg from "../assets/projects/coolie.png";
import eHealthImg from "../assets/projects/rag.png";
import careerHubImg from "../assets/projects/deeptrace.png";
import zpschool from "../assets/projects/zpschool.png";
import zpadmin from "../assets/projects/zpadmin.png";

const projectsData = [
  {
    title: "Rail Assist",
    date: "Jan 2026 – April 2026",
    categories: ["WEB"],
    img: smartSketchImg,
    desc:
      "A railway assistance platform that enables passengers to book porters, calculate fares, verify partners, and manage service requests through a centralized web application.",
    github: "https://github.com/Anjalik1234/coolie-production",
  },
  {
    title: "AI Teaching Assistant using (RAG)",
    date: "Oct 2025 – Dec 2025",
    categories: ["DS"],
    img: eHealthImg,
    desc:
      "An AI-powered learning assistant that searches lecture videos to find relevant topics, provides context-aware answers with exact timestamps, and recommends topics based on the learner’s proficiency.",
    github: "https://github.com/Anjalik1234/AI-teaching-assistant",
  },
  {
    title: "SecureOps AI",
    date: "May 2026 – July 2026",
    categories: ["MACHINE"],
    img: careerHubImg,
    desc:
      "An AI-powered infrastructure monitoring platform that audits server security, tracks system health, detects anomalies, and provides automated remediation for security issues.",
    github: "https://github.com/Anjalik1234/DeepTrace-AI",
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
        {["ALL", "WEB", "DS", "MACHINE", "LIVE"].map((item) => (
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