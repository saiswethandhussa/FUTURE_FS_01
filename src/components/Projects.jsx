import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './Projects.css';
import prescriptoImg from '../assets/prescripto.png';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedArchProject, setSelectedArchProject] = useState(null);
  const [activeArchTab, setActiveArchTab] = useState('system');

  const architectureData = {
    askthefile: {
      title: 'AskTheFile — Enterprise Agentic RAG Platform',
      badge: 'Multi-Agent LangGraph & Hybrid Search',
      tabs: [
        {
          id: 'system',
          name: '1. System Architecture',
          description: 'End-to-end multi-agent orchestration architecture featuring FastAPI REST backend, LangGraph state machine, tool dispatchers, and LangSmith telemetry.',
          diagram: `User / Frontend (Streamlit)
         │
         ▼
 FastAPI Backend (REST API)
         │
         ▼
 LangGraph Orchestrator (StateGraph)
         │
    ┌────┴───────────────────────────┐
    ▼                                ▼
Planner Agent                   Router Agent
                                     │
           ┌─────────────────────────┼─────────────────────────┐
           ▼                         ▼                         ▼
    Retrieval Tool            Calculator Tool          Web Search Tool
           │                                              (Tavily)
    Hybrid Search
    ├── Qdrant Dense Vector
    ├── BM25 Keyword Search
    └── CrossEncoder Rerank
           │
           ▼
   Verification Agent
           │
           ▼
    Response Agent (Google Gemini 2.5 Flash)
           │
     ┌─────┴─────────────────────────┐
     ▼                               ▼
PostgreSQL Memory             LangSmith Tracing`
        },
        {
          id: 'retrieval',
          name: '2. Hybrid Retrieval Pipeline',
          description: 'Two-stage dense semantic and sparse lexical retrieval pipeline reranked via CrossEncoder for 35% higher context precision.',
          diagram: `User Query
    │
    ├───────────────────────────────┐
    ▼                               ▼
Gemini Embeddings              BM25 Tokenization
(gemini-embedding-001)         (Lexical / Keyword)
    │                               │
    ▼                               ▼
Qdrant Vector Search          BM25 Candidate Ranking
(Cosine Similarity)                 │
    │                               │
    └───────────────┬───────────────┘
                    ▼
          Merge & Deduplicate
                    │
                    ▼
          CrossEncoder Reranker
      (ms-marco-MiniLM-L-6-v2)
                    │
                    ▼
          Top-K Context Chunks
                    │
                    ▼
         Grounded LLM Generation`
        },
        {
          id: 'workflow',
          name: '3. Multi-Agent Workflow',
          description: 'Autonomous multi-agent lifecycle coordinating session context, intelligent intent routing, tool execution, and factual verification.',
          diagram: `  [ User Query ]
        │
        ▼
 ┌───────────────┐
 │ Planner Agent │  ──► Loads conversational context and history for session
 └──────┬────────┘
        ▼
 ┌───────────────┐
 │ Router Agent  │  ──► Analyzes query intent & selects tool (RAG / Math / Web)
 └──────┬────────┘
        ▼
 ┌───────────────┐
 │  Tool Agent   │  ──► Executes selected tool (Qdrant/BM25, Calculator, Tavily)
 └──────┬────────┘
        ▼
 ┌────────────────────┐
 │ Verification Agent │ ──► Validates retrieved context quality & completeness
 └──────┬─────────────┘
        ▼
 ┌────────────────────┐
 │   Response Agent   │ ──► Synthesizes grounded answer & persists memory
 └──────┬─────────────┘
        ▼
  [ Final Response ]`
        }
      ]
    },
    'telco-churn': {
      title: 'Telco Customer Churn MLOps Pipeline',
      badge: 'Production ML Pipeline & Inference',
      tabs: [
        {
          id: 'system',
          name: '1. MLOps CI/CD Architecture',
          description: 'Automated end-to-end Machine Learning operations pipeline featuring MLflow Tracking, Model Registry, FastAPI microservice, and GitHub Actions CI/CD.',
          diagram: `Raw Customer Data (7,000+ Records)
               │
               ▼
 Automated Preprocessing & Feature Engineering (30 Features)
               │
               ▼
 Model Benchmarking (GridSearchCV)
 ├── Random Forest
 ├── Logistic Regression
 └── XGBoost Classifier (ROC-AUC: 0.86)
               │
               ▼
 MLflow Experiment Tracking & Model Registry
               │
               ▼
 Containerized FastAPI Inference Service (Docker)
               │
               ▼
 GitHub Actions CI/CD Pipeline (Automated Pytest & Deploy)`
        }
      ]
    },
    'fitness-tracker': {
      title: 'AI-Powered Fitness Tracker',
      badge: 'Data Flow Diagrams (DFDs) & Microservices',
      tabs: [
        {
          id: 'system',
          name: 'Level 0: System Context Diagram',
          description: 'Defines the system boundaries, external actors (User, Keycloak Identity, Gemini Vision API), and core data interactions.',
          diagram: `              ┌──────────────────────────────────────────────┐
              │           Keycloak Identity Server           │
              │         (OAuth2 / OIDC Token Issuer)         │
              └──────────────────────┬───────────────────────┘
                                     │  JWT Verification
                                     ▼
┌──────────────┐   User Requests   ┌───────────────────────────────────┐   Image / Prompts   ┌────────────────────────┐
│     User     │ ────────────────► │                                   │ ──────────────────► │  Google Gemini API     │
│   (Client)   │ ◄──────────────── │     AI-Powered Fitness Tracker    │ ◄────────────────── │ (Multimodal Vision API)│
└──────────────┘   Fitness Insights│            Ecosystem              │   Nutritional &     └────────────────────────┘
                   & Activity Data └─────────────────┬─────────────────┘   Form Analysis
                                                     │
                                                     ▼  Async Events & Persistence
                                           ┌───────────────────┐
                                           │  PostgreSQL / RAG │
                                           │    & RabbitMQ     │
                                           └───────────────────┘`
        },
        {
          id: 'retrieval',
          name: 'Level 1: Microservices DFD',
          description: 'Decomposes the system into functional microservices, data stores (MongoDB, PostgreSQL pgvector), and event broker routing paths.',
          diagram: `[ User (React/Redux Client) ]
              │
              ▼ (HTTPS / JWT)
┌───────────────────────────────┐
│     Spring Cloud Gateway      │  ──► Keycloak OAuth2 / JWT Auth Filter
└──────────────┬────────────────┘
               │
   ┌───────────┼───────────────────────────┐
   ▼           ▼                           ▼
┌───────────┐ ┌─────────────────────────┐ ┌──────────────────────┐
│ User/Auth │ │ Activity Tracking Svc   │ │ AI Recommendation   │
│ Service   │ │ (Spring Boot REST)      │ │ Service (RAG/Vision) │
└─────┬─────┘ └────────────┬────────────┘ └──────────┬───────────┘
      │                    │                         │
      ▼                    ▼ (Publish Activity Event)▼
┌───────────┐        ┌───────────┐             ┌───────────┐
│ MongoDB   │        │ RabbitMQ  │ ──────────► │ pgvector  │
│ User Docs │        │ Event Bus │             │ PostgreSQL│
└───────────┘        └───────────┘             └─────┬─────┘
                                                     │
                                                     ▼
                                           ┌───────────────────┐
                                           │ Google Gemini API │
                                           │ Multimodal Vision │
                                           └───────────────────┘`
        },
        {
          id: 'workflow',
          name: 'Level 2: AI Recommendation Pipeline',
          description: 'Detailed trace of asynchronous event communication, payload validation, Resilience4j circuit breaking, and pgvector RAG synthesis.',
          diagram: `[ User Logs Activity / Meal Image ]
              │
              ▼
┌─────────────────────────────────┐
│ Activity Tracking Microservice  │  ──► Validates payload & saves to Database
└─────────────┬───────────────────┘
              │
              ▼ (Async Event: "activity.logged")
┌─────────────────────────────────┐
│   RabbitMQ Message Exchange     │  ──► Decouples ingest from AI processing
└─────────────┬───────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│  AI Recommendation Microservice │  ──► Consumes event with Resilience4j circuit breaker
└─────────────┬───────────────────┘
              │
      ┌───────┴───────────────────────────┐
      ▼                                   ▼
┌───────────────────────────┐   ┌───────────────────────────┐
│  Vector Similarity Search │   │ Google Gemini Vision API  │
│  (PostgreSQL pgvector)    │   │ (Multimodal Analysis)     │
└─────────────┬─────────────┘   └─────────────┬─────────────┘
              │                               │
              └───────────────┬───────────────┘
                              ▼
              ┌───────────────────────────────┐
              │ Grounded Nutrition & Workout  │
              │ Tailored AI Recommendations   │
              └───────────────┬───────────────┘
                              ▼
              [ Real-Time Insights to Client ]`
        }
      ]
    }
  };

  const projectsData = [
    {
      id: 'askthefile',
      title: 'AskTheFile — Agentic RAG Platform',
      category: 'ai',
      description: 'An enterprise multi-agent LangGraph orchestrator featuring dynamic agent routing and hybrid dense-sparse vector retrieval (Qdrant + BM25).',
      techStack: ['Python', 'LangGraph', 'Gemini 2.5', 'Qdrant', 'FastAPI', 'Docker'],
      githubLink: 'https://github.com/saiswethandhussa/askthefile-agentic-rag',
      hasArchitecture: true,
      image: null,
      mockupBrand: 'AskTheFile AI',
      mockupHeadline: 'Multi-Agent Enterprise RAG & Hybrid Search',
      mockupButton: 'Agentic RAG Engine'
    },
    {
      id: 'telco-churn',
      title: 'Telco Churn MLOps Pipeline',
      category: 'ai',
      description: 'An automated feature engineering & classification pipeline benchmarked with XGBoost (0.86 ROC-AUC) with MLflow tracking and CI/CD.',
      techStack: ['Python', 'Scikit-Learn', 'MLflow', 'FastAPI', 'Docker', 'Pandas'],
      githubLink: 'https://github.com/saiswethandhussa/telco-churn-mlops',
      hasArchitecture: true,
      image: null,
      mockupBrand: 'Churn MLOps',
      mockupHeadline: 'Production ML Pipeline & Real-Time Inference',
      mockupButton: 'MLflow Model Registry'
    },
    {
      id: 'fitness-tracker',
      title: 'AI-Powered Fitness Tracker',
      category: 'web',
      description: 'A cloud-native Spring Boot microservices backend secured with Keycloak, featuring an event-driven multimodal AI pipeline with RabbitMQ, Gemini Vision, and pgvector RAG.',
      techStack: ['Spring Boot', 'React.js', 'Keycloak', 'RabbitMQ', 'PostgreSQL', 'Gemini API'],
      githubLink: 'https://github.com/saiswethandhussa/Ai--fitness',
      hasArchitecture: true,
      image: null,
      mockupBrand: 'FitAI Tracker',
      mockupHeadline: 'Multimodal AI Fitness & Microservices Pipeline',
      mockupButton: 'Gemini Vision AI'
    },
    {
      id: 'hms',
      title: 'Hospital Management System',
      category: 'web',
      description: 'A comprehensive role-based healthcare portal streamlining doctor appointments, patient records, and secure Razorpay payments.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'Tailwind CSS'],
      githubLink: 'https://github.com/saiswethandhussa/prescripto',
      liveLink: 'https://prescripto-frontend-caqq.onrender.com',
      hasArchitecture: false,
      image: prescriptoImg,
      mockupBrand: 'Prescripto',
      mockupHeadline: 'Your Complete Healthcare & Appointment Portal',
      mockupButton: 'Book Doctor'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  const activeProjectArch = selectedArchProject ? architectureData[selectedArchProject.id] : null;

  return (
    <section id="projects" className="projects-section section">
      <div className="projects-container container">
        <h2 className="section-title">
          My <span className="title-highlight">Projects</span>
        </h2>

        {/* Category Filter Tabs */}
        <div className="projects-filter-tabs">
          <button 
            className={`filter-tab-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects ({projectsData.length})
          </button>
          <button 
            className={`filter-tab-btn ${activeFilter === 'ai' ? 'active' : ''}`}
            onClick={() => setActiveFilter('ai')}
          >
            AI & Data Science ({projectsData.filter(p => p.category === 'ai').length})
          </button>
          <button 
            className={`filter-tab-btn ${activeFilter === 'web' ? 'active' : ''}`}
            onClick={() => setActiveFilter('web')}
          >
            Full Stack & Backend ({projectsData.filter(p => p.category === 'web').length})
          </button>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-grid-card glass-card">
              {/* Top Mockup / Image Banner */}
              <div className="project-banner">
                {project.image ? (
                  <div className="banner-image-wrapper">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="project-banner-img"
                    />
                  </div>
                ) : (
                  <div className="ai-banner-content">
                    <div className="banner-dots">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>
                    <div className="banner-content">
                      <span className="banner-logo-badge">{project.mockupBrand}</span>
                      <h4 className="banner-headline">{project.mockupHeadline}</h4>
                      <span className="banner-mini-btn">{project.mockupButton}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Card Details */}
              <div className="project-card-body">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-summary">{project.description}</p>
                
                <div className="project-tech-tags">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="project-tag-pill">{tech}</span>
                  ))}
                </div>

                <div className="project-btn-actions">
                  {project.hasArchitecture ? (
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedArchProject(project);
                        setActiveArchTab('system');
                      }}
                      className="btn-card-live btn-open-arch"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                        <polyline points="2 17 12 22 22 17"></polyline>
                        <polyline points="2 12 12 17 22 12"></polyline>
                      </svg>
                      <span>Architecture</span>
                    </button>
                  ) : (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-card-live"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      <span>Live</span>
                    </a>
                  )}
                  
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-card-code"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture Diagrams Modal Mounted to Body */}
      {selectedArchProject && activeProjectArch && typeof document !== 'undefined' && createPortal(
        <div className="arch-modal-overlay" onClick={() => setSelectedArchProject(null)}>
          <div className="arch-modal-box glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="arch-modal-header">
              <div className="arch-header-text">
                <span className="arch-badge">🏗️ Architecture Overview</span>
                <h3 className="arch-modal-title">{activeProjectArch.title}</h3>
              </div>
              <button 
                className="arch-close-btn" 
                onClick={() => setSelectedArchProject(null)}
                aria-label="Close Architecture Modal"
              >
                ✕
              </button>
            </div>

            {/* Architecture Tabs */}
            {activeProjectArch.tabs.length > 1 && (
              <div className="arch-tabs-nav">
                {activeProjectArch.tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`arch-tab-btn ${activeArchTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveArchTab(tab.id)}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
            )}

            {/* Active Tab Content */}
            {activeProjectArch.tabs.map((tab) => {
              if (activeProjectArch.tabs.length > 1 && activeArchTab !== tab.id) return null;
              return (
                <div key={tab.id} className="arch-tab-body">
                  <p className="arch-tab-desc">{tab.description}</p>
                  <div className="arch-diagram-wrapper">
                    <pre className="arch-diagram-code">
                      <code>{tab.diagram}</code>
                    </pre>
                  </div>
                </div>
              );
            })}

            <div className="arch-modal-footer">
              <a 
                href={selectedArchProject.githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-card-code arch-github-link"
              >
                <span>View GitHub Repository</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
              <button 
                className="btn-card-live arch-done-btn"
                onClick={() => setSelectedArchProject(null)}
              >
                Close Architecture
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
