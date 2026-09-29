import React from "react";
import "./Education.css";
import pict from "../assets/pict_logo.png";
import sgm from "../assets/sgm.jpeg";
import school from "../assets/school.png";

const educationData = [
  {
    title: "Pune Institute of Computer Technology (PICT)",
    degree: "Bachelor of Engineering - BE, Computer Engineering",
    date: "Sept 2023 – Jul 2027",
    grade: "8.663 CGPA",
    desc:
      "I am currently pursuing a Bachelor's degree in Computer Engineering at PICT, Pune. I have completed 5 semesters and have taken courses in Data Structures, Algorithms, OOP, DBMS, OS, and Computer Networks.",
    side: "left",
    logo: pict,
  },
  {
    title: "Sadguru Gadge Maharaj College, Karad",
    degree: "Higher Secondary Education - HSC",
    date: "Jun 2021 – Apr 2023",
    grade: "83%",
    desc:
      "Completed 12th with Distinction, demonstrating strong academic performance and a solid foundation in mathematics.",
    side: "right",
    logo: sgm,
  },
  {
    title: "Smt. Premalatai Chavan Kanyashala, Malkapur",
    degree: "SSC (X)",
    date: "Apr 2016 – Apr 2021",
    grade: "97%",
    desc:
      "Achieved 97% in SSC, reflecting strong academic performance and a solid foundation in mathematics, science, and problem-solving skills.",
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
