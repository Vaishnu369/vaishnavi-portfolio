import React from "react";
import "./Education.css";
import pict from "../assets/pict_logo.png";
import bjs from "../assets/bjs_logo.png";
import school from "../assets/school_logo.png";

const educationData = [
  {
    title: "Pune Institute of Computer Technology (PICT)",
    degree: "Bachelor of Engineering - BE, Information Technology Engineering",
    date: "Sept 2023 – Jul 2027",
    grade: "9.39 CGPA",
    desc:
      "I am currently pursuing a Bachelor's degree in IT Engineering at PICT, Pune. I have completed 5 semesters and have taken courses in Data Structures, Algorithms, OOP, DBMS, OS, and Computer Networks.",
    side: "left",
    logo: pict,
  },
  {
    title: "Bharatiya Jain Sanghatana, Pune",
    degree: "Higher Secondary Education - HSC",
    date: "Jun 2021 – Apr 2023",
    grade: "81.1%",
    desc:
      "Completed 12th with 3rd rank in whole college. Gained strong expertise in advanced programming, database management systems, and software development.",
    side: "right",
    logo: bjs,
  },
  {
    title: "Holy Spirit Convent School, Pune",
    degree: "CBSE (X)",
    date: "Apr 2014 – Apr 2021",
    grade: "95.27%",
    desc:
      "Completed 10th education being 3rd ranker with Science and Computer Application specialization.",
    side: "left",
    logo: school,
  },
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <h1 className="education-title">Education</h1>
      <p className="education-subtitle">
        My education has been a journey of self-discovery and growth. My
        educational details are as follows.
      </p>

      <div className="timeline">
        {educationData.map((item, index) => (
          <div className={`timeline-item ${item.side}`} key={index}>
            {/* Card */}
            <div className="education-card">
              <div className="card-header">
                <img src={item.logo} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <span>{item.degree}</span>
                  <small>{item.date}</small>
                </div>
              </div>

              <p className="grade">
                <strong>Grade :</strong> {item.grade}
              </p>

              <p className="desc">{item.desc}</p>
            </div>

            {/* Center line content */}
            <div className="timeline-center">
              <span className="dot">
                <img src={item.logo} alt="logo" />
              </span>
              <span className="time">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
