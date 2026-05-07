import React from 'react';
import BottomCTA from './BottomCTA';
import './Contact.css'; // Reuse form styles
import './Quote.css';

function Quote() {
  return (
    <div className="quote-page bg-light">
      <div className="container quote-container">
        <div className="quote-form-card">
          <h1 className="quote-title">REQUEST A QUOTE</h1>
          <p className="quote-subtitle">
            Hi there, please fill in the below form with your detailed inquiry information, we will reply to you within 24 hours.
          </p>
          <div className="quote-divider"></div>

          <form onSubmit={(e) => e.preventDefault()} className="quote-form">
            <div className="form-row">
              <div className="form-group half">
                <label>Your Name*</label>
                <input type="text" required />
              </div>
              <div className="form-group half">
                <label>Your Email*</label>
                <input type="email" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label>Company Name</label>
                <input type="text" />
              </div>
              <div className="form-group half">
                <label>Phone Number</label>
                <input type="text" />
              </div>
            </div>

            <div className="form-row three-col">
              <div className="form-group third">
                <label>Select Material</label>
                <select>
                  <option>Bronze</option>
                  <option>Stainless Steel</option>
                  <option>Plastic</option>
                  <option>Titanium</option>
                </select>
              </div>
              <div className="form-group third">
                <label>Select Quantity</label>
                <select>
                  <option>Less than 10pcs</option>
                  <option>10 - 100pcs</option>
                  <option>100 - 1000pcs</option>
                  <option>More than 1000pcs</option>
                </select>
              </div>
              <div className="form-group third">
                <label>Select Pore size</label>
                <select>
                  <option>Less than 10um</option>
                  <option>10 - 50um</option>
                  <option>50 - 100um</option>
                  <option>More than 100um</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Your Message</label>
              <textarea rows="6" required></textarea>
            </div>

            <div className="form-group file-upload">
              <label>File Upload</label>
              <input type="file" id="quote-file" />
            </div>

            <div className="cloudflare-mockup" style={{maxWidth: '300px'}}>
              <div className="cf-left">
                <span className="cf-spinner">◌</span> Verifying...
              </div>
              <div className="cf-right">
                <strong style={{color: '#f6821f'}}>cloudflare</strong>
                <span>Privacy • Terms</span>
              </div>
            </div>

            <button type="submit" className="submit-btn">SEND INQUIRY</button>
          </form>
        </div>
      </div>

      <BottomCTA />
    </div>
  );
}

export default Quote;