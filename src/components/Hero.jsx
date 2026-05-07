import React, { useState } from 'react';
import QuotePopup from './QuotePopup';
import { useSiteData } from '../hooks/useSiteData';
import './Hero.css';

function Hero() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { siteData } = useSiteData();
  const { hero } = siteData;

  return (
    <>
      <section 
        className="hero-section" 
        style={{ backgroundImage: `linear-gradient(rgba(140, 147, 161, 0.4), rgba(140, 147, 161, 0.4)), url(${hero.bgImage})` }}
      >
        <div className="hero-content">
          <div className="container hero-content-inner">
            <h1 className="hero-title">{hero.title}</h1>
            <p className="hero-subtitle">
              {hero.subtitle}
            </p>
            
            <div className="hero-buttons">
              <button onClick={() => setIsPopupOpen(true)} className="hero-btn border-none cursor-pointer">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
                Get a Quick Quote
              </button>
              <a href="https://www.sinteredfilter.net/wp-content/uploads/2023/02/BLUE-Catalogue-2023.pdf" className="hero-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                Download Catalogue
              </a>
            </div>
          </div>
        </div>

        <div className="hero-stats">
          <div className="container hero-stats-inner">
            
            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                  <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                </svg>
              </div>
              <div className="stat-value">{hero.stats[0].value}</div>
              <div className="stat-label">{hero.stats[0].label}</div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                  <path d="M3 4c0-.55.45-1 1-1h16c.55 0 1 .45 1 1 0 .25-.1.5-.29.71L14 12.59V20c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-7.41L3.29 4.71C3.1 4.5 3 4.25 3 4z"/>
                </svg>
              </div>
              <div className="stat-value">{hero.stats[1].value}</div>
              <div className="stat-label">{hero.stats[1].label}</div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                  <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>
                </svg>
              </div>
              <div className="stat-value">{hero.stats[2].value}</div>
              <div className="stat-label">{hero.stats[2].label}</div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                  <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.5 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                </svg>
              </div>
              <div className="stat-value">{hero.stats[3].value}</div>
              <div className="stat-label">{hero.stats[3].label}</div>
            </div>

          </div>
        </div>
      </section>
      <QuotePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}

export default Hero;
