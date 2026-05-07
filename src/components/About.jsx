import React from 'react';
import { Link } from 'react-router-dom';
import { useSiteData } from '../hooks/useSiteData';
import BottomCTA from './BottomCTA';
import './About.css';

function About() {
  const { siteData } = useSiteData();
  const { about } = siteData;

  const getFeatureIcon = (title) => {
    switch(title.toLowerCase()) {
      case 'history': return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>;
      case 'price': return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>;
      case 'quality': return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>;
      case 'service': return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
      default: return null;
    }
  };

  return (
    <div className="about-page">
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <div className="breadcrumbs">
            <span>Home</span> » <span>Product</span> » <span>About</span>
          </div>
        </div>
      </div>

      <div className="container about-main-content">
        <h1 className="main-heading">{about.mainHeading}</h1>
        
        <div className="intro-text">
          {about.introParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {about.features.map((feature, i) => (
            <div className="feature-item" key={i}>
              <div className="feature-icon">
                {getFeatureIcon(feature.title)}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Middle CTA */}
      <div className="middle-cta">
        <div className="container middle-cta-inner">
          <h2>Why not ask for Similar Sintered Filters?</h2>
          <Link to="/contact-us" className="contact-btn">CONTACT US »</Link>
        </div>
      </div>

      {/* Factory Details */}
      <div className="container factory-section">
        <h2 className="section-title">More Details About BLUE Sintered Filter Factory</h2>
        <div className="section-divider"></div>
        <div className="factory-gallery">
          {about.factoryImages.map((img, index) => (
            <div key={index} className="gallery-item">
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>

      {/* Test Section */}
      <div className="test-section">
        <div className="container test-container">
          <div className="test-content">
            <h2>{about.testSection.title}</h2>
            <ul className="test-list">
              {about.testSection.testList.map((test, i) => (
                <li key={i}>{test}</li>
              ))}
            </ul>
          </div>
          <div className="test-video">
            <div className="video-wrapper">
              <iframe 
                src={about.testSection.videoUrl}
                title="Filtration Rating Test"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <BottomCTA />
    </div>
  );
}

export default About;