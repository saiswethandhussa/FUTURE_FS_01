import React from 'react';
import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'C++', 'SQL', 'JavaScript', 'TypeScript', 'HTML/CSS']
    },
    {
      title: 'GenAI & NLP',
      skills: ['RAG', 'LangGraph', 'Qdrant', 'BM25', 'CrossEncoder', 'pgvector']
    },
    {
      title: 'Data Science & ML',
      skills: ['Scikit-learn', 'Pandas', 'NumPy', 'SciPy', 'XGBoost', 'EDA', 'Matplotlib', 'Seaborn']
    },
    {
      title: 'ML Engineering & Tools',
      skills: ['MLflow', 'FastAPI', 'Docker', 'GitHub Actions', 'Git', 'Postman']
    },
    {
      title: 'Web & Frameworks',
      skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Spring Boot', 'Tailwind CSS']
    },
    {
      title: 'Cloud, DBs & Core',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'AWS', 'DSA', 'DBMS', 'Machine Learning']
    }
  ];

  return (
    <section id="skills" className="skills-section section">
      <div className="skills-container container">
        <h2 className="section-title">
          Technical <span className="title-highlight">Skills</span>
        </h2>
        
        <div className="skills-cards-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skills-category-card glass-card">
              <h3 className="skills-category-title">{cat.title}</h3>
              <div className="skills-tags-wrapper">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Coding & Developer Profile CTA Buttons */}
        <div className="skills-profile-actions">
          <a
            href="https://github.com/saiswethandhussa"
            target="_blank"
            rel="noopener noreferrer"
            className="profile-cta-btn btn-github"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <span>GitHub Profile</span>
          </a>

          <a
            href="https://leetcode.com/u/saiswethandhussa/"
            target="_blank"
            rel="noopener noreferrer"
            className="profile-cta-btn btn-dark-glass"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
              <path d="M4 22h16"></path>
              <path d="M10 14.66V17c0 .55-.45 1-1 1H7.5"></path>
              <path d="M14 14.66V17c0 .55.45 1 1 1h1.5"></path>
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
            </svg>
            <span>LeetCode Profile</span>
          </a>

          <a
            href="https://www.codechef.com/users/nikky_778"
            target="_blank"
            rel="noopener noreferrer"
            className="profile-cta-btn btn-dark-glass"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>CodeChef Profile</span>
          </a>

          <a
            href="https://codeforces.com/profile/saiswethan05"
            target="_blank"
            rel="noopener noreferrer"
            className="profile-cta-btn btn-dark-glass"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="12" width="4" height="8" rx="1"></rect>
              <rect x="10" y="8" width="4" height="12" rx="1"></rect>
              <rect x="17" y="4" width="4" height="16" rx="1"></rect>
            </svg>
            <span>Codeforces Profile</span>
          </a>

          <a
            href="https://www.geeksforgeeks.org/profile/saiswethavk3b"
            target="_blank"
            rel="noopener noreferrer"
            className="profile-cta-btn btn-dark-glass"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            <span>GFG Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
}
