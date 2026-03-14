import '../styles/Education.scss';

const Education = () => {

  const educations = [
    {
      id: 1,
      degree: 'Bachelor of Engineering in Computer Engineering',
      institution: 'Naresuan University',
      location: 'Phitsanulok, Thailand',
      period: '2022 - 2026',
      gpa: '3.23',
      description:
        'Focused on software development, computer systems, data processing, and programming fundamentals. Gained hands-on experience through various practical projects in web applications, game development, AI-related systems, and data-driven solutions.'
    }
  ];

  const internships = [
    {
      id: 1,
      company: 'Faculty of Science, Naresuan University',
      role: 'IT Support',
      period: 'June - September 2023',
      description: 'Checked and solved basic computer problems including hardware and software issues.'
    },
    {
      id: 2,
      company: 'Law Office of Naresuan University',
      role: 'IT Support',
      period: 'October - November 2023',
      description: 'Troubleshot computer problems and assisted with paperwork while gaining knowledge about legal processes.'
    },
    {
      id: 3,
      company: 'Department of Intellectual Property',
      role: 'Web Programming',
      period: 'June 2024',
      description: 'Developed web applications using PHP and gained knowledge about copyright and intellectual property law.'
    },
    {
      id: 4,
      company: 'BP Luxury Travel / BP Online Groups',
      role: 'Web Programming',
      period: 'April - June 2025',
      description: 'Developed and managed websites using WordPress.'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="education-container">

        <h2 className="animate-in" style={{ animationDelay: '0.2s' }}>
          Education
        </h2>

        <div className="education-timeline">
          {educations.map((edu, index) => (
            <div
              key={edu.id}
              className="education-card animate-in"
              style={{ animationDelay: `${0.4 + index * 0.2}s` }}
            >
              <div className="education-header">
                <div className="degree-info">
                  <h3>{edu.degree}</h3>
                  <div className="institution">{edu.institution}</div>
                  <div className="location">{edu.location}</div>
                </div>

                <div className="education-meta">
                  <div className="period">{edu.period}</div>
                  <div className="gpa">
                    <span>GPA:</span> {edu.gpa}
                  </div>
                </div>
              </div>

              <p className="education-description">{edu.description}</p>
            </div>
          ))}
        </div>

        {/* Internship Section */}

        <h2 className="animate-in" style={{ animationDelay: '0.6s', marginTop: '60px' }}>
          Internship Experience
        </h2>

        <div className="internship-timeline">
          {internships.map((intern, index) => (
            <div
              key={intern.id}
              className="internship-card animate-in"
              style={{ animationDelay: `${0.8 + index * 0.2}s` }}
            >
              <div className="internship-header">
                <div>
                  <h3>{intern.role}</h3>
                  <div className="company">{intern.company}</div>
                </div>

                <div className="period">{intern.period}</div>
              </div>

              <p className="internship-description">{intern.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;