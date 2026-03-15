import React, { useState } from 'react';
import "../styles/Skills.scss";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    { id: 'all', name: 'All Skills' },
    { id: 'languages', name: 'Programming Languages' },
    { id: 'frameworks', name: 'Frameworks' },
    { id: 'development', name: 'Development' },
    { id: 'design', name: 'Design' },
    { id: 'tools', name: 'Tools & Software' },
    { id: 'management', name: 'Management' },
    { id: 'languages-spoken', name: 'Languages' }
  ];

  const skillsData = [
    { id: 1, name: 'C#', category: 'languages', description: 'Experience with C# for application and system development.' },
    { id: 2, name: 'Python', category: 'languages', description: 'Used for web development, automation, and data processing.' },
    { id: 3, name: 'Java', category: 'languages', description: 'Experience with Java for Android and backend development.' },
    { id: 4, name: 'C++', category: 'languages', description: 'Knowledge of C++ for system and game development.' },
    { id: 5, name: 'Go', category: 'languages', description: 'Used for backend services and API development.' },
    { id: 6, name: 'SQL', category: 'languages', description: 'Database queries, data management, and analysis.' },
    { id: 7, name: 'PHP', category: 'languages', description: 'Used for web programming and backend systems.' },
    { id: 8, name: 'React.js', category: 'frameworks', description: 'Building interactive user interfaces for web applications.' },
    { id: 9, name: 'Flutter', category: 'frameworks', description: 'Cross-platform mobile and web application development.' },
    { id: 10, name: 'PostgreSQL', category: 'frameworks', description: 'Database design, queries, and data management.' },
    { id: 11, name: 'MongoDB', category: 'frameworks', description: 'NoSQL database for flexible data storage.' },
    { id: 12, name: 'Node.js', category: 'frameworks', description: 'Backend development using Node.js for APIs and server-side applications.' },
    { id: 13, name: 'Frontend Development', category: 'development', description: 'HTML, CSS, JavaScript and modern frontend frameworks.' },
    { id: 14, name: 'Backend Development', category: 'development', description: 'Building APIs, server logic, and database integration.' },
    { id: 15, name: 'Game Development', category: 'development', description: 'Educational game development using Godot engine.' },
    { id: 16, name: 'Performance Testing', category: 'development', description: 'Performance testing and analytics using tools such as JMeter.' },
    { id: 17, name: 'LLM Development', category: 'development', description: 'Experimentation with Large Language Models using Lanta.' },
    { id: 18, name: 'Figma', category: 'design', description: 'UI/UX design, wireframes, and interface prototyping.' },
    { id: 19, name: 'UI/UX Design', category: 'design', description: 'Designing intuitive and user-centered interfaces for web and applications.' },
    { id: 20, name: 'Game Design', category: 'design', description: 'Designing gameplay systems, mechanics, and user experience in games.' },
    { id: 21, name: 'WordPress', category: 'tools', description: 'Website development and customization using WordPress.' },
    { id: 22, name: 'Git & GitHub', category: 'tools', description: 'Version control and collaborative development workflows.' },
    { id: 23, name: 'VS Code', category: 'tools', description: 'Primary development environment for coding and debugging.' },
    { id: 24, name: 'Notion', category: 'tools', description: 'Documentation, knowledge management, and project organization.' },
    { id: 25, name: 'Firebase', category: 'tools', description: 'Backend services for authentication, database, and cloud functions.' },
    { id: 26, name: 'Docker', category: 'tools', description: 'Containerization for application deployment and development environments.' },
    { id: 27, name: 'Power BI & Tableau', category: 'tools', description: 'Data visualization and business intelligence dashboards.' },
    { id: 28, name: 'Project Management', category: 'management', description: 'Planning, organizing, and managing development tasks.' },
    { id: 29, name: 'Agile & Scrum', category: 'management', description: 'Agile project workflows, sprint planning, and iterative development.' },
    { id: 30, name: 'Team Leadership', category: 'management', description: 'Coordinating teams and guiding development projects.' },
    { id: 31, name: 'Business Analysis', category: 'management', description: 'Analyzing business requirements and translating them into technical solutions.' },
    { id: 32, name: 'English', category: 'languages-spoken', description: 'Professional communication and technical documentation.' },
    { id: 33, name: 'Thai', category: 'languages-spoken', description: 'Native language proficiency.' },
    { id: 34, name: 'Godot', category: 'development', description: 'Game development using the Godot engine for gameplay systems and interactive applications.' },
    { id: 35, name: 'Unity', category: 'development', description: 'Game development using Unity with C# scripting and real-time interactive systems.' },
    { id: 36, name: 'Unreal Engine', category: 'development', description: 'Real-time 3D development using Unreal Engine and Blueprint/C++.' },
    { id: 37, name: 'HTML', category: 'development', description: 'Building the structure of modern web pages.' },
    { id: 38, name: 'CSS', category: 'development', description: 'Styling and responsive layout design for web interfaces.' },
    { id: 39, name: 'Bootstrap 5', category: 'frameworks', description: 'Responsive CSS framework for modern web development.' },
    { id: 40, name: 'Socket.io', category: 'frameworks', description: 'Real-time communication between client and server.' },
    { id: 41, name: 'MySQL', category: 'frameworks', description: 'Relational database management system for structured data.' },
    { id: 42, name: 'SQLite', category: 'frameworks', description: 'Lightweight embedded relational database.' },
    { id: 43, name: 'C', category: 'languages', description: 'Low-level programming language used for system and embedded development.' },
    { id: 44, name: 'GDScript', category: 'languages', description: 'Scripting language designed for the Godot game engine.' },
    { id: 45, name: 'MS Office', category: 'tools', description: 'Productivity tools including Word, Excel, and PowerPoint.' },
    { id: 46, name: 'MATLAB', category: 'tools', description: 'Numerical computing and technical programming environment.' },
    { id: 47, name: 'Canva', category: 'design', description: 'Graphic design and presentation creation tool.' },
    { id: 48, name: 'DaVinci Resolve', category: 'tools', description: 'Professional video editing and color grading software.' },
    { id: 49, name: 'CapCut', category: 'tools', description: 'Video editing tool for digital content creation.' },
    { id: 50, name: 'JavaScript', category: 'languages', description: 'Programming language used for building interactive web applications and server-side development with Node.js.' }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="skills">
      <div className="skills-container">

        <h2 className="animate-in" style={{ animationDelay: '0.2s' }}>
          My Skills
        </h2>

        <div className="skills-filter animate-in" style={{ animationDelay: '0.3s' }}>
          {skillCategories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.id}
              className="skill-card animate-in"
              style={{ animationDelay: `${0.4 + (index % 6) * 0.1}s` }}
            >
              <div className="skill-header">
                <h3 className="skill-name">{skill.name}</h3>
              </div>

              <p className="skill-description">{skill.description}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;