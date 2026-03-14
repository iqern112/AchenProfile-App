import '../styles/About.scss';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        
        <h2 className="animate-in" style={{ animationDelay: "0.2s" }}>
          About Me
        </h2>

        <div className="about-content">
          <div className="about-text">

            <p className="animate-in" style={{ animationDelay: "0.4s" }}>
              My name is <strong>Sansern Saewa (Achen)</strong>, a Computer Engineering 
              graduate from Naresuan University and a Full Stack Developer passionate 
              about building practical digital solutions.
            </p>

            <p className="animate-in" style={{ animationDelay: "0.5s" }}>
              My interests extend beyond software development into 
              <strong> Business Analysis, new business innovation, and data-driven 
              decision making</strong>. I enjoy exploring how technology can create 
              value for businesses and users.
            </p>

            <p className="animate-in" style={{ animationDelay: "0.6s" }}>
              Throughout my experience, I have worked across multiple areas including 
              web development, IT support, intellectual property processes, LLM 
              development using Lanta, performance testing, and educational game 
              development with the Godot game engine. This diverse background allows 
              me to approach problems from both technical and business perspectives.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;