import React, { useState } from 'react';
import "../styles/ProjectCard.scss";

const ProjectCard = ({ project }) => {

  const {
    number,
    title,
    description,
    image,
    images,
    tags,
    delay,
    reversed,
    youtubeLink
  } = project;

  const imageList = images || [image];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) =>
      prev === imageList.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? imageList.length - 1 : prev - 1
    );
  };

  return (
    <div className={`project-card ${reversed ? 'reversed' : ''}`}>

      <div className="project-image animate-in" style={{ animationDelay: delay }}>

        {youtubeLink ? (

          <a href={youtubeLink} className="youtube-link" target="_blank" rel="noopener noreferrer">

            <img src={imageList[index]} alt={title} />

            <div className="youtube-overlay">
              <span>Watch on YouTube</span>
            </div>

          </a>

        ) : (

          <div className="image-slider">

            {imageList.length > 1 && (
              <button className="prev" onClick={prev}>◀</button>
            )}

            <img src={imageList[index]} alt={title} />

            {imageList.length > 1 && (
              <button className="next" onClick={next}>▶</button>
            )}

          </div>

        )}

      </div>

      <div className="project-details">

        <span className="project-number animate-in" style={{ animationDelay: delay }}>
          {number}
        </span>

        <h3 className="project-title animate-in" style={{ animationDelay: delay }}>
          {title}
        </h3>

        <p className="project-description animate-in" style={{ animationDelay: delay }}>
          {description}
        </p>

        <div className="project-tags animate-in" style={{ animationDelay: delay }}>
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            style={{ marginTop: '1rem', display: 'inline-block' }}
          >
            View Project
          </a>
        )}
      </div>

    </div>
  );
};



export default ProjectCard;