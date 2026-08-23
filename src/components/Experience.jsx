import React from 'react';
import './Experience.css';

export default function Experience() {
  const experiences = [
    {
      role: 'Frontend Developer Intern',
      company: 'SmallFare Services',
      duration: 'May 2026 - August 2026',
      points: [
        'Designed and scaled 12+ data-intensive dashboard applications using Next.js (App Router), TypeScript, and Tailwind CSS, optimizing complex table rendering and data flow across internal management tools.',
        'Engineered a client-side Role-Based Access Control (RBAC) system across 10+ admin roles (CEO, CFO, CMO, COO, etc.), enforcing department-scoped user access and dynamic sidebar/route security using custom React hooks.',
        'Managed UI consistency across 20,000+ lines of code by building modular React components (e.g., custom responsive pagination with URL query-state sync), streamlining data navigation across 15+ enterprise tables.',
        'Refactored partner KYC onboarding workflows with interactive document preview modals and audit trails, while resolving Next.js SSR hydration errors to achieve 100% clean Vercel production deployments.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section section">
      <div className="experience-container container">
        <h2 className="section-title">
          Work <span className="title-highlight">Experience</span>
        </h2>

        <div className="experience-list">
          {experiences.map((exp, idx) => (
            <div key={idx} className="experience-card glass-card">
              <div className="exp-header">
                <div className="exp-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div className="exp-title-group">
                  <h3 className="exp-role">{exp.role}</h3>
                  <div className="exp-meta">
                    <span className="exp-company">{exp.company}</span>
                    <span className="exp-bullet">•</span>
                    <span className="exp-duration">{exp.duration}</span>
                  </div>
                </div>
              </div>

              <ul className="exp-points">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="exp-point-item">
                    <span className="point-dot"></span>
                    <span className="point-text">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
