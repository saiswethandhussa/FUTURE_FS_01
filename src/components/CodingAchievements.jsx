import React from 'react';
import './CodingAchievements.css';

export default function CodingAchievements() {
  const credentials = [
    {
      type: 'fellowship',
      title: 'AlgoUniversity Tech Fellowship',
      issuer: 'ATF 2024',
      description: 'Qualified Stage 1, ranking in the top 4,000 out of 20,000+ highly competitive applicants nationwide.',
      tag: 'Ranked Top 20%',
      color: 'var(--accent-cyan)',
      icon: '🏆',
      link: 'https://d3uam8jk4sa4y4.cloudfront.net/static/certificates/atf_stage_1/dhussa-sai-swethan.png',
      linkLabel: 'View Certificate'
    },
    {
      type: 'certification',
      title: 'Introduction to Web Applications',
      issuer: 'Coursera (Akamai Technologies)',
      description: 'Completed comprehensive course covering secure modern web development architectures, client-server models, and caching protocols.',
      tag: 'Verified Course',
      color: 'var(--accent-emerald)',
      icon: '📜',
      link: 'https://www.coursera.org/account/accomplishments/verify/1SY38ACRI7VX'
    },
    {
      type: 'certification',
      title: 'CSS (Basic) Certification',
      issuer: 'HackerRank',
      description: 'Demonstrated professional expertise in CSS styling, layout algorithms (Flexbox, Grid), and responsive pixel-perfect implementation.',
      tag: 'Skills Certified',
      color: 'var(--accent-amber)',
      icon: '🎨',
      link: 'https://www.hackerrank.com/certificates/b4badf8229d1',
      linkLabel: 'Verify Credential'
    }
  ];

  const ratings = [
    { platform: 'CodeChef Rating', peak: '1631', ratingText: '3★ (3 Star Rated)', color: 'var(--accent-purple)' },
    { platform: 'LeetCode Rating', peak: '1615', ratingText: 'Top 15%', color: 'var(--accent-amber)' },
    { platform: 'Codeforces Rating', peak: '1265', ratingText: 'Pupil Rank', color: 'var(--accent-cyan)' }
  ];

  return (
    <section id="achievements" className="achievements-section section">
      <div className="achievements-container container">
        <h2 className="section-title">Credentials & Milestones</h2>
        
        {/* Peak Coding Ratings Row */}
        <div className="ratings-grid">
          {ratings.map((rate, idx) => (
            <div key={idx} className="rating-card glass-card" style={{ '--glow-color': rate.color }}>
              <span className="rating-platform">{rate.platform}</span>
              <span className="rating-peak">{rate.peak}</span>
              <span className="rating-desc" style={{ color: rate.color }}>{rate.ratingText}</span>
            </div>
          ))}
        </div>

        {/* Certifications and Milestones Grid */}
        <div className="credentials-grid">
          {credentials.map((cred, index) => (
            <div 
              key={index} 
              className="cred-card glass-card"
              style={{ '--accent-color': cred.color }}
            >
              <div className="cred-icon-wrapper">
                <span className="cred-icon">{cred.icon}</span>
              </div>
              <div className="cred-body">
                <span className="cred-tag badge" style={{ borderColor: cred.color, color: cred.color }}>
                  {cred.tag}
                </span>
                <h3 className="cred-title">{cred.title}</h3>
                <span className="cred-issuer">{cred.issuer}</span>
                <p className="cred-desc">{cred.description}</p>
                {cred.link && (
                  <a 
                    href={cred.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cred-link"
                  >
                    {cred.linkLabel || 'Verify Credential'} <span className="arrow">↗</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
