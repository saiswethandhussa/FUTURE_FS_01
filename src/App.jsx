import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CodingAchievements from './components/CodingAchievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-container">
      {/* Dynamic Navigation Header */}
      <Navbar />

      {/* Main Single Page Contents */}
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CodingAchievements />
        <Contact />
      </main>

      {/* Footer Branding */}
      <Footer />
    </div>
  );
}
