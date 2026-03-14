import '../styles/Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {currentYear} Sansern Saewa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;