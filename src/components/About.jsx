import React from 'react';
import './About.css';

export default function About() {
  const educationList = [
    {
      degree: 'B.Tech | Computer Science and Engineering',
      institution: 'IIIT Ranchi',
      detail: '2023 - 2027',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
        </svg>
      )
    },
    {
      degree: '12th Grade | Board of Intermediate Telangana',
      institution: 'Board of Intermediate, Telangana',
      detail: 'Percentage: 94.3% | 2023',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path>
          <path d="M6 6h10"></path>
          <path d="M6 10h10"></path>
        </svg>
      )
    },
    {
      degree: '10th Grade | SSC',
      institution: 'Secondary School Certificate (SSC)',
      detail: 'CGPA: 10.0 | 2021',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="about-section section">
      <div className="about-container container">
        <h2 className="section-title">
          About <span className="title-highlight">Me</span>
        </h2>
        
        <div className="about-grid">
          {/* Left Bio Card */}
          <div className="about-card glass-card">
            <p className="about-text">
              Full-stack developer who enjoys building clean and scalable web applications. 
              I have a strong foundation in modern web technologies and focus on writing efficient, 
              maintainable code with good user experience in mind.
            </p>
            <p className="about-text">
              Currently pursuing my B.Tech at <strong>IIIT Ranchi</strong>, I've solved <strong>700+ DSA problems</strong> and 
              enjoy breaking down complex algorithmic challenges into simple and efficient solutions.
            </p>

            <div className="about-meta">
              <div className="meta-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="meta-icon">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Warangal, Telangana</span>
              </div>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=saiswethandhussa@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="meta-item meta-link"
              >
                <span className="meta-icon">✉️</span>
                <span>saiswethandhussa@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Education Stack */}
          <div className="education-stack">
            {educationList.map((edu, idx) => (
              <div key={idx} className="edu-card glass-card">
                <div className="edu-icon-box">
                  {edu.icon}
                </div>
                <div className="edu-content">
                  <h4 className="edu-title">{edu.degree}</h4>
                  <p className="edu-institution">{edu.institution}</p>
                  <span className="edu-detail">{edu.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
