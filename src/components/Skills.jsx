import React, { useState } from 'react';
import './Skills.css';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'languages', label: 'Languages' },
    { id: 'frameworks', label: 'Frameworks & Libs' },
    { id: 'databases', label: 'Databases & Cloud' },
    { id: 'tools', label: 'Developer Tools' }
  ];

  const skillsData = [
    // Languages
    { name: 'C++', category: 'languages', level: 90 },
    { name: 'Java', category: 'languages', level: 85 },
    { name: 'JavaScript', category: 'languages', level: 88 },
    { name: 'C', category: 'languages', level: 75 },
    { name: 'HTML5', category: 'languages', level: 92 },
    { name: 'CSS3', category: 'languages', level: 88 },

    // Frameworks & Libs
    { name: 'React.js', category: 'frameworks', level: 90 },
    { name: 'Next.js', category: 'frameworks', level: 82 },
    { name: 'Node.js', category: 'frameworks', level: 85 },
    { name: 'Express.js', category: 'frameworks', level: 87 },
    { name: 'Redux Toolkit', category: 'frameworks', level: 80 },
    { name: 'Vanilla CSS', category: 'frameworks', level: 90 },
    { name: 'Material UI', category: 'frameworks', level: 78 },
    { name: 'GSAP', category: 'frameworks', level: 70 },

    // Databases & Cloud
    { name: 'MongoDB', category: 'databases', level: 85 },
    { name: 'PostgreSQL', category: 'databases', level: 82 },
    { name: 'MySQL', category: 'databases', level: 80 },
    { name: 'AWS', category: 'databases', level: 65 },

    // Developer Tools
    { name: 'Git & GitHub', category: 'tools', level: 88 },
    { name: 'Postman', category: 'tools', level: 85 },
    { name: 'VS Code', category: 'tools', level: 95 },
    { name: 'IntelliJ IDEA', category: 'tools', level: 80 }
  ];

  const filteredSkills = activeFilter === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeFilter);

  return (
    <section id="skills" className="skills-section section">
      <div className="skills-container container">
        <h2 className="section-title">Technical Expertise</h2>
        
        {/* Category Filters */}
        <div className="skills-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="skill-card glass-card">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar-outer">
                <div 
                  className="skill-bar-inner" 
                  style={{ width: `${skill.level}%` }}
                >
                  <div className="skill-bar-glow"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
