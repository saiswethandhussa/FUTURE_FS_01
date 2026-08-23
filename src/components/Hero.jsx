import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Hero.css';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120);
  const [showResumeModal, setShowResumeModal] = useState(false);

  const roles = [
    'Full-Stack Developer',
    'AI / ML Engineer',
    'Software Engineer',
    'GenAI & RAG Specialist'
  ];

  useEffect(() => {
    let timer = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum]);

  const handleTyping = () => {
    const i = loopNum % roles.length;
    const fullText = roles[i];

    if (isDeleting) {
      setCurrentText(fullText.substring(0, currentText.length - 1));
      setTypingSpeed(50);
    } else {
      setCurrentText(fullText.substring(0, currentText.length + 1));
      setTypingSpeed(110);
    }

    if (!isDeleting && currentText === fullText) {
      setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(400);
    }
  };

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
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
            <div className="hero-badge">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="#facc15" 
                width="14" 
                height="14" 
                className="hero-badge-icon"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <span className="hero-badge-text">SOFTWARE ENGINEER • AI/ML • FULL-STACK</span>
            </div>
          </div>
          
          <h1 className="hero-title">
            Hi, I am <br />
            <span className="text-gradient font-accent">Sai Swethan Dhussa</span>
          </h1>

          <div className="hero-subtitle">
            <span className="subtitle-prefix">{currentText.startsWith('AI') ? 'I am an ' : 'I am a '}</span>
            <span className="subtitle-typing">{currentText}</span>
            <span className="typing-cursor">|</span>
          </div>

          <p className="hero-description">
            B.Tech Computer Science student at IIIT Ranchi. A full-stack engineer and avid competitive programmer 
            passionate about building robust web architectures and solving complex algorithmic challenges.
          </p>

          <div className="hero-ctas">
            <button 
              onClick={() => setShowResumeModal(true)} 
              className="btn btn-download-cv"
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Download CV</span>
            </button>

            <button 
              onClick={() => handleScrollToSection('contact')} 
              className="btn btn-connect"
            >
              <span>Connect With Me</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>

        {/* Hero Profile Image */}
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img 
              src={profileImg} 
              alt="Sai Swethan Dhussa" 
              className="hero-profile-img"
            />
          </div>
        </div>
      </div>

      {/* Dual Resume Selection Modal */}
      {showResumeModal && typeof document !== 'undefined' && createPortal(
        <div className="resume-modal-overlay" onClick={() => setShowResumeModal(false)}>
          <div className="resume-modal-box glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="resume-modal-header">
              <div className="resume-header-info">
                <h3 className="resume-modal-title">Select Resume Profile</h3>
              </div>
              <button 
                className="resume-close-btn" 
                onClick={() => setShowResumeModal(false)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <p className="resume-modal-desc">
              Choose the targeted resume matching the role requirements:
            </p>

            <div className="resume-cards-grid">
              {/* AI & Data Science Resume */}
              <a 
                href="https://drive.google.com/file/d/1HEU39_FuV5g6UTl-mKHOE7nIBvnKhHzo/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="resume-choice-card"
                onClick={() => setShowResumeModal(false)}
              >
                <div className="resume-card-icon-box ai-glow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                  </svg>
                </div>
                <div className="resume-card-text">
                  <div className="resume-card-title-row">
                    <h4 className="resume-choice-title">AI & Data Science CV</h4>
                    <span className="resume-mini-tag">GenAI & ML</span>
                  </div>
                  <p className="resume-choice-desc">
                    LangGraph, Hybrid RAG, Qdrant, MLOps, Gemini 2.5, Scikit-Learn & Python.
                  </p>
                </div>
                <div className="resume-card-action">
                  <span>View PDF</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </div>
              </a>

              {/* Full Stack & Software Engineering Resume */}
              <a 
                href="https://drive.google.com/file/d/1-fZZysVABSHTpgTc3XW6q07nvwxuSygN/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="resume-choice-card"
                onClick={() => setShowResumeModal(false)}
              >
                <div className="resume-card-icon-box fs-glow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <div className="resume-card-text">
                  <div className="resume-card-title-row">
                    <h4 className="resume-choice-title">Full-Stack & SDE CV</h4>
                    <span className="resume-mini-tag">Microservices</span>
                  </div>
                  <p className="resume-choice-desc">
                    Spring Boot, React.js, Next.js, Keycloak, PostgreSQL, DSA & Microservices.
                  </p>
                </div>
                <div className="resume-card-action">
                  <span>View PDF</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
