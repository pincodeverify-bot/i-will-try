import React, { useEffect } from 'react';
import './QuotePopup.css';

function QuotePopup({ isOpen, onClose }) {
  // Close on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  // Prevent scrolling when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <h2 className="popup-title">Get a Quick Quote</h2>
        
        <form className="popup-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <input type="text" placeholder="Your Name*" required />
          </div>
          
          <div className="form-group">
            <input type="email" placeholder="Your Email*" required />
          </div>
          
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5"></textarea>
          </div>
          
          <div className="form-group file-upload">
            <input type="file" id="file-upload" />
          </div>
          
          <button type="submit" className="popup-submit">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}

export default QuotePopup;
