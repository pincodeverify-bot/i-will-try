import React from 'react';
import { useSiteData } from '../hooks/useSiteData';
import BottomCTA from './BottomCTA';
import './Contact.css';

function Contact() {
  const { siteData } = useSiteData();
  const { contact } = siteData;

  const getIcon = (iconName) => {
    switch(iconName) {
      case 'clock': return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
      case 'map': return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>;
      case 'mail': return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
      default: return null;
    }
  };

  return (
    <div className="contact-page">
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <div className="breadcrumbs">
            <span>Home</span> » <span>Product</span> » <span>Contact</span>
          </div>
        </div>
      </div>

      <div className="container contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <h1 className="contact-title">{contact.title}</h1>
            <p className="contact-desc">{contact.description}</p>
            <div className="contact-divider"></div>
            
            <ul className="contact-details">
              {contact.details.map((detail, i) => (
                <li key={i}>
                  <div className="icon-wrapper">
                    {getIcon(detail.icon)}
                  </div>
                  {detail.type === 'email' ? (
                    <a href={`mailto:${detail.label}`}>{detail.label}</a>
                  ) : (
                    <span>{detail.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="contact-form-card">
            <h2>{contact.formTitle}</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Your Name*" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email*" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5"></textarea>
              </div>
              <div className="form-group file-upload-group">
                <input type="file" id="contact-file" style={{ display: 'none' }} />
                <label htmlFor="contact-file" className="file-label">
                  <span className="file-btn">Choose Files</span>
                  <span className="file-text">No file chosen</span>
                </label>
              </div>
              
              <div className="turnstile-mockup">
                <div className="turnstile-left">
                  <div className="loading-spinner"></div>
                  <span>Verifying..</span>
                </div>
                <div className="turnstile-right">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Cloudflare_Logo.svg" alt="Cloudflare" />
                  <div className="turnstile-links">Privacy • Help</div>
                </div>
              </div>

              <button type="submit" className="send-btn">SEND INQUIRY</button>
            </form>
          </div>
        </div>
      </div>

      <BottomCTA />
    </div>
  );
}

export default Contact;