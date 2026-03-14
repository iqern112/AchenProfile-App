import React, { useState, useEffect } from "react";
import "../styles/navigation.scss";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "education", "skills", "work", "contact"];
      const scrollPosition = window.scrollY;

      sections.forEach((id) => {
        const element = document.getElementById(id);

        if (element) {
          const top = element.offsetTop - 120;
          const bottom = top + element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navigation ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        
        {/* Logo */}
        <a href="#home" className="logo">
          Achen <span className="logo-dot"></span>
        </a>

        {/* Hamburger Button */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <a href="#home" className={activeSection === "home" ? "active" : ""}>
            <span>Home</span>
          </a>

          <a href="#about" className={activeSection === "about" ? "active" : ""}>
            <span>About</span>
          </a>

          <a href="#education" className={activeSection === "education" ? "active" : ""}>
            <span>Education</span>
          </a>

          <a href="#skills" className={activeSection === "skills" ? "active" : ""}>
            <span>Skills</span>
          </a>

          <a href="#work" className={activeSection === "work" ? "active" : ""}>
            <span>Work</span>
          </a>

          <a href="#contact" className={activeSection === "contact" ? "active" : ""}>
            <span>Contact</span>
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#education" onClick={closeMenu}>Education</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
    </nav>
  );
};

export default Navigation;