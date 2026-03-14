import '../styles/Contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="animate-in" style={{ animationDelay: '0.2s' }}>Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item animate-in" style={{ animationDelay: '0.4s' }}>
              <h3>Email</h3>
              <a href="mailto:sansernsaewa@gmail.com" className="underline-link">
                sansernsaewa@gmail.com
              </a>
            </div>
            
            <div className="info-item animate-in" style={{ animationDelay: '0.6s' }}>
              <h3>Location</h3>
              <p>Thailand</p>
            </div>
            
            <div className="info-item animate-in" style={{ animationDelay: '0.8s' }}>
              <h3>Phone</h3>
              <a href="tel:+66638372535" className="underline-link">
                +66 063 837 2535
              </a>
            </div>
            
            <div className="info-item animate-in" style={{ animationDelay: '1.0s' }}>
              <h3>Line</h3>
              <p>ID: arqern</p>
            </div>

            <div className="info-item animate-in" style={{ animationDelay: '1.2s' }}>
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/sansern-saewa-2695313b6" className="underline-link" target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;