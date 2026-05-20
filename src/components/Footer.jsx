import React from 'react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 75;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-brand">
          <a href="#hero" className="footer-logo" onClick={(e) => handleNavClick(e, 'hero')}>
            <span className="logo-icon">⚡</span>
            <span className="logo-text">Sai Swethan</span>
          </a>
          <p className="footer-tagline">Architecting premium digital assets and scalable algorithmic systems.</p>
        </div>

        <div className="footer-links-group">
          <div className="footer-links">
            <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')}>Home</a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
            <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
            <a href="#achievements" onClick={(e) => handleNavClick(e, 'achievements')}>Credentials</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          </div>

          <div className="footer-socials">
            <a href="https://github.com/saiswethandhussa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            
            <a href="https://www.linkedin.com/in/sai-swethan-dhussa-903006288/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>

            <a href="mailto:saiswethandhussa@gmail.com" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom container">
        <p className="copyright">© {currentYear} Sai Swethan Dhussa. All Rights Reserved.</p>
        <p className="engineered">Engineered with ❤️ & Vanilla CSS</p>
      </div>
    </footer>
  );
}
