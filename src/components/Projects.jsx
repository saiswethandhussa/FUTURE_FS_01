import React, { useState } from 'react';
import './Projects.css';

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const projectsData = [
    {
      id: 'hms',
      title: 'Hospital Management System',
      category: 'Full-Stack MERN Application',
      description: 'A comprehensive, role-based healthcare portal streamlining medical booking and administrative tasks.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Razorpay', 'Cloudinary', 'bcrypt', 'Tailwind CSS'],
      githubLink: 'https://github.com/saiswethandhussa/prescripto',
      liveLink: '#',
      bullets: [
        'Engineered role-based dashboards tailored specifically for admins, doctors, and patients.',
        'Established secure session handling using JWT and password hashing via bcrypt.',
        'Configured a live Razorpay payment gateway complete with backend webhook signature validation.',
        'Facilitated real-time booking calendars reflecting actual doctor availability hours.',
        'Structured an admin panel to oversee doctor credentials, appointment loads, and system parameters.',
        'Refined MongoDB database schemas to prevent double-booking conflicts and optimize query performance.'
      ],
      details: {
        architecture: 'Client-Server Separation via RESTful APIs. Admin and Doctor flows operate on distinct dashboard hooks, while MongoDB serves as the persistent query hub with Cloudinary storing doctors\' digital profiles.',
        payment: 'Razorpay checkout API with secure server-to-server signature validation. Utilizes Node.js crypto module to verify callbacks before completing transaction states.',
        schema: 'Strict relational mappings in MongoDB. The Appointment model holds references to Doctor and Patient models, using unique indices and composite key validations to ensure zero schedule overlap.'
      }
    },
    {
      id: 'pms',
      title: 'Project Management System',
      category: 'Full-Stack PostgreSQL Application',
      description: 'A multi-tenant project planning tool optimizing task assignments, progress tracking, and remote team alignment.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'Clerk Auth', 'Ingest', 'Brevo', 'Tailwind CSS'],
      githubLink: 'https://github.com/saiswethandhussa/Project-Management',
      liveLink: '#',
      bullets: [
        'Designed a multi-tenant environment with rigorous Role-Based Access Controls (RBAC) to ensure organizational data partitioning.',
        'Delivered highly interactive Gantt/Kanban styled progress dashboards for agile tracking.',
        'Enabled granular task tracking including priority statuses, deadline countdowns, and assignees.',
        'Integrated Clerk Authentication for enterprise-grade authentication and session management.',
        'Leveraged PostgreSQL (hosted on Neon) coupled with Prisma ORM for relational queries.',
        'Orchestrated background batch jobs and asynchronous worker tasks using Ingest.',
        'Automated HTML email notifications via Brevo API based on system state changes.'
      ],
      details: {
        architecture: 'Multi-tenant relational layout. Prisma ORM acts as the type-safe abstraction layer interacting with a cloud PostgreSQL database. Clerk handles auth tokens, feeding organizational metadata directly into database contexts.',
        background: 'Ingest workers perform scheduled database updates and status checks. Email notification queues run asynchronously to prevent blocking main REST API cycles.',
        security: 'Strict tenant checks enforced at the middleware level. Database queries utilize tenant-specific keys, preventing horizontal privilege escalations.'
      }
    }
  ];

  const toggleDetails = (projectId) => {
    if (expandedProject === projectId) {
      setExpandedProject(null);
    } else {
      setExpandedProject(projectId);
    }
  };

  return (
    <section id="projects" className="projects-section section">
      <div className="projects-container container">
        <h2 className="section-title">Featured Creations</h2>
        
        <div className="projects-list">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card glass-card">
              <div className="project-header">
                <span className="project-badge badge badge-cyan">{project.category}</span>
                <h3 className="project-title-text">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-tech">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-body-content">
                <h4 className="bullets-title">Key Accomplishments</h4>
                <ul className="project-bullets">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>

              {/* Collapsible Architecture Details Panel */}
              <div className={`project-details-panel ${expandedProject === project.id ? 'expanded' : ''}`}>
                <div className="details-panel-inner">
                  <div className="details-section">
                    <h5>🛠️ System Architecture</h5>
                    <p>{project.details.architecture || project.details.background}</p>
                  </div>
                  
                  {project.id === 'hms' ? (
                    <div className="details-section-grid">
                      <div className="details-section">
                        <h5>💳 Payment Gateways</h5>
                        <p>{project.details.payment}</p>
                      </div>
                      <div className="details-section">
                        <h5>📅 Collision Prevention</h5>
                        <p>{project.details.schema}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="details-section-grid">
                      <div className="details-section">
                        <h5>🛡️ Multi-Tenant Shield</h5>
                        <p>{project.details.security}</p>
                      </div>
                      <div className="details-section">
                        <h5>📧 Mail Automations</h5>
                        <p>Leverages Brevo SMTP mailers integrated with event triggers on database updates.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="project-actions">
                <button 
                  onClick={() => toggleDetails(project.id)} 
                  className="btn btn-secondary btn-details"
                >
                  {expandedProject === project.id ? 'Hide Specs' : 'View Specs'}
                  <svg 
                    className={`arrow-icon ${expandedProject === project.id ? 'rotated' : ''}`}
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link-btn" aria-label="GitHub Repository">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
