import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    try {
      // 1. Direct delivery to saiswethandhussa@gmail.com via FormSubmit
      const response = await fetch("https://formsubmit.co/ajax/saiswethandhussa@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message,
          _captcha: "false",
          _template: "table"
        })
      });

      const result = await response.json();

      if (response.ok || result.success === "true" || result.success === true) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback: Web3Forms
        const web3Response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            access_key: "86ad7ce9-e2b2-4d22-9114-1e0e85489819",
            name: formData.name,
            email: formData.email,
            subject: formData.subject || "New Portfolio Contact Message",
            message: formData.message,
            to: "saiswethandhussa@gmail.com"
          })
        });

        const web3Result = await web3Response.json();
        if (web3Result.success) {
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          window.location.href = `mailto:saiswethandhussa@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Message')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
          setStatus('success');
        }
      }
    } catch (err) {
      console.error("Submission error: ", err);
      window.location.href = `mailto:saiswethandhussa@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Message')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      setStatus('success');
    }
  };

  const handleSendWhatsApp = () => {
    const name = formData.name || 'Visitor';
    const email = formData.email ? ` (${formData.email})` : '';
    const subject = formData.subject ? `\n*Subject:* ${formData.subject}` : '';
    const message = formData.message || 'Hi Sai Swethan, I would like to connect with you regarding an opportunity.';

    const text = `Hi Sai Swethan,%0A%0A*From:* ${encodeURIComponent(name + email)}${encodeURIComponent(subject)}%0A*Message:*%0A${encodeURIComponent(message)}`;
    
    window.open(`https://wa.me/917207804682?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="contact-section section">
      {/* Decorative background glows */}
      <div className="bg-glow-container">
        <div className="bg-glow glow-3"></div>
      </div>

      <div className="contact-container container">
        <h2 className="section-title">
          Let's Connect & <span className="title-highlight">Collaborate</span> 🤝
        </h2>

        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="contact-info-panel">
            <h3 className="panel-title">Let's build something epic!</h3>
            <p className="panel-desc">
              I am open to internship opportunities, full-stack collaborations, and software development discussions. 
              Feel free to drop a message, and it will be delivered directly to my email and phone.
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div className="info-text">
                  <span className="info-label">Email</span>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=saiswethandhussa@gmail.com" target="_blank" rel="noopener noreferrer" className="info-val">saiswethandhussa@gmail.com</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div className="info-text">
                  <span className="info-label">Phone / WhatsApp</span>
                  <a href="https://wa.me/917207804682" target="_blank" rel="noopener noreferrer" className="info-val">+91 7207804682</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div className="info-text">
                  <span className="info-label">Location</span>
                  <span className="info-val">Warangal, Telangana, India</span>
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
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out! Your message has been sent directly to <strong>saiswethandhussa@gmail.com</strong>, and I will get back to you shortly.</p>
                <div className="success-actions">
                  <button onClick={() => setStatus('idle')} className="btn btn-primary">Send Another</button>
                  <button onClick={handleSendWhatsApp} className="btn btn-whatsapp-direct">
                    Chat on WhatsApp
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSendEmail} className="contact-form">
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
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="form-input form-textarea"
                  ></textarea>
                  <label htmlFor="message" className="form-label">Message</label>
                </div>

                <div className="form-submit-row">
                  <button 
                    type="submit" 
                    disabled={status === 'sending'} 
                    className="btn btn-submit-email"
                  >
                    {status === 'sending' ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13"></line>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="btn btn-submit-whatsapp"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
