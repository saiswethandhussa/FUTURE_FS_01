import React from 'react';
import './About.css';

export default function About() {
  const codingProfiles = [
    {
      platform: 'LeetCode',
      metric: '200+ Solved',
      detail: '70+ SQL queries',
      rating: 'Peak: 1615',
      color: 'var(--accent-amber)',
      link: 'https://leetcode.com/saiswethandhussa',
      logo: 'https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3521542-2944960.png' // using local styling standard logo
    },
    {
      platform: 'CodeChef',
      metric: '3★ Rated',
      detail: '100+ Submissions',
      rating: 'Peak: 1631',
      color: 'var(--accent-purple)',
      link: 'https://www.codechef.com/users/saiswethandhus',
    },
    {
      platform: 'Codeforces',
      metric: '1200+ Rating',
      detail: '80+ Problems Solved',
      rating: 'Peak: 1265',
      color: 'var(--accent-cyan)',
      link: 'https://codeforces.com/profile/saiswethandhussa',
    },
    {
      platform: 'GeeksforGeeks',
      metric: '200+ Solved',
      detail: 'DSA & Algorithms',
      rating: 'Extensive Practice',
      color: 'var(--accent-emerald)',
      link: 'https://www.geeksforgeeks.org/user/saiswethandhussa/',
    }
  ];

  return (
    <section id="about" className="about-section section">
      <div className="about-container container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-grid">
          <div className="about-bio">
            <h3 className="bio-subtitle text-gradient">Architecting Web Systems & Algorithmic Solutions</h3>
            <p className="bio-text">
              I am a Bachelor of Technology student in Computer Science and Engineering at the 
              <strong> Indian Institute of Information Technology (IIIT), Ranchi</strong>. With graduation targeted 
              for May 2027, I dedicate my academic journey to mastering complex software systems, full-stack architectures, 
              and competitive programming.
            </p>
            <p className="bio-text">
              My core strengths lie in full-stack JavaScript frameworks (React.js, Next.js, Node.js, Express.js) and 
              relational/non-relational database management. Driven by an algorithmic mindset, I have solved over 
              <strong> 300+ Data Structures & Algorithms (DSA) problems</strong> across multiple coding platforms.
            </p>
            
            <div className="education-card glass-card">
              <div className="education-icon">🎓</div>
              <div className="education-details">
                <span className="edu-duration">2023 - 2027</span>
                <h4>Bachelor of Technology (B.Tech) - CSE</h4>
                <p className="edu-school">Indian Institute of Information Technology, Ranchi</p>
                <div className="coursework-tags">
                  <span className="badge">DSA</span>
                  <span className="badge">OOP</span>
                  <span className="badge">DBMS</span>
                  <span className="badge">OS</span>
                  <span className="badge">RESTful APIs</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats-container">
            <h3 className="stats-header">Coding Profiles & Metrics</h3>
            <p className="stats-desc">Active ranking metrics demonstrating persistent algorithmic practice and problem-solving velocity.</p>
            
            <div className="stats-grid">
              {codingProfiles.map((profile, index) => (
                <a 
                  key={index} 
                  href={profile.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="stats-card glass-card"
                  style={{ '--card-accent': profile.color }}
                >
                  <div className="stats-header-row">
                    <span className="stats-platform">{profile.platform}</span>
                    <span className="stats-arrow">↗</span>
                  </div>
                  <div className="stats-metric" style={{ color: profile.color }}>
                    {profile.metric}
                  </div>
                  <div className="stats-details">
                    <p>{profile.detail}</p>
                    <span className="stats-rating">{profile.rating}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
