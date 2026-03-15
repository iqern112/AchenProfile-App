import React, { useEffect, useState } from "react";
import "../styles/Hero.scss";
import Profile from "../assets/self.png";

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-container">

        {/* LEFT CONTENT */}

        <div className="hero-content">
          <h1 className={`hero-title ${visible ? "show" : ""}`}>
            Hello,<br />
            I'm <span>Sansern</span> Saewa
          </h1>

          <p className={`hero-subtitle ${visible ? "show" : ""}`}>
            Full Stack & Game Developer
          </p>

          <div className={`hero-tags ${visible ? "show" : ""}`}>
            <span>Frontend</span>
            <span>Backend</span>
            <span>Godot</span>
            <span>Business Analysis</span>
          </div>

          <div className={`hero-buttons ${visible ? "show" : ""}`}>

            <a href="#work" className="btn-primary">
              Explore My Projects →
            </a>

            <a
              href="https://github.com/iqern112"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sansern-saewa-2695313b6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-linkedin"
            >
              LinkedIn
            </a>

          </div>
        </div>

        {/* RIGHT IMAGE */}

        <div className={`hero-image ${visible ? "show" : ""}`}>
          <div className="blob"></div>

          <div className="photo-wrapper">
            <img src={Profile} alt="profile" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;