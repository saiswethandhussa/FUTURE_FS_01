import React, { useState, useEffect } from 'react';
import './Hero.css';

export default function Hero() {
  const titles = ["Full-Stack Developer", "Competitive Programmer", "Problem Solver"];
  const [currentText, setCurrentText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullTitle = titles[titleIndex];
      if (!isDeleting) {
        // Typing characters
        setCurrentText(fullTitle.substring(0, currentText.length + 1));
        if (currentText === fullTitle) {
          // Completed typing title, wait and start deleting
          setIsDeleting(true);
          setTypingSpeed(100); // Wait time before deleting is handled outside this loop
        }
      } else {
        // Deleting characters
        setCurrentText(fullTitle.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
          setTypingSpeed(150);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting && currentText === titles[titleIndex] ? 2000 : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex]);

  const handleScrollToSection = (targetId) => {
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
    <section id="hero" className="hero-section section">
      {/* Decorative Glow Dots */}
      <div className="bg-glow-container">
        <div className="bg-glow glow-1"></div>
        <div className="bg-glow glow-2"></div>
      </div>

      <div className="hero-container container">
        <div className="hero-content">
          <div className="hero-greeting-wrapper">
            <span className="hero-greeting badge badge-cyan">Welcome to my universe</span>
          </div>
          
          <h1 className="hero-title">
            Hi, I am <br />
            <span className="text-gradient font-accent">Sai Swethan Dhussa</span>
          </h1>

          <div className="hero-subtitle">
            <span className="subtitle-prefix">I am a </span>
            <span className="subtitle-typing">{currentText}</span>
            <span className="typing-cursor">|</span>
          </div>

          <p className="hero-description">
            B.Tech Computer Science student at IIIT Ranchi. A full-stack engineer and avid competitive programmer 
            passionate about building robust web architectures and solving complex algorithmic challenges.
          </p>

          <div className="hero-ctas">
            <button onClick={() => handleScrollToSection('projects')} className="btn btn-primary">
              View My Work
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
            <button onClick={() => handleScrollToSection('contact')} className="btn btn-secondary">
              Let's Connect
            </button>
          </div>

          <div className="hero-socials">
            {/* GitHub */}
            <a href="https://github.com/saiswethandhussa" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/sai-swethan-dhussa-903006288/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>

            {/* Email */}
            <a href="mailto:saiswethandhussa@gmail.com" className="social-icon" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          </div>
        </div>

        {/* Hero Interactive Showcase Profile Widget */}
        <div className="hero-widget-container">
          <div className="glass-card hero-widget">
            <div className="widget-header">
              <div className="widget-dot red"></div>
              <div className="widget-dot yellow"></div>
              <div className="widget-dot green"></div>
              <span className="widget-title">terminal.js</span>
            </div>
            <div className="widget-body">
              <div className="code-line"><span className="code-keyword">const</span> developer = <span className="code-bracket">&#123;</span></div>
              <div className="code-line indent"><span className="code-prop">name</span>: <span className="code-val">"Sai Swethan Dhussa"</span>,</div>
              <div className="code-line indent"><span className="code-prop">college</span>: <span className="code-val">"IIIT Ranchi"</span>,</div>
              <div className="code-line indent"><span className="code-prop">course</span>: <span className="code-val">"B.Tech CSE (2023 - 2027)"</span>,</div>
              <div className="code-line indent"><span className="code-prop">passions</span>: <span className="code-bracket">[</span><span className="code-val">"Scalable Web Apps"</span>, <span className="code-val">"DSA"</span><span className="code-bracket">]</span>,</div>
              <div className="code-line indent"><span className="code-prop">currentFocus</span>: <span className="code-val">"Full Stack & Performance"</span></div>
              <div className="code-line"><span className="code-bracket">&#125;</span>;</div>
              <br />
              <div className="code-line"><span className="code-comment">// Solved 300+ DSA Problems across platforms!</span></div>
              <div className="code-line"><span className="code-keyword">console</span>.log(developer.passions);</div>
              <div className="code-output">&gt; ['Scalable Web Apps', 'DSA']</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
