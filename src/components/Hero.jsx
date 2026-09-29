import React, { useEffect, useState } from "react";
import "./Hero.css";
import profile from "../assets/profile2.jpeg";

function Hero() {
    // STATIC FRONTEND DATA
    const roles = [
        "Full Stack Developer",
        "MERN Developer",
        "Problem Solver",
        "Machine Learning Enthusiast"
    ];

    const description =
        "Passionate developer focused on building modern web applications, scalable backend systems, and AI-powered solutions. Experienced in developing full-stack applications using React, Node.js, and Python, with a strong interest in machine learning, problem-solving, and creating impactful real-world solutions.";

    const [text, setText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    /* TYPING EFFECT */
    useEffect(() => {
        const currentRole = roles[roleIndex];
        const typingSpeed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentRole.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);

                if (charIndex + 1 === currentRole.length) {
                    setTimeout(() => setIsDeleting(true), 800);
                }
            } else {
                setText(currentRole.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);

                if (charIndex === 0) {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex]);

    return (
        <section className="pb-hero" id="about">
            <div className="pb-hero__content">
                <p className="pb-hero__intro">Hi, I am</p>

                <h1 className="pb-hero__name">
                    Vaishnavi Kamble
                </h1>

                <h2 className="pb-hero__role">
                    I am a <span>{text}</span>
                </h2>

                <p className="pb-hero__desc">
                    {description}
                </p>

                <a
                    className="pb-hero__btn"
                    href="https://drive.google.com/drive/folders/1OuS9lO4BtLxjr2olQjJlU4hGeiipP_mr"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Check Resume
                </a>
            </div>

            <div className="pb-hero__photo">
                <div className="pb-hero__photo-inner">
                    <img src={profile} alt="Profile" />
                </div>
            </div>
        </section>
    );
}

export default Hero;