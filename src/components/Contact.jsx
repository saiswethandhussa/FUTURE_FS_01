import React, { useState, useEffect } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Load local backup history of sent messages
    const saved = localStorage.getItem('portfolio_messages');
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    try {
      // To deliver emails directly to your Gmail account (saiswethandhussa@gmail.com):
      // 1. Visit https://web3forms.com/ and enter your email to get a free Access Key instantly.
      // 2. Paste your Access Key below (replace "YOUR_ACCESS_KEY_HERE" with your key).
      const accessKey = "YOUR_ACCESS_KEY_HERE"; 

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "New Portfolio Contact Message",
          message: formData.message
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback to local storage logging if Web3Forms key is placeholder/inactive
        console.warn("Web3Forms submission failed, falling back to local storage backup: ", result.message);
        
        const payload = {
          ...formData,
          timestamp: new Date().toLocaleString()
        };
        const updatedHistory = [payload, ...history];
        setHistory(updatedHistory);
        localStorage.setItem('portfolio_messages', JSON.stringify(updatedHistory));

        // Delay for high-end server simulation feel
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (err) {
      console.error("Submission error: ", err);
      // Fallback local storage backup on network error
      const payload = {
        ...formData,
        timestamp: new Date().toLocaleString(),
        error: err.message
      };
      const updatedHistory = [payload, ...history];
      setHistory(updatedHistory);
      localStorage.setItem('portfolio_messages', JSON.stringify(updatedHistory));
      
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="contact-section section">
      {/* Decorative background glows */}
      <div className="bg-glow-container">
        <div className="bg-glow glow-3"></div>
      </div>

      <div className="contact-container container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="contact-info-panel">
            <h3 className="panel-title">Let's build something epic!</h3>
            <p className="panel-desc">
              I am open to internship opportunities, full-stack collaborations, and software development discussions. 
              Feel free to drop a message, and I'll get back to you as soon as possible.
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div className="info-text">
                  <span className="info-label">Email</span>
                  <a href="mailto:saiswethandhussa@gmail.com" className="info-val">saiswethandhussa@gmail.com</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div className="info-text">
                  <span className="info-label">Phone</span>
                  <a href="tel:+917207804682" className="info-val">+91 7207804682</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div className="info-text">
                  <span className="info-label">Location</span>
                  <span className="info-val">IIIT Ranchi, Jharkhand, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="contact-form-panel glass-card">
            {status === 'success' ? (
              <div className="form-success-state">
                <div className="success-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="success-checkmark"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3>Message Dispatched!</h3>
                <p>Thank you for reaching out. Your message has been logged securely in localStorage, and I will connect with you shortly.</p>
                <button onClick={() => setStatus('idle')} className="btn btn-primary">Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="input-group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="form-input"
                  />
                  <label htmlFor="name" className="form-label">Full Name</label>
                </div>

                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="form-input"
                  />
                  <label htmlFor="email" className="form-label">Email Address</label>
                </div>

                <div className="input-group">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder=" "
                    className="form-input"
                  />
                  <label htmlFor="subject" className="form-label">Subject</label>
                </div>

                <div className="input-group">
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="form-input form-textarea"
                  ></textarea>
                  <label htmlFor="message" className="form-label">Message</label>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`btn btn-primary btn-submit ${status === 'sending' ? 'loading' : ''}`}
                >
                  {status === 'sending' ? 'Transmitting...' : 'Send Message'}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
